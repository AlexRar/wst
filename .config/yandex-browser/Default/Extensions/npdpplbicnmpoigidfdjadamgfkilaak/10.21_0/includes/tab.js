(() => {
    var e = {
        2875: (e, n, t) => {
            var r = t(6059).Ay;
            e.exports = r;
        },
        6059: (e, n) => {
            "use strict";
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
            };
            function r(e) {
                return e && "object" === (void 0 === e ? "undefined" : t(e)) && "string" == typeof e.name && "string" == typeof e.message;
            }
            n.Ay = function(e) {
                return r(e) ? Object.assign(new Error, {
                    stack: void 0
                }, e) : e;
            };
        }
    }, n = {};
    function t(r) {
        var s = n[r];
        if (void 0 !== s) return s.exports;
        var o = n[r] = {
            exports: {}
        };
        return e[r](o, o.exports, t), o.exports;
    }
    (() => {
        "use strict";
        const e = class {
            constructor() {
                this.listeners = [];
            }
            addListener(e) {
                -1 === this.listeners.indexOf(e) && this.listeners.push(e);
            }
            dispatch() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                this.listeners.forEach((e => {
                    e(...n);
                }));
            }
            hasListener(e) {
                return -1 !== this.listeners.indexOf(e);
            }
            hasListeners() {
                return this.listeners.length > 0;
            }
            removeListener(e) {
                var n = this.listeners.indexOf(e);
                -1 !== n && this.listeners.splice(n, 1);
            }
        };
        var n = (e => {
            var n = null;
            return (n = () => {}).t = n.log = n.info = n.warn = n.error = n.debug = n, n;
        })("mono");
        const r = class {
            constructor() {
                this.onDestroy = new e, this._lastErrorFired = !1, this._lastError = null;
            }
            get lastError() {
                return this._lastErrorFired = !0, this._lastError;
            }
            set lastError(e) {
                this._lastErrorFired = !e, this._lastError = e;
            }
            clearLastError() {
                this._lastError && !this._lastErrorFired && n.error("Unhandled mono.lastError error:", this.lastError), 
                this._lastError = null;
            }
            unimplemented() {
                throw new Error("Unimplemented");
            }
            destroy() {
                this.onDestroy.dispatch();
            }
        };
        var s = t(2875);
        const o = e => class extends e {
            callFn(e, n) {
                return this.waitPromise({
                    action: "callFn",
                    fn: e,
                    args: n
                });
            }
            waitPromise(e) {
                return new Promise(((n, t) => {
                    this.sendMessage(e, (e => {
                        if (e) {
                            if (e.err) {
                                var r = s(e.err);
                                return t(r);
                            }
                            return n(e.result);
                        }
                        var o = this.lastError || new Error("Unexpected response");
                        return t(o);
                    }));
                }));
            }
        };
        const i = e => class extends e {};
        const a = e => class extends(i(e)){};
        class h extends(a(o(r))){
            initMessages() {
                this.sendMessage = this.transport.sendMessage.bind(this.transport), this.onMessage = {
                    addListener: this.transport.addListener.bind(this.transport),
                    hasListener: this.transport.hasListener.bind(this.transport),
                    hasListeners: this.transport.hasListeners.bind(this.transport),
                    removeListener: this.transport.removeListener.bind(this.transport)
                };
            }
        }
        const c = h;
        const l = class {
            constructor(e) {
                this.mono = e, this.onChanged = {
                    addListener: e => {
                        chrome.storage.onChanged.addListener(e);
                    },
                    hasListener: e => chrome.storage.onChanged.hasListener(e),
                    hasListeners: () => chrome.storage.onChanged.hasListeners(),
                    removeListener: e => {
                        chrome.storage.onChanged.removeListener(e);
                    }
                };
            }
            callback(e, n, t) {
                this.mono.lastError = chrome.runtime.lastError, (t || e) && e(n), this.mono.clearLastError();
            }
            get(e, n) {
                chrome.storage.local.get(e, (e => this.callback(n, e, !0)));
            }
            set(e, n) {
                chrome.storage.local.set(e, (() => this.callback(n)));
            }
            remove(e, n) {
                chrome.storage.local.remove(e, (() => this.callback(n)));
            }
            clear(e) {
                chrome.storage.local.clear((() => this.callback(e)));
            }
        };
        const d = e => class extends e {
            constructor() {
                super(), this.isChrome = !0;
            }
            get isChromeMobile() {
                return /Mobile Safari\/(\d+)|Android (\d+)/.test(navigator.userAgent);
            }
            get isOperaNext() {
                return /OPR\/(\d+)/.test(navigator.userAgent);
            }
        };
        const g = e => class extends(d(e)){};
        class p extends(g(c)){
            constructor() {
                super(), this.initMessages(), this.initStorage(), this.initI18n();
            }
            initI18n() {
                this.i18n = {
                    getMessage: chrome.i18n.getMessage.bind(chrome.i18n)
                };
            }
            initMessages() {
                this.transport = {
                    sendMessage: (e, n) => {
                        n ? chrome.runtime.sendMessage(e, (e => {
                            this.lastError = chrome.runtime.lastError, n(e), this.clearLastError();
                        })) : chrome.runtime.sendMessage(e);
                    },
                    addListener: e => {
                        chrome.runtime.onMessage.addListener(e);
                    },
                    hasListener: e => chrome.runtime.onMessage.hasListener(e),
                    hasListeners: () => chrome.runtime.onMessage.hasListeners(),
                    removeListener: e => {
                        chrome.runtime.onMessage.removeListener(e);
                    }
                }, super.initMessages();
            }
            initStorage() {
                this.storage = new l(this);
            }
        }
        const m = new p;
        var u = [], f = (e, n, t) => Promise.resolve().then((() => !t || t())).then((t => {
            t && (-1 === u.indexOf(e) && u.push(e), n());
        }));
        const b = f;
        const x = function(e) {
            return new Promise((function(n) {
                m.sendMessage(e, n);
            }));
        };
        class v {
            constructor() {
                this.init();
            }
            init() {
                m.storage.get({
                    chameleonOnboarding: 0
                }, (e => {
                    m.storage.set({
                        chameleonOnboarding: Date.now()
                    }), e.chameleonOnboarding + 864e5 > Date.now() || this.addNotification();
                }));
            }
            addNotification() {
                var e = document.createElement("div");
                e.innerHTML = '\n      <div id="ch-onboarding" class="ch-notification">\n        <svg class="ch-logo" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">\n          <path d="M87.17,17.8L48,0L8.83,17.81L4,20v56l40,18.18L48,96l4-1.82L92,76V20L87.17,17.8z M48,8.79L77.5,22.2L48,35.61L18.49,22.2  L48,8.79z M12,70.85V28.03l32,14.54v42.82L12,70.85z M84,70.85L52,85.39V42.57l32-14.54V70.85z"/>\n        </svg>\n        <div class="ch-content">\n          <h3 class="ch-header">Reinstall the SaveFrom Helper Extension</h3>\n          <p class="ch-text">Due to a Google update, the Chameleon extension is no longer supported. To continue using <b>SaveFrom Helper</b>, reinstall it according to the new instructions.</p>\n          <a class="ch-link" href="https://en1.savefrom.net/1/savefrom-helper-for-google-chrome.php" target="_blank">Reinstall SaveFrom Helper</a>\n        </div>\n        <svg class="ch-close" id="ch-close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n          <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </div>\n      <style>\n        #ch-onboarding.ch-notification {\n          position: fixed;\n          top: 10px;\n          right: 80px;\n          display: flex;\n          background-color: white;\n          border-radius: 12px;\n          z-index: 10000;\n          padding: 20px;\n          border: 1px solid #bababa;\n          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n        }\n        #ch-onboarding .ch-logo {\n          margin-right: 20px;\n          width: 44px;\n          height: 44px;\n        }\n        #ch-onboarding .ch-content {\n          max-width: 330px;\n        }\n        #ch-onboarding .ch-header {\n          font-family: Inter;\n          font-size: 16px;\n          font-weight: 600;\n          line-height: 1.2;\n          text-align: left;\n          margin: 0 !important;\n        }\n        #ch-onboarding .ch-text {\n          font-family: Inter;\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.2;\n          text-align: left;\n          margin: 16px 0;\n          color: black;\n        }\n        #ch-onboarding .ch-sf {\n          font-weight: bold;\n        }\n        #ch-onboarding .ch-link {\n          display: inline-block;\n          padding: 6px 20px 6px 20px;\n          border-radius: 20px;\n          font-family: Roboto;\n          font-size: 18px;\n          font-weight: 500;\n          line-height: 1.2;\n          text-align: center;\n          background-color: #0957D0;\n          color: white !important;\n          text-decoration: none;\n        }\n        #ch-onboarding .ch-close {\n          margin-left: 20px;\n          cursor: pointer;\n          width: 24px;\n          height: 24px;\n        }\n      </style>\n    ', 
                document.body.appendChild(e), document.getElementById("ch-close").onclick = () => {
                    e.remove();
                };
            }
        }
        b("tab", (() => {
            m.sendMessage({
                action: "openPage"
            }), x({
                action: "getHelperName"
            }).then((e => {
                if (console.debug("browser:", e), "chameleon" === e) return new v;
            }));
        }));
    })();
})();