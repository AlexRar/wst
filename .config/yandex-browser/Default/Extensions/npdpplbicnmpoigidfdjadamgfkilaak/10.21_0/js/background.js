/*! For license information please see background.js.LICENSE.txt */
(() => {
    var e = {
        969: e => {
            function t() {}
            e.exports = function(e, r, n) {
                var o = !1;
                return n = n || t, i.count = e, 0 === e ? r() : i;
                function i(e, t) {
                    if (i.count <= 0) throw new Error("after called too many times");
                    --i.count, e ? (o = !0, r(e), r = n) : 0 !== i.count || o || r(null, t);
                }
            };
        },
        3344: e => {
            e.exports = function(e, t, r) {
                var n = e.byteLength;
                if (t = t || 0, r = r || n, e.slice) return e.slice(t, r);
                if (t < 0 && (t += n), r < 0 && (r += n), r > n && (r = n), t >= n || t >= r || 0 === n) return new ArrayBuffer(0);
                for (var o = new Uint8Array(e), i = new Uint8Array(r - t), s = t, a = 0; s < r; s++, 
                a++) i[a] = o[s];
                return i.buffer;
            };
        },
        301: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = e => {
                e.errorCatch = {
                    onError: function(t) {
                        var r = t.filename, n = t.message;
                        r && n && (r = (r = String(r).match(/\/([^\/]+)$/)) && r[1]) && (t.lineno && (r += ":" + t.lineno), 
                        "_generated_background_page.html:1" !== r && e.actionList.trackError({
                            desc: [ r, n ].join(" ")
                        }));
                    },
                    enable: function() {
                        window.addEventListener && window.addEventListener("error", this.onError);
                    },
                    disable: function() {
                        window.removeEventListener && window.removeEventListener("error", this.onError);
                    }
                }, e.errorCatch.enable();
            };
        },
        3059: e => {
            function t(e) {
                e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, 
                this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
            }
            e.exports = t, t.prototype.duration = function() {
                var e = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var t = Math.random(), r = Math.floor(t * this.jitter * e);
                    e = 1 & Math.floor(10 * t) ? e + r : e - r;
                }
                return 0 | Math.min(e, this.max);
            }, t.prototype.reset = function() {
                this.attempts = 0;
            }, t.prototype.setMin = function(e) {
                this.ms = e;
            }, t.prototype.setMax = function(e) {
                this.max = e;
            }, t.prototype.setJitter = function(e) {
                this.jitter = e;
            };
        },
        3371: (e, t) => {
            !function(e) {
                "use strict";
                t.encode = function(t) {
                    var r, n = new Uint8Array(t), o = n.length, i = "";
                    for (r = 0; r < o; r += 3) i += e[n[r] >> 2], i += e[(3 & n[r]) << 4 | n[r + 1] >> 4], 
                    i += e[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += e[63 & n[r + 2]];
                    return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), 
                    i;
                }, t.decode = function(t) {
                    var r, n, o, i, s, a = .75 * t.length, c = t.length, u = 0;
                    "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
                    var l = new ArrayBuffer(a), p = new Uint8Array(l);
                    for (r = 0; r < c; r += 4) n = e.indexOf(t[r]), o = e.indexOf(t[r + 1]), i = e.indexOf(t[r + 2]), 
                    s = e.indexOf(t[r + 3]), p[u++] = n << 2 | o >> 4, p[u++] = (15 & o) << 4 | i >> 2, 
                    p[u++] = (3 & i) << 6 | 63 & s;
                    return l;
                };
            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
        },
        3118: e => {
            var t = void 0 !== t ? t : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder, r = function() {
                try {
                    return 2 === new Blob([ "hi" ]).size;
                } catch (e) {
                    return !1;
                }
            }(), n = r && function() {
                try {
                    return 2 === new Blob([ new Uint8Array([ 1, 2 ]) ]).size;
                } catch (e) {
                    return !1;
                }
            }(), o = t && t.prototype.append && t.prototype.getBlob;
            function i(e) {
                return e.map((function(e) {
                    if (e.buffer instanceof ArrayBuffer) {
                        var t = e.buffer;
                        if (e.byteLength !== t.byteLength) {
                            var r = new Uint8Array(e.byteLength);
                            r.set(new Uint8Array(t, e.byteOffset, e.byteLength)), t = r.buffer;
                        }
                        return t;
                    }
                    return e;
                }));
            }
            function s(e, r) {
                r = r || {};
                var n = new t;
                return i(e).forEach((function(e) {
                    n.append(e);
                })), r.type ? n.getBlob(r.type) : n.getBlob();
            }
            function a(e, t) {
                return new Blob(i(e), t || {});
            }
            "undefined" != typeof Blob && (s.prototype = Blob.prototype, a.prototype = Blob.prototype), 
            e.exports = r ? n ? Blob : a : o ? s : void 0;
        },
        8075: (e, t, r) => {
            "use strict";
            var n = r(453), o = r(487), i = o(n("String.prototype.indexOf"));
            e.exports = function(e, t) {
                var r = n(e, !!t);
                return "function" == typeof r && i(e, ".prototype.") > -1 ? o(r) : r;
            };
        },
        487: (e, t, r) => {
            "use strict";
            var n = r(6743), o = r(453), i = r(6897), s = r(9675), a = o("%Function.prototype.apply%"), c = o("%Function.prototype.call%"), u = o("%Reflect.apply%", !0) || n.call(c, a), l = r(655), p = o("%Math.max%");
            e.exports = function(e) {
                if ("function" != typeof e) throw new s("a function is required");
                var t = u(n, c, arguments);
                return i(t, 1 + p(0, e.length - (arguments.length - 1)), !0);
            };
            var f = function() {
                return u(n, a, arguments);
            };
            l ? l(e.exports, "apply", {
                value: f
            }) : e.exports.apply = f;
        },
        6710: (e, t, r) => {
            var n = r(2937).Buffer, o = r(2894), i = r(1737);
            const s = "https://example.org/";
            var a;
            a = "function" == typeof n ? function(e) {
                return n.from(e).toString("base64");
            } : window.btoa.bind(window), e.exports = g;
            var c = {
                Accept: "application/json, application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded"
            }, u = {
                invalid_request: [ "The request is missing a required parameter, includes an", "invalid parameter value, includes a parameter more than", "once, or is otherwise malformed." ].join(" "),
                invalid_client: [ "Client authentication failed (e.g., unknown client, no", "client authentication included, or unsupported", "authentication method)." ].join(" "),
                invalid_grant: [ "The provided authorization grant (e.g., authorization", "code, resource owner credentials) or refresh token is", "invalid, expired, revoked, does not match the redirection", "URI used in the authorization request, or was issued to", "another client." ].join(" "),
                unauthorized_client: [ "The client is not authorized to request an authorization", "code using this method." ].join(" "),
                unsupported_grant_type: [ "The authorization grant type is not supported by the", "authorization server." ].join(" "),
                access_denied: [ "The resource owner or authorization server denied the request." ].join(" "),
                unsupported_response_type: [ "The authorization server does not support obtaining", "an authorization code using this method." ].join(" "),
                invalid_scope: [ "The requested scope is invalid, unknown, or malformed." ].join(" "),
                server_error: [ "The authorization server encountered an unexpected", "condition that prevented it from fulfilling the request.", "(This error code is needed because a 500 Internal Server", "Error HTTP status code cannot be returned to the client", "via an HTTP redirect.)" ].join(" "),
                temporarily_unavailable: [ "The authorization server is currently unable to handle", "the request due to a temporary overloading or maintenance", "of the server." ].join(" ")
            };
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (null == e[r]) throw new TypeError('Expected "' + r + '" to exist');
                }
            }
            function p(e) {
                var t = u[e.error] || e.error_description || e.error;
                if (t) {
                    var r = new Error(t);
                    return r.body = e, r.code = "EAUTH", r;
                }
            }
            function f(e) {
                return Array.isArray(e) ? e.join(" ") : m(e);
            }
            function h(e, t) {
                l(e, "clientId", "authorizationUri");
                const r = {
                    client_id: e.clientId,
                    redirect_uri: e.redirectUri,
                    response_type: t,
                    state: e.state
                };
                void 0 !== e.scopes && (r.scope = f(e.scopes));
                const n = e.authorizationUri.includes("?") ? "&" : "?";
                return e.authorizationUri + n + o.stringify(Object.assign(r, e.query));
            }
            function d(e, t) {
                return "Basic " + a(m(e) + ":" + m(t));
            }
            function m(e) {
                return null == e ? "" : String(e);
            }
            function y(e, t) {
                return {
                    url: e.url,
                    method: e.method,
                    body: Object.assign({}, e.body, t.body),
                    query: Object.assign({}, e.query, t.query),
                    headers: Object.assign({}, e.headers, t.headers)
                };
            }
            function g(e, t) {
                this.options = e, this.request = t || i, this.code = new x(this), this.token = new w(this), 
                this.owner = new b(this), this.credentials = new k(this), this.jwt = new C(this);
            }
            function v(e, t) {
                this.client = e, this.data = t, this.tokenType = t.token_type && t.token_type.toLowerCase(), 
                this.accessToken = t.access_token, this.refreshToken = t.refresh_token, this.expiresIn(Number(t.expires_in));
            }
            function b(e) {
                this.client = e;
            }
            function w(e) {
                this.client = e;
            }
            function k(e) {
                this.client = e;
            }
            function x(e) {
                this.client = e;
            }
            function C(e) {
                this.client = e;
            }
            g.Token = v, g.prototype.createToken = function(e, t, r, n) {
                var o = Object.assign({}, n, "string" == typeof e ? {
                    access_token: e
                } : e, "string" == typeof t ? {
                    refresh_token: t
                } : t, "string" == typeof r ? {
                    token_type: r
                } : r);
                return new g.Token(this, o);
            }, g.prototype._request = function(e) {
                var t = e.url, r = o.stringify(e.body), n = o.stringify(e.query);
                return n && (t += (-1 === t.indexOf("?") ? "?" : "&") + n), this.request(e.method, t, r, e.headers).then((function(e) {
                    var t = function(e) {
                        try {
                            return JSON.parse(e);
                        } catch (t) {
                            return o.parse(e);
                        }
                    }(e.body), r = p(t);
                    if (r) return Promise.reject(r);
                    if (e.status < 200 || e.status >= 399) {
                        var n = new Error("HTTP status " + e.status);
                        return n.status = e.status, n.body = e.body, n.code = "ESTATUS", Promise.reject(n);
                    }
                    return t;
                }));
            }, v.prototype.expiresIn = function(e) {
                if ("number" == typeof e) this.expires = new Date, this.expires.setSeconds(this.expires.getSeconds() + e); else {
                    if (!(e instanceof Date)) throw new TypeError("Unknown duration: " + e);
                    this.expires = new Date(e.getTime());
                }
                return this.expires;
            }, v.prototype.sign = function(e) {
                if (!this.accessToken) throw new Error("Unable to sign without access token");
                if (e.headers = e.headers || {}, "bearer" === this.tokenType) e.headers.Authorization = "Bearer " + this.accessToken; else {
                    var t = e.url.split("#"), r = "access_token=" + this.accessToken, n = t[0].replace(/[?&]access_token=[^&#]/, ""), o = t[1] ? "#" + t[1] : "";
                    e.url = n + (n.indexOf("?") > -1 ? "&" : "?") + r + o, e.headers.Pragma = "no-store", 
                    e.headers["Cache-Control"] = "no-store";
                }
                return e;
            }, v.prototype.refresh = function(e) {
                var t = this, r = Object.assign({}, this.client.options, e);
                return this.refreshToken ? this.client._request(y({
                    url: r.accessTokenUri,
                    method: "POST",
                    headers: Object.assign({}, c, {
                        Authorization: d(r.clientId, r.clientSecret)
                    }),
                    body: {
                        refresh_token: this.refreshToken,
                        grant_type: "refresh_token"
                    }
                }, r)).then((function(e) {
                    return t.client.createToken(Object.assign({}, t.data, e));
                })) : Promise.reject(new Error("No refresh token"));
            }, v.prototype.expired = function() {
                return Date.now() > this.expires.getTime();
            }, b.prototype.getToken = function(e, t, r) {
                var n = this, o = Object.assign({}, this.client.options, r);
                const i = {
                    username: e,
                    password: t,
                    grant_type: "password"
                };
                return void 0 !== o.scopes && (i.scope = f(o.scopes)), this.client._request(y({
                    url: o.accessTokenUri,
                    method: "POST",
                    headers: Object.assign({}, c, {
                        Authorization: d(o.clientId, o.clientSecret)
                    }),
                    body: i
                }, o)).then((function(e) {
                    return n.client.createToken(e);
                }));
            }, w.prototype.getUri = function(e) {
                return h(Object.assign({}, this.client.options, e), "token");
            }, w.prototype.getToken = function(e, t) {
                var r = Object.assign({}, this.client.options, t), n = "object" == typeof e ? e : new URL(e, s), i = new URL(r.redirectUri, s);
                if ("string" == typeof n.pathname && n.pathname !== i.pathname) return Promise.reject(new TypeError("Redirected path should match configured path, but got: " + n.pathname));
                if (!n.hash && !n.search) return Promise.reject(new TypeError("Unable to process uri: " + e));
                var a = Object.assign({}, "string" == typeof n.search ? o.parse(n.search.substr(1)) : n.search || {}, "string" == typeof n.hash ? o.parse(n.hash.substr(1)) : n.hash || {}), c = p(a);
                return c ? Promise.reject(c) : null != r.state && a.state !== r.state ? Promise.reject(new TypeError("Invalid state: " + a.state)) : Promise.resolve(this.client.createToken(a));
            }, k.prototype.getToken = function(e) {
                var t = this, r = Object.assign({}, this.client.options, e);
                l(r, "clientId", "clientSecret", "accessTokenUri");
                const n = {
                    grant_type: "client_credentials"
                };
                return void 0 !== r.scopes && (n.scope = f(r.scopes)), this.client._request(y({
                    url: r.accessTokenUri,
                    method: "POST",
                    headers: Object.assign({}, c, {
                        Authorization: d(r.clientId, r.clientSecret)
                    }),
                    body: n
                }, r)).then((function(e) {
                    return t.client.createToken(e);
                }));
            }, x.prototype.getUri = function(e) {
                return h(Object.assign({}, this.client.options, e), "code");
            }, x.prototype.getToken = function(e, t) {
                var r = this, n = Object.assign({}, this.client.options, t);
                l(n, "clientId", "accessTokenUri");
                var i = "object" == typeof e ? e : new URL(e, s);
                if ("string" == typeof n.redirectUri && "string" == typeof i.pathname && i.pathname !== new URL(n.redirectUri, s).pathname) return Promise.reject(new TypeError("Redirected path should match configured path, but got: " + i.pathname));
                if (!i.search || !i.search.substr(1)) return Promise.reject(new TypeError("Unable to process uri: " + e));
                var a = "string" == typeof i.search ? o.parse(i.search.substr(1)) : i.search || {}, u = p(a);
                if (u) return Promise.reject(u);
                if (null != n.state && a.state !== n.state) return Promise.reject(new TypeError("Invalid state: " + a.state));
                if (!a.code) return Promise.reject(new TypeError("Missing code, unable to request token"));
                var f = Object.assign({}, c), h = {
                    code: a.code,
                    grant_type: "authorization_code",
                    redirect_uri: n.redirectUri
                };
                return n.clientSecret ? f.Authorization = d(n.clientId, n.clientSecret) : h.client_id = n.clientId, 
                this.client._request(y({
                    url: n.accessTokenUri,
                    method: "POST",
                    headers: f,
                    body: h
                }, n)).then((function(e) {
                    return r.client.createToken(e);
                }));
            }, C.prototype.getToken = function(e, t) {
                var r = this, n = Object.assign({}, this.client.options, t), o = Object.assign({}, c);
                l(n, "accessTokenUri"), n.clientId && (o.Authorization = d(n.clientId, n.clientSecret));
                const i = {
                    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
                    assertion: e
                };
                return void 0 !== n.scopes && (i.scope = f(n.scopes)), this.client._request(y({
                    url: n.accessTokenUri,
                    method: "POST",
                    headers: o,
                    body: i
                }, n)).then((function(e) {
                    return r.client.createToken(e);
                }));
            };
        },
        1737: e => {
            e.exports = function(e, t, r, n) {
                return new Promise((function(o, i) {
                    var s = new window.XMLHttpRequest;
                    s.open(e, t), s.onload = function() {
                        return o({
                            status: s.status,
                            body: s.responseText
                        });
                    }, s.onerror = s.onabort = function() {
                        return i(new Error(s.statusText || "XHR aborted: " + t));
                    }, Object.keys(n).forEach((function(e) {
                        s.setRequestHeader(e, n[e]);
                    })), s.send(r);
                }));
            };
        },
        8144: e => {
            var t = [].slice;
            e.exports = function(e, r) {
                if ("string" == typeof r && (r = e[r]), "function" != typeof r) throw new Error("bind() requires a function");
                var n = t.call(arguments, 2);
                return function() {
                    return r.apply(e, n.concat(t.call(arguments)));
                };
            };
        },
        5971: e => {
            function t(e) {
                if (e) return function(e) {
                    for (var r in t.prototype) e[r] = t.prototype[r];
                    return e;
                }(e);
            }
            e.exports = t, t.prototype.on = t.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), 
                this;
            }, t.prototype.once = function(e, t) {
                function r() {
                    this.off(e, r), t.apply(this, arguments);
                }
                return r.fn = t, this.on(e, r), this;
            }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
                this;
                var r, n = this._callbacks["$" + e];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var o = 0; o < n.length; o++) if ((r = n[o]) === t || r.fn === t) {
                    n.splice(o, 1);
                    break;
                }
                return 0 === n.length && delete this._callbacks["$" + e], this;
            }, t.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                if (r) {
                    n = 0;
                    for (var o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, t);
                }
                return this;
            }, t.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
            }, t.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length;
            };
        },
        2370: e => {
            e.exports = function(e, t) {
                var r = function() {};
                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e;
            };
        },
        41: (e, t, r) => {
            "use strict";
            var n = r(655), o = r(8068), i = r(9675), s = r(5795);
            e.exports = function(e, t, r) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new i("`obj` must be an object or a function`");
                if ("string" != typeof t && "symbol" != typeof t) throw new i("`property` must be a string or a symbol`");
                if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new i("`nonEnumerable`, if provided, must be a boolean or null");
                if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new i("`nonWritable`, if provided, must be a boolean or null");
                if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new i("`nonConfigurable`, if provided, must be a boolean or null");
                if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new i("`loose`, if provided, must be a boolean");
                var a = arguments.length > 3 ? arguments[3] : null, c = arguments.length > 4 ? arguments[4] : null, u = arguments.length > 5 ? arguments[5] : null, l = arguments.length > 6 && arguments[6], p = !!s && s(e, t);
                if (n) n(e, t, {
                    configurable: null === u && p ? p.configurable : !u,
                    enumerable: null === a && p ? p.enumerable : !a,
                    value: r,
                    writable: null === c && p ? p.writable : !c
                }); else {
                    if (!l && (a || c || u)) throw new o("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                    e[t] = r;
                }
            };
        },
        104: e => {
            e.exports = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
        },
        3357: (e, t, r) => {
            e.exports = r(7292), e.exports.parser = r(3401);
        },
        7292: (e, t, r) => {
            var n = r(8520), o = r(5971), i = r(6617)("engine.io-client:socket"), s = r(6938), a = r(3401), c = r(4258), u = r(9140);
            function l(e, t) {
                if (!(this instanceof l)) return new l(e, t);
                t = t || {}, e && "object" == typeof e && (t = e, e = null), e ? (e = c(e), t.hostname = e.host, 
                t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = c(t.host).host), 
                this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, 
                t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, 
                this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), 
                this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), 
                this.query = t.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), 
                this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", 
                this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, 
                this.enablesXDR = !!t.enablesXDR, this.withCredentials = !1 !== t.withCredentials, 
                this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, 
                this.transports = t.transports || [ "polling", "websocket" ], this.transportOptions = t.transportOptions || {}, 
                this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, 
                this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, 
                this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), 
                !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), 
                this.pfx = t.pfx || void 0, this.key = t.key || void 0, this.passphrase = t.passphrase || void 0, 
                this.cert = t.cert || void 0, this.ca = t.ca || void 0, this.ciphers = t.ciphers || void 0, 
                this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized, 
                this.forceNode = !!t.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), 
                ("undefined" == typeof self || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), 
                t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, 
                this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, 
                this.pingTimeoutTimer = null, this.open();
            }
            e.exports = l, l.priorWebsocketSuccess = !1, o(l.prototype), l.protocol = a.protocol, 
            l.Socket = l, l.Transport = r(2672), l.transports = r(8520), l.parser = r(3401), 
            l.prototype.createTransport = function(e) {
                i('creating transport "%s"', e);
                var t = function(e) {
                    var t = {};
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                    return t;
                }(this.query);
                t.EIO = a.protocol, t.transport = e;
                var r = this.transportOptions[e] || {};
                return this.id && (t.sid = this.id), new n[e]({
                    query: t,
                    socket: this,
                    agent: r.agent || this.agent,
                    hostname: r.hostname || this.hostname,
                    port: r.port || this.port,
                    secure: r.secure || this.secure,
                    path: r.path || this.path,
                    forceJSONP: r.forceJSONP || this.forceJSONP,
                    jsonp: r.jsonp || this.jsonp,
                    forceBase64: r.forceBase64 || this.forceBase64,
                    enablesXDR: r.enablesXDR || this.enablesXDR,
                    withCredentials: r.withCredentials || this.withCredentials,
                    timestampRequests: r.timestampRequests || this.timestampRequests,
                    timestampParam: r.timestampParam || this.timestampParam,
                    policyPort: r.policyPort || this.policyPort,
                    pfx: r.pfx || this.pfx,
                    key: r.key || this.key,
                    passphrase: r.passphrase || this.passphrase,
                    cert: r.cert || this.cert,
                    ca: r.ca || this.ca,
                    ciphers: r.ciphers || this.ciphers,
                    rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
                    perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
                    extraHeaders: r.extraHeaders || this.extraHeaders,
                    forceNode: r.forceNode || this.forceNode,
                    localAddress: r.localAddress || this.localAddress,
                    requestTimeout: r.requestTimeout || this.requestTimeout,
                    protocols: r.protocols || void 0,
                    isReactNative: this.isReactNative
                });
            }, l.prototype.open = function() {
                var e;
                if (this.rememberUpgrade && l.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket"; else {
                    if (0 === this.transports.length) {
                        var t = this;
                        return void setTimeout((function() {
                            t.emit("error", "No transports available");
                        }), 0);
                    }
                    e = this.transports[0];
                }
                this.readyState = "opening";
                try {
                    e = this.createTransport(e);
                } catch (e) {
                    return this.transports.shift(), void this.open();
                }
                e.open(), this.setTransport(e);
            }, l.prototype.setTransport = function(e) {
                i("setting transport %s", e.name);
                var t = this;
                this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), 
                this.transport = e, e.on("drain", (function() {
                    t.onDrain();
                })).on("packet", (function(e) {
                    t.onPacket(e);
                })).on("error", (function(e) {
                    t.onError(e);
                })).on("close", (function() {
                    t.onClose("transport close");
                }));
            }, l.prototype.probe = function(e) {
                i('probing transport "%s"', e);
                var t = this.createTransport(e, {
                    probe: 1
                }), r = !1, n = this;
                function o() {
                    if (n.onlyBinaryUpgrades) {
                        var o = !this.supportsBinary && n.transport.supportsBinary;
                        r = r || o;
                    }
                    r || (i('probe transport "%s" opened', e), t.send([ {
                        type: "ping",
                        data: "probe"
                    } ]), t.once("packet", (function(o) {
                        if (!r) if ("pong" === o.type && "probe" === o.data) {
                            if (i('probe transport "%s" pong', e), n.upgrading = !0, n.emit("upgrading", t), 
                            !t) return;
                            l.priorWebsocketSuccess = "websocket" === t.name, i('pausing current transport "%s"', n.transport.name), 
                            n.transport.pause((function() {
                                r || "closed" !== n.readyState && (i("changing transport and sending upgrade packet"), 
                                f(), n.setTransport(t), t.send([ {
                                    type: "upgrade"
                                } ]), n.emit("upgrade", t), t = null, n.upgrading = !1, n.flush());
                            }));
                        } else {
                            i('probe transport "%s" failed', e);
                            var s = new Error("probe error");
                            s.transport = t.name, n.emit("upgradeError", s);
                        }
                    })));
                }
                function s() {
                    r || (r = !0, f(), t.close(), t = null);
                }
                function a(r) {
                    var o = new Error("probe error: " + r);
                    o.transport = t.name, s(), i('probe transport "%s" failed because of error: %s', e, r), 
                    n.emit("upgradeError", o);
                }
                function c() {
                    a("transport closed");
                }
                function u() {
                    a("socket closed");
                }
                function p(e) {
                    t && e.name !== t.name && (i('"%s" works - aborting "%s"', e.name, t.name), s());
                }
                function f() {
                    t.removeListener("open", o), t.removeListener("error", a), t.removeListener("close", c), 
                    n.removeListener("close", u), n.removeListener("upgrading", p);
                }
                l.priorWebsocketSuccess = !1, t.once("open", o), t.once("error", a), t.once("close", c), 
                this.once("close", u), this.once("upgrading", p), t.open();
            }, l.prototype.onOpen = function() {
                if (i("socket open"), this.readyState = "open", l.priorWebsocketSuccess = "websocket" === this.transport.name, 
                this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                    i("starting upgrade probes");
                    for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e]);
                }
            }, l.prototype.onPacket = function(e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i('socket receive: type "%s", data "%s"', e.type, e.data), 
                this.emit("packet", e), this.emit("heartbeat"), e.type) {
                  case "open":
                    this.onHandshake(JSON.parse(e.data));
                    break;

                  case "pong":
                    this.setPing(), this.emit("pong");
                    break;

                  case "error":
                    var t = new Error("server error");
                    t.code = e.data, this.onError(t);
                    break;

                  case "message":
                    this.emit("data", e.data), this.emit("message", e.data);
                } else i('packet received with socket readyState "%s"', this.readyState);
            }, l.prototype.onHandshake = function(e) {
                this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), 
                this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), 
                "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), 
                this.on("heartbeat", this.onHeartbeat));
            }, l.prototype.onHeartbeat = function(e) {
                clearTimeout(this.pingTimeoutTimer);
                var t = this;
                t.pingTimeoutTimer = setTimeout((function() {
                    "closed" !== t.readyState && t.onClose("ping timeout");
                }), e || t.pingInterval + t.pingTimeout);
            }, l.prototype.setPing = function() {
                var e = this;
                clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout((function() {
                    i("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), 
                    e.onHeartbeat(e.pingTimeout);
                }), e.pingInterval);
            }, l.prototype.ping = function() {
                var e = this;
                this.sendPacket("ping", (function() {
                    e.emit("ping");
                }));
            }, l.prototype.onDrain = function() {
                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
            }, l.prototype.flush = function() {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), 
                this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, 
                this.emit("flush"));
            }, l.prototype.write = l.prototype.send = function(e, t, r) {
                return this.sendPacket("message", e, t, r), this;
            }, l.prototype.sendPacket = function(e, t, r, n) {
                if ("function" == typeof t && (n = t, t = void 0), "function" == typeof r && (n = r, 
                r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                    (r = r || {}).compress = !1 !== r.compress;
                    var o = {
                        type: e,
                        data: t,
                        options: r
                    };
                    this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), 
                    this.flush();
                }
            }, l.prototype.close = function() {
                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var e = this;
                    this.writeBuffer.length ? this.once("drain", (function() {
                        this.upgrading ? n() : t();
                    })) : this.upgrading ? n() : t();
                }
                function t() {
                    e.onClose("forced close"), i("socket closing - telling transport to close"), e.transport.close();
                }
                function r() {
                    e.removeListener("upgrade", r), e.removeListener("upgradeError", r), t();
                }
                function n() {
                    e.once("upgrade", r), e.once("upgradeError", r);
                }
                return this;
            }, l.prototype.onError = function(e) {
                i("socket error %j", e), l.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e);
            }, l.prototype.onClose = function(e, t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    i('socket close with reason: "%s"', e);
                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), 
                    this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", 
                    this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0;
                }
            }, l.prototype.filterUpgrades = function(e) {
                for (var t = [], r = 0, n = e.length; r < n; r++) ~s(this.transports, e[r]) && t.push(e[r]);
                return t;
            };
        },
        2672: (e, t, r) => {
            var n = r(3401), o = r(5971);
            function i(e) {
                this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, 
                this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, 
                this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, 
                this.withCredentials = e.withCredentials, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, 
                this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, 
                this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, 
                this.localAddress = e.localAddress;
            }
            e.exports = i, o(i.prototype), i.prototype.onError = function(e, t) {
                var r = new Error(e);
                return r.type = "TransportError", r.description = t, this.emit("error", r), this;
            }, i.prototype.open = function() {
                return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", 
                this.doOpen()), this;
            }, i.prototype.close = function() {
                return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), 
                this.onClose()), this;
            }, i.prototype.send = function(e) {
                if ("open" !== this.readyState) throw new Error("Transport not open");
                this.write(e);
            }, i.prototype.onOpen = function() {
                this.readyState = "open", this.writable = !0, this.emit("open");
            }, i.prototype.onData = function(e) {
                var t = n.decodePacket(e, this.socket.binaryType);
                this.onPacket(t);
            }, i.prototype.onPacket = function(e) {
                this.emit("packet", e);
            }, i.prototype.onClose = function() {
                this.readyState = "closed", this.emit("close");
            };
        },
        8520: (e, t, r) => {
            var n = r(2934), o = r(9332), i = r(2252), s = r(6855);
            t.polling = function(e) {
                var t = !1, r = !1, s = !1 !== e.jsonp;
                if ("undefined" != typeof location) {
                    var a = "https:" === location.protocol, c = location.port;
                    c || (c = a ? 443 : 80), t = e.hostname !== location.hostname || c !== e.port, r = e.secure !== a;
                }
                if (e.xdomain = t, e.xscheme = r, "open" in new n(e) && !e.forceJSONP) return new o(e);
                if (!s) throw new Error("JSONP disabled");
                return new i(e);
            }, t.websocket = s;
        },
        2252: (e, t, r) => {
            var n = r(5911), o = r(2370), i = r(104);
            e.exports = l;
            var s, a = /\n/g, c = /\\n/g;
            function u() {}
            function l(e) {
                n.call(this, e), this.query = this.query || {}, s || (s = i.___eio = i.___eio || []), 
                this.index = s.length;
                var t = this;
                s.push((function(e) {
                    t.onData(e);
                })), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", (function() {
                    t.script && (t.script.onerror = u);
                }), !1);
            }
            o(l, n), l.prototype.supportsBinary = !1, l.prototype.doClose = function() {
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), 
                this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), 
                n.prototype.doClose.call(this);
            }, l.prototype.doPoll = function() {
                var e = this, t = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), 
                t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                    e.onError("jsonp poll error", t);
                };
                var r = document.getElementsByTagName("script")[0];
                r ? r.parentNode.insertBefore(t, r) : (document.head || document.body).appendChild(t), 
                this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                    var e = document.createElement("iframe");
                    document.body.appendChild(e), document.body.removeChild(e);
                }), 100);
            }, l.prototype.doWrite = function(e, t) {
                var r = this;
                if (!this.form) {
                    var n, o = document.createElement("form"), i = document.createElement("textarea"), s = this.iframeId = "eio_iframe_" + this.index;
                    o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", 
                    o.style.left = "-1000px", o.target = s, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), 
                    i.name = "d", o.appendChild(i), document.body.appendChild(o), this.form = o, this.area = i;
                }
                function u() {
                    l(), t();
                }
                function l() {
                    if (r.iframe) try {
                        r.form.removeChild(r.iframe);
                    } catch (e) {
                        r.onError("jsonp polling iframe removal error", e);
                    }
                    try {
                        var e = '<iframe src="javascript:0" name="' + r.iframeId + '">';
                        n = document.createElement(e);
                    } catch (e) {
                        (n = document.createElement("iframe")).name = r.iframeId, n.src = "javascript:0";
                    }
                    n.id = r.iframeId, r.form.appendChild(n), r.iframe = n;
                }
                this.form.action = this.uri(), l(), e = e.replace(c, "\\\n"), this.area.value = e.replace(a, "\\n");
                try {
                    this.form.submit();
                } catch (e) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                    "complete" === r.iframe.readyState && u();
                } : this.iframe.onload = u;
            };
        },
        9332: (e, t, r) => {
            var n = r(2934), o = r(5911), i = r(5971), s = r(2370), a = r(6617)("engine.io-client:polling-xhr"), c = r(104);
            function u() {}
            function l(e) {
                if (o.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, 
                "undefined" != typeof location) {
                    var t = "https:" === location.protocol, r = location.port;
                    r || (r = t ? 443 : 80), this.xd = "undefined" != typeof location && e.hostname !== location.hostname || r !== e.port, 
                    this.xs = e.secure !== t;
                }
            }
            function p(e) {
                this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, 
                this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, 
                this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, 
                this.withCredentials = e.withCredentials, this.requestTimeout = e.requestTimeout, 
                this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, 
                this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, 
                this.extraHeaders = e.extraHeaders, this.create();
            }
            if (e.exports = l, e.exports.Request = p, s(l, o), l.prototype.supportsBinary = !0, 
            l.prototype.request = function(e) {
                return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, 
                e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.withCredentials = this.withCredentials, 
                e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, 
                e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, 
                e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new p(e);
            }, l.prototype.doWrite = function(e, t) {
                var r = "string" != typeof e && void 0 !== e, n = this.request({
                    method: "POST",
                    data: e,
                    isBinary: r
                }), o = this;
                n.on("success", t), n.on("error", (function(e) {
                    o.onError("xhr post error", e);
                })), this.sendXhr = n;
            }, l.prototype.doPoll = function() {
                a("xhr poll");
                var e = this.request(), t = this;
                e.on("data", (function(e) {
                    t.onData(e);
                })), e.on("error", (function(e) {
                    t.onError("xhr poll error", e);
                })), this.pollXhr = e;
            }, i(p.prototype), p.prototype.create = function() {
                var e = {
                    agent: this.agent,
                    xdomain: this.xd,
                    xscheme: this.xs,
                    enablesXDR: this.enablesXDR
                };
                e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, 
                e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
                var t = this.xhr = new n(e), r = this;
                try {
                    a("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders) for (var o in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0), 
                        this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && t.setRequestHeader(o, this.extraHeaders[o]);
                    } catch (e) {}
                    if ("POST" === this.method) try {
                        this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                    } catch (e) {}
                    try {
                        t.setRequestHeader("Accept", "*/*");
                    } catch (e) {}
                    "withCredentials" in t && (t.withCredentials = this.withCredentials), this.requestTimeout && (t.timeout = this.requestTimeout), 
                    this.hasXDR() ? (t.onload = function() {
                        r.onLoad();
                    }, t.onerror = function() {
                        r.onError(t.responseText);
                    }) : t.onreadystatechange = function() {
                        if (2 === t.readyState) try {
                            var e = t.getResponseHeader("Content-Type");
                            (r.supportsBinary && "application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && (t.responseType = "arraybuffer");
                        } catch (e) {}
                        4 === t.readyState && (200 === t.status || 1223 === t.status ? r.onLoad() : setTimeout((function() {
                            r.onError("number" == typeof t.status ? t.status : 0);
                        }), 0));
                    }, a("xhr data %s", this.data), t.send(this.data);
                } catch (e) {
                    return void setTimeout((function() {
                        r.onError(e);
                    }), 0);
                }
                "undefined" != typeof document && (this.index = p.requestsCount++, p.requests[this.index] = this);
            }, p.prototype.onSuccess = function() {
                this.emit("success"), this.cleanup();
            }, p.prototype.onData = function(e) {
                this.emit("data", e), this.onSuccess();
            }, p.prototype.onError = function(e) {
                this.emit("error", e), this.cleanup(!0);
            }, p.prototype.cleanup = function(e) {
                if (void 0 !== this.xhr && null !== this.xhr) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = u : this.xhr.onreadystatechange = u, 
                    e) try {
                        this.xhr.abort();
                    } catch (e) {}
                    "undefined" != typeof document && delete p.requests[this.index], this.xhr = null;
                }
            }, p.prototype.onLoad = function() {
                var e;
                try {
                    var t;
                    try {
                        t = this.xhr.getResponseHeader("Content-Type");
                    } catch (e) {}
                    e = ("application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && this.xhr.response || this.xhr.responseText;
                } catch (e) {
                    this.onError(e);
                }
                null != e && this.onData(e);
            }, p.prototype.hasXDR = function() {
                return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;
            }, p.prototype.abort = function() {
                this.cleanup();
            }, p.requestsCount = 0, p.requests = {}, "undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", f); else if ("function" == typeof addEventListener) {
                addEventListener("onpagehide" in c ? "pagehide" : "unload", f, !1);
            }
            function f() {
                for (var e in p.requests) p.requests.hasOwnProperty(e) && p.requests[e].abort();
            }
        },
        5911: (e, t, r) => {
            var n = r(2672), o = r(9140), i = r(3401), s = r(2370), a = r(2121), c = r(6617)("engine.io-client:polling");
            e.exports = l;
            var u = null != new (r(2934))({
                xdomain: !1
            }).responseType;
            function l(e) {
                var t = e && e.forceBase64;
                u && !t || (this.supportsBinary = !1), n.call(this, e);
            }
            s(l, n), l.prototype.name = "polling", l.prototype.doOpen = function() {
                this.poll();
            }, l.prototype.pause = function(e) {
                var t = this;
                function r() {
                    c("paused"), t.readyState = "paused", e();
                }
                if (this.readyState = "pausing", this.polling || !this.writable) {
                    var n = 0;
                    this.polling && (c("we are currently polling - waiting to pause"), n++, this.once("pollComplete", (function() {
                        c("pre-pause polling complete"), --n || r();
                    }))), this.writable || (c("we are currently writing - waiting to pause"), n++, this.once("drain", (function() {
                        c("pre-pause writing complete"), --n || r();
                    })));
                } else r();
            }, l.prototype.poll = function() {
                c("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
            }, l.prototype.onData = function(e) {
                var t = this;
                c("polling got data %s", e);
                i.decodePayload(e, this.socket.binaryType, (function(e, r, n) {
                    if ("opening" === t.readyState && "open" === e.type && t.onOpen(), "close" === e.type) return t.onClose(), 
                    !1;
                    t.onPacket(e);
                })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), 
                "open" === this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState));
            }, l.prototype.doClose = function() {
                var e = this;
                function t() {
                    c("writing close packet"), e.write([ {
                        type: "close"
                    } ]);
                }
                "open" === this.readyState ? (c("transport open - closing"), t()) : (c("transport not open - deferring close"), 
                this.once("open", t));
            }, l.prototype.write = function(e) {
                var t = this;
                this.writable = !1;
                var r = function() {
                    t.writable = !0, t.emit("drain");
                };
                i.encodePayload(e, this.supportsBinary, (function(e) {
                    t.doWrite(e, r);
                }));
            }, l.prototype.uri = function() {
                var e = this.query || {}, t = this.secure ? "https" : "http", r = "";
                return !1 !== this.timestampRequests && (e[this.timestampParam] = a()), this.supportsBinary || e.sid || (e.b64 = 1), 
                e = o.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (r = ":" + this.port), 
                e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + e;
            };
        },
        6855: (e, t, r) => {
            var n, o, i = r(2672), s = r(3401), a = r(9140), c = r(2370), u = r(2121), l = r(6617)("engine.io-client:websocket");
            if ("undefined" != typeof WebSocket ? n = WebSocket : "undefined" != typeof self && (n = self.WebSocket || self.MozWebSocket), 
            "undefined" == typeof window) try {
                o = r(5660);
            } catch (e) {}
            var p = n || o;
            function f(e) {
                e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, 
                this.usingBrowserWebSocket = n && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (p = o), 
                i.call(this, e);
            }
            e.exports = f, c(f, i), f.prototype.name = "websocket", f.prototype.supportsBinary = !0, 
            f.prototype.doOpen = function() {
                if (this.check()) {
                    var e = this.uri(), t = this.protocols, r = {};
                    this.isReactNative || (r.agent = this.agent, r.perMessageDeflate = this.perMessageDeflate, 
                    r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, 
                    r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized), 
                    this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);
                    try {
                        this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new p(e, t) : new p(e) : new p(e, t, r);
                    } catch (e) {
                        return this.emit("error", e);
                    }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, 
                    this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
                }
            }, f.prototype.addEventListeners = function() {
                var e = this;
                this.ws.onopen = function() {
                    e.onOpen();
                }, this.ws.onclose = function() {
                    e.onClose();
                }, this.ws.onmessage = function(t) {
                    e.onData(t.data);
                }, this.ws.onerror = function(t) {
                    e.onError("websocket error", t);
                };
            }, f.prototype.write = function(e) {
                var t = this;
                this.writable = !1;
                for (var r = e.length, n = 0, o = r; n < o; n++) !function(e) {
                    s.encodePacket(e, t.supportsBinary, (function(n) {
                        if (!t.usingBrowserWebSocket) {
                            var o = {};
                            if (e.options && (o.compress = e.options.compress), t.perMessageDeflate) ("string" == typeof n ? Buffer.byteLength(n) : n.length) < t.perMessageDeflate.threshold && (o.compress = !1);
                        }
                        try {
                            t.usingBrowserWebSocket ? t.ws.send(n) : t.ws.send(n, o);
                        } catch (e) {
                            l("websocket closed before onclose event");
                        }
                        --r || i();
                    }));
                }(e[n]);
                function i() {
                    t.emit("flush"), setTimeout((function() {
                        t.writable = !0, t.emit("drain");
                    }), 0);
                }
            }, f.prototype.onClose = function() {
                i.prototype.onClose.call(this);
            }, f.prototype.doClose = function() {
                void 0 !== this.ws && this.ws.close();
            }, f.prototype.uri = function() {
                var e = this.query || {}, t = this.secure ? "wss" : "ws", r = "";
                return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (r = ":" + this.port), 
                this.timestampRequests && (e[this.timestampParam] = u()), this.supportsBinary || (e.b64 = 1), 
                (e = a.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + e;
            }, f.prototype.check = function() {
                return !(!p || "__initialize" in p && this.name === f.prototype.name);
            };
        },
        2934: (e, t, r) => {
            var n = r(8383), o = r(104);
            e.exports = function(e) {
                var t = e.xdomain, r = e.xscheme, i = e.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!t || n)) return new XMLHttpRequest;
                } catch (e) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !r && i) return new XDomainRequest;
                } catch (e) {}
                if (!t) try {
                    return new (o[[ "Active" ].concat("Object").join("X")])("Microsoft.XMLHTTP");
                } catch (e) {}
            };
        },
        6617: (e, t, r) => {
            function n() {
                var e;
                try {
                    e = t.storage.debug;
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
                e;
            }
            (t = e.exports = r(9110)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }, t.formatArgs = function(e) {
                var r = this.useColors;
                if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), 
                !r) return;
                var n = "color: " + this.color;
                e.splice(1, 0, n, "color: inherit");
                var o = 0, i = 0;
                e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (o++, "%c" === e && (i = o));
                })), e.splice(i, 0, n);
            }, t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e;
                } catch (e) {}
            }, t.load = n, t.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage;
                } catch (e) {}
            }(), t.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
            t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message;
                }
            }, t.enable(n());
        },
        9110: (e, t, r) => {
            function n(e) {
                var r;
                function n() {
                    if (n.enabled) {
                        var e = n, o = +new Date, i = o - (r || o);
                        e.diff = i, e.prev = r, e.curr = o, r = o;
                        for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                        s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var c = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(r, n) {
                            if ("%%" === r) return r;
                            c++;
                            var o = t.formatters[n];
                            if ("function" == typeof o) {
                                var i = s[c];
                                r = o.call(e, i), s.splice(c, 1), c--;
                            }
                            return r;
                        })), t.formatArgs.call(e, s), (n.log || t.log || console.log.bind(console)).apply(e, s);
                    }
                }
                return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
                    var r, n = 0;
                    for (r in e) n = (n << 5) - n + e.charCodeAt(r), n |= 0;
                    return t.colors[Math.abs(n) % t.colors.length];
                }(e), n.destroy = o, "function" == typeof t.init && t.init(n), t.instances.push(n), 
                n;
            }
            function o() {
                var e = t.instances.indexOf(this);
                return -1 !== e && (t.instances.splice(e, 1), !0);
            }
            (t = e.exports = n.debug = n.default = n).coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e;
            }, t.disable = function() {
                t.enable("");
            }, t.enable = function(e) {
                var r;
                t.save(e), t.names = [], t.skips = [];
                var n = ("string" == typeof e ? e : "").split(/[\s,]+/), o = n.length;
                for (r = 0; r < o; r++) n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                for (r = 0; r < t.instances.length; r++) {
                    var i = t.instances[r];
                    i.enabled = t.enabled(i.namespace);
                }
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var r, n;
                for (r = 0, n = t.skips.length; r < n; r++) if (t.skips[r].test(e)) return !1;
                for (r = 0, n = t.names.length; r < n; r++) if (t.names[r].test(e)) return !0;
                return !1;
            }, t.humanize = r(3097), t.instances = [], t.names = [], t.skips = [], t.formatters = {};
        },
        3097: e => {
            var t = 1e3, r = 60 * t, n = 60 * r, o = 24 * n, i = 365.25 * o;
            function s(e, t, r) {
                if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s";
            }
            e.exports = function(e, a) {
                a = a || {};
                var c, u = typeof e;
                if ("string" === u && e.length > 0) return function(e) {
                    if ((e = String(e)).length > 100) return;
                    var s = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!s) return;
                    var a = parseFloat(s[1]);
                    switch ((s[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return a * i;

                      case "days":
                      case "day":
                      case "d":
                        return a * o;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return a * n;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return a * r;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return a * t;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return a;

                      default:
                        return;
                    }
                }(e);
                if ("number" === u && !1 === isNaN(e)) return a.long ? s(c = e, o, "day") || s(c, n, "hour") || s(c, r, "minute") || s(c, t, "second") || c + " ms" : function(e) {
                    if (e >= o) return Math.round(e / o) + "d";
                    if (e >= n) return Math.round(e / n) + "h";
                    if (e >= r) return Math.round(e / r) + "m";
                    if (e >= t) return Math.round(e / t) + "s";
                    return e + "ms";
                }(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
            };
        },
        3401: (e, t, r) => {
            var n, o = r(2505), i = r(8839), s = r(3344), a = r(969), c = r(8758);
            "undefined" != typeof ArrayBuffer && (n = r(3371));
            var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), l = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), p = u || l;
            t.protocol = 3;
            var f = t.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            }, h = o(f), d = {
                type: "error",
                data: "parser error"
            }, m = r(3118);
            function y(e, t, r) {
                for (var n = new Array(e.length), o = a(e.length, r), i = function(e, r, o) {
                    t(r, (function(t, r) {
                        n[e] = r, o(t, n);
                    }));
                }, s = 0; s < e.length; s++) i(s, e[s], o);
            }
            t.encodePacket = function(e, r, n, o) {
                "function" == typeof r && (o = r, r = !1), "function" == typeof n && (o = n, n = null);
                var i = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) return function(e, r, n) {
                    if (!r) return t.encodeBase64Packet(e, n);
                    var o = e.data, i = new Uint8Array(o), s = new Uint8Array(1 + o.byteLength);
                    s[0] = f[e.type];
                    for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
                    return n(s.buffer);
                }(e, r, o);
                if (void 0 !== m && i instanceof m) return function(e, r, n) {
                    if (!r) return t.encodeBase64Packet(e, n);
                    if (p) return function(e, r, n) {
                        if (!r) return t.encodeBase64Packet(e, n);
                        var o = new FileReader;
                        return o.onload = function() {
                            t.encodePacket({
                                type: e.type,
                                data: o.result
                            }, r, !0, n);
                        }, o.readAsArrayBuffer(e.data);
                    }(e, r, n);
                    var o = new Uint8Array(1);
                    o[0] = f[e.type];
                    var i = new m([ o.buffer, e.data ]);
                    return n(i);
                }(e, r, o);
                if (i && i.base64) return function(e, r) {
                    var n = "b" + t.packets[e.type] + e.data.data;
                    return r(n);
                }(e, o);
                var s = f[e.type];
                return void 0 !== e.data && (s += n ? c.encode(String(e.data), {
                    strict: !1
                }) : String(e.data)), o("" + s);
            }, t.encodeBase64Packet = function(e, r) {
                var n, o = "b" + t.packets[e.type];
                if (void 0 !== m && e.data instanceof m) {
                    var i = new FileReader;
                    return i.onload = function() {
                        var e = i.result.split(",")[1];
                        r(o + e);
                    }, i.readAsDataURL(e.data);
                }
                try {
                    n = String.fromCharCode.apply(null, new Uint8Array(e.data));
                } catch (t) {
                    for (var s = new Uint8Array(e.data), a = new Array(s.length), c = 0; c < s.length; c++) a[c] = s[c];
                    n = String.fromCharCode.apply(null, a);
                }
                return o += btoa(n), r(o);
            }, t.decodePacket = function(e, r, n) {
                if (void 0 === e) return d;
                if ("string" == typeof e) {
                    if ("b" === e.charAt(0)) return t.decodeBase64Packet(e.substr(1), r);
                    if (n && !1 === (e = function(e) {
                        try {
                            e = c.decode(e, {
                                strict: !1
                            });
                        } catch (e) {
                            return !1;
                        }
                        return e;
                    }(e))) return d;
                    var o = e.charAt(0);
                    return Number(o) == o && h[o] ? e.length > 1 ? {
                        type: h[o],
                        data: e.substring(1)
                    } : {
                        type: h[o]
                    } : d;
                }
                o = new Uint8Array(e)[0];
                var i = s(e, 1);
                return m && "blob" === r && (i = new m([ i ])), {
                    type: h[o],
                    data: i
                };
            }, t.decodeBase64Packet = function(e, t) {
                var r = h[e.charAt(0)];
                if (!n) return {
                    type: r,
                    data: {
                        base64: !0,
                        data: e.substr(1)
                    }
                };
                var o = n.decode(e.substr(1));
                return "blob" === t && m && (o = new m([ o ])), {
                    type: r,
                    data: o
                };
            }, t.encodePayload = function(e, r, n) {
                "function" == typeof r && (n = r, r = null);
                var o = i(e);
                if (r && o) return m && !p ? t.encodePayloadAsBlob(e, n) : t.encodePayloadAsArrayBuffer(e, n);
                if (!e.length) return n("0:");
                y(e, (function(e, n) {
                    t.encodePacket(e, !!o && r, !1, (function(e) {
                        n(null, function(e) {
                            return e.length + ":" + e;
                        }(e));
                    }));
                }), (function(e, t) {
                    return n(t.join(""));
                }));
            }, t.decodePayload = function(e, r, n) {
                if ("string" != typeof e) return t.decodePayloadAsBinary(e, r, n);
                var o;
                if ("function" == typeof r && (n = r, r = null), "" === e) return n(d, 0, 1);
                for (var i, s, a = "", c = 0, u = e.length; c < u; c++) {
                    var l = e.charAt(c);
                    if (":" === l) {
                        if ("" === a || a != (i = Number(a))) return n(d, 0, 1);
                        if (a != (s = e.substr(c + 1, i)).length) return n(d, 0, 1);
                        if (s.length) {
                            if (o = t.decodePacket(s, r, !1), d.type === o.type && d.data === o.data) return n(d, 0, 1);
                            if (!1 === n(o, c + i, u)) return;
                        }
                        c += i, a = "";
                    } else a += l;
                }
                return "" !== a ? n(d, 0, 1) : void 0;
            }, t.encodePayloadAsArrayBuffer = function(e, r) {
                if (!e.length) return r(new ArrayBuffer(0));
                y(e, (function(e, r) {
                    t.encodePacket(e, !0, !0, (function(e) {
                        return r(null, e);
                    }));
                }), (function(e, t) {
                    var n = t.reduce((function(e, t) {
                        var r;
                        return e + (r = "string" == typeof t ? t.length : t.byteLength).toString().length + r + 2;
                    }), 0), o = new Uint8Array(n), i = 0;
                    return t.forEach((function(e) {
                        var t = "string" == typeof e, r = e;
                        if (t) {
                            for (var n = new Uint8Array(e.length), s = 0; s < e.length; s++) n[s] = e.charCodeAt(s);
                            r = n.buffer;
                        }
                        o[i++] = t ? 0 : 1;
                        var a = r.byteLength.toString();
                        for (s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
                        o[i++] = 255;
                        for (n = new Uint8Array(r), s = 0; s < n.length; s++) o[i++] = n[s];
                    })), r(o.buffer);
                }));
            }, t.encodePayloadAsBlob = function(e, r) {
                y(e, (function(e, r) {
                    t.encodePacket(e, !0, !0, (function(e) {
                        var t = new Uint8Array(1);
                        if (t[0] = 1, "string" == typeof e) {
                            for (var n = new Uint8Array(e.length), o = 0; o < e.length; o++) n[o] = e.charCodeAt(o);
                            e = n.buffer, t[0] = 0;
                        }
                        var i = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(), s = new Uint8Array(i.length + 1);
                        for (o = 0; o < i.length; o++) s[o] = parseInt(i[o]);
                        if (s[i.length] = 255, m) {
                            var a = new m([ t.buffer, s.buffer, e ]);
                            r(null, a);
                        }
                    }));
                }), (function(e, t) {
                    return r(new m(t));
                }));
            }, t.decodePayloadAsBinary = function(e, r, n) {
                "function" == typeof r && (n = r, r = null);
                for (var o = e, i = []; o.byteLength > 0; ) {
                    for (var a = new Uint8Array(o), c = 0 === a[0], u = "", l = 1; 255 !== a[l]; l++) {
                        if (u.length > 310) return n(d, 0, 1);
                        u += a[l];
                    }
                    o = s(o, 2 + u.length), u = parseInt(u);
                    var p = s(o, 0, u);
                    if (c) try {
                        p = String.fromCharCode.apply(null, new Uint8Array(p));
                    } catch (e) {
                        var f = new Uint8Array(p);
                        p = "";
                        for (l = 0; l < f.length; l++) p += String.fromCharCode(f[l]);
                    }
                    i.push(p), o = s(o, u);
                }
                var h = i.length;
                i.forEach((function(e, o) {
                    n(t.decodePacket(e, r, !0), o, h);
                }));
            };
        },
        2505: e => {
            e.exports = Object.keys || function(e) {
                var t = [], r = Object.prototype.hasOwnProperty;
                for (var n in e) r.call(e, n) && t.push(n);
                return t;
            };
        },
        8758: e => {
            var t, r, n, o = String.fromCharCode;
            function i(e) {
                for (var t, r, n = [], o = 0, i = e.length; o < i; ) (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (r = e.charCodeAt(o++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), 
                o--) : n.push(t);
                return n;
            }
            function s(e, t) {
                if (e >= 55296 && e <= 57343) {
                    if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
                    return !1;
                }
                return !0;
            }
            function a(e, t) {
                return o(e >> t & 63 | 128);
            }
            function c(e, t) {
                if (!(4294967168 & e)) return o(e);
                var r = "";
                return 4294965248 & e ? 4294901760 & e ? 4292870144 & e || (r = o(e >> 18 & 7 | 240), 
                r += a(e, 12), r += a(e, 6)) : (s(e, t) || (e = 65533), r = o(e >> 12 & 15 | 224), 
                r += a(e, 6)) : r = o(e >> 6 & 31 | 192), r += o(63 & e | 128);
            }
            function u() {
                if (n >= r) throw Error("Invalid byte index");
                var e = 255 & t[n];
                if (n++, 128 == (192 & e)) return 63 & e;
                throw Error("Invalid continuation byte");
            }
            function l(e) {
                var o, i;
                if (n > r) throw Error("Invalid byte index");
                if (n == r) return !1;
                if (o = 255 & t[n], n++, !(128 & o)) return o;
                if (192 == (224 & o)) {
                    if ((i = (31 & o) << 6 | u()) >= 128) return i;
                    throw Error("Invalid continuation byte");
                }
                if (224 == (240 & o)) {
                    if ((i = (15 & o) << 12 | u() << 6 | u()) >= 2048) return s(i, e) ? i : 65533;
                    throw Error("Invalid continuation byte");
                }
                if (240 == (248 & o) && (i = (7 & o) << 18 | u() << 12 | u() << 6 | u()) >= 65536 && i <= 1114111) return i;
                throw Error("Invalid UTF-8 detected");
            }
            e.exports = {
                version: "2.1.2",
                encode: function(e, t) {
                    for (var r = !1 !== (t = t || {}).strict, n = i(e), o = n.length, s = -1, a = ""; ++s < o; ) a += c(n[s], r);
                    return a;
                },
                decode: function(e, s) {
                    var a = !1 !== (s = s || {}).strict;
                    t = i(e), r = t.length, n = 0;
                    for (var c, u = []; !1 !== (c = l(a)); ) u.push(c);
                    return function(e) {
                        for (var t, r = e.length, n = -1, i = ""; ++n < r; ) (t = e[n]) > 65535 && (i += o((t -= 65536) >>> 10 & 1023 | 55296), 
                        t = 56320 | 1023 & t), i += o(t);
                        return i;
                    }(u);
                }
            };
        },
        655: (e, t, r) => {
            "use strict";
            var n = r(453)("%Object.defineProperty%", !0) || !1;
            if (n) try {
                n({}, "a", {
                    value: 1
                });
            } catch (e) {
                n = !1;
            }
            e.exports = n;
        },
        1237: e => {
            "use strict";
            e.exports = EvalError;
        },
        9383: e => {
            "use strict";
            e.exports = Error;
        },
        9290: e => {
            "use strict";
            e.exports = RangeError;
        },
        9538: e => {
            "use strict";
            e.exports = ReferenceError;
        },
        8068: e => {
            "use strict";
            e.exports = SyntaxError;
        },
        9675: e => {
            "use strict";
            e.exports = TypeError;
        },
        5345: e => {
            "use strict";
            e.exports = URIError;
        },
        2834: e => {
            "use strict";
            var t = /[|\\{}()[\]^$+*?.]/g;
            e.exports = function(e) {
                if ("string" != typeof e) throw new TypeError("Expected a string");
                return e.replace(t, "\\$&");
            };
        },
        9353: e => {
            "use strict";
            var t = Object.prototype.toString, r = Math.max, n = function(e, t) {
                for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
                for (var o = 0; o < t.length; o += 1) r[o + e.length] = t[o];
                return r;
            };
            e.exports = function(e) {
                var o = this;
                if ("function" != typeof o || "[object Function]" !== t.apply(o)) throw new TypeError("Function.prototype.bind called on incompatible " + o);
                for (var i, s = function(e, t) {
                    for (var r = [], n = t || 0, o = 0; n < e.length; n += 1, o += 1) r[o] = e[n];
                    return r;
                }(arguments, 1), a = r(0, o.length - s.length), c = [], u = 0; u < a; u++) c[u] = "$" + u;
                if (i = Function("binder", "return function (" + function(e, t) {
                    for (var r = "", n = 0; n < e.length; n += 1) r += e[n], n + 1 < e.length && (r += t);
                    return r;
                }(c, ",") + "){ return binder.apply(this,arguments); }")((function() {
                    if (this instanceof i) {
                        var t = o.apply(this, n(s, arguments));
                        return Object(t) === t ? t : this;
                    }
                    return o.apply(e, n(s, arguments));
                })), o.prototype) {
                    var l = function() {};
                    l.prototype = o.prototype, i.prototype = new l, l.prototype = null;
                }
                return i;
            };
        },
        6743: (e, t, r) => {
            "use strict";
            var n = r(9353);
            e.exports = Function.prototype.bind || n;
        },
        453: (e, t, r) => {
            "use strict";
            var n, o = r(9383), i = r(1237), s = r(9290), a = r(9538), c = r(8068), u = r(9675), l = r(5345), p = Function, f = function(e) {
                try {
                    return p('"use strict"; return (' + e + ").constructor;")();
                } catch (e) {}
            }, h = Object.getOwnPropertyDescriptor;
            if (h) try {
                h({}, "");
            } catch (e) {
                h = null;
            }
            var d = function() {
                throw new u;
            }, m = h ? function() {
                try {
                    return d;
                } catch (e) {
                    try {
                        return h(arguments, "callee").get;
                    } catch (e) {
                        return d;
                    }
                }
            }() : d, y = r(4039)(), g = r(24)(), v = Object.getPrototypeOf || (g ? function(e) {
                return e.__proto__;
            } : null), b = {}, w = "undefined" != typeof Uint8Array && v ? v(Uint8Array) : n, k = {
                __proto__: null,
                "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
                "%ArrayIteratorPrototype%": y && v ? v([][Symbol.iterator]()) : n,
                "%AsyncFromSyncIteratorPrototype%": n,
                "%AsyncFunction%": b,
                "%AsyncGenerator%": b,
                "%AsyncGeneratorFunction%": b,
                "%AsyncIteratorPrototype%": b,
                "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
                "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
                "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array,
                "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": "undefined" == typeof DataView ? n : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": o,
                "%eval%": eval,
                "%EvalError%": i,
                "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
                "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
                "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
                "%Function%": p,
                "%GeneratorFunction%": b,
                "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
                "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
                "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": y && v ? v(v([][Symbol.iterator]())) : n,
                "%JSON%": "object" == typeof JSON ? JSON : n,
                "%Map%": "undefined" == typeof Map ? n : Map,
                "%MapIteratorPrototype%": "undefined" != typeof Map && y && v ? v((new Map)[Symbol.iterator]()) : n,
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": "undefined" == typeof Promise ? n : Promise,
                "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
                "%RangeError%": s,
                "%ReferenceError%": a,
                "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
                "%RegExp%": RegExp,
                "%Set%": "undefined" == typeof Set ? n : Set,
                "%SetIteratorPrototype%": "undefined" != typeof Set && y && v ? v((new Set)[Symbol.iterator]()) : n,
                "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": y && v ? v(""[Symbol.iterator]()) : n,
                "%Symbol%": y ? Symbol : n,
                "%SyntaxError%": c,
                "%ThrowTypeError%": m,
                "%TypedArray%": w,
                "%TypeError%": u,
                "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
                "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
                "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
                "%URIError%": l,
                "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
                "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
                "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet
            };
            if (v) try {
                null.error;
            } catch (e) {
                var x = v(v(e));
                k["%Error.prototype%"] = x;
            }
            var C = function e(t) {
                var r;
                if ("%AsyncFunction%" === t) r = f("async function () {}"); else if ("%GeneratorFunction%" === t) r = f("function* () {}"); else if ("%AsyncGeneratorFunction%" === t) r = f("async function* () {}"); else if ("%AsyncGenerator%" === t) {
                    var n = e("%AsyncGeneratorFunction%");
                    n && (r = n.prototype);
                } else if ("%AsyncIteratorPrototype%" === t) {
                    var o = e("%AsyncGenerator%");
                    o && v && (r = v(o.prototype));
                }
                return k[t] = r, r;
            }, S = {
                __proto__: null,
                "%ArrayBufferPrototype%": [ "ArrayBuffer", "prototype" ],
                "%ArrayPrototype%": [ "Array", "prototype" ],
                "%ArrayProto_entries%": [ "Array", "prototype", "entries" ],
                "%ArrayProto_forEach%": [ "Array", "prototype", "forEach" ],
                "%ArrayProto_keys%": [ "Array", "prototype", "keys" ],
                "%ArrayProto_values%": [ "Array", "prototype", "values" ],
                "%AsyncFunctionPrototype%": [ "AsyncFunction", "prototype" ],
                "%AsyncGenerator%": [ "AsyncGeneratorFunction", "prototype" ],
                "%AsyncGeneratorPrototype%": [ "AsyncGeneratorFunction", "prototype", "prototype" ],
                "%BooleanPrototype%": [ "Boolean", "prototype" ],
                "%DataViewPrototype%": [ "DataView", "prototype" ],
                "%DatePrototype%": [ "Date", "prototype" ],
                "%ErrorPrototype%": [ "Error", "prototype" ],
                "%EvalErrorPrototype%": [ "EvalError", "prototype" ],
                "%Float32ArrayPrototype%": [ "Float32Array", "prototype" ],
                "%Float64ArrayPrototype%": [ "Float64Array", "prototype" ],
                "%FunctionPrototype%": [ "Function", "prototype" ],
                "%Generator%": [ "GeneratorFunction", "prototype" ],
                "%GeneratorPrototype%": [ "GeneratorFunction", "prototype", "prototype" ],
                "%Int8ArrayPrototype%": [ "Int8Array", "prototype" ],
                "%Int16ArrayPrototype%": [ "Int16Array", "prototype" ],
                "%Int32ArrayPrototype%": [ "Int32Array", "prototype" ],
                "%JSONParse%": [ "JSON", "parse" ],
                "%JSONStringify%": [ "JSON", "stringify" ],
                "%MapPrototype%": [ "Map", "prototype" ],
                "%NumberPrototype%": [ "Number", "prototype" ],
                "%ObjectPrototype%": [ "Object", "prototype" ],
                "%ObjProto_toString%": [ "Object", "prototype", "toString" ],
                "%ObjProto_valueOf%": [ "Object", "prototype", "valueOf" ],
                "%PromisePrototype%": [ "Promise", "prototype" ],
                "%PromiseProto_then%": [ "Promise", "prototype", "then" ],
                "%Promise_all%": [ "Promise", "all" ],
                "%Promise_reject%": [ "Promise", "reject" ],
                "%Promise_resolve%": [ "Promise", "resolve" ],
                "%RangeErrorPrototype%": [ "RangeError", "prototype" ],
                "%ReferenceErrorPrototype%": [ "ReferenceError", "prototype" ],
                "%RegExpPrototype%": [ "RegExp", "prototype" ],
                "%SetPrototype%": [ "Set", "prototype" ],
                "%SharedArrayBufferPrototype%": [ "SharedArrayBuffer", "prototype" ],
                "%StringPrototype%": [ "String", "prototype" ],
                "%SymbolPrototype%": [ "Symbol", "prototype" ],
                "%SyntaxErrorPrototype%": [ "SyntaxError", "prototype" ],
                "%TypedArrayPrototype%": [ "TypedArray", "prototype" ],
                "%TypeErrorPrototype%": [ "TypeError", "prototype" ],
                "%Uint8ArrayPrototype%": [ "Uint8Array", "prototype" ],
                "%Uint8ClampedArrayPrototype%": [ "Uint8ClampedArray", "prototype" ],
                "%Uint16ArrayPrototype%": [ "Uint16Array", "prototype" ],
                "%Uint32ArrayPrototype%": [ "Uint32Array", "prototype" ],
                "%URIErrorPrototype%": [ "URIError", "prototype" ],
                "%WeakMapPrototype%": [ "WeakMap", "prototype" ],
                "%WeakSetPrototype%": [ "WeakSet", "prototype" ]
            }, O = r(6743), A = r(9957), E = O.call(Function.call, Array.prototype.concat), L = O.call(Function.apply, Array.prototype.splice), T = O.call(Function.call, String.prototype.replace), I = O.call(Function.call, String.prototype.slice), P = O.call(Function.call, RegExp.prototype.exec), F = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, _ = /\\(\\)?/g, j = function(e, t) {
                var r, n = e;
                if (A(S, n) && (n = "%" + (r = S[n])[0] + "%"), A(k, n)) {
                    var o = k[n];
                    if (o === b && (o = C(n)), void 0 === o && !t) throw new u("intrinsic " + e + " exists, but is not available. Please file an issue!");
                    return {
                        alias: r,
                        name: n,
                        value: o
                    };
                }
                throw new c("intrinsic " + e + " does not exist!");
            };
            e.exports = function(e, t) {
                if ("string" != typeof e || 0 === e.length) throw new u("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof t) throw new u('"allowMissing" argument must be a boolean');
                if (null === P(/^%?[^%]*%?$/, e)) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var r = function(e) {
                    var t = I(e, 0, 1), r = I(e, -1);
                    if ("%" === t && "%" !== r) throw new c("invalid intrinsic syntax, expected closing `%`");
                    if ("%" === r && "%" !== t) throw new c("invalid intrinsic syntax, expected opening `%`");
                    var n = [];
                    return T(e, F, (function(e, t, r, o) {
                        n[n.length] = r ? T(o, _, "$1") : t || e;
                    })), n;
                }(e), n = r.length > 0 ? r[0] : "", o = j("%" + n + "%", t), i = o.name, s = o.value, a = !1, l = o.alias;
                l && (n = l[0], L(r, E([ 0, 1 ], l)));
                for (var p = 1, f = !0; p < r.length; p += 1) {
                    var d = r[p], m = I(d, 0, 1), y = I(d, -1);
                    if (('"' === m || "'" === m || "`" === m || '"' === y || "'" === y || "`" === y) && m !== y) throw new c("property names with quotes must have matching quotes");
                    if ("constructor" !== d && f || (a = !0), A(k, i = "%" + (n += "." + d) + "%")) s = k[i]; else if (null != s) {
                        if (!(d in s)) {
                            if (!t) throw new u("base intrinsic for " + e + " exists, but the property is not available.");
                            return;
                        }
                        if (h && p + 1 >= r.length) {
                            var g = h(s, d);
                            s = (f = !!g) && "get" in g && !("originalValue" in g.get) ? g.get : s[d];
                        } else f = A(s, d), s = s[d];
                        f && !a && (k[i] = s);
                    }
                }
                return s;
            };
        },
        5795: (e, t, r) => {
            "use strict";
            var n = r(453)("%Object.getOwnPropertyDescriptor%", !0);
            if (n) try {
                n([], "length");
            } catch (e) {
                n = null;
            }
            e.exports = n;
        },
        8839: (e, t, r) => {
            var n = r(4634), o = Object.prototype.toString, i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob), s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
            e.exports = function e(t) {
                if (!t || "object" != typeof t) return !1;
                if (n(t)) {
                    for (var r = 0, o = t.length; r < o; r++) if (e(t[r])) return !0;
                    return !1;
                }
                if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(t) || "function" == typeof ArrayBuffer && t instanceof ArrayBuffer || i && t instanceof Blob || s && t instanceof File) return !0;
                if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return e(t.toJSON(), !0);
                for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a) && e(t[a])) return !0;
                return !1;
            };
        },
        8383: e => {
            try {
                e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
            } catch (t) {
                e.exports = !1;
            }
        },
        592: (e, t, r) => {
            "use strict";
            var n = r(655), o = function() {
                return !!n;
            };
            o.hasArrayLengthDefineBug = function() {
                if (!n) return null;
                try {
                    return 1 !== n([], "length", {
                        value: 1
                    }).length;
                } catch (e) {
                    return !0;
                }
            }, e.exports = o;
        },
        24: e => {
            "use strict";
            var t = {
                __proto__: null,
                foo: {}
            }, r = Object;
            e.exports = function() {
                return {
                    __proto__: t
                }.foo === t.foo && !(t instanceof r);
            };
        },
        4039: (e, t, r) => {
            "use strict";
            var n = "undefined" != typeof Symbol && Symbol, o = r(1333);
            e.exports = function() {
                return "function" == typeof n && ("function" == typeof Symbol && ("symbol" == typeof n("foo") && ("symbol" == typeof Symbol("bar") && o())));
            };
        },
        1333: e => {
            "use strict";
            e.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var e = {}, t = Symbol("test"), r = Object(t);
                if ("string" == typeof t) return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                for (t in e[t] = 42, e) return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
                if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                var n = Object.getOwnPropertySymbols(e);
                if (1 !== n.length || n[0] !== t) return !1;
                if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (42 !== o.value || !0 !== o.enumerable) return !1;
                }
                return !0;
            };
        },
        9957: (e, t, r) => {
            "use strict";
            var n = Function.prototype.call, o = Object.prototype.hasOwnProperty, i = r(6743);
            e.exports = i.call(n, o);
        },
        6938: e => {
            var t = [].indexOf;
            e.exports = function(e, r) {
                if (t) return e.indexOf(r);
                for (var n = 0; n < e.length; ++n) if (e[n] === r) return n;
                return -1;
            };
        },
        4634: e => {
            var t = {}.toString;
            e.exports = Array.isArray || function(e) {
                return "[object Array]" == t.call(e);
            };
        },
        8859: (e, t, r) => {
            var n = "function" == typeof Map && Map.prototype, o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, i = n && o && "function" == typeof o.get ? o.get : null, s = n && Map.prototype.forEach, a = "function" == typeof Set && Set.prototype, c = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, u = a && c && "function" == typeof c.get ? c.get : null, l = a && Set.prototype.forEach, p = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null, f = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null, h = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null, d = Boolean.prototype.valueOf, m = Object.prototype.toString, y = Function.prototype.toString, g = String.prototype.match, v = String.prototype.slice, b = String.prototype.replace, w = String.prototype.toUpperCase, k = String.prototype.toLowerCase, x = RegExp.prototype.test, C = Array.prototype.concat, S = Array.prototype.join, O = Array.prototype.slice, A = Math.floor, E = "function" == typeof BigInt ? BigInt.prototype.valueOf : null, L = Object.getOwnPropertySymbols, T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null, I = "function" == typeof Symbol && "object" == typeof Symbol.iterator, P = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === I || "symbol") ? Symbol.toStringTag : null, F = Object.prototype.propertyIsEnumerable, _ = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
                return e.__proto__;
            } : null);
            function j(e, t) {
                if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || x.call(/e/, t)) return t;
                var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" == typeof e) {
                    var n = e < 0 ? -A(-e) : A(e);
                    if (n !== e) {
                        var o = String(n), i = v.call(t, o.length + 1);
                        return b.call(o, r, "$&_") + "." + b.call(b.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
                    }
                }
                return b.call(t, r, "$&_");
            }
            var R = r(2634), U = R.custom, N = V(U) ? U : null;
            function D(e, t, r) {
                var n = "double" === (r.quoteStyle || t) ? '"' : "'";
                return n + e + n;
            }
            function M(e) {
                return b.call(String(e), /"/g, "&quot;");
            }
            function q(e) {
                return !("[object Array]" !== z(e) || P && "object" == typeof e && P in e);
            }
            function B(e) {
                return !("[object RegExp]" !== z(e) || P && "object" == typeof e && P in e);
            }
            function V(e) {
                if (I) return e && "object" == typeof e && e instanceof Symbol;
                if ("symbol" == typeof e) return !0;
                if (!e || "object" != typeof e || !T) return !1;
                try {
                    return T.call(e), !0;
                } catch (e) {}
                return !1;
            }
            e.exports = function e(t, n, o, a) {
                var c = n || {};
                if (H(c, "quoteStyle") && "single" !== c.quoteStyle && "double" !== c.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                if (H(c, "maxStringLength") && ("number" == typeof c.maxStringLength ? c.maxStringLength < 0 && c.maxStringLength !== 1 / 0 : null !== c.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                var m = !H(c, "customInspect") || c.customInspect;
                if ("boolean" != typeof m && "symbol" !== m) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                if (H(c, "indent") && null !== c.indent && "\t" !== c.indent && !(parseInt(c.indent, 10) === c.indent && c.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                if (H(c, "numericSeparator") && "boolean" != typeof c.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                var w = c.numericSeparator;
                if (void 0 === t) return "undefined";
                if (null === t) return "null";
                if ("boolean" == typeof t) return t ? "true" : "false";
                if ("string" == typeof t) return W(t, c);
                if ("number" == typeof t) {
                    if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                    var x = String(t);
                    return w ? j(t, x) : x;
                }
                if ("bigint" == typeof t) {
                    var A = String(t) + "n";
                    return w ? j(t, A) : A;
                }
                var L = void 0 === c.depth ? 5 : c.depth;
                if (void 0 === o && (o = 0), o >= L && L > 0 && "object" == typeof t) return q(t) ? "[Array]" : "[Object]";
                var U = function(e, t) {
                    var r;
                    if ("\t" === e.indent) r = "\t"; else {
                        if (!("number" == typeof e.indent && e.indent > 0)) return null;
                        r = S.call(Array(e.indent + 1), " ");
                    }
                    return {
                        base: r,
                        prev: S.call(Array(t + 1), r)
                    };
                }(c, o);
                if (void 0 === a) a = []; else if (G(a, t) >= 0) return "[Circular]";
                function $(t, r, n) {
                    if (r && (a = O.call(a)).push(r), n) {
                        var i = {
                            depth: c.depth
                        };
                        return H(c, "quoteStyle") && (i.quoteStyle = c.quoteStyle), e(t, i, o + 1, a);
                    }
                    return e(t, c, o + 1, a);
                }
                if ("function" == typeof t && !B(t)) {
                    var Y = function(e) {
                        if (e.name) return e.name;
                        var t = g.call(y.call(e), /^function\s*([\w$]+)/);
                        if (t) return t[1];
                        return null;
                    }(t), ee = Z(t, $);
                    return "[Function" + (Y ? ": " + Y : " (anonymous)") + "]" + (ee.length > 0 ? " { " + S.call(ee, ", ") + " }" : "");
                }
                if (V(t)) {
                    var te = I ? b.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : T.call(t);
                    return "object" != typeof t || I ? te : J(te);
                }
                if (function(e) {
                    if (!e || "object" != typeof e) return !1;
                    if ("undefined" != typeof HTMLElement && e instanceof HTMLElement) return !0;
                    return "string" == typeof e.nodeName && "function" == typeof e.getAttribute;
                }(t)) {
                    for (var re = "<" + k.call(String(t.nodeName)), ne = t.attributes || [], oe = 0; oe < ne.length; oe++) re += " " + ne[oe].name + "=" + D(M(ne[oe].value), "double", c);
                    return re += ">", t.childNodes && t.childNodes.length && (re += "..."), re += "</" + k.call(String(t.nodeName)) + ">";
                }
                if (q(t)) {
                    if (0 === t.length) return "[]";
                    var ie = Z(t, $);
                    return U && !function(e) {
                        for (var t = 0; t < e.length; t++) if (G(e[t], "\n") >= 0) return !1;
                        return !0;
                    }(ie) ? "[" + X(ie, U) + "]" : "[ " + S.call(ie, ", ") + " ]";
                }
                if (function(e) {
                    return !("[object Error]" !== z(e) || P && "object" == typeof e && P in e);
                }(t)) {
                    var se = Z(t, $);
                    return "cause" in Error.prototype || !("cause" in t) || F.call(t, "cause") ? 0 === se.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + S.call(se, ", ") + " }" : "{ [" + String(t) + "] " + S.call(C.call("[cause]: " + $(t.cause), se), ", ") + " }";
                }
                if ("object" == typeof t && m) {
                    if (N && "function" == typeof t[N] && R) return R(t, {
                        depth: L - o
                    });
                    if ("symbol" !== m && "function" == typeof t.inspect) return t.inspect();
                }
                if (function(e) {
                    if (!i || !e || "object" != typeof e) return !1;
                    try {
                        i.call(e);
                        try {
                            u.call(e);
                        } catch (e) {
                            return !0;
                        }
                        return e instanceof Map;
                    } catch (e) {}
                    return !1;
                }(t)) {
                    var ae = [];
                    return s && s.call(t, (function(e, r) {
                        ae.push($(r, t, !0) + " => " + $(e, t));
                    })), K("Map", i.call(t), ae, U);
                }
                if (function(e) {
                    if (!u || !e || "object" != typeof e) return !1;
                    try {
                        u.call(e);
                        try {
                            i.call(e);
                        } catch (e) {
                            return !0;
                        }
                        return e instanceof Set;
                    } catch (e) {}
                    return !1;
                }(t)) {
                    var ce = [];
                    return l && l.call(t, (function(e) {
                        ce.push($(e, t));
                    })), K("Set", u.call(t), ce, U);
                }
                if (function(e) {
                    if (!p || !e || "object" != typeof e) return !1;
                    try {
                        p.call(e, p);
                        try {
                            f.call(e, f);
                        } catch (e) {
                            return !0;
                        }
                        return e instanceof WeakMap;
                    } catch (e) {}
                    return !1;
                }(t)) return Q("WeakMap");
                if (function(e) {
                    if (!f || !e || "object" != typeof e) return !1;
                    try {
                        f.call(e, f);
                        try {
                            p.call(e, p);
                        } catch (e) {
                            return !0;
                        }
                        return e instanceof WeakSet;
                    } catch (e) {}
                    return !1;
                }(t)) return Q("WeakSet");
                if (function(e) {
                    if (!h || !e || "object" != typeof e) return !1;
                    try {
                        return h.call(e), !0;
                    } catch (e) {}
                    return !1;
                }(t)) return Q("WeakRef");
                if (function(e) {
                    return !("[object Number]" !== z(e) || P && "object" == typeof e && P in e);
                }(t)) return J($(Number(t)));
                if (function(e) {
                    if (!e || "object" != typeof e || !E) return !1;
                    try {
                        return E.call(e), !0;
                    } catch (e) {}
                    return !1;
                }(t)) return J($(E.call(t)));
                if (function(e) {
                    return !("[object Boolean]" !== z(e) || P && "object" == typeof e && P in e);
                }(t)) return J(d.call(t));
                if (function(e) {
                    return !("[object String]" !== z(e) || P && "object" == typeof e && P in e);
                }(t)) return J($(String(t)));
                if ("undefined" != typeof window && t === window) return "{ [object Window] }";
                if (t === r.g) return "{ [object globalThis] }";
                if (!function(e) {
                    return !("[object Date]" !== z(e) || P && "object" == typeof e && P in e);
                }(t) && !B(t)) {
                    var ue = Z(t, $), le = _ ? _(t) === Object.prototype : t instanceof Object || t.constructor === Object, pe = t instanceof Object ? "" : "null prototype", fe = !le && P && Object(t) === t && P in t ? v.call(z(t), 8, -1) : pe ? "Object" : "", he = (le || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (fe || pe ? "[" + S.call(C.call([], fe || [], pe || []), ": ") + "] " : "");
                    return 0 === ue.length ? he + "{}" : U ? he + "{" + X(ue, U) + "}" : he + "{ " + S.call(ue, ", ") + " }";
                }
                return String(t);
            };
            var $ = Object.prototype.hasOwnProperty || function(e) {
                return e in this;
            };
            function H(e, t) {
                return $.call(e, t);
            }
            function z(e) {
                return m.call(e);
            }
            function G(e, t) {
                if (e.indexOf) return e.indexOf(t);
                for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
                return -1;
            }
            function W(e, t) {
                if (e.length > t.maxStringLength) {
                    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
                    return W(v.call(e, 0, t.maxStringLength), t) + n;
                }
                return D(b.call(b.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Y), "single", t);
            }
            function Y(e) {
                var t = e.charCodeAt(0), r = {
                    8: "b",
                    9: "t",
                    10: "n",
                    12: "f",
                    13: "r"
                }[t];
                return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + w.call(t.toString(16));
            }
            function J(e) {
                return "Object(" + e + ")";
            }
            function Q(e) {
                return e + " { ? }";
            }
            function K(e, t, r, n) {
                return e + " (" + t + ") {" + (n ? X(r, n) : S.call(r, ", ")) + "}";
            }
            function X(e, t) {
                if (0 === e.length) return "";
                var r = "\n" + t.prev + t.base;
                return r + S.call(e, "," + r) + "\n" + t.prev;
            }
            function Z(e, t) {
                var r = q(e), n = [];
                if (r) {
                    n.length = e.length;
                    for (var o = 0; o < e.length; o++) n[o] = H(e, o) ? t(e[o], e) : "";
                }
                var i, s = "function" == typeof L ? L(e) : [];
                if (I) {
                    i = {};
                    for (var a = 0; a < s.length; a++) i["$" + s[a]] = s[a];
                }
                for (var c in e) H(e, c) && (r && String(Number(c)) === c && c < e.length || I && i["$" + c] instanceof Symbol || (x.call(/[^\w$]/, c) ? n.push(t(c, e) + ": " + t(e[c], e)) : n.push(c + ": " + t(e[c], e))));
                if ("function" == typeof L) for (var u = 0; u < s.length; u++) F.call(e, s[u]) && n.push("[" + t(s[u]) + "]: " + t(e[s[u]], e));
                return n;
            }
        },
        9140: (e, t) => {
            t.encode = function(e) {
                var t = "";
                for (var r in e) e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
                return t;
            }, t.decode = function(e) {
                for (var t = {}, r = e.split("&"), n = 0, o = r.length; n < o; n++) {
                    var i = r[n].split("=");
                    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
                }
                return t;
            };
        },
        4258: e => {
            var t = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, r = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
            e.exports = function(e) {
                var n = e, o = e.indexOf("["), i = e.indexOf("]");
                -1 != o && -1 != i && (e = e.substring(0, o) + e.substring(o, i).replace(/:/g, ";") + e.substring(i, e.length));
                for (var s, a, c = t.exec(e || ""), u = {}, l = 14; l--; ) u[r[l]] = c[l] || "";
                return -1 != o && -1 != i && (u.source = n, u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":"), 
                u.authority = u.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), 
                u.ipv6uri = !0), u.pathNames = function(e, t) {
                    var r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
                    "/" != t.substr(0, 1) && 0 !== t.length || n.splice(0, 1);
                    "/" == t.substr(t.length - 1, 1) && n.splice(n.length - 1, 1);
                    return n;
                }(0, u.path), u.queryKey = (s = u.query, a = {}, s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(e, t, r) {
                    t && (a[t] = r);
                })), a), u;
            };
        },
        4765: e => {
            "use strict";
            var t = String.prototype.replace, r = /%20/g, n = "RFC1738", o = "RFC3986";
            e.exports = {
                default: o,
                formatters: {
                    RFC1738: function(e) {
                        return t.call(e, r, "+");
                    },
                    RFC3986: function(e) {
                        return String(e);
                    }
                },
                RFC1738: n,
                RFC3986: o
            };
        },
        5373: (e, t, r) => {
            "use strict";
            var n = r(8636), o = r(2642), i = r(4765);
            e.exports = {
                formats: i,
                parse: o,
                stringify: n
            };
        },
        2642: (e, t, r) => {
            "use strict";
            var n = r(7720), o = Object.prototype.hasOwnProperty, i = Array.isArray, s = {
                allowDots: !1,
                allowEmptyArrays: !1,
                allowPrototypes: !1,
                allowSparse: !1,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: !1,
                comma: !1,
                decodeDotInKeys: !0,
                decoder: n.decode,
                delimiter: "&",
                depth: 5,
                duplicates: "combine",
                ignoreQueryPrefix: !1,
                interpretNumericEntities: !1,
                parameterLimit: 1e3,
                parseArrays: !0,
                plainObjects: !1,
                strictNullHandling: !1
            }, a = function(e) {
                return e.replace(/&#(\d+);/g, (function(e, t) {
                    return String.fromCharCode(parseInt(t, 10));
                }));
            }, c = function(e, t) {
                return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
            }, u = function(e, t, r, n) {
                if (e) {
                    var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, s = /(\[[^[\]]*])/g, a = r.depth > 0 && /(\[[^[\]]*])/.exec(i), u = a ? i.slice(0, a.index) : i, l = [];
                    if (u) {
                        if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes) return;
                        l.push(u);
                    }
                    for (var p = 0; r.depth > 0 && null !== (a = s.exec(i)) && p < r.depth; ) {
                        if (p += 1, !r.plainObjects && o.call(Object.prototype, a[1].slice(1, -1)) && !r.allowPrototypes) return;
                        l.push(a[1]);
                    }
                    return a && l.push("[" + i.slice(a.index) + "]"), function(e, t, r, n) {
                        for (var o = n ? t : c(t, r), i = e.length - 1; i >= 0; --i) {
                            var s, a = e[i];
                            if ("[]" === a && r.parseArrays) s = r.allowEmptyArrays && "" === o ? [] : [].concat(o); else {
                                s = r.plainObjects ? Object.create(null) : {};
                                var u = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a, l = r.decodeDotInKeys ? u.replace(/%2E/g, ".") : u, p = parseInt(l, 10);
                                r.parseArrays || "" !== l ? !isNaN(p) && a !== l && String(p) === l && p >= 0 && r.parseArrays && p <= r.arrayLimit ? (s = [])[p] = o : "__proto__" !== l && (s[l] = o) : s = {
                                    0: o
                                };
                            }
                            o = s;
                        }
                        return o;
                    }(l, t, r, n);
                }
            };
            e.exports = function(e, t) {
                var r = function(e) {
                    if (!e) return s;
                    if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if (void 0 !== e.decodeDotInKeys && "boolean" != typeof e.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var t = void 0 === e.charset ? s.charset : e.charset, r = void 0 === e.duplicates ? s.duplicates : e.duplicates;
                    if ("combine" !== r && "first" !== r && "last" !== r) throw new TypeError("The duplicates option must be either combine, first, or last");
                    return {
                        allowDots: void 0 === e.allowDots ? !0 === e.decodeDotInKeys || s.allowDots : !!e.allowDots,
                        allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : s.allowEmptyArrays,
                        allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
                        allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : s.allowSparse,
                        arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
                        comma: "boolean" == typeof e.comma ? e.comma : s.comma,
                        decodeDotInKeys: "boolean" == typeof e.decodeDotInKeys ? e.decodeDotInKeys : s.decodeDotInKeys,
                        decoder: "function" == typeof e.decoder ? e.decoder : s.decoder,
                        delimiter: "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
                        depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : s.depth,
                        duplicates: r,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
                        parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : s.plainObjects,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling
                    };
                }(t);
                if ("" === e || null == e) return r.plainObjects ? Object.create(null) : {};
                for (var l = "string" == typeof e ? function(e, t) {
                    var r, u = {
                        __proto__: null
                    }, l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, p = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, f = l.split(t.delimiter, p), h = -1, d = t.charset;
                    if (t.charsetSentinel) for (r = 0; r < f.length; ++r) 0 === f[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === f[r] ? d = "utf-8" : "utf8=%26%2310003%3B" === f[r] && (d = "iso-8859-1"), 
                    h = r, r = f.length);
                    for (r = 0; r < f.length; ++r) if (r !== h) {
                        var m, y, g = f[r], v = g.indexOf("]="), b = -1 === v ? g.indexOf("=") : v + 1;
                        -1 === b ? (m = t.decoder(g, s.decoder, d, "key"), y = t.strictNullHandling ? null : "") : (m = t.decoder(g.slice(0, b), s.decoder, d, "key"), 
                        y = n.maybeMap(c(g.slice(b + 1), t), (function(e) {
                            return t.decoder(e, s.decoder, d, "value");
                        }))), y && t.interpretNumericEntities && "iso-8859-1" === d && (y = a(y)), g.indexOf("[]=") > -1 && (y = i(y) ? [ y ] : y);
                        var w = o.call(u, m);
                        w && "combine" === t.duplicates ? u[m] = n.combine(u[m], y) : w && "last" !== t.duplicates || (u[m] = y);
                    }
                    return u;
                }(e, r) : e, p = r.plainObjects ? Object.create(null) : {}, f = Object.keys(l), h = 0; h < f.length; ++h) {
                    var d = f[h], m = u(d, l[d], r, "string" == typeof e);
                    p = n.merge(p, m, r);
                }
                return !0 === r.allowSparse ? p : n.compact(p);
            };
        },
        8636: (e, t, r) => {
            "use strict";
            var n = r(920), o = r(7720), i = r(4765), s = Object.prototype.hasOwnProperty, a = {
                brackets: function(e) {
                    return e + "[]";
                },
                comma: "comma",
                indices: function(e, t) {
                    return e + "[" + t + "]";
                },
                repeat: function(e) {
                    return e;
                }
            }, c = Array.isArray, u = Array.prototype.push, l = function(e, t) {
                u.apply(e, c(t) ? t : [ t ]);
            }, p = Date.prototype.toISOString, f = i.default, h = {
                addQueryPrefix: !1,
                allowDots: !1,
                allowEmptyArrays: !1,
                arrayFormat: "indices",
                charset: "utf-8",
                charsetSentinel: !1,
                delimiter: "&",
                encode: !0,
                encodeDotInKeys: !1,
                encoder: o.encode,
                encodeValuesOnly: !1,
                format: f,
                formatter: i.formatters[f],
                indices: !1,
                serializeDate: function(e) {
                    return p.call(e);
                },
                skipNulls: !1,
                strictNullHandling: !1
            }, d = {}, m = function e(t, r, i, s, a, u, p, f, m, y, g, v, b, w, k, x, C, S) {
                for (var O, A = t, E = S, L = 0, T = !1; void 0 !== (E = E.get(d)) && !T; ) {
                    var I = E.get(t);
                    if (L += 1, void 0 !== I) {
                        if (I === L) throw new RangeError("Cyclic object value");
                        T = !0;
                    }
                    void 0 === E.get(d) && (L = 0);
                }
                if ("function" == typeof y ? A = y(r, A) : A instanceof Date ? A = b(A) : "comma" === i && c(A) && (A = o.maybeMap(A, (function(e) {
                    return e instanceof Date ? b(e) : e;
                }))), null === A) {
                    if (u) return m && !x ? m(r, h.encoder, C, "key", w) : r;
                    A = "";
                }
                if ("string" == typeof (O = A) || "number" == typeof O || "boolean" == typeof O || "symbol" == typeof O || "bigint" == typeof O || o.isBuffer(A)) return m ? [ k(x ? r : m(r, h.encoder, C, "key", w)) + "=" + k(m(A, h.encoder, C, "value", w)) ] : [ k(r) + "=" + k(String(A)) ];
                var P, F = [];
                if (void 0 === A) return F;
                if ("comma" === i && c(A)) x && m && (A = o.maybeMap(A, m)), P = [ {
                    value: A.length > 0 ? A.join(",") || null : void 0
                } ]; else if (c(y)) P = y; else {
                    var _ = Object.keys(A);
                    P = g ? _.sort(g) : _;
                }
                var j = f ? r.replace(/\./g, "%2E") : r, R = s && c(A) && 1 === A.length ? j + "[]" : j;
                if (a && c(A) && 0 === A.length) return R + "[]";
                for (var U = 0; U < P.length; ++U) {
                    var N = P[U], D = "object" == typeof N && void 0 !== N.value ? N.value : A[N];
                    if (!p || null !== D) {
                        var M = v && f ? N.replace(/\./g, "%2E") : N, q = c(A) ? "function" == typeof i ? i(R, M) : R : R + (v ? "." + M : "[" + M + "]");
                        S.set(t, L);
                        var B = n();
                        B.set(d, S), l(F, e(D, q, i, s, a, u, p, f, "comma" === i && x && c(A) ? null : m, y, g, v, b, w, k, x, C, B));
                    }
                }
                return F;
            };
            e.exports = function(e, t) {
                var r, o = e, u = function(e) {
                    if (!e) return h;
                    if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if (void 0 !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                    var t = e.charset || h.charset;
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var r = i.default;
                    if (void 0 !== e.format) {
                        if (!s.call(i.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                        r = e.format;
                    }
                    var n, o = i.formatters[r], u = h.filter;
                    if (("function" == typeof e.filter || c(e.filter)) && (u = e.filter), n = e.arrayFormat in a ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : h.arrayFormat, 
                    "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                    var l = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || h.allowDots : !!e.allowDots;
                    return {
                        addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : h.addQueryPrefix,
                        allowDots: l,
                        allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : h.allowEmptyArrays,
                        arrayFormat: n,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : h.charsetSentinel,
                        commaRoundTrip: e.commaRoundTrip,
                        delimiter: void 0 === e.delimiter ? h.delimiter : e.delimiter,
                        encode: "boolean" == typeof e.encode ? e.encode : h.encode,
                        encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : h.encodeDotInKeys,
                        encoder: "function" == typeof e.encoder ? e.encoder : h.encoder,
                        encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : h.encodeValuesOnly,
                        filter: u,
                        format: r,
                        formatter: o,
                        serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : h.serializeDate,
                        skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : h.skipNulls,
                        sort: "function" == typeof e.sort ? e.sort : null,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : h.strictNullHandling
                    };
                }(t);
                "function" == typeof u.filter ? o = (0, u.filter)("", o) : c(u.filter) && (r = u.filter);
                var p = [];
                if ("object" != typeof o || null === o) return "";
                var f = a[u.arrayFormat], d = "comma" === f && u.commaRoundTrip;
                r || (r = Object.keys(o)), u.sort && r.sort(u.sort);
                for (var y = n(), g = 0; g < r.length; ++g) {
                    var v = r[g];
                    u.skipNulls && null === o[v] || l(p, m(o[v], v, f, d, u.allowEmptyArrays, u.strictNullHandling, u.skipNulls, u.encodeDotInKeys, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, y));
                }
                var b = p.join(u.delimiter), w = !0 === u.addQueryPrefix ? "?" : "";
                return u.charsetSentinel && ("iso-8859-1" === u.charset ? w += "utf8=%26%2310003%3B&" : w += "utf8=%E2%9C%93&"), 
                b.length > 0 ? w + b : "";
            };
        },
        7720: (e, t, r) => {
            "use strict";
            var n = r(4765), o = Object.prototype.hasOwnProperty, i = Array.isArray, s = function() {
                for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                return e;
            }(), a = function(e, t) {
                for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) void 0 !== e[n] && (r[n] = e[n]);
                return r;
            };
            e.exports = {
                arrayToObject: a,
                assign: function(e, t) {
                    return Object.keys(t).reduce((function(e, r) {
                        return e[r] = t[r], e;
                    }), e);
                },
                combine: function(e, t) {
                    return [].concat(e, t);
                },
                compact: function(e) {
                    for (var t = [ {
                        obj: {
                            o: e
                        },
                        prop: "o"
                    } ], r = [], n = 0; n < t.length; ++n) for (var o = t[n], s = o.obj[o.prop], a = Object.keys(s), c = 0; c < a.length; ++c) {
                        var u = a[c], l = s[u];
                        "object" == typeof l && null !== l && -1 === r.indexOf(l) && (t.push({
                            obj: s,
                            prop: u
                        }), r.push(l));
                    }
                    return function(e) {
                        for (;e.length > 1; ) {
                            var t = e.pop(), r = t.obj[t.prop];
                            if (i(r)) {
                                for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                                t.obj[t.prop] = n;
                            }
                        }
                    }(t), e;
                },
                decode: function(e, t, r) {
                    var n = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(n);
                    } catch (e) {
                        return n;
                    }
                },
                encode: function(e, t, r, o, i) {
                    if (0 === e.length) return e;
                    var a = e;
                    if ("symbol" == typeof e ? a = Symbol.prototype.toString.call(e) : "string" != typeof e && (a = String(e)), 
                    "iso-8859-1" === r) return escape(a).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                    }));
                    for (var c = "", u = 0; u < a.length; ++u) {
                        var l = a.charCodeAt(u);
                        45 === l || 46 === l || 95 === l || 126 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || i === n.RFC1738 && (40 === l || 41 === l) ? c += a.charAt(u) : l < 128 ? c += s[l] : l < 2048 ? c += s[192 | l >> 6] + s[128 | 63 & l] : l < 55296 || l >= 57344 ? c += s[224 | l >> 12] + s[128 | l >> 6 & 63] + s[128 | 63 & l] : (u += 1, 
                        l = 65536 + ((1023 & l) << 10 | 1023 & a.charCodeAt(u)), c += s[240 | l >> 18] + s[128 | l >> 12 & 63] + s[128 | l >> 6 & 63] + s[128 | 63 & l]);
                    }
                    return c;
                },
                isBuffer: function(e) {
                    return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
                },
                isRegExp: function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e);
                },
                maybeMap: function(e, t) {
                    if (i(e)) {
                        for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
                        return r;
                    }
                    return t(e);
                },
                merge: function e(t, r, n) {
                    if (!r) return t;
                    if ("object" != typeof r) {
                        if (i(t)) t.push(r); else {
                            if (!t || "object" != typeof t) return [ t, r ];
                            (n && (n.plainObjects || n.allowPrototypes) || !o.call(Object.prototype, r)) && (t[r] = !0);
                        }
                        return t;
                    }
                    if (!t || "object" != typeof t) return [ t ].concat(r);
                    var s = t;
                    return i(t) && !i(r) && (s = a(t, n)), i(t) && i(r) ? (r.forEach((function(r, i) {
                        if (o.call(t, i)) {
                            var s = t[i];
                            s && "object" == typeof s && r && "object" == typeof r ? t[i] = e(s, r, n) : t.push(r);
                        } else t[i] = r;
                    })), t) : Object.keys(r).reduce((function(t, i) {
                        var s = r[i];
                        return o.call(t, i) ? t[i] = e(t[i], s, n) : t[i] = s, t;
                    }), s);
                }
            };
        },
        4930: e => {
            "use strict";
            function t(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
            e.exports = function(e, n, o, i) {
                n = n || "&", o = o || "=";
                var s = {};
                if ("string" != typeof e || 0 === e.length) return s;
                var a = /\+/g;
                e = e.split(n);
                var c = 1e3;
                i && "number" == typeof i.maxKeys && (c = i.maxKeys);
                var u = e.length;
                c > 0 && u > c && (u = c);
                for (var l = 0; l < u; ++l) {
                    var p, f, h, d, m = e[l].replace(a, "%20"), y = m.indexOf(o);
                    y >= 0 ? (p = m.substr(0, y), f = m.substr(y + 1)) : (p = m, f = ""), h = decodeURIComponent(p), 
                    d = decodeURIComponent(f), t(s, h) ? r(s[h]) ? s[h].push(d) : s[h] = [ s[h], d ] : s[h] = d;
                }
                return s;
            };
            var r = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            };
        },
        1590: e => {
            "use strict";
            var t = function(e) {
                switch (typeof e) {
                  case "string":
                    return e;

                  case "boolean":
                    return e ? "true" : "false";

                  case "number":
                    return isFinite(e) ? e : "";

                  default:
                    return "";
                }
            };
            e.exports = function(e, i, s, a) {
                return i = i || "&", s = s || "=", null === e && (e = void 0), "object" == typeof e ? n(o(e), (function(o) {
                    var a = encodeURIComponent(t(o)) + s;
                    return r(e[o]) ? n(e[o], (function(e) {
                        return a + encodeURIComponent(t(e));
                    })).join(i) : a + encodeURIComponent(t(e[o]));
                })).join(i) : a ? encodeURIComponent(t(a)) + s + encodeURIComponent(t(e)) : "";
            };
            var r = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            };
            function n(e, t) {
                if (e.map) return e.map(t);
                for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                return r;
            }
            var o = Object.keys || function(e) {
                var t = [];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return t;
            };
        },
        2894: (e, t, r) => {
            "use strict";
            t.decode = t.parse = r(4930), t.encode = t.stringify = r(1590);
        },
        334: e => {
            "use strict";
            function t(e, r) {
                var n;
                return n = Array.isArray(e) ? [] : {}, r.push(e), Object.keys(e).forEach((function(o) {
                    var i = e[o];
                    "function" != typeof i && (i && "object" == typeof i ? -1 !== r.indexOf(e[o]) ? n[o] = "[Circular]" : n[o] = t(e[o], r.slice(0)) : n[o] = i);
                })), "string" == typeof e.name && (n.name = e.name), "string" == typeof e.message && (n.message = e.message), 
                "string" == typeof e.stack && (n.stack = e.stack), n;
            }
            e.exports = function(e) {
                return "object" == typeof e ? t(e, []) : "function" == typeof e ? "[Function: " + (e.name || "anonymous") + "]" : e;
            };
        },
        6897: (e, t, r) => {
            "use strict";
            var n = r(453), o = r(41), i = r(592)(), s = r(5795), a = r(9675), c = n("%Math.floor%");
            e.exports = function(e, t) {
                if ("function" != typeof e) throw new a("`fn` is not a function");
                if ("number" != typeof t || t < 0 || t > 4294967295 || c(t) !== t) throw new a("`length` must be a positive 32-bit integer");
                var r = arguments.length > 2 && !!arguments[2], n = !0, u = !0;
                if ("length" in e && s) {
                    var l = s(e, "length");
                    l && !l.configurable && (n = !1), l && !l.writable && (u = !1);
                }
                return (n || u || !r) && (i ? o(e, "length", t, !0, !0) : o(e, "length", t)), e;
            };
        },
        920: (e, t, r) => {
            "use strict";
            var n = r(453), o = r(8075), i = r(8859), s = r(9675), a = n("%WeakMap%", !0), c = n("%Map%", !0), u = o("WeakMap.prototype.get", !0), l = o("WeakMap.prototype.set", !0), p = o("WeakMap.prototype.has", !0), f = o("Map.prototype.get", !0), h = o("Map.prototype.set", !0), d = o("Map.prototype.has", !0), m = function(e, t) {
                for (var r, n = e; null !== (r = n.next); n = r) if (r.key === t) return n.next = r.next, 
                r.next = e.next, e.next = r, r;
            };
            e.exports = function() {
                var e, t, r, n = {
                    assert: function(e) {
                        if (!n.has(e)) throw new s("Side channel does not contain " + i(e));
                    },
                    get: function(n) {
                        if (a && n && ("object" == typeof n || "function" == typeof n)) {
                            if (e) return u(e, n);
                        } else if (c) {
                            if (t) return f(t, n);
                        } else if (r) return function(e, t) {
                            var r = m(e, t);
                            return r && r.value;
                        }(r, n);
                    },
                    has: function(n) {
                        if (a && n && ("object" == typeof n || "function" == typeof n)) {
                            if (e) return p(e, n);
                        } else if (c) {
                            if (t) return d(t, n);
                        } else if (r) return function(e, t) {
                            return !!m(e, t);
                        }(r, n);
                        return !1;
                    },
                    set: function(n, o) {
                        a && n && ("object" == typeof n || "function" == typeof n) ? (e || (e = new a), 
                        l(e, n, o)) : c ? (t || (t = new c), h(t, n, o)) : (r || (r = {
                            key: {},
                            next: null
                        }), function(e, t, r) {
                            var n = m(e, t);
                            n ? n.value = r : e.next = {
                                key: t,
                                next: e.next,
                                value: r
                            };
                        }(r, n, o));
                    }
                };
                return n;
            };
        },
        7698: (e, t, r) => {
            var n = r(9331), o = r(5074), i = r(9725), s = r(9368)("socket.io-client");
            e.exports = t = c;
            var a = t.managers = {};
            function c(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, o = n(e), c = o.source, u = o.id, l = o.path, p = a[u] && l in a[u].nsps;
                return t.forceNew || t["force new connection"] || !1 === t.multiplex || p ? (s("ignoring socket cache for %s", c), 
                r = i(c, t)) : (a[u] || (s("new io instance for %s", c), a[u] = i(c, t)), r = a[u]), 
                o.query && !t.query && (t.query = o.query), r.socket(o.path, t);
            }
            t.protocol = o.protocol, t.connect = c, t.Manager = r(9725), t.Socket = r(7773);
        },
        9725: (e, t, r) => {
            var n = r(3357), o = r(7773), i = r(5971), s = r(5074), a = r(4745), c = r(8144), u = r(9368)("socket.io-client:manager"), l = r(6938), p = r(3059), f = Object.prototype.hasOwnProperty;
            function h(e, t) {
                if (!(this instanceof h)) return new h(e, t);
                e && "object" == typeof e && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", 
                this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), 
                this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), 
                this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), 
                this.backoff = new p({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", 
                this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
                var r = t.parser || s;
                this.encoder = new r.Encoder, this.decoder = new r.Decoder, this.autoConnect = !1 !== t.autoConnect, 
                this.autoConnect && this.open();
            }
            e.exports = h, h.prototype.emitAll = function() {
                for (var e in this.emit.apply(this, arguments), this.nsps) f.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments);
            }, h.prototype.updateSocketIds = function() {
                for (var e in this.nsps) f.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e));
            }, h.prototype.generateId = function(e) {
                return ("/" === e ? "" : e + "#") + this.engine.id;
            }, i(h.prototype), h.prototype.reconnection = function(e) {
                return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
            }, h.prototype.reconnectionAttempts = function(e) {
                return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts;
            }, h.prototype.reconnectionDelay = function(e) {
                return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), 
                this) : this._reconnectionDelay;
            }, h.prototype.randomizationFactor = function(e) {
                return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), 
                this) : this._randomizationFactor;
            }, h.prototype.reconnectionDelayMax = function(e) {
                return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), 
                this) : this._reconnectionDelayMax;
            }, h.prototype.timeout = function(e) {
                return arguments.length ? (this._timeout = e, this) : this._timeout;
            }, h.prototype.maybeReconnectOnOpen = function() {
                !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
            }, h.prototype.open = h.prototype.connect = function(e, t) {
                if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                u("opening %s", this.uri), this.engine = n(this.uri, this.opts);
                var r = this.engine, o = this;
                this.readyState = "opening", this.skipReconnect = !1;
                var i = a(r, "open", (function() {
                    o.onopen(), e && e();
                })), s = a(r, "error", (function(t) {
                    if (u("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", t), 
                    e) {
                        var r = new Error("Connection error");
                        r.data = t, e(r);
                    } else o.maybeReconnectOnOpen();
                }));
                if (!1 !== this._timeout) {
                    var c = this._timeout;
                    u("connect attempt will timeout after %d", c), 0 === c && i.destroy();
                    var l = setTimeout((function() {
                        u("connect attempt timed out after %d", c), i.destroy(), r.close(), r.emit("error", "timeout"), 
                        o.emitAll("connect_timeout", c);
                    }), c);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(l);
                        }
                    });
                }
                return this.subs.push(i), this.subs.push(s), this;
            }, h.prototype.onopen = function() {
                u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                var e = this.engine;
                this.subs.push(a(e, "data", c(this, "ondata"))), this.subs.push(a(e, "ping", c(this, "onping"))), 
                this.subs.push(a(e, "pong", c(this, "onpong"))), this.subs.push(a(e, "error", c(this, "onerror"))), 
                this.subs.push(a(e, "close", c(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded")));
            }, h.prototype.onping = function() {
                this.lastPing = new Date, this.emitAll("ping");
            }, h.prototype.onpong = function() {
                this.emitAll("pong", new Date - this.lastPing);
            }, h.prototype.ondata = function(e) {
                this.decoder.add(e);
            }, h.prototype.ondecoded = function(e) {
                this.emit("packet", e);
            }, h.prototype.onerror = function(e) {
                u("error", e), this.emitAll("error", e);
            }, h.prototype.socket = function(e, t) {
                var r = this.nsps[e];
                if (!r) {
                    r = new o(this, e, t), this.nsps[e] = r;
                    var n = this;
                    r.on("connecting", i), r.on("connect", (function() {
                        r.id = n.generateId(e);
                    })), this.autoConnect && i();
                }
                function i() {
                    ~l(n.connecting, r) || n.connecting.push(r);
                }
                return r;
            }, h.prototype.destroy = function(e) {
                var t = l(this.connecting, e);
                ~t && this.connecting.splice(t, 1), this.connecting.length || this.close();
            }, h.prototype.packet = function(e) {
                u("writing packet %j", e);
                var t = this;
                e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, 
                this.encoder.encode(e, (function(r) {
                    for (var n = 0; n < r.length; n++) t.engine.write(r[n], e.options);
                    t.encoding = !1, t.processPacketQueue();
                })));
            }, h.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var e = this.packetBuffer.shift();
                    this.packet(e);
                }
            }, h.prototype.cleanup = function() {
                u("cleanup");
                for (var e = this.subs.length, t = 0; t < e; t++) {
                    this.subs.shift().destroy();
                }
                this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
            }, h.prototype.close = h.prototype.disconnect = function() {
                u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), 
                this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
            }, h.prototype.onclose = function(e) {
                u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", 
                this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect();
            }, h.prototype.reconnect = function() {
                if (this.reconnecting || this.skipReconnect) return this;
                var e = this;
                if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), 
                this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1; else {
                    var t = this.backoff.duration();
                    u("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
                    var r = setTimeout((function() {
                        e.skipReconnect || (u("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), 
                        e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open((function(t) {
                            t ? (u("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (u("reconnect success"), 
                            e.onreconnect());
                        })));
                    }), t);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(r);
                        }
                    });
                }
            }, h.prototype.onreconnect = function() {
                var e = this.backoff.attempts;
                this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e);
            };
        },
        4745: e => {
            e.exports = function(e, t, r) {
                return e.on(t, r), {
                    destroy: function() {
                        e.removeListener(t, r);
                    }
                };
            };
        },
        7773: (e, t, r) => {
            var n = r(5074), o = r(5971), i = r(8104), s = r(4745), a = r(8144), c = r(9368)("socket.io-client:socket"), u = r(9140), l = r(8839);
            e.exports = h;
            var p = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            }, f = o.prototype.emit;
            function h(e, t, r) {
                this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], 
                this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, 
                r && r.query && (this.query = r.query), this.io.autoConnect && this.open();
            }
            o(h.prototype), h.prototype.subEvents = function() {
                if (!this.subs) {
                    var e = this.io;
                    this.subs = [ s(e, "open", a(this, "onopen")), s(e, "packet", a(this, "onpacket")), s(e, "close", a(this, "onclose")) ];
                }
            }, h.prototype.open = h.prototype.connect = function() {
                return this.connected || (this.subEvents(), this.io.reconnecting || this.io.open(), 
                "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this;
            }, h.prototype.send = function() {
                var e = i(arguments);
                return e.unshift("message"), this.emit.apply(this, e), this;
            }, h.prototype.emit = function(e) {
                if (p.hasOwnProperty(e)) return f.apply(this, arguments), this;
                var t = i(arguments), r = {
                    type: (void 0 !== this.flags.binary ? this.flags.binary : l(t)) ? n.BINARY_EVENT : n.EVENT,
                    data: t,
                    options: {}
                };
                return r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (c("emitting packet with ack id %d", this.ids), 
                this.acks[this.ids] = t.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), 
                this.flags = {}, this;
            }, h.prototype.packet = function(e) {
                e.nsp = this.nsp, this.io.packet(e);
            }, h.prototype.onopen = function() {
                if (c("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
                    var e = "object" == typeof this.query ? u.encode(this.query) : this.query;
                    c("sending connect packet with query %s", e), this.packet({
                        type: n.CONNECT,
                        query: e
                    });
                } else this.packet({
                    type: n.CONNECT
                });
            }, h.prototype.onclose = function(e) {
                c("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, 
                this.emit("disconnect", e);
            }, h.prototype.onpacket = function(e) {
                var t = e.nsp === this.nsp, r = e.type === n.ERROR && "/" === e.nsp;
                if (t || r) switch (e.type) {
                  case n.CONNECT:
                    this.onconnect();
                    break;

                  case n.EVENT:
                  case n.BINARY_EVENT:
                    this.onevent(e);
                    break;

                  case n.ACK:
                  case n.BINARY_ACK:
                    this.onack(e);
                    break;

                  case n.DISCONNECT:
                    this.ondisconnect();
                    break;

                  case n.ERROR:
                    this.emit("error", e.data);
                }
            }, h.prototype.onevent = function(e) {
                var t = e.data || [];
                c("emitting event %j", t), null != e.id && (c("attaching ack callback to event"), 
                t.push(this.ack(e.id))), this.connected ? f.apply(this, t) : this.receiveBuffer.push(t);
            }, h.prototype.ack = function(e) {
                var t = this, r = !1;
                return function() {
                    if (!r) {
                        r = !0;
                        var o = i(arguments);
                        c("sending ack %j", o), t.packet({
                            type: l(o) ? n.BINARY_ACK : n.ACK,
                            id: e,
                            data: o
                        });
                    }
                };
            }, h.prototype.onack = function(e) {
                var t = this.acks[e.id];
                "function" == typeof t ? (c("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), 
                delete this.acks[e.id]) : c("bad ack %s", e.id);
            }, h.prototype.onconnect = function() {
                this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emit("connect");
            }, h.prototype.emitBuffered = function() {
                var e;
                for (e = 0; e < this.receiveBuffer.length; e++) f.apply(this, this.receiveBuffer[e]);
                for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
                this.sendBuffer = [];
            }, h.prototype.ondisconnect = function() {
                c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
            }, h.prototype.destroy = function() {
                if (this.subs) {
                    for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
                    this.subs = null;
                }
                this.io.destroy(this);
            }, h.prototype.close = h.prototype.disconnect = function() {
                return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
                    type: n.DISCONNECT
                })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
            }, h.prototype.compress = function(e) {
                return this.flags.compress = e, this;
            }, h.prototype.binary = function(e) {
                return this.flags.binary = e, this;
            };
        },
        9331: (e, t, r) => {
            var n = r(4258), o = r(9368)("socket.io-client:url");
            e.exports = function(e, t) {
                var r = e;
                t = t || "undefined" != typeof location && location, null == e && (e = t.protocol + "//" + t.host);
                "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e), 
                /^(https?|wss?):\/\//.test(e) || (o("protocol-less url %s", e), e = void 0 !== t ? t.protocol + "//" + e : "https://" + e), 
                o("parse %s", e), r = n(e));
                r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443"));
                r.path = r.path || "/";
                var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
                return r.id = r.protocol + "://" + i + ":" + r.port, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), 
                r;
            };
        },
        9368: (e, t, r) => {
            function n() {
                var e;
                try {
                    e = t.storage.debug;
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
                e;
            }
            (t = e.exports = r(9939)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }, t.formatArgs = function(e) {
                var r = this.useColors;
                if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), 
                !r) return;
                var n = "color: " + this.color;
                e.splice(1, 0, n, "color: inherit");
                var o = 0, i = 0;
                e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (o++, "%c" === e && (i = o));
                })), e.splice(i, 0, n);
            }, t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e;
                } catch (e) {}
            }, t.load = n, t.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage;
                } catch (e) {}
            }(), t.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
            t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message;
                }
            }, t.enable(n());
        },
        9939: (e, t, r) => {
            function n(e) {
                var r;
                function n() {
                    if (n.enabled) {
                        var e = n, o = +new Date, i = o - (r || o);
                        e.diff = i, e.prev = r, e.curr = o, r = o;
                        for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                        s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var c = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(r, n) {
                            if ("%%" === r) return r;
                            c++;
                            var o = t.formatters[n];
                            if ("function" == typeof o) {
                                var i = s[c];
                                r = o.call(e, i), s.splice(c, 1), c--;
                            }
                            return r;
                        })), t.formatArgs.call(e, s), (n.log || t.log || console.log.bind(console)).apply(e, s);
                    }
                }
                return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
                    var r, n = 0;
                    for (r in e) n = (n << 5) - n + e.charCodeAt(r), n |= 0;
                    return t.colors[Math.abs(n) % t.colors.length];
                }(e), n.destroy = o, "function" == typeof t.init && t.init(n), t.instances.push(n), 
                n;
            }
            function o() {
                var e = t.instances.indexOf(this);
                return -1 !== e && (t.instances.splice(e, 1), !0);
            }
            (t = e.exports = n.debug = n.default = n).coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e;
            }, t.disable = function() {
                t.enable("");
            }, t.enable = function(e) {
                var r;
                t.save(e), t.names = [], t.skips = [];
                var n = ("string" == typeof e ? e : "").split(/[\s,]+/), o = n.length;
                for (r = 0; r < o; r++) n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                for (r = 0; r < t.instances.length; r++) {
                    var i = t.instances[r];
                    i.enabled = t.enabled(i.namespace);
                }
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var r, n;
                for (r = 0, n = t.skips.length; r < n; r++) if (t.skips[r].test(e)) return !1;
                for (r = 0, n = t.names.length; r < n; r++) if (t.names[r].test(e)) return !0;
                return !1;
            }, t.humanize = r(2902), t.instances = [], t.names = [], t.skips = [], t.formatters = {};
        },
        2902: e => {
            var t = 1e3, r = 60 * t, n = 60 * r, o = 24 * n, i = 365.25 * o;
            function s(e, t, r) {
                if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s";
            }
            e.exports = function(e, a) {
                a = a || {};
                var c, u = typeof e;
                if ("string" === u && e.length > 0) return function(e) {
                    if ((e = String(e)).length > 100) return;
                    var s = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!s) return;
                    var a = parseFloat(s[1]);
                    switch ((s[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return a * i;

                      case "days":
                      case "day":
                      case "d":
                        return a * o;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return a * n;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return a * r;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return a * t;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return a;

                      default:
                        return;
                    }
                }(e);
                if ("number" === u && !1 === isNaN(e)) return a.long ? s(c = e, o, "day") || s(c, n, "hour") || s(c, r, "minute") || s(c, t, "second") || c + " ms" : function(e) {
                    if (e >= o) return Math.round(e / o) + "d";
                    if (e >= n) return Math.round(e / n) + "h";
                    if (e >= r) return Math.round(e / r) + "m";
                    if (e >= t) return Math.round(e / t) + "s";
                    return e + "ms";
                }(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
            };
        },
        2225: (e, t, r) => {
            var n = r(4634), o = r(8247), i = Object.prototype.toString, s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob), a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
            function c(e, t) {
                if (!e) return e;
                if (o(e)) {
                    var r = {
                        _placeholder: !0,
                        num: t.length
                    };
                    return t.push(e), r;
                }
                if (n(e)) {
                    for (var i = new Array(e.length), s = 0; s < e.length; s++) i[s] = c(e[s], t);
                    return i;
                }
                if ("object" == typeof e && !(e instanceof Date)) {
                    i = {};
                    for (var a in e) i[a] = c(e[a], t);
                    return i;
                }
                return e;
            }
            function u(e, t) {
                if (!e) return e;
                if (e && !0 === e._placeholder) {
                    if ("number" == typeof e.num && e.num >= 0 && e.num < t.length) return t[e.num];
                    throw new Error("illegal attachments");
                }
                if (n(e)) for (var r = 0; r < e.length; r++) e[r] = u(e[r], t); else if ("object" == typeof e) for (var o in e) e[o] = u(e[o], t);
                return e;
            }
            t.deconstructPacket = function(e) {
                var t = [], r = e.data, n = e;
                return n.data = c(r, t), n.attachments = t.length, {
                    packet: n,
                    buffers: t
                };
            }, t.reconstructPacket = function(e, t) {
                return e.data = u(e.data, t), e.attachments = void 0, e;
            }, t.removeBlobs = function(e, t) {
                var r = 0, i = e;
                !function e(c, u, l) {
                    if (!c) return c;
                    if (s && c instanceof Blob || a && c instanceof File) {
                        r++;
                        var p = new FileReader;
                        p.onload = function() {
                            l ? l[u] = this.result : i = this.result, --r || t(i);
                        }, p.readAsArrayBuffer(c);
                    } else if (n(c)) for (var f = 0; f < c.length; f++) e(c[f], f, c); else if ("object" == typeof c && !o(c)) for (var h in c) e(c[h], h, c);
                }(i), r || t(i);
            };
        },
        5074: (e, t, r) => {
            var n = r(852)("socket.io-parser"), o = r(5971), i = r(2225), s = r(4634), a = r(8247);
            function c() {}
            t.protocol = 4, t.types = [ "CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK" ], 
            t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, 
            t.BINARY_ACK = 6, t.Encoder = c, t.Decoder = p;
            var u = t.ERROR + '"encode error"';
            function l(e) {
                var r = "" + e.type;
                if (t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type || (r += e.attachments + "-"), 
                e.nsp && "/" !== e.nsp && (r += e.nsp + ","), null != e.id && (r += e.id), null != e.data) {
                    var o = function(e) {
                        try {
                            return JSON.stringify(e);
                        } catch (e) {
                            return !1;
                        }
                    }(e.data);
                    if (!1 === o) return u;
                    r += o;
                }
                return n("encoded %j as %s", e, r), r;
            }
            function p() {
                this.reconstructor = null;
            }
            function f(e) {
                this.reconPack = e, this.buffers = [];
            }
            function h(e) {
                return {
                    type: t.ERROR,
                    data: "parser error: " + e
                };
            }
            c.prototype.encode = function(e, r) {
                (n("encoding packet %j", e), t.BINARY_EVENT === e.type || t.BINARY_ACK === e.type) ? function(e, t) {
                    function r(e) {
                        var r = i.deconstructPacket(e), n = l(r.packet), o = r.buffers;
                        o.unshift(n), t(o);
                    }
                    i.removeBlobs(e, r);
                }(e, r) : r([ l(e) ]);
            }, o(p.prototype), p.prototype.add = function(e) {
                var r;
                if ("string" == typeof e) {
                    if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                    r = function(e) {
                        var r = 0, o = {
                            type: Number(e.charAt(0))
                        };
                        if (null == t.types[o.type]) return h("unknown packet type " + o.type);
                        if (t.BINARY_EVENT === o.type || t.BINARY_ACK === o.type) {
                            for (var i = r + 1; "-" !== e.charAt(++r) && r != e.length; ) ;
                            var a = e.substring(i, r);
                            if (a != Number(a) || "-" !== e.charAt(r)) throw new Error("Illegal attachments");
                            o.attachments = Number(a);
                        }
                        if ("/" === e.charAt(r + 1)) {
                            for (i = r + 1; ++r; ) {
                                if ("," === (u = e.charAt(r))) break;
                                if (r === e.length) break;
                            }
                            o.nsp = e.substring(i, r);
                        } else o.nsp = "/";
                        var c = e.charAt(r + 1);
                        if ("" !== c && Number(c) == c) {
                            for (i = r + 1; ++r; ) {
                                var u;
                                if (null == (u = e.charAt(r)) || Number(u) != u) {
                                    --r;
                                    break;
                                }
                                if (r === e.length) break;
                            }
                            o.id = Number(e.substring(i, r + 1));
                        }
                        if (e.charAt(++r)) {
                            var l = function(e) {
                                try {
                                    return JSON.parse(e);
                                } catch (e) {
                                    return !1;
                                }
                            }(e.substr(r));
                            if (!(!1 !== l && (o.type === t.ERROR || s(l)))) return h("invalid payload");
                            o.data = l;
                        }
                        return n("decoded %s as %j", e, o), o;
                    }(e), t.BINARY_EVENT === r.type || t.BINARY_ACK === r.type ? (this.reconstructor = new f(r), 
                    0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r);
                } else {
                    if (!a(e) && !e.base64) throw new Error("Unknown type: " + e);
                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                    (r = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, this.emit("decoded", r));
                }
            }, p.prototype.destroy = function() {
                this.reconstructor && this.reconstructor.finishedReconstruction();
            }, f.prototype.takeBinaryData = function(e) {
                if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                    var t = i.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), t;
                }
                return null;
            }, f.prototype.finishedReconstruction = function() {
                this.reconPack = null, this.buffers = [];
            };
        },
        8247: e => {
            e.exports = function(e) {
                return t && Buffer.isBuffer(e) || r && (e instanceof ArrayBuffer || n(e));
            };
            var t = "function" == typeof Buffer && "function" == typeof Buffer.isBuffer, r = "function" == typeof ArrayBuffer, n = function(e) {
                return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer;
            };
        },
        852: (e, t, r) => {
            function n() {
                var e;
                try {
                    e = t.storage.debug;
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
                e;
            }
            (t = e.exports = r(1175)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }, t.formatArgs = function(e) {
                var r = this.useColors;
                if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), 
                !r) return;
                var n = "color: " + this.color;
                e.splice(1, 0, n, "color: inherit");
                var o = 0, i = 0;
                e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (o++, "%c" === e && (i = o));
                })), e.splice(i, 0, n);
            }, t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e;
                } catch (e) {}
            }, t.load = n, t.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage;
                } catch (e) {}
            }(), t.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
            t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message;
                }
            }, t.enable(n());
        },
        1175: (e, t, r) => {
            function n(e) {
                var r;
                function n() {
                    if (n.enabled) {
                        var e = n, o = +new Date, i = o - (r || o);
                        e.diff = i, e.prev = r, e.curr = o, r = o;
                        for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                        s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var c = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(r, n) {
                            if ("%%" === r) return r;
                            c++;
                            var o = t.formatters[n];
                            if ("function" == typeof o) {
                                var i = s[c];
                                r = o.call(e, i), s.splice(c, 1), c--;
                            }
                            return r;
                        })), t.formatArgs.call(e, s), (n.log || t.log || console.log.bind(console)).apply(e, s);
                    }
                }
                return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
                    var r, n = 0;
                    for (r in e) n = (n << 5) - n + e.charCodeAt(r), n |= 0;
                    return t.colors[Math.abs(n) % t.colors.length];
                }(e), n.destroy = o, "function" == typeof t.init && t.init(n), t.instances.push(n), 
                n;
            }
            function o() {
                var e = t.instances.indexOf(this);
                return -1 !== e && (t.instances.splice(e, 1), !0);
            }
            (t = e.exports = n.debug = n.default = n).coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e;
            }, t.disable = function() {
                t.enable("");
            }, t.enable = function(e) {
                var r;
                t.save(e), t.names = [], t.skips = [];
                var n = ("string" == typeof e ? e : "").split(/[\s,]+/), o = n.length;
                for (r = 0; r < o; r++) n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                for (r = 0; r < t.instances.length; r++) {
                    var i = t.instances[r];
                    i.enabled = t.enabled(i.namespace);
                }
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var r, n;
                for (r = 0, n = t.skips.length; r < n; r++) if (t.skips[r].test(e)) return !1;
                for (r = 0, n = t.names.length; r < n; r++) if (t.names[r].test(e)) return !0;
                return !1;
            }, t.humanize = r(218), t.instances = [], t.names = [], t.skips = [], t.formatters = {};
        },
        218: e => {
            var t = 1e3, r = 60 * t, n = 60 * r, o = 24 * n, i = 365.25 * o;
            function s(e, t, r) {
                if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s";
            }
            e.exports = function(e, a) {
                a = a || {};
                var c, u = typeof e;
                if ("string" === u && e.length > 0) return function(e) {
                    if ((e = String(e)).length > 100) return;
                    var s = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!s) return;
                    var a = parseFloat(s[1]);
                    switch ((s[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return a * i;

                      case "days":
                      case "day":
                      case "d":
                        return a * o;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return a * n;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return a * r;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return a * t;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return a;

                      default:
                        return;
                    }
                }(e);
                if ("number" === u && !1 === isNaN(e)) return a.long ? s(c = e, o, "day") || s(c, n, "hour") || s(c, r, "minute") || s(c, t, "second") || c + " ms" : function(e) {
                    if (e >= o) return Math.round(e / o) + "d";
                    if (e >= n) return Math.round(e / n) + "h";
                    if (e >= r) return Math.round(e / r) + "m";
                    if (e >= t) return Math.round(e / t) + "s";
                    return e + "ms";
                }(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
            };
        },
        8104: e => {
            e.exports = function(e, t) {
                for (var r = [], n = (t = t || 0) || 0; n < e.length; n++) r[n - t] = e[n];
                return r;
            };
        },
        1270: function(e, t, r) {
            var n;
            e = r.nmd(e), function(o) {
                t && t.nodeType, e && e.nodeType;
                var i = "object" == typeof r.g && r.g;
                i.global !== i && i.window !== i && i.self;
                var s, a = 2147483647, c = 36, u = 1, l = 26, p = 38, f = 700, h = 72, d = 128, m = "-", y = /^xn--/, g = /[^\x20-\x7E]/, v = /[\x2E\u3002\uFF0E\uFF61]/g, b = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, w = c - u, k = Math.floor, x = String.fromCharCode;
                function C(e) {
                    throw new RangeError(b[e]);
                }
                function S(e, t) {
                    for (var r = e.length, n = []; r--; ) n[r] = t(e[r]);
                    return n;
                }
                function O(e, t) {
                    var r = e.split("@"), n = "";
                    return r.length > 1 && (n = r[0] + "@", e = r[1]), n + S((e = e.replace(v, ".")).split("."), t).join(".");
                }
                function A(e) {
                    for (var t, r, n = [], o = 0, i = e.length; o < i; ) (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (r = e.charCodeAt(o++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), 
                    o--) : n.push(t);
                    return n;
                }
                function E(e) {
                    return S(e, (function(e) {
                        var t = "";
                        return e > 65535 && (t += x((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), 
                        t += x(e);
                    })).join("");
                }
                function L(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
                }
                function T(e, t, r) {
                    var n = 0;
                    for (e = r ? k(e / f) : e >> 1, e += k(e / t); e > w * l >> 1; n += c) e = k(e / w);
                    return k(n + (w + 1) * e / (e + p));
                }
                function I(e) {
                    var t, r, n, o, i, s, p, f, y, g, v, b = [], w = e.length, x = 0, S = d, O = h;
                    for ((r = e.lastIndexOf(m)) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && C("not-basic"), 
                    b.push(e.charCodeAt(n));
                    for (o = r > 0 ? r + 1 : 0; o < w; ) {
                        for (i = x, s = 1, p = c; o >= w && C("invalid-input"), ((f = (v = e.charCodeAt(o++)) - 48 < 10 ? v - 22 : v - 65 < 26 ? v - 65 : v - 97 < 26 ? v - 97 : c) >= c || f > k((a - x) / s)) && C("overflow"), 
                        x += f * s, !(f < (y = p <= O ? u : p >= O + l ? l : p - O)); p += c) s > k(a / (g = c - y)) && C("overflow"), 
                        s *= g;
                        O = T(x - i, t = b.length + 1, 0 == i), k(x / t) > a - S && C("overflow"), S += k(x / t), 
                        x %= t, b.splice(x++, 0, S);
                    }
                    return E(b);
                }
                function P(e) {
                    var t, r, n, o, i, s, p, f, y, g, v, b, w, S, O, E = [];
                    for (b = (e = A(e)).length, t = d, r = 0, i = h, s = 0; s < b; ++s) (v = e[s]) < 128 && E.push(x(v));
                    for (n = o = E.length, o && E.push(m); n < b; ) {
                        for (p = a, s = 0; s < b; ++s) (v = e[s]) >= t && v < p && (p = v);
                        for (p - t > k((a - r) / (w = n + 1)) && C("overflow"), r += (p - t) * w, t = p, 
                        s = 0; s < b; ++s) if ((v = e[s]) < t && ++r > a && C("overflow"), v == t) {
                            for (f = r, y = c; !(f < (g = y <= i ? u : y >= i + l ? l : y - i)); y += c) O = f - g, 
                            S = c - g, E.push(x(L(g + O % S, 0))), f = k(O / S);
                            E.push(x(L(f, 0))), i = T(r, w, n == o), r = 0, ++n;
                        }
                        ++r, ++t;
                    }
                    return E.join("");
                }
                s = {
                    version: "1.4.1",
                    ucs2: {
                        decode: A,
                        encode: E
                    },
                    decode: I,
                    encode: P,
                    toASCII: function(e) {
                        return O(e, (function(e) {
                            return g.test(e) ? "xn--" + P(e) : e;
                        }));
                    },
                    toUnicode: function(e) {
                        return O(e, (function(e) {
                            return y.test(e) ? I(e.slice(4).toLowerCase()) : e;
                        }));
                    }
                }, void 0 === (n = function() {
                    return s;
                }.call(t, r, t, e)) || (e.exports = n);
            }();
        },
        8835: (e, t, r) => {
            "use strict";
            var n = r(1270);
            function o() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, 
                this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, 
                this.path = null, this.href = null;
            }
            var i = /^([a-z0-9.+-]+:)/i, s = /:[0-9]*$/, a = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, c = [ "{", "}", "|", "\\", "^", "`" ].concat([ "<", ">", '"', "`", " ", "\r", "\n", "\t" ]), u = [ "'" ].concat(c), l = [ "%", "/", "?", ";", "#" ].concat(u), p = [ "/", "?", "#" ], f = /^[+a-z0-9A-Z_-]{0,63}$/, h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, d = {
                javascript: !0,
                "javascript:": !0
            }, m = {
                javascript: !0,
                "javascript:": !0
            }, y = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }, g = r(5373);
            function v(e, t, r) {
                if (e && "object" == typeof e && e instanceof o) return e;
                var n = new o;
                return n.parse(e, t, r), n;
            }
            o.prototype.parse = function(e, t, r) {
                if ("string" != typeof e) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                var o = e.indexOf("?"), s = -1 !== o && o < e.indexOf("#") ? "?" : "#", c = e.split(s);
                c[0] = c[0].replace(/\\/g, "/");
                var v = e = c.join(s);
                if (v = v.trim(), !r && 1 === e.split("#").length) {
                    var b = a.exec(v);
                    if (b) return this.path = v, this.href = v, this.pathname = b[1], b[2] ? (this.search = b[2], 
                    this.query = t ? g.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", 
                    this.query = {}), this;
                }
                var w = i.exec(v);
                if (w) {
                    var k = (w = w[0]).toLowerCase();
                    this.protocol = k, v = v.substr(w.length);
                }
                if (r || w || v.match(/^\/\/[^@/]+@[^@/]+/)) {
                    var x = "//" === v.substr(0, 2);
                    !x || w && m[w] || (v = v.substr(2), this.slashes = !0);
                }
                if (!m[w] && (x || w && !y[w])) {
                    for (var C, S, O = -1, A = 0; A < p.length; A++) {
                        -1 !== (E = v.indexOf(p[A])) && (-1 === O || E < O) && (O = E);
                    }
                    -1 !== (S = -1 === O ? v.lastIndexOf("@") : v.lastIndexOf("@", O)) && (C = v.slice(0, S), 
                    v = v.slice(S + 1), this.auth = decodeURIComponent(C)), O = -1;
                    for (A = 0; A < l.length; A++) {
                        var E;
                        -1 !== (E = v.indexOf(l[A])) && (-1 === O || E < O) && (O = E);
                    }
                    -1 === O && (O = v.length), this.host = v.slice(0, O), v = v.slice(O), this.parseHost(), 
                    this.hostname = this.hostname || "";
                    var L = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!L) for (var T = this.hostname.split(/\./), I = (A = 0, T.length); A < I; A++) {
                        var P = T[A];
                        if (P && !P.match(f)) {
                            for (var F = "", _ = 0, j = P.length; _ < j; _++) P.charCodeAt(_) > 127 ? F += "x" : F += P[_];
                            if (!F.match(f)) {
                                var R = T.slice(0, A), U = T.slice(A + 1), N = P.match(h);
                                N && (R.push(N[1]), U.unshift(N[2])), U.length && (v = "/" + U.join(".") + v), this.hostname = R.join(".");
                                break;
                            }
                        }
                    }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), 
                    L || (this.hostname = n.toASCII(this.hostname));
                    var D = this.port ? ":" + this.port : "", M = this.hostname || "";
                    this.host = M + D, this.href += this.host, L && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), 
                    "/" !== v[0] && (v = "/" + v));
                }
                if (!d[k]) for (A = 0, I = u.length; A < I; A++) {
                    var q = u[A];
                    if (-1 !== v.indexOf(q)) {
                        var B = encodeURIComponent(q);
                        B === q && (B = escape(q)), v = v.split(q).join(B);
                    }
                }
                var V = v.indexOf("#");
                -1 !== V && (this.hash = v.substr(V), v = v.slice(0, V));
                var $ = v.indexOf("?");
                if (-1 !== $ ? (this.search = v.substr($), this.query = v.substr($ + 1), t && (this.query = g.parse(this.query)), 
                v = v.slice(0, $)) : t && (this.search = "", this.query = {}), v && (this.pathname = v), 
                y[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    D = this.pathname || "";
                    var H = this.search || "";
                    this.path = D + H;
                }
                return this.href = this.format(), this;
            }, o.prototype.format = function() {
                var e = this.auth || "";
                e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", o = !1, i = "";
                this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), 
                this.port && (o += ":" + this.port)), this.query && "object" == typeof this.query && Object.keys(this.query).length && (i = g.stringify(this.query, {
                    arrayFormat: "repeat",
                    addQueryPrefix: !1
                }));
                var s = this.search || i && "?" + i || "";
                return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== o ? (o = "//" + (o || ""), 
                r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""), n && "#" !== n.charAt(0) && (n = "#" + n), 
                s && "?" !== s.charAt(0) && (s = "?" + s), t + o + (r = r.replace(/[?#]/g, (function(e) {
                    return encodeURIComponent(e);
                }))) + (s = s.replace("#", "%23")) + n;
            }, o.prototype.resolve = function(e) {
                return this.resolveObject(v(e, !1, !0)).format();
            }, o.prototype.resolveObject = function(e) {
                if ("string" == typeof e) {
                    var t = new o;
                    t.parse(e, !1, !0), e = t;
                }
                for (var r = new o, n = Object.keys(this), i = 0; i < n.length; i++) {
                    var s = n[i];
                    r[s] = this[s];
                }
                if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
                if (e.slashes && !e.protocol) {
                    for (var a = Object.keys(e), c = 0; c < a.length; c++) {
                        var u = a[c];
                        "protocol" !== u && (r[u] = e[u]);
                    }
                    return y[r.protocol] && r.hostname && !r.pathname && (r.pathname = "/", r.path = r.pathname), 
                    r.href = r.format(), r;
                }
                if (e.protocol && e.protocol !== r.protocol) {
                    if (!y[e.protocol]) {
                        for (var l = Object.keys(e), p = 0; p < l.length; p++) {
                            var f = l[p];
                            r[f] = e[f];
                        }
                        return r.href = r.format(), r;
                    }
                    if (r.protocol = e.protocol, e.host || m[e.protocol]) r.pathname = e.pathname; else {
                        for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()); ) ;
                        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), 
                        h.length < 2 && h.unshift(""), r.pathname = h.join("/");
                    }
                    if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, 
                    r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                        var d = r.pathname || "", g = r.search || "";
                        r.path = d + g;
                    }
                    return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
                }
                var v = r.pathname && "/" === r.pathname.charAt(0), b = e.host || e.pathname && "/" === e.pathname.charAt(0), w = b || v || r.host && e.pathname, k = w, x = r.pathname && r.pathname.split("/") || [], C = (h = e.pathname && e.pathname.split("/") || [], 
                r.protocol && !y[r.protocol]);
                if (C && (r.hostname = "", r.port = null, r.host && ("" === x[0] ? x[0] = r.host : x.unshift(r.host)), 
                r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), 
                e.host = null), w = w && ("" === h[0] || "" === x[0])), b) r.host = e.host || "" === e.host ? e.host : r.host, 
                r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, 
                r.query = e.query, x = h; else if (h.length) x || (x = []), x.pop(), x = x.concat(h), 
                r.search = e.search, r.query = e.query; else if (null != e.search) {
                    if (C) r.host = x.shift(), r.hostname = r.host, (L = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = L.shift(), 
                    r.hostname = L.shift(), r.host = r.hostname);
                    return r.search = e.search, r.query = e.query, null === r.pathname && null === r.search || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), 
                    r.href = r.format(), r;
                }
                if (!x.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, 
                r.href = r.format(), r;
                for (var S = x.slice(-1)[0], O = (r.host || e.host || x.length > 1) && ("." === S || ".." === S) || "" === S, A = 0, E = x.length; E >= 0; E--) "." === (S = x[E]) ? x.splice(E, 1) : ".." === S ? (x.splice(E, 1), 
                A++) : A && (x.splice(E, 1), A--);
                if (!w && !k) for (;A--; A) x.unshift("..");
                !w || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), O && "/" !== x.join("/").substr(-1) && x.push("");
                var L, T = "" === x[0] || x[0] && "/" === x[0].charAt(0);
                C && (r.hostname = T ? "" : x.length ? x.shift() : "", r.host = r.hostname, (L = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = L.shift(), 
                r.hostname = L.shift(), r.host = r.hostname));
                return (w = w || r.host && x.length) && !T && x.unshift(""), x.length > 0 ? r.pathname = x.join("/") : (r.pathname = null, 
                r.path = null), null === r.pathname && null === r.search || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), 
                r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), 
                r;
            }, o.prototype.parseHost = function() {
                var e = this.host, t = s.exec(e);
                t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), 
                e && (this.hostname = e);
            }, t.parse = v, t.resolve = function(e, t) {
                return v(e, !1, !0).resolve(t);
            }, t.resolveObject = function(e, t) {
                return e ? v(e, !1, !0).resolveObject(t) : t;
            }, t.format = function(e) {
                return "string" == typeof e && (e = v(e)), e instanceof o ? e.format() : o.prototype.format.call(e);
            }, t.Url = o;
        },
        2121: e => {
            "use strict";
            var t, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), n = 64, o = {}, i = 0, s = 0;
            function a(e) {
                var t = "";
                do {
                    t = r[e % n] + t, e = Math.floor(e / n);
                } while (e > 0);
                return t;
            }
            function c() {
                var e = a(+new Date);
                return e !== t ? (i = 0, t = e) : e + "." + a(i++);
            }
            for (;s < n; s++) o[r[s]] = s;
            c.encode = a, c.decode = function(e) {
                var t = 0;
                for (s = 0; s < e.length; s++) t = t * n + o[e.charAt(s)];
                return t;
            }, e.exports = c;
        },
        2937: () => {},
        5660: () => {},
        2634: () => {},
        4633: (e, t, r) => {
            var n = r(3738).default;
            function o() {
                "use strict";
                e.exports = o = function() {
                    return r;
                }, e.exports.__esModule = !0, e.exports.default = e.exports;
                var t, r = {}, i = Object.prototype, s = i.hasOwnProperty, a = Object.defineProperty || function(e, t, r) {
                    e[t] = r.value;
                }, c = "function" == typeof Symbol ? Symbol : {}, u = c.iterator || "@@iterator", l = c.asyncIterator || "@@asyncIterator", p = c.toStringTag || "@@toStringTag";
                function f(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t];
                }
                try {
                    f({}, "");
                } catch (t) {
                    f = function(e, t, r) {
                        return e[t] = r;
                    };
                }
                function h(e, t, r, n) {
                    var o = t && t.prototype instanceof w ? t : w, i = Object.create(o.prototype), s = new _(n || []);
                    return a(i, "_invoke", {
                        value: T(e, r, s)
                    }), i;
                }
                function d(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        };
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        };
                    }
                }
                r.wrap = h;
                var m = "suspendedStart", y = "suspendedYield", g = "executing", v = "completed", b = {};
                function w() {}
                function k() {}
                function x() {}
                var C = {};
                f(C, u, (function() {
                    return this;
                }));
                var S = Object.getPrototypeOf, O = S && S(S(j([])));
                O && O !== i && s.call(O, u) && (C = O);
                var A = x.prototype = w.prototype = Object.create(C);
                function E(e) {
                    [ "next", "throw", "return" ].forEach((function(t) {
                        f(e, t, (function(e) {
                            return this._invoke(t, e);
                        }));
                    }));
                }
                function L(e, t) {
                    function r(o, i, a, c) {
                        var u = d(e[o], e, i);
                        if ("throw" !== u.type) {
                            var l = u.arg, p = l.value;
                            return p && "object" == n(p) && s.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                r("next", e, a, c);
                            }), (function(e) {
                                r("throw", e, a, c);
                            })) : t.resolve(p).then((function(e) {
                                l.value = e, a(l);
                            }), (function(e) {
                                return r("throw", e, a, c);
                            }));
                        }
                        c(u.arg);
                    }
                    var o;
                    a(this, "_invoke", {
                        value: function(e, n) {
                            function i() {
                                return new t((function(t, o) {
                                    r(e, n, t, o);
                                }));
                            }
                            return o = o ? o.then(i, i) : i();
                        }
                    });
                }
                function T(e, r, n) {
                    var o = m;
                    return function(i, s) {
                        if (o === g) throw Error("Generator is already running");
                        if (o === v) {
                            if ("throw" === i) throw s;
                            return {
                                value: t,
                                done: !0
                            };
                        }
                        for (n.method = i, n.arg = s; ;) {
                            var a = n.delegate;
                            if (a) {
                                var c = I(a, n);
                                if (c) {
                                    if (c === b) continue;
                                    return c;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if (o === m) throw o = v, n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = g;
                            var u = d(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? v : y, u.arg === b) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                };
                            }
                            "throw" === u.type && (o = v, n.method = "throw", n.arg = u.arg);
                        }
                    };
                }
                function I(e, r) {
                    var n = r.method, o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", 
                    r.arg = t, I(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", 
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), b;
                    var i = d(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, 
                    b;
                    var s = i.arg;
                    return s ? s.done ? (r[e.resultName] = s.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", 
                    r.arg = t), r.delegate = null, b) : s : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), 
                    r.delegate = null, b);
                }
                function P(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                    this.tryEntries.push(t);
                }
                function F(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function _(e) {
                    this.tryEntries = [ {
                        tryLoc: "root"
                    } ], e.forEach(P, this), this.reset(!0);
                }
                function j(e) {
                    if (e || "" === e) {
                        var r = e[u];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1, i = function r() {
                                for (;++o < e.length; ) if (s.call(e, o)) return r.value = e[o], r.done = !1, r;
                                return r.value = t, r.done = !0, r;
                            };
                            return i.next = i;
                        }
                    }
                    throw new TypeError(n(e) + " is not iterable");
                }
                return k.prototype = x, a(A, "constructor", {
                    value: x,
                    configurable: !0
                }), a(x, "constructor", {
                    value: k,
                    configurable: !0
                }), k.displayName = f(x, p, "GeneratorFunction"), r.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === k || "GeneratorFunction" === (t.displayName || t.name));
                }, r.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, f(e, p, "GeneratorFunction")), 
                    e.prototype = Object.create(A), e;
                }, r.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, E(L.prototype), f(L.prototype, l, (function() {
                    return this;
                })), r.AsyncIterator = L, r.async = function(e, t, n, o, i) {
                    void 0 === i && (i = Promise);
                    var s = new L(h(e, t, n, o), i);
                    return r.isGeneratorFunction(t) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next();
                    }));
                }, E(A), f(A, p, "Generator"), f(A, u, (function() {
                    return this;
                })), f(A, "toString", (function() {
                    return "[object Generator]";
                })), r.keys = function(e) {
                    var t = Object(e), r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(), function e() {
                        for (;r.length; ) {
                            var n = r.pop();
                            if (n in t) return e.value = n, e.done = !1, e;
                        }
                        return e.done = !0, e;
                    };
                }, r.values = j, _.prototype = {
                    constructor: _,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = t, this.tryEntries.forEach(F), !e) for (var r in this) "t" === r.charAt(0) && s.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;
                        function n(n, o) {
                            return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), 
                            !!o;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o], a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = s.call(i, "catchLoc"), u = s.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break;
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                        b) : this.complete(i);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                        this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                        b;
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), F(r), b;
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    F(r);
                                }
                                return o;
                            }
                        }
                        throw Error("illegal catch attempt");
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: j(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), b;
                    }
                }, r;
            }
            e.exports = o, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        3738: e => {
            function t(r) {
                return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r);
            }
            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        4756: (e, t, r) => {
            var n = r(4633)();
            e.exports = n;
            try {
                regeneratorRuntime = n;
            } catch (e) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
            }
        }
    }, t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var i = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.loaded = !0, i.exports;
    }
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t;
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        });
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.nmd = e => (e.paths = [], 
    e.children || (e.children = []), e), (() => {
        "use strict";
        function e(e, t) {
            if (null == e) return {};
            var r, n, o = function(e, t) {
                if (null == e) return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        }
        function t(e, t, r, n, o, i, s) {
            try {
                var a = e[i](s), c = a.value;
            } catch (e) {
                return void r(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(n, o);
        }
        function n(e) {
            return function() {
                var r = this, n = arguments;
                return new Promise((function(o, i) {
                    var s = e.apply(r, n);
                    function a(e) {
                        t(s, o, i, a, c, "next", e);
                    }
                    function c(e) {
                        t(s, o, i, a, c, "throw", e);
                    }
                    a(void 0);
                }));
            };
        }
        var o = r(4756), i = r.n(o);
        const s = class {
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
        const a = e => class extends e {
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
                this.storage = new s(this);
            }
        };
        const c = class {
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
        const u = e => {
            var t = null;
            return (t = () => {}).t = t.log = t.info = t.warn = t.error = t.debug = t, t;
        };
        var l = u("mono");
        const p = class {
            constructor() {
                this.onDestroy = new c, this._lastErrorFired = !1, this._lastError = null;
            }
            get lastError() {
                return this._lastErrorFired = !0, this._lastError;
            }
            set lastError(e) {
                this._lastErrorFired = !e, this._lastError = e;
            }
            clearLastError() {
                this._lastError && !this._lastErrorFired && l.error("Unhandled mono.lastError error:", this.lastError), 
                this._lastError = null;
            }
            unimplemented() {
                throw new Error("Unimplemented");
            }
            destroy() {
                this.onDestroy.dispatch();
            }
        };
        const f = e => class extends e {
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
        const h = (e, t) => {
            for (var r = t.split("."), n = r.pop(); r.length; ) e = e[r.shift()];
            return {
                scope: e,
                endPoint: n
            };
        };
        var d = r(334), m = u("mono:callFnListener");
        const y = e => class extends e {
            constructor() {
                super(), this.remote = {
                    mono: this
                }, this.callFnListener = this.callFnListener.bind(this);
            }
            initMessages() {
                super.initMessages(), this.onMessage.addListener(this.callFnListener);
            }
            responseFn(e, t) {
                var r = Promise.resolve().then((() => {
                    var t = h(this.remote, e.fn), r = t.scope, n = t.endPoint, o = e.args || [];
                    return r[n].apply(r, o);
                }));
                return this.responsePromise(r, t);
            }
            responsePromise(e, t) {
                return e.then((e => {
                    t({
                        result: e
                    });
                }), (e => {
                    t({
                        err: d(e)
                    });
                })).catch((function(e) {
                    m.error("responsePromise error", e);
                })), !0;
            }
            callFnListener(e, t, r) {
                if ("callFn" === (e && e.action)) return this.responseFn(e, r), !0;
            }
            destroy() {
                this.onMessage.removeListener(this.callFnListener), super.destroy();
            }
        };
        const g = e => class extends e {};
        const v = e => class extends(g(e)){
            openTab(e, t) {
                this.unimplemented();
            }
        };
        class b extends(v(y(f(p)))){}
        const w = b;
        const k = e => class extends e {
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
        const x = e => class extends(k(e)){
            openTab(e, t) {
                t = void 0 === t || !!t, chrome.tabs.create({
                    url: e,
                    active: t
                });
            }
            executeScript(e, t) {
                chrome.tabs.executeScript(e.id, t);
            }
            getActiveTab(e) {
                chrome.tabs.query({
                    active: !0,
                    currentWindow: !0
                }, (t => e(t[0])));
            }
        };
        class C extends(x(a(w))){
            constructor() {
                super(), this.initMessages(), this.initStorage(), this.initI18n();
            }
        }
        const S = new C;
        function O(e) {
            return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, O(e);
        }
        function A(e) {
            var t = function(e, t) {
                if ("object" != O(e) || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" != O(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            }(e, "string");
            return "symbol" == O(t) ? t : t + "";
        }
        function E(e, t, r) {
            return (t = A(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e;
        }
        var L = u("webRequest"), T = function() {
            var e = /^sf-\d+_/, t = {
                urls: [ "<all_urls>" ],
                types: [ "xmlhttprequest" ]
            }, r = !1, n = {}, o = {}, i = function(e) {
                for (var t in e) return !1;
                return !0;
            }, s = function(e) {
                delete o[e.requestId], i(n) && i(o) && u();
            }, a = function(t) {
                var r = o[t.requestId], s = t.requestHeaders || [], a = [], c = [], u = [];
                if (r) c = r.changes, a = r.filtered; else if (!i(n)) for (var l, p, f, h = 0; f = s[h]; h++) l = f.name, 
                e.test(l) && (p = n[l]) && (f.name = p.name, f.value = p.value, c.push(f), a.push(p.name.toLowerCase()), 
                a.push(l.toLowerCase()), /cookie/i.test(f.name) && u.push("set-cookie"), clearTimeout(p.timer), 
                delete n[l]);
                if (c.length) {
                    r || (o[t.requestId] = {
                        changes: c,
                        filtered: a,
                        filterResponseHeaders: u
                    });
                    var d = s.filter((function(e) {
                        return -1 === a.indexOf(e.name.toLowerCase());
                    })).concat(c);
                    return {
                        requestHeaders: d
                    };
                }
            }, c = function(e) {
                var t = o[e.requestId], r = e.responseHeaders;
                if (t && r) {
                    var n = t.filterResponseHeaders;
                    return {
                        responseHeaders: r.filter((function(e) {
                            return -1 === n.indexOf(e.name.toLowerCase());
                        }))
                    };
                }
            }, u = function() {
                r && (r = !1, chrome.webRequest.onBeforeSendHeaders.removeListener(a, t, [ "blocking", "requestHeaders" ]), 
                chrome.webRequest.onHeadersReceived.removeListener(c, t, [ "blocking", "responseHeaders" ]), 
                chrome.webRequest.onResponseStarted.removeListener(s, t), chrome.webRequest.onErrorOccurred.removeListener(s, t), 
                L.debug("webRequest", "rm listener"));
            }, l = 10, p = !1, f = null, h = function(e) {
                return (null === f || e) && (f = !!(chrome.webRequest && chrome.webRequest.onBeforeSendHeaders && chrome.webRequest.onResponseStarted && chrome.webRequest.onErrorOccurred)), 
                f;
            }, d = /^user-agent$|^origin$|^cookie$/i;
            return {
                wrapHeaderKey: function(e, o) {
                    if (h()) {
                        for (var i, u = 100; u-- > 0 && (i = "sf-" + parseInt(1e5 * Math.random()) + "_" + e, 
                        n[i]); ) ;
                        return n[i] = {
                            name: e,
                            value: o,
                            timer: setTimeout((function() {
                                delete n[i];
                            }), 3e3)
                        }, r || (r = !0, chrome.webRequest.onBeforeSendHeaders.addListener(a, t, [ "blocking", "requestHeaders" ]), 
                        chrome.webRequest.onHeadersReceived.addListener(c, t, [ "blocking", "responseHeaders" ]), 
                        chrome.webRequest.onResponseStarted.addListener(s, t), chrome.webRequest.onErrorOccurred.addListener(s, t), 
                        L.debug("webRequest", "add listener")), i;
                    }
                    return e;
                },
                isSpecialHeader: function(e) {
                    return d.test(e);
                },
                requestPermission: function(e) {
                    h() || p ? e(f) : chrome.permissions && chrome.permissions.request ? chrome.permissions.request({
                        permissions: [ "webRequest", "webRequestBlocking" ]
                    }, (function(t) {
                        (t || l-- <= 0) && (p = !0), t && h(!0), e(f);
                    })) : (p = !0, e(f));
                }
            };
        }();
        const I = T;
        var P = r(2894), F = function(e) {
            e = e.split(/\r?\n/);
            var t = {};
            return e.forEach((function(e) {
                var r = e.indexOf(":");
                if (-1 !== r) {
                    var n = e.substr(0, r).trim().toLowerCase(), o = e.substr(r + 1).trim();
                    t[n] = o;
                }
            })), t;
        };
        const _ = function(e, t) {
            var r = {}, n = function(e, r) {
                n = null, c.timeoutTimer && clearTimeout(c.timeoutTimer);
                var i = null;
                e && (i = String(e.message || e) || "ERROR"), t && t(i, o(r), r);
            }, o = function(e) {
                var t = {};
                t.statusCode = l.status, t.statusText = l.statusText;
                var r = null, n = l.getAllResponseHeaders();
                return "string" == typeof n && (r = F(n)), t.headers = r || {}, t.body = e, t.responseURL = l.responseURL, 
                t;
            };
            "object" != typeof e && (e = {
                url: e
            });
            var i = e.url, s = e.method || e.type || "GET";
            s = s.toUpperCase();
            var a = e.data;
            "string" != typeof a && (a = P.stringify(a)), a && "GET" === s && (i += (/\?/.test(i) ? "&" : "?") + a, 
            a = void 0), !1 === e.cache && -1 !== [ "GET", "HEAD" ].indexOf(s) && (i += (/\?/.test(i) ? "&" : "?") + "_=" + Date.now()), 
            e.headers = e.headers || {}, a && (e.headers["Content-Type"] = e.contentType || e.headers["Content-Type"] || "application/x-www-form-urlencoded; charset=UTF-8");
            var c = {};
            c.url = i, c.method = s, a && (c.data = a), e.json && (c.json = !0), e.xml && (c.xml = !0), 
            e.timeout && (c.timeout = e.timeout), e.mimeType && (c.mimeType = e.mimeType), e.withCredentials && (c.withCredentials = !0), 
            Object.keys(e.headers).length && (c.headers = e.headers), c.timeout > 0 && (c.timeoutTimer = setTimeout((function() {
                n && n(new Error("ETIMEDOUT")), l.abort();
            }), c.timeout));
            var u = {
                0: 200,
                1223: 204
            }, l = (e.localXHR, new XMLHttpRequest);
            l.open(c.method, c.url, !0), c.mimeType && l.overrideMimeType(c.mimeType), c.withCredentials && (l.withCredentials = !0);
            var p = [];
            for (var f in c.headers) I && I.isSpecialHeader(f) && p.push({
                key: f,
                value: c.headers[f]
            }), l.setRequestHeader(f, c.headers[f]);
            l.onload = function() {
                var e = u[l.status] || l.status;
                try {
                    if (e >= 200 && e < 300 || 304 === e) {
                        var t = l.responseText;
                        if (c.json) t = JSON.parse(t); else if (c.xml) t = (new DOMParser).parseFromString(t, "text/xml"); else if ("string" != typeof t) throw console.error("Response is not string!", t), 
                        new Error("Response is not string!");
                        return n && n(null, t);
                    }
                    throw new Error(l.status + " " + l.statusText);
                } catch (e) {
                    return n && n(e);
                }
            };
            var h = l.onerror = function() {
                n && n(new Error(l.status + " " + l.statusText));
            }, d = null;
            void 0 !== l.onabort ? l.onabort = h : d = function() {
                4 === l.readyState && n && setTimeout((function() {
                    return h();
                }));
            }, d && (l.onreadystatechange = d);
            var m = function() {
                try {
                    l.send(c.data || null);
                } catch (e) {
                    setTimeout((function() {
                        n && n(e);
                    }));
                }
            };
            if (I && p.length) {
                I.requestPermission((function(e) {
                    e && function() {
                        for (var e, t = 0; e = p[t]; t++) l.setRequestHeader(I.wrapHeaderKey(e.key, e.value), e.value);
                    }(), n && m();
                }));
            } else m();
            return r.abort = function() {
                n = null, l.abort();
            }, r;
        };
        function j(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), r.push.apply(r, n);
            }
            return r;
        }
        var R = u("utils"), U = null, N = {
            getFileSize: function(e, t) {
                var r = e.url, n = e.requestOptions, o = {
                    fileSize: 0,
                    fileType: "",
                    status: 0,
                    error: !1
                };
                return _(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? j(Object(r), !0).forEach((function(t) {
                            E(e, t, r[t]);
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        }));
                    }
                    return e;
                }({
                    url: r,
                    type: "HEAD"
                }, void 0 === n ? {} : n), (function(e, r) {
                    if (e) return o.error = !0, t(o);
                    o.status = r.statusCode, o.fileSize = parseInt(r.headers["content-length"]) || 0;
                    var n = r.headers["content-type"];
                    n && (o.fileType = n), t(o);
                })), !0;
            },
            ChromeDl: function() {
                var e = {}, t = !1, r = function(r) {
                    e[r] && delete e[r], 0 === Object.keys(e).length && (t = !1, chrome.downloads.onChanged.removeListener(n));
                }, n = function(t) {
                    var n = e[t.id];
                    if (n) {
                        var o = !1;
                        n.fixNetworkFiled && (o = function(e, t) {
                            var r = parseInt(Date.now() / 1e3), n = !1;
                            e.lastFix || (e.lastFix = 0), e.lastFix + 5 < r && (e.lastFix = r, n = !0);
                            var o = t.state && "interrupted" === t.state.current, i = t.error && "NETWORK_FAILED" === t.error.current, s = t.canResume && t.canResume.current;
                            return o && i && s || (n = !1), n;
                        }(n, t)), o ? chrome.downloads.resume(t.id) : t.state && -1 !== [ "interrupted", "complete" ].indexOf(t.state.current) && r(t.id);
                    }
                };
                this.download = function(r) {
                    var o = r.url, i = r.filename;
                    r.fixNetworkFiled = /(vk\.me|userapi\.com)\/.+\.mp4/i.test(o);
                    var s = {
                        url: o,
                        filename: i
                    }, a = U.preferences || U.storage || {};
                    S.isFirefox && a.saveAsDialog && (s.saveAs = !0), chrome.downloads.download(s, (function(o) {
                        r.fixNetworkFiled && (!function(t, r) {
                            e[t] || (e[t] = r);
                        }(o, r), t || (t = !0, chrome.downloads.onChanged.addListener(n)));
                    }));
                };
            },
            chromeDownload: null,
            downloadFile: function(e) {
                var t = U.preferences.sortDownloads;
                if ("object" == typeof e.options.url && S.isFirefox && (e.options.url = URL.createObjectURL(e.options.url)), 
                t && t.isEnabled) {
                    var r = e.options.filename.slice(e.options.filename.lastIndexOf(".") + 1), n = t.groups.find((e => e.formats.some((e => -1 !== e.indexOf(r)))));
                    n && n.dir && (e.options.filename = `${n.dir}/${e.options.filename}`);
                }
                var o = N;
                if (S.isChrome || S.isFirefox) {
                    o.chromeDownload || (o.chromeDownload = new o.ChromeDl);
                    var i = function() {
                        return o.chromeDownload.download(e.options);
                    };
                    if (chrome.downloads && chrome.downloads.download) return i();
                    chrome.permissions && chrome.permissions.request ? chrome.permissions.request({
                        permissions: [ "downloads" ]
                    }, (function(e) {
                        if (e) return i();
                        R.error("Permissions not granted!");
                    })) : R.error("Method in not supported!");
                } else S.isGM && GM_download(e.options.url, e.options.filename);
            },
            chromeListDownload: function(e, t) {
                var r = null;
                e = e.map((function(e) {
                    return {
                        url: e.url,
                        filename: t + e.filename
                    };
                }));
                var n = function(e) {
                    if (e.id === r && e.state) return -1 !== [ "interrupted", "complete" ].indexOf(e.state.current) ? (r = null, 
                    i()) : void 0;
                };
                chrome.downloads.onChanged.addListener(n);
                var o = -1, i = function() {
                    o++;
                    var t = e[o];
                    if (t) return chrome.downloads.download({
                        url: t.url,
                        filename: t.filename
                    }, (function(e) {
                        r = e;
                    }));
                    chrome.downloads.onChanged.removeListener(n);
                };
                return i();
            },
            downloadList: function(e) {
                var t = this, r = e.fileList, n = e.folder;
                (S.isChrome || S.isFirefox) && chrome.downloads && chrome.downloads.download ? t.chromeListDownload(r, n) : r.forEach((function(e) {
                    t.downloadFile({
                        options: {
                            url: e.url,
                            filename: n + e.filename
                        }
                    });
                }));
            },
            getUmmyIcon: function(e, t) {
                t("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB90lEQVQ4EcVSy2oUURCtqm7HcYgmYDTiYxEEERdZGP0B0UVwEcSv8LHIb4gbQcjGlVtB40YhfkAWuhs0uFOIgjJomiEzztzue4+n7rTgH6SaoqpPnao6fW+LHLapC9hdPHMbKT1UTcsQWxDBnAAdFkuvQ6QR1cD0QAUVoF+0kKdXBoO32j959maK8V1LVDaBDXkwm9q32atz/hmRpIZb5STqPaDIjP/oFAS5Xu1l/MPCBZhxt09uSRykCn1QhmQr1MiSQ3TPGYdIMtwfZPh3MjkhlvOWOcuTrJQB5VJeR0g5HlzjMSSVpp7mtQGFBJjXwJp69AlqtlTW0bpQ6nNLbTdjSCIxNhkOqUBwBconZYWZr1G6RgXcRoI782k0rO681vVq15o6SGyCrFefbHVnS6eNkmcSyMlOvr48ernimjlf5WcUuP1zr7C7W090/twiMcjw+y95dWcjXRr7Sn6Ba8mmB1RQ/MwqOK2mg356FPFi4xGm4z8I40nOT434OanElDdWM2aH/eAtHOlz98XZRBch0uPnHPu4J9uPn+dNzNGTLho/Kj+D1gza12fl1RuEtlmaaWPiGkOK8k0mecB5Nnes8DZvdiwPgRVrmbAp19aI8Fe2ZSDN86aOk9OpkfiHqfKoap9JfMTWfcavvNXN+/H9G596uPYX83AWUVC6/FsAAAAASUVORK5CYII=");
            },
            getWarningIcon: function(e, t) {
                var r, n = e.color || "#c2c2c2";
                r = "audio" === e.type ? '<svg width="21px" height="24px" viewBox="0 0 21 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M21,2.76923077 L21,17.6487288 C21,17.6487288 21,17.6487288 21,17.6487288 L21,18.4615385 L20.9068729,18.4615385 C20.723595,19.2712249 20.2716013,20.0865791 19.5669296,20.7680198 C17.9203537,22.360313 15.5176896,22.6184747 14.2004289,21.3446402 C12.8831682,20.0708056 13.1501309,17.7473503 14.7967068,16.1550571 C16.0602516,14.9331676 17.7690324,14.4969051 19.0909091,14.9356816 L19.0909091,14.9356816 L19.0909091,4.15384615 L7.63636364,6.92307692 L7.63636364,19.4948826 C7.63636364,19.4948826 7.63636364,19.4948826 7.63636364,19.4948826 L7.63636364,20.3076923 L7.5432365,20.3076923 C7.35995859,21.1173788 6.90796493,21.9327329 6.20329323,22.6141737 C4.55671732,24.2064669 2.15405328,24.4646286 0.836792552,23.190794 C-0.480468173,21.9169595 -0.213505501,19.5935041 1.43307041,18.0012109 C2.69661523,16.7793214 4.40539601,16.343059 5.72727273,16.7818354 L5.72727273,16.7818354 L5.72727273,6.46153846 L5.72727273,3.69230769 L21,0 L21,2.76923077 Z" fill="' + n + '"></path></svg>' : "playlist" === e.type ? '<svg width="24px" height="18px" viewBox="0 0 24 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M0,0 L0,3.6 L3.42857143,3.6 L3.42857143,0 L0,0 Z M0,7.2 L0,10.8 L3.42857143,10.8 L3.42857143,7.2 L0,7.2 Z M5.14285714,0 L5.14285714,3.6 L24,3.6 L24,0 L5.14285714,0 Z M5.14285714,7.2 L5.14285714,10.8 L20.5714286,10.8 L20.5714286,7.2 L5.14285714,7.2 Z M0,14.4 L0,18 L3.42857143,18 L3.42857143,14.4 L0,14.4 Z M5.14285714,14.4 L5.14285714,18 L22.2857143,18 L22.2857143,14.4 L5.14285714,14.4 Z" fill="' + n + '"></path></svg>' : '<svg width="24px" height="18px" viewBox="0 0 24 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M19.5,3 L21.0089096,3 C22.6582294,3 24,4.34288718 24,5.99942248 L24,15.0005775 C24,16.6556493 22.6608432,18 21.0089096,18 L2.99109042,18 C1.34177063,18 0,16.6571128 0,15.0005775 L0,5.99942248 C0,4.34435073 1.33915679,3 2.99109042,3 L7.5,3 C7.5,1.34651712 8.84187067,0 10.497152,0 L16.502848,0 C18.1583772,0 19.5,1.34314575 19.5,3 L19.5,3 Z M13.5,16.5 C16.8137087,16.5 19.5,13.8137087 19.5,10.5 C19.5,7.18629134 16.8137087,4.5 13.5,4.5 C10.1862913,4.5 7.5,7.18629134 7.5,10.5 C7.5,13.8137087 10.1862913,16.5 13.5,16.5 Z M13.5,15 C15.9852815,15 18,12.9852815 18,10.5 C18,8.0147185 15.9852815,6 13.5,6 C11.0147185,6 9,8.0147185 9,10.5 C9,12.9852815 11.0147185,15 13.5,15 Z" fill="' + n + '"></path></svg>', 
                t("data:image/svg+xml;utf8," + encodeURIComponent(r));
            },
            checkUrlsOfOpenTabs: function(e, t) {
                (S.isGM ? function(e) {
                    e([ location.href ]);
                } : S.isChrome ? function(e) {
                    var t = [];
                    chrome.tabs.query({}, (function(r) {
                        r.forEach((function(e) {
                            t.push(e.url);
                        })), e(t);
                    }));
                } : S.isFirefox ? function(e) {
                    var t = [];
                    if (S.isFirefoxMobile) return e(t);
                    chrome.tabs.query({}, (function(r) {
                        r.forEach((function(e) {
                            t.push(e.url);
                        })), e(t);
                    }));
                } : S.isSafari ? function(e) {
                    var t = [];
                    safari.application && safari.application.activeBrowserWindow && safari.application.activeBrowserWindow.tabs && safari.application.activeBrowserWindow.tabs.forEach((function(e) {
                        if (!e.url) return 1;
                        t.push(e.url);
                    })), e(t);
                } : function(e) {
                    e([]);
                })((function(r) {
                    var n = [];
                    r.forEach((function(t) {
                        e.forEach((function(e) {
                            -1 !== t.search(e) && n.push(t);
                        }));
                    })), t(n);
                }));
            },
            getData: function(e, t) {
                var r = e.url;
                return r ? (_({
                    url: r
                }, (function(e, r, n) {
                    if (e) return t();
                    t(n);
                })), !0) : t();
            }
        };
        const D = e => (U = e, N);
        const M = function(e, t) {
            t && !Array.isArray(t) && (t = [ t ]);
            var r = [];
            return e.replace(/<script(?:\s*|\s[^>]+[^\/])>/g, (function(n, o) {
                o += n.length;
                var i = e.indexOf("<\/script>", o);
                if (-1 !== i) {
                    var s = e.substr(o, i - o);
                    t ? t.every((function(e) {
                        return e.test(s);
                    })) && r.push(s) : r.push(s);
                }
            })), r;
        };
        const q = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            t && !Array.isArray(t) && (t = [ t ]);
            for (var r, n = [], o = {
                "{": 0,
                "[": 0
            }, i = {
                "}": "{",
                "]": "["
            }, s = /[{}\]\[":0-9.,-]/, a = /[\r\n\s\t]/, c = "", u = 0; r = e[u]; u++) if ('"' !== r) s.test(r) ? (c += r, 
            "{" === r || "[" === r ? (o["{"] || o["["] || (c = r), o[r]++) : "}" !== r && "]" !== r || (o[i[r]]--, 
            o["{"] || o["["] || n.push(c))) : "t" === r && "true" === e.substr(u, 4) ? (c += "true", 
            u += 3) : "f" === r && "false" === e.substr(u, 5) ? (c += "false", u += 4) : "n" === r && "null" === e.substr(u, 4) ? (c += "null", 
            u += 3) : a.test(r) || (o["{"] = 0, o["["] = 0, c = ""); else {
                for (var l = u; -1 !== l && (l === u || "\\" === e[l - 1]); ) l = e.indexOf('"', l + 1);
                -1 === l && (l = e.length - 1), c += e.substr(u, l - u + 1), u = l, o["{"] || o["["] || n.push(c);
            }
            for (var p = [], f = function() {
                var e = n[h];
                if ("{}" === e || "[]" === e) return 1;
                try {
                    t.every((function(t) {
                        return t.test(e);
                    })) && p.push(JSON.parse(e));
                } catch (e) {}
            }, h = 0, d = n.length; h < d; h++) f();
            return p;
        };
        var B = u("VimeoComEmbed");
        const V = class {
            constructor(e) {
                this.engine = e;
            }
            getVimeoLinks(e, t) {
                return this._getVimeoLinks(e.extVideoId, e.url, (function(r, n, o) {
                    var i = {
                        action: e.action,
                        extVideoId: e.extVideoId,
                        links: r,
                        title: n,
                        thumb: o
                    };
                    t(i);
                })), !0;
            }
            _getVimeoLinks(e, t, r) {
                this.getVimeoNoEmbedLinks(e, t, ((t, n, o) => {
                    if (t) return r(t, n, o);
                    this.getVimeoEmbedLinks(e, r);
                }));
            }
            getVimeoEmbedLinks(e, t) {
                var r = function() {
                    return t(null, "", "");
                };
                if (!e) return r();
                _({
                    url: "https://player.vimeo.com/video/" + e
                }, ((e, n, o) => {
                    if (e || !o) return r();
                    var i = q(o, [ /"files":/ ]), s = null;
                    return i.some((function(e) {
                        if (e.video && e.request && e.request.files) return s = e, !0;
                    })), (o = this.getLinksFromConfig(s)) ? t(o.links, o.title, o.thumb) : r();
                }));
            }
            getVimeoConfig(e, t) {
                var r = function() {
                    return t(null, "", "");
                };
                _({
                    url: e
                }, ((e, n, o) => e || !o ? r() : (o = this.getVimeoDataFromConfig(o)) ? t(o.links, o.title, o.thumb) : r()));
            }
            getVimeoLinksFromConfigAction(e, t) {
                return new Promise(((t, r) => {
                    var n = this.getLinksFromConfig(e.config);
                    n ? t(n) : r(new Error("Get links from config error"));
                })).then(t, (e => {
                    B.error("getVimeoLinksFromConfigAction error", e), t(null);
                })), !0;
            }
            getClipPageConfig(e, t) {
                var r = null;
                return M(e, /['"]config_url['"]\s*:\s*/).some((function(e) {
                    return q(e, /['"]config_url['"]\s*:\s*/).some((function(e) {
                        if (e.player && (r = e.player.config_url)) return !0;
                    }));
                })), r ? this.getVimeoConfig(r, t) : t(null, "", "");
            }
            getVimeoNoEmbedLinks(e, t, r) {
                if (e && t) {
                    var n = /vimeo\.com\/[^\/]+\/review\/\d+/i.test(t), o = /vimeo\.com\/\d+\/\w+/i.test(t);
                    n || o || (t = null);
                }
                _({
                    url: t || "https://vimeo.com/" + e
                }, ((e, t, n) => {
                    if (e || !n) return r(null, "", "");
                    var o = n.match(/data-config-url=["']([^\s"'<>]+)/i);
                    return (o = o && o[1].replace(/&amp;/gi, "&")) ? this.getVimeoConfig(o, r) : this.getClipPageConfig(n, r);
                }));
            }
            getVimeoLinksFromConfig(e, t) {
                var r = this.getLinksFromConfig(e.config);
                return t(r || null);
            }
            getLinksFromConfig(e) {
                if (!(e && e.video && e.request && e.request.files)) return null;
                var t = e.video, r = e.request.files, n = {};
                n.title = t.title || "";
                var o = null;
                for (var i in t.thumbs) (null === o || o < i) && (o = i, n.thumb = t.thumbs[i]);
                for (var s in n.links = [], r) Array.isArray(r[s]) && r[s].forEach((function(e) {
                    if (e && e.url && e.mime) {
                        var t = e.mime.split("/")[1];
                        t || (t = (t = e.url.match(/\.(\w{2,4})(?:\?|#|$)/i)) && t[1] || "mp4");
                        var r = t.toUpperCase(), o = e.quality;
                        /^\d+p$/.test(o) && (o = o.replace(/p$/, ""));
                        var i = r + " " + o;
                        n.links.push({
                            url: e.url,
                            name: i,
                            height: o,
                            type: r,
                            format: r,
                            ext: t
                        });
                    }
                }));
                return n.links.length || (n = null), n;
            }
            getVimeoDataFromConfig(e) {
                e = e.replace(/(\{|,)\s*(\w+)\s*:/gi, '$1"$2":').replace(/(:\s+)\'/g, '$1"').replace(/\'([,\]\}])/g, '"$1');
                try {
                    e = JSON.parse(e);
                } catch (e) {
                    return null;
                }
                return this.getLinksFromConfig(e);
            }
        };
        function $(e, t) {
            return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e;
            }, $(e, t);
        }
        function H(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && $(e, t);
        }
        const z = e => new Promise(((t, r) => {
            _(e, ((e, n) => {
                e ? r(e) : t(n);
            }));
        }));
        var G = e => {
            if ("string" != typeof e) {
                var t = new Error("Value is not String");
                throw t.value = e, t;
            }
            return e;
        }, W = e => {
            if (!Number.isFinite(e)) {
                var t = new Error("Value is not Finite Number");
                throw t.value = e, t;
            }
            return e;
        };
        function Y(e, t) {
            for (var r, n = []; null !== (r = t.exec(e)); ) r.index === t.lastIndex && t.lastIndex++, 
            n.push(r);
            return n;
        }
        function J(e, t) {
            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Q(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Q(e, t);
                }(e)) || t && e && "number" == typeof e.length) {
                    r && (e = r);
                    var n = 0, o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return n >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[n++]
                            };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, s = !0, a = !1;
            return {
                s: function() {
                    r = r.call(e);
                },
                n: function() {
                    var e = r.next();
                    return s = e.done, e;
                },
                e: function(e) {
                    a = !0, i = e;
                },
                f: function() {
                    try {
                        s || null == r.return || r.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function Q(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        }
        function K() {
            K = function(e, t) {
                return new r(e, void 0, t);
            };
            var e = RegExp.prototype, t = new WeakMap;
            function r(e, n, o) {
                var i = RegExp(e, n);
                return t.set(i, o || t.get(e)), $(i, r.prototype);
            }
            function n(e, r) {
                var n = t.get(r);
                return Object.keys(n).reduce((function(t, r) {
                    var o = n[r];
                    if ("number" == typeof o) t[r] = e[o]; else {
                        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length; ) i++;
                        t[r] = e[o[i]];
                    }
                    return t;
                }), Object.create(null));
            }
            return H(r, RegExp), r.prototype.exec = function(t) {
                var r = e.exec.call(this, t);
                if (r) {
                    r.groups = n(r, this);
                    var o = r.indices;
                    o && (o.groups = n(o, this));
                }
                return r;
            }, r.prototype[Symbol.replace] = function(r, o) {
                if ("string" == typeof o) {
                    var i = t.get(this);
                    return e[Symbol.replace].call(this, r, o.replace(/\$<([^>]+)>/g, (function(e, t) {
                        var r = i[t];
                        return "$" + (Array.isArray(r) ? r.join("$") : r);
                    })));
                }
                if ("function" == typeof o) {
                    var s = this;
                    return e[Symbol.replace].call(this, r, (function() {
                        var e = arguments;
                        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(n(e, s)), 
                        o.apply(this, e);
                    }));
                }
                return e[Symbol.replace].call(this, r, o);
            }, K.apply(this, arguments);
        }
        var X = u("DailymotionComEmbed");
        const Z = class {
            constructor(e) {
                this.engine = e;
            }
            getDailymotionLinks(e, t) {
                return this.getEmbedVideoInfo(e.extVideoId, e.metadata, (r => {
                    r || (r = {}), this.addUmmyLinks(r.links, e.extVideoId);
                    var n = {
                        action: e.action,
                        extVideoId: e.extVideoId,
                        links: r.links,
                        title: r.title,
                        duration: r.duration
                    };
                    t(n);
                })), !0;
            }
            addUmmyLinks(e, t) {}
            getMetadata(e) {
                return z({
                    url: `https://www.dailymotion.com/player/metadata/video/${encodeURIComponent(e)}`,
                    json: !0
                }).then((e => e.body));
            }
            getInfoFromMetadata(e) {
                var t = {
                    title: G(e.title),
                    duration: W(e.duration),
                    links: []
                };
                if (e.qualities && e.qualities.auto && e.qualities.auto.length) {
                    var r = e.qualities.auto.pop();
                    if ("application/x-mpegURL" === r.type) return z({
                        url: r.url
                    }).then((e => {
                        var r, n = K(/CODECS="(.*?)",RESOLUTION=(.*?),NAME="(.*?)",PROGRESSIVE\x2DURI="(.*?)"/gm, {
                            codecs: 1,
                            resolution: 2,
                            quality: 3,
                            url: 4
                        }), o = J(Y(e.body, n));
                        try {
                            var i = function() {
                                var e = r.value.groups, n = e.quality, o = e.codecs, i = e.resolution, s = e.url, a = i, c = /\.(.{0,7})#cell/.exec(s);
                                if (c[1] && (a = c[1]), t.links.find((e => e.height === parseInt(n)))) return 1;
                                t.links.push({
                                    name: `${o}-${i}`,
                                    ext: a,
                                    height: parseInt(n),
                                    url: G(s)
                                });
                            };
                            for (o.s(); !(r = o.n()).done; ) i();
                        } catch (e) {
                            o.e(e);
                        } finally {
                            o.f();
                        }
                        return t.links.sort(((e, t) => e.height > t.height ? -1 : 1)), t;
                    }));
                }
                return Promise.resolve(t);
            }
            getEmbedVideoInfo(e, t, r) {
                return Promise.resolve().then((() => t || this.getMetadata(e))).then((e => this.getInfoFromMetadata(e))).then((e => {
                    r(e);
                }), (t => {
                    X.error("getEmbedVideoInfo error", e, t), r();
                }));
            }
        };
        const ee = () => "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36";
        const te = function(e, t) {
            var r = null;
            r = !(t = t || {}).params && /\?/.test(e) ? e.match(/[^?]*\?(.*)/)[1] : e;
            for (var n = t.sep || "&", o = r.split(n), i = {}, s = 0, a = o.length; s < a; s++) {
                var c = o[s].split("="), u = c[0], l = c[1] || "";
                if (t.noDecode) i[u] = l; else {
                    try {
                        u = decodeURIComponent(u);
                    } catch (e) {
                        u = unescape(u);
                    }
                    try {
                        i[u] = decodeURIComponent(l);
                    } catch (e) {
                        i[u] = unescape(l);
                    }
                }
            }
            return i;
        };
        const re = function(e) {
            var t = function(e) {
                for (var t = e[0], r = 0; ;) {
                    if (-1 === (r = e.indexOf(t, r + 1))) {
                        r = e.length;
                        break;
                    }
                    if ("\\" !== e[r - 1]) break;
                }
                var n = "";
                try {
                    n = '"' === t ? JSON.parse('"' + e.substr(1, r - 1) + '"') : JSON.parse('"' + e.substr(1, r - 1).replace(/\\'/g, "'").replace(/"/g, '\\"') + '"');
                } catch (e) {}
                return {
                    data: n,
                    i: r
                };
            }, r = {
                "[": function(e) {
                    var t, n, o, i, s, a = [], c = "";
                    for (i = 1; o = e[i]; i++) if (n = r[o]) t = n(e.substr(i)), c = JSON.stringify(t.data), 
                    i += t.i; else {
                        if ("]" === o) break;
                        "," === o ? (c && a.push(c), c = "") : c += o;
                    }
                    c && a.push(c);
                    try {
                        s = JSON.parse("[" + a.join(",") + "]");
                    } catch (e) {}
                    return {
                        data: s || [],
                        i
                    };
                },
                "{": function(e) {
                    var t, n, o, i, s, a = [], c = [ "", "" ], u = 0;
                    for (i = 1; o = e[i]; i++) if (n = r[o]) t = n(e.substr(i)), c[u] = 0 === u ? t.data : JSON.stringify(t.data), 
                    i += t.i; else {
                        if ("}" === o) break;
                        ":" === o ? u = 1 : "," === o ? (a.push(JSON.stringify(c[0]) + ":" + c[1]), c = [ "", "" ], 
                        u = 0) : c[u] = (c[u] + o).trim();
                    }
                    c[1] && a.push(JSON.stringify(c[0]) + ":" + c[1]);
                    try {
                        s = JSON.parse("{" + a.join(",") + "}");
                    } catch (e) {}
                    return {
                        data: s || {},
                        i
                    };
                },
                '"': t,
                "'": t
            };
            return {
                some: function(t) {
                    return function(e, t) {
                        for (var n, o, i = 0; o = e[i]; i++) if (("[" === o || "{" === o) && (i += (n = r[o](e.substr(i))).i, 
                        t(n.data))) return !0;
                    }(e, t);
                }
            };
        };
        var ne = /\\(\\u[0-9a-f]{4})/g;
        const oe = function(e) {
            try {
                return JSON.parse(JSON.stringify(e).replace(ne, "$1"));
            } catch (t) {
                return e;
            }
        };
        const ie = {
            maxLength: 80,
            rtrim: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            illegalRe: /[\/?<>\\:*|"~\u202B]/g,
            controlRe: /[\x00-\x1f\x80-\x9f]/g,
            zeroWidthJoinerRe: /\u200D/g,
            reservedRe: /^\.+/,
            trim: function(e) {
                return e.replace(this.rtrim, "");
            },
            partsRe: /^(.+)\.([a-z0-9]{1,4})$/i,
            getParts: function(e) {
                return e.match(this.partsRe);
            },
            specialChars: "nbsp,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,times,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,divide,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml".split(","),
            specialCharsList: [ [ "amp", "quot", "lt", "gt" ], [ 38, 34, 60, 62 ] ],
            specialCharsRe: /&([^;]{2,6});/g,
            decodeSpecialChars: function(e) {
                var t = this;
                return e.replace(this.specialCharsRe, (function(e, r) {
                    var n = null;
                    if ("#" === r[0]) return n = parseInt(r.substr(1)), isNaN(n) ? "" : String.fromCharCode(n);
                    var o = t.specialCharsList[0].indexOf(r);
                    return -1 !== o ? (n = t.specialCharsList[1][o], String.fromCharCode(n)) : -1 !== (o = t.specialChars.indexOf(r)) ? (n = o + 160, 
                    String.fromCharCode(n)) : "";
                }));
            },
            decodeHexChars: function(e) {
                return e.replace(/(\\x[a-zA-Z0-9]{2})/g, (function(e, t) {
                    var r = t;
                    try {
                        r = String.fromCharCode(parseInt("0x" + r.substr(2), 16));
                    } catch (e) {}
                    return r;
                }));
            },
            rnRe: /\r?\n/g,
            re1: /[*?"]/g,
            re2: /</g,
            re3: />/g,
            spaceRe: /[\s\t\uFEFF\xA0]+/g,
            dblRe: /(\.|!|\?|_|,|-|:|\+){2,}/g,
            re4: /[.,:;\/\-_+=']$/g,
            modify: function(e) {
                if (!e) return "";
                e = oe(e);
                try {
                    e = decodeURIComponent(e);
                } catch (t) {
                    e = unescape(e);
                }
                if (e = (e = this.decodeSpecialChars(e)).replace(this.rnRe, " "), (e = (e = this.trim(e)).replace(this.zeroWidthJoinerRe, "").replace(this.re1, "").replace(this.re2, "(").replace(this.re2, "(").replace(this.re3, ")").replace(this.spaceRe, " ").replace(this.dblRe, "$1").replace(this.illegalRe, "_").replace(this.controlRe, "").replace(this.reservedRe, "").replace(this.re4, "")).length > this.maxLength) {
                    var t = this.getParts(e);
                    t && 3 == t.length && (t[1] = t[1].substr(0, this.maxLength), e = t[1] + "." + t[2]);
                }
                return this.trim(e);
            }
        };
        const se = function() {
            return parseInt(Date.now() / 1e3, 10);
        };
        function ae(e, t) {
            for (var r, n = {
                "{": 0
            }, o = !1, i = "", s = !1, a = !1, c = 0, u = !1, l = /[,;=(\[\-+/*%&|]/, p = /[\s\r\n]/, f = {
                "}": "{"
            }, h = "", d = t; r = e[d]; d++) if (h += r, o || a || !u && !s || "/" !== r || c % 2 != 0 ? s || '"' !== r && "'" !== r || i && i !== r || c % 2 != 0 || (i = (o = !o) ? r : "") : s = !s, 
            s) "\\" === r ? c++ : (c % 2 == 0 && ("[" === r ? a = !0 : "]" === r && (a = !1)), 
            c = 0); else if (o) "\\" === r ? c++ : c = 0; else if (c = 0, l.test(r) ? u = !0 : p.test(r) || (u = !1), 
            "{" === r) n[r]++; else if ("}" === r && (n[f[r]]--, !n["{"])) return h;
            return "";
        }
        var ce = u("app:ThrottleSigDecipher").t;
        new Map, new Map;
        function ue(e) {
            return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }
        const le = class {
            getSignatureFnCodeSafe(e) {
                try {
                    return this.getSignatureFnCode(e);
                } catch (e) {
                    ce("getSignatureFnCodeSafe error: %o", e);
                }
            }
            getSignatureFnCode(e) {
                var t;
                if (!(t = /[=(,&]([$\w]+)\(\w+\),\w+\.set\("\w+",/.exec(e))) {
                    if (!(t = /[=(,&]([$\w]+)\[(\d+)\]\(\w+\),\w+\.set\("\w+",/.exec(e))) throw new Error("Function variable name is not found");
                    var r = t[1], n = parseInt(t[2]);
                    ce("var name: %s", r), ce("index: %d", n);
                    var o = new RegExp("[ ,.]" + ue(r) + "=\\[([\\w\\$,]+)\\]").exec(e);
                    if (!o) throw new Error("Function variable name is not found");
                    ce("array values: %s", o[1]), (t = [])[1] = o[1].split(",")[n] || "";
                }
                var i = t[1];
                if (!(t = new RegExp("\n" + ue(i) + "=(function\\(([^)]*)\\){[^{]+)").exec(e))) throw new Error("Function scope start fragment is not found");
                t[2].split(",")[0];
                var s = e.indexOf(t[1]);
                if (-1 === s) throw new Error("First line pos is not found");
                return ae(e, s);
            }
            isArgumentAsFunctionCall(e) {
                return /\]\(\)/.test(e);
            }
            buildEvalSignatureFn(e) {
                var t = new Function("sig", `return (${e})(sig);`);
                return e => {
                    var r = t(e);
                    if ("string" != typeof r) throw new Error("Unexpected result");
                    return r;
                };
            }
        };
        const pe = class {
            constructor() {
                this.throttleSigDecipher = new le;
            }
            applyActions(e, t) {
                for (var r, n = {
                    slice: (e, t) => {
                        e.slice(t);
                    },
                    splice: (e, t) => {
                        e.splice(0, t);
                    },
                    reverse: e => {
                        e.reverse();
                    },
                    swap: (e, t) => {
                        var r = e[0];
                        e[0] = e[t % e.length], e[t] = r;
                    }
                }, o = t.split(""), i = 0; r = e[i]; i++) n[r[0]](o, r[1]);
                return o.join("");
            }
            getNewChip(e) {
                var t, r = t => {
                    var r = /([\w$]+)(?:\.([\w$]+)|\[("[\w$]+")\])\([\w$]+,?([\w$]+)?\)/.exec(t);
                    if (!r) throw new Error("readAction");
                    var n = r[1], o = r[2] || r[3], i = r[4], s = ((t, r) => {
                        t = t.replace(/\$/g, "\\$");
                        var n = new RegExp("(?:var |,|\n)" + t + "={"), o = e.search(n);
                        if (-1 === o) throw new Error("Place is not found");
                        var i = e.substr(o, 300);
                        r = r.replace(/\$/g, "\\$");
                        var s = new RegExp(r + ":function\\(([$\\w,]+)\\){([^}]+)}"), a = i.match(s);
                        if (!a) throw new Error("Place function is not found!");
                        return {
                            args: a[1],
                            statement: a[2]
                        };
                    })(n, o);
                    if (/\.reverse/.test(s.statement)) return [ "reverse", null ];
                    if (!/^[\d]+$/.test(i)) throw new Error("Arg is not number");
                    return /\.splice/.test(s.statement) ? [ "splice", parseInt(i) ] : /\.slice/.test(s.statement) ? [ "slice", parseInt(i) ] : [ "swap", parseInt(i) ];
                }, n = (() => {
                    var t = null, r = /,sts:(\d+)/.exec(e);
                    if (r && (t = r[1]), !t) {
                        var n = /\.signatureTimestamp=(\d+)/.exec(e);
                        n && (t = n[1]);
                    }
                    if (!t) {
                        var o = /,signatureTimestamp:(\d+)/.exec(e);
                        o && (t = o[1]);
                    }
                    if (!t) {
                        var i = /,sts:([\w$]+)/.exec(e);
                        if (i) {
                            var s = e.indexOf(`,sts:${i[1]}`);
                            t = ((e, t) => {
                                t = t.replace(/\$/g, "\\$");
                                var r = new RegExp("(?:var |,|;\n?)" + t + "=(\\d+)[;,]").exec(e);
                                if (!r) throw new Error("Sts variable is not found");
                                return r[1];
                            })(((e, t) => {
                                for (var r = e.substr(0, t), n = void 0; -1 !== n; ) {
                                    "number" == typeof n && (n -= 1);
                                    var o = ae(e, n = r.lastIndexOf("function", n));
                                    if (n < t && n + o.length > t) return o;
                                }
                                throw new Error("Parent function is not found");
                            })(e, s), i[1]);
                        }
                    }
                    if (!t) throw new Error("Sts is not found");
                    return parseInt(t, 10);
                })(), o = /[$_a-zA-Z0-9]+\.set\((?:[$_a-zA-Z0-9]+\.[$_a-zA-Z0-9]+\|\|)?"signature",([$_a-zA-Z0-9]+)\(/.exec(e);
                if (o && (t = o[1]), !t) {
                    var i = /(?:function ([$_a-zA-Z0-9]+)|(?:var |,|;\n)([$_a-zA-Z0-9]+)=function)\(([\w$]+)\){\3=\3\.split\([^}]+;return \3\.join\([^}]+}[;,]/.exec(e);
                    i && (t = i[1] || i[2]);
                }
                if (!t) throw new Error("Decode function name is not found!");
                var s = (t => {
                    t = t.replace(/\$/g, "\\$");
                    var n = new RegExp("(?:function " + t + "|(?:var |,|;\n)" + t + "=function)\\(([\\w$]+)\\){([^}]*)}[;,]").exec(e);
                    if (!n) throw new Error("findConvertFn");
                    return ((e, t) => {
                        e = e.replace(/\$/g, "\\$");
                        var n = new RegExp('[\\w$]+(?:\\.[\\w$]+|\\["[\\w$]+"\\])\\(' + e + "[^)]*\\)", "g"), o = t.match(n);
                        if (!o) throw new Error("readScope");
                        return o.map((e => r(e)));
                    })(n[1], n[2]);
                })(t);
                if (!s.length) throw new Error("actionList is empty");
                return {
                    actionList: s,
                    sts: n
                };
            }
            dechip(e, t) {
                var r = this.getNewChip(t);
                return {
                    sts: r.sts,
                    actionList: r.actionList,
                    playerUrl: e,
                    nSigCode: this.throttleSigDecipher.getSignatureFnCodeSafe(t),
                    expiresAt: se() + 43200,
                    helperVersion: "10.21"
                };
            }
        };
        const fe = e => new Promise((t => t(e())));
        function he(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e;
        }
        function de(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), r.push.apply(r, n);
            }
            return r;
        }
        function me(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? de(Object(r), !0).forEach((function(t) {
                    he(e, t, r[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : de(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                }));
            }
            return e;
        }
        function ye(e, t) {
            if (null == e) return {};
            var r, n, o = function(e, t) {
                if (null == e) return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        }
        function* ge(e, t) {
            !0 === e || (!1 === e ? yield t.fail() : yield* e);
        }
        function ve(e) {
            const {done: t, value: r} = e.next();
            return t ? void 0 : r;
        }
        class be {
            constructor(e) {
                const {type: t, schema: r, coercer: n = (e => e), validator: o = (() => []), refiner: i = (() => [])} = e;
                this.type = t, this.schema = r, this.coercer = n, this.validator = o, this.refiner = i;
            }
        }
        class we extends TypeError {
            constructor(e, t) {
                const {path: r, value: n, type: o, branch: i} = e, s = ye(e, [ "path", "value", "type", "branch" ]);
                let a;
                super(`Expected a value of type \`${o}\`${r.length ? ` for \`${r.join(".")}\`` : ""} but received \`${JSON.stringify(n)}\`.`), 
                this.value = n, Object.assign(this, s), this.type = o, this.path = r, this.branch = i, 
                this.failures = function() {
                    return a || (a = [ e, ...t ]), a;
                }, this.stack = (new Error).stack, this.__proto__ = we.prototype;
            }
        }
        function ke(e, t) {
            const r = Ce(e, t);
            if (r[0]) throw r[0];
        }
        function xe(e, t) {
            const r = t.coercer(e);
            return ke(r, t), r;
        }
        function Ce(e, t, r = !1) {
            r && (e = t.coercer(e));
            const n = Se(e, t), o = ve(n);
            if (o) {
                return [ new we(o, n), void 0 ];
            }
            return [ void 0, e ];
        }
        function* Se(e, t, r = [], n = []) {
            const {type: o} = t, i = {
                value: e,
                type: o,
                branch: n,
                path: r,
                fail: (t = {}) => me({
                    value: e,
                    type: o,
                    path: r,
                    branch: [ ...n, e ]
                }, t),
                check: (e, t, o, i) => Se(e, t, void 0 !== o ? [ ...r, i ] : r, void 0 !== o ? [ ...n, o ] : n)
            }, s = ge(t.validator(e, i), i), a = ve(s);
            a ? (yield a, yield* s) : yield* ge(t.refiner(e, i), i);
        }
        function Oe(e) {
            return new be({
                type: `Array<${e ? e.type : "unknown"}>`,
                schema: e,
                coercer: t => e && Array.isArray(t) ? t.map((t => xe(t, e))) : t,
                * validator(t, r) {
                    if (Array.isArray(t)) {
                        if (e) for (const [n, o] of t.entries()) yield* r.check(o, e, t, n);
                    } else yield r.fail();
                }
            });
        }
        function Ae() {
            return _e("boolean", (e => "boolean" == typeof e));
        }
        function Ee() {
            return _e("never", (() => !1));
        }
        function Le() {
            return _e("number", (e => "number" == typeof e && !isNaN(e)));
        }
        function Te(e) {
            const t = e ? Object.keys(e) : [], r = Ee();
            return new be({
                type: e ? `Object<{${t.join(",")}}>` : "Object",
                schema: e || null,
                coercer: e ? je(e) : e => e,
                * validator(n, o) {
                    if ("object" == typeof n && null != n) {
                        if (e) {
                            const i = new Set(Object.keys(n));
                            for (const r of t) {
                                i.delete(r);
                                const t = e[r], s = n[r];
                                yield* o.check(s, t, n, r);
                            }
                            for (const e of i) {
                                const t = n[e];
                                yield* o.check(t, r, n, e);
                            }
                        }
                    } else yield o.fail();
                }
            });
        }
        function Ie(e) {
            return new be({
                type: `${e.type}?`,
                schema: e.schema,
                validator: (t, r) => void 0 === t || r.check(t, e)
            });
        }
        function Pe(e) {
            e instanceof be && (e = e.schema);
            const t = Object.keys(e), r = Ee();
            return new be({
                type: `Partial<{${t.join(",")}}>`,
                schema: e,
                coercer: je(e),
                * validator(n, o) {
                    if ("object" != typeof n || null == n) return void (yield o.fail());
                    const i = new Set(Object.keys(n));
                    for (const r of t) {
                        if (i.delete(r), !(r in n)) continue;
                        const t = e[r], s = n[r];
                        yield* o.check(s, t, n, r);
                    }
                    for (const e of i) {
                        const t = n[e];
                        yield* o.check(t, r, n, e);
                    }
                }
            });
        }
        function Fe() {
            return _e("string", (e => "string" == typeof e));
        }
        function _e(e, t) {
            return new be({
                type: e,
                validator: t,
                schema: null
            });
        }
        function je(e) {
            const t = Object.keys(e);
            return r => {
                if ("object" != typeof r || null == r) return r;
                const n = {}, o = new Set(Object.keys(r));
                for (const i of t) {
                    o.delete(i);
                    const t = e[i], s = r[i];
                    n[i] = xe(s, t);
                }
                for (const e of o) n[e] = r[e];
                return n;
            };
        }
        class Re extends Error {
            constructor(e, t) {
                super(e), this.code = t;
            }
        }
        const Ue = Re;
        const Ne = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            Array.isArray(t) || (t = [ t ]);
            var r = (new DOMParser).parseFromString(e, "text/html");
            return [].slice.call(r.querySelectorAll("script")).map((e => e.textContent)).filter((e => t.every((t => t.test(e)))));
        };
        function De(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        }
        function Me(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, i, s, a = [], c = !0, u = !1;
                    try {
                        if (i = (r = r.call(e)).next, 0 === t) {
                            if (Object(r) !== r) return;
                            c = !1;
                        } else for (;!(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0) ;
                    } catch (e) {
                        u = !0, o = e;
                    } finally {
                        try {
                            if (!c && null != r.return && (s = r.return(), Object(s) !== s)) return;
                        } finally {
                            if (u) throw o;
                        }
                    }
                    return a;
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return De(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? De(e, t) : void 0;
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        const qe = class {
            constructor(e, t) {
                this.finishQueue = () => {
                    if (this.activeCount--, this.queue.length > 0) {
                        var e = Me(this.queue.shift(), 2), t = e[0], r = e[1];
                        this.runQueue(t, r);
                    }
                }, this.limit = e, this.maxQueue = t, this.queue = [], this.activeCount = 0;
            }
            add(e) {
                var t = null, r = new Promise((e => {
                    t = e;
                }));
                if (this.activeCount < this.limit) this.runQueue(e, t); else {
                    var n = [ e, t ], o = this.queue.push(n);
                    this.maxQueue && o > this.maxQueue && this.queue.splice(0, o - this.maxQueue);
                }
                return r;
            }
            runQueue(e, t) {
                this.activeCount++;
                var r = fe(e);
                t(r), r.then(this.finishQueue, this.finishQueue);
            }
        };
        const Be = (e, t) => {
            var r = new qe(e, t);
            return e => r.add(e);
        };
        const Ve = function(e) {
            S.sendMessage({
                action: "sendMonitoring",
                obj: {
                    category: e.category,
                    event: e.event,
                    subcategory: e.subcategory
                }
            });
        };
        var $e = r(8835), He = r(2894), ze = $e.URL, Ge = u("YtMetadata").t, We = _e("FiniteNumber", (e => isFinite(Number(e))));
        function Ye(e) {
            var t = be;
            e instanceof t && (e = e.schema);
            var r = Object.keys(e);
            return new t({
                type: `Partial<{${r.join(",")}}>`,
                schema: e,
                coercer: Pe(e).coercer,
                validator: (t, n) => i().mark((function o() {
                    var s, a, c, u, l;
                    return i().wrap((function(o) {
                        for (;;) switch (o.prev = o.next) {
                          case 0:
                            if ("object" == typeof t && null != t) {
                                o.next = 4;
                                break;
                            }
                            return o.next = 3, n.fail();

                          case 3:
                            return o.abrupt("return");

                          case 4:
                            s = 0, a = r;

                          case 5:
                            if (!(s < a.length)) {
                                o.next = 13;
                                break;
                            }
                            return c = a[s], u = e[c], l = t[c], o.delegateYield(n.check(l, u, t, c), "t0", 10);

                          case 10:
                            s++, o.next = 5;
                            break;

                          case 13:
                          case "end":
                            return o.stop();
                        }
                    }), o);
                }))()
            });
        }
        var Je, Qe = Te({
            itag: Le(),
            url: Ie(Fe()),
            type: Ie(Fe()),
            cipher: Ie(Fe()),
            signatureCipher: Ie(Fe()),
            mimeType: Fe(),
            bitrate: Ie(Le()),
            width: Le(),
            height: Le(),
            initRange: Ie(Te({
                start: We,
                end: We
            })),
            indexRange: Ie(Te({
                start: We,
                end: We
            })),
            lastModified: We,
            contentLength: Ie(We),
            encryption: Ie(Fe()),
            drmFamilies: Ie(Oe(Fe())),
            quality: Fe(),
            fps: Le(),
            qualityLabel: Fe(),
            projectionType: Fe(),
            averageBitrate: Ie(Le()),
            colorInfo: Ie(Te({
                primaries: Ie(Fe()),
                transferCharacteristics: Fe(),
                matrixCoefficients: Ie(Fe())
            })),
            approxDurationMs: Ie(We),
            highReplication: Ie(Ae()),
            xtags: Ie(Fe()),
            targetDurationSec: Ie(Le()),
            maxDvrDurationSec: Ie(Le()),
            loudnessDb: Ie(Le())
        }), Ke = Te({
            itag: Le(),
            url: Ie(Fe()),
            cipher: Ie(Fe()),
            signatureCipher: Ie(Fe()),
            mimeType: Fe(),
            bitrate: Ie(Le()),
            initRange: Ie(Te({
                start: We,
                end: We
            })),
            indexRange: Ie(Te({
                start: We,
                end: We
            })),
            lastModified: We,
            contentLength: Ie(We),
            quality: Fe(),
            encryption: Ie(Fe()),
            drmFamilies: Ie(Oe(Fe())),
            projectionType: Fe(),
            averageBitrate: Ie(Le()),
            highReplication: Ie(Ae()),
            audioQuality: Fe(),
            approxDurationMs: Ie(We),
            audioSampleRate: We,
            audioChannels: Le(),
            targetDurationSec: Ie(Le()),
            maxDvrDurationSec: Ie(Le()),
            loudnessDb: Ie(Le())
        }), Xe = (Te({
            probeUrl: Ie(Fe()),
            dashManifestUrl: Ie(Fe()),
            hlsManifestUrl: Ie(Fe()),
            expiresInSeconds: We,
            formats: Ie(Oe(Te({
                itag: Le(),
                url: Ie(Fe()),
                cipher: Ie(Fe()),
                signatureCipher: Ie(Fe()),
                mimeType: Fe(),
                bitrate: Ie(Le()),
                fps: Ie(Le()),
                width: Le(),
                height: Le(),
                lastModified: We,
                contentLength: Ie(We),
                quality: Fe(),
                qualityLabel: Fe(),
                projectionType: Fe(),
                averageBitrate: Ie(Le()),
                audioQuality: Fe(),
                approxDurationMs: Ie(We),
                audioSampleRate: Ie(We),
                audioChannels: Ie(Le())
            }))),
            adaptiveFormats: Oe((Je = (e, t) => e && /^video/.test(e.mimeType) ? Qe : Ke, _e("Dynamic<...>", ((e, t) => t.check(e, Je(e, t)))))),
            licenseInfos: Ie(Oe(Te({
                drmFamily: Fe(),
                url: Fe(),
                drmParams: Fe()
            }))),
            drmParams: Ie(Fe())
        }), Ye({
            itag: Le(),
            url: Ie(Fe()),
            cipher: Ie(Fe()),
            signatureCipher: Ie(Fe()),
            mimeType: Fe(),
            fps: Ie(Le()),
            width: Ie(Le()),
            height: Ie(Le()),
            bitrate: Ie(Le()),
            contentLength: Ie(We)
        })), Ze = Ye({
            formats: Ie(Oe(Xe)),
            adaptiveFormats: Ie(Oe(Xe))
        }), et = Ye({
            playabilityStatus: Te(),
            streamingData: Ie(Te()),
            videoDetails: Ie(Ye({
                videoId: Fe(),
                title: Fe(),
                lengthSeconds: We,
                channelId: Fe(),
                shortDescription: Fe(),
                thumbnail: Ye({
                    thumbnails: Oe(Ye({
                        url: Fe(),
                        width: Le(),
                        height: Le()
                    }))
                }),
                useCipher: Ie(Ae()),
                author: Fe()
            }))
        });
        function tt(e) {
            return new Promise(((t, r) => {
                _(e, ((e, n, o) => {
                    e && "string" == typeof e && (e = new Error(e)), e ? r(e) : t(o);
                }));
            })).catch((e => {
                var t = /^(\d+)\s+(.*)/.exec(e.message);
                throw t && (e.status = parseInt(t[1], 10), e.statusText = t[2]), e;
            }));
        }
        function rt(e) {
            var t = e.playabilityStatus, r = e.videoDetails;
            if ("OK" !== t.status) {
                var n = "UNKNOWN_PLAYABILITY_STATUS";
                return "LOGIN_REQUIRED" === t.status || "UNPLAYABLE" === t.status ? n = t.status : "ERROR" === t.status && (n = "YT_ERROR"), 
                new Ue(`${t.status}: ${t.reason}`, n);
            }
            if (!r) return new Ue("Video details is empty", "VIDEO_DETAILS_IS_EMPTY");
        }
        function nt(e) {
            var t = null;
            if ([ "url_encoded_fmt_stream_map", "adaptive_fmts", "fmt_url_map" ].some((r => {
                var n = e[r];
                if (n) return n.some((e => {
                    if (e.s && e.url) return t = e, !0;
                }));
            })), !t) {
                var r = e.player_response;
                if (r.streamingData) {
                    function n(e) {
                        var r = e.signatureCipher || e.cipher;
                        if (r) {
                            var n = He.parse(r), o = n.sp, i = n.s, s = n.url;
                            return t = {
                                url: s,
                                sp: o,
                                s: i
                            }, !0;
                        }
                    }
                    r.streamingData.formats && r.streamingData.formats.some(n), !t && r.streamingData.adaptiveFormats && r.streamingData.adaptiveFormats.some(n);
                }
            }
            return t;
        }
        function ot(e, t, r) {
            return r && (e[t] = r), e;
        }
        var it = /(\/s\/([^\/]+))/;
        function st(e) {
            var t = it.exec(e);
            if (t) return {
                fragment: t[1],
                signature: t[2]
            };
        }
        var at = /\/sp\/([^\/]+)/;
        function ct(e) {
            var t = at.exec(e);
            if (t) return t[1];
        }
        function ut(e) {
            var t = null;
            if (/\.googlevideo\.com/.test(e)) {
                var r = new ze(e);
                r.host = "redirector.googlevideo.com", t = $e.format(r);
            } else if (/r[1-9].*\.c\.youtube\.com/.test(e)) {
                var n = new ze(e);
                n.host = "www.youtube.com", t = $e.format(n);
            }
            return t;
        }
        const lt = class {
            constructor() {
                this.lastSignatureInited = !1, this.oneLimitGetSignature = Be(1), this.lastSignature = null, 
                this.html5SigDecipher = new pe, this.getDashUrlSignature = st, this.dashMpdSignatureParamR = ct, 
                this.getAltUrl = ut, this.getData = tt, (S.isChromeMobile || S.isFirefoxMobile) && (this.ua = ee());
            }
            getMetadata(e, t) {
                return fetch("https://www.youtube.com/youtubei/v1/player?key=AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w&prettyPrint=false", {
                    body: `{"context": {"client": {"clientName": "ANDROID", "clientVersion": "19.09.37", "androidSdkVersion": 30, "hl": "en", "timeZone": "UTC", "utcOffsetMinutes": 0}}, "videoId": "${e}", "params": "CgIIAQ==", "playbackContext": {"contentPlaybackContext": {"html5Preference": "HTML5_PREF_WANTS"}}, "contentCheckOk": true, "racyCheckOk": true}`,
                    headers: {
                        "Content-Type": "application/json",
                        "X-Youtube-Client-Name": "3",
                        "X-Youtube-Client-Version": "19.09.37",
                        "User-Agent": "com.google.android.youtube/19.09.37 (Linux; U; Android 11) gzip"
                    },
                    method: "POST"
                }).then((e => e.json())).then((t => {
                    if (t && t.playabilityStatus && "This video is unavailable" === t.playabilityStatus.reason) throw new Error("TRY_IOS");
                    if (t && t.videoDetails && t.videoDetails.videoId !== e) throw new Error("TRY_IOS");
                    if (t && t.playabilityStatus && "LOGIN_REQUIRED" === t.playabilityStatus.status) throw new Error("LOGIN_REQUIRED");
                    var r = {
                        player_response: t
                    };
                    return Ve({
                        category: "meta",
                        subcategory: "101",
                        event: "main"
                    }), {
                        videoInfo: r,
                        signature: null
                    };
                })).catch((r => (Ge.error("getMetadata error: %O", r), "TRY_IOS" === r.code ? this.getMetadataIos(e, t) : this.getVideoInfoAsPage(e).catch((e => {
                    throw Ge.error("getVideoInfoAsPage error: %O", e), Ve({
                        category: "meta",
                        subcategory: "101",
                        event: "fail"
                    }), e;
                })).then((e => {
                    var t = e.videoInfo, r = e.signature;
                    return Ve({
                        category: "meta",
                        subcategory: "101",
                        event: "fallback"
                    }), this.testSignature(t, r).then((() => ({
                        videoInfo: t,
                        signature: r
                    })));
                })))));
            }
            getMetadataIos(e, t) {
                return fetch("https://www.youtube.com/youtubei/v1/player?key=AIzaSyB-63vPrdThhKuerbB2N_l7Kwwcxj6yUAc&prettyPrint=false", {
                    body: `{"context": {"client": {"clientName": "IOS", "clientVersion": "19.09.3", "deviceModel": "iPhone14,3", "hl": "en", "timeZone": "UTC", "utcOffsetMinutes": 0}}, "videoId": "${e}", "params": "CgIQBg==", "playbackContext": {"contentPlaybackContext": {"html5Preference": "HTML5_PREF_WANTS"}}, "contentCheckOk": true, "racyCheckOk": true}`,
                    headers: {
                        "Content-Type": "application/json",
                        "X-Youtube-Client-Name": "5",
                        "X-Youtube-Client-Version": "19.09.3",
                        "User-Agent": "com.google.ios.youtube/19.09.3 (iPhone14,3; U; CPU iOS 15_6 like Mac OS X)"
                    },
                    method: "POST"
                }).then((e => e.json())).then((e => {
                    if (e && e.playabilityStatus && "LOGIN_REQUIRED" === e.playabilityStatus.status) throw new Error("LOGIN_REQUIRED");
                    var t = {
                        player_response: e
                    };
                    return Ve({
                        category: "meta",
                        subcategory: "101",
                        event: "main"
                    }), {
                        videoInfo: t,
                        signature: null
                    };
                })).catch((t => (Ge.error("getMetadata error: %O", t), this.getVideoInfoAsPage(e).catch((e => {
                    throw Ge.error("getVideoInfoAsPage error: %O", e), Ve({
                        category: "meta",
                        subcategory: "101",
                        event: "fail"
                    }), e;
                })).then((e => {
                    var t = e.videoInfo, r = e.signature;
                    return Ve({
                        category: "meta",
                        subcategory: "101",
                        event: "fallback"
                    }), this.testSignature(t, r).then((() => ({
                        videoInfo: t,
                        signature: r
                    })));
                })))));
            }
            testSignature(e, t) {
                var r = this;
                return n(i().mark((function n() {
                    var o, s, a, c;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (o = nt(e)) {
                                n.next = 3;
                                break;
                            }
                            return n.abrupt("return");

                          case 3:
                            return Ge.debug("Found chiped item", e.player_response.videoDetails.videoId), s = r.html5SigDecipher.applyActions(t.actionList, o.s), 
                            a = null, o.getUrl ? a = o.getUrl(s) : (c = o.sp || "signature", a = o.url + `&${c}=` + s), 
                            n.abrupt("return", tt({
                                method: "HEAD",
                                url: a
                            }).catch((e => {
                                var t = ut(a);
                                if ("net::ERR_NAME_NOT_RESOLVED" === e.message && t) return tt({
                                    method: "HEAD",
                                    url: t
                                });
                                throw e;
                            })).catch((e => {
                                if (403 === e.status) throw e;
                            })));

                          case 8:
                          case "end":
                            return n.stop();
                        }
                    }), n);
                })))();
            }
            getVideoInfo(e, t, r, o) {
                var s = this;
                return n(i().mark((function n() {
                    var a;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return null, n.next = 3, s.getSignature();

                          case 3:
                            return a = n.sent, n.abrupt("return", tt({
                                url: `https://${e}/get_video_info?` + He.stringify({
                                    video_id: t,
                                    eurl: o,
                                    el: r,
                                    html5: 1,
                                    sts: a.sts
                                }),
                                headers: ot({}, "User-Agent", s.ua)
                            }).then((e => {
                                e, e = He.parse(e), s.parseParams(e);
                                var t = parseInt(e.errorcode, 10);
                                if (t > 0) {
                                    var r = "VIDEO_INFO_ERROR";
                                    throw 2 === t ? r = "INVALID_REQUEST" : 150 === t && (r = "UNAVAILABLE"), new Ue(`Error (${t}): ${e.reason}`, r);
                                }
                                if (!e.player_response) throw new Ue("Player response is not found", "PLAYER_RESPONSE_NOT_FOUND");
                                var n = rt(e.player_response);
                                if (n) throw n;
                                return {
                                    videoInfo: e,
                                    signature: a
                                };
                            })));

                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }), n);
                })))();
            }
            getVideoInfoAsJsonPage(e) {
                var t = this;
                return tt({
                    url: "https://www.youtube.com/watch?" + He.stringify({
                        v: e,
                        pbj: 1
                    }),
                    headers: ot({
                        "x-youtube-client-name": "1",
                        "x-youtube-client-version": "2.20200812.02.01"
                    }, "User-Agent", this.ua)
                }).then(function() {
                    var e = n(i().mark((function e(r) {
                        var n, o;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (r = JSON.parse(r), Array.isArray(r)) {
                                    e.next = 3;
                                    break;
                                }
                                throw new Ue("Unexpected response", "UNEXPECTED_RESPONSE");

                              case 3:
                                if (n = null, o = null, r.some((e => {
                                    if (e.playerResponse ? n = e.playerResponse : e.player && e.player.assets && e.player.assets.js && (o = e.player.assets.js), 
                                    n && o) return !0;
                                })), n) {
                                    e.next = 8;
                                    break;
                                }
                                throw new Ue("playerResponse is not found!", "PLAYER_RESPONSE_IS_NOT_FOUND");

                              case 8:
                                return e.abrupt("return", t.getVideoInfoFromPlayerResponse(n, o));

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }), e);
                    })));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }());
            }
            getVideoInfoAsPage(e) {
                var t = this;
                return tt({
                    url: "https://www.youtube.com/watch?" + He.stringify({
                        v: e,
                        has_verified: 1
                    }),
                    headers: ot({}, "User-Agent", this.ua)
                }).then(function() {
                    var e = n(i().mark((function e(r) {
                        var n, o, s, a, c, u;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                r;
                                try {
                                    s = t.getYtInitialPlayerResponseFromHtmlPage(r), a = s.playerResponse, c = s.playerUrl, 
                                    n = {
                                        player_response: a
                                    }, o = c;
                                } catch (e) {
                                    Ge.warn("getYtInitialPlayerResponseFromHtmlPage error: %O", e), u = t.getSwfCfgFromHtmlPage(r), 
                                    n = t.parseParams(u.args), o = u.assets && u.assets.js;
                                }
                                return e.abrupt("return", t.getVideoInfoFromPlayerResponse(n.player_response, o));

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }), e);
                    })));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }());
            }
            getSwfCfgFromHtmlPage(e) {
                var t = null;
                if (Ne(e, [ /"responseContext"/ ]).some((e => q(e, [ /"playabilityStatus":/ ]).some((e => {
                    if (e && e.playabilityStatus) return t = e, !0;
                })))), t) {
                    var r = rt(t);
                    if (r) throw r;
                }
                var n = null;
                if (Ne(e, [ /ytplayer\.config\s+=\s+/ ]).some((e => q(e, [ /"player_response":/ ]).some((e => {
                    if (e.args && "object" == typeof e.args) return n = e, !0;
                })))), !n) throw new Ue("swfcfg is not found!", "SWFCFG_IS_NOT_FOUND");
                return n;
            }
            getYtInitialPlayerResponseFromHtmlPage(e) {
                var t = null;
                if (Ne(e, [ /ytInitialPlayerResponse/ ]).some((e => q(e, [ /"playabilityStatus":/ ]).some((e => {
                    if (e && e.playabilityStatus) return t = e;
                })))), !t) throw new Ue("ytInitialPlayerResponse in not found", "PLAYER_RESPONSE_NOT_FOUND");
                var r = null;
                return Ne(e, [ /ytplayer\.web_player_context_config\s+=\s+/ ]).some((e => q(e, [ /"jsUrl":/ ]).some((e => {
                    if (e.jsUrl) return r = e.jsUrl;
                })))), !r && Ne(e, [ /window\.ytplayer={};/ ]).some((e => q(e, [ /("jsUrl"|"PLAYER_JS_URL"):/ ]).some((e => e.PLAYER_JS_URL ? r = e.PLAYER_JS_URL : e.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH && e.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.jsUrl ? r = e.WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH.jsUrl : void 0)))), 
                {
                    playerResponse: t,
                    playerUrl: r
                };
            }
            getVideoInfoFromPlayerResponse(e, t) {
                var r = this;
                return n(i().mark((function n() {
                    var o, s, a;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (r.validatePlayerResponse(e), !(o = rt(e))) {
                                n.next = 4;
                                break;
                            }
                            throw o;

                          case 4:
                            if (s = {
                                player_response: e
                            }, t) {
                                n.next = 7;
                                break;
                            }
                            throw new Ue("Player url is not found", "PLAYER_URL_IS_NOT_FOUND");

                          case 7:
                            return n.next = 9, r.getSignatureFormPlayerUrl(t);

                          case 9:
                            return a = n.sent, n.abrupt("return", {
                                videoInfo: s,
                                signature: a
                            });

                          case 11:
                          case "end":
                            return n.stop();
                        }
                    }), n);
                })))();
            }
            getInfoFromVideoInfo(e, t) {
                var r = this;
                return n(i().mark((function n() {
                    var o, s;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (e.player_response) {
                                n.next = 2;
                                break;
                            }
                            throw new Ue("Player response is not found", "PLAYER_RESPONSE_NOT_FOUND");

                          case 2:
                            if (e.player_response = xe(e.player_response, et), !(o = rt(e.player_response))) {
                                n.next = 6;
                                break;
                            }
                            throw o;

                          case 6:
                            if (t) {
                                n.next = 8;
                                break;
                            }
                            throw new Ue("Player url is not found", "PLAYER_URL_IS_NOT_FOUND");

                          case 8:
                            return n.next = 10, r.getSignatureFormPlayerUrl(t);

                          case 10:
                            return s = n.sent, n.abrupt("return", {
                                videoInfo: e,
                                signature: s
                            });

                          case 12:
                          case "end":
                            return n.stop();
                        }
                    }), n);
                })))();
            }
            parseParams(e) {
                return [ "url_encoded_fmt_stream_map", "adaptive_fmts", "fmt_url_map" ].forEach((t => {
                    e[t] && (e[t] = e[t].split(",").map((e => He.parse(e))));
                })), e.player_response && (e.player_response = JSON.parse(e.player_response), this.validatePlayerResponse(e.player_response)), 
                e;
            }
            validatePlayerResponse(e) {
                xe(e, et), e.streamingData && ke(e.streamingData, Ze);
            }
            initLastSignature() {
                return fe((() => {
                    if (!this.lastSignatureInited) return this.lastSignatureInited = !0, new Promise((e => S.storage.get({
                        ytLastSignature: null
                    }, (t => e(t.ytLastSignature))))).then((e => {
                        e && e.throttleSigCode && (e = null), this.lastSignature = e;
                    }));
                }));
            }
            getSignature() {
                var e = this;
                return this.oneLimitGetSignature(n(i().mark((function t() {
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, e.initLastSignature();

                          case 2:
                            if (e.lastSignature && !(e.lastSignature.expiresAt < se())) {
                                t.next = 7;
                                break;
                            }
                            return null, t.next = 6, tt({
                                url: "https://www.youtube.com/",
                                headers: ot({}, "User-Agent", e.ua)
                            }).then((t => {
                                t;
                                var r = null;
                                try {
                                    r = e.getPlayerUrlFromHtml(t);
                                } catch (n) {
                                    r = e.getPlayerUrlFromAuthHtml(t);
                                }
                                return e.getSignatureFormPlayerUrl(r);
                            }));

                          case 6:
                            e.lastSignature = t.sent;

                          case 7:
                            return t.abrupt("return", e.lastSignature);

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                }))));
            }
            getSignatureFormPlayerUrl(e) {
                return /^\/\//.test(e) ? e = "https:" + e : /^\//.test(e) && (e = "https://www.youtube.com" + e), 
                this.initLastSignature().then((() => this.lastSignature && this.lastSignature.expiresAt > se() && this.lastSignature.playerUrl === e && "10.21" === this.lastSignature.helperVersion ? this.lastSignature : tt({
                    url: e,
                    headers: ot({}, "User-Agent", this.ua)
                }).then((t => this.html5SigDecipher.dechip(e, t))).then((e => new Promise((t => S.storage.set({
                    ytLastSignature: e
                }, t))).catch((e => {
                    Ge.warn("Unable save signature, cause: %O", e);
                })).then((() => this.lastSignature = e))))));
            }
            getPlayerUrlFromHtml(e) {
                var t = null;
                if (Ne(e, [ /window\.ytplayer\s*=\s*/ ]).some((e => q(e, [ /"PLAYER_JS_URL":/ ]).some((e => {
                    if (e.PLAYER_JS_URL) return t = e.PLAYER_JS_URL, !0;
                })))), !t) throw new Ue("Player url is not found", "PLAYER_URL_IS_NOT_FOUND");
                return t;
            }
            getPlayerUrlFromAuthHtml(e) {
                var t = null;
                if (Ne(e, [ /ytplayer\.config\s+=\s+/ ]).some((e => q(e, [ /"assets":/ ]).some((e => {
                    if (e.assets && e.assets.js) return t = e.assets.js, !0;
                })))), !t) throw new Ue("Player url is not found", "PLAYER_URL_IS_NOT_FOUND");
                return t;
            }
            getThrottleSigFn(e) {
                return S.isFirefox, !1;
            }
        };
        var pt = u("youtube_embed").t, ft = r(2894);
        function ht(e, t) {
            var r, n = {
                144: 144,
                240: 240,
                360: 360,
                480: 480,
                720: 720,
                1080: 1080,
                1440: 1440,
                "4K": 2160,
                "5K": 2880,
                "8K": 4320
            }, o = Math.max(e, t);
            for (var i in e = Math.min(e, t), n) {
                var s = n[i];
                if (!(o >= Math.floor(16 * s / 9) || e >= s)) return r;
                r = i;
            }
            return r;
        }
        function dt(e) {
            return /ratebypass/.test(e) || (/\?/.test(e) ? e += "&ratebypass=yes" : (/\/$/.test(e) || (e += "/"), 
            e += "ratebypass/yes/")), e;
        }
        var mt = /(\/s\/([^\/]+))/;
        var yt = /\/sp\/([^\/]+)/;
        const gt = class {
            constructor(e) {
                this._lastSignature = null, this.html5SigDecipher = new pe, this.ytMetadata = new lt, 
                this.engine = e;
            }
            getYoutubeLinks(e, t) {
                var r = this;
                function n(n, o, i, s) {
                    r.addMuxerLinks(n, o), r.addProLinks(n, e.extVideoId), r.addTelevzrLinks(n, e.extVideoId);
                    var a = {
                        action: e.action,
                        extVideoId: e.extVideoId,
                        links: n,
                        title: o,
                        subtitles: i,
                        duration: s,
                        checkLinks: null
                    };
                    return e.checkLinks && n ? r.checkYoutubeLinks(n, (function(e, r) {
                        return a.checkLinks = r, t(a);
                    })) : t(a);
                }
                return r._getYoutubeLinks(e.url, e.extVideoId, e.checkSubtitles, e.noDash).then((function(e) {
                    n(e.links, e.title, e.subtitles, e.duration);
                }), (function(e) {
                    pt.error("_getYoutubeLinks error: %O", e), n(null, "", null, "");
                })), !0;
            }
            _getYoutubeLinks(e, t, r, n) {
                var o = this;
                return this.ytMetadata.getMetadata(t, e).then((function(e) {
                    var i = e.videoInfo, s = e.signature;
                    return o.onGetConfig(t, r, n, i, s);
                }));
            }
            readFmt(e, t, r, n) {
                var o = this, i = e.meta;
                t.forEach((function(t) {
                    if (t.stream) i.hasStream = 1; else {
                        var s = t.url;
                        if (s) {
                            if (!/([?&])s(ig(nature)?)?=/i.test(s)) if (t.sig) s += "&sig=" + t.sig; else if (t.signature) s += "&signature=" + t.signature; else if (t.s) {
                                s += `&${t.sp || "signature"}=` + o.html5SigDecipher.applyActions(r.actionList, t.s);
                            }
                            s = s.replace(/\\u0026/gi, "&");
                            var a = t.itag;
                            if (!a) {
                                var c = /(?:[?&])itag=(\d+)/i.exec(s);
                                c && (a = c[1]);
                            }
                            if (a && !e[a]) {
                                /[?&]itag=/i.test(s) || (s += "&itag=" + a), s = dt(s);
                                var u = i[a];
                                if (u || (u = i[a] = {}), t.fps && (u.fps = t.fps), t.size && /^\d+x\d+$/.test(t.size)) {
                                    var l = t.size.split("x");
                                    u.quality = ht(l[0], l[1]);
                                }
                                if (t.bitrate && (u.bitrate = parseInt(t.bitrate)), t.type) {
                                    u.type = t.type;
                                    var p = t.type.match(/codecs="([^"]+)"/);
                                    p && (u.codecs = p[1]);
                                }
                                t.projection_type && (u.projectionType = parseInt(t.projection_type)), e[a] || (e[a] = s + n);
                            }
                        }
                    }
                }));
            }
            _readPlayerResponse(e, t, r) {
                var n = e => {
                    e.type && /audio\/mp4/.test(e.type) && (t.multiLang || (t.multiLang = {
                        audioDefault: null,
                        variants: {}
                    }), e.audioTrack && (t.multiLang.variants[e.audioTrack.id] = e, e.audioTrack.audioIsDefault && (t.multiLang.audioDefault = e))), 
                    t[e.itag] || (t[e.itag] = e.url, t.meta[e.itag] = e);
                };
                e.streamingData && (Array.isArray(e.streamingData.formats) && e.streamingData.formats.forEach((t => {
                    var o = this._readPlayerResponseFormat(t, r, e, "streamingData.formats");
                    o && n(o);
                })), Array.isArray(e.streamingData.adaptiveFormats) && e.streamingData.adaptiveFormats.forEach((t => {
                    var o = this._readPlayerResponseFormat(t, r, e, "streamingData.adaptiveFormats");
                    o && n(o);
                }))), t && t.multiLang && t.multiLang.variants && 0 === Object.keys(t.multiLang.variants).length && (t.multiLang = null);
            }
            _readPlayerResponseFormat(e, t, r, n) {
                if (e.cipher || e.signatureCipher) {
                    var o = ft.parse(e.cipher || e.signatureCipher), i = o.sp, s = o.s, a = o.url, c = this.html5SigDecipher.applyActions(t.actionList, s);
                    e.url = a + (/\?/.test(a) ? "&" : "?") + `${i}=` + encodeURIComponent(c);
                }
                var u = /[?&]n=([^&]+)/i.exec(e.url);
                if (u) {
                    var l = u[1], p = decodeURIComponent(l), f = this.ytMetadata.getThrottleSigFn(t);
                    if (f) {
                        var h = f(p);
                        h && (e.url = e.url.replace(`n=${l}`, `n=${encodeURIComponent(h)}`));
                    }
                }
                var d = {
                    source: n
                }, m = "" + e.itag;
                d.itag = m, d.url = e.url, e.audioTrack && (d.audioTrack = e.audioTrack), e.fps ? d.fps = parseFloat(e.fps) : d.noFps = !0, 
                e.width && e.height ? (d.quality = ht(e.width, e.height), d.width = e.width, d.height = e.height) : d.noWidthHeight = !0, 
                d.bitrate = e.bitrate, d.type = e.mimeType;
                var y = /codecs="([^"]+)"/.exec(e.mimeType);
                if (y) {
                    var g = y[1].split(/,\s*/), v = g.some((e => /^mp4a/.test(e))), b = g.some((e => /^avc/.test(e)));
                    d.isBundle = v && b;
                }
                return d.acodec && !d.vcodec && (delete d.noWidthHeight, delete d.noFps), e.contentLength && (d.contentLength = parseInt(e.contentLength, 10)), 
                d;
            }
            ytPrepareVideoInfo(e) {
                return this.onGetConfig(e.videoId, e.checkSubtitles, e.noDash, e.config, e.signature).then((t => {
                    Ve({
                        category: "links",
                        subcategory: "101",
                        event: "fallback"
                    });
                    var r = t.links, n = t.title;
                    return r && this.addProLinks(r, e.videoId), r && this.addTelevzrLinks(r, e.videoId), 
                    this.addMuxerLinks(r, n), {
                        links: r,
                        title: n,
                        multiLang: r.multiLang
                    };
                }));
            }
            onGetConfig(e, t, r, n, o) {
                var i = this, s = n.player_response, a = s.videoDetails, c = void 0 === a ? {} : a, u = s.playabilityStatus, l = void 0 === u ? {} : u, p = {
                    meta: {}
                }, f = "", h = null, d = "", m = null;
                return fe((function() {
                    d = c.lengthSeconds || n.length_seconds || "";
                    var e = "";
                    (f = c.title || n.title || "") && (f = f.replace(/\+/g, " "), e = "&title=" + encodeURIComponent(ie.modify(f)));
                    var t = n.fmt_url_map || n.url_encoded_fmt_stream_map || [], r = n.adaptive_fmts || [], s = l.liveStreamability;
                    (s && s.liveStreamabilityRenderer && !s.liveStreamabilityRenderer.displayEndscreen || n.livestream || n.live_playback) && (p.meta.hasStream = 1), 
                    i._readPlayerResponse(n.player_response, p, o), t && i.readFmt(p, t, o, e), r && i.readFmt(p, r, o, e), 
                    (m = n.dashmpd || "") && -1 !== m.indexOf("yt_live_broadcast") && (m = null);
                })).then((function() {
                    var n = Promise.resolve();
                    return t && (n = n.then((function() {
                        return new Promise((function(t) {
                            i.getYoutubeSubtitles({
                                extVideoId: e
                            }, (function(e) {
                                h = e || null, t();
                            }));
                        })).catch((function(e) {
                            pt.error("Get subtitles error: %O", e);
                        }));
                    }))), !r && m && (n = n.then((function() {
                        var e = m, t = function(e) {
                            var t = yt.exec(e);
                            if (t) return t[1];
                        }(m) || "signature", r = function(e) {
                            var t = mt.exec(e);
                            if (t) return {
                                fragment: t[1],
                                signature: t[2]
                            };
                        }(m);
                        if (r) {
                            var n = i.html5SigDecipher.applyActions(o.actionList, r.signature);
                            e = m.replace(r.fragment, `/${t}/` + n);
                        }
                        return e = e.replace("/sig/", "/signature/"), i.getYouTubeDashLinks(p, e).catch((function(e) {
                            pt.error("Get dash error: %O", e);
                        }));
                    }))), n;
                })).then((function() {
                    var e = Object.keys(p).length;
                    return p.meta && !p.meta.hasStream && e--, e || (p = null), {
                        links: p,
                        title: f,
                        subtitles: h,
                        duration: d
                    };
                }));
            }
            addProLinks(e, t) {
                if (e && e.meta && this.engine.preferences && this.engine.preferences.proEnabled) {
                    var r = [ "1080", "2160", "4K" ];
                    Object.keys(e.meta).forEach((n => {
                        var o = e.meta[n];
                        if ("string" != typeof o && r.includes(o.quality)) {
                            var i = String(o.quality).toUpperCase();
                            "4K" === o.quality && (i = o.height);
                            var s = "pro" + o.quality;
                            e.meta[s] = {
                                quality: i,
                                height: o.height,
                                itag: "pro",
                                format: "MP4",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=" + encodeURIComponent(t)
                            };
                        }
                    })), e.meta.proMp3 = {
                        quality: "mp3",
                        itag: "pro",
                        noVideo: !0,
                        format: "Audio",
                        type: "audio",
                        url: "https://www.youtube.com/watch?v=" + encodeURIComponent(t)
                    };
                }
            }
            addTelevzrLinks(e, t) {
                var r = this.engine.preferences && this.engine.preferences.proEnabled;
                !e || e.meta && e.meta.hasStream || r || (e.televzr = "televzr://www.youtube.com/watch?v=" + t);
            }
            addMuxerLinks(e, t) {
                if (e && e.meta && !e.meta.hasStream && this.engine.preferences.ffmpegEnabled) {
                    var r = null, n = null, o = null;
                    Object.keys(e.meta).forEach((t => {
                        var i = e.meta[t];
                        i && (i.isBundle ? (!r || i.height > r) && (r = i.height) : /audio\/mp4/.test(i.type) ? (!o || i.bitrate > o.bitrate) && (o = i) : /video\/mp4/.test(i.type) && i.height > 360 && i.height <= 720 && (!n || i.height > n.height || i.bitrate > n.bitrate || i.fps > n.fps) && (n = i));
                    })), n && o && (e.meta.muxer = {
                        quality: n.quality,
                        width: n.width,
                        height: n.height,
                        fps: n.fps,
                        format: "MP4",
                        mmProps: {
                            sources: [ {
                                url: n.url,
                                format: "mp4"
                            }, {
                                url: o.url,
                                format: "m4a"
                            } ],
                            filename: t + ".mp4",
                            format: "mp4"
                        }
                    });
                }
            }
            checkYoutubeLinks(e, t) {
                for (var r = [ "18", "34", "35" ], n = "", o = 0; o < r.length; o++) if (e[r[o]]) {
                    n = e[r[o]];
                    break;
                }
                n ? _({
                    type: "HEAD",
                    url: n
                }, (function(e, r) {
                    t(n, !e);
                })) : t();
            }
            convertVtt2Srt(e, t) {
                _({
                    url: e.url
                }, (function(r, n, o) {
                    if (r || !o) return pt.error("Request error!", r), t();
                    var i = /(\d{2}:\d{2}:\d{2})\.(\d{3})/g, s = /^\d{2}:\d{2}:\d{2}\.\d{3}/, a = o.split("\n\n");
                    s.test(a[0]) || a.shift(), s.test(a[a.length - 1]) || a.pop();
                    var c = !1, u = a.filter((function(e) {
                        var t = s.test(e);
                        return t || (c = !0), t;
                    })).map((function(e, t) {
                        return t + 1 + "\n" + (e = e.replace(i, "$1,$2"));
                    }));
                    if (u = u.join("\n\n"), c) return t();
                    e.srt = u, e.preprocess = "srt2url", t();
                }));
            }
            getYoutubeSubtitles(e, t) {
                var r = this, n = e.extVideoId, o = "http://video.google.com/timedtext";
                _({
                    url: o + "?hl=" + S.i18n.getMessage("lang") + "&v=" + n + "&type=list&tlangs=1",
                    xml: !0
                }, (function(e, i, s) {
                    if (e || !s) return t();
                    for (var a, c, u, l = s.querySelectorAll("track"), p = s.querySelectorAll("target"), f = [], h = {}, d = {}, m = void 0, y = 0; u = l[y]; y++) c = {
                        lang: a = u.getAttribute("lang_code"),
                        v: n,
                        fmt: "vtt",
                        name: u.getAttribute("name") || void 0
                    }, h[a] = {
                        lang: u.getAttribute("lang_translated"),
                        langCode: a,
                        url: o + "?" + ft.stringify(c),
                        name: c.name
                    }, f.push(h[a]), !m && u.getAttribute("cantran") && (m = c);
                    if (m) for (var g, v = 0; g = p[v]; v++) a = g.getAttribute("lang_code"), c = {
                        lang: m.lang,
                        v: n,
                        tlang: a,
                        fmt: "vtt",
                        name: m.name
                    }, d[a] = {
                        lang: g.getAttribute("lang_translated"),
                        langCode: a,
                        url: o + "?" + ft.stringify(c),
                        isAuto: !0
                    };
                    0 === (a = navigator.language.toLowerCase()).indexOf("zh-hant") ? a = "zh-Hant" : 0 === a.indexOf("zh-hans") && (a = "zh-Hans");
                    var b = [ a ];
                    "uk" === b[0] && b.push("ru");
                    for (var w, k = 0; w = b[k]; k++) !h[w] && d[w] && f.push(d[w]);
                    var x = 0, C = 0, S = function() {
                        if (C++, x === C) return t(f);
                    };
                    x++, f.forEach((function(e) {
                        x++, r.convertVtt2Srt(e, S);
                    })), S();
                }));
            }
            getYouTubeDashLinks(e, t) {
                var r, n = this, o = {};
                return (S.isChromeMobile || S.isFirefoxMobile) && (o["User-Agent"] = ee()), (r = {
                    url: t,
                    headers: o,
                    xml: !0
                }, new Promise(((e, t) => {
                    _(r, ((r, n, o) => {
                        r && "string" == typeof r && (r = new Error(r)), r ? t(r) : e(o);
                    }));
                }))).then((function(t) {
                    n.parseDash(t, e);
                }));
            }
            parseDash(e, t) {
                for (var r, n = e.querySelectorAll("Representation"), o = t.meta = t.meta || {}, i = 0; r = n[i]; i++) {
                    var s = r.querySelector("BaseURL"), a = s.textContent;
                    if (a) {
                        var c = s.parentNode.querySelector("SegmentURL"), u = c && c.getAttribute("media");
                        if (!u || 0 !== u.indexOf("sq/")) {
                            var l = r.getAttribute("id"), p = o[l];
                            p || (p = o[l] = {}), a = dt(a);
                            var f = r.getAttribute("frameRate");
                            f && (p.fps = f);
                            var h = r.getAttribute("width"), d = r.getAttribute("height");
                            h && d && (p.quality = ht(h, d));
                            var m = r.getAttribute("codecs");
                            if (m) {
                                p.codecs = m;
                                var y = a.match(/mime=([^&]+)/);
                                (y = y && y[1]) && (p.type = y);
                            }
                            t[l] || (t[l] = a);
                        }
                    }
                }
            }
            getYoutubeIdListFromPlaylist(e, t) {
                return this.getIdListFromList(e.baseUrl || "https://www.youtube.com", e.listId, t), 
                !0;
            }
            getIdListFromList(e, t, r) {
                var n = function e(t, r, n, i) {
                    n || (n = []), _({
                        url: t + r,
                        json: !0
                    }, (function(r, s, a) {
                        if (r || !a) return i(n);
                        n.push(a.content_html);
                        var c = o(a.load_more_widget_html);
                        if (void 0 === c) return i(n);
                        e(t, c, n, i);
                    }));
                }, o = function(e) {
                    if (e) {
                        var t = e.match(/data-uix-load-more-href="([^"]+)"/);
                        return t && (t = t[1]), t || void 0;
                    }
                }, i = function(e, t, r) {
                    for (var n = function(e) {
                        var t = e.match(/<h1[^>]+>([^<]+)<\/h1>/);
                        if (t) return t[1].replace(/\r?\n/g, " ").trim();
                    }(t[0]), o = {}, i = [], s = /href="\/watch\?([^"]+)"/g, a = 0, c = 0, u = t.length; c < u; c++) {
                        t[c].replace(s, (function(t, r) {
                            var n = te(r, {
                                params: !0,
                                sep: "&amp;"
                            });
                            n.list === e && (n.index = parseInt(n.index), o[n.index] = n.v, n.index > a && (a = n.index));
                        }));
                    }
                    for (var l = 0; l <= a; l++) void 0 !== o[l] && -1 === i.indexOf(o[l]) && i.push(o[l]);
                    r({
                        idList: i,
                        title: n
                    });
                }, s = function(e) {
                    var t = null, r = e.match(/"nextContinuationData":({[^}]+})/);
                    if (r) try {
                        var n = JSON.parse(r[1]);
                        t = "/browse_ajax?" + ft.stringify({
                            ctoken: n.continuation,
                            itct: n.clickTrackingParams
                        });
                    } catch (e) {
                        pt.debug("getNewNextPageUrl error: %O", e);
                    }
                    return t;
                }, a = function(e, t) {
                    var r = function(e) {
                        Array.isArray(e) && e.forEach((function(e) {
                            var r = e.playlistVideoRenderer, n = r && r.videoId;
                            n && t.push(n);
                        }));
                    }, n = e.indexOf('{"playlistVideoListRenderer":{');
                    -1 !== n ? (e = e.substr(n), q(e).forEach((function(e) {
                        var t = e.playlistVideoListRenderer, n = t && t.contents;
                        r(n);
                    }))) : -1 !== (n = e.indexOf('{"playlistVideoListContinuation":{')) && (e = e.substr(n), 
                    q(e).forEach((function(e) {
                        var t = e.playlistVideoListContinuation, n = t && t.contents;
                        r(n);
                    })));
                }, c = function e(t, r, n, o, i) {
                    _({
                        url: t + r,
                        headers: n,
                        json: !0
                    }, (function(r, c, u) {
                        if (r) return pt.error("YT next page request error! %O", r), i();
                        var l = JSON.stringify(u), p = s(l);
                        a(l, o), p ? e(t, p, n, o, i) : i();
                    }));
                };
                return _({
                    url: e + "/playlist?list=" + t
                }, (function(u, l, p) {
                    if (u) return r();
                    var f = null;
                    if (/"playlistVideoListRenderer"/.test(p)) {
                        var h = function(e) {
                            var t = {}, r = null, n = /ytcfg\.set\(({.+)/.exec(e);
                            return n && re(n[1]).some((function(e) {
                                if (e.INNERTUBE_CONTEXT_CLIENT_NAME) return r = e, !0;
                            })), r && (t["x-youtube-client-name"] = r.INNERTUBE_CONTEXT_CLIENT_NAME, t["x-youtube-client-version"] = r.INNERTUBE_CONTEXT_CLIENT_VERSION, 
                            r.ID_TOKEN && (t["x-youtube-identity-token"] = r.ID_TOKEN)), t;
                        }(p), d = function(e) {
                            var t = "unknown", r = null, n = e.match(/"playlistSidebarPrimaryInfoRenderer":({.+)/);
                            if (n && re(n[1]).some((function(e) {
                                if (e.title && e.title.runs) return r = e, !0;
                            })), !t || "unknown" === t) {
                                var o = e.match(/"titleForm":({.+)/);
                                o && re(o[1]).some((e => {
                                    if (e.inlineFormRenderer && e.inlineFormRenderer.textDisplayed && e.inlineFormRenderer.textDisplayed.simpleText) return t = e.inlineFormRenderer.textDisplayed.simpleText, 
                                    !0;
                                }));
                            }
                            if (r) try {
                                r.title.runs.some((function(e) {
                                    if (e.text) return t = e.text;
                                }));
                            } catch (e) {
                                pt.debug("getNewTitle error: %O", e);
                            }
                            return t;
                        }(p), m = [];
                        a(p, m), (f = s(p)) ? c(e, f, h, m, (function() {
                            r({
                                idList: m,
                                title: d
                            });
                        })) : r({
                            idList: m,
                            title: d
                        });
                    } else (f = o(p)) ? n(e, f, [ p ], (function(e) {
                        i(t, e, r);
                    })) : i(t, [ p ], r);
                }));
            }
            getYoutubeLinksFromConfig(e, t) {
                var r = this;
                return fe((() => {
                    var n = e.config, o = n.args.video_id;
                    if (!n || !n.args) throw new Error("jsonList args is not found!");
                    return fetch("https://www.youtube.com/youtubei/v1/player?key=AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w&prettyPrint=false", {
                        body: `{"context": {"client": {"clientName": "ANDROID", "clientVersion": "19.09.37", "androidSdkVersion": 30, "hl": "en", "timeZone": "UTC", "utcOffsetMinutes": 0}}, "videoId": "${o}", "params": "CgIIAQ==", "playbackContext": {"contentPlaybackContext": {"html5Preference": "HTML5_PREF_WANTS"}}, "contentCheckOk": true, "racyCheckOk": true}`,
                        headers: {
                            "Content-Type": "application/json",
                            "X-Youtube-Client-Name": "3",
                            "X-Youtube-Client-Version": "19.09.37",
                            "User-Agent": "com.google.android.youtube/19.09.37 (Linux; U; Android 11) gzip"
                        },
                        method: "POST"
                    }).then((e => {
                        if (403 === e.status) throw new Error("Forbidden");
                        return e.json();
                    })).then((n => {
                        if (n && n.playabilityStatus && "This video is unavailable" === n.playabilityStatus.reason) throw new Error("video unavailable");
                        if (n && n.videoDetails && n.videoDetails.videoId !== mediaId) throw new Error("TRY_IOS");
                        if (n && n.playabilityStatus && "LOGIN_REQUIRED" === n.playabilityStatus.status) throw new Error("LOGIN_REQUIRED");
                        var o = {
                            player_response: n
                        };
                        return r.onGetConfig(e.extVideoId, e.checkSubtitles, e.noDash, o, null).then((n => {
                            Ve({
                                category: "links",
                                subcategory: "101",
                                event: "main"
                            });
                            var o = n.title, i = n.links;
                            i && r.addProLinks(i, e.extVideoId), i && r.addTelevzrLinks(i, e.extVideoId), r.addMuxerLinks(i, o), 
                            t({
                                links: i,
                                title: o
                            });
                        }));
                    })).catch((o => {
                        if ("TRY_IOS" === o.message) return r.getYoutubeLinksFromConfigIos(e, t);
                        var i = n.args, s = n.playerUrl;
                        return this.ytMetadata.getInfoFromVideoInfo(i, s).then((n => {
                            var o = n.videoInfo, i = n.signature;
                            return r.onGetConfig(e.extVideoId, e.checkSubtitles, e.noDash, o, i).then((n => {
                                Ve({
                                    category: "links",
                                    subcategory: "101",
                                    event: "fallback"
                                });
                                var o = n.links, i = n.title;
                                o && r.addProLinks(o, e.extVideoId), o && r.addTelevzrLinks(o, e.extVideoId), r.addMuxerLinks(o, i), 
                                t({
                                    links: o,
                                    title: i,
                                    multiLang: o.multiLang
                                });
                            }));
                        })).catch((n => (pt.warn("Skip getYoutubeLinksFromConfig, cause %O", n), Ve({
                            category: "links",
                            subcategory: "101",
                            event: "fail"
                        }), r.getYoutubeLinks(e, t))));
                    }));
                })), !0;
            }
            getYoutubeLinksFromConfigIos(e, t) {
                var r = this;
                return fe((() => {
                    var n = e.config, o = n.args.video_id;
                    if (!n || !n.args) throw new Error("jsonList args is not found!");
                    return fetch("https://www.youtube.com/youtubei/v1/player?key=AIzaSyB-63vPrdThhKuerbB2N_l7Kwwcxj6yUAc&prettyPrint=false", {
                        body: `{"context": {"client": {"clientName": "IOS", "clientVersion": "19.09.3", "deviceModel": "iPhone14,3", "hl": "en", "timeZone": "UTC", "utcOffsetMinutes": 0}}, "videoId": "${o}", "params": "CgIQBg==", "playbackContext": {"contentPlaybackContext": {"html5Preference": "HTML5_PREF_WANTS"}}, "contentCheckOk": true, "racyCheckOk": true}`,
                        headers: {
                            "Content-Type": "application/json",
                            "X-Youtube-Client-Name": "5",
                            "X-Youtube-Client-Version": "19.09.3",
                            "User-Agent": "com.google.ios.youtube/19.09.3 (iPhone14,3; U; CPU iOS 15_6 like Mac OS X)"
                        },
                        method: "POST"
                    }).then((e => {
                        if (403 === e.status) throw new Error("Forbidden");
                        return e.json();
                    })).then((n => {
                        if (n && n.playabilityStatus && "LOGIN_REQUIRED" === n.playabilityStatus.status) throw new Error("LOGIN_REQUIRED");
                        var o = {
                            player_response: n
                        };
                        return r.onGetConfig(e.extVideoId, e.checkSubtitles, e.noDash, o, null).then((n => {
                            Ve({
                                category: "links",
                                subcategory: "101",
                                event: "main"
                            });
                            var o = n.title, i = n.links;
                            i && r.addProLinks(i, e.extVideoId), i && r.addTelevzrLinks(i, e.extVideoId), r.addMuxerLinks(i, o), 
                            t({
                                links: i,
                                title: o
                            });
                        }));
                    })).catch((o => {
                        var i = n.args, s = n.playerUrl;
                        return this.ytMetadata.getInfoFromVideoInfo(i, s).then((n => {
                            var o = n.videoInfo, i = n.signature;
                            return r.onGetConfig(e.extVideoId, e.checkSubtitles, e.noDash, o, i).then((n => {
                                Ve({
                                    category: "links",
                                    subcategory: "101",
                                    event: "fallback"
                                });
                                var o = n.links, i = n.title;
                                o && r.addProLinks(o, e.extVideoId), o && r.addTelevzrLinks(o, e.extVideoId), r.addMuxerLinks(o, i), 
                                t({
                                    links: o,
                                    title: i,
                                    multiLang: o.multiLang
                                });
                            }));
                        })).catch((n => (pt.warn("Skip getYoutubeLinksFromConfig, cause %O", n), Ve({
                            category: "links",
                            subcategory: "101",
                            event: "fail"
                        }), r.getYoutubeLinks(e, t))));
                    }));
                })), !0;
            }
        };
        const vt = function(e, t) {
            t && !Array.isArray(t) && (t = [ t ]);
            var r = [], n = -1, o = -1;
            do {
                if (-1 !== (o = e.indexOf('"', o + 1))) {
                    if ("\\" === e[o - 1]) continue;
                    -1 !== n ? (r.push(e.substr(n, o + 1 - n)), n = -1) : n = o;
                } else n = o;
            } while (-1 !== o);
            for (var i, s = [], a = function(e) {
                if ('""' === e) return 1;
                try {
                    t ? t.every((function(t) {
                        return t.test(e);
                    })) && s.push(JSON.parse(e)) : s.push(JSON.parse(e));
                } catch (e) {}
            }, c = 0; i = r[c]; c++) a(i);
            return s;
        };
        const bt = function(e, t, r) {
            r = r || [], Array.isArray(r) || (r = [ r ]);
            for (var n = [], o = new RegExp("(<" + e + "[^>]*>)", "i"), i = new RegExp("(</" + e + ">)", "i"), s = null, a = "", c = "", u = "", l = -1; (s = o.exec(t)) && (a = s[1], 
            -1 !== (l = t.indexOf(a))); ) t = t.substr(l + a.length), (s = i.exec(t)) && (c = s[1], 
            u = t.substr(0, t.indexOf(c)), n.push(a + u + c));
            return n.filter((function(e) {
                return r.every((function(t) {
                    return t.test(e);
                }));
            }));
        };
        const wt = function(e, t) {
            var r = (new DOMParser).parseFromString("<html><body>" + e + "</body></html>", "text/html");
            if (t) {
                var n = r.head.querySelector("base");
                n || ((n = r.createElement("base")).href = t, r.head.appendChild(n));
            }
            return r;
        };
        const kt = class {
            constructor(e) {
                this.engine = e;
            }
            getVKLinks(e, t) {
                var r = this;
                return this._getVKLinks(e.extVideoId, ((n, o, i, s, a, c, u) => {
                    if (u) return u.origRequest = e, void r.engine.onMessage(u, {}, t);
                    var l = {
                        action: e.action,
                        extVideoId: n || e.extVideoId,
                        links: o,
                        title: i,
                        duration: s,
                        thumb: a,
                        data: c,
                        checkLinks: null
                    };
                    e.checkLinks && o && o.length > 0 ? this.checkVkLinks(o, (function(e, r) {
                        l.checkLinks = r, t(l);
                    })) : t(l);
                })), !0;
            }
            preparePladformLinks(e) {
                var t, r = {
                    links: t = []
                };
                return e.forEach((function(e) {
                    r.title = e.title, r.duration = e.duration, r.thumb = e.cover;
                    var n = e.url.match(/[\w]+\.(mp4|flv)(?:\?|$)/i);
                    n = n ? n[1] : "flv", t.push({
                        url: e.url,
                        name: n.toUpperCase(),
                        subname: e.quality.toUpperCase(),
                        type: n.toLowerCase()
                    });
                })), r;
            }
            _getVKLinks(e, t) {
                var r = this, n = [], o = e, i = null, s = null, a = "", c = "", u = e, l = null, p = null, f = null, h = /^video(-?\d+)_(\d+)/i;
                if (h.test(u)) l = u.match(h), p = parseInt(l[1]), f = parseInt(l[2]); else {
                    l = u.match(/(?:^|&)oid=(-?\d+)/i), p = l && parseInt(l[1]), l = u.match(/(?:^|&)id=(-?\d+)/i), 
                    f = l && parseInt(l[1]), u = "", p && f && (u = "video" + p + "_" + f);
                }
                return u ? (o = u, _({
                    url: "https://vk.com/" + u
                }, ((e, l, h) => {
                    if (e || !h) return t(u, n, o, c, a, i, s);
                    var d = null;
                    if (q(h, [ /"vid":/, /"oid":/, /"md_title":/ ]).some((function(e) {
                        var t = e && e[4] && e[4].player && e[4].player.params && e[4].player.params[0];
                        if (t && t.vid === f && t.oid === p) return d = t, !0;
                    })), d) {
                        var m = this.getVkLinksFromJson(d);
                        if (n = m.links, o = m.title, a = m.thumb, c = m.duration, n.length) return t(u, n, o, c, a, d, s);
                    }
                    var y = null;
                    q(h, [ /"player"/ ]).some((function(e) {
                        var t = e && e[4] && e[4].player && e[4].player.params && e[4].player.params[0];
                        if ("string" == typeof t) return y = t, !0;
                    }));
                    var g, v = !1;
                    y && ((g = /dailymotion.com\/(?:swf\/)?video\/([\w\d]+)/i.exec(y)) && (s = {
                        action: "getDailymotionLinks",
                        extVideoId: g[1]
                    }, v = !0));
                    if (v) return t(u, n, o, c, a, i, s);
                    var b = !1;
                    return vt(h, /video_box_wrap/).some((e => {
                        var l = null, p = /<iframe([^>]+)>/i.exec(e);
                        if (p) {
                            var f = p[1];
                            if (l = /youtube.com\\?\/embed\\?\/([\w\-]+)/i.exec(f)) return s = {
                                action: "getYoutubeLinks",
                                extVideoId: l[1]
                            }, !0;
                            if (l = /vimeo.com\\?\/video\\?\/(\d+)/i.exec(f)) return s = {
                                action: "getVimeoLinks",
                                extVideoId: l[1]
                            }, !0;
                            if (l = /src="([^"]*pladform\.ru[^"]+)"/i.exec(f)) {
                                b = !0;
                                var d = te(l[1]);
                                return r.engine.modules.odnoklassniki.getPladformVideo({
                                    extVideoId: {
                                        playerId: d.pl,
                                        videoId: d.videoid
                                    }
                                }, (e => {
                                    e && "getRutubeLinks" === e.action && (e.links = null);
                                    var r = e && e.links;
                                    if (!Array.isArray(r)) return t(u, n, o, c, a, i, s);
                                    var l = this.preparePladformLinks(r);
                                    return t(u, l.links, l.title, l.duration, l.thumb, i, s);
                                })), !0;
                            }
                        }
                        var m = bt("video", e).some((function(e) {
                            var t = wt(e, "https://vk.com/"), r = !1;
                            return [].slice.call(t.querySelectorAll("source")).forEach((function(e) {
                                var t = !1, i = e.src;
                                t || /^(.*cdninstagram\.com.+mp4)/i.exec(i) && (t = !0, r = !0, n.push({
                                    url: i,
                                    subname: "SD",
                                    name: "MP4",
                                    type: "mp4"
                                }));
                                if (!t) {
                                    var s = /\.(\d+)\.mp4(?:$|\?)/.exec(i);
                                    if (s) {
                                        t = !0, r = !0;
                                        var a = i, c = s[1], u = a.indexOf("?");
                                        -1 !== u && (a = a.substr(0, u)), vt(h, /mv_title/).some((function(e) {
                                            var t = /id="mv_title"[^>]*>([^<]+)/.exec(e);
                                            if (t) return o = ie.decodeSpecialChars(oe(t[1])), !0;
                                        })), n.push({
                                            url: a,
                                            subname: c,
                                            name: "MP4",
                                            type: "mp4"
                                        });
                                    }
                                }
                            })), r;
                        }));
                        return !!m || (/var\sopts\s*=\s*/.test(e) && (l = /url:\s*'(?:[^']+)dailymotion.com\/(?:swf\/)?video\/([\w\d]+)/.exec(e)) ? (s = {
                            action: "getDailymotionLinks",
                            extVideoId: l[1]
                        }, !0) : void 0);
                    })), !b && t(u, n, o, c, a, i, s);
                }))) : t(u, n, o);
            }
            checkVkLinks(e, t) {
                var r = "";
                e && e.length > 0 && (r = "mp4" == e[0].type ? e[0].url : e.length > 1 ? e[1].url : e[0].url), 
                r ? _({
                    url: r,
                    type: "HEAD"
                }, (function(e, n) {
                    t(r, !e);
                })) : t();
            }
            getVkLinksFromJsonMsg(e, t) {
                return t(this.getVkLinksFromJson(e.json));
            }
            getVkLinksFromJson(e) {
                var t = [], r = e.vid, n = e.md_title || e.vid, o = "";
                e.thumb ? o = e.thumb : e.jpg && (o = e.jpg);
                var i = /\.flv(\?|$)]/, s = /url([0-9]+)/;
                Object.keys(e).forEach((function(r) {
                    var n = "", o = "mp4", a = null;
                    "extra_data" === r && "99" === e.extra ? (n = "", e.live_mp4 ? n = e.live_mp4 : e.postlive_mp4 && (n = e.postlive_mp4), 
                    n && (a = e.hd ? "HD" : "SD", t.push({
                        url: n,
                        subname: a,
                        name: o.toUpperCase(),
                        type: o
                    }))) : "extra_data" === r && "52" === e.extra ? (a = e.hd ? "HD" : "SD", n = e.extra_data, 
                    i.test(n) && (o = "flv"), t.push({
                        url: n,
                        subname: a,
                        name: o.toUpperCase(),
                        type: o
                    })) : null !== (a = (a = r.match(s)) && a[1]) && (n = e[r], i.test(n) && (o = "flv"), 
                    t.push({
                        url: n,
                        subname: a,
                        name: o.toUpperCase(),
                        type: o
                    }));
                }));
                var a = e.duration;
                return {
                    action: "getVKLinks",
                    extVideoId: r,
                    links: t,
                    title: n,
                    duration: a,
                    thumb: o,
                    data: e,
                    checkLinks: null
                };
            }
            getVkLinksFromData(e, t) {
                var r = e.data, n = null;
                return q(r, [ /"vid":/, /"oid":/, /"md_title":/ ]).some((function(e) {
                    if (e = e.player && e.player.params && e.player.params[0]) return n = e, !0;
                })), n ? t(this.getVkLinksFromJson(n)) : t();
            }
            downloadVkStory(e) {
                var t = this;
                return n(i().mark((function r() {
                    var n, o, s, a, c;
                    return i().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = e.downloadFileUrl, o = e.filename, r.next = 3, fetch(n, {
                                headers: {
                                    "User-Agent": "curl/7.64.1"
                                }
                            });

                          case 3:
                            return s = r.sent, r.next = 6, s.blob();

                          case 6:
                            a = r.sent, c = URL.createObjectURL(a), t.engine.utils.downloadFile({
                                options: {
                                    filename: o,
                                    url: c
                                }
                            });

                          case 9:
                          case "end":
                            return r.stop();
                        }
                    }), r);
                })))();
            }
        };
        var xt = r(2894);
        const Ct = class {
            constructor(e) {
                this.engine = e;
            }
            getOkVideoUrlFromMobile(e) {
                return n(i().mark((function t() {
                    var r, n, o, s, a, c, u;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = e.videoUrl, n = e.videoId, r = r.replace("/ok.ru", "/m.ok.ru"), t.next = 4, 
                            z(r);

                          case 4:
                            if (o = t.sent, s = o.body, a = s.match(/data-video=".*?"/g), Array.isArray(a)) {
                                t.next = 9;
                                break;
                            }
                            return t.abrupt("return");

                          case 9:
                            return c = a.map((e => {
                                try {
                                    var t = e.replace(/data-video="(.*?)"/, "$1").replace(/&quot;/g, '"');
                                    return JSON.parse(t);
                                } catch (e) {
                                    return !1;
                                }
                            })).filter(Boolean), u = c.find((e => parseInt(e.movieId) === parseInt(n))), t.abrupt("return", u && u.videoSrc);

                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })))();
            }
            getOdnoklassnikiLinks(e, t) {
                return this._getOdnoklassnikiLinks(e.extVideoId, (function(r) {
                    var n = {
                        action: e.action,
                        extVideoId: e.extVideoId,
                        links: r,
                        title: e.title
                    };
                    t(n);
                })), !0;
            }
            getOdnoklassnikiAudioLinks(e, t) {
                return this._getOdnoklassnikiAudioLinks(e.url, e.trackId, e.jsessionId, (function(r) {
                    var n = {
                        action: e.action,
                        trackId: e.trackId,
                        jsessionId: e.jsessionId,
                        data: r
                    };
                    t(n);
                })), !0;
            }
            _getOdnoklassnikiLinks(e, t) {
                e ? _({
                    url: "http://in.video.mail.ru/cgi-bin/video/oklite?eid=" + e
                }, (function(r, n, o) {
                    if (r || !o) return t(null);
                    var i = "http://www.okcontent.video.mail.ru/media/", s = o.match(/\$vcontentHost=([^\s"'<>]+)/i);
                    s && s.length > 1 && (i = "http://" + s[1] + "/media/"), i += e;
                    var a = [], c = "", u = o.match(/\$height=([0-9]+)/);
                    u && u.length > 1 && (c = u[1]), a.push({
                        url: i + "-v.mp4",
                        name: "SD",
                        ext: "FLV",
                        subname: c
                    }), o.search(/\$HDexist=1/i) > -1 && (c = "", (u = o.match(/\$HDheight=([0-9]+)/)) && u.length > 1 && (c = u[1]), 
                    a.push({
                        url: i + "-hv.mp4",
                        name: "HD",
                        ext: "MP4",
                        subname: c
                    })), a && t(a);
                })) : t(null);
            }
            _getOdnoklassnikiAudioLinks(e, t, r, n) {
                if (!t || !r) return n(null);
                _({
                    url: "http://wmf1.ok.ru/play;jsessionid=" + r + "?tid=" + t,
                    json: !0
                }, (function(e, t, r) {
                    if (e || !r) return n(null);
                    n(r);
                }));
            }
            getOkAudioListLinks(e, t) {
                var r = [], n = e.trackIdArr, o = e.jsessionId;
                if (!Array.isArray(n) || "string" != typeof o || !n.length) return t(r);
                for (var i, s = n.length, a = 0, c = function(e) {
                    e && r.push(e), function() {
                        if (++a === s) t(r);
                    }();
                }, u = 0; i = n[u]; u++) this._getOdnoklassnikiAudioLinks(void 0, i, o, c);
                return !0;
            }
            getClipyouLinks(e, t, r, n, o) {
                _({
                    url: "http://media.clipyou.ru/api/player/secure_link?record_id=" + e + "&type=mp4&resource_hash=" + t,
                    json: !0
                }, (function(e, t, i) {
                    if (e || !i || !Array.isArray(i.data) || !i.data.length) return o();
                    var s = [];
                    i.data.forEach((function(e) {
                        s.push({
                            quality: r,
                            url: e,
                            title: n
                        });
                    })), o(s);
                }));
            }
            getClipyouHash(e, t) {
                _({
                    url: "http://media.clipyou.ru/api/player_data.json?id=" + e
                }, (function(e, r, n) {
                    if (e || !n) return t();
                    if (!(n = n.match('resource_hash".?:.?"([^"]*)"')) || n.length < 2) return t();
                    var o = n[1];
                    t(o);
                }));
            }
            getPladformVideo(e, t) {
                var r = {
                    action: e.action,
                    extVideoId: e.extVideoId,
                    links: [],
                    title: e.title
                }, n = function() {
                    t(r);
                }, o = e.extVideoId.playerId, i = e.extVideoId.videoId;
                return _({
                    url: "http://out.pladform.ru/getVideo?pl=" + o + "&videoid=" + i,
                    xml: !0
                }, ((e, t, o) => {
                    if (e || !o) return n();
                    var i = o.querySelectorAll("src");
                    if (0 === i.length) return n();
                    var s = o.querySelector("cover") || void 0;
                    s && (s = s.textContent) && "//" === s.substr(0, 2) && (s = "http:" + s);
                    var a = o.querySelector("time") || void 0;
                    a = a && a.textContent;
                    var c = o.querySelector("title");
                    (c = c && c.textContent) && (r.title = c);
                    var u = i[0], l = u.getAttribute("type"), p = u.textContent || "", f = u.getAttribute("quality");
                    if (u) {
                        if ("clipyou" === l) return this.getClipyouHash(p, (e => {
                            if (!e) return n();
                            this.getClipyouLinks(p, e, f, c, (function(e) {
                                r.links = e, n();
                            }));
                        }));
                        if ("rutube" === l) {
                            var h = o.querySelector("external_embed");
                            return (h = h && h.textContent) && (r.action = "getRutubeLinks", r.links = [ h ]), 
                            n();
                        }
                    }
                    for (var d, m = [ "ld", "sd" ], y = [ "360", "720" ], g = 0; d = i[g]; g++) {
                        p = d.textContent || "", f = d.getAttribute("quality"), /^\d+p$/.test(f) && (f = f.match(/^(\d+)p$/)[1]);
                        var v = m.indexOf(f);
                        -1 !== v && (f = y[v]), "video" === (l = d.getAttribute("type")) && r.links.push({
                            url: p,
                            quality: f,
                            title: c,
                            cover: s,
                            duration: a
                        });
                    }
                    return n();
                })), !0;
            }
            getOkMetadata(e, t) {
                var r = e.url;
                return r ? (_({
                    method: "POST",
                    url: r,
                    json: !0
                }, (function(e, r, n) {
                    if (e || !n) return t();
                    t(n);
                })), !0) : t();
            }
            getOkViaMobile(e, t) {
                var r = e.metadata, n = {
                    "st.cmd": "movieLayer",
                    "st.mvId": e.mvId
                }, o = "http://m.ok.ru/dk?" + xt.stringify(n), i = {
                    action: e.action,
                    links: null,
                    title: r.movie.title
                };
                return _({
                    url: o
                }, (function(n, o, s) {
                    if (n || !s) return t();
                    var a = new RegExp('href="([^"]+st\\.cmd=moviePlaybackRedirect[^"]+st\\.mvid=' + e.mvId + '[^"]+)"'), c = s.match(a);
                    if (!(c = c && c[1])) return t();
                    if (c = ie.decodeSpecialChars(c), i.links = [ {
                        url: c
                    } ], !/st.mq=\d+/.test(c)) return t(i);
                    var u = r.videos;
                    if (!u || !u.length) return t(i);
                    u.forEach((function(e) {
                        if (e.url) {
                            var t = te(e.url);
                            t.type && (e.url = c.replace(/(st.mq=)\d+/, "$1" + t.type));
                        }
                    })), i.links = u, t(i);
                })), !0;
            }
            okDirectOrMobile(e, t) {
                var r = e.metadata, n = null;
                r.videos && r.videos.some((function(e) {
                    if (e.url) return n = e.url, !0;
                }));
                var o = () => {
                    e.action = "getOkViaMobile", this.getOkViaMobile(e, t);
                };
                return n ? (_({
                    url: n,
                    type: "HEAD"
                }, (function(n) {
                    return n ? o() : (e.action = "getOkViaMobileNoWrap", e.links = r.videos, t(e));
                })), !0) : (o(), !0);
            }
            okRequestVideoPage(e) {
                var t = e.videoId;
                return z({
                    url: `https://ok.ru/video/${t}`,
                    headers: {
                        "user-agent": ee()
                    }
                }).then((e => e.body));
            }
        };
        const St = class {
            constructor(e) {
                this.engine = e;
            }
            getFacebookLinks(e, t) {
                return this._getFacebookLinks(e.extVideoId, (function(r, n, o, i) {
                    var s = {
                        action: e.action,
                        extVideoId: e.extVideoId,
                        links: r || null,
                        title: n || "",
                        thumb: o || "",
                        duration: i || ""
                    };
                    t(s);
                })), !0;
            }
            getFacebookLinksFromData(e, t) {
                var r = e.data, n = e.extVideoId;
                return this.getLinksFromData2(r, n, !0, (function(r, n, o, i) {
                    var s = {
                        action: "getFacebookLinksFromData",
                        extVideoId: e.extVideoId,
                        links: r || null,
                        title: n || "",
                        thumb: o || "",
                        duration: i || ""
                    };
                    t(s);
                }));
            }
            _getFacebookLinks(e, t) {
                _({
                    type: "GET",
                    url: "https://www.facebook.com/video.php?v=" + e,
                    headers: {
                        Cookie: ""
                    }
                }, ((r, n, o) => {
                    if (r || !o) return t();
                    this.getLinksFromData(o, e, t);
                }));
            }
            getLinksFromData(e, t, r) {
                var n = e.match(/\["params","([^"]*)"\]/im);
                if (!n) return this.getLinksFromData2(e, t, !1, r);
                var o = null;
                try {
                    if ((o = JSON.parse(decodeURIComponent(JSON.parse('"' + n[1] + '"'))).video_data).progressive && (o = o.progressive), 
                    !o) return r();
                } catch (e) {
                    return r();
                }
                var i = null, s = null, a = [], c = {
                    sd_src: "SD",
                    hd_src: "HD"
                };
                Array.isArray(o) || (o = [ o ]);
                for (var u, l = 0; u = o[l]; l++) [ "sd_src", "hd_src" ].forEach((e => {
                    if (u.thumbnail_src && (i = u.thumbnail_src), u.video_duration && (s = u.video_duration), 
                    u[e]) {
                        var t = this.getFileExtension(u[e], "mp4");
                        a.push({
                            url: u[e],
                            name: c[e],
                            type: t,
                            ext: t.toUpperCase()
                        });
                    }
                }));
                r(a, "", i, s);
            }
            getLinksFromData2(e, t, r, n) {
                var o = null, i = function(e) {
                    return e.split(/"?videoData"?:\[/).some((function(e) {
                        return re(e).some((function(e) {
                            if ((e.sd_src || e.hd_src) && String(e.video_id) === String(t)) return o = e, !0;
                        }));
                    }));
                };
                if (r ? i(e) : M(e, [ /"?videoData"?:\[/ ]).some(i), !o) return n();
                var s, a = [];
                return o.sd_src && (s = this.getFileExtension(o.sd_src, "mp4"), a.push({
                    url: o.sd_src,
                    name: "SD",
                    type: s,
                    ext: s.toUpperCase()
                })), o.hd_src && (s = this.getFileExtension(o.hd_src, "mp4"), a.push({
                    url: o.hd_src,
                    name: "HD",
                    type: s,
                    ext: s.toUpperCase()
                })), n(a, "", o.thumbnail_src, o.video_duration);
            }
            getFileExtension(e, t) {
                var r = e.match(/\.([a-z0-9]{3,4})(\?|$)/i);
                return r ? (r = r[1]).toLowerCase() : t || "";
            }
            getFacebookPhotoUrl(e, t) {
                return e.fbid ? (_({
                    url: "https://www.facebook.com/photo.php?fbid=" + e.fbid
                }, (function(e, r, n) {
                    if (e || !n) return t();
                    if (i = n.match(/<a[^>]+fbPhotosPhotoActionsItem[^>]+href="([^">]+dl=1)"[^>]+>/i)) {
                        var o = i[1].replace(/&amp;/g, "&");
                        return t([ o ]);
                    }
                    var i, s = [], a = {};
                    return (i = n.match(/(<a[^>]+rel="theater"[^>]+>)/gi)) && i.forEach((function(e) {
                        var t = e.match(/data-pl[os]i="[^"]+"/gi);
                        t && t.forEach((function(e) {
                            var t = e.indexOf("=");
                            if (-1 !== t) {
                                var r = e.substr(0, t), n = e.substr(t + 1);
                                n = n.substr(1, n.length - 2).replace(/&amp;/g, "&"), a[r] = n, s.push(n);
                            }
                        }));
                    })), a["data-ploi"] ? t([ a["data-ploi"] ]) : t(s);
                })), !0) : t();
            }
        };
        const Ot = class {
            constructor(e) {
                this.engine = e;
            }
            ffInstagramDownloadMedia(e) {
                var t = this;
                return n(i().mark((function r() {
                    var n, o, s, a, c;
                    return i().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = e.downloadFileUrl, o = e.filename, r.next = 3, fetch(n, {
                                headers: {
                                    "User-Agent": "curl/7.64.1"
                                }
                            });

                          case 3:
                            return s = r.sent, r.next = 6, s.blob();

                          case 6:
                            a = r.sent, c = URL.createObjectURL(a), t.engine.utils.downloadFile({
                                options: {
                                    filename: o,
                                    url: c
                                }
                            });

                          case 9:
                          case "end":
                            return r.stop();
                        }
                    }), r);
                })))();
            }
        };
        function At(e, t) {
            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Et(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Et(e, t);
                }(e)) || t && e && "number" == typeof e.length) {
                    r && (e = r);
                    var n = 0, o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return n >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[n++]
                            };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, s = !0, a = !1;
            return {
                s: function() {
                    r = r.call(e);
                },
                n: function() {
                    var e = r.next();
                    return s = e.done, e;
                },
                e: function(e) {
                    a = !0, i = e;
                },
                f: function() {
                    try {
                        s || null == r.return || r.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function Et(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        }
        function Lt() {
            Lt = function(e, t) {
                return new r(e, void 0, t);
            };
            var e = RegExp.prototype, t = new WeakMap;
            function r(e, n, o) {
                var i = RegExp(e, n);
                return t.set(i, o || t.get(e)), $(i, r.prototype);
            }
            function n(e, r) {
                var n = t.get(r);
                return Object.keys(n).reduce((function(t, r) {
                    var o = n[r];
                    if ("number" == typeof o) t[r] = e[o]; else {
                        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length; ) i++;
                        t[r] = e[o[i]];
                    }
                    return t;
                }), Object.create(null));
            }
            return H(r, RegExp), r.prototype.exec = function(t) {
                var r = e.exec.call(this, t);
                if (r) {
                    r.groups = n(r, this);
                    var o = r.indices;
                    o && (o.groups = n(o, this));
                }
                return r;
            }, r.prototype[Symbol.replace] = function(r, o) {
                if ("string" == typeof o) {
                    var i = t.get(this);
                    return e[Symbol.replace].call(this, r, o.replace(/\$<([^>]+)>/g, (function(e, t) {
                        var r = i[t];
                        return "$" + (Array.isArray(r) ? r.join("$") : r);
                    })));
                }
                if ("function" == typeof o) {
                    var s = this;
                    return e[Symbol.replace].call(this, r, (function() {
                        var e = arguments;
                        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(n(e, s)), 
                        o.apply(this, e);
                    }));
                }
                return e[Symbol.replace].call(this, r, o);
            }, Lt.apply(this, arguments);
        }
        class Tt {
            constructor(e) {
                var t = Y(e, Lt(/#EXTINF:[\s\S]*?,\n([\s\S]*?)$/gm, {
                    url: 1
                }));
                this.urls = [];
                var r, n = At(t);
                try {
                    for (n.s(); !(r = n.n()).done; ) {
                        var o = r.value;
                        o.groups && o.groups.url ? this.urls.push(o.groups.url) : o[1] && this.urls.push(o[1]);
                    }
                } catch (e) {
                    n.e(e);
                } finally {
                    n.f();
                }
            }
            static createFromURL(e) {
                return z(e).then((e => new Tt(e.body)));
            }
            changeURLs(e) {
                this.urls = this.urls.map(e);
            }
            _downloadTask(e) {
                return fetch(e).then((e => {
                    if (e.ok) return e.blob();
                    throw new Error("bad response");
                }));
            }
            download() {
                var e = this.urls.map((e => this._downloadTask(e)));
                return Promise.all(e).then((e => {
                    var t = new Blob(e, {
                        type: e[0].type
                    });
                    return URL.createObjectURL(t);
                }));
            }
            fetchMimeType() {
                return fetch(this.urls[0], {
                    method: "head"
                }).then((e => e.headers.get("Content-Type")));
            }
            _emit(e, t) {
                var r = new CustomEvent("hlsDownloader." + e, {
                    detail: t
                });
                document.dispatchEvent(r);
            }
        }
        const It = Tt;
        var Pt = r(2894), Ft = u("soundcloud_com_embed");
        var _t = u("match_tv_embed");
        const jt = class {
            constructor(e) {
                this.engine = e;
            }
            getMailruLinks(e, t) {
                return this._getMailruLinks(e.extVideoId, (function(r, n, o, i, s) {
                    var a = {
                        action: e.action,
                        extVideoId: i || e.extVideoId,
                        links: r,
                        title: n,
                        thumb: o,
                        duration: s
                    };
                    t(a);
                })), !0;
            }
            _getMailruLinks(e, t) {
                var r, n = e, o = e.match(/\/([^\/]+)\/([^\/]+)\/video\/(.+).html/);
                if (o || (o = e.match(/embed\/([^\/]+)\/([^\/]+)\/(.+).html/)), o && (r = "http://api.video.mail.ru/videos/" + o[1] + "/" + o[2] + "/" + o[3] + ".json", 
                n = o[1] + "/" + o[2] + "/video/" + o[3] + ".html"), r) return this.onGetMailruMetadataUrl(r, n, t);
                _({
                    url: "http://my.mail.ru/" + e
                }, ((e, o, i) => {
                    if (e || !i) return t();
                    var s = /"metaUrl":/, a = null;
                    if (M(i, s).some((function(e) {
                        return q(e, s).some((function(e) {
                            if (e.metaUrl) return a = e, !0;
                        }));
                    })), a) return r = a.metaUrl, void this.onGetMailruMetadataUrl(r, n, t);
                    if (!(i = i.match(/<meta\s+content="[^"]+(videoapi\.my\.mail[^&]+)&[^"]+"[^>]+\/>/))) return t();
                    var c = (i = decodeURIComponent(i[1])).substr(i.lastIndexOf("/") + 1);
                    r = "http://videoapi.my.mail.ru/videos/" + c + ".json", this.onGetMailruMetadataUrl(r, n, t);
                }));
            }
            onGetMailruMetadataUrl(e, t, r) {
                this.getMailruMetadata(e, (e => {
                    if (!e || "string" == typeof e) return r();
                    this.readMailruMetadata(e, ((e, n, o, i) => {
                        r(this.prepMailruLinks(e), n, o, t, i);
                    }));
                }));
            }
            prepMailruLinks(e) {
                if (e) {
                    for (var t, r = [], n = 0; t = e[n]; n++) {
                        var o = t.url, i = "FLV";
                        -1 !== o.indexOf(".mp4") && (i = "MP4"), -1 !== o.indexOf(".mov") && (i = "MOV"), 
                        -1 !== o.indexOf(".mpg") && (i = "MPG"), t.quality || (t.quality = "-?-");
                        var s = t.quality.toUpperCase(), a = [ "1080P", "720P", "480P", "360P", "272P" ].indexOf(s);
                        -1 !== a && (s = [ "1080", "720", "480", "360", "272" ][a]);
                        var c = i.toLowerCase();
                        r.push({
                            url: o,
                            subname: s,
                            name: i,
                            ext: c
                        });
                    }
                    return r.sort((function(e, t) {
                        return "HD" === e.subname ? 1 : e.subname > t.subname;
                    })), r;
                }
            }
            getMailruMetadata(e, t) {
                if (!e) return t();
                _({
                    url: e,
                    json: !0
                }, (function(e, r, n) {
                    if (e || !n) return t();
                    t(n);
                }));
            }
            readMailruMetadata(e, t) {
                var r, n = [], o = void 0, i = void 0;
                if (e.meta && (i = e.meta.poster, o = e.meta.duration), "UPLOADED" === e.provider) {
                    if (r = e.movie ? e.movie.title : void 0, !e.videos) return t();
                    e.videos.forEach((function(e) {
                        n.push({
                            quality: e.name,
                            url: e.url,
                            title: r
                        });
                    }));
                } else if ("ugc" === e.provider) {
                    if (r = e.meta ? e.meta.title : void 0, !e.videos) return t();
                    e.videos.forEach((function(e) {
                        n.push({
                            quality: e.key,
                            url: e.url,
                            title: r
                        });
                    }));
                } else if ("pladform" === e.provider) {
                    return r = e.meta ? e.meta.title : void 0, void this.engine.modules.odnoklassniki.getPladformVideo({
                        extVideoId: {
                            playerId: e.meta.playerId,
                            videoId: e.meta.videoId
                        }
                    }, (function(e) {
                        if (!e) return t();
                        "getRutubeLinks" === e.action && (e.links = null);
                        var n = e.links;
                        if (!n) return t();
                        n.forEach((function(e) {
                            void 0 === e.title && (e.title = r);
                        })), t(n, r, i, o);
                    }));
                }
                return 0 === n.length ? t() : t(n, r, i, o);
            }
        };
        function Rt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), r.push.apply(r, n);
            }
            return r;
        }
        function Ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Rt(Object(r), !0).forEach((function(t) {
                    E(e, t, r[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rt(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                }));
            }
            return e;
        }
        var Nt = (e, t, r) => `https://${e}/api/v2.1/handlers/track/${t}:${r}/web-home_new-chart-track-saved/download/m?hq=0&external-domain=music.yandex.ru&overembed=no&__t=${Date.now()}`, Dt = (e, t, r, n, o) => `https://${e}/get-mp3/${t}/${r}/${n}?track-id=${o}&play=false`;
        const Mt = class {
            constructor(e) {
                this.engine = e;
            }
            ffTiktokDownloadMedia(e) {
                var t = this;
                return n(i().mark((function r() {
                    var n, o, s, a, c;
                    return i().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = e.downloadFileUrl, o = e.filename, r.next = 3, fetch(n, {
                                headers: {
                                    "User-Agent": "curl/7.64.1"
                                }
                            });

                          case 3:
                            return s = r.sent, r.next = 6, s.blob();

                          case 6:
                            a = r.sent, c = URL.createObjectURL(a), t.engine.utils.downloadFile({
                                options: {
                                    filename: o,
                                    url: c
                                }
                            });

                          case 9:
                          case "end":
                            return r.stop();
                        }
                    }), r);
                })))();
            }
        };
        var qt = r(2834);
        const Bt = function(e) {
            if ("<all_urls>" === e) return "^https?:\\/\\/.+$";
            var t = e.match(/(\*|http|https|file|ftp):\/\/([^\/]+)(?:\/(.*))?/);
            if (!t) throw new Error("Invalid url-pattern");
            var r = t[1];
            "*" === r && (r = "https?");
            var n = t[2], o = [ "^", r, ":\\/\\/", n = "*" === n ? ".+" : (n = (n = qt(n)).replace(/^\\\*\\\./, "(?:[^/]+\\.)?")).replace(/\\\.\\\*$/g, "\\.[a-z\\.]{2,}") ], i = t[3];
            return i ? "*" === i ? (i = "(?:|/.*)", o.push(i), o.push("$")) : i && (i = (i = qt(i = "/" + i)).replace(/\\\*/g, ".*"), 
            o.push(i), o.push("$")) : o.push("$"), o.join("");
        };
        const Vt = () => window.top !== window.self;
        const $t = function(e, t) {
            var r = null;
            return function() {
                var n = this, o = arguments;
                clearTimeout(r), r = setTimeout((function() {
                    e.apply(n, o);
                }), t);
            };
        };
        const Ht = function(e, t) {
            var r = /:\/\/(?:[^\/?#]*@)?([^:\/?#]+)/.exec(e);
            return (r = r && r[1]) && t && (r = r.replace(/^www\./, "")), r;
        };
        const zt = function(e, t) {
            var r = /^[\d.]+$/;
            if (!r.test(e) || !r.test(t)) throw new Error("Incorrect version");
            for (var n = function(e, t) {
                for (;e.length < t; ) e = "0" + e;
                return e;
            }, o = e.split("."), i = t.split("."), s = 0; s < i.length; s++) {
                var a = o[s] || "", c = i[s] || "", u = Math.max(a.length, c.length);
                if (a = parseInt(n(a, u)), (c = parseInt(n(c, u))) !== a) return c > a;
            }
            return !1;
        };
        var Gt = {
            on: function(e, t, r, n) {
                e.addEventListener(t, r, n);
            },
            off: function(e, t, r, n) {
                e.removeEventListener(t, r, n);
            },
            one: function(e, t, r, n) {
                var o = [ "oneFn", t, !!n ].join("_"), i = r[o];
                i || (r[o] = i = function(e) {
                    Gt.off(this, t, i, n), r.apply(this, arguments);
                }), Gt.on(e, t, i, n), e = null;
            }
        }, Wt = "sf-removed-" + Math.floor(1e6 * Math.random()), Yt = "sf-notify-on-remove-" + Math.floor(1e6 * Math.random());
        Gt.onRemoveEventName = Wt, Gt.onRemoveClassName = Yt, Gt.onRemoveListener = function(e) {
            Gt.trigger(e, Wt, {
                cancelable: !0,
                bubbles: !1
            });
        }, Gt.onRemoveEvent = (e, t) => {
            e.classList.add(Yt), e.addEventListener(Wt, t);
        }, Gt.offRemoveEvent = function(e, t) {
            e.removeEventListener(Gt.onRemoveEventName, t);
        }, Gt.trigger = function(e, t, r) {
            void 0 === r && (r = {}), void 0 === r.bubbles && (r.bubbles = !1), void 0 === r.cancelable && (r.cancelable = !1);
            var n = null;
            n = "function" == typeof MouseEvent && -1 !== [ "click" ].indexOf(t) ? new MouseEvent(t, r) : new CustomEvent(t, r), 
            e.dispatchEvent(n);
        };
        const Jt = Gt;
        var Qt = {
            create: function(e, t) {
                var r, n;
                for (var o in r = "object" != typeof e ? document.createElement(e) : e, t) {
                    var i = t[o];
                    (n = Kt[o]) ? n(r, i) : r[o] = i;
                }
                return r;
            }
        }, Kt = {
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
                    var o = t[r];
                    if (Array.isArray(o)) for (var i = 0, s = o.length; i < s; i++) e.style[n] = o[i]; else e.style[n] = o;
                } else e.setAttribute("style", t);
            },
            append: function(e, t) {
                Array.isArray(t) || (t = [ t ]);
                for (var r = 0, n = t.length; r < n; r++) {
                    var o = t[r];
                    (o || 0 === o) && ("object" != typeof o && (o = document.createTextNode(o)), e.appendChild(o));
                }
            },
            on: function(e, t) {
                "object" != typeof t[0] && (t = [ t ]);
                for (var r = 0, n = t.length; r < n; r++) {
                    var o = t[r];
                    Array.isArray(o) && Jt.on.apply(Jt, [ e ].concat(o));
                }
            },
            one: function(e, t) {
                "object" != typeof t[0] && (t = [ t ]);
                for (var r = 0, n = t.length; r < n; r++) {
                    var o = t[r];
                    Array.isArray(o) && Jt.one.apply(Jt, [ e ].concat(o));
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
        const Xt = Qt;
        const Zt = {
            youtube: "moduleYoutube",
            dailymotion: "moduleDailymotion",
            vimeo: "moduleVimeo",
            facebook: "moduleFacebook",
            soundcloud: "moduleSoundcloud",
            vk: "moduleVkontakte",
            odnoklassniki: "moduleOdnoklassniki",
            mailru: "moduleMailru",
            instagram: "moduleInstagram",
            rutube: "moduleRutube",
            tiktok: "moduleTiktok",
            yandexMusic: "moduleYandexMusic",
            matchTv: "moduleMatchTv"
        };
        const er = e => t => e.some((e => ((e, t) => {
            var r = e.matches.test(t);
            return r && e.exclude_matches && (r = !e.exclude_matches.test(t)), r && e.include_globs && (r = e.include_globs.test(t)), 
            r && e.exclude_globs && (r = !e.exclude_globs.test(t)), r;
        })(e, t)));
        var tr = r(2894), rr = u("amplitude");
        const nr = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "bc3c8ed7b305f692ec048b0425b002df";
            return rr.debug("send", e), z({
                url: "https://api.amplitude.com/httpapi",
                method: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: tr.stringify({
                    api_key: t,
                    event: JSON.stringify(e)
                })
            }).catch((e => {
                rr.error("amplitude error", e);
            }));
        };
        const or = e => new Promise((t => S.storage.get(e, t)));
        const ir = () => or({
            country: null
        }).then((e => {
            if (null === e.country) return new Promise((e => {
                S.storage.onChanged.addListener((function t(r, n) {
                    "local" === n && r.country && (S.storage.onChanged.removeListener(t), e());
                }));
            }));
        }));
        class sr {
            constructor(e, t) {
                if (this.browser = e.toLowerCase(), !(t = "")) {
                    var r = navigator.language;
                    t = r.indexOf("-") ? r.split("-").shift() : r;
                }
                this.country = t.toLowerCase(), this.platform = navigator ? navigator.platform.toLowerCase() : null;
            }
            getLanguage() {
                return window.navigator.language;
            }
            getPlatform() {
                var e = window.navigator.userAgent, t = window.navigator.platform;
                return -1 !== [ "Macintosh", "MacIntel", "MacPPC", "Mac68K" ].indexOf(t) ? "Mac OS" : -1 !== [ "iPhone", "iPad", "iPod" ].indexOf(t) ? "iOS" : -1 !== [ "Win32", "Win64", "Windows", "WinCE" ].indexOf(t) ? "Windows" : /Android/.test(e) ? "Android" : /Linux/.test(t) ? "Linux" : void 0;
            }
        }
        function ar(e) {
            return window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1 ? "opera" : e.isGM ? "userjs" : e.isFirefox ? "firefox" : e.isChrome ? "chrome" : void 0;
        }
        const cr = e => new Promise((t => S.storage.set(e, t)));
        class ur {
            get(e) {
                return or(e);
            }
            first(e) {
                return or(e).then((t => t[e]));
            }
            set(e) {
                return cr(e);
            }
        }
        function lr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), r.push.apply(r, n);
            }
            return r;
        }
        function pr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? lr(Object(r), !0).forEach((function(t) {
                    E(e, t, r[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lr(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                }));
            }
            return e;
        }
        var fr = {
            enabled: !1,
            percent: 10,
            countries: [ "all" ],
            browsers: [ "all" ],
            languages: [ "all" ],
            platforms: [ "all" ]
        }, hr = [ "az", "am", "by", "kg", "kz", "md", "ru", "tj", "ua", "uz" ], dr = {
            presetOnlyCIS: e => hr.includes(e),
            presetNotAllowCIS: e => !hr.includes(e)
        };
        function mr(e, t) {
            var r, n = pr(pr({}, fr), e), o = n.browsers, i = void 0 === o ? [] : o, s = n.countries, a = void 0 === s ? [] : s, c = n.languages, u = void 0 === c ? [] : c, l = n.platforms, p = void 0 === l ? [] : l, f = n.percent, h = e => e.toLowerCase(), d = i.map(h).includes(t.browser) || i.includes("all");
            if (a.every((e => Object.keys(dr).includes(e)))) {
                var m = a[0];
                r = dr[m](t.country);
            } else r = a.map(h).includes(t.country) || a.includes("all");
            var y = u.map(h).find((e => -1 !== t.getLanguage().indexOf(e))) || u.includes("all"), g = p.map(h).includes(t.getPlatform().toLowerCase()) || p.includes("all");
            return !!(n.enabled && d && r && y && g) && function(e) {
                return 100 * Math.random() <= e;
            }(f);
        }
        var yr = u("experiments"), gr = {
            experiments: "experiments.main",
            config: "experiments.config"
        };
        class vr {
            constructor(e) {
                this.retryCount = 0, this.storage = new ur, this.config = {
                    payload: {},
                    lastUpdated: null
                }, this.user = void 0, this.user = e;
            }
            init() {
                var e = this;
                return n(i().mark((function t() {
                    var r;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, yr.info("ExperimentLoader init"), t.next = 4, e._initPayload();

                          case 4:
                            t.next = 13;
                            break;

                          case 12:
                            return t.abrupt("return", {});

                          case 13:
                            return t.next = 15, e.checkUpdate();

                          case 15:
                            if (!t.sent) {
                                t.next = 26;
                                break;
                            }
                            return yr.info("Experiments updating"), t.next = 20, e.requestRemoteConfig();

                          case 20:
                            return r = t.sent, e.config = {
                                payload: r,
                                lastUpdated: Date.now()
                            }, e.experiments = {}, Object.keys(e.config.payload).forEach((t => e.experiments[t] = e.refreshExperiment(t))), 
                            t.next = 26, e.storage.set({
                                [gr.config]: e.config,
                                [gr.experiments]: e.experiments
                            });

                          case 26:
                            return yr.info("list:", e.experiments, "config:", e.config), t.abrupt("return", e.experiments);

                          case 30:
                            t.prev = 30, t.t0 = t.catch(0), e.clearAll().then((() => e.retry())), yr.error(t.t0);

                          case 34:
                            return t.abrupt("return", {});

                          case 35:
                          case "end":
                            return t.stop();
                        }
                    }), t, null, [ [ 0, 30 ] ]);
                })))();
            }
            retry() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                this.retryCount >= e || (this.retryCount++, yr.info("Retry loader"), this.init());
            }
            _initPayload() {
                var e = this;
                return n(i().mark((function t() {
                    var r, n;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = Object.keys(gr).map((e => gr[e])), t.next = 3, e.storage.get(r);

                          case 3:
                            n = t.sent, e.experiments = n[gr.experiments] || {}, e.config = n[gr.config] || e.config;

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })))();
            }
            checkUpdate() {
                var e = this;
                return n(i().mark((function t() {
                    var r, n;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = e.config.lastUpdated + 216e5 < (new Date).getTime(), n = 0 === Object.keys(e.config.payload).length, 
                            t.abrupt("return", r || n);

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })))();
            }
            requestRemoteConfig() {
                var e = `https://sf-helper.com/static/helper-config/experiments.config.json?ts=${Date.now()}`;
                return z({
                    url: e,
                    json: !0
                }).then((e => e.body));
            }
            refreshExperiment(e) {
                var t = this.config.payload[e] || {};
                return t.name = e, {
                    name: e,
                    config: t,
                    allowed: mr(t, this.user),
                    payload: t.payload
                };
            }
            clearAll() {
                return this.storage.set({
                    [gr.config]: null,
                    [gr.experiments]: null
                });
            }
        }
        var br = u("ShareDistributor");
        class wr {
            constructor(e) {
                this.name = e, this.storage = new ur, this.storageKey = "share_distributor." + this.name;
            }
            onCreated(e) {}
            onUpdated(e) {}
            createShare(e) {
                var t = arguments, r = this;
                return n(i().mark((function n() {
                    var o, s, a, c, u, l;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return o = t.length > 1 && void 0 !== t[1] && t[1], n.next = 3, r.storage.first(r.storageKey);

                          case 3:
                            if (s = n.sent, a = !s || s.percent !== e, !o || !s || void 0 === s.isShared || a) {
                                n.next = 8;
                                break;
                            }
                            return br.debug(`${r.storageKey} from cache ${e}% : ${s.isShared}`), n.abrupt("return", s.isShared);

                          case 8:
                            if (c = r.getRandomInt(1, 100), u = c <= e, br.debug(`${r.storageKey} created ${e}% : ${u}`), 
                            !o) {
                                n.next = 17;
                                break;
                            }
                            return n.next = 14, r.storage.set({
                                [r.storageKey]: {
                                    isShared: u,
                                    percent: e
                                }
                            });

                          case 14:
                            l = {
                                name: r.name,
                                storageKey: r.storageKey,
                                isShared: u,
                                rndNumber: c,
                                percent: e,
                                toCache: o
                            }, s && s.percent !== e ? r.onUpdated(l) : r.onCreated(l);

                          case 17:
                            return n.abrupt("return", u);

                          case 18:
                          case "end":
                            return n.stop();
                        }
                    }), n);
                })))();
            }
            getRandomInt(e, t) {
                return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e;
            }
        }
        const kr = function(e) {
            e = e ? e + "_" : "";
            var t = Date.now();
            return e + Math.floor(1e12 * (t - Math.floor(t))).toString(36) + Math.floor(1e12 * Math.random()).toString(36);
        };
        var xr = 16e6, Cr = new Map;
        function Sr(e) {
            var t = kr(e);
            return Cr.set(t, {
                id: t,
                xhr: new XMLHttpRequest
            }), t;
        }
        function Or(e) {
            return new Promise((function(t, r) {
                var n = Cr.get(e.id), o = e.fetchOptions, i = n.xhr;
                for (var s in i.onload = () => {
                    t({
                        id: n.id,
                        numChunks: Math.ceil(i.response.byteLength / xr) || 1,
                        response: {
                            ok: i.status >= 200 && i.status < 300,
                            status: i.status,
                            statusText: i.statusText,
                            headers: Tr(i.getAllResponseHeaders() || ""),
                            url: i.responseURL
                        }
                    });
                }, i.onerror = i.ontimeout = () => {
                    r(new TypeError("Network request failed"));
                }, i.onabort = () => {
                    r(new DOMException("Aborted", "AbortError"));
                }, i.responseType = "arraybuffer", i.open(o.method || "GET", e.url, !0), o.headers) i.setRequestHeader(s, o.headers[s]);
                i.send();
            }));
        }
        function Ar(e) {
            return function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e99, n = 8192, o = [], i = Math.min(e.byteLength, t + r); t < i; t += n) o.push(String.fromCharCode.apply(null, new Uint8Array(e, t, Math.min(n, i - t))));
                return o.join("");
            }(Cr.get(e.id).xhr.response, e.chunkIndex * xr, xr);
        }
        function Er(e) {
            Array.from(Cr.keys()).filter((t => -1 !== t.indexOf(e))).map((e => Lr(e)));
        }
        function Lr(e) {
            var t = Cr.get(e);
            t && (t.xhr && t.xhr.abort(), Cr.delete(e));
        }
        function Tr(e) {
            var t = e.split(/\r?\n/), r = [];
            return t.forEach((e => {
                var t = e.indexOf(":");
                if (-1 !== t) {
                    var n = e.substr(0, t).trim(), o = e.substr(t + 1).trim();
                    r.push([ n, o ]);
                }
            })), r;
        }
        const Ir = e => new Promise((t => setTimeout(t, e)));
        var Pr = u("televzrRemoteFn"), Fr = "http://127.0.0.1:34138";
        const _r = function(e) {
            return {
                infoRequest: function() {
                    return z({
                        url: Fr + "/info",
                        json: !0,
                        timeout: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0
                    }).then((e => {
                        if (e.body.error) throw new Ue(e.body.error.message, e.body.error.code);
                        return e.body.result;
                    }));
                },
                openUrl: e => z({
                    url: Fr + "/open-url",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify({
                        url: e
                    }),
                    json: !0
                }).then((e => {
                    if (e.body.error) throw new Ue(e.body.error.message, e.body.error.code);
                    return e.body.result;
                })),
                startDownloadRequest: (e, t, r) => {
                    var n = {
                        url: Fr + "/download",
                        method: "POST",
                        json: !0,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify({
                            url: e,
                            type: t,
                            height: r
                        })
                    };
                    return z(n).then((e => {
                        var t = e.body.error;
                        if (t) throw new Ue(t.message, t.code);
                        return e.body.result;
                    }), (e => {
                        throw Pr.error("Download Request error", e), e;
                    }));
                },
                appAuth() {
                    return e.authService.getQuickCodeRequest().then((e => this.sendQuickCodeRequest(e))).then((() => Ir(1e3))).then((() => {
                        Pr.log("Televzr is authorized");
                    }));
                },
                sendQuickCodeRequest: e => z({
                    url: Fr + "/auth/quick-code",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    json: !0,
                    data: JSON.stringify({
                        code: e
                    })
                }).catch((e => {
                    throw Pr.error("sendQuickCodeRequest", e), e;
                }))
            };
        };
        var jr = r(6710), Rr = r.n(jr);
        u("retryFn");
        u("focusSwitcher");
        u("televzrBridge");
        var Ur = "code_not_authorized";
        var Nr;
        function Dr(e) {
            return cr({
                credentials: (t = {
                    access_token: e.accessToken,
                    refresh_token: e.refreshToken,
                    token_type: e.tokenType,
                    expiry_date: e.expires.getTime()
                }, btoa(encodeURIComponent(JSON.stringify(t))))
            });
            var t;
        }
        function Mr() {
            return or([ "credentials" ]).then((e => {
                if (!e || !e.credentials) throw new Ue("Credentials not found", Ur);
                return t = e.credentials, JSON.parse(decodeURIComponent(atob(t)));
                var t;
            }));
        }
        var qr = new Uint8Array(16);
        function Br() {
            if (!Nr && !(Nr = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return Nr(qr);
        }
        const Vr = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        const $r = function(e) {
            return "string" == typeof e && Vr.test(e);
        };
        for (var Hr = [], zr = 0; zr < 256; ++zr) Hr.push((zr + 256).toString(16).substr(1));
        const Gr = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = (Hr[e[t + 0]] + Hr[e[t + 1]] + Hr[e[t + 2]] + Hr[e[t + 3]] + "-" + Hr[e[t + 4]] + Hr[e[t + 5]] + "-" + Hr[e[t + 6]] + Hr[e[t + 7]] + "-" + Hr[e[t + 8]] + Hr[e[t + 9]] + "-" + Hr[e[t + 10]] + Hr[e[t + 11]] + Hr[e[t + 12]] + Hr[e[t + 13]] + Hr[e[t + 14]] + Hr[e[t + 15]]).toLowerCase();
            if (!$r(r)) throw TypeError("Stringified UUID is invalid");
            return r;
        };
        const Wr = function(e, t, r) {
            var n = (e = e || {}).random || (e.rng || Br)();
            if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
                r = r || 0;
                for (var o = 0; o < 16; ++o) t[r + o] = n[o];
                return t;
            }
            return Gr(n);
        };
        const Yr = e => new Promise((t => S.storage.remove(e, t)));
        const Jr = e => [ t => fe(e).then((() => t)), t => fe(e).then((() => {
            throw t;
        })) ];
        function Qr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), r.push.apply(r, n);
            }
            return r;
        }
        function Kr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Qr(Object(r), !0).forEach((function(t) {
                    E(e, t, r[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qr(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                }));
            }
            return e;
        }
        var Xr = r(2894), Zr = u("AuthService"), en = "https://oauth2.televzr.com";
        var tn = 1624376875e3, rn = [ "az", "be", "hy", "kk", "ky", "mo", "ru", "tj", "uz", "uk" ], nn = "helper_pro_force", on = "exp_helper_pro4", sn = u("helper-pro-exp");
        function an(e) {
            return cn.apply(this, arguments);
        }
        function cn() {
            return cn = n(i().mark((function e(t) {
                var r, n, o, s, a;
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", !1);

                      case 2:
                        return e.next = 4, or([ "userInfo" ]).then((e => e.userInfo && e.userInfo.isPremium));

                      case 4:
                        return r = e.sent, e.next = 7, or([ nn ]).then((e => e[nn]));

                      case 7:
                        if (n = e.sent, !r) {
                            e.next = 14;
                            break;
                        }
                        return sn.log("has account"), !n && cr({
                            [nn]: !0
                        }), e.abrupt("return", !0);

                      case 14:
                        if (!n) {
                            e.next = 17;
                            break;
                        }
                        return sn.log("flag helper force"), e.abrupt("return", !0);

                      case 17:
                        if (i = t.preferences.country, o = rn.includes(i), s = Date.now() > tn, sn.log("available country / exp is over date", o, s), 
                        !s && o) {
                            e.next = 22;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 22:
                        return (a = new wr(on)).onCreated = un(t), e.abrupt("return", a.createShare(25, !0));

                      case 25:
                      case "end":
                        return e.stop();
                    }
                    var i;
                }), e);
            }))), cn.apply(this, arguments);
        }
        function un(e) {
            var t = {
                t: "event",
                tid: "UA-181742122-2",
                ec: "helper_pro_share",
                el: "helper_pro_share",
                ea: null
            };
            return r => {
                var n = r.isShared ? "on" : "off";
                t.ea = "helper-pro-" + n, e.track(t);
            };
        }
        class ln extends Error {
            constructor(e) {
                super(`Response is not ok ${e.status} (${e.statusText})`), this.name = "ErrorFetchResponse", 
                void 0 !== e.url && (this.url = e.url), this.status = e.status;
            }
        }
        const pn = ln;
        var fn = [ "responseStatus", "responseOk", "responseType", "requestPrefix" ];
        const hn = (t, r) => {
            var n = r || {}, o = (n.responseStatus, n.responseOk, n.responseType), i = void 0 === o ? "text" : o, s = n.requestPrefix, a = void 0 === s ? "" : s, c = e(n, fn), u = null, l = () => u && u(), p = (e => S.callFn("createRequest", [ e ]))(a);
            p.then((e => {
                u = () => S.callFn("clearRequest", [ e ]);
            }));
            var f = p.then((e => S.callFn("sendRequest", [ {
                id: e,
                url: t,
                fetchOptions: c
            } ]))).then((e => {
                for (var t = e.id, r = e.numChunks, n = e.response, o = [], s = 0; s < r; s += 1) o.push(S.callFn("readRequestBodyChunk", [ {
                    id: t,
                    chunkIndex: s
                } ]));
                return Promise.all(o).then((e => function(e, t) {
                    var r = e.join("");
                    if ("json" === t) return JSON.parse(r);
                    if ("arrayBuffer" === t) {
                        for (var n = r.length, o = new Uint8Array(n), i = 0; i < n; i += 1) o[i] = r.charCodeAt(i);
                        return "blob" === t ? new Blob([ o ]) : o.buffer;
                    }
                    return r;
                }(e, i))).then((e => ({
                    response: n,
                    body: e
                })));
            })).then((e => (l(), e))).catch((e => {
                throw l(), e;
            }));
            return f.abort = () => l(), f;
        };
        var dn = r(3059);
        const mn = function(e, t) {
            var r = new dn({
                min: 1e3,
                max: 6e4,
                jitter: .5
            }), n = 0, o = () => e().catch((e => {
                if (++n < t) {
                    var i = r.duration();
                    return new Promise((e => setTimeout(e, i))).then(o);
                }
                throw e;
            }));
            return o();
        };
        const yn = class {
            constructor(e) {
                this.track = e, this.fetchData = hn, this.CONFIG_URL = "https://sf-helper.com/static/helper-config/clickunder_config.json", 
                this.evalString = null, this.options = {
                    sites: [],
                    clickunder: null,
                    sample: 0
                };
            }
            init() {
                return this.loadOptions().then((() => this.loadConfig().then((e => (this.options.sample || this.setOptions({
                    sample: parseInt(100 * Math.random(), 10)
                }), !(Number.isFinite(e.sample) && this.options.sample > e.sample) && (this.evalString = this.setEvalString(e), 
                !0))), (e => (console.error("Load config error: %O", e), !1))))).then((e => {
                    e && S.isGM && this.setRedirects();
                }));
            }
            setOptions(e) {
                Object.assign(this.options, e), S.storage.set({
                    clickunder: this.options
                });
            }
            loadOptions() {
                return new Promise((e => S.storage.get({
                    clickunder: null
                }, e))).then((e => {
                    Object.assign(this.options, e.clickunder);
                }));
            }
            loadConfig() {
                return fe((() => this.options.config && this.options.configExpireAt > se() ? this.options.config : mn((() => this.fetchData(this.CONFIG_URL, {
                    responseType: "json"
                })), 3).then((e => {
                    var t = e.body;
                    return this.setOptions({
                        config: t,
                        configExpireAt: se() + 864e5
                    }), t;
                })))).then((e => Object.assign({
                    sites: [],
                    clickunder: null,
                    sample: 0
                }, e)));
            }
            setRedirects() {
                "function" == typeof GM_evalFunction && (this.track({
                    t: "event",
                    ec: "cu",
                    el: this.options.sample,
                    ea: "activate",
                    tid: "UA-7055055-79"
                }), GM_evalFunction({
                    url: window.location.href
                }, this.evalString));
            }
            setEvalString(e) {
                var t = "";
                return e.sites.forEach((e => {
                    t += `"${e}", `;
                })), `\n        chrome.webRequest.onBeforeRequest.addListener((details) => {\n            const urls = [${t = t.slice(0, -2)}]\n            const isPopunder = urls.some(item => \n              {\n                const url = new URL(details.url);\n                const hostname = url.hostname;\n                return hostname.includes(item);\n              }\n            );\n            if ( isPopunder && details.url  !== "${e.clickunder}") {\n                return {redirectUrl: "${e.clickunder}"};\n            }\n        },\n        { \n            urls: ['<all_urls>'] \n        },\n            ['blocking']\n        );\n      `;
            }
        };
        var gn = [ "responseStatus", "responseOk", "responseType" ];
        const vn = (t, r) => {
            var n = r || {}, o = n.responseStatus, i = n.responseOk, s = void 0 === i || i, a = n.responseType, c = void 0 === a ? "text" : a, u = e(n, gn);
            return fetch(t, u).then((e => {
                if (s && !e.ok || o && o !== e.status) throw new pn(e);
                var t = {};
                [ "ok", "redirected", "status", "statusText", "type", "url" ].forEach((r => {
                    t[r] = e[r];
                }));
                var r = {};
                return e.headers.forEach(((e, t) => {
                    r[t] = e;
                })), t.headers = r, e[c]().then((e => ({
                    response: t,
                    body: e
                })));
            }));
        };
        var bn = 3600, wn = -1 != navigator.userAgent.indexOf("OPR");
        const kn = class {
            constructor(e) {
                this.handleMessage = (e, t) => {
                    switch (e.action) {
                      case "get":
                        var r = e.url, n = e.options, o = e.callbackId;
                        return this.track({
                            t: "event",
                            tid: "UA-7055055-79",
                            ec: "up",
                            ea: "request",
                            el: r
                        }), this.fetchData(r, n).then((e => ({
                            result: e
                        })), (e => ({
                            error: e
                        }))).then((e => {
                            this.socket.send({
                                action: "callback",
                                callbackId: o,
                                result: e
                            });
                        }));

                      case "sleep":
                        var i = e.delay;
                        this.goSleep(i);
                        break;

                      case "ping":
                        this.setOptions({
                            pingTs: se()
                        });
                    }
                }, this.handleReconnectFailed = () => {
                    var e = 300;
                    this.options.config && Number.isFinite(this.options.config.reconnectFailedSleepDelay) && (e = this.options.config.reconnectFailedSleepDelay), 
                    this.goSleep(e);
                }, this.storage = {
                    get: (e, t) => {
                        t(e);
                    },
                    set: (e, t) => {
                        t();
                    }
                }, this.track = e, this.fetchData = vn, this.getCountry = () => {}, this.CONFIG_URL = "https://sf-helper.com/static/up_ext_config.json", 
                this.version = "10.21", this.options = {
                    config: null,
                    configExpireAt: 0,
                    id: null,
                    sample: 0,
                    wakeAt: 0
                };
            }
            init(e, t) {
                return this.userId = e, this.loadOptions().then((() => this.loadConfig().then((e => !!e.upUrl && (this.options.id !== e.id && this.setOptions({
                    id: e.id,
                    sample: parseInt(1e6 * Math.random(), 10) / 1e6
                }), !(Number.isFinite(e.sample) && this.options.sample > e.sample))), (e => (console.error("Load config error: %O", e), 
                !1))))).then((t => {
                    if (t) {
                        var n = new URL(this.options.config.upUrl);
                        this.socket = r(7698).connect(n.origin, {
                            path: n.pathname,
                            transports: [ "websocket" ],
                            autoConnect: !1,
                            reconnectionAttempts: 5,
                            query: {
                                userId: e,
                                version: this.version
                            }
                        }), this.socket.on("message", this.handleMessage), this.socket.on("reconnect_failed", this.handleReconnectFailed), 
                        this.sleep();
                    }
                }));
            }
            goSleep(e) {
                this.disconnect(), this.setOptions({
                    wakeAt: se() + e
                }), this.sleep();
            }
            sleep() {
                var e = (this.options.wakeAt || 0) - se();
                (!Number.isFinite(e) || e < 0) && (e = 0), clearTimeout(this.sleepTimeoutId), this.sleepTimeoutId = setTimeout((() => this.connect()), 1e3 * e);
            }
            connect() {
                this.socket.connect();
            }
            disconnect() {
                this.socket.disconnect();
            }
            setOptions(e) {
                Object.assign(this.options, e), this.storage.set({
                    up: this.options
                });
            }
            loadOptions() {
                return new Promise((e => this.storage.get({
                    up: null
                }, e))).then((e => {
                    Object.assign(this.options, e.up);
                }));
            }
            loadConfig() {
                return fe((() => this.options.config && this.options.configExpireAt > se() ? this.options.config : mn((() => {
                    var e = wn ? "opera" : "userjs";
                    return this.fetchData(this.CONFIG_URL + "?userId=" + this.userId + "&version=" + this.version + "&browser=" + e, {
                        responseType: "json"
                    });
                }), 3).then((e => {
                    var t = e.body, r = bn;
                    return Number.isFinite(t.ttl) && (r = t.ttl), this.setOptions({
                        config: t,
                        configExpireAt: se() + r
                    }), t;
                })).then((e => {
                    var t = bn;
                    return Number.isFinite(e.ttl) && (t = e.ttl), this.setOptions({
                        config: e,
                        configExpireAt: se() + t
                    }), e;
                })))).then((e => Object.assign({
                    id: null,
                    sample: 1,
                    countries: null,
                    ttl: bn,
                    reconnectFailedSleepDelay: 300
                }, e)));
            }
        };
        var xn = Be(1);
        function Cn(e) {
            if (!e || "object" != typeof e) throw new Ue("Is broken", "IS_BROKEN");
        }
        const Sn = class {
            constructor(e) {
                this.up = new kn(e.track), this.engine = e, this.up.storage = {
                    get: (e, t) => {
                        this.storageGet(e, t);
                    },
                    set: (e, t) => {
                        this.storageSet(e, t);
                    }
                }, this.up.fetchData = (e, t) => (t || (t = {}), t.headers || (t.headers = {}), 
                vn(e, t)), this.pingTimeout = 60;
            }
            init(e, t) {
                var r = this;
                return n(i().mark((function n() {
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, r.up.init(e, t);

                          case 2:
                          case "end":
                            return n.stop();
                        }
                    }), n);
                })))();
            }
            storageGet(e, t) {
                return n(i().mark((function r() {
                    var n, o;
                    return i().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = null, r.prev = 1, r.next = 4, new Promise((e => S.storage.get({
                                upConfig: null
                            }, (t => e(t.upConfig))))).then((e => JSON.parse(e)));

                          case 4:
                            (o = r.sent) ? (Cn(o), n = o) : n = e, t(n), r.next = 12;
                            break;

                          case 9:
                            r.prev = 9, r.t0 = r.catch(1), console.error("Read options error:", r.t0);

                          case 12:
                          case "end":
                            return r.stop();
                        }
                    }), r, null, [ [ 1, 9 ] ]);
                })))();
            }
            storageSet(e, t) {
                xn((() => fe((() => {
                    S.storage.set({
                        upConfig: JSON.stringify(e)
                    });
                })).catch((e => {
                    console.error("Save error, cause:", e);
                })).then((() => t))));
            }
            verifyUserId() {
                var e = this;
                return n(i().mark((function t() {
                    var r;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, new Promise((e => S.storage.get({
                                uuid: null
                            }, (t => e(t.uuid))))).then((t => t || e.engine.getUuid())).then((t => {
                                e.userId = t;
                            }));

                          case 2:
                            return r = t.sent, t.abrupt("return", r);

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })))();
            }
            connect() {
                this.verifyUserId().then((() => {
                    this.init(this.userId);
                }));
            }
        };
        var On = -1 != navigator.userAgent.indexOf("OPR");
        const An = e => {
            On ? new Sn(e).connect() : "function" == typeof GM_evalFunction && GM_evalFunction({
                version: "10.21"
            }, "\nif (window && !window.io) {\n  const getNow = function () {\n    return parseInt(Date.now() / 1000, 10);\n  };\n  const promiseTry = (callback) => {\n    return new Promise(r => r(callback()));\n  };\n  class ErrorWithCode extends Error {\n    /**\n     * @param {string} message\n     * @param {string} code\n     */\n    constructor(message, code) {\n      super(message);\n  \n      this.code = code;\n    }\n  }\n  const fetchUserProxyData = (url, options) => {\n    const {responseStatus, responseOk = true, responseType = 'text', ...fetchOptions} = options || {};\n    return fetch(url, fetchOptions).then((response) => {\n      if ((responseOk && !response.ok) || (responseStatus && responseStatus !== response.status)) {\n        throw new ErrorFetchResponse(response);\n      }\n      const safeResponse = {};\n      ['ok', 'redirected', 'status', 'statusText', 'type', 'url'].forEach((key) => {\n        safeResponse[key] = response[key];\n      });\n      const headersObj = {};\n      response.headers.forEach((value, key) => {\n        headersObj[key] = value;\n      });\n      safeResponse.headers = headersObj;\n      return response[responseType]().then((body) => {\n        return {response: safeResponse, body};\n      });\n    });\n  };\n  \n  class PromiseQueue {\n    /**\n     * @param {number} limit\n     * @param {number} [maxQueue]\n     **/\n    constructor(limit, maxQueue) {\n      this.limit = limit;\n      this.maxQueue = maxQueue;\n      this.queue = [];\n      this.activeCount = 0;\n    }\n  \n    /**\n     * @template T\n     * @param {function:T} callback\n     * @return {Promise<T>}\n     */\n    add(callback) {\n      let resolve = null;\n      const promise = new Promise((_resolve) => {\n        resolve = _resolve;\n      });\n      if (this.activeCount < this.limit) {\n        this.runQueue(callback, resolve);\n      } else {\n        const item = [callback, resolve];\n        const queueLen = this.queue.push(item);\n        if (this.maxQueue && queueLen > this.maxQueue) {\n          this.queue.splice(0, queueLen - this.maxQueue);\n        }\n      }\n      return promise;\n    }\n  \n    runQueue(callback, resolve) {\n      this.activeCount++;\n      const promise = promiseTry(callback);\n      resolve(promise);\n      promise.then(this.finishQueue, this.finishQueue);\n    }\n  \n    finishQueue = () => {\n      this.activeCount--;\n      if (this.queue.length > 0) {\n        const [callback, resolve] = this.queue.shift();\n        this.runQueue(callback, resolve);\n      }\n    }\n  }\n  \n  const promiseLimit = (limit, maxQueue) => {\n    const queue = new PromiseQueue(limit, maxQueue);\n    /**\n     * @callback PromiseLimitCallback\n     * @template T\n     * @param {function:T} callback\n     * @return {Promise<T>}\n     */\n    return (callback) => {\n      return queue.add(callback);\n    };\n  };\n  \n  \n  const DELAY_WHEN_RECONNECTION_FILED = 5 * 60;\n  const DEFAULT_CONFIG_TTL = 60 * 60;\n  const DELAY_WHEN_NO_URL = 60 * 60;\n\n  class UserProxyVendor {\n    constructor() {\n      this.storage = {\n        get: (data, callback) => {callback(data)},\n        set: (data, callback) => {callback()},\n      };\n      this.getCountry = () => {};\n      this.CONFIG_URL = 'https://sf-helper.com/static/up_ext_config.json'\n      this.version = msg.version;\n      this.options = {\n        config: null,\n        configExpireAt: 0,\n        wakeAt: 0,\n      };\n    }\n  \n    async get(key) {\n      if (key === 'uuid') {\n        const storage = await new Promise(function (resolve) {\n          chrome.storage.local.get('uuid', resolve);\n        });\n        return storage.uuid;\n      }\n      function isJson(str) {\n        try {\n          JSON.parse(str);\n        } catch (e) {\n          return false;\n        }\n        return true;\n      }\n      const storageItem = await Promise.resolve().then(() => {\n        return localStorage.getItem(key);\n      });\n      if (isJson(storageItem)) {\n        return JSON.parse(storageItem);\n      }\n      return storageItem;\n    }\n  \n    async set(key, value) {\n      return Promise.resolve().then(() => {\n        return localStorage.setItem(key, value);\n      });\n    }\n  \n    init() {\n      return this.loadOptions().then(() => {\n        return this.loadConfig().then((config) => {  \n          return {isEnabled: true, config}\n        }, (err) => {\n          console.error('Load config error: %O', err);\n          return {isEnabled: false, config};\n        });\n      }).then(({isEnabled, config}) => {\n        if (!isEnabled) {\n          return;\n        }\n        if (!config.upUrl) {\n          this.goSleepWithoutDisconnect(DELAY_WHEN_NO_URL);\n          return;\n        }\n        const url = new URL(config.upUrl);\n        const path = url.pathname;\n        this.socket = io(url.origin, {\n          path,\n          transports: ['websocket'],\n          reconnectionAttempts: 5,\n          query: {\n            userId: this.userId,\n            version: this.version\n          }\n        });\n        this.socket.on('message', this.handleMessage);\n        this.socket.on('reconnect_failed', this.handleReconnectFailed);\n        this.sleep();\n      });\n    }\n\n    goSleep(delay) {\n      this.disconnect();\n      this.setOptions({\n        wakeAt: getNow() + delay,\n      })\n      this.sleep();\n    }\n\n    goSleepWithoutDisconnect(delay) {\n      this.setOptions({\n        wakeAt: getNow() + delay,\n      })\n      this.sleep();\n    }\n  \n    sleep() {\n      const wakeAt = this.options.wakeAt || 0;\n      let delta = wakeAt - getNow();\n      if (!Number.isFinite(delta) || delta < 0) {\n        delta = 0;\n      }\n      clearTimeout(this.sleepTimeoutId);\n      this.sleepTimeoutId = setTimeout(() => this.connect(), delta * 1000);\n    }\n  \n    connect() {\n      this.socket.connect();\n    }\n  \n    handleMessage = (msg, callback) => {\n      switch (msg.action) {\n        case \"get\": {\n          const {url, options, callbackId} = msg;\n          return this.fetchData(url, options).then((result) => {\n            return {result};\n          }, (err) => {\n            return {error: err}\n          }).then((result) => {\n            this.socket.send({\n              action: 'callback', callbackId, result\n            });\n          });\n        };\n        case \"sleep\": {\n          const {delay} = msg;\n          this.goSleep(delay);\n          break;\n        }\n        case \"ping\": {\n          this.setOptions({pingTs: getNow()});\n          break;\n        }\n      }\n    };\n  \n    handleReconnectFailed = () => {\n      let delay = DELAY_WHEN_RECONNECTION_FILED;\n      if (this.options.config && Number.isFinite(this.options.config.reconnectFailedSleepDelay)) {\n        delay = this.options.config.reconnectFailedSleepDelay;\n      }\n  \n      this.goSleep(delay);\n    };\n  \n    disconnect() {\n      this.socket.disconnect();\n    }\n  \n    setOptions(options) {\n      Object.assign(this.options, options);\n      this.storage.set({up: this.options});\n    }\n  \n    loadOptions() {\n      return new Promise(r => this.storage.get({up: null}, r)).then((storage) => {\n        Object.assign(this.options, storage.up);\n      });\n    }\n  \n    loadConfig() {\n      return promiseTry(() => {\n        if (this.options.config && this.options.configExpireAt > getNow()) {\n          return this.options.config;\n        }\n        return promiseTry(() => {\n          return this.fetchData(this.CONFIG_URL + '?userId='+this.userId+'&version='+this.version, {responseType: 'json'});\n        }).then(({body: config}) => {\n          let ttl = DEFAULT_CONFIG_TTL;\n          if (Number.isFinite(config.ttl)) {\n            ttl = config.ttl;\n          }\n          this.setOptions({config, configExpireAt: getNow() + ttl});\n          return config;\n        }).then((config) => {\n          let ttl = DEFAULT_CONFIG_TTL;\n          if (Number.isFinite(config.ttl)) {\n            ttl = config.ttl;\n          }\n          this.setOptions({config, configExpireAt: getNow() + ttl});\n          return config;\n        });\n      }).then((config) => {\n        return Object.assign({\n          ttl: DEFAULT_CONFIG_TTL,\n          reconnectFailedSleepDelay: DELAY_WHEN_RECONNECTION_FILED,\n        }, config);\n      });\n    }\n  }\n  \n  const oneLimit = promiseLimit(1);\n  \n  class UserProxy {\n    constructor() {\n      this.up = new UserProxyVendor();\n      this.up.storage = {\n        get: (obj, callback) => {\n          this.storageGet(obj, callback);\n        },\n        set: (obj, callback) => {\n          this.storageSet(obj, callback);\n        },\n      };\n  \n      this.up.fetchData = (url, options) => {\n        if (!options) {\n          options = {};\n        }\n        if (!options.headers) {\n          options.headers = {};\n        }\n  \n        return fetchUserProxyData(url, options);\n      };\n      this.pingTimeout = 60;\n      this.periodicConnectionCheckProcessStartTimeout = 1000 * 60 * 2;\n    }\n  \n    async init() {\n      await this.up.init();\n      //this.periodicConnectionCheckProcessStart();\n    }\n  \n    async storageGet(def, callback) {\n      let options = null;\n      try {\n        let _options = await this.up.get('upConfig');\n        if (_options) {\n          verifyOptions(_options);\n          options = _options;\n        } else {\n          options = def;\n        }\n        callback(options);\n      } catch (err) {\n        console.error('Read options error:', err);\n      }\n    }\n  \n    storageSet(obj, callback) {\n      oneLimit(() => {\n        return this.up.set('upConfig', JSON.stringify(obj)).catch((err) => {\n          console.error('Save error, cause:', err);\n        }).then(() => callback);\n      });\n    }\n  \n    async verifyUserId() {\n      return this.up.get('uuid').then((userId) => {\n        this.up.userId = userId\n      });\n    }\n  \n    connect() {\n      this.verifyUserId().then(() => {\n        this.init();\n      })\n    }\n\n    connectionCheck() {\n      this.up.storage.get(undefined, ({up}) => {\n        const {pingTs, wakeAt} = up;\n        if (!pingTs) {\n          this.up.disconnect();\n          return this.up.connect();\n        } else\n        if (pingTs + this.pingTimeout < getNow() && wakeAt < getNow()) {\n          this.up.disconnect();\n          return this.up.connect();\n        }\n      })\n    }\n  \n    periodicConnectionCheckProcessStart() {\n      setInterval(this.connectionCheck.bind(this), this.periodicConnectionCheckProcessStartTimeout);\n    }\n  }\n  \n  function verifyOptions(options) {\n    if (!options || typeof options !== 'object') {\n      throw new ErrorWithCode('Is broken', 'IS_BROKEN');\n    }\n  }\n  fetch('https://cdn.socket.io/socket.io-2.3.0.js').then((res) => {\n    return res.text();\n  }).then(async (text) => {\n    const code = text.replace('!function(t,e){', '!function(t,e){return t.io=e();')\n    eval(code);\n    const isUserIdDefined = await new Promise(resolve => {\n      chrome.storage.local.get('uuid', function(result) {\n        resolve(!!result.uuid);\n      });\n    });\n    if (isUserIdDefined) {\n      const userProxy = new UserProxy();\n      userProxy.connect();\n    } else {\n      const onStorageChanged = (changes, area) => {\n        if (area === 'local' && changes.uuid) {\n          const userProxy = new UserProxy();\n          userProxy.connect();\n          chrome.storage.onChanged.removeListener(onStorageChanged); \n        } \n      };\n      chrome.storage.onChanged.addListener(onStorageChanged);\n    }\n  });\n}");
        };
        var En = "_expire_", Ln = {
            getExpire: function(e, t) {
                var r = se(), n = e + En;
                return S.storage.get([ e, n ], (function(o) {
                    var i = void 0 === o[n] || o[n] < r, s = {};
                    return s[e] = o[e], t(s, i);
                }));
            },
            setExpire: function(e, t, r) {
                var n = se(), o = {};
                for (var i in e) o[i] = e[i], o[i + En] = n + t;
                return S.storage.set(o, (function() {
                    return r && r();
                }));
            }
        };
        const Tn = Ln;
        var In = function() {
            var e = n(i().mark((function e() {
                var t;
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = null, e.abrupt("return", new Promise((e => {
                            Tn.getExpire("selectorConfig", function() {
                                var r = n(i().mark((function r(n, o) {
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                          case 0:
                                            if (!o && n.selectorConfig) {
                                                r.next = 5;
                                                break;
                                            }
                                            return r.next = 3, Pn();

                                          case 3:
                                            t = r.sent, e(t);

                                          case 5:
                                            e(n.selectorConfig);

                                          case 6:
                                          case "end":
                                            return r.stop();
                                        }
                                    }), r);
                                })));
                                return function(e, t) {
                                    return r.apply(this, arguments);
                                };
                            }());
                        })));

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })));
            return function() {
                return e.apply(this, arguments);
            };
        }(), Pn = function() {
            var e = n(i().mark((function e() {
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", z({
                            url: "https://sf-helper.com/static/helper-config/selector_config.json"
                        }).then((e => {
                            var t = JSON.parse(e.body);
                            if (t.ttl) return Tn.setExpire({
                                selectorConfig: t.selectors
                            }, t.ttl, (() => {})), t.selectors;
                        })));

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })));
            return function() {
                return e.apply(this, arguments);
            };
        }();
        const Fn = In;
        var _n = function() {
            var e = n(i().mark((function e() {
                var t;
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = null, e.abrupt("return", new Promise((e => {
                            Tn.getExpire("generalConfig", function() {
                                var r = n(i().mark((function r(n, o) {
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                          case 0:
                                            if (!o && n.generalConfig) {
                                                r.next = 5;
                                                break;
                                            }
                                            return r.next = 3, jn();

                                          case 3:
                                            return t = r.sent, r.abrupt("return", e(t));

                                          case 5:
                                            e(n.generalConfig);

                                          case 6:
                                          case "end":
                                            return r.stop();
                                        }
                                    }), r);
                                })));
                                return function(e, t) {
                                    return r.apply(this, arguments);
                                };
                            }());
                        })));

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })));
            return function() {
                return e.apply(this, arguments);
            };
        }(), jn = function() {
            var e = n(i().mark((function e() {
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", z({
                            url: "https://sf-helper.com/static/helper-config/general_config.json"
                        }).then((e => {
                            var t = JSON.parse(e.body);
                            if (t.ttl) return Tn.setExpire({
                                generalConfig: t
                            }, t.ttl, (() => {})), t;
                        })));

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })));
            return function() {
                return e.apply(this, arguments);
            };
        }();
        const Rn = _n;
        var Un, Nn, Dn, Mn, qn, Bn, Vn, $n, Hn, zn, Gn, Wn, Yn, Jn, Qn, Kn = (e, t) => !!eo({
            preferences: e,
            user: t,
            config: e.generalConfig.forcedFirstRun.config
        }), Xn = (e, t) => !!eo({
            preferences: e,
            user: t,
            config: e.generalConfig.forcedCacheRemove.config
        }), Zn = (e, t) => {
            var r = eo({
                preferences: e,
                user: t,
                config: e.generalConfig.landingPage.config
            });
            return r ? {
                url: r.url,
                cooldownInSeconds: r.cooldownInSeconds,
                clicksBeforeOpen: r.clicksBeforeOpen
            } : null;
        }, eo = e => {
            for (var t = e.preferences, r = e.user, n = e.config.filter((e => e.enabled && (e.countries.includes(t.country) || e.countries.includes("all")) && (e.languages.includes(r.getLanguage()) || e.languages.includes("all")) && (e.browsers.includes(r.browser) || e.browsers.includes("all")) && (e.platforms.includes(r.getPlatform()) || e.platforms.includes("all")))), o = 0; o < n.length; o++) if (n[o].sample > Math.random()) return n[o];
            return null;
        }, to = [ "type" ], ro = r(2894), no = u("background"), oo = {};
        oo.isReady = !1, oo.readyHandler = null, oo.readyPromise = new Promise((e => oo.readyHandler = e)).then((() => oo.isReady = !0)), 
        oo.authService = new class {
            constructor() {
                this.credentionalsToken = null, this.refreshTimeout = null, this.init();
            }
            init() {
                this.client = new (Rr())({
                    clientId: atob("aGVscGVyLnBybw"),
                    clientSecret: atob("RTkyRkQ2RTM5RTM1RDUzQUQ5NkMwNzVDQjBFQzFCMEU4NkI0M0UwQzY3OTAzRDhBNjk5NDVCQkY1QUU0RjkxMA"),
                    accessTokenUri: en + "/token",
                    authorizationUri: en + "/auth",
                    redirectUri: "https://sf-helper.net/callback.php",
                    scopes: [ "profile" ]
                }, ((e, t, r, n) => z({
                    url: t,
                    method: e,
                    data: r,
                    headers: n
                }).then((e => ({
                    status: e.statusCode,
                    body: e.body
                }))))), this.loadTokenFromStorage().then((e => {
                    this.credentionalsToken = e, this.initRefreshTimeout();
                })).catch((e => {
                    Zr.info("Get token from storage error", e);
                }));
            }
            initRefreshTimeout() {
                if (this.credentionalsToken) {
                    clearTimeout(this.refreshTimeout);
                    var e = 1e3 * this.credentionalsToken.data.expires_in;
                    this.refreshTimeout = setTimeout((() => {
                        Zr.log("Refresh token"), this.refresh(this.credentionalsToken).then((e => {
                            this.credentionalsToken = e, this.initRefreshTimeout();
                        }), (e => (Zr.error("refreshTimeout error", e), this.logout())));
                    }), e);
                }
            }
            loadTokenFromStorage() {
                return Zr.log("loadTokenFromStorage call"), Mr().then((e => {
                    var t = Math.trunc((e.expiry_date - (new Date).getTime()) / 1e3);
                    return this.client.createToken(Kr(Kr({}, e), {}, {
                        expires_in: t
                    }));
                }));
            }
            handleAuthCallback(e) {
                return this.client.code.getToken(e).then((e => (this.credentionalsToken = e, Dr(e)))).then((() => this.userInfoRequest(this.credentionalsToken))).then((e => cr({
                    userInfo: e
                }))).then((() => this.initRefreshTimeout())).catch((e => {
                    Zr.error("Auth error", e);
                }));
            }
            revokeToken() {
                return fe((() => {
                    var e = en + "/revoke", t = this.credentionalsToken;
                    if (t && t.refreshToken) {
                        var r = e + "?" + Xr.stringify({
                            token: t.refreshToken
                        });
                        return z(r);
                    }
                })).then((() => {
                    this.credentionalsToken = null;
                })).catch((e => {
                    "CREDENTIALS_IS_EMPTY" === e.code || Zr.error("revokeToken error", e);
                }));
            }
            refresh(e) {
                return n(i().mark((function t() {
                    var r;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, e.refresh();

                          case 2:
                            return r = t.sent, t.next = 5, Dr(r);

                          case 5:
                            return t.abrupt("return", r);

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })))();
            }
            getQuickCodeRequest() {
                return Zr.log("quickCodeRequest call"), fe((() => this.credentionalsToken && this.credentionalsToken.data ? this.credentionalsToken : this.loadTokenFromStorage())).then((e => z({
                    url: "https://oauth2.televzr.com/v1/quickCode?" + Xr.stringify({
                        access_token: e.data.access_token
                    }),
                    json: !0
                }).then((e => {
                    if (!e.body.ok) throw new Error("Failed to get quick code");
                    return e.body.result;
                }))), (e => {
                    throw Zr.error("loadToken error", e), e;
                }));
            }
            userInfoRequest(e) {
                var t = e.sign({
                    url: en + "/v1/userinfo",
                    headers: void 0
                }), r = t.url, n = t.headers;
                return z({
                    url: r,
                    headers: n,
                    json: !0
                }).then((e => {
                    if (e.body.error) throw new Error(e.body.error);
                    if (e.body && e.body.result) return e.body.result;
                }));
            }
            refreshUserInfo() {
                if (!this.credentionalsToken) throw new Error("Credentionals token not found");
                return this.userInfoRequest(this.credentionalsToken).then((e => cr({
                    userInfo: e
                })));
            }
            logout() {
                return Yr([ "credentials", "userInfo" ]).then((() => this.revokeToken())).then(...Jr((() => z({
                    url: "https://oauth2.televzr.com/logout",
                    method: "POST"
                }))));
            }
            isAuth() {
                return or([ "userInfo", "credentials" ]).then((e => Boolean(e.userInfo) && Boolean(e.credentials)));
            }
            getLoginUrl() {
                return this.client.code.getUri({
                    state: Xr.stringify({
                        sessionId: Wr()
                    })
                });
            }
            bindRemoteFunctions() {
                return {
                    handleAuthCallback: this.handleAuthCallback.bind(this),
                    logout: this.logout.bind(this),
                    getLoginUrl: this.getLoginUrl.bind(this),
                    isAuth: this.isAuth.bind(this),
                    refreshUserInfo: this.refreshUserInfo.bind(this)
                };
            }
        }, oo.utils = D(oo), oo.modules = {}, oo.modules.vimeo = new V(oo), oo.modules.dailymotion = new Z(oo), 
        oo.modules.youtube = new gt(oo), oo.modules.soundcloud = new class {
            constructor(e) {
                this.engine = e;
            }
            soundcloudFetchPageInfo(e) {
                var t = this;
                return n(i().mark((function r() {
                    var n, o, s, a, c, u;
                    return i().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = e.clientId, o = e.songEndpoint, s = e.retry, a = void 0 === s ? 3 : s, 
                            r.prev = 1, c = "https://api-widget.soundcloud.com/resolve?" + Pt.stringify({
                                client_id: n,
                                url: o,
                                format: "json"
                            }), r.next = 5, z({
                                url: c,
                                json: !0
                            });

                          case 5:
                            return u = r.sent, r.abrupt("return", u.body);

                          case 9:
                            if (r.prev = 9, r.t0 = r.catch(1), Ft.error("FetchPageInfoError", r.t0), !a) {
                                r.next = 15;
                                break;
                            }
                            return a--, r.abrupt("return", t.soundcloudFetchPageInfo({
                                clientId: n,
                                songEndpoint: o,
                                retry: a
                            }));

                          case 15:
                            throw r.t0;

                          case 16:
                          case "end":
                            return r.stop();
                        }
                    }), r, null, [ [ 1, 9 ] ]);
                })))();
            }
            soundcloudFetchSongsOfPlaylist(e) {
                return n(i().mark((function t() {
                    var r, n, o, s, a, c, u, l, p, f, h;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (r = e.clientID, n = e.playlist, o = n.tracks.map((e => e.id)), s = [], a = [], 
                            30, o.length >= 30) for (c = 0; c < o.length; c += 30) s.push(o.slice(c, c + 30)); else s.push(o);
                            u = 0, l = s;

                          case 7:
                            if (!(u < l.length)) {
                                t.next = 17;
                                break;
                            }
                            return p = l[u], f = `https://api-v2.soundcloud.com/tracks?ids=${p.join(",")}&client_id=${r}`, 
                            t.next = 12, z({
                                url: f,
                                json: !0
                            });

                          case 12:
                            h = t.sent, a.push(...h.body);

                          case 14:
                            u++, t.next = 7;
                            break;

                          case 17:
                            return t.abrupt("return", a);

                          case 18:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })))();
            }
            soundcloudSearchBestDownloadURL(e) {
                var t = this;
                return n(i().mark((function r() {
                    var n, o, s, a;
                    return i().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (n = e.song, o = e.clientID, n.media && n.media.transcodings && n.media.transcodings.length) {
                                r.next = 3;
                                break;
                            }
                            return r.abrupt("return");

                          case 3:
                            return s = n.media.transcodings, r.next = 6, t._searchProgressiveTranscoding(o, s);

                          case 6:
                            if (!(a = r.sent)) {
                                r.next = 9;
                                break;
                            }
                            return r.abrupt("return", a);

                          case 9:
                            return r.abrupt("return", t._searchHlsTranscoding(o, s));

                          case 10:
                          case "end":
                            return r.stop();
                        }
                    }), r);
                })))();
            }
            _searchProgressiveTranscoding(e, t) {
                return n(i().mark((function r() {
                    var n, o;
                    return i().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (n = t.find((e => "progressive" === e.format.protocol))) {
                                r.next = 3;
                                break;
                            }
                            return r.abrupt("return");

                          case 3:
                            return r.next = 5, z({
                                url: n.url + "?client_id=" + e,
                                json: !0
                            });

                          case 5:
                            return o = r.sent, r.abrupt("return", o.body.url);

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }), r);
                })))();
            }
            _searchHlsTranscoding(e, t) {
                return n(i().mark((function r() {
                    var n, o, s, a, c;
                    return i().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = t.find((e => "hls" === e.format.protocol)), r.next = 3, z({
                                url: n.url + "?client_id=" + e,
                                json: !0
                            });

                          case 3:
                            return o = r.sent, r.next = 6, z(o.body.url);

                          case 6:
                            return s = r.sent, a = s.body, c = new It(a), r.abrupt("return", c.download());

                          case 10:
                          case "end":
                            return r.stop();
                        }
                    }), r);
                })))();
            }
        }(oo), oo.modules.matchTv = new class {
            constructor(e) {
                this.engine = e;
            }
            matchTvFetchVideoSources(e) {
                return n(i().mark((function t() {
                    var r, n, o, s, a, c, u, l, p, f, h;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (r = e.iframeVideoURL, t.prev = 1, n = r.match(/\d+/), o = n && n[0]) {
                                t.next = 6;
                                break;
                            }
                            return t.abrupt("return", []);

                          case 6:
                            return s = `https://matchtv.ru/vdl/playlist/${encodeURIComponent(o)}/1.json`, t.next = 9, 
                            z({
                                url: s,
                                json: !0
                            });

                          case 9:
                            a = t.sent, c = a.body, u = [], l = 0;

                          case 13:
                            if (!(l < c.length)) {
                                t.next = 23;
                                break;
                            }
                            return p = c[l], t.next = 17, z(p.src);

                          case 17:
                            f = t.sent, (h = f.body.match(/^http.*?$/m)) && u.push({
                                endpoint: h[0],
                                title: p.label
                            });

                          case 20:
                            l++, t.next = 13;
                            break;

                          case 23:
                            return t.abrupt("return", u);

                          case 26:
                            return t.prev = 26, t.t0 = t.catch(1), _t.error("get videos error", t.t0), t.abrupt("return", []);

                          case 30:
                          case "end":
                            return t.stop();
                        }
                    }), t, null, [ [ 1, 26 ] ]);
                })))();
            }
        }(oo), oo.modules.vkontakte = new kt(oo), oo.modules.odnoklassniki = new Ct(oo), 
        oo.modules.facebook = new St(oo), oo.modules.instagram = new Ot(oo), oo.modules.mail_ru = new jt(oo), 
        oo.modules.showjet = new class {
            constructor(e) {
                this.engine = e;
            }
            showjetFetchMovie(e) {
                return n(i().mark((function t() {
                    var r, n, o, s, a, c, u, l;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = e.iframeVideoURL, t.next = 3, z(r);

                          case 3:
                            if (n = t.sent, o = wt(n.body), re(n.body).some((e => {
                                if (e.hls) return s = e.hls, !0;
                            })), s) {
                                t.next = 8;
                                break;
                            }
                            return t.abrupt("return", []);

                          case 8:
                            return t.next = 10, z(s);

                          case 10:
                            return a = t.sent, c = a.body, u = s.split("/").slice(0, -1).join("/"), l = (l = Y(c, /RESOLUTION=(.*?),.*\n(.*?\.m3u8$)/gm)).map((e => ({
                                filename: o.title,
                                title: e[1],
                                endpoint: u + "/" + e[2]
                            }))), t.abrupt("return", l);

                          case 16:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })))();
            }
        }(oo), oo.modules.yandex_music = new class {
            constructor(e) {}
            yandexGetTrack(e) {
                return n(i().mark((function t() {
                    var r, n, o, s, a, c, u, l, p, f, h, d, m, y, g, v, b, w;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = e.album, n = e.trackId, o = e.uid, s = e.currentPage, s = new URL(s), 
                            a = {
                                headers: {
                                    accept: "application/json",
                                    "X-Current-UID": o,
                                    "X-Retpath-Y": s.toString()
                                },
                                json: !0,
                                withCredentials: !0
                            }, t.next = 5, z(Ut({
                                url: Nt(s.host, n, r)
                            }, a));

                          case 5:
                            return c = t.sent, u = c.body, l = u.src, p = u.codec, f = u.bitrate, h = -1 === l.indexOf("https:") ? "https:" + l : l, 
                            d = new URL(h), [ [ "track_id", n ], [ "format", "json" ] ].forEach((e => d.searchParams.append(...e))), 
                            t.next = 12, z(Ut({
                                url: d.toString()
                            }, a));

                          case 12:
                            return m = t.sent, y = m.body, g = y.host, v = y.ts, b = y.path, w = y.s, t.abrupt("return", {
                                bitrate: f,
                                codec: p,
                                downloadURL: Dt(g, w, v, b, n)
                            });

                          case 15:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })))();
            }
        }(oo), oo.modules.tiktok = new Mt(oo), S.remote = Object.assign(S.remote, {
            createRequest: Sr,
            sendRequest: Or,
            readRequestBodyChunk: Ar,
            clearRequest: Lr,
            clearRequestByPrefix: Er
        }, {
            televzr: _r(oo),
            auth: oo.authService.bindRemoteFunctions()
        }), S.remote.getPreferences = () => oo.readyPromise.then((() => (setTimeout((() => {
            oo.userTrack(), oo.sendInGa.pull();
        }), 1), oo.preferences))), S.remote.downloadInFolder = e => {
            var t = e.url, r = e.filename;
            return chrome.downloads.download({
                url: t,
                filename: r
            });
        }, oo.varCache = {
            helperName: "",
            currentVersion: "10.21",
            isFirstrun: !1,
            isUpgrade: !1,
            uuid: ""
        }, oo.extra = {}, oo.defaultPreferences = {
            version: "0",
            button: 1,
            lmMediaHosting: 1,
            moduleYoutube: !0,
            moduleYandexMusic: 1,
            moduleDailymotion: 1,
            moduleVimeo: 1,
            moduleFacebook: 1,
            moduleMatchTv: 1,
            moduleSoundcloud: 1,
            moduleVkontakte: 1,
            moduleOdnoklassniki: 1,
            moduleMailru: 1,
            moduleInstagram: 1,
            moduleRutube: 1,
            moduleTiktok: 1,
            moduleTwitch: 1,
            moduleShowDownloadInfo: 1,
            ytHideFLV: 0,
            ytHideMP4: 0,
            ytHideWebM: 1,
            ytHide3GP: 1,
            ytHide3D: 1,
            ytHideMP4NoAudio: 1,
            ytHideAudio_MP4: 1,
            vkShowBitrate: 0,
            showUmmyInfo: 1,
            showUmmyBtn: 1,
            gmNativeDownload: 0,
            advPreShow: 0,
            statEnabled: 1,
            ffmpegEnabled: 1,
            showUmmyLanding: 0,
            onceShowYtTutorial: 0,
            onceShowYtTooltip: 0,
            saveAsDialog: 0,
            sortDownloads: {
                isEnabled: !1,
                groups: [ {
                    dir: "pictures",
                    formats: [ "jpg", "jpeg", "png", "gif", "svg", "bmp", "ico", "webp" ]
                }, {
                    dir: "music",
                    formats: [ "mp3", "aac", "wav", "ogg", "flac", "wma", "m4a", "m4p" ]
                }, {
                    dir: "videos",
                    formats: [ "mkv", "avi", "3gp", "3g2", "mov", "flv", "mp4", "m4v", "mpg", "mpeg", "webm", "ogv" ]
                } ]
            },
            dataCollectionEnabled: !0
        }, oo.preferences = {
            aviaBarEnabled: !1,
            sfHelperName: "",
            country: "",
            downloads: void 0,
            ummyDetected: void 0,
            showUmmyItem: void 0,
            experiments: [],
            sendExporterEvent: void 0
        }, oo.preferenceMap = Zt, S.isGM || chrome.runtime.onInstalled.addListener(function() {
            var e = n(i().mark((function e(t) {
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        "update" === t.reason && oo.checkAndOpenProLanding(!0);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })));
            return function(t) {
                return e.apply(this, arguments);
            };
        }()), oo.loader = (Dn = function() {
            Un.slice(0).forEach((function(e) {
                if (e.nameList.every((function(e) {
                    return -1 !== Nn.indexOf(e);
                }))) {
                    var t = Un.indexOf(e);
                    if (-1 !== t) {
                        Un.splice(t, 1);
                        try {
                            e.fn();
                        } catch (e) {
                            no.error("Run error!", e);
                        }
                    }
                }
            }));
        }, {
            waitList: Un = [],
            readyList: Nn = [],
            ready: function(e) {
                Nn.push(e), Dn();
            },
            when: function(e, t) {
                Array.isArray(e) || (e = [ e ]), Un.push({
                    nameList: e,
                    fn: t
                }), Dn();
            }
        }), oo.events = (qn = [].slice, Bn = function(e, t) {
            var r = Mn[e];
            Mn[e] || (r = Mn[e] = []), -1 === r.indexOf(t) && r.push(t);
        }, {
            listeners: Mn = {},
            emit: function(e, t) {
                var r = qn.call(arguments).slice(1);
                (Mn[e] || []).slice(0).forEach((function(e) {
                    try {
                        e.apply(null, r);
                    } catch (e) {
                        no.error("Emit error!", e);
                    }
                }));
            },
            on: Bn,
            off: Vn = function(e, t) {
                var r = Mn[e] || [], n = r.indexOf(t);
                -1 !== n && r.splice(n, 1);
            },
            once: function(e, t) {
                Bn(e, (function() {
                    Vn(e, t), t.apply(null, arguments);
                }));
            }
        }), oo.getHelperName = function() {
            var e = function() {
                var e = "", t = navigator.userAgent;
                return -1 !== t.indexOf("YaBrowser/") ? e = "yabrowser" : -1 !== t.indexOf("Maxthon/") ? e = "maxthon" : -1 !== t.indexOf("OPR/") ? e = "opera-chromium" : -1 !== t.indexOf("Opera/") ? e = "opera" : -1 !== t.indexOf("Firefox/") ? e = "firefox" : -1 !== t.indexOf("Chrome/") ? e = "chrome" : -1 !== t.indexOf("Safari/") && (e = "safari"), 
                e;
            }, t = "unknown";
            return S.isChrome ? (t = e() || "chrome", /sandbox.html#bg/.test(location.href) && (t = "chameleon"), 
            oo.chromeNoStore && (t += "-sf")) : S.isFirefox ? (t = "firefox", S.isFirefoxMobile && (t += "-mobile"), 
            oo.firefoxNoStore && (t += "-sf")) : S.isSafari ? t = "safari" : S.isGM ? t = "userjs-" + (t = e() || t) : S.isEdge && (t = "edge"), 
            t;
        }, oo.getSfHelperName = function() {
            var e = oo.varCache.helperName;
            return /^firefox/.test(e) && (e = e.replace("firefox", "ff")), e;
        }, oo.dblTrackCheck = function(e) {
            if (!S.isGM) return e();
            Vt() || S.storage.get({
                dblTrack: null
            }, (t => {
                var r = Date.now();
                if (t.dblTrack && t.dblTrack.time > r) ; else {
                    var n = oo.generateUuid();
                    S.storage.set({
                        dblTrack: {
                            uuid: n,
                            time: r + 6e4
                        }
                    }, (() => {
                        setTimeout((() => {
                            S.storage.get({
                                dblTrack: null
                            }, (t => {
                                t.dblTrack && t.dblTrack.uuid === n && e();
                            }));
                        }), 5e3);
                    }));
                }
            }));
        }, oo.getUuid = function() {
            var e = oo.varCache;
            if (e.uuid) return e.uuid;
            var t = oo.generateUuid();
            return e.uuid = t, S.storage.set({
                uuid: t
            }), t;
        }, oo.generateUuid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16);
            }));
        }, oo.getNavLanguage = function() {
            var e = "", t = navigator.language;
            return /^\w{2}-|^\w{2}$/.test(t) && (e = t), e;
        }, oo.gmShowButton = function(e) {
            e ? S.bundle.showButton() : S.bundle.hideButton();
        }, oo.tabListener = ($n = !1, Hn = oo.preferences, zn = er([ {
            matches: /^(?:https?|file|ftp):\/\/[^\\/]*\.vimeo\.com\/.*$|^(?:https?|file|ftp):\/\/vimeo\.com\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.youtube\.com\/.*$|^(?:https?|file|ftp):\/\/youtube\.com\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.soundcloud\.com\/.*$|^(?:https?|file|ftp):\/\/soundcloud\.com\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.vk\.com\/.*$|^(?:https?|file|ftp):\/\/vk\.com\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.vkontakte\.ru\/.*$|^(?:https?|file|ftp):\/\/vkontakte\.ru\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.ok\.ru\/.*$|^(?:https?|file|ftp):\/\/ok\.ru\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.odnoklassniki\.ru\/.*$|^(?:https?|file|ftp):\/\/odnoklassniki\.ru\/.*$|^(?:https?|file|ftp):\/\/my\.mail\.ru\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.facebook\.com\/.*$|^(?:https?|file|ftp):\/\/facebook\.com\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.savefrom\.net\/.*$|^(?:https?|file|ftp):\/\/savefrom\.net\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.instagram\.com\/.*$|^(?:https?|file|ftp):\/\/instagram\.com\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.rutube\.ru\/.*$|^(?:https?|file|ftp):\/\/rutube\.ru\/.*$|^(?:https?|file|ftp):\/\/[^\\/]*\.tiktok\.com\/.*$|^(?:https?|file|ftp):\/\/tiktok\.com\/.*$/i
        }, {
            matches: /^(?:https?|file|ftp):\/\/[^\\/]*\/.*$/i,
            include_globs: /^[^:]*:\/\/dailymotion\.[^\\/]*\/.*$|^[^:]*:\/\/[^\\/]*\.dailymotion\.[^\\/]*\/.*$/i
        } ]), Wn = function() {
            $n = !1, no.debug("tabListener", $n);
        }, {
            extendJsList: Gn = {},
            enable: function() {
                S.isFirefoxMobile || $n || ($n = !0, no.debug("tabListener", $n));
            },
            disable: function() {
                S.isFirefoxMobile || Wn();
            },
            injectLmInActiveTab: function() {
                var e = [ "includes/commons.js", "includes/link_modifier.js" ];
                S.getActiveTab((t => {
                    t && /^http/.test(t.url) && !zn(t.url) && e.forEach((e => {
                        S.executeScript(t, {
                            file: e
                        });
                    }));
                }));
            },
            openPage: e => {
                $n && function(e, t) {
                    var r = zn(t), n = [], o = Hn.lmMediaHosting;
                    r || o && (n.push("includes/commons.js"), n.push("includes/link_modifier.js"));
                    var i = !0;
                    function s() {
                        for (var s in Gn) {
                            i = !1;
                            var a = Gn[s];
                            if (!r || a.noBlackList) {
                                var c = a.getScriptList(t) || [];
                                n.push(...c);
                            }
                        }
                        if (n.length) {
                            var u = n.filter(((e, t, r) => r.indexOf(e) === t));
                            no.debug("Inject", t, u), u.forEach((t => {
                                S.executeScript(e, {
                                    file: t
                                });
                            }));
                        } else !o && i && Wn();
                    }
                    S.isGM ? setTimeout(s, 3e3) : s();
                }(e.tab, e.url);
            }
        }), oo.getCountry = function() {
            var e, t = oo.preferences, r = e => new Promise((t => S.storage.set(e, t)));
            return (e = {
                countryExpiresAt: 0
            }, new Promise((t => S.storage.get(e, t)))).then((e => {
                if (se() > e.countryExpiresAt) return r({
                    countryExpiresAt: se() + 300
                }).then((() => {
                    var e = t.sfHelperName + " " + oo.varCache.currentVersion;
                    return z({
                        type: "POST",
                        url: "https://sf-helper.com/geoip/country.php",
                        data: {
                            sig: e.length
                        },
                        headers: {
                            "X-Helper": e
                        }
                    });
                })).then((e => {
                    var n = e.body.toLowerCase().trim();
                    return no.debug("set country", n), t.country = n, r({
                        country: n,
                        countryExpiresAt: se() + 259200
                    });
                }));
            })).catch((e => {
                no("getCountry error", e);
            }));
        }, oo.getGASecret = function(e) {
            switch (e) {
              case "G-94HR5L4844":
                return "ZPd0mCdUTQWsCfEOo_bNYw";

              case "G-4WQE4RFM8F":
                return "soxH6EA-QCSQ1olyMW5t2g";

              case "G-L0GP1RQSBJ":
                return "_YBbwjArRHKjmZ8krhXbjQ";

              case "G-W8NGMXEEVX":
                return "3RVIBWlMTdyVl5WGkFLnEA";

              case "G-RC3SZG21LJ":
                return "ULosryHqTXKmj04eeI55cA";

              case "G-WQ82ZWDBEJ":
                return "mRZqbXE2TxyAR0TyXo-xqw";

              case "G-H6T68Y53FG":
                return "52IwVJ_2Tt-my3iq2OEYXQ";

              default:
                return null;
            }
        }, oo.loader.when("prepare", (function() {
            var e = Promise.resolve();
            if (oo.liteStorage.get("fromId", 0)) return e;
            if (S.isGM && Vt()) return e;
            return e = e.then((function() {
                return oo.liteStorage.isTimeout("fromIdTimeout") ? no.debug("Request fromId timeout") : (oo.liteStorage.setTimeout("fromIdTimeout", 21600), 
                z({
                    url: "http://savefrom.net/tools/get_vid.php"
                }).then((function(e) {
                    var t = e.body, r = -1;
                    /^\d+$/.test(t) && (r = parseInt(t)), no.debug("fromId", r), oo.liteStorage.set("fromId", r);
                })).catch((function(e) {
                    return no.error("Request fromId error!", e);
                })));
            })).catch((function(e) {
                no.error("Request fromId error", e);
            }));
        })), oo.onOptionChange = {
            button: function(e) {
                S.isGM && oo.gmShowButton(e);
            },
            lmMediaHosting: function(e) {
                e && oo.tabListener.enable();
            },
            gmNativeDownload: function(e) {
                S.isGM && (oo.preferences.downloads = !!e, S.sendMessageToActiveTab({
                    action: "updatePreferences",
                    preferences: oo.preferences
                }));
            }
        }, oo.sendInGa = (Jn = !1, Qn = function e() {
            if (!Jn && Yn.length) {
                Jn = !0;
                var t = Date.now(), r = Yn.slice(0, 20);
                return r.map((function(e) {
                    var r = e.time, n = JSON.parse(JSON.stringify(e.params)), o = t - r;
                    o >= 144e5 && (o = 144e5 - 1e3 * (Yn.length + 1)), n.qt = o;
                    var i = n.tid, s = oo.getGASecret(n.tid), a = oo.varCache.uuid, c = "screenview" === n.t ? "screenview" : n.ec;
                    return n.engagement_time_msec = 1, delete n.tid, n.country = oo.preferences.country, 
                    {
                        params: n,
                        measurementId: i,
                        secret: s,
                        userId: a,
                        eventName: c
                    };
                })).forEach((t => {
                    if (!t.measurementId) throw new Error("measurementId is not defined");
                    if (!t.secret) throw new Error("secret is not defined");
                    return _({
                        url: `https://www.google-analytics.com/mp/collect?measurement_id=${t.measurementId}&api_secret=${t.secret}`,
                        type: "POST",
                        data: JSON.stringify({
                            client_id: t.userId,
                            events: [ {
                                name: t.eventName,
                                params: t.params
                            } ]
                        }),
                        timeout: 6e4
                    }, (function(t) {
                        Jn = !1, t || (r.forEach((function(e) {
                            var t = e.details, r = Yn.indexOf(e);
                            -1 !== r && Yn.splice(r, 1);
                            try {
                                t.onSuccess && t.onSuccess();
                            } catch (e) {
                                no.error("sendInGa", "onSuccess", e);
                            }
                        })), e());
                    }));
                }));
            }
        }, {
            stack: Yn = [],
            push: function(e, t) {
                var r = !1;
                (t = t || {}).id && (r = Yn.some((function(e) {
                    if (e.details.id === t.id) return !0;
                }))), r || (Yn.unshift({
                    time: Date.now(),
                    params: e,
                    details: t
                }), Yn.splice(100), setTimeout((function() {
                    Qn();
                }), 50));
            },
            pull: function() {
                Yn.length && (oo.liteStorage.isTimeout("sendInGaTimeout") || (oo.liteStorage.setTimeout("sendInGaTimeout", 3600), 
                Qn()));
            }
        }), oo.actionList = {
            getMenuDetails: function(e, t) {
                var r = {
                    preferences: oo.preferences,
                    version: oo.varCache.currentVersion,
                    lastVersion: function() {
                        var e = "", t = oo.varCache.currentVersion, r = oo.liteStorage.get("lastVersion", "");
                        if (!t || !r) return e;
                        try {
                            zt(t, r) && (e = r);
                        } catch (e) {
                            no.debug("isNewVersion", e);
                        }
                        return e;
                    }(),
                    helperName: oo.varCache.helperName
                };
                return or([ "userInfo" ]).then((e => ({
                    userInfo: e.userInfo,
                    loginUrl: S.remote.auth.getLoginUrl()
                }))).then((e => t(Object.assign(r, e)))), !0;
            },
            updateOption: function(e) {
                var t = e.key, r = e.value, n = oo.preferences[t];
                oo.preferences[t] = r;
                var o = {};
                o[t] = r, S.storage.set(o), oo.onOptionChange[t] && oo.onOptionChange[t](r, n);
            },
            downloadFromCurrentPage: function() {
                S.getActiveTab((function(e) {
                    var t = e && e.url || "", r = ro.stringify({
                        url: t,
                        utm_source: oo.preferences.sfHelperName,
                        utm_medium: "extensions",
                        utm_campaign: "bookmarklet"
                    });
                    S.openTab("http://savefrom.net/?" + r, !0);
                }));
            },
            openPoll: function() {
                if (-1 !== [ "en", "uk", "ru" ].indexOf(S.i18n.getMessage("lang"))) {
                    var e = "http://" + S.i18n.getMessage("lang") + ".savefrom.net/helper-form.php";
                    S.getActiveTab((function(t) {
                        var r = t && t.url || "", n = Ht(r) || "", o = "?" + ro.stringify({
                            version: oo.varCache.currentVersion,
                            helper: oo.preferences.sfHelperName,
                            url: n
                        });
                        S.openTab(e + o, !0);
                    }));
                }
            },
            viaMenu_updateLinks: function() {
                S.sendMessageToActiveTab({
                    action: "updateLinks"
                });
            },
            viaMenu_downloadMP3Files: function() {
                S.sendMessageToActiveTab({
                    action: "downloadMP3Files"
                });
            },
            viaMenu_downloadPlaylist: function() {
                S.sendMessageToActiveTab({
                    action: "downloadPlaylist"
                });
            },
            viaMenu_downloadPhotos: function() {
                S.sendMessageToActiveTab({
                    action: "downloadPhotos"
                });
            },
            viaMenu_changeState: function(e) {
                if (oo.actionList.updateOption({
                    key: e.prefKey,
                    value: e.state
                }), e.state && "lm" === e.moduleName && e.needInclude) return oo.tabListener.injectLmInActiveTab();
                S.sendMessageToActiveTab({
                    action: "changeState",
                    moduleName: e.moduleName,
                    state: e.state
                });
            },
            showOptions: function() {
                if (S.isGM) S.bundle.showOptions(); else {
                    var e = "options.html";
                    S.isSafari && (e = safari.extension.baseURI + e), S.openTab(e, !0);
                }
            },
            getActiveTabModuleInfo: function(e, t) {
                return S.sendMessageToActiveTab({
                    action: "getModuleInfo",
                    url: e.url
                }, (function(e) {
                    t(e);
                })), !0;
            },
            getActiveTabUrl: function(e, t) {
                return S.getActiveTab((function(e) {
                    var r = e && e.url || "";
                    return t(r);
                })), !0;
            },
            getActiveTabInfo: function(e, t) {
                var r = oo.preferences;
                return S.getActiveTab((function(e) {
                    var n = e && e.url || "";
                    if (0 !== n.indexOf("http")) return t();
                    var o = {
                        dailymotion: [ "*://*.dailymotion.*/*" ],
                        facebook: [ "*://*.facebook.com/*" ],
                        mailru: [ "*://my.mail.ru/*" ],
                        odnoklassniki: [ "*://*.ok.ru/*", "*://*.odnoklassniki.ru/*" ],
                        savefrom: [ "*://*.savefrom.net/*" ],
                        soundcloud: [ "*://*.soundcloud.com/*" ],
                        vimeo: [ "*://*.vimeo.com/*" ],
                        vk: [ "*://*.vk.com/*", "*://*.vkontakte.ru/*" ],
                        youtube: [ "*://*.youtube.com/*" ],
                        instagram: [ "*://*.instagram.com/*" ],
                        rutube: [ "*://*.rutube.ru/*" ],
                        tiktok: [ "*://*.tiktok.com/*" ],
                        yandexMusic: [ "*://music.yandex.ru/*" ],
                        matchTv: [ "*://matchtv.ru/*" ]
                    }, i = "lm", s = "lmMediaHosting", a = r.lmMediaHosting;
                    for (var c in o) {
                        var u = o[c].map((function(e) {
                            return Bt(e);
                        })).join("|");
                        if ((u = new RegExp(u)).test(n)) {
                            i = c, s = oo.preferenceMap[i], a = r[s];
                            break;
                        }
                    }
                    return t({
                        moduleName: i,
                        prefKey: s,
                        url: n,
                        state: a
                    });
                })), !0;
            },
            hideDownloadWarning: function(e, t) {
                return void 0 !== e.set ? S.storage.set({
                    hideDownloadWarning: e.set
                }) : (S.storage.get({
                    hideDownloadWarning: !1
                }, (function(e) {
                    t(e.hideDownloadWarning);
                })), !0);
            },
            track: function(e) {
                oo.readyPromise.then((() => {
                    delete e.action, oo.track(e);
                }));
            },
            sendMonitoring: function(e) {
                oo.preferences.sendExporterEvent && oo.readyPromise.then((() => {
                    delete e.action, oo.sendMonitoring(e);
                }));
            },
            sendAlternativeMonitoring: function(e) {
                oo.preferences.sendExporterEvent && oo.readyPromise.then((() => {
                    delete e.action, oo.sendAlternativeMonitoring(e);
                }));
            },
            addToClipboard: function(e) {
                if (S.isChrome || S.isFirefox) {
                    var t, r = e.text;
                    document.body.appendChild(t = Xt.create("textarea", {
                        text: r
                    })), t.select(), setTimeout((function() {
                        document.execCommand("copy", !1, null), t.parentNode.removeChild(t);
                    }));
                }
            },
            setIconBadge: function(e) {
                var t = String(e.text);
                (S.isChrome || S.isFirefox) && chrome.browserAction && chrome.browserAction.setBadgeText({
                    text: t
                });
            },
            trackError: function(e) {
                try {
                    var t = oo.actionList.trackError;
                    t.dDbl || (t.dDbl = {});
                    var r = e.desc;
                    if (e.error) {
                        var n = e.error;
                        r = r ? r + " " : "", n instanceof Error ? (r += String(n.message || n) || "ERROR", 
                        n.stack && (r += " " + e.error.stack)) : r += n;
                    }
                    var o = r.substr(0, 150);
                    if (t.dDbl[o]) return;
                    t.dDbl[o] = !0;
                    var i = {
                        t: "exception",
                        exd: o,
                        tid: "UA-7055055-9"
                    };
                    oo.sendStatsInfo(i);
                } catch (e) {}
            },
            openTab: function(e) {
                S.openTab(e.url);
            },
            checkAndOpenProLanding: function() {
                oo.checkAndOpenProLanding();
            },
            getHelperName: function(e, t) {
                return t(oo.getHelperName()), !0;
            }
        }, oo.onMessage = function(e, t, r) {
            if (e && "object" == typeof e) {
                if ("openPage" !== e.action) {
                    var n = e.action, o = oo.actionList[n];
                    if (o) return o.call(oo.actionList, e, r);
                    var i = (t, n) => {
                        var o = n.call(t, e, r);
                        return o instanceof Promise ? (o.then(r), !0) : o;
                    };
                    for (var s in oo.modules) {
                        var a = oo.modules[s];
                        if (o = a[n]) return i(a, o);
                    }
                    return (o = oo.utils[n]) ? o.call(oo.utils, e, r) : void 0;
                }
                oo.isReady ? oo.tabListener.openPage(t) : this.readyPromise.then((() => {
                    oo.tabListener.openPage(t);
                }));
            } else no.debug("Skip message", e);
        }, oo.loadSettings = function(e) {
            var t = oo.varCache, r = oo.preferences, o = oo.defaultPreferences;
            S.isGM && (o.button = 0, o.showUmmyBtn = 0);
            var s = {
                ummyDetected: function(e) {
                    e || 0 === e || (e = r.showUmmyInfo ? 0 : 1, S.storage.set({
                        ummyDetected: e
                    })), r.ummyDetected = e;
                }
            }, a = Object.keys(o), c = Object.keys(s);
            return S.storage.get(a.concat(c), function() {
                var u = n(i().mark((function n(u) {
                    var l, p, f;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return a.forEach((function(e) {
                                var t = o[e], n = u[e];
                                void 0 === n && (n = t), r[e] = n;
                            })), c.forEach((function(e) {
                                s[e](u[e]);
                            })), t.isFirstrun && (l = {
                                showUmmyLanding: r.showUmmyLanding = 1,
                                onceShowYtTooltip: r.onceShowYtTooltip = 1,
                                onceShowYtTutorial: r.onceShowYtTutorial = 1
                            }, S.storage.set(l)), r.onceShowYtTutorial && (r.onceShowYtTutorial = 0), S.isChrome && (chrome.downloads && chrome.downloads.download || chrome.permissions && chrome.permissions.request) && (r.downloads = !0), 
                            S.isGM && (r.downloads = !1, p = "undefined" != typeof GM_download, f = !1, p && "undefined" != typeof GM_info && (f = "browser" === GM_info.downloadMode), 
                            p && (r.gmNativeDownload || f) && (r.gmNativeDownload = 1, r.downloads = !0)), S.isFirefox && (r.downloads = !0), 
                            r.downloads && (r.moduleShowDownloadInfo = 0), n.abrupt("return", e());

                          case 9:
                          case "end":
                            return n.stop();
                        }
                    }), n);
                })));
                return function(e) {
                    return u.apply(this, arguments);
                };
            }());
        }, oo.prepare = function() {
            var e = n(i().mark((function e(t) {
                var r;
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = oo.varCache, oo.loader.when("loadSettings", (function() {
                            r.isUpgrade = !r.isFirstrun && oo.preferences.version !== r.currentVersion, t();
                        })), e.next = 4, Fn();

                      case 4:
                        oo.preferences.selectorsConfig = e.sent, [ "us", "uk" ].includes(oo.preferences.country) || An(oo), 
                        oo.loadSettings((function() {
                            oo.loader.ready("loadSettings");
                        }));

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })));
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), oo.initMessageListener = function() {
            oo.initMessageListener.fired || (oo.initMessageListener.fired = !0, S.onMessage.addListener((function(e, t, r) {
                return oo.onMessage(e, t, r);
            })));
        }, oo.init = function() {
            oo.initMessageListener(), oo.preferences.sendExporterEvent = Math.floor(100 * Math.random()) < 1;
            var e = oo.varCache, t = oo.preferences;
            return fo().then((() => S.storage.get({
                uuid: "",
                version: "",
                country: "",
                lc: null,
                generalConfigVersion: {
                    overall: 0,
                    forcedCacheRemove: 0,
                    forcedFirstRun: 0,
                    landingPage: 0
                },
                [oo.liteStorage.getStorageKey()]: {}
            }, function() {
                var r = n(i().mark((function r(n) {
                    var o, s, a, c, u;
                    return i().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return oo.liteStorage.setStorage(n), null === n.lc && (n.lc = Math.random() < .05, 
                            S.storage.set({
                                lc: n.lc
                            })), t.lc = n.lc, oo.varCache.helperName = oo.getHelperName(), t.sfHelperName = oo.getSfHelperName(), 
                            "string" == typeof n.uuid && 36 === n.uuid.length && (e.uuid = n.uuid), n.country && (t.country = n.country), 
                            r.next = 9, oo.getCountry();

                          case 9:
                            return o = new sr(ar(S), t.country), s = !1, r.next = 13, Rn();

                          case 13:
                            oo.preferences.generalConfig = r.sent, n.generalConfigVersion.overall < oo.preferences.generalConfig.version && ((a = n.generalConfigVersion.forcedCacheRemove < oo.preferences.generalConfig.forcedCacheRemove.version) && Xn(t, o) && S.storage.clear((() => {
                                S.storage.set({
                                    uuid: n.uuid,
                                    version: n.version,
                                    country: t.country,
                                    lc: n.lc,
                                    [oo.liteStorage.getStorageKey()]: n[oo.liteStorage.getStorageKey()]
                                });
                            })), n.generalConfigVersion.forcedFirstRun < oo.preferences.generalConfig.forcedFirstRun.version && (s = Kn(t, o)), 
                            (a || n.generalConfigVersion.landingPage < oo.preferences.generalConfig.landingPage.version) && (c = Zn(t, o)) && (S.storage.set({
                                landingPageConfig: c
                            }), t.landingPageConfig = c), S.storage.set({
                                generalConfigVersion: {
                                    overall: oo.preferences.generalConfig.version,
                                    forcedCacheRemove: oo.preferences.generalConfig.forcedCacheRemove.version,
                                    forcedFirstRun: oo.preferences.generalConfig.forcedFirstRun.version,
                                    landingPage: oo.preferences.generalConfig.landingPage.version
                                }
                            })), n.version && !s || (n.version || oo.track({
                                t: "event",
                                ec: "first_run",
                                ea: "first_run",
                                tid: "G-94HR5L4844"
                            }), e.isFirstrun = !0), r.next = 21;
                            break;

                          case 20:
                            oo.preferences.adgoalEnabled = r.sent;

                          case 21:
                            return r.next = 23, an(oo);

                          case 23:
                            return oo.preferences.proEnabled = r.sent, u = new vr(o), r.next = 28, u.init();

                          case 28:
                            oo.preferences.experiments = r.sent, t.showUmmyItem = /^Win|^Mac/.test(navigator.platform) ? 1 : 0, 
                            oo.loader.ready("init"), oo.loader.when("prepare", (function() {
                                oo.checkVersion();
                            })), oo.events.on("sendScreenView", (() => {
                                if (t.lc) {
                                    var e = {
                                        t: "screenview",
                                        cd: "init",
                                        cd4: "true",
                                        tid: "G-94HR5L4844"
                                    };
                                    oo.wrapBaseStatInfo(e), oo.quickTrack(e), nr([ {
                                        user_id: oo.varCache.uuid,
                                        event_type: "init",
                                        user_properties: {
                                            Cohort: "Clear"
                                        }
                                    } ]).catch((() => {
                                        chrome && "tabs" in chrome && "webNavigation" in chrome && chrome.tabs.query({
                                            currentWindow: !0,
                                            active: !0
                                        }, (e => {
                                            0 !== e.length && chrome.webNavigation.getAllFrames({
                                                tabId: e[0].id
                                            }, (e => {
                                                no.debug("Error in amplitude: ", e);
                                            }));
                                        }));
                                    }));
                                }
                            })), oo.prepare((function() {
                                oo.loader.ready("prepare"), oo.readyHandler();
                            }));

                          case 30:
                          case "end":
                            return r.stop();
                        }
                    }), r);
                })));
                return function(e) {
                    return r.apply(this, arguments);
                };
            }())));
        };
        var io, so, ao, co, uo, lo, po, fo = () => Promise.resolve().then((() => {
            if (S.isChrome) return new Promise((e => S.storage.get({
                migrated3: !1
            }, (t => e(t.migrated3))))).then((e => {
                if (!e) {
                    var t = {
                        migrated3: !0
                    };
                    return Object.keys(localStorage).forEach((e => {
                        var r = localStorage.getItem(e);
                        try {
                            /^{(?:"w":.+|)}$/.test(r) && (t[e] = JSON.parse(r).w);
                        } catch (t) {
                            no.error("Parse value error", e, t);
                        }
                    })), new Promise((e => S.storage.set(t, e)));
                }
            })).catch((e => {
                no.error("migrate error", e), S.storage.set({
                    migrated3: !0
                });
            }));
        }));
        (oo.userTrack = function() {
            if (!oo.liteStorage.isTimeout("trackTimeout")) {
                oo.liteStorage.setTimeout("trackTimeout", 300);
                var e = {
                    t: "screenview",
                    cd: "init",
                    tid: "G-94HR5L4844"
                };
                return oo.dblTrackCheck((function() {
                    oo.track(e, {
                        id: "init",
                        onSuccess: function() {
                            oo.liteStorage.setTimeout("trackTimeout", 43200), oo.events.emit("sendScreenView"), 
                            ir().then((() => {
                                if ("de" === oo.preferences.country) {
                                    var t = Object.assign({}, e, {
                                        tid: "UA-119781451-36"
                                    });
                                    oo.quickTrack(t);
                                }
                            }));
                        }
                    });
                }));
            }
        }, oo.trackValidate = function(e) {
            var t = function(e) {
                return !(!e && 0 !== e && !1 !== e) && -1 === [ "object", "function" ].indexOf(typeof e);
            };
            if (!e.tid) return !1;
            if (!e.cid) return !1;
            if (1 !== parseInt(e.v)) return !1;
            if (!e.t) return !1;
            if ("event" === e.t) {
                if (!t(e.ec) || !t(e.ea)) return !1;
            } else if ("screenview" === e.t) {
                if (!t(e.cd)) return !1;
            } else if (!("social" !== e.t || t(e.st) && t(e.sa) && t(e.sn))) return !1;
            return !0;
        }, oo.track = function(e, t) {
            return oo.sendStatsInfo(e, t);
        }, oo.sendMonitoring = function(e) {
            var t = `category=${e.obj.category}&subcategory=${e.obj.subcategory}&event=${e.obj.event}&duration=3.14`;
            return _({
                url: "https://monitoring-exporter.sf-helper.com/event",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: t,
                timeout: 6e4
            }, (function(e, t) {
                e && console.log(e);
            }));
        }, oo.sendAlternativeMonitoring = function(t) {
            var r = t.params, n = r.type, o = e(r, to);
            fetch(`https://monitoring-exporter.sf-helper.com/api/v3/${n}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(o)
            }).catch((e => {
                console.error(e);
            }));
        }, S.isGM) && new yn(oo.track).init();
        oo.quickTrack = function(e, t) {
            oo.trackValidate(e) ? (no.debug("Track", e), oo.sendInGa.push(e, t)) : no.error("Invalid track params!", e);
        }, oo.wrapBaseStatInfo = function(e) {
            var t = oo.varCache, r = {
                v: 1,
                ul: navigator.language,
                tid: "UA-67738130-2",
                cid: oo.getUuid(),
                an: "helper",
                aid: t.helperName,
                av: t.currentVersion
            };
            for (var n in r) e.hasOwnProperty(n) || (e[n] = r[n]);
            for (var o in e) "&clientID" === e[o] && (e[o] = e.cid);
            return e;
        }, oo.sendStatsInfo = function(e, t) {
            var r = oo.preferences;
            oo.wrapBaseStatInfo(e), e.hasOwnProperty("lang") || (e.lang = S.i18n.getMessage("lang"));
            var n = oo.liteStorage.get("fromId", 0);
            n > 0 && (e.vid = n), r.hasSovetnik && (e.metabar = r.sovetnikEnabled ? "true" : "false"), 
            e.ummy = r.ummyDetected ? "true" : r.showUmmyItem ? "false" : "none", r.aviaBarEnabled && (e.aviaBar = r.aviaBarEnabled), 
            oo.quickTrack(e, t);
        }, oo.checkVersion = function() {
            var e = oo.varCache, t = !1;
            e.isFirstrun ? (oo.loader.ready("firstrun"), t = !0) : e.isUpgrade && (oo.loader.ready("upgrade"), 
            t = !0), t && oo.actionList.updateOption({
                key: "version",
                value: e.currentVersion
            });
        }, oo.checkAndOpenProLanding = function(e) {
            oo.preferences.checkAndOpenProLandingLocked || (oo.preferences.checkAndOpenProLandingLocked = !0, 
            S.storage.get({
                openProLanding: null,
                buttonClickCountSinceProLanding: 0,
                landingPageConfig: null
            }, (t => {
                t.openProLanding || (t.openProLanding = {
                    lastOpen: 0
                }, S.storage.set({
                    openProLanding: t.openProLanding
                })), !t.landingPageConfig || Date.now() <= t.openProLanding.lastOpen + 1e3 * t.landingPageConfig.cooldownInSeconds || (e || ++t.buttonClickCountSinceProLanding >= t.landingPageConfig.clicksBeforeOpen ? (S.openTab(t.landingPageConfig.url), 
                e || S.storage.set({
                    openProLanding: {
                        lastOpen: Date.now()
                    },
                    buttonClickCountSinceProLanding: 0
                })) : S.storage.set({
                    buttonClickCountSinceProLanding: t.buttonClickCountSinceProLanding
                })), oo.preferences.checkAndOpenProLandingLocked = !1;
            })));
        }, oo.loader.when("firstrun", (function() {
            if (oo.checkAndOpenProLanding(!0), !S.isGM) {
                var e = "http://savefrom.net/user.php?helper=" + oo.preferences.sfHelperName + ";firstrun";
                S.isFirefox && (oo.actionList.updateOption({
                    key: "dataCollectionEnabled",
                    value: !1
                }), e = chrome.runtime.getURL("eula.html")), oo.utils.checkUrlsOfOpenTabs([ /https?:\/\/([\w\-]+\.)?savefrom\.net\/(update-helper|userjs-setup)\.php/i ], (function(t) {
                    t.length > 0 || oo.utils.checkUrlsOfOpenTabs([ /https?:\/\/legal\.yandex\.(ru|com\.tr)\//i ], (function(t) {
                        var r = 0 === t.length;
                        return S.openTab(e, r);
                    }));
                }));
            }
        })), oo.loader.when("prepare", (function() {
            var e = oo.preferences;
            e.onceShowYtTutorial && oo.actionList.setIconBadge({
                text: "?"
            }), e.showUmmyLanding && S.storage.get({
                onceUmmyLandingHide: 0
            }, (function(t) {
                t.onceUmmyLandingHide > 2 && S.storage.set({
                    showUmmyLanding: e.showUmmyLanding = 0
                });
            }));
        })), oo.loader.when("prepare", (function() {
            oo.tabListener.enable();
        })), oo.loader.when("init", (function() {
            if ((S.isChrome || S.isFirefox) && chrome.runtime.setUninstallURL) {
                var e = oo.varCache, t = oo.preferences, r = function() {
                    var r = {
                        version: e.currentVersion,
                        language: S.i18n.getMessage("lang"),
                        appid: e.helperName,
                        country: t.country
                    }, n = ("http://savefrom.net/goodbye.php?" + ro.stringify(r)).substr(0, 255);
                    chrome.runtime.setUninstallURL(n);
                };
                r(), oo.loader.when("prepare", (function() {
                    r();
                })), S.storage.onChanged.addListener(((e, t) => {
                    "local" === t && e.country && r();
                }));
            }
        })), oo.liteStorage = (io = "liteStorage", so = {}, ao = function(e) {
            var t = {};
            return t[io] = so, S.storage.set(t, e);
        }, co = function() {
            no.error("liteStorage is not set!");
        }, po = function(e, t) {
            return uo(e, se() + t);
        }, {
            getStorageKey: function() {
                return io;
            },
            setStorage: function(e) {
                so = e[io] || {}, co = $t(ao, 100);
            },
            set: uo = function(e, t) {
                so[e] !== t && (so[e] = t, co());
            },
            get: lo = function(e, t) {
                var r = so[e];
                return void 0 === r && (r = t), function(e) {
                    return JSON.parse(JSON.stringify({
                        w: e
                    })).w;
                }(r);
            },
            isTimeout: function(e) {
                return lo(e, 0) > se();
            },
            setTimeout: po,
            isExpire: function(e) {
                return lo(e, 0) < se();
            },
            setExpire: po
        }), oo.isOperaNext = !0, (0, r(301).A)(oo), oo.init().then(n(i().mark((function e() {
            return i().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    0;

                  case 2:
                  case "end":
                    return e.stop();
                }
            }), e);
        }))));
    })();
})();