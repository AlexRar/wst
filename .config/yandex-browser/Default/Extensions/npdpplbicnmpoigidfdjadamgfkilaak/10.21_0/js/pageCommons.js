!window.savefromPageWebpackJsonp && (self.savefromPageWebpackJsonp = self.savefromPageWebpackJsonp || []).push([ [ 324 ], {
    894: (e, t, r) => {
        "use strict";
        r.d(t, {
            A: () => b
        });
        const n = class {
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
            callback(e, t, r) {
                this.mono.lastError = chrome.runtime.lastError, (r || e) && e(t), this.mono.clearLastError();
            }
            get(e, t) {
                chrome.storage.local.get(e, (e => this.callback(t, e, !0)));
            }
            set(e, t) {
                chrome.storage.local.set(e, (() => this.callback(t)));
            }
            remove(e, t) {
                chrome.storage.local.remove(e, (() => this.callback(t)));
            }
            clear(e) {
                chrome.storage.local.clear((() => this.callback(e)));
            }
        };
        const s = e => class extends e {
            initI18n() {
                this.i18n = {
                    getMessage: chrome.i18n.getMessage.bind(chrome.i18n)
                };
            }
            initMessages() {
                this.transport = {
                    sendMessage: (e, t) => {
                        t ? chrome.runtime.sendMessage(e, (e => {
                            this.lastError = chrome.runtime.lastError, t(e), this.clearLastError();
                        })) : chrome.runtime.sendMessage(e);
                    },
                    sendMessageToActiveTab: (e, t) => {
                        chrome.tabs.query({
                            active: !0,
                            currentWindow: !0
                        }, (r => {
                            var n = r[0];
                            n && n.id >= 0 ? t ? chrome.tabs.sendMessage(n.id, e, (e => {
                                this.lastError = chrome.runtime.lastError, t(e), this.clearLastError();
                            })) : chrome.tabs.sendMessage(n.id, e) : (this.lastError = new Error("Active tab is not found"), 
                            t && t(), this.clearLastError());
                        }));
                    },
                    addListener: e => {
                        chrome.runtime.onMessage.addListener(e);
                    },
                    hasListener: e => chrome.runtime.onMessage.hasListener(e),
                    hasListeners: () => chrome.runtime.onMessage.hasListeners(),
                    removeListener: e => {
                        chrome.runtime.onMessage.removeListener(e);
                    },
                    onBeforeRequest: (e, t, r) => {
                        chrome.webRequest.onBeforeRequest.addListener(e, t, r);
                    },
                    removeOnBeforeRequestListener: e => {
                        chrome.webRequest.onBeforeRequest.removeListener(e);
                    }
                }, super.initMessages();
            }
            initStorage() {
                this.storage = new n(this);
            }
        };
        const o = class {
            constructor() {
                this.listeners = [];
            }
            addListener(e) {
                -1 === this.listeners.indexOf(e) && this.listeners.push(e);
            }
            dispatch() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                this.listeners.forEach((e => {
                    e(...t);
                }));
            }
            hasListener(e) {
                return -1 !== this.listeners.indexOf(e);
            }
            hasListeners() {
                return this.listeners.length > 0;
            }
            removeListener(e) {
                var t = this.listeners.indexOf(e);
                -1 !== t && this.listeners.splice(t, 1);
            }
        };
        var a = (e => {
            var t = null;
            return (t = () => {}).t = t.log = t.info = t.warn = t.error = t.debug = t, t;
        })("mono");
        const i = class {
            constructor() {
                this.onDestroy = new o, this._lastErrorFired = !1, this._lastError = null;
            }
            get lastError() {
                return this._lastErrorFired = !0, this._lastError;
            }
            set lastError(e) {
                this._lastErrorFired = !e, this._lastError = e;
            }
            clearLastError() {
                this._lastError && !this._lastErrorFired && a.error("Unhandled mono.lastError error:", this.lastError), 
                this._lastError = null;
            }
            unimplemented() {
                throw new Error("Unimplemented");
            }
            destroy() {
                this.onDestroy.dispatch();
            }
        };
        const c = e => class extends e {
            initMessages() {
                this.sendMessage = this.transport.sendMessage.bind(this.transport), this.sendMessageToActiveTab = this.transport.sendMessageToActiveTab.bind(this.transport), 
                this.onMessage = {
                    addListener: this.transport.addListener.bind(this.transport),
                    hasListener: this.transport.hasListener.bind(this.transport),
                    hasListeners: this.transport.hasListeners.bind(this.transport),
                    removeListener: this.transport.removeListener.bind(this.transport)
                }, this.transport.onBeforeRequest && this.transport.removeOnBeforeRequestListener && (this.onBeforeRequest = this.transport.onBeforeRequest.bind(this.transport), 
                this.removeOnBeforeRequestListener = this.transport.removeOnBeforeRequestListener.bind(this.transport));
            }
        };
        var l = r(875);
        const u = e => class extends e {
            callFn(e, t) {
                return this.waitPromise({
                    action: "callFn",
                    fn: e,
                    args: t
                });
            }
            waitPromise(e) {
                return new Promise(((t, r) => {
                    this.sendMessage(e, (e => {
                        if (e) {
                            if (e.err) {
                                var n = l(e.err);
                                return r(n);
                            }
                            return t(e.result);
                        }
                        var s = this.lastError || new Error("Unexpected response");
                        return r(s);
                    }));
                }));
            }
        };
        const h = e => class extends e {};
        const d = e => class extends(h(e)){};
        class f extends(d(u(c(i)))){}
        const v = f;
        const m = e => class extends e {
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
        const p = e => class extends(m(e)){};
        class g extends(p(s(v))){
            constructor() {
                super(), this.initMessages(), this.initStorage(), this.initI18n();
            }
        }
        const b = new g;
    },
    190: (e, t, r) => {
        "use strict";
        r.d(t, {
            A: () => l
        });
        var n = {
            on: function(e, t, r, n) {
                e.addEventListener(t, r, n);
            },
            off: function(e, t, r, n) {
                e.removeEventListener(t, r, n);
            },
            one: function(e, t, r, s) {
                var o = [ "oneFn", t, !!s ].join("_"), a = r[o];
                a || (r[o] = a = function(e) {
                    n.off(this, t, a, s), r.apply(this, arguments);
                }), n.on(e, t, a, s), e = null;
            }
        }, s = "sf-removed-" + Math.floor(1e6 * Math.random()), o = "sf-notify-on-remove-" + Math.floor(1e6 * Math.random());
        n.onRemoveEventName = s, n.onRemoveClassName = o, n.onRemoveListener = function(e) {
            n.trigger(e, s, {
                cancelable: !0,
                bubbles: !1
            });
        }, n.onRemoveEvent = (e, t) => {
            e.classList.add(o), e.addEventListener(s, t);
        }, n.offRemoveEvent = function(e, t) {
            e.removeEventListener(n.onRemoveEventName, t);
        }, n.trigger = function(e, t, r) {
            void 0 === r && (r = {}), void 0 === r.bubbles && (r.bubbles = !1), void 0 === r.cancelable && (r.cancelable = !1);
            var n = null;
            n = "function" == typeof MouseEvent && -1 !== [ "click" ].indexOf(t) ? new MouseEvent(t, r) : new CustomEvent(t, r), 
            e.dispatchEvent(n);
        };
        const a = n;
        var i = {
            create: function(e, t) {
                var r, n;
                for (var s in r = "object" != typeof e ? document.createElement(e) : e, t) {
                    var o = t[s];
                    (n = c[s]) ? n(r, o) : r[s] = o;
                }
                return r;
            }
        }, c = {
            text: function(e, t) {
                e.textContent = t;
            },
            data: function(e, t) {
                for (var r in t) e.dataset[r] = t[r];
            },
            class: function(e, t) {
                if (Array.isArray(t)) for (var r = 0, n = t.length; r < n; r++) e.classList.add(t[r]); else e.setAttribute("class", t);
            },
            style: function(e, t) {
                if ("object" == typeof t) for (var r in t) {
                    var n = r;
                    "float" === n && (n = "cssFloat");
                    var s = t[r];
                    if (Array.isArray(s)) for (var o = 0, a = s.length; o < a; o++) e.style[n] = s[o]; else e.style[n] = s;
                } else e.setAttribute("style", t);
            },
            append: function(e, t) {
                Array.isArray(t) || (t = [ t ]);
                for (var r = 0, n = t.length; r < n; r++) {
                    var s = t[r];
                    (s || 0 === s) && ("object" != typeof s && (s = document.createTextNode(s)), e.appendChild(s));
                }
            },
            on: function(e, t) {
                "object" != typeof t[0] && (t = [ t ]);
                for (var r = 0, n = t.length; r < n; r++) {
                    var s = t[r];
                    Array.isArray(s) && a.on.apply(a, [ e ].concat(s));
                }
            },
            one: function(e, t) {
                "object" != typeof t[0] && (t = [ t ]);
                for (var r = 0, n = t.length; r < n; r++) {
                    var s = t[r];
                    Array.isArray(s) && a.one.apply(a, [ e ].concat(s));
                }
            },
            onCreate: function(e, t) {
                t.call(e, e);
            },
            attr: function(e, t) {
                var r, n;
                for (r in t) n = t[r], e.setAttribute(r, n);
            }
        };
        const l = i;
    },
    314: e => {
        "use strict";
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map((function(t) {
                    var r = "", n = void 0 !== t[5];
                    return t[4] && (r += "@supports (".concat(t[4], ") {")), t[2] && (r += "@media ".concat(t[2], " {")), 
                    n && (r += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), r += e(t), 
                    n && (r += "}"), t[2] && (r += "}"), t[4] && (r += "}"), r;
                })).join("");
            }, t.i = function(e, r, n, s, o) {
                "string" == typeof e && (e = [ [ null, e, void 0 ] ]);
                var a = {};
                if (n) for (var i = 0; i < this.length; i++) {
                    var c = this[i][0];
                    null != c && (a[c] = !0);
                }
                for (var l = 0; l < e.length; l++) {
                    var u = [].concat(e[l]);
                    n && a[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), 
                    u[5] = o), r && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), 
                    u[2] = r) : u[2] = r), s && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), 
                    u[4] = s) : u[4] = "".concat(s)), t.push(u));
                }
            }, t;
        };
    },
    601: e => {
        "use strict";
        e.exports = function(e) {
            return e[1];
        };
    },
    875: (e, t, r) => {
        var n = r(59).Ay;
        e.exports = n;
    },
    59: (e, t) => {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
        };
        function n(e) {
            return e && "object" === (void 0 === e ? "undefined" : r(e)) && "string" == typeof e.name && "string" == typeof e.message;
        }
        t.Ay = function(e) {
            return n(e) ? Object.assign(new Error, {
                stack: void 0
            }, e) : e;
        };
    },
    72: (e, t, r) => {
        "use strict";
        var n, s = function() {
            return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), 
            n;
        }, o = function() {
            var e = {};
            return function(t) {
                if (void 0 === e[t]) {
                    var r = document.querySelector(t);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head;
                    } catch (e) {
                        r = null;
                    }
                    e[t] = r;
                }
                return e[t];
            };
        }(), a = [];
        function i(e) {
            for (var t = -1, r = 0; r < a.length; r++) if (a[r].identifier === e) {
                t = r;
                break;
            }
            return t;
        }
        function c(e, t) {
            for (var r = {}, n = [], s = 0; s < e.length; s++) {
                var o = e[s], c = t.base ? o[0] + t.base : o[0], l = r[c] || 0, u = "".concat(c, " ").concat(l);
                r[c] = l + 1;
                var h = i(u), d = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
                -1 !== h ? (a[h].references++, a[h].updater(d)) : a.push({
                    identifier: u,
                    updater: p(d, t),
                    references: 1
                }), n.push(u);
            }
            return n;
        }
        function l(e) {
            var t = document.createElement("style"), n = e.attributes || {};
            if (void 0 === n.nonce) {
                var s = r.nc;
                s && (n.nonce = s);
            }
            if (Object.keys(n).forEach((function(e) {
                t.setAttribute(e, n[e]);
            })), "function" == typeof e.insert) e.insert(t); else {
                var a = o(e.insert || "head");
                if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(t);
            }
            return t;
        }
        var u, h = (u = [], function(e, t) {
            return u[e] = t, u.filter(Boolean).join("\n");
        });
        function d(e, t, r, n) {
            var s = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
            if (e.styleSheet) e.styleSheet.cssText = h(t, s); else {
                var o = document.createTextNode(s), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
            }
        }
        function f(e, t, r) {
            var n = r.css, s = r.media, o = r.sourceMap;
            if (s ? e.setAttribute("media", s) : e.removeAttribute("media"), o && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), 
            e.styleSheet) e.styleSheet.cssText = n; else {
                for (;e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
            }
        }
        var v = null, m = 0;
        function p(e, t) {
            var r, n, s;
            if (t.singleton) {
                var o = m++;
                r = v || (v = l(t)), n = d.bind(null, r, o, !1), s = d.bind(null, r, o, !0);
            } else r = l(t), n = f.bind(null, r, t), s = function() {
                !function(e) {
                    if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e);
                }(r);
            };
            return n(e), function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    n(e = t);
                } else s();
            };
        }
        e.exports = function(e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = s());
            var r = c(e = e || [], t);
            return function(e) {
                if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                    for (var n = 0; n < r.length; n++) {
                        var s = i(r[n]);
                        a[s].references--;
                    }
                    for (var o = c(e, t), l = 0; l < r.length; l++) {
                        var u = i(r[l]);
                        0 === a[u].references && (a[u].updater(), a.splice(u, 1));
                    }
                    r = o;
                }
            };
        };
    }
} ]);