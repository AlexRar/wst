(() => {
    var t, e = {
        7967: (t, e, o) => {
            "use strict";
            var n = o(3453), r = o(467), a = o(4756), i = o.n(a), s = o(3499), l = o(8233), d = o(9022), _ = o(1460), c = o(9620), f = o(8139), u = o(9589), p = o(1853), b = o(172), v = o(5299), m = o(2452), g = o.n(m), x = o(4627), h = o(6942), y = o.n(h), A = o(4689), k = o(4895), w = "middle", S = "large", E = "feedItem";
            const T = v.Ay.memo((t => {
                var e = t.url, o = t.filename, r = t.containerType, a = void 0 === r ? w : r, i = t.children, l = (0, 
                x.A)(g()), d = v.Ay.useState(!1), _ = (0, n.A)(d, 2), c = _[0], f = _[1], u = v.Ay.useState(!1), p = (0, 
                n.A)(u, 2), b = p[0], m = p[1], h = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome"), T = v.Ay.useCallback((t => {
                    if (t.stopPropagation(), s.A.isFirefox) {
                        t.preventDefault();
                        var n = e;
                        return (0, k.A)({
                            action: "ffTiktokDownloadMedia",
                            downloadFileUrl: n,
                            filename: o
                        });
                    }
                    t.altKey || s.A.isFirefox ? ((0, A.A)({
                        category: "download",
                        subcategory: "ti",
                        event: "video"
                    }), s.A.sendMessage({
                        action: "checkAndOpenProLanding"
                    })) : (b || (m(!0), setTimeout((() => {
                        m(!1);
                    }), 2e3)), t.preventDefault());
                }), [ b ]), C = v.Ay.useCallback((t => {
                    t.altKey || t.ctrlKey || s.A.isFirefox || f(!c);
                }), [ c ]), O = v.Ay.useMemo((() => a === S ? l.largeContainer : a === w ? l.middleContainer : a === E ? l.feedItemContainer : ""), [ a ]);
                return v.Ay.createElement("div", {
                    className: y()(l.container, O)
                }, v.Ay.createElement("div", {
                    className: l.button
                }, s.A.isFirefox ? v.Ay.createElement("a", {
                    onclick: T
                }, i) : v.Ay.createElement("a", {
                    href: e,
                    download: o,
                    target: "_blank",
                    onclick: T,
                    onmouseenter: C,
                    onmouseleave: C
                }, i), c && v.Ay.createElement("div", {
                    className: y()(l.sf__tooltip)
                }, v.Ay.createElement("div", {
                    className: y()(l.sf__tooltip__triangle)
                }), v.Ay.createElement("div", {
                    className: y()(l.sf__tooltip__container)
                }, v.Ay.createElement("span", {
                    className: y()(l.sf__tooltip__text)
                }, s.A.i18n.getMessage("download_button_hold")), v.Ay.createElement("div", {
                    className: y()(l.sf__tooltip__button, h ? l.sf__tooltip__button_safari : "")
                }, v.Ay.createElement("div", {
                    className: y()(l.sf__tooltip__button_whiteground, h ? l.sf__tooltip__button_whiteground_safari : "")
                }, v.Ay.createElement("span", {
                    className: y()(l.sf__tooltip__text__alt)
                }, h ? "option" : "alt"))), v.Ay.createElement("span", {
                    className: y()(l.sf__tooltip__text)
                }, s.A.i18n.getMessage("download_button_and_click"))))));
            }));
            var C = o(4733), O = o(5563), j = o(9949), P = (0, l.A)("tiktok_com");
            d.A.isSingle() && (0, u.Ys)("tiktok", ((t, e) => {
                var o = (0, c.A)(e), a = e.preferences, l = a.moduleTiktok, d = e.preferences.selectorsConfig, u = location.pathname.includes("/embed");
                s.A.onMessage.addListener(((e, o, n) => {
                    if ("getModuleInfo" === e.action) {
                        if (e.url !== location.href) return;
                        return n({
                            state: l,
                            moduleName: t
                        });
                    }
                    if ("changeState" === e.action) {
                        if (t !== e.moduleName) return;
                        return v.changeState(e.state);
                    }
                    "updatePreferences" !== e.action || Object.assign(a, e.preferences);
                })), l && setTimeout((() => {
                    v.run();
                }));
                var v = {
                    style: void 0,
                    run() {
                        l = 1, u ? _.A.isAvailable() && m.mutationMode.start() : _.A.isAvailable() && (this.mutationMode.start(), 
                        this.injectStyle());
                    },
                    mutationMode: {
                        observer: null,
                        start() {
                            if (this.observer) return this.observer.start();
                            this.observer = new _.A({
                                queries: [ {
                                    css: d.tiktok.videoCardAdd,
                                    is: "added",
                                    callback: t => {
                                        for (var e, o = 0; e = t.added[o]; o++) e.dataset.sfSkip > 0 || v.runDesktop(e);
                                    }
                                }, {
                                    css: d.tiktok.feed,
                                    is: "added",
                                    callback: t => {
                                        t.added.forEach((t => {
                                            t.dataset.sfSkip || v.addButtonForFeedItem(t);
                                        }));
                                    }
                                } ]
                            });
                        },
                        stop() {
                            this.observer && this.observer.stop(), document.querySelectorAll(".sf-dl-container, .sf-feed-dl-container").forEach((t => {
                                t.remove();
                            })), v.style && v.style.remove(), [ "sfSkip", "sfReady" ].forEach((function(t) {
                                for (var e, o = (0, f.A)(t), n = document.querySelectorAll("[" + o + "]"), r = 0; e = n[r]; r++) e.removeAttribute(o);
                            }));
                        }
                    },
                    addButtonForFeedItem: t => (0, r.A)(i().mark((function e() {
                        var o, r, a, s, l, d, _;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (o = t.closest(".item-video-container")) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return");

                              case 3:
                                return (r = document.createElement("div")).classList.add("sf-feed-dl-container"), 
                                e.next = 7, j.P.createLinkExtractor("tt-video").extractLinks({
                                    element: t
                                });

                              case 7:
                                a = e.sent, s = (0, n.A)(a, 1), l = s[0], d = l.url, _ = l.filename, v.createDownloadButton(r, _, d, E), 
                                t.dataset.sfSkip = "1", o.appendChild(r);

                              case 15:
                              case "end":
                                return e.stop();
                            }
                        }), e);
                    })))(),
                    runDesktop: t => (0, r.A)(i().mark((function e() {
                        var o, r, a, s, l, d, _, c;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (t) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return", P.error("videoElement don't found"));

                              case 2:
                                if (o = t.parentElement, r = w, (t.closest('div[data-e2e="feed-video"]') || t.closest('div[data-e2e="user-post-item-list"]')) && (r = E), 
                                t.closest('div[data-e2e="browse-video"]') && (r = S), !o || o.dataset.sfReady) {
                                    e.next = 19;
                                    break;
                                }
                                return o.dataset.sfReady = String(1), (a = document.createElement("div")).classList.add("sf-dl-container"), 
                                o.appendChild(a), e.next = 13, j.P.createLinkExtractor("tt-video").extractLinks({
                                    element: t
                                });

                              case 13:
                                s = e.sent, l = (0, n.A)(s, 1), d = l[0], _ = d.url, c = d.filename, v.createDownloadButton(a, c, _, r);

                              case 19:
                              case "end":
                                return e.stop();
                            }
                        }), e);
                    })))(),
                    createDownloadButton: (t, e, n, r) => ((0, A.A)({
                        category: "append",
                        subcategory: "ti",
                        event: "b"
                    }), (0, A.A)({
                        category: "type",
                        subcategory: "ti",
                        event: n.startsWith("blob") ? "blob" : "video"
                    }), (0, p.A)((0, b.n)(T, {
                        url: n,
                        filename: e,
                        containerType: r
                    }, [ (0, b.n)("img", {
                        src: o.svg.getSrc("download", "#fff")
                    }) ]), t)),
                    injectStyle() {
                        this.style = C.A.create("style", {
                            text: (0, O.A)({
                                ".sf-dl-container": {
                                    display: "none"
                                },
                                "[class*=-DivVideoContainer]:hover .sf-dl-container": {
                                    display: "block"
                                },
                                '[data-sf-ready="1"]:hover .sf-dl-container': {
                                    display: "block"
                                }
                            })
                        }), document.body.appendChild(this.style);
                    },
                    changeState(t) {
                        l = t, this.mutationMode.stop(), t && this.run();
                    }
                }, m = {
                    mutationMode: {
                        observer: null,
                        start() {
                            if (this.observer) return this.observer.start();
                            this.observer = new _.A({
                                queries: [ {
                                    css: d.tiktok.embedVideoAdd,
                                    is: "added",
                                    callback: t => {
                                        for (var e, o = 0; e = t.added[o]; o++) e.dataset.sfSkip > 0 || (e.dataset.sfSkip = "1", 
                                        m.insertDownloadButton(e));
                                    }
                                } ]
                            });
                        }
                    },
                    insertDownloadButton(t) {
                        var e;
                        t.dataset.sfReady || (t.dataset.sfReady = String(1), t.addEventListener("mouseenter", (0, 
                        r.A)(i().mark((function o() {
                            var r, a, s, l, d, _;
                            return i().wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    if (r = document.querySelector("video")) {
                                        o.next = 3;
                                        break;
                                    }
                                    return o.abrupt("return");

                                  case 3:
                                    return o.next = 5, j.P.createLinkExtractor("tt-video").extractLinks({
                                        element: r
                                    });

                                  case 5:
                                    a = o.sent, s = (0, n.A)(a, 1), l = s[0], d = l.url, _ = l.filename, e = v.createDownloadButton(t, _, d, S);

                                  case 11:
                                  case "end":
                                    return o.stop();
                                }
                            }), o);
                        })))), t.addEventListener("mouseleave", (() => {
                            e && e();
                        })));
                    }
                };
            }));
        },
        1420: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                default: () => s
            });
            var n = o(1601), r = o.n(n), a = o(6314), i = o.n(a)()(r());
            i.push([ t.id, ".Eov85--container{position:absolute;z-index:10}.XufYV--sf__tooltip{cursor:default;display:block;left:2px;outline:none;position:absolute;top:35px;transition:opacity .25s;-webkit-user-select:none;user-select:none;white-space:nowrap;z-index:10000}.ZtQW0--sf__tooltip__container{background-color:#4d4d4d;border-radius:8px;color:#fff;display:flex;font-family:Arial;font-size:14px;font-weight:700;margin-bottom:0;outline:none;padding:8px}.ju4Tx--sf__tooltip__text{padding-top:6px}.YAbwt--sf__tooltip__text__alt{display:inline-block;margin-top:5px}.uQ1Uh--sf__tooltip__button{background-color:#000;border:solid #000;border-radius:5px;border-width:1px 1px 3px;height:18px;margin:4px 4px 0;width:20px}.XoUQQ--sf__tooltip__triangle{border-color:transparent transparent #4d4d4d;border-style:solid;border-width:0 8px 8px;height:0;left:8px;position:relative;width:0}.sJxKE--sf__tooltip__button_whiteground{fontWeight:bold;background-color:#fff;border-radius:5px;color:#000;font-size:8px;height:18px;position:relative;text-align:center;width:20px;z-index:1}.FdAjY--sf__tooltip__button_safari,.O5gYS--sf__tooltip__button_whiteground_safari{width:27px}.Eov85--container.iyXzy--largeContainer{left:145px;top:20px}.Eov85--container.CxPJk--middleContainer{left:20px;top:20px}.Eov85--container.LTfwV--feedItemContainer{left:10px;top:10px}.atPOP--button{align-items:center;background-color:rgba(0,0,0,.5);border:1px solid hsla(0,0%,50%,.5);border-radius:50%;display:flex;height:30px;justify-content:center;width:30px;z-index:9}.atPOP--button a{padding:10px}", "" ]), 
            i.locals = {
                container: "Eov85--container",
                sf__tooltip: "XufYV--sf__tooltip",
                sfTooltip: "XufYV--sf__tooltip",
                sf__tooltip__container: "ZtQW0--sf__tooltip__container",
                sfTooltipContainer: "ZtQW0--sf__tooltip__container",
                sf__tooltip__text: "ju4Tx--sf__tooltip__text",
                sfTooltipText: "ju4Tx--sf__tooltip__text",
                sf__tooltip__text__alt: "YAbwt--sf__tooltip__text__alt",
                sfTooltipTextAlt: "YAbwt--sf__tooltip__text__alt",
                sf__tooltip__button: "uQ1Uh--sf__tooltip__button",
                sfTooltipButton: "uQ1Uh--sf__tooltip__button",
                sf__tooltip__triangle: "XoUQQ--sf__tooltip__triangle",
                sfTooltipTriangle: "XoUQQ--sf__tooltip__triangle",
                sf__tooltip__button_whiteground: "sJxKE--sf__tooltip__button_whiteground",
                sfTooltipButtonWhiteground: "sJxKE--sf__tooltip__button_whiteground",
                sf__tooltip__button_safari: "FdAjY--sf__tooltip__button_safari",
                sfTooltipButtonSafari: "FdAjY--sf__tooltip__button_safari",
                sf__tooltip__button_whiteground_safari: "O5gYS--sf__tooltip__button_whiteground_safari",
                sfTooltipButtonWhitegroundSafari: "O5gYS--sf__tooltip__button_whiteground_safari",
                largeContainer: "iyXzy--largeContainer",
                middleContainer: "CxPJk--middleContainer",
                feedItemContainer: "LTfwV--feedItemContainer",
                button: "atPOP--button"
            };
            const s = i;
        },
        2452: (t, e, o) => {
            var n = o(5072), r = o(1420);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [ [ t.id, r, "" ] ]);
            var a, i = 0, s = {
                injectType: "lazyStyleTag",
                insert: "head",
                singleton: !1
            }, l = {};
            l.locals = r.locals || {}, l.use = function() {
                return i++ || (a = n(r, s)), l;
            }, l.unuse = function() {
                i > 0 && ! --i && (a(), a = null);
            }, t.exports = l;
        }
    }, o = {};
    function n(t) {
        var r = o[t];
        if (void 0 !== r) return r.exports;
        var a = o[t] = {
            id: t,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, n), a.exports;
    }
    n.m = e, t = [], n.O = (e, o, r, a) => {
        if (!o) {
            var i = 1 / 0;
            for (_ = 0; _ < t.length; _++) {
                for (var [o, r, a] = t[_], s = !0, l = 0; l < o.length; l++) (!1 & a || i >= a) && Object.keys(n.O).every((t => n.O[t](o[l]))) ? o.splice(l--, 1) : (s = !1, 
                a < i && (i = a));
                if (s) {
                    t.splice(_--, 1);
                    var d = r();
                    void 0 !== d && (e = d);
                }
            }
            return e;
        }
        a = a || 0;
        for (var _ = t.length; _ > 0 && t[_ - 1][2] > a; _--) t[_] = t[_ - 1];
        t[_] = [ o, r, a ];
    }, n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e;
    }, n.d = (t, e) => {
        for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
            enumerable: !0,
            get: e[o]
        });
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (t) {
            if ("object" == typeof window) return window;
        }
    }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.j = 3, (() => {
        n.b = document.baseURI || self.location.href;
        var t = {
            3: 0
        };
        n.O.j = e => 0 === t[e];
        var e = (e, o) => {
            var r, a, [i, s, l] = o, d = 0;
            if (i.some((e => 0 !== t[e]))) {
                for (r in s) n.o(s, r) && (n.m[r] = s[r]);
                if (l) var _ = l(n);
            }
            for (e && e(o); d < i.length; d++) a = i[d], n.o(t, a) && t[a] && t[a][0](), t[a] = 0;
            return n.O(_);
        }, o = self.savefromContentScriptWebpackJsonp = self.savefromContentScriptWebpackJsonp || [];
        o.forEach(e.bind(null, 0)), o.push = e.bind(null, o.push.bind(o));
    })(), n.nc = void 0;
    var r = n.O(void 0, [ 223 ], (() => n(7967)));
    r = n.O(r);
})();