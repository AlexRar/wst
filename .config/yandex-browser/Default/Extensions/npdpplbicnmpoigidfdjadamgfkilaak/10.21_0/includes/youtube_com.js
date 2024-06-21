(() => {
    "use strict";
    var e, t = {
        2683: (e, t, n) => {
            var r = n(467), o = n(3453), i = n(4756), a = n.n(i), s = n(3499), l = n(9620), d = n(9589), u = n(7736), c = n(717), p = n(8139), f = n(5563), g = n(3372), b = n(2525), h = n(8244), y = n(4733), m = n(6810), v = n(8233), k = n(9022), x = n(1460), A = n(7661), w = n(2944), S = n(188), C = n(4467), B = n(5751), M = n(9580), _ = n(4895);
            function I(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }))), n.push.apply(n, r);
                }
                return n;
            }
            var L = n(2894), O = (0, v.A)("getYoutubeLinks");
            function E(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return function(e, t, n) {
                    return (0, _.A)(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? I(Object(n), !0).forEach((function(t) {
                                (0, C.A)(e, t, n[t]);
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            }));
                        }
                        return e;
                    }({
                        action: "getYoutubeLinksFromConfig",
                        extVideoId: e,
                        url: t,
                        config: {
                            args: {
                                video_id: e
                            }
                        }
                    }, n)).then((e => {
                        if (!e.links) throw Error("getYoutubeLinksFromBackground. Links not found");
                        return e;
                    }));
                }(e, t, n).catch((t => (O.error("getVideoLinks error", t), function(e) {
                    return function(e) {
                        var t = "https://www.youtube.com/embed/" + encodeURIComponent(e);
                        return (0, B.A)({
                            url: t,
                            localXHR: s.A.isGM
                        }).then((e => {
                            var t = (0, M.A)(e.body, /INNERTUBE_CONTEXT":(.*?),/);
                            if (!t.length || !t[0].INNERTUBE_CONTEXT || !t[0].INNERTUBE_API_KEY) throw Error("INNERTUBE_CONTEXT not found");
                            return t[0];
                        }));
                    }(e).then((t => {
                        var n = "https://www.youtube.com/youtubei/v1/player?" + L.stringify({
                            key: t.INNERTUBE_API_KEY
                        });
                        return (0, B.A)({
                            url: n,
                            method: "POST",
                            localXHR: s.A.isGM,
                            json: !0,
                            data: JSON.stringify({
                                context: t.INNERTUBE_CONTEXT,
                                videoId: e
                            }),
                            headers: {
                                "Content-Type": "application/json",
                                "X-Youtube-Client-Name": t.INNERTUBE_CONTEXT_CLIENT_NAME || "55",
                                "X-Youtube-Client-Version": t.INNERTUBE_CONTEXT_CLIENT_VERSION || "1.20210331.1.0"
                            }
                        });
                    })).then((e => ({
                        videoInfo: {
                            player_response: e.body
                        }
                    })));
                }(e).then((t => {
                    var r = t.videoInfo;
                    return (0, _.A)({
                        action: "ytPrepareVideoInfo",
                        videoId: e,
                        checkSubtitles: n.checkSubtitles,
                        noDash: n.checkSubtitles,
                        config: r
                    });
                }))))).then((e => {
                    if (!e.links) throw new Error("Links not found");
                    return e;
                }));
            }
            var F = n(453), N = n(3948), R = n(9949);
            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }))), n.push.apply(n, r);
                }
                return n;
            }
            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        (0, C.A)(e, t, n[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    }));
                }
                return e;
            }
            var q = e => {
                try {
                    D(e);
                } catch (t) {
                    q({
                        type: "counter",
                        name: "monitoring_validator_error",
                        help: "Monitoring validator error",
                        labels: {
                            metric_name: e.name
                        }
                    });
                }
                e.name = j(e.name), s.A.sendMessage({
                    action: "sendAlternativeMonitoring",
                    params: T({}, e)
                });
            }, D = e => {
                if (void 0 === e.type) throw new Error("type is required.");
                if ("counter" !== e.type && "gauge" !== e.type && "histogram" !== e.type && "summary" !== e.type) throw new Error("type must be one of 'counter', 'gauge', 'histogram' or 'summary'.");
                if (void 0 === e.name) throw new Error("name is required.");
                if ("string" != typeof e.name) throw new Error("name must be a string.");
                if (void 0 === e.help) throw new Error("help is required.");
                if ("string" != typeof e.help) throw new Error("help must be a string.");
                if (e.labels && "object" != typeof e.labels) throw new Error("labels must be an object.");
                if (e.labels && Object.keys(e.labels).every((t => e.labels && "string" != typeof e.labels[t]))) throw new Error("labels must be an object of strings.");
                if (e.buckets && !Array.isArray(e.buckets)) throw new Error("buckets must be an array.");
                if (e.buckets && e.buckets.every((e => "number" != typeof e))) throw new Error("buckets must be an array of numbers.");
                if (e.duration && "number" != typeof e.duration) throw new Error("duration must be a number.");
            }, j = e => "web_events_" + e.replace(/[-\s]/g, "_"), V = (e, t) => {
                var n = setInterval((() => {
                    "complete" === document.readyState && (clearInterval(n), q({
                        type: "counter",
                        name: "search_element_by_selector",
                        help: "Search element by selector",
                        labels: {
                            browser: "opera",
                            site: "youtube",
                            page_type: e
                        }
                    }), t[e] && q({
                        type: "counter",
                        name: "element_by_selector_founded",
                        help: "Element by selector is founded",
                        labels: {
                            browser: "opera",
                            site: "youtube",
                            page_type: e,
                            selector: t[e]
                        }
                    }));
                }), 2e3);
            }, z = (0, v.A)("youtube_com");
            k.A.isSingle() && (0, d.Ys)("youtube", (function(e, t) {
                var n = N.A.getPageType(window.location.href), i = t.preferences.selectorsConfig;
                q({
                    type: "counter",
                    name: n,
                    help: "Youtube page type",
                    labels: {
                        browser: "opera",
                        site: "youtube"
                    }
                });
                var d = {};
                V(n, d), document.addEventListener("mutationwatcher:hrefchange", (() => {
                    n = N.A.getPageType(window.location.href), q({
                        type: "counter",
                        name: n,
                        help: "Youtube page type",
                        labels: {
                            browser: "opera",
                            site: "youtube"
                        }
                    }), V(n, d);
                }));
                var v = (0, l.A)(t), k = t.preferences, C = k.moduleYoutube ? 1 : 0, B = s.A.isChrome || s.A.isFirefox || s.A.isGM && s.A.isTM, M = (0, 
                u.A)(), _ = (k.experiments, "G-L0GP1RQSBJ");
                s.A.onMessage.addListener((function(t, n, r) {
                    if ("getModuleInfo" === t.action) {
                        if (t.url !== location.href) return;
                        return r({
                            state: C,
                            moduleName: e
                        });
                    }
                    if ("changeState" === t.action) {
                        if (e !== t.moduleName) return;
                        return T.changeState(t.state);
                    }
                    if ("updatePreferences" !== t.action) {
                        if (C) {
                            if ("updateLinks" === t.action) {
                                var o = T.getIdFromLocation();
                                o && j((function(e) {
                                    if (e && e.args && e.args.video_id === o) {
                                        var t = document.getElementById(T.buttonId);
                                        null !== t && t.parentNode.removeChild(t), T.responseCache = {}, T.video_id = e.args.video_id;
                                        var n = document.getElementById("watch7-subscription-container");
                                        T.appendDownloadButton(n);
                                    }
                                }));
                            }
                            "downloadPlaylist" === t.action && T.downloadPlaylist();
                        }
                    } else Object.assign(k, t.preferences);
                })), C && setTimeout((function() {
                    T.run();
                }));
                var I, L, O, P, T = {
                    swfargs: null,
                    video_id: "",
                    buttonId: "savefrom__yt_btn",
                    responseCache: {},
                    isMobile: !1,
                    mobileMenu: null,
                    currentMenu: null,
                    currentTutorial: null,
                    run: function() {
                        if (C = 1, M) {
                            var e = location.href.match(/\/embed\/([\w\-]+)/i);
                            (e = e && e[1]) || (M = !1);
                        }
                        return 0 === location.host.indexOf("m.") ? (T.isMobile = !0, void (x.A.isAvailable() && T.mobileMutationMode.enable())) : M ? (T.video_id = e, 
                        void T.appendFrameButton()) : void (x.A.isAvailable() && (T.videoFeed.injectStyle(), 
                        T.mutationMode.enable()));
                    },
                    changeState: function(e) {
                        if (C = e, !M && !T.isMobile) {
                            T.tutorial.hide(), T.hideCurrentMenu(), T.videoFeed.rmBtn(), T.mutationMode.stop();
                            var t = document.getElementById(T.buttonId);
                            t && t.parentNode.removeChild(t), e && T.run();
                        }
                    },
                    hideCurrentMenu: function() {
                        T.currentMenu && (T.currentMenu.hide(), T.currentMenu = null);
                    },
                    hideMobileMenu: function() {
                        T.mobileMenu && (T.mobileMenu.hide(), T.mobileMenu = null);
                    },
                    mutationMode: {
                        observer: null,
                        stop: function() {
                            T.mutationMode.observer && T.mutationMode.observer.stop(), [ "sfSkip" ].forEach((function(e) {
                                for (var t, n = (0, p.A)(e), r = document.querySelectorAll("[" + n + "]"), o = 0; t = r[o]; o++) t.removeAttribute(n);
                            }));
                        },
                        wrapVideoFeedOnImgHover: function() {
                            if (C && T.videoFeed.testUrl(location.href) && !(this.dataset.sfBtn > 0)) {
                                this.dataset.sfBtn = "1";
                                var e = JSON.parse(this.dataset.sfContext);
                                this.appendChild(T.videoFeed.getBtnNode(e.id, e.styleIndex));
                            }
                        },
                        wrapNewVideoFeedOnThumbnailHover: function() {
                            if (C && T.videoFeed.testUrl(location.href)) {
                                var e = T.mutationMode, t = this, r = t.href, o = r && (r.match(T.videoFeed.hrefIdPattern) || r.match(T.videoFeed.shortsPattern)), i = o && o[1];
                                if (i) {
                                    if (!t.querySelector(".sf-feed-btn")) {
                                        q({
                                            type: "counter",
                                            name: "append_button",
                                            help: "Append button",
                                            labels: {
                                                browser: "opera",
                                                site: "youtube",
                                                page_type: n
                                            }
                                        });
                                        try {
                                            var a = T.videoFeed.getBtnNode(i, 2);
                                            h.A.onRemoveEvent(a, (function() {
                                                this.parentNode || h.A.one(t, "mouseenter", e.wrapNewVideoFeedOnThumbnailHover);
                                            })), t.appendChild(a), q({
                                                type: "counter",
                                                name: "append_button_success",
                                                help: "Append button - success",
                                                labels: {
                                                    browser: "opera",
                                                    site: "youtube",
                                                    page_type: n
                                                }
                                            });
                                        } catch (e) {
                                            console.error("append button error");
                                        }
                                    }
                                } else q({
                                    type: "counter",
                                    name: "error_before_append_button",
                                    help: "Error before append button",
                                    labels: {
                                        browser: "opera",
                                        site: "youtube",
                                        page_type: n
                                    }
                                });
                                r = null, o = null, i = null, a = null;
                            }
                        },
                        enable: function() {
                            var e = this;
                            if (e.observer) return e.observer.start();
                            var t = t => {
                                if (T.videoFeed.testUrl(location.href)) for (var n, r = 0; n = t.added[r]; r++) if (!(n.dataset.sfSkip > 0)) {
                                    n.dataset.sfSkip = "1";
                                    var o = n.dataset.videoIds;
                                    if (o) {
                                        var i = n.parentNode, a = {};
                                        a.id = o, a.styleIndex = 1, i.dataset.sfContext = JSON.stringify(a), h.A.one(i, "mouseenter", e.wrapVideoFeedOnImgHover);
                                    }
                                }
                            }, r = (e, t) => {
                                for (var r, o = 0; r = e.added[o]; o++) r.dataset.sfSkip > 0 || (r.dataset.sfSkip = "1", 
                                d[n] || (d[n] = t), T.appendNewDownloadButton(r));
                            };
                            e.observer = new x.A({
                                queries: [ {
                                    css: i.youtube.subcriptionAdd,
                                    is: "added",
                                    callback: e => {
                                        for (var t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                        T.appendDownloadButton(t));
                                    }
                                }, {
                                    css: i.youtube.shortButtonsAdd,
                                    is: "added",
                                    callback: (e, t) => {
                                        var r = (0, o.A)(e.added, 1)[0];
                                        d[n] || (d[n] = t), T.appendShortDownloadButton(r, r.getAttribute("style"));
                                    }
                                }, {
                                    css: i.youtube.WLButtonAdd,
                                    is: "added",
                                    callback: t
                                }, {
                                    css: i.youtube.WLButtonAdd2,
                                    is: "added",
                                    callback: t
                                }, {
                                    css: i.youtube.thumbnailAdd,
                                    is: "added",
                                    callback: (t, r) => {
                                        if (T.videoFeed.testUrl(location.href)) for (var o, i = 0; o = t.added[i]; i++) o.dataset.sfSkip > 0 || (o.dataset.sfSkip = "1", 
                                        d[n] || (d[n] = r), h.A.one((0, b.A)(o, "a"), "mouseenter", e.wrapNewVideoFeedOnThumbnailHover));
                                    }
                                }, {
                                    css: i.youtube.butonsAdd,
                                    is: "added",
                                    callback: r
                                }, {
                                    css: i.youtube.buttonsAdd2,
                                    is: "added",
                                    callback: r
                                }, {
                                    css: "." + h.A.onRemoveClassName,
                                    is: "removed",
                                    callback: e => {
                                        for (var t, n = 0; t = e.removed[n]; n++) h.A.onRemoveListener(t);
                                    }
                                } ]
                            });
                        }
                    },
                    mobileMutationMode: {
                        observer: null,
                        stop: function() {
                            T.mutationMode.observer && T.mutationMode.observer.stop(), [ "sfSkip" ].forEach((function(e) {
                                for (var t, n = (0, p.A)(e), r = document.querySelectorAll("[" + n + "]"), o = 0; t = r[o]; o++) t.removeAttribute(n);
                            }));
                        },
                        enable: function() {
                            var e = this;
                            if (e.observer) return e.observer.start();
                            e.observer = new x.A({
                                queries: [ {
                                    css: i.youtube.oneElementAdd,
                                    is: "added",
                                    callback: e => {
                                        for (var t, n = 0; t = e.added[n]; n++) if (0 === t.id.indexOf("koya_elem_")) {
                                            for (var r = 0; r < 4 && t; ) t = t.parentNode, r++;
                                            if (t && 4 === r) {
                                                var o = 1, i = t.querySelector("div:nth-child(1)>h1:nth-child(1)");
                                                if (i || (i = null), !i && (0, g.A)(t, 'div > div > div[id^="koya_child_"]:last-child > div')) {
                                                    for (i = t, r = 0; r < 3 && i; ) i = i.parentNode, r++;
                                                    i && i.querySelector("div:nth-child(1)>h2:nth-child(1)") ? (t = t.parentNode, o = 2) : i = null;
                                                }
                                                i && (t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", T.appendMobileButton("", t, o)));
                                            }
                                        }
                                    }
                                }, {
                                    css: i.youtube.actionsAdd,
                                    is: "added",
                                    callback: e => {
                                        for (var t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                        T.appendMobileButton("", t, 3));
                                    }
                                }, {
                                    css: i.youtube.controlsAdd,
                                    is: "added",
                                    callback: e => {
                                        for (var t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                        T.appendMobileButton("", t, 4));
                                    }
                                }, {
                                    css: i.youtube.slimActionsAdd,
                                    is: "added",
                                    callback: e => {
                                        for (var t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                        T.appendNewMobileButton(t, 5));
                                    }
                                }, {
                                    css: "." + h.A.onRemoveClassName,
                                    is: "removed",
                                    callback: e => {
                                        for (var t, n = 0; t = e.removed[n]; n++) h.A.onRemoveListener(t);
                                    }
                                } ]
                            });
                        }
                    },
                    _onSelectBtnClick: (P = (0, r.A)(a().mark((function e(r, o) {
                        var i, l, d, u, c, p, f, g, b, y;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!(o.button > 0)) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                if (o.stopPropagation(), o.preventDefault(), !T.currentMenu || !T.currentMenu.isShow) {
                                    e.next = 7;
                                    break;
                                }
                                return T.hideCurrentMenu(), e.abrupt("return");

                              case 7:
                                if (q({
                                    type: "counter",
                                    name: "show_menu",
                                    help: "Show menu",
                                    labels: {
                                        browser: "opera",
                                        site: "youtube",
                                        page_type: n
                                    }
                                }), i = r.btnObj, l = i.videoId, d = T.currentMenu = v.popupMenu.quickInsert(i.node, s.A.i18n.getMessage("download") + " ...", "sf-popupMenu", {
                                    onShow: function() {
                                        h.A.onRemoveEvent(i.node, T.hideCurrentMenu);
                                    },
                                    onHide: function() {
                                        h.A.offRemoveEvent(i.node, T.hideCurrentMenu);
                                    },
                                    onItemClick: function(e, t) {
                                        T.onMenuItemClick(t, {
                                            isPageItem: 1,
                                            videoId: l
                                        });
                                    },
                                    offsetTop: i.popupMenu && i.popupMenu.offsetTop,
                                    offsetRight: i.popupMenu && i.popupMenu.offsetRight,
                                    parent: i.popupMenu && i.popupMenu.parent
                                }), u = function(e) {
                                    return e && e.length ? d.update(e, s.A.i18n.getMessage("partnersLinksOnly")) : d.update(s.A.i18n.getMessage("noLinksFound"));
                                }, l) {
                                    e.next = 14;
                                    break;
                                }
                                return e.abrupt("return", u());

                              case 14:
                                return q({
                                    type: "counter",
                                    name: "extract_links",
                                    help: "Extract links",
                                    labels: {
                                        browser: "opera",
                                        site: "youtube",
                                        page_type: n
                                    }
                                }), e.prev = 15, b = function(e) {
                                    return JSON.parse(JSON.stringify(e)).map(((t, n) => (t.href = t.url, t.title = t.filename, 
                                    t.func = e[n].func, delete t.url, delete t.filename, t)));
                                }, e.next = 19, R.P.createLinkExtractor("yt-video").extractLinks({
                                    mediaId: l,
                                    mediaUrl: location.href,
                                    noDash: !1,
                                    checkSubtitles: !0,
                                    initData: t
                                });

                              case 19:
                                if (c = e.sent, /^yt.+/.test(n) && (f = (p = c).menuLinks, g = p.multiLang, c = f), 
                                y = [], (f = (f = b(c)).filter((e => e.href))).length) {
                                    e.next = 27;
                                    break;
                                }
                                return u(y), e.abrupt("return");

                              case 27:
                                if (0 !== f.filter((e => ![ "ummy", "televzr" ].includes(e.format))).length) {
                                    e.next = 29;
                                    break;
                                }
                                return e.abrupt("return", u(y));

                              case 29:
                                f = f.map((e => (![ "360", "720" ].includes(e.quality) || "MP4" !== e.format || isNaN(parseInt(e.itag)) || e.func || (e.func = () => {
                                    z.log("track click downloadItem", e), s.A.sendMessage({
                                        action: "track",
                                        t: "event",
                                        tid: _,
                                        el: `mp4_${e.quality}`,
                                        ec: "download",
                                        ea: `mp4_${e.quality}`
                                    });
                                }), e))), g ? d.update(f, "", g) : d.update(f), q({
                                    type: "counter",
                                    name: "extract_links_success",
                                    help: "Extract links - success",
                                    labels: {
                                        browser: "opera",
                                        site: "youtube",
                                        page_type: n
                                    }
                                }), e.next = 38;
                                break;

                              case 34:
                                e.prev = 34, e.t0 = e.catch(15), z.error("get links for dropdown error", e.t0), 
                                u();

                              case 38:
                                i.isFirstMenuShow && (i.isFirstMenuShow = !1);

                              case 39:
                              case "end":
                                return e.stop();
                            }
                        }), e, null, [ [ 15, 34 ] ]);
                    }))), function(e, t) {
                        return P.apply(this, arguments);
                    }),
                    appendDownloadButton: function(e) {
                        var t = e.querySelector("#" + T.buttonId);
                        t && (t.parentNode && t.parentNode.removeChild(t), t = null);
                        var n = this, r = {}, o = n.getButtonUnderVideo(T._onSelectBtnClick.bind(null, r));
                        return r.btnObj = o, o.isFirstMenuShow = !0, o.setLoadingState(), e.appendChild(o.node), 
                        j((function(e) {
                            var t = null;
                            if (e && e.args && e.args.video_id && (t = e.args.video_id), t) {
                                o.node.dataset.sfVideoId = t, o.ytConfig = e, o.videoId = t, o.isPage = 1;
                                var r = [], i = function() {
                                    i = null, T.tutorial.show({
                                        target: o.node
                                    });
                                };
                                r.push((function() {
                                    return i && i();
                                })), o.onGetLinksArr = r, n.quickBtn.setValue(o);
                            }
                        }));
                    },
                    appendNewDownloadButton: function(e, t) {
                        var r = this, o = e.querySelector("#" + T.buttonId);
                        if (o) {
                            if (t) return;
                            o.classList.remove(h.A.onRemoveClassName), o.parentNode && o.parentNode.removeChild(o), 
                            o = null;
                        }
                        q({
                            type: "counter",
                            name: "append_button",
                            help: "Append button",
                            labels: {
                                browser: "opera",
                                site: "youtube",
                                page_type: n
                            }
                        });
                        try {
                            var i = new this.getNewButtonUnderVideo(T._onSelectBtnClick);
                            i.isFirstMenuShow = !0, i.setLoadingState();
                            var a = e.childNodes[2];
                            a || (a = e.firstChild), a ? (e.insertBefore(i.node, a), q({
                                type: "counter",
                                name: "append_button_success",
                                help: "Append button - success",
                                labels: {
                                    browser: "opera",
                                    site: "youtube",
                                    page_type: n
                                }
                            })) : (e.appendChild(i.node), q({
                                type: "counter",
                                name: "append_button_success",
                                help: "Append button - success",
                                labels: {
                                    browser: "opera",
                                    site: "youtube",
                                    page_type: n
                                }
                            }));
                        } catch (e) {
                            console.error("append button error");
                        }
                        var s = null, l = null;
                        return h.A.onRemoveEvent(i.node, (function() {
                            s && (s.abort(), s = null), l && (l.destroy(), l = null), e.parentNode && T.appendNewDownloadButton(e, !0);
                        })), i.popupMenu = {
                            offsetTop: -6,
                            offsetRight: -1,
                            parent: i.menuContainer
                        }, (s = v.waitNodesBySelector("#movie_player")).then((() => {
                            if ((0, w.A)(document.body, i.node)) return U().then((e => {
                                var t = e && e.args && e.args.video_id;
                                if (t) {
                                    i.node.dataset.sfVideoId = t, i.ytConfig = e, i.videoId = t, i.isPage = 1;
                                    var n = [];
                                    i.onGetLinksArr = n, n.push((function() {
                                        T.tutorial.show({
                                            target: i.selectBtn,
                                            parent: i.menuContainer,
                                            btnLeftOffset: 12,
                                            btnTopOffset: -6
                                        });
                                    })), r.quickBtn.setValue(i);
                                } else z.debug("videoId is not found!");
                            }));
                            z.debug("Btn not exists");
                        })).catch((e => {
                            "ABORTED" !== e.message && z.error("waitNodesBySelector error", e);
                        }));
                    },
                    appendShortDownloadButton: function(e, t, r) {
                        var o = this, i = e.closest("#player-container");
                        i || q({
                            type: "counter",
                            name: "error_before_append_button",
                            help: "Error before append button",
                            labels: {
                                browser: "opera",
                                site: "youtube",
                                page_type: n
                            }
                        });
                        var a = null == i ? void 0 : i.closest("ytd-reel-video-renderer");
                        if (a && !a.querySelector("#savefrom__yt_btn")) {
                            var s = i.querySelector("#" + T.buttonId);
                            if (s) {
                                if (r) return;
                                s.classList.remove(h.A.onRemoveClassName), s.parentNode && s.parentNode.removeChild(s), 
                                s = null;
                            }
                            q({
                                type: "counter",
                                name: "append_button",
                                help: "Append button",
                                labels: {
                                    browser: "opera",
                                    site: "youtube",
                                    page_type: n
                                }
                            });
                            try {
                                a.querySelector(".overlay.style-scope.ytd-reel-video-renderer").style.overflow = "visible";
                                var l = new this.getShortButton(T._onSelectBtnClick);
                                l.isFirstMenuShow = !0, l.setLoadingState(), a.querySelector("#like-button").append(l.node), 
                                q({
                                    type: "counter",
                                    name: "append_button_success",
                                    help: "Append button - success",
                                    labels: {
                                        browser: "opera",
                                        site: "youtube",
                                        page_type: n
                                    }
                                });
                            } catch (e) {
                                console.error("append button error");
                            }
                            var d = null, u = null;
                            return h.A.onRemoveEvent(l.node, (function() {
                                d && (d.abort(), d = null), u && (u.destroy(), u = null), likeButton.parentNode && T.appendShortDownloadButton(likeButton, t, !0);
                            })), l.popupMenu = {
                                offsetTop: -6,
                                offsetRight: -1,
                                parent: l.menuContainer
                            }, (d = v.waitNodesBySelector("#movie_player")).then((() => {
                                if ((0, w.A)(document.body, l.node)) return U(t, !0).then((e => {
                                    var t = e && e.args && e.args.video_id;
                                    if (t) {
                                        l.node.dataset.sfVideoId = t, l.ytConfig = e, l.videoId = t, l.isPage = 1;
                                        var n = [];
                                        l.onGetLinksArr = n, n.push((function() {
                                            T.tutorial.show({
                                                target: l.selectBtn,
                                                parent: l.menuContainer,
                                                btnLeftOffset: 12,
                                                btnTopOffset: -6
                                            });
                                        })), o.quickBtn.setValue(l);
                                    } else z.debug("videoId is not found!");
                                }));
                                z.debug("Btn not exists");
                            })).catch((e => {
                                "ABORTED" !== e.message && z.error("waitNodesBySelector error", e);
                            }));
                        }
                    },
                    getIdFromLocation: function(e) {
                        e || (e = document.location.href);
                        var t = e.match(/\/watch\?(?:.+&)?v=([\w\-]+)/i);
                        return (t = t && t[1]) || null;
                    },
                    getIdFromBackgroundImageUrl(e) {
                        var t = /https:\/\/i.ytimg.com\/vi\/(.*?)\//.exec(e), n = (0, o.A)(t, 2)[1];
                        return n || null;
                    },
                    getIdFromShortsLocation() {
                        var e = /shorts\/(.*?)$/.exec(location.href)[1];
                        return e || null;
                    },
                    appendNewMobileButton(e, o) {
                        var i = y.A.create("div", {
                            id: T.buttonId,
                            style: {
                                flex: "1 1",
                                minWidth: 0,
                                overflow: "hidden",
                                margin: "-0.7em -0.57em",
                                marginLeft: "0.7em",
                                marginRight: 0,
                                display: "flex"
                            },
                            append: [ y.A.create("button", {
                                style: {
                                    padding: ".7em .57em"
                                },
                                append: [ y.A.create("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    },
                                    append: [ y.A.create("div", {
                                        style: {
                                            display: "block",
                                            height: "24px",
                                            width: "24px",
                                            background: "url(" + v.svg.getSrc("download", "#757575") + ") center no-repeat",
                                            backgroundSize: "20px"
                                        }
                                    }), y.A.create("div", {
                                        style: {
                                            marginTop: "7px",
                                            alignSelf: "center",
                                            minHeight: "1em",
                                            lineHeight: "1em"
                                        },
                                        text: s.A.i18n.getMessage("download")
                                    }) ]
                                }) ],
                                on: [ "click", function() {
                                    var e = (0, r.A)(a().mark((function e(r) {
                                        var o, i, l, d, u, c, p;
                                        return a().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return r.preventDefault(), T.hideMobileMenu(), o = T.getIdFromLocation(), i = T.mobileMenu = v.mobileLightBox.show(s.A.i18n.getMessage("download") + " ..."), 
                                                q({
                                                    type: "counter",
                                                    name: "extract_links",
                                                    help: "Extract links",
                                                    labels: {
                                                        browser: "opera",
                                                        site: "youtube",
                                                        page_type: n
                                                    }
                                                }), e.prev = 5, c = function(e) {
                                                    return JSON.parse(JSON.stringify(e)).map(((t, n) => (t.href = t.url, t.title = t.filename, 
                                                    t.func = e[n].func, delete t.url, delete t.filename, t)));
                                                }, e.next = 9, R.P.createLinkExtractor(n).extractLinks({
                                                    mediaId: o,
                                                    mediaUrl: location.href,
                                                    noDash: !0,
                                                    checkSubtitles: !0,
                                                    initData: t
                                                });

                                              case 9:
                                                l = e.sent, /^yt.+/.test(n) && (u = (d = l).menuLinks, d.multiLang, l = u), p = c(l), 
                                                i.update(p), q({
                                                    type: "counter",
                                                    name: "extract_links_success",
                                                    help: "Extract links - success",
                                                    labels: {
                                                        browser: "opera",
                                                        site: "youtube",
                                                        page_type: n
                                                    }
                                                }), z.log("lightbox update"), e.next = 21;
                                                break;

                                              case 17:
                                                e.prev = 17, e.t0 = e.catch(5), i.update(void 0), z.error("getLinks for mobile error", e.t0);

                                              case 21:
                                              case "end":
                                                return e.stop();
                                            }
                                        }), e, null, [ [ 5, 17 ] ]);
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }() ]
                            }) ]
                        });
                        h.A.onRemoveEvent(i, (function() {
                            T.hideMobileMenu(), document.body.contains(e) && (e.dataset.sfSkip = "0", T.mobileMutationMode.observer.trigger(e));
                        })), e.appendChild(i);
                    },
                    appendMobileButton: function(e, t, n) {
                        var r = {};
                        3 === n ? Object.assign(r, {
                            display: "flex",
                            height: "24px",
                            background: "url(" + v.svg.getSrc("download", "#757575") + ") center no-repeat",
                            padding: ".7em .57em",
                            marginLeft: ".7em"
                        }) : 4 === n ? Object.assign(r, {
                            display: "flex",
                            width: "24px",
                            background: "url(" + v.svg.getSrc("download", "#eee") + ") center no-repeat",
                            padding: ".7em .57em",
                            marginLeft: ".7em"
                        }) : 1 === n ? Object.assign(r, {
                            display: "inline-block",
                            height: "28px",
                            width: "18px",
                            marginRight: "20px",
                            background: "url(" + v.svg.getSrc("download", "#757575") + ") center no-repeat",
                            cssFloat: "right"
                        }) : 2 === n && Object.assign(r, {
                            display: "inline-block",
                            height: "38px",
                            width: "18px",
                            marginRight: "12px",
                            background: "url(" + v.svg.getSrc("download", "#757575") + ") center no-repeat",
                            backgroundSize: "20px",
                            cssFloat: "right"
                        });
                        var o = y.A.create("div", {
                            data: {
                                id: e
                            },
                            style: r,
                            on: [ "click", function() {
                                var e = this.dataset.id || T.getIdFromLocation();
                                T.hideMobileMenu();
                                var t = T.mobileMenu = v.mobileLightBox.show(s.A.i18n.getMessage("download") + " ..."), n = function(e) {
                                    var n = null;
                                    e && e.links && (n = v.popupMenu.prepareLinks.youtube(e.links, e.title || T.getTitleModify())), 
                                    t.update(n);
                                }, r = T.responseCache[e];
                                if (r) return n(r);
                                E(e, location.href).then((e => {
                                    z.info("getLinks for mPlaylist"), n(e);
                                }), (e => {
                                    z.error("getLinks for mPlaylist error", e), n(void 0);
                                }));
                            } ]
                        });
                        h.A.onRemoveEvent(o, (function() {
                            T.hideMobileMenu(), 3 !== n && 4 !== n || document.body.contains(t) && (t.dataset.sfSkip = "0", 
                            T.mobileMutationMode.observer.trigger(t));
                        }));
                        var i = 'div[id^="koya_child_"]:nth-child(1) > a[href="#"] > span[id^="koya_elem_"]', a = t.lastElementChild;
                        a.querySelector(i) || (a = a.previousElementSibling).querySelector(i) || (a = null), 
                        a && (a = a.nextElementSibling), a ? a.parentNode.insertBefore(o, a) : t.appendChild(o);
                    },
                    getNewButtonUnderVideo: function(e) {
                        var t = this, r = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
                        this.node = y.A.create("div", {
                            id: T.buttonId,
                            style: {
                                display: [ "-ms-flexbox", "-webkit-flex", "flex" ],
                                marginLeft: "8px",
                                MsFlexDirection: "row",
                                WebkitFlexDirection: "row",
                                flexDirection: "row",
                                MsFlexAlign: "center",
                                WebkitAlignItems: "center",
                                alignItems: "center",
                                MsFlexPack: "center",
                                WebkitJustifyContent: "center",
                                justifyContent: "center",
                                padding: "0 8px 0 0"
                            },
                            append: [ this.menuContainer = y.A.create("div", {
                                style: {
                                    position: "relative"
                                }
                            }), this.quickBtn = y.A.create("a", {
                                class: "sf-quick-dl-btn",
                                on: [ [ "click", () => {
                                    q({
                                        type: "counter",
                                        name: "click_download_button",
                                        help: "Click download button",
                                        labels: {
                                            browser: "opera",
                                            site: "youtube",
                                            page_type: n
                                        }
                                    }), z.log("track click greenBtn"), s.A.sendMessage({
                                        action: "track",
                                        t: "event",
                                        tid: _,
                                        ec: "menu",
                                        el: "menu",
                                        ea: "download"
                                    });
                                } ], [ "mouseover", e => {
                                    if (r) {
                                        if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void (0, F.D)(this.quickBtn, {
                                            content: s.A.i18n.getMessage("downloadTitle"),
                                            defaultWidth: 400,
                                            defaultHeight: 60
                                        });
                                        (0, F.w)(this.quickBtn, {
                                            content: s.A.i18n.getMessage("downloadTitle"),
                                            defaultWidth: 400,
                                            defaultHeight: 60
                                        });
                                    }
                                } ] ],
                                style: {
                                    display: "inline-block",
                                    fontSize: "inherit",
                                    height: "23px",
                                    border: "1px solid #00B75A",
                                    borderRadius: "3px",
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                    paddingLeft: "28px",
                                    cursor: "pointer",
                                    verticalAlign: "middle",
                                    position: "relative",
                                    lineHeight: "22px",
                                    textDecoration: "none",
                                    zIndex: 1,
                                    color: "#fff"
                                },
                                append: [ y.A.create("i", {
                                    style: {
                                        position: "absolute",
                                        display: "inline-block",
                                        left: "6px",
                                        top: "3px",
                                        backgroundImage: "url(" + v.svg.getSrc("download", "#ffffff") + ")",
                                        backgroundSize: "12px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        width: "16px",
                                        height: "16px"
                                    }
                                }), y.A.create("span", {
                                    class: "sf-btn-name",
                                    style: {
                                        paddingRight: "12px"
                                    },
                                    text: s.A.i18n.getMessage("download")
                                }) ]
                            }), this.quickBtnStyle = y.A.create("style", {
                                text: (0, f.A)({
                                    selector: "#" + T.buttonId,
                                    style: {
                                        fontFamily: "Roboto, Arial, sans-serif",
                                        fontSize: "13px"
                                    },
                                    append: [ {
                                        "button::-moz-focus-inner": {
                                            padding: 0,
                                            margin: 0
                                        },
                                        ".sf-quick-dl-btn": {
                                            backgroundColor: "#00B75A"
                                        },
                                        ".sf-quick-dl-btn:hover": {
                                            backgroundColor: "rgb(0, 163, 80)"
                                        },
                                        ".sf-quick-dl-btn:active": {
                                            backgroundColor: "rgb(0, 151, 74)"
                                        }
                                    }, {
                                        media: "@media screen and (max-width: 1293px), screen and (max-height: 768px)",
                                        append: {
                                            ".sf-quick-dl-btn .sf-btn-name": {
                                                display: "none"
                                            }
                                        }
                                    } ]
                                })
                            }), this.selectBtn = y.A.create("button", {
                                style: {
                                    position: "relative",
                                    display: "inline-block",
                                    marginLeft: "-2px",
                                    fontSize: "inherit",
                                    height: "24px",
                                    paddingRight: "21px",
                                    backgroundColor: "#F8F8F8",
                                    border: "1px solid #CCCCCC",
                                    borderRadius: "3px",
                                    borderTopLeftRadius: "0",
                                    borderBottomLeftRadius: "0",
                                    cursor: "pointer",
                                    color: "#9B9B9B",
                                    zIndex: 0,
                                    verticalAlign: "middle",
                                    boxSizing: "border-box",
                                    lineHeight: s.A.isSafari ? "21px" : "22px"
                                },
                                on: [ "mousedown", function(n) {
                                    return e.call(this, {
                                        btnObj: t
                                    }, n);
                                } ],
                                append: [ this.selectBtnIcon = y.A.create("i", {
                                    style: {
                                        position: "absolute",
                                        display: "inline-block",
                                        top: "9px",
                                        right: "6px",
                                        border: "5px solid #868282",
                                        borderBottomColor: "transparent",
                                        borderLeftColor: "transparent",
                                        borderRightColor: "transparent"
                                    }
                                }) ]
                            }) ]
                        }), this.node.classList.add(h.A.onRemoveClassName);
                        var o = function(e) {
                            var n = "object" == typeof e ? e : document.createTextNode(e);
                            n.style.marginLeft = 0;
                            var r = t.selectBtn.firstChild;
                            r === t.selectBtnIcon ? t.selectBtn.insertBefore(n, r) : t.selectBtn.replaceChild(n, r);
                        };
                        this.setQuality = o, this.setLoadingState = function() {
                            o(y.A.create("img", {
                                src: v.svg.getSrc("info", "#333333"),
                                style: {
                                    width: "14px",
                                    height: "14px",
                                    marginLeft: "6px",
                                    verticalAlign: "middle",
                                    top: s.A.isSafari ? "-3px" : "-1px",
                                    position: "relative"
                                }
                            }));
                        };
                    },
                    getButtonUnderVideo: function(e) {
                        var t, n, r = null, o = y.A.create("div", {
                            id: T.buttonId,
                            style: {
                                display: "inline-block",
                                marginLeft: "10px",
                                verticalAlign: "middle"
                            },
                            append: [ n = y.A.create("a", {
                                class: "sf-quick-dl-btn",
                                style: {
                                    display: "inline-block",
                                    fontSize: "inherit",
                                    height: "22px",
                                    border: "1px solid #00B75A",
                                    borderRadius: "3px",
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                    paddingLeft: "28px",
                                    cursor: "pointer",
                                    verticalAlign: "middle",
                                    position: "relative",
                                    lineHeight: "22px",
                                    textDecoration: "none",
                                    zIndex: 1,
                                    color: "#fff"
                                },
                                href: "#",
                                append: [ y.A.create("i", {
                                    style: {
                                        position: "absolute",
                                        display: "inline-block",
                                        left: "6px",
                                        top: "3px",
                                        backgroundImage: "url(" + v.svg.getSrc("download", "#ffffff") + ")",
                                        backgroundSize: "12px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        width: "16px",
                                        height: "16px"
                                    }
                                }), y.A.create("span", {
                                    class: "sf-btn-name",
                                    style: {
                                        paddingRight: "12px"
                                    },
                                    text: s.A.i18n.getMessage("download")
                                }) ]
                            }), y.A.create("style", {
                                text: (0, f.A)({
                                    selector: "#" + T.buttonId,
                                    append: [ {
                                        "button::-moz-focus-inner": {
                                            padding: 0,
                                            margin: 0
                                        },
                                        ".sf-quick-dl-btn": {
                                            backgroundColor: "#00B75A"
                                        },
                                        ".sf-quick-dl-btn:hover": {
                                            backgroundColor: "rgb(0, 163, 80)"
                                        },
                                        ".sf-quick-dl-btn:active": {
                                            backgroundColor: "rgb(0, 151, 74)"
                                        }
                                    }, {
                                        media: "@media screen and (max-width: 1293px)",
                                        append: {
                                            ".sf-quick-dl-btn .sf-btn-name": {
                                                display: "none"
                                            }
                                        }
                                    } ]
                                })
                            }), r = y.A.create("button", {
                                style: {
                                    position: "relative",
                                    display: "inline-block",
                                    marginLeft: "-2px",
                                    fontSize: "inherit",
                                    height: "24px",
                                    paddingRight: "21px",
                                    backgroundColor: "#F8F8F8",
                                    border: "1px solid #CCCCCC",
                                    borderRadius: "3px",
                                    borderTopLeftRadius: "0",
                                    borderBottomLeftRadius: "0",
                                    cursor: "pointer",
                                    color: "#9B9B9B",
                                    zIndex: 0,
                                    verticalAlign: "middle",
                                    boxSizing: "border-box",
                                    lineHeight: "22px"
                                },
                                on: [ "mousedown", e ],
                                append: [ t = y.A.create("i", {
                                    style: {
                                        position: "absolute",
                                        display: "inline-block",
                                        top: "9px",
                                        right: "6px",
                                        border: "5px solid #868282",
                                        borderBottomColor: "transparent",
                                        borderLeftColor: "transparent",
                                        borderRightColor: "transparent"
                                    }
                                }) ]
                            }) ]
                        });
                        o.classList.add(h.A.onRemoveClassName);
                        var i = function(e) {
                            var n = "object" == typeof e ? e : document.createTextNode(e), o = r.firstChild;
                            o === t ? r.insertBefore(n, o) : r.replaceChild(n, o);
                        };
                        return {
                            node: o,
                            selectBtn: r,
                            quickBtn: n,
                            setQuality: i,
                            setLoadingState: function() {
                                i(y.A.create("img", {
                                    src: v.svg.getSrc("info", "#333333"),
                                    style: {
                                        width: "14px",
                                        height: "14px",
                                        marginLeft: "6px",
                                        verticalAlign: "middle",
                                        top: "-1px",
                                        position: "relative"
                                    }
                                }));
                            }
                        };
                    },
                    getShortButton: function(e) {
                        var t = this, r = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
                        this.node = y.A.create("div", {
                            id: T.buttonId,
                            style: {
                                display: [ "-ms-flexbox", "-webkit-flex", "flex" ],
                                marginLeft: "8px",
                                MsFlexDirection: "column",
                                WebkitFlexDirection: "column",
                                flexDirection: "column",
                                MsFlexAlign: "center",
                                WebkitAlignItems: "center",
                                alignItems: "center",
                                MsFlexPack: "center",
                                WebkitJustifyContent: "center",
                                justifyContent: "center",
                                padding: "0 8px 0 0",
                                marginTop: "16px"
                            },
                            append: [ this.menuContainer = y.A.create("div", {
                                style: {
                                    position: "relative"
                                }
                            }), this.quickBtn = y.A.create("a", {
                                class: "sf-quick-dl-btn",
                                on: [ [ "click", () => {
                                    q({
                                        type: "counter",
                                        name: "click_download_button",
                                        help: "Click download button",
                                        labels: {
                                            browser: "opera",
                                            site: "youtube",
                                            page_type: n
                                        }
                                    }), z.log("track click greenBtn"), s.A.sendMessage({
                                        action: "track",
                                        t: "event",
                                        tid: _,
                                        ec: "menu",
                                        el: "menu",
                                        ea: "download"
                                    });
                                } ], [ "mouseover", e => {
                                    if (r) {
                                        if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void (0, F.D)(this.quickBtn, {
                                            content: s.A.i18n.getMessage("downloadTitle"),
                                            defaultWidth: 400,
                                            defaultHeight: 60
                                        });
                                        (0, F.w)(this.quickBtn, {
                                            content: s.A.i18n.getMessage("downloadTitle"),
                                            defaultWidth: 400,
                                            defaultHeight: 60
                                        });
                                    }
                                } ] ],
                                style: {
                                    display: "inline-block",
                                    fontSize: "inherit",
                                    height: "22px",
                                    border: "1px solid #606060",
                                    borderRadius: "3px",
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                    paddingLeft: "28px",
                                    marginBottom: "10px",
                                    cursor: "pointer",
                                    verticalAlign: "middle",
                                    position: "relative",
                                    lineHeight: "22px",
                                    textDecoration: "none",
                                    zIndex: 1,
                                    color: "#fff"
                                },
                                append: [ y.A.create("i", {
                                    style: {
                                        position: "absolute",
                                        display: "inline-block",
                                        left: "6px",
                                        top: "3px",
                                        backgroundImage: "url(" + v.svg.getSrc("download", "#ffffff") + ")",
                                        backgroundSize: "12px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        width: "16px",
                                        height: "16px"
                                    }
                                }) ]
                            }), this.quickBtnStyle = y.A.create("style", {
                                text: (0, f.A)({
                                    selector: "#" + T.buttonId,
                                    style: {
                                        fontFamily: "Roboto, Arial, sans-serif",
                                        fontSize: "13px"
                                    },
                                    append: [ {
                                        "button::-moz-focus-inner": {
                                            padding: 0,
                                            margin: 0
                                        },
                                        ".sf-quick-dl-btn": {
                                            border: "1px solid #606060",
                                            backgroundColor: "#606060"
                                        },
                                        ".sf-quick-dl-btn:hover": {
                                            border: "1px solid #00B75A",
                                            backgroundColor: "#00B75A"
                                        },
                                        ".sf-quick-dl-btn:active": {
                                            backgroundColor: "rgb(0, 151, 74)"
                                        }
                                    } ]
                                })
                            }), this.selectBtn = y.A.create("button", {
                                style: {
                                    position: "relative",
                                    display: "inline-block",
                                    marginLeft: "-2px",
                                    fontSize: "inherit",
                                    height: "24px",
                                    paddingRight: "21px",
                                    backgroundColor: "#F8F8F8",
                                    border: "1px solid #CCCCCC",
                                    borderRadius: "3px",
                                    borderTopLeftRadius: "0",
                                    borderBottomLeftRadius: "0",
                                    cursor: "pointer",
                                    color: "#9B9B9B",
                                    zIndex: 0,
                                    verticalAlign: "middle",
                                    boxSizing: "border-box",
                                    lineHeight: s.A.isSafari ? "21px" : "22px"
                                },
                                on: [ "mousedown", function(n) {
                                    return e.call(this, {
                                        btnObj: t
                                    }, n);
                                } ],
                                append: [ this.selectBtnIcon = y.A.create("i", {
                                    style: {
                                        position: "absolute",
                                        display: "inline-block",
                                        top: "9px",
                                        right: "6px",
                                        border: "5px solid #868282",
                                        borderBottomColor: "transparent",
                                        borderLeftColor: "transparent",
                                        borderRightColor: "transparent"
                                    }
                                }) ]
                            }) ]
                        }), this.node.classList.add(h.A.onRemoveClassName);
                        var o = function(e) {
                            var n = "object" == typeof e ? e : document.createTextNode(e);
                            n.style.marginLeft = 0;
                            var r = t.selectBtn.firstChild;
                            r === t.selectBtnIcon ? t.selectBtn.insertBefore(n, r) : t.selectBtn.replaceChild(n, r);
                        };
                        this.setQuality = o, this.setLoadingState = function() {
                            o(y.A.create("img", {
                                src: v.svg.getSrc("info", "#333333"),
                                style: {
                                    width: "14px",
                                    height: "14px",
                                    marginLeft: "6px",
                                    verticalAlign: "middle",
                                    top: s.A.isSafari ? "-3px" : "-1px",
                                    position: "relative"
                                }
                            }));
                        };
                    },
                    titleChangeObserver: null,
                    playerStateChangeObserver: null,
                    observeFrameVideoChange: function(e) {
                        var t = this;
                        if (x.A.isAvailable()) {
                            var n = document.querySelector(".ytp-title-link");
                            n && (this.titleChangeObserver && this.titleChangeObserver.stop(), this.titleChangeObserver = new A.A({
                                attrs: [ {
                                    name: "href",
                                    callback: function(n) {
                                        var r = n.oldValue && T.getIdFromLocation(n.oldValue), o = n.value && T.getIdFromLocation(n.value);
                                        r !== o && T.video_id !== o && (T.video_id = o, T.frameQualityDetected && (e.link = null, 
                                        e.setLoadingState(), t.quickBtn.setValue(e)));
                                    }
                                } ],
                                target: n
                            }));
                            var r = document.querySelector(".html5-video-player");
                            if (r) {
                                var o = null, i = /(\s|^)ytp-autohide(\s|$)/;
                                this.playerStateChangeObserver && this.playerStateChangeObserver.stop(), this.playerStateChangeObserver = new A.A({
                                    attrs: [ {
                                        name: "class",
                                        callback(t) {
                                            var n = i.test(t.oldValue), r = i.test(t.value);
                                            !n && r ? (clearTimeout(o), o = setTimeout((function() {
                                                e.lockHide || e.container.classList.add("sf-hide-ui");
                                            }), 100)) : n && !r && (clearTimeout(o), e.container.classList.remove("sf-hide-ui"));
                                        }
                                    } ],
                                    target: r
                                });
                            }
                        }
                    },
                    appendFrameButton: function() {
                        if (!(document.body.clientWidth < 220 || document.body.clientHeight < 150)) {
                            var e = T, t = !0, n = v.frameMenu.getBtn({
                                btnId: "sfYtFrameBtn",
                                containerStyle: {
                                    top: "40px",
                                    right: "20px"
                                },
                                on: [ [ "mousedown", function(t) {
                                    t.stopPropagation(), 2 === t.button && (e.onFrameMouseEnterBind && (h.A.off(document.body, "mouseenter", e.onFrameMouseEnterBind), 
                                    h.A.off(document.body, "mouseleave", e.onFrameMouseLeaveBind), e.onFrameMouseEnterBind = null, 
                                    e.onFrameMouseLeaveBind = null), e.titleChangeObserver && (e.titleChangeObserver.stop(), 
                                    e.titleChangeObserver = null), e.playerStateChangeObserver && (e.playerStateChangeObserver.stop(), 
                                    e.playerStateChangeObserver = null), e.hideCurrentMenu(), n.container.parentNode && n.container.parentNode.removeChild(n.container));
                                } ] ],
                                onSelectBtn: [ "mousedown", function(r) {
                                    if (!(r.button > 0)) {
                                        r.stopPropagation(), r.preventDefault();
                                        var o = e.video_id;
                                        if (e.currentMenu) T.hideCurrentMenu(); else {
                                            var i = e.currentMenu = v.frameMenu.getMenu(this.parentNode, s.A.i18n.getMessage("download") + " ...", "sf-popupMenu", {
                                                container: n.container,
                                                onShow: function() {
                                                    n.node.classList.add("sf-over"), t || (t = !1);
                                                },
                                                onHide: function() {
                                                    e.currentMenu = null, n.node.classList.remove("sf-over");
                                                },
                                                onItemClick: function(e, t) {
                                                    T.onMenuItemClick(t, {
                                                        isFrameItem: 1,
                                                        videoId: o
                                                    });
                                                }
                                            }), a = function(e) {
                                                var t = v.popupMenu.prepareLinks.youtube(e.links, e.title, e.subtitles, {
                                                    ummyVid: 136
                                                });
                                                i.update(t);
                                            }, l = e.responseCache[o];
                                            if (l) return a(l);
                                            E(o, location.href, {
                                                checkSubtitles: !0
                                            }).then((t => {
                                                e.responseCache[o] = t, z.log("Links for frame received"), a(t);
                                            }), (e => {
                                                z.error("Get links for frame error", e), i.update(s.A.i18n.getMessage("noLinksFound"));
                                            }));
                                        }
                                    }
                                } ]
                            });
                            n.setLoadingState(), n.container = y.A.create("div", {
                                class: "sf-btn-ctr",
                                append: n.node
                            }), document.body.appendChild(n.container);
                            h.A.on(n.node, "mouseenter", (function t() {
                                h.A.off(n.node, "mouseenter", t), e.frameQualityDetected || (e.frameQualityDetected = !0, 
                                e.quickBtn.setValue(n));
                            })), h.A.one(document, "mouseenter", (function() {
                                e.onFrameMouseEnter(n);
                            })), h.A.on(n.container, "mouseenter", (function() {
                                n.lockHide = !0;
                            })), h.A.on(n.container, "mouseleave", (function() {
                                n.lockHide = !1;
                            })), n.node.appendChild(y.A.create("style", {
                                text: (0, f.A)([ {
                                    selector: [ "body:hover .sf-btn-ctr:not(.sf-hide-ui) #sfYtFrameBtn", "body:hover .sf-btn-ctr:not(.sf-hide-ui) .sf-popupMenu" ],
                                    style: {
                                        display: "block"
                                    }
                                } ])
                            })), this.onFrameMouseEnterBind && (h.A.off(document.body, "mouseenter", this.onFrameMouseEnterBind), 
                            h.A.off(document.body, "mouseleave", this.onFrameMouseLeaveBind)), this.onFrameMouseEnterBind = this.onFrameMouseEnter.bind(this, n), 
                            this.onFrameMouseLeaveBind = this.onFrameMouseLeave.bind(this, n), h.A.on(document.body, "mouseenter", this.onFrameMouseEnterBind), 
                            h.A.on(document.body, "mouseleave", this.onFrameMouseLeaveBind), this.observeFrameVideoChange(n);
                        }
                    },
                    frameQualityDetected: !1,
                    frameQualityTimer: null,
                    onFrameMouseEnterBind: null,
                    onFrameMouseLeaveBind: null,
                    onFrameMouseEnter: function(e) {
                        var t = this;
                        this.frameQualityDetected || (clearTimeout(this.frameQualityTimer), this.frameQualityTimer = setTimeout((function() {
                            t.frameQualityDetected || (t.frameQualityDetected = !0, t.quickBtn.setValue(e));
                        }), 500));
                    },
                    onFrameMouseLeave: function(e) {
                        this.frameQualityDetected || clearTimeout(this.frameQualityTimer);
                    },
                    getTitle: function() {
                        var e = document.getElementById("watch-headline-title");
                        if (e) return e.textContent;
                        for (var t = document.getElementsByTagName("meta"), n = 0; n < t.length; n++) {
                            var r = t[n].getAttribute("name");
                            if (r && "title" == r.toLowerCase()) return t[n].getAttribute("content");
                        }
                        return M || T.isMobile ? document.title.replace(/ - YouTube$/, "") : "";
                    },
                    getTitleModify: function() {
                        var e = T.getTitle();
                        return e && (e = D(e)), e;
                    },
                    onMenuItemClick: function(e, t) {
                        t = t || {}, e.format || s.A.sendMessage({
                            action: "track",
                            t: "event",
                            ec: "youtube",
                            ea: "new_format",
                            el: e.itag + " " + t.videoId
                        });
                    },
                    onDlBtnClick: function(e, t, n) {
                        if (n = n || {}, !t) return e.preventDefault(), e.stopPropagation(), void h.A.trigger(this.parentNode.lastChild, "mousedown");
                        T.onMenuItemClick(t, n), "ummy" !== t.quality && "muxer" !== t.itag && t.forceDownload && v.downloadOnClick(e);
                    },
                    quickBtn: {
                        setValueInSelectBtn: function(e, t) {
                            "object" != typeof t && (t = document.createTextNode(t));
                            var n = e.selectBtn.firstChild;
                            n === e.selectBtn.lastChild ? e.selectBtn.insertBefore(t, n) : e.selectBtn.replaceChild(t, n);
                        },
                        getBestItem: e => s.A.callFn("auth.isAuth").then((t => {
                            var n = e.find((e => {
                                var n = e.prop.noAudio || e.prop.noVideo;
                                return !("pro" === e.prop.itag && !t) && !n && "televzr" !== e.prop.itag && !e.prop.isHidden;
                            }));
                            return n ? n.prop : void 0;
                        })),
                        bindDlBtn: function(e) {
                            var t = e.quickBtn;
                            e.quickBtnEvent && t.removeEventListener("click", e.quickBtnEvent), t.addEventListener("click", e.quickBtnEvent = function(t) {
                                e.link.func && e.link.func(t), t.stopPropagation(), e.link && T.currentMenu && T.hideCurrentMenu();
                                var n = {
                                    videoId: e.videoId || T.video_id,
                                    links: e.links
                                };
                                e.isPage ? n.isPage = 1 : n.isFrame = 1, T.onDlBtnClick.call(this, t, e.link, n);
                            });
                        },
                        setBestValue: function(e, t) {
                            var n = e.quickBtn;
                            e.link = t;
                            var r = t.quality;
                            if ("pro" === t.itag) {
                                r = {
                                    2160: "4K",
                                    4320: "8K",
                                    hls: "HLS",
                                    1440: "QHD"
                                }[t.quality] || t.quality;
                            } else t.noVideo || (r = parseInt(r));
                            t["3d"] && (r = "3D " + r), t.sFps && (r += " " + (t.fps || 60));
                            var o = y.A.create("span", {
                                text: r,
                                style: {
                                    marginLeft: "6px",
                                    verticalAlign: "bottom"
                                }
                            });
                            e.setQuality ? e.setQuality(o) : this.setValueInSelectBtn(e, o);
                            var i = [ t.format, r ];
                            if (t.noAudio && i.push(s.A.i18n.getMessage("withoutAudio")), i = i.join(" "), n.title = i, 
                            n.href = t.href, t.title && t.format) {
                                var a = (t.ext || t.format || "").toLowerCase();
                                a && (a = "." + a), n.setAttribute("download", m.A.modify(t.title + a));
                            }
                        },
                        setValue: (O = (0, r.A)(a().mark((function e(r) {
                            var o, i, s, l, d, u, c;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return o = this, this.bindDlBtn(r), (i = r.videoId || T.video_id) || o.setValueInSelectBtn(r, ""), 
                                    q({
                                        type: "counter",
                                        name: "extract_links",
                                        help: "Extract links",
                                        labels: {
                                            browser: "opera",
                                            site: "youtube",
                                            page_type: n
                                        }
                                    }), e.prev = 5, u = function(e) {
                                        return JSON.parse(JSON.stringify(e)).map(((t, n) => (t.href = t.url, t.title = t.filename, 
                                        t.func = e[n].func, delete t.url, delete t.filename, {
                                            prop: t
                                        })));
                                    }, e.next = 9, R.P.createLinkExtractor(n).extractLinks({
                                        mediaId: i,
                                        mediaUrl: location.href,
                                        noDash: !0,
                                        checkSubtitles: !0,
                                        initData: t
                                    });

                                  case 9:
                                    s = e.sent, /^yt.+/.test(n) && (d = (l = s).menuLinks, l.multiLang, s = d), c = u(s), 
                                    r.onGetLinksArr && r.onGetLinksArr.forEach((function(e) {
                                        return e();
                                    })), o.getBestItem(c).then((e => {
                                        e ? o.setBestValue(r, e) : o.setValueInSelectBtn(r, "");
                                    })), q({
                                        type: "counter",
                                        name: "extract_links_success",
                                        help: "Extract links - success",
                                        labels: {
                                            browser: "opera",
                                            site: "youtube",
                                            page_type: n
                                        }
                                    }), e.next = 20;
                                    break;

                                  case 17:
                                    return e.prev = 17, e.t0 = e.catch(5), e.abrupt("return", this.setValueInSelectBtn(r, ""));

                                  case 20:
                                  case "end":
                                    return e.stop();
                                }
                            }), e, this, [ [ 5, 17 ] ]);
                        }))), function(e) {
                            return O.apply(this, arguments);
                        })
                    },
                    videoFeed: {
                        style: null,
                        hrefIdPattern: /[\?&]v=([^&]+)/,
                        shortsPattern: /\/shorts\/([\w-]+)(?:\?|$)/,
                        imgIdPattern: /vi[^\/]*\/([^\/]+)/,
                        rList: [ /\/playlist\?/, /(user|channel|c|show)\/[^\/]+(\/feed|\/featured|\/videos|$)/i, /\/(feed)\/(trending|subscriptions|history)/i ],
                        testUrl: function(e) {
                            return this.rList.some((function(t) {
                                return t.test(e);
                            }));
                        },
                        injectStyle: function() {
                            this.style ? !this.style.parentNode && document.head.appendChild(this.style) : (this.style = y.A.create("style", {
                                class: "sf-feed-style",
                                text: (0, f.A)([ {
                                    selector: [ ".contains-percent-duration-watched .sf-feed-btn" ],
                                    style: {
                                        bottom: "6px"
                                    }
                                }, {
                                    selector: [ "a > .sf-feed-btn", "div > .sf-feed-btn", "span > .sf-feed-btn" ],
                                    style: {
                                        border: "1px solid #d3d3d3",
                                        width: "20px",
                                        height: "20px",
                                        padding: 0,
                                        position: "absolute",
                                        right: "26px",
                                        bottom: "2px",
                                        borderRadius: "2px",
                                        background: "url(" + v.svg.getSrc("download", "#777777") + ") center no-repeat #F8F8F8",
                                        backgroundSize: "12px",
                                        cursor: "pointer",
                                        zIndex: 10
                                    }
                                }, {
                                    selector: [ "a > .sf-feed-btn.style-2" ],
                                    style: {
                                        border: 0,
                                        top: 0,
                                        left: 0,
                                        margin: "4px",
                                        padding: "2px 4px",
                                        background: "url(" + v.svg.getSrc("download", "#FFF") + ") center no-repeat #000",
                                        backgroundSize: "14px",
                                        opacity: ".8"
                                    }
                                }, {
                                    selector: [ "a > .sf-feed-btn:hover", "div > .sf-feed-btn:hover", "span > .sf-feed-btn:hover" ],
                                    style: {
                                        background: "url(" + v.svg.getSrc("download", "#00B75A") + ") center no-repeat #F8F8F8",
                                        backgroundSize: "12px"
                                    }
                                }, {
                                    selector: [ "a > .sf-feed-btn.style-2:hover" ],
                                    style: {
                                        border: 0,
                                        top: 0,
                                        left: 0,
                                        margin: "4px",
                                        padding: "2px 4px",
                                        background: "url(" + v.svg.getSrc("download", "#00B75A") + ") center no-repeat #000",
                                        backgroundSize: "14px",
                                        opacity: ".8"
                                    }
                                }, {
                                    selector: [ "a > .sf-feed-btn:active", "div > .sf-feed-btn:active", "span > .sf-feed-btn:active" ],
                                    style: {
                                        outline: 0,
                                        boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
                                    }
                                }, {
                                    selector: [ "a:hover > .sf-feed-btn", "div:hover > .sf-feed-btn", "span:hover > .sf-feed-btn" ],
                                    style: {
                                        display: "block"
                                    }
                                }, {
                                    selector: [ "ytd-menu-renderer.style-scope.ytd-watch-metadata" ],
                                    style: {
                                        overflowY: "visible !important"
                                    }
                                } ])
                            }), document.head.appendChild(this.style));
                        },
                        rmBtn: function() {
                            for (var e, t = document.querySelectorAll(".sf-feed-btn"), n = 0; e = t[n]; n++) e.parentNode.removeChild(e);
                            [ "sfBtn", "sfSkip" ].forEach((function(r) {
                                var o = (0, p.A)(r);
                                for (t = document.querySelectorAll("[" + o + "]"), n = 0; e = t[n]; n++) e.removeAttribute(o);
                            }));
                        },
                        getBtnNode: function(e, o) {
                            var i = [ "sf-feed-btn" ];
                            return o && i.push("style-" + o), y.A.create("i", {
                                class: i,
                                on: [ "click", function() {
                                    var o = (0, r.A)(a().mark((function r(o) {
                                        var i, l, d, u, c, p, f, g, b, y, m;
                                        return a().wrap((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                              case 0:
                                                if (o.preventDefault(), o.stopPropagation(), i = this, !T.currentMenu || !T.currentMenu.isShow) {
                                                    r.next = 6;
                                                    break;
                                                }
                                                return T.hideCurrentMenu(), r.abrupt("return");

                                              case 6:
                                                return q({
                                                    type: "counter",
                                                    name: "show_menu",
                                                    help: "Show menu",
                                                    labels: {
                                                        browser: "opera",
                                                        site: "youtube",
                                                        page_type: n
                                                    }
                                                }), l = e, (d = i.parentNode) && "A" === d.tagName && "thumbnail" === d.id && (u = T.videoFeed.hrefIdPattern.exec(d.href)) && (l = u[1]), 
                                                c = document.querySelector("#home-page-skeleton.hidden"), p = T.currentMenu = v.popupMenu.quickInsert(i, s.A.i18n.getMessage("download") + " ...", "sf-popupMenu", {
                                                    offsetTop: c ? 54 : 0,
                                                    onShow: function() {
                                                        h.A.onRemoveEvent(i, T.hideCurrentMenu);
                                                    },
                                                    onHide: function() {
                                                        h.A.offRemoveEvent(i, T.hideCurrentMenu);
                                                    },
                                                    onItemClick: function(e, t) {
                                                        T.onMenuItemClick(t, {
                                                            isFeedItem: 1,
                                                            videoId: l
                                                        });
                                                    }
                                                }), q({
                                                    type: "counter",
                                                    name: "extract_links",
                                                    help: "Extract links",
                                                    labels: {
                                                        browser: "opera",
                                                        site: "youtube",
                                                        page_type: n
                                                    }
                                                }), r.prev = 13, y = function(e) {
                                                    return JSON.parse(JSON.stringify(e)).map(((t, n) => (t.href = t.url, t.title = t.filename, 
                                                    t.func = e[n].func, delete t.url, delete t.filename, t)));
                                                }, r.next = 17, R.P.createLinkExtractor(n).extractLinks({
                                                    mediaId: l,
                                                    mediaUrl: location.href,
                                                    noDash: !0,
                                                    checkSubtitles: !0,
                                                    initData: t
                                                });

                                              case 17:
                                                f = r.sent, /^yt.+/.test(n) && (b = (g = f).menuLinks, g.multiLang, f = b), z.log("get links for videoFeed"), 
                                                m = y(f), p.update(m), q({
                                                    type: "counter",
                                                    name: "extract_links_success",
                                                    help: "Extract links - success",
                                                    labels: {
                                                        browser: "opera",
                                                        site: "youtube",
                                                        page_type: n
                                                    }
                                                }), r.next = 29;
                                                break;

                                              case 25:
                                                r.prev = 25, r.t0 = r.catch(13), z.error("get links for videoFeed err", r.t0), p.update(s.A.i18n.getMessage("noLinksFound"));

                                              case 29:
                                              case "end":
                                                return r.stop();
                                            }
                                        }), r, this, [ [ 13, 25 ] ]);
                                    })));
                                    return function(e) {
                                        return o.apply(this, arguments);
                                    };
                                }() ]
                            });
                        }
                    },
                    downloadPlaylist: (I = e => {
                        for (var t, n = [], r = e.querySelectorAll("ytd-browse:not([hidden]) #contents img[src]#img"), o = T.videoFeed.imgIdPattern, i = 0; t = r[i]; i++) {
                            var a = t.src.match(o);
                            a && -1 === n.indexOf(a[1]) && n.push(a[1]);
                        }
                        for (var s, l = e.querySelectorAll("*[data-video-id]"), d = 0; s = l[d]; d++) {
                            var u = s.dataset.videoId;
                            -1 === n.indexOf(u) && n.push(u);
                        }
                        return n;
                    }, L = (e, t, n, r) => {
                        var o = !1, i = {}, a = 0, s = 0, l = e.length, d = void 0;
                        "audio" === t ? (d = [ "audio" ], t = void 0) : (d = [ "video" ], t = parseInt(t) || void 0);
                        var u = function u() {
                            if (!o) {
                                var c = e[a];
                                if (void 0 === c) return 0 === s ? r(i) : void 0;
                                a++, s++, ((e, t, n, r) => {
                                    var o = -1 !== n.indexOf("audio");
                                    E(e, location.href, {
                                        noDash: o
                                    }).then((e => {
                                        var o = v.popupMenu.prepareLinks.youtube(e.links, e.title);
                                        o = v.popupMenu.sortMenuItems(o, {
                                            noProp: !0,
                                            maxSize: t,
                                            minSize: 2,
                                            typeList: n
                                        }), r(o);
                                    })).catch((e => {
                                        z.error("Get yt links for playlist error", e), r(void 0);
                                    }));
                                })(c, t, d, (function(e) {
                                    e && (e = e.filter((e => ![ "televzr", "ummy", "pro", "muxer" ].includes(e.itag))));
                                    var t = e ? e[0] : void 0;
                                    if (t) {
                                        var r = (t.ext || t.format || "").toLowerCase();
                                        r && (r = "." + r);
                                        var o = m.A.modify(t.title + r);
                                        i[c] = {
                                            url: t.href,
                                            title: t.title,
                                            filename: o
                                        };
                                    }
                                    n(a, l), s--, u();
                                }));
                            }
                        };
                        return u(), u(), {
                            abort: function() {
                                o = !0;
                            }
                        };
                    }, function() {
                        var e = !1, t = void 0, n = function(e) {
                            var t, n, r, o, i, a = v.playlist.getInfoPopupTemplate();
                            s.A.sendMessage({
                                action: "getWarningIcon",
                                type: "playlist",
                                color: "#77D1FA"
                            }, (function(e) {
                                a.icon.style.backgroundImage = "url(" + e + ")";
                            })), y.A.create(a.textContainer, {
                                append: [ y.A.create("p", {
                                    text: s.A.i18n.getMessage("playlist"),
                                    style: {
                                        color: "#0D0D0D",
                                        fontSize: "20px",
                                        marginBottom: "11px",
                                        marginTop: "13px"
                                    }
                                }), n = y.A.create("div", {
                                    append: [ y.A.create("p", {
                                        text: s.A.i18n.getMessage("quality") + ":",
                                        style: {
                                            color: "#000000",
                                            fontSize: "14px",
                                            marginBottom: "13px",
                                            lineHeight: "24px"
                                        },
                                        append: [ r = y.A.create("select", {
                                            style: {
                                                width: "75px",
                                                marginLeft: "5px"
                                            },
                                            append: [ "720", "480", "360", "240", "Audio" ].map((e => y.A.create("option", {
                                                text: e,
                                                value: e.toLowerCase()
                                            })))
                                        }) ]
                                    }), y.A.create("p", {
                                        text: s.A.i18n.getMessage("qualityNote"),
                                        style: {
                                            color: "#868686",
                                            fontSize: "14px",
                                            lineHeight: "24px"
                                        }
                                    }) ]
                                }), t = y.A.create("p", {
                                    text: "",
                                    style: {
                                        color: "#868686",
                                        fontSize: "14px",
                                        lineHeight: "24px"
                                    }
                                }) ]
                            }), y.A.create(a.buttonContainer, {
                                append: [ i = y.A.create("button", {
                                    text: s.A.i18n.getMessage("cancel"),
                                    style: {
                                        height: "27px",
                                        width: "118px",
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #9e9e9e",
                                        margin: "12px",
                                        marginBottom: "11px",
                                        marginRight: "4px",
                                        borderRadius: "5px",
                                        fontSize: "14px",
                                        cursor: "pointer"
                                    }
                                }), o = y.A.create("button", {
                                    text: s.A.i18n.getMessage("continue"),
                                    style: {
                                        height: "27px",
                                        width: "118px",
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #9e9e9e",
                                        margin: "12px",
                                        marginBottom: "11px",
                                        marginRight: "8px",
                                        borderRadius: "5px",
                                        fontSize: "14px",
                                        cursor: "pointer"
                                    }
                                }) ]
                            });
                            var l = v.popupDiv(a.body, "pl_progress_popup", void 0, void 0, e);
                            return {
                                qualitySelect: function(e) {
                                    t.style.display = "none", a.buttonContainer.style.display = "block", n.style.display = "block", 
                                    o.addEventListener("click", (function() {
                                        e(r.value);
                                    })), i.addEventListener("click", (function() {
                                        h.A.trigger(l, "kill");
                                    }));
                                },
                                onPrepare: function(e) {
                                    t.style.display = "block", a.buttonContainer.style.display = "none", n.style.display = "none", 
                                    t.textContent = e;
                                },
                                onProgress: function(e, n) {
                                    t.textContent = s.A.i18n.getMessage("vkFoundFiles").replace("%d", e) + " " + s.A.i18n.getMessage("vkFoundOf") + " " + n;
                                },
                                onReady: function(e, t) {
                                    h.A.trigger(l, "kill"), B ? v.downloadList.showBeforeDownloadPopup(e, {
                                        type: "playlist",
                                        folderName: t
                                    }) : v.playlist.popupPlaylist(e, t, !0, void 0, "video");
                                },
                                onError: function(e) {
                                    s.A.sendMessage({
                                        action: "getWarningIcon",
                                        type: "playlist",
                                        color: "#AAAAAA"
                                    }, (function(e) {
                                        a.icon.style.backgroundImage = "url(" + e + ")";
                                    })), t.style.display = "block", a.buttonContainer.style.display = "none", n.style.display = "none", 
                                    t.textContent = e;
                                }
                            };
                        }((function() {
                            e = !0, t && t.abort();
                        }));
                        n.qualitySelect((function(t) {
                            n.onPrepare(s.A.i18n.getMessage("download") + " ..."), function(e) {
                                var t = document, n = (0, c.A)(location.href);
                                if (n.list) s.A.sendMessage({
                                    action: "getYoutubeIdListFromPlaylist",
                                    listId: n.list,
                                    baseUrl: location.protocol + "//" + location.host
                                }, (function(t) {
                                    if (!t) return e();
                                    if (!t.idList || 0 === t.idList.length) {
                                        var n = document.querySelector(".playlist-videos-container > .playlist-videos-list");
                                        if (null !== n && (t.idList = I(n)), !t.title) {
                                            var r = document.querySelector(".playlist-info > .playlist-title");
                                            null !== r && (t.title = r.textContent.replace(/\r?\n/g, " ").trim());
                                        }
                                    }
                                    e(t.idList, t.title);
                                })); else {
                                    var r = I(t);
                                    e(r, T.getTitle());
                                }
                            }((function(r, o) {
                                if (!e) if (r && 0 !== r.length) {
                                    var i = (e, t, n) => new Promise((r => L(e, t, n, r)));
                                    i(r, t, n.onProgress).then((e => 0 === Object.keys(e).length ? i(r, 720, n.onProgress) : e)).then((e => {
                                        var t = [];
                                        for (var r in e) t.push(e[r]);
                                        var i = m.A.modify(o);
                                        n.onReady(t, i);
                                    }));
                                } else n.onError(s.A.i18n.getMessage("noLinksFound"));
                            }));
                        }));
                    })
                };
                T.tutorial = {
                    show: function(e) {
                        if (this.hide(), k.onceShowYtTooltip) {
                            e.onClose = function() {
                                t && t.stop(), s.A.sendMessage({
                                    action: "updateOption",
                                    key: "onceShowYtTooltip",
                                    value: k.onceShowYtTooltip = 0
                                });
                            }, T.currentTutorial = new v.TutorialTooltip(e);
                            var t = null, n = document.querySelector("#page.watch");
                            n && (t = T.currentTutorial.attrWatcher = new A.A({
                                attrs: [ {
                                    name: "class",
                                    callback() {
                                        var e = T.currentTutorial;
                                        e && e.tooltipNode.parentNode ? e.onResize() : t.stop();
                                    }
                                } ],
                                target: n
                            }));
                        }
                    },
                    hide: function() {
                        var e = T.currentTutorial;
                        e && (e.onClose && e.onClose(1), e.attrWatcher && e.attrWatcher.stop(), T.currentTutorial = null);
                    }
                };
                var D = function(e) {
                    return e = (e = (e = (e = (e = (e = e.replace(/[\x2F\x5C\x3A\x7C]/g, "-")).replace(/[\x2A\x3F]/g, "")).replace(/\x22/g, "'")).replace(/\x3C/g, "(")).replace(/\x3E/g, ")")).replace(/(?:^\s+)|(?:\s+$)/g, "");
                }, j = function(e) {
                    return (0, S.A)("function(){var ytPlayerConfig=window.ytplayer&&window.ytplayer.config;if(!ytPlayerConfig){return}return{args:ytPlayerConfig.args,sts:ytPlayerConfig.sts,assets:ytPlayerConfig.assets}}").then((t => {
                        if (!t || !t.args || !t.args.video_id) {
                            var n = document.querySelector('#watch7-content meta[itemprop="videoId"]'), r = n && n.getAttribute("content");
                            r && ((t = t || {}).args = t.args || {}, t.args.video_id = r);
                        }
                        return e(t);
                    }));
                }, U = function(e, t) {
                    return (0, S.A)('function(){try{var player=document.querySelector("#movie_player");if(!player){throw new Error("PLAYER_IS_NOT_FOUND")}if(!player.getVideoData){throw new Error("PLAYER_API_IS_NOT_FOUND")}if(!player.getPlayerResponse){(function(fn){if(fn&&!fn.sf_apply){fn.sf_apply=fn.apply;fn.apply=function(self,args){var playerArgs=args[0];if(playerArgs&&playerArgs.raw_player_response){var vars=null;try{vars=JSON.parse(JSON.stringify(playerArgs))}catch(err){// pass\n}player.getSfPlayerVars=function(){return vars}}return fn.sf_apply(self,args)}}})(player.loadVideoByPlayerVars)}var ytPlayer=window.ytplayer;var playerUrl=ytPlayer&&ytPlayer.web_player_context_config&&ytPlayer.web_player_context_config.jsUrl;// when open main page\nif(!playerUrl&&typeof ytcfg==="object"&&ytcfg){playerUrl=ytcfg.data_&&ytcfg.data_.PLAYER_JS_URL}var playerResponse=player.getPlayerResponse&&player.getPlayerResponse();if(!playerResponse){var sfConfig=player.getSfPlayerVars&&player.getSfPlayerVars();playerResponse=sfConfig&&sfConfig.raw_player_response}if(!playerResponse){playerResponse=ytPlayer&&ytPlayer.config&&ytPlayer.config.args&&ytPlayer.config.args.raw_player_response}var videoData=player.getVideoData();var video_id=videoData&&videoData.video_id;return{result:{config:{playerUrl:playerUrl,args:{player_response:playerResponse,video_id:playerResponse&&playerResponse.videoDetails&&playerResponse.videoDetails.videoId}},video_id:video_id}}}catch(err){return{error:{message:err.message,stack:err.stack}}}}').then((e => {
                        var t = null;
                        if (e ? e.error && (t = Object.assign(new Error("UNKNOWN_ERROR"), e.error)) : t = new Error("EMPTY_RESPONSE"), 
                        t) throw t;
                        return e.result;
                    })).then((n => {
                        var r = n.config, o = null;
                        return t ? (e && (o = T.getIdFromBackgroundImageUrl(e)), o || e || (o = T.getIdFromShortsLocation())) : (o = n.video_id) || (o = T.getIdFromLocation()), 
                        !r.args.player_response || o && o !== r.args.video_id ? o ? {
                            args: {
                                video_id: o
                            }
                        } : null : r;
                    }));
                };
            }), (function() {
                return !/\/\/gaming\.youtube/.test(location.href);
            }));
        }
    }, n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = n[e] = {
            id: e,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r), i.exports;
    }
    r.m = t, e = [], r.O = (t, n, o, i) => {
        if (!n) {
            var a = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [n, o, i] = e[u], s = !0, l = 0; l < n.length; l++) (!1 & i || a >= i) && Object.keys(r.O).every((e => r.O[e](n[l]))) ? n.splice(l--, 1) : (s = !1, 
                i < a && (a = i));
                if (s) {
                    e.splice(u--, 1);
                    var d = o();
                    void 0 !== d && (t = d);
                }
            }
            return t;
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
        e[u] = [ n, o, i ];
    }, r.n = e => {
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
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.j = 912, (() => {
        r.b = document.baseURI || self.location.href;
        var e = {
            912: 0
        };
        r.O.j = t => 0 === e[t];
        var t = (t, n) => {
            var o, i, [a, s, l] = n, d = 0;
            if (a.some((t => 0 !== e[t]))) {
                for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                if (l) var u = l(r);
            }
            for (t && t(n); d < a.length; d++) i = a[d], r.o(e, i) && e[i] && e[i][0](), e[i] = 0;
            return r.O(u);
        }, n = self.savefromContentScriptWebpackJsonp = self.savefromContentScriptWebpackJsonp || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
    })(), r.nc = void 0;
    var o = r.O(void 0, [ 223 ], (() => r(2683)));
    o = r.O(o);
})();