
(function() {
	if (window.DIAG_HELPER_CONTENT) {
		return;
	}
	window.DIAG_HELPER_CONTENT = true;

	var DIAG_HELPER_FLAG = "diag-helper-installed";

	try {
		document.addEventListener("DOMContentLoaded", function() {
			if (document.head) {
				var meta = document.createElement("meta");
				meta.setAttribute(DIAG_HELPER_FLAG, "true");
				document.head.appendChild(meta);
			}
		});
	} catch (_) { }

	var useNewType = false;
	var OLD_RESPONSE_TYPE = "diag-helper-response";
	var RESPONSE_TYPE = "white-diag-response";

	var send = (function() {
		var port = null;

		return function(request, origin) {
			if (!port) {
				port = chrome.runtime.connect();
				port.onMessage.addListener(function(response) {
					if (useNewType) {
						window.postMessage({
							type: RESPONSE_TYPE,
							response: response
						}, origin);
					} else {
						window.postMessage({
							type: OLD_RESPONSE_TYPE,
							response: response,
							isOldExtension: true
						}, origin);
					}
				});
				port.onDisconnect.addListener(function() {
					port = null;
				});
			}
			port.postMessage(request);
		};
	}());

	var OLD_REQUEST_TYPE = "diag-helper-request";
	var REQUEST_TYPE = "white-diag-request";

	window.addEventListener("message", function(ev) {
		var data = ev.data;
		if (!data) {
			return;
		}

		var type = data.type,
			newType = type === REQUEST_TYPE;
		if (newType || (type === OLD_REQUEST_TYPE)) {
			if (newType) {
				useNewType = true;
			}
			var request = data.request,
				origin = ev.origin || window.location.origin;
				request.origin = origin;
			send(request, origin);
		}
	}, false);
})();
