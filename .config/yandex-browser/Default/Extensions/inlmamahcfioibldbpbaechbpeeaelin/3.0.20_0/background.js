
var manifest = chrome.runtime.getManifest(),
	info = {
		id: chrome.runtime.id,
		version: manifest.version
	},
	matchesRE = null;

(function() {
	var urlsRE = [],
		parse = new RegExp("^(\\*|http|https)\\:\\/\\/(\\*)?\\.?([^\\*\\/]+)\\/(.*)", "i");
	
	function getUrlRE(res) {
		var acc = (res[1] == "*" ? "(http|https)" : res[1]);
		acc += "\\:\\/\\/";
		if (res[2]) {
			acc += "[^\\/]*.?";
		}
		acc += res[3] + "(\\:\\d+)?";
		acc += (res[4] == "*" ? "($|\\/.*)" : "\\/" + res[4]);
		return acc;
	}
	
	manifest.content_scripts[0].matches.forEach(function(mask) {
		var res = parse.exec(mask);
		if (res && (res.length > 4)) {
			urlsRE.push(getUrlRE(res));
		} else {
			console.log("init matchesRE: can't parse " + mask);
		}
	});
	
	matchesRE = new RegExp("(" + urlsRE.join("|") + ")", "i");
})();

function checkAccess(origin) {
	try {
		return matchesRE && matchesRE.test(origin);
	} catch(e) {
		return false;
	}
}

function Session(port) {
	var nativePort = null,
		originChecked = false,
		hasAccess = false;

	function toPage(message) {
		port.postMessage(message);
	}
	
	function onDisconnect() {
		var lastError = chrome.runtime.lastError;
		var message = (lastError !== null) ? lastError.message : "disconnect from native messaging host";
		toPage({
			type: "DisconnectNativePort",
			message: message
		});
		nativePort = null;
	}

	port.onMessage.addListener(function send(request) {
		if (!originChecked) {
			originChecked = true;
			hasAccess = checkAccess(request.origin);
		}
		if (!hasAccess) {
			request.type = "NativeClientHasNotAccess";
			request.kdError = 5;
			toPage(request);
			return;
		}
		try {
			var cmd = request.cmd;
			if (cmd < 0) {
				request.type = "Control";
				if (cmd == -1) { // Info
					request.result = info;
					toPage(request);
				} else if (cmd == -2) { // Disconnect
					nativePort.disconnect();
					nativePort = null;
					request.result = true;
					toPage(request);
					try {
						port.disconnect();
						port = null;
					} catch(e) { }
				} else if (cmd == -7) { // Uninstall
					if (!request.args || (request.args.extensionId !== chrome.runtime.id)) {
						request.result = info;
						request.type = "ExtensionUninstallSelfDenied";
						request.kdError = 5;
						toPage(request);
						return;
					}
					nativePort.disconnect();
					nativePort = null;
					chrome.management.uninstallSelf();
					request.result = true;
					toPage(request);
					try {
						port.disconnect();
						port = null;
					} catch(e) { }
				}
				return;
			}
			if (!nativePort) {
				nativePort = chrome.runtime.connectNative('kd.nc');
				nativePort.onMessage.addListener(toPage);
				nativePort.onDisconnect.addListener(onDisconnect);
			}
			nativePort.postMessage(request);
		} catch (ex) {
			request.type = "NativePortConnectError";
			request.errorMessage = ex.message && ex;
			request.kdError  = ex.number;
			var lastError = chrome.runtime.lastError;
			if (lastError) {
				request.errorMessage += ' (' + lastError.message + ')';
			}
			toPage(request);
		}
	});
	
	port.onDisconnect.addListener(function close() {
		if (nativePort !== null) {
			try {
				nativePort.disconnect();
			} catch (err) { }
		}
	});
}

chrome.runtime.onConnect.addListener(Session);

function reloadContentScripts() {
	var scripts = manifest.content_scripts[0].js;

	chrome.tabs.query(
		{},
		function(tabs) {
			tabs.forEach(function(tab) {
				if ((tab.status == "unloaded") || /^chrome:/.test(tab.url)) {
					return;
				}
				chrome.scripting.executeScript(
					{
						target: {
							tabId: tab.id,
							allFrames: true,
						},
						files: scripts,
					},
					function(_) {
						const lastErr = chrome.runtime.lastError;
						if (lastErr) {
							console.log("tab: " + tab.id + " lastError: " + JSON.stringify(lastErr));
						}
					}
				);
			});
		}
	);
}

function closeWebStorePage() {
	chrome.tabs.query(
		{url: [
			"https://chromewebstore.google.com/detail/*" + chrome.runtime.id + "*",
			'https://chrome.google.com/webstore/*/' + chrome.runtime.id + '*'
			]},
		function(tabs){
			tabs.forEach(function(tab){
				chrome.tabs.remove(tab.id);
			});
		});
}

chrome.runtime.onInstalled.addListener(function(details) {
	var UPDATE = chrome.runtime.OnInstalledReason.UPDATE;
	if (!details || details.reason !== UPDATE) {
		reloadContentScripts();
		closeWebStorePage();
	}
});
