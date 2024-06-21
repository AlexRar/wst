(() => {
    "use strict";
    var e, t = {
        3129: (e, t, a) => {
            var r = a(3453), n = a(467), s = a(4756), o = a.n(s), i = a(3499), d = a(4733), l = a(7736), c = a(2944), u = a(8244), f = a(5563), p = a(9022), m = a(1460), v = a(9620), h = a(8139), g = a(7661), y = a(9589), b = a(2525), k = a(4895), S = a(4689), x = a(453), A = a(9949);
            p.A.isSingle() && (0, y.Ys)("instagram", (function(e, t) {
                var a = (0, v.A)(t), s = t.preferences, l = s.moduleInstagram ? 1 : 0, p = t.preferences.selectorsConfig, y = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
                i.A.onMessage.addListener((function(t, a, r) {
                    if ("getModuleInfo" === t.action) {
                        if (t.url !== location.href) return;
                        return r({
                            state: l,
                            moduleName: e
                        });
                    }
                    if ("changeState" === t.action) {
                        if (e !== t.moduleName) return;
                        return w.changeState(t.state);
                    }
                    if ("updatePreferences" !== t.action) {
                        if (l) return "updateLinks" === t.action ? w.updateLinks() : void 0;
                    } else Object.assign(s, t.preferences);
                })), l && setTimeout((function() {
                    w.run();
                })), document.addEventListener("mutationwatcher:hrefchange", (() => {
                    l && location.href.includes("reels") && w.updateLinks();
                }));
                var N, w = {
                    dlBtnClassName: "savefrom-helper--btn",
                    styleEl: null,
                    run: function() {
                        l = 1, this.insertStyle(), m.A.isAvailable() && this.mutationMode.enable();
                    },
                    rmStyle: function() {
                        this.styleEl && this.styleEl.parentNode && this.styleEl.parentNode.removeChild(this.styleEl);
                    },
                    insertStyle: function() {
                        this.styleEl ? this.styleEl.parentNode || document.head.appendChild(this.styleEl) : (this.styleEl = d.A.create("style", {
                            text: (0, f.A)([ {
                                selector: "." + this.dlBtnClassName,
                                style: {
                                    display: "none",
                                    border: "1px solid #F8F8F8",
                                    top: "8px",
                                    right: "8px",
                                    padding: 0,
                                    position: "absolute",
                                    backgroundColor: "#F8F8F8",
                                    cursor: "pointer",
                                    lineHeight: 0
                                }
                            }, {
                                selector: "." + this.dlBtnClassName + " svg",
                                style: {
                                    margin: "2px"
                                }
                            }, {
                                selector: "." + this.dlBtnClassName + " svg path",
                                style: {
                                    fill: "#777777"
                                }
                            }, {
                                selector: ".Embed ." + this.dlBtnClassName,
                                style: {
                                    border: "1px solid #B5B5B5",
                                    borderRadius: "4px",
                                    padding: "3px"
                                }
                            }, {
                                selector: "." + this.dlBtnClassName + ":hover svg path",
                                style: {
                                    fill: "#3f729b"
                                }
                            }, {
                                selector: "." + this.dlBtnClassName + ":active",
                                style: {
                                    outline: 0,
                                    boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
                                }
                            }, {
                                selector: [ "*:hover > ." + this.dlBtnClassName, "*.sf-touch-show > ." + this.dlBtnClassName ],
                                style: {
                                    display: "block"
                                }
                            }, {
                                selector: "*.sf-touch-hide > ." + this.dlBtnClassName,
                                style: {
                                    display: "none"
                                }
                            } ])
                        }), document.head.appendChild(this.styleEl));
                    },
                    updateLinks: function() {
                        this.changeState(0), this.changeState(1);
                    },
                    changeState: function(e) {
                        l = e, this.rmDlBtn(), this.rmStyle(), this.mutationMode.stop(), e && this.run();
                    },
                    rmDlBtn: function() {
                        for (var e, t = document.querySelectorAll("." + this.dlBtnClassName), a = 0; e = t[a]; a++) e.parentNode.removeChild(e);
                    },
                    getDbBtnEl: function(e) {
                        (0, S.A)({
                            category: "append",
                            subcategory: "in",
                            event: "b"
                        });
                        var t = d.A.create("a", {
                            class: [ this.dlBtnClassName ],
                            href: e.url,
                            download: e.filename,
                            title: i.A.i18n.getMessage("download"),
                            style: {
                                position: "absolute",
                                zIndex: 100
                            },
                            on: [ [ "click", B ], [ "mouseover", e => {
                                if (y) {
                                    if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void (0, x.D)(t, {
                                        content: i.A.i18n.getMessage("downloadTitle"),
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    }, {
                                        el: {
                                            className: "mp4",
                                            download: "mp4"
                                        }
                                    });
                                    (0, x.w)(t, {
                                        content: i.A.i18n.getMessage("downloadTitle"),
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    });
                                }
                            } ] ],
                            append: [ a.svg.getSvg("download", null, 16, 16) ]
                        });
                        return t;
                    },
                    showOnTouch: function(e, t) {
                        if (!(e.dataset.sfTouch > 0)) {
                            var a = !1, r = null, n = function() {
                                a && (clearTimeout(r), r = setTimeout((function() {
                                    a && (a = !1, e.classList.remove("sf-touch-show"), e.classList.add("sf-touch-hide"));
                                }), 3e3));
                            };
                            d.A.create(e, {
                                data: {
                                    sfTouch: "1"
                                },
                                on: [ [ "touchstart", function(t) {
                                    a || (a = !0, e.classList.remove("sf-touch-hide"), e.classList.add("sf-touch-show"));
                                } ], [ "touchend", function(e) {
                                    n();
                                } ] ]
                            });
                        }
                    },
                    addDlBtn: (N = (0, n.A)(o().mark((function e(t, a, s) {
                        var i, l, f, p, m, v, h, y, b, k, S, x, N, B, C, L, E, D, q, M, T, O, P;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (i = "embed" === a, l = t, f = null, t.classList.add("sf-root-media-container"), 
                                t.style.position = "relative", (p = t.querySelector("div > div > video")) || "video" !== s.tagName || "strangeVideo" !== a || (p = s), 
                                !p) {
                                    e.next = 14;
                                    break;
                                }
                                return e.next = 10, A.P.createLinkExtractor("ig-post-video").extractLinks({
                                    element: p
                                });

                              case 10:
                                m = e.sent, v = (0, r.A)(m, 1), h = v[0], f = h;

                              case 14:
                                if (f) {
                                    e.next = 45;
                                    break;
                                }
                                if (!i) {
                                    e.next = 26;
                                    break;
                                }
                                if (!(y = l.querySelector(".EmbedFrame img.EmbeddedMediaImage"))) {
                                    e.next = 24;
                                    break;
                                }
                                return e.next = 20, A.P.createLinkExtractor("ig-post-photo").extractLinks({
                                    element: y
                                });

                              case 20:
                                b = e.sent, k = (0, r.A)(b, 1), S = k[0], f = S;

                              case 24:
                                e.next = 45;
                                break;

                              case 26:
                                if (!(y = l.querySelector("div > img[src][srcset]"))) {
                                    e.next = 36;
                                    break;
                                }
                                return e.next = 30, A.P.createLinkExtractor("ig-post-photo").extractLinks({
                                    element: y
                                });

                              case 30:
                                x = e.sent, N = (0, r.A)(x, 1), B = N[0], f = B, e.next = 45;
                                break;

                              case 36:
                                if (!(y = l.querySelector("div > img"))) {
                                    e.next = 44;
                                    break;
                                }
                                return e.next = 40, A.P.createLinkExtractor("ig-post-photo").extractLinks({
                                    element: y
                                });

                              case 40:
                                C = e.sent, L = (0, r.A)(C, 1), E = L[0], f = E;

                              case 44:
                                !y || "hidden" !== y.style.visibility && y.src || (D = new g.A({
                                    target: y,
                                    attrs: [ {
                                        name: "src",
                                        callback: e => {
                                            e.value && (this.addDlBtn(t, a, s), D.stop());
                                        }
                                    } ]
                                }));

                              case 45:
                                if (f) {
                                    e.next = 47;
                                    break;
                                }
                                return e.abrupt("return");

                              case 47:
                                q = this.getDbBtnEl(f), M = "", T = null, y ? (M = "image", T = y) : (M = "video", 
                                T = p), O = new g.A({
                                    target: T,
                                    attrs: [ {
                                        name: "src",
                                        callback: function() {
                                            var e = (0, n.A)(o().mark((function e(t) {
                                                var a, n, s, i, d, l;
                                                return o().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        if (t.value === f.url) {
                                                            e.next = 18;
                                                            break;
                                                        }
                                                        if (f = null, "image" !== M) {
                                                            e.next = 11;
                                                            break;
                                                        }
                                                        return e.next = 5, A.P.createLinkExtractor("ig-post-photo").extractLinks({
                                                            element: T
                                                        });

                                                      case 5:
                                                        a = e.sent, n = (0, r.A)(a, 1), s = n[0], f = s, e.next = 17;
                                                        break;

                                                      case 11:
                                                        return e.next = 13, A.P.createLinkExtractor("ig-post-video").extractLinks({
                                                            element: T
                                                        });

                                                      case 13:
                                                        i = e.sent, d = (0, r.A)(i, 1), l = d[0], f = l;

                                                      case 17:
                                                        f && q.parentNode ? (q.href = f.url, q.download = f.filename) : O.stop();

                                                      case 18:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }), e);
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments);
                                            };
                                        }()
                                    } ]
                                }), u.A.onRemoveEvent(T, (function() {
                                    (0, c.A)(document.body, s) && (s.dataset.sfSkip = 0, w.mutationMode.observer.trigger(s));
                                })), i && (P = document.querySelector(".Header")) && (l = P, d.A.create(q, {
                                    style: {
                                        position: "relative",
                                        zIndex: 100,
                                        display: "block",
                                        left: "auto",
                                        top: "auto",
                                        marginLeft: "10px"
                                    }
                                })), l.appendChild(q), this.showOnTouch(l, q);

                              case 56:
                              case "end":
                                return e.stop();
                            }
                        }), e, this);
                    }))), function(e, t, a) {
                        return N.apply(this, arguments);
                    }),
                    addBtnVideoStory() {
                        var e = document.querySelector("section > div > header, a > img");
                        if (e) {
                            "img" === e.tagName.toLowerCase() && (e = e.parentNode.parentNode.parentNode.parentNode);
                            var t = w.createStoryContainer(e);
                            setTimeout((0, n.A)(o().mark((function a() {
                                var n, s, i, d, l, c;
                                return o().wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                      case 0:
                                        return a.next = 2, A.P.createLinkExtractor("ig-story-video").extractLinks({
                                            element: e
                                        });

                                      case 2:
                                        n = a.sent, s = (0, r.A)(n, 1), i = s[0], d = i.url, l = i.filename, (c = w.createStoryButton(d, l)).addEventListener("click", B), 
                                        t.appendChild(c);

                                      case 10:
                                      case "end":
                                        return a.stop();
                                    }
                                }), a);
                            }))), 100);
                        }
                    },
                    addBtnImageStory(e) {
                        var t = document.querySelector("section > div > header, a > img");
                        if (t) {
                            "img" === t.tagName.toLowerCase() && (t = t.parentNode.parentNode.parentNode.parentNode);
                            var a = w.createStoryContainer(t);
                            setTimeout((0, n.A)(o().mark((function t() {
                                var n, s, i, d, l, c;
                                return o().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        return t.next = 2, A.P.createLinkExtractor("ig-story-photo").extractLinks({
                                            element: e
                                        });

                                      case 2:
                                        n = t.sent, s = (0, r.A)(n, 1), i = s[0], d = i.url, l = i.filename, (c = w.createStoryButton(d, l)).addEventListener("click", B), 
                                        a.appendChild(c);

                                      case 10:
                                      case "end":
                                        return t.stop();
                                    }
                                }), t);
                            }))), 100);
                        }
                    },
                    createStoryContainer(e) {
                        if (e) {
                            var t = document.querySelector(".sf--story-container");
                            t && t.remove();
                            var a = d.A.create("div", {
                                className: "sf--story-container"
                            }), r = document.querySelector("header > div:nth-child(2) > div:nth-child(2)");
                            if (!r) return e.appendChild(a), a;
                            var n = r.querySelector("button");
                            return n ? r.insertBefore(a, n) : e.appendChild(a), a;
                        }
                    },
                    createStoryButton(e, t) {
                        (0, S.A)({
                            category: "append",
                            subcategory: "in",
                            event: "b"
                        });
                        var r = d.A.create("a", {
                            className: "sf--story-btn",
                            append: [ a.svg.getSvg("download", "white", 15, 15) ],
                            download: t,
                            href: e,
                            style: {
                                cursor: "pointer",
                                marginRight: "2px",
                                marginTop: "2px"
                            },
                            on: [ "mouseover", e => {
                                if (y) {
                                    if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void (0, x.D)(r, {
                                        content: i.A.i18n.getMessage("downloadTitle"),
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    }, {
                                        el: {
                                            className: "story"
                                        }
                                    });
                                    (0, x.w)(r, {
                                        content: i.A.i18n.getMessage("downloadTitle"),
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    });
                                }
                            } ]
                        });
                        return r;
                    },
                    mutationMode: {
                        observer: null,
                        stop: function() {
                            this.observer && this.observer.stop(), [ "sfSkip" ].forEach((function(e) {
                                for (var t, a = (0, h.A)(e), r = document.querySelectorAll("[" + a + "]"), n = 0; t = r[n]; n++) t.removeAttribute(a);
                            }));
                        },
                        enable: function() {
                            if (this.observer) return this.observer.start();
                            this.observer = new m.A({
                                queries: [ {
                                    css: p.instagram.story,
                                    is: "added",
                                    callback(e) {
                                        var t = e.added, a = () => {
                                            document.querySelectorAll(".sf--story-btn").forEach((e => e.remove()));
                                        };
                                        t.forEach((e => {
                                            var t = e.querySelector("div > video");
                                            if (t) a(), w.addBtnVideoStory(t); else {
                                                var r = e.querySelector("div > img");
                                                r && (a(), w.addBtnImageStory(r));
                                            }
                                        }));
                                    }
                                }, {
                                    css: p.instagram.story2,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                        w.addDlBtn(t.parentNode, "", t));
                                    }
                                }, {
                                    css: p.instagram.strangeVideo,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                        w.addDlBtn(t.parentNode, "strangeVideo", t));
                                    }
                                }, {
                                    css: p.instagram.story3,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || t.querySelector("ul > li") || (t.dataset.sfSkip = "1", 
                                        w.addDlBtn(t.parentNode, "", t));
                                    }
                                }, {
                                    css: p.instagram.reelsModal,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || t.querySelector("ul > li") || (t.dataset.sfSkip = "1", 
                                        w.addDlBtn(t.parentNode, "", t));
                                    }
                                }, {
                                    css: p.instagram.reelsModal735,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || t.querySelector("ul > li") || (t.dataset.sfSkip = "1", 
                                        w.addDlBtn(t.parentNode, "", t));
                                    }
                                }, {
                                    css: p.instagram.videoPostsAndReelNoCarousel,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = e.added, r = 0; t = a[r]; r++) "1" !== t.dataset.sfSkip && (t.dataset.sfSkip = "1", 
                                        w.addDlBtn(t.parentNode, "", t));
                                    }
                                }, {
                                    css: p.instagram.videoPostsCarouselCatalog,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = e.added, r = 0; t = a[r]; r++) "1" !== t.dataset.sfSkip && (t.dataset.sfSkip = "1", 
                                        w.addDlBtn(t.parentNode, "", t));
                                    }
                                }, {
                                    css: p.instagram.summary,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || t.querySelector("ul > li") || (t.dataset.sfSkip = "1", 
                                        w.addDlBtn(t.parentNode, "", t));
                                    }
                                }, {
                                    css: p.instagram.embed,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = 0; t = e.added[a]; a++) if (!(t.dataset.sfSkip > 0)) {
                                            t.dataset.sfSkip = "1";
                                            var r = (0, b.A)(t, ".Embed");
                                            r && (r.dataset.sfSkip = "1", w.addDlBtn(r, "embed", r));
                                        }
                                    }
                                }, {
                                    css: p.instagram.embed2,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = 0; t = e.added[a]; a++) if (!(t.dataset.sfSkip > 0)) {
                                            t.dataset.sfSkip = "1";
                                            var r = (0, b.A)(t, ".Embed");
                                            if (r && r.dataset.sfSkip > 0) {
                                                var n = document.querySelector(".Header");
                                                n && C(n);
                                            }
                                            w.addDlBtn(t.parentNode, "", t);
                                        }
                                    }
                                }, {
                                    css: p.instagram.embed3,
                                    is: "added",
                                    callback: e => {
                                        for (var t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                        w.addDlBtn(t, "embed", t));
                                    }
                                }, {
                                    css: `.${u.A.onRemoveClassName}`,
                                    is: "removed",
                                    callback: e => {
                                        for (var t, a = 0; t = e.removed[a]; a++) u.A.onRemoveListener(t);
                                    }
                                } ],
                                options: {
                                    subtree: !0,
                                    childList: !0,
                                    attributes: !0
                                }
                            });
                        }
                    }
                };
                function B(e) {
                    return e.stopPropagation(), i.A.isFirefox ? (e.preventDefault(), function(e, t, a) {
                        "sf--story-btn" === a ? (0, S.A)({
                            category: "download",
                            subcategory: "in",
                            event: "story"
                        }) : t.includes("mp4") ? (0, S.A)({
                            category: "download",
                            subcategory: "in",
                            event: "video"
                        }) : (0, S.A)({
                            category: "download",
                            subcategory: "in",
                            event: "photo"
                        });
                        var r = "ffInstagramDownloadMedia";
                        return (0, k.A)({
                            action: r,
                            downloadFileUrl: e,
                            filename: t
                        });
                    }(this.href, this.download)) : a.downloadOnClick(e, void 0, {
                        el: this
                    });
                }
                function C(e) {
                    for (var t, a = e.querySelectorAll("." + w.dlBtnClassName), r = 0; t = a[r]; r++) t.classList.remove(u.A.onRemoveClassName), 
                    t.parentNode.removeChild(t);
                }
            }), (function() {
                return !(0, l.A)() || !!/\/\/[^\/]+\.[^\/]+\/p\//.test(location.href);
            }));
        }
    }, a = {};
    function r(e) {
        var n = a[e];
        if (void 0 !== n) return n.exports;
        var s = a[e] = {
            id: e,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, r), s.exports;
    }
    r.m = t, e = [], r.O = (t, a, n, s) => {
        if (!a) {
            var o = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [a, n, s] = e[c], i = !0, d = 0; d < a.length; d++) (!1 & s || o >= s) && Object.keys(r.O).every((e => r.O[e](a[d]))) ? a.splice(d--, 1) : (i = !1, 
                s < o && (o = s));
                if (i) {
                    e.splice(c--, 1);
                    var l = n();
                    void 0 !== l && (t = l);
                }
            }
            return t;
        }
        s = s || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > s; c--) e[c] = e[c - 1];
        e[c] = [ a, n, s ];
    }, r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t;
    }, r.d = (e, t) => {
        for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        });
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.j = 83, (() => {
        r.b = document.baseURI || self.location.href;
        var e = {
            83: 0
        };
        r.O.j = t => 0 === e[t];
        var t = (t, a) => {
            var n, s, [o, i, d] = a, l = 0;
            if (o.some((t => 0 !== e[t]))) {
                for (n in i) r.o(i, n) && (r.m[n] = i[n]);
                if (d) var c = d(r);
            }
            for (t && t(a); l < o.length; l++) s = o[l], r.o(e, s) && e[s] && e[s][0](), e[s] = 0;
            return r.O(c);
        }, a = self.savefromContentScriptWebpackJsonp = self.savefromContentScriptWebpackJsonp || [];
        a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a));
    })(), r.nc = void 0;
    var n = r.O(void 0, [ 223 ], (() => r(3129)));
    n = r.O(n);
})();