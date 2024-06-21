/******/
(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/
        8950:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const gaConnections = __webpack_require__(789);

                /** Modifies input config objects
                @function */
                module.exports = config => {
                    if (!config.ga.enabled) return config;
                    config.ga4 = {};
                    if (config.ga.tracking_id) {
                        const counterpart = gaConnections.find(({
                            track
                        }) => track === config.ga.tracking_id);
                        if (counterpart) {
                            config.ga4.partial = {};
                            config.ga4.partial.measurementId = counterpart.ga4MeasurementId;
                            config.ga4.partial.apiSecret = counterpart.ga4ApiSecret;
                        }
                    }
                    if (config.ga.fullTrackingId) {
                        const counterpart = gaConnections.find(({
                            track
                        }) => track === config.ga.fullTrackingId);
                        if (counterpart) {
                            config.ga4.full = {};
                            config.ga4.full.measurementId = counterpart.ga4MeasurementId;
                            config.ga4.full.apiSecret = counterpart.ga4ApiSecret;
                        }
                    }
                    return config;
                };

                /***/
            }),

        /***/
        4284:
            /***/
            ((module) => {

                module.exports = {
                    'promotionPageAfterInstall': {
                        'id': 'F7-JutvlRxyTa7TXyce1hg',
                        'event': 'onboarding.install',
                        'taskNumber': 284,
                        // 892
                        'type': 'event'
                    }
                };

                /***/
            }),

        /***/
        789:
            /***/
            ((module) => {

                module.exports = [{
                    'track': 'UA-60149654-2',
                    'ga4ApiSecret': 'CLWDMTsYQBu_t0DpVPT6Rg',
                    'ga4MeasurementId': 'G-0GHZ1332D6'
                }, {
                    'track': 'UA-60149654-6',
                    'ga4ApiSecret': 'NtMfEM5JR6Wfsd_P5WnilA',
                    'ga4MeasurementId': 'G-FELBYBMRB5'
                }, {
                    'track': 'UA-60149654-1',
                    'ga4ApiSecret': 'N6slLr4CTJKIchgxA6ty7Q',
                    'ga4MeasurementId': 'G-D6RC78PG86'
                }, {
                    'track': 'UA-60149654-7',
                    'ga4ApiSecret': 'tsFNPU06TGC2XIMRNErFig',
                    'ga4MeasurementId': 'G-WKQJ3BZN1Z'
                }, {
                    'track': 'UA-43024042-1',
                    'ga4ApiSecret': 'Swcg9hbKQJOb9PaDQ2M_8g',
                    'ga4MeasurementId': 'G-1N07RLQVY3'
                }, {
                    'track': 'UA-43024042-3',
                    'ga4ApiSecret': 'BPXQcy5JT46KOjbgWy_QDg',
                    'ga4MeasurementId': 'G-J9001B3EEV'
                }];

                /***/
            }),

        /***/
        46:
            /***/
            ((module) => {

                module.exports = [{
                    'id': '360',
                    'serverId': 'exp_360',
                    'trafficAllocation': 0.1,
                    'variants': [0.5, 0.5]
                }, {
                    'id': '371v2',
                    'serverId': 'exp_371v2',
                    'variants': [0.5, 0.5]
                }, {
                    'id': '372',
                    'serverId': 'exp_372',
                    'variants': [1.0]
                }, {
                    'id': '373',
                    'serverId': 'exp_373v1',
                    'variants': [0.5, 0.5]
                }, {
                    'id': '373v2',
                    'serverId': 'exp_373v2',
                    'variants': [0.5, 0.5]
                }];

                /***/
            }),

        /***/
        4019:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const applyGa4 = __webpack_require__(8950);
                const experiments = __webpack_require__(4284);
                const internalExperiments = __webpack_require__(46);
                const productionApiServerUrls = __webpack_require__(2857);
                const config = {
                    'type': 'production',
                    'apiServerUrls': productionApiServerUrls,
                    'auth': {
                        // When disabled, users can't login/register
                        'enabled': true
                    },
                    'baseUrl': 'https://browsec.com',
                    experiments,
                    internalExperiments,
                    'ga': {
                        'enabled': true,
                        'extension_id': ['omghfjlpggmjjaagoclmmobgdodcjboh', 'dknfpcdpbkjijldegonllfnnfhabjpde', '05908b89-695d-4687-aa36-6d87f42a464d' // NOTE temporary
                        ],

                        'tracking_id': 'UA-43024042-1',
                        'chance': 0.01,
                        'fullTrackingId': 'UA-43024042-3'
                    },
                    'proxy': {
                        'defaultCountry': 'nl'
                    },
                    'smartSettings': {
                        'fakeDomainTemplate': '3c57qqhsz6qgd5pbtq1479pm.com'
                    },
                    'rootUrl': 'https://gist.githubusercontent.com/brwinfo/0d4c6d2ebbe6fd716a43f0ac9d37ce22/raw',
                    'siteAuthorizationDomains': ['browsec.com', 'd3k73twqqvofzb.cloudfront.net']
                };
                module.exports = applyGa4(config);

                /***/
            }),

        /***/
        2522:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    Z: () => ( /* binding */ bg_Counters)
                });

                // UNUSED EXPORTS: Counters

                // EXTERNAL MODULE: ./config/production.js
                var production = __webpack_require__(4019);
                var production_default = /*#__PURE__*/ __webpack_require__.n(production);
                // EXTERNAL MODULE: ./src/general/storage.ts
                var storage = __webpack_require__(6264);; // CONCATENATED MODULE: ./src/bg/Counters/getDefaultState.ts

                /* harmony default export */
                const getDefaultState = (async () => {
                    let statisticsState = await storage /* default */ .Z.get('statistics');
                    if (!statisticsState) return {};
                    return {
                        // Count of location country changes
                        'country changes': statisticsState.countryChanges || 0,
                        // Number of clicks on browser icon
                        'icon clicks': statisticsState.iconClicks || 0,
                        // Count of transitions to location page
                        'popup: location page shows': statisticsState.locationPageShows || 0,
                        // Global proxy ON click times
                        'popup: proxy on': statisticsState.proxyOn || 0,
                        // Count of successfully loaded proxied pages
                        'proxied pages': statisticsState.proxiedPages || 0,
                        // Count of proxy.onError errors
                        'proxy errors': statisticsState.proxyErrors || 0,
                        // How much times user successfully logined
                        'user login': statisticsState.userLoginCount || 0
                    };
                });
                // EXTERNAL MODULE: ./src/general/store/index.ts + 5 modules
                var store = __webpack_require__(4501);; // CONCATENATED MODULE: ./src/bg/Counters/listeners.ts

                /* harmony default export */
                const listeners = (async Counters => {
                    // Save location country changes
                    store /* default */ .Z.onChange(({
                        'userPac': {
                            mode,
                            country
                        }
                    }) => ({
                        'enabled': mode === 'proxy',
                        country
                    }), ({
                        enabled,
                        'country': newCountry
                    }, {
                        'country': oldCountry
                    }) => {
                        if (!enabled) return; // Proxy OFF
                        if (newCountry === oldCountry) return; // Same country

                        Counters.increase('country changes');
                    });

                    // Count of Proxy OFF to ON
                    store /* default */ .Z.onChange(({
                        userPac
                    }) => userPac.mode === 'proxy', enabled => {
                        if (enabled) Counters.increase('popup: proxy on');
                    });

                    // How much times user successfully logined
                    store /* default */ .Z.onChange(({
                        'user': {
                            email
                        }
                    }) => Boolean(email), logined => {
                        if (logined) Counters.increase('user login');
                    });
                });
                // EXTERNAL MODULE: ./src/dualUse/log/index.ts
                var log = __webpack_require__(6699);; // CONCATENATED MODULE: ./src/bg/Counters/index.ts
                /** System of counters saved globally in stirage for statistics */





                const bgRequest = location.href.includes('background');
                class Counters {
                    // @ts-ignore

                    constructor() {
                        this._ready = (async () => {
                            let storageState = await storage /* default */ .Z.get('counters');
                            if (storageState) {
                                this.state = storageState;
                                return;
                            }
                            this.state = await getDefaultState();
                        })();
                        this._listeners = [];
                        if (bgRequest) listeners(this);
                    }

                    /** @method */
                    addListener(property, listener) /*: void*/ {
                        this._listeners.push({
                            listener,
                            property
                        });
                    }

                    /** @method */
                    removeListener(params) /*: void*/ {
                        // Remove by property
                        if (typeof params === 'string') {
                            this._listeners = this._listeners.filter(({
                                property
                            }) => property !== params);
                            return;
                        }

                        // Remove by callback function
                        this._listeners = this._listeners.filter(({
                            listener
                        }) => listener !== params);
                    }

                    /** Get property value
                    @method
                    @return - property value in state */
                    async get(property) {
                        await this._ready;
                        return this.state[property] || 0;
                    }

                    /** Increase some counter property
                    @method
                    @return - new value */
                    async increase(property) {
                        await this._ready;
                        if (!this.state[property]) this.state[property] = 0;
                        this.state[property]++;
                        if ((production_default()).type === 'development') {
                            (0, log /* default */ .Z)(`Counters. Increase ${property}. New value: `, this.state[property]);
                        }
                        storage /* default */ .Z.set('counters', this.state);
                        this._listeners.forEach(({
                            listener,
                            'property': listenerProperty
                        }) => {
                            if (listenerProperty !== property) return;
                            listener(this.state[property]);
                        });
                        return this.state[property];
                    }
                }

                /** @class singleton */
                /* harmony default export */
                const bg_Counters = (new Counters());

                /***/
            }),

        /***/
        7027:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* global Price */
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = ([{
                    'currency': 'USD',
                    'value': 71.99,
                    'duration': 24
                }, {
                    'currency': 'RUB',
                    'value': 7199,
                    'duration': 24
                }]);

                /***/
            }),

        /***/
        7437:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var servers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6567);
                /* harmony import */
                var storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6264);


                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (async () => (await storage__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */ .Z.get('serversObject')) || servers_json__WEBPACK_IMPORTED_MODULE_0__);

                /***/
            }),

        /***/
        96:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                // ESM COMPAT FLAG
                __webpack_require__.r(__webpack_exports__);

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "default": () => ( /* binding */ chrome)
                });

                // EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
                var code = __webpack_require__(3552);
                var code_default = /*#__PURE__*/ __webpack_require__.n(code);
                // EXTERNAL MODULE: ./src/general/tools/generateRfc4122Id.ts
                var generateRfc4122Id = __webpack_require__(8459);
                // EXTERNAL MODULE: ./config/production.js
                var production = __webpack_require__(4019);
                var production_default = /*#__PURE__*/ __webpack_require__.n(production);
                // EXTERNAL MODULE: ./src/general/storage.ts
                var storage = __webpack_require__(6264);; // CONCATENATED MODULE: ./src/dualUse/ga/full/gaUserIdPromise.ts



                const bgRequest = location.href.includes('background');
                /* harmony default export */
                const gaUserIdPromise = ((async () => {
                    let id = await storage /* default */ .Z.get('gaRareUserId');
                    if (id) return id;

                    // From popup
                    if (!bgRequest) {
                        return new Promise(resolve => {
                            const unsubscribe = storage /* default */ .Z.onChange({
                                'for': ['gaRareUserId'],
                                'do': storageData => {
                                    const value = storageData.gaRareUserId;
                                    if (value !== undefined) {
                                        resolve(value);
                                        unsubscribe();
                                    }
                                }
                            });
                        });
                    }

                    // From background
                    let timeReason = false;
                    try {
                        await new Promise(async (resolve, reject) => {
                            setTimeout(() => {
                                timeReason = true;
                                reject(new Error('Initial GA request timeout reached'));
                            }, 10000);
                            const response = await fetch((production_default()).baseUrl + '/api/v1/attributes/extintid', {
                                'credentials': 'include',
                                'headers': {
                                    'Content-Type': 'application/json'
                                },
                                'method': 'GET'
                            });
                            const json = await response.json();
                            if (typeof(json === null || json === void 0 ? void 0 : json.extintid) === 'string') id = json.extintid;
                            if (typeof(json === null || json === void 0 ? void 0 : json.created) === 'boolean') {
                                await storage /* default */ .Z.set('gaRareUserIsNew', json.created);
                            }
                        });
                    } catch (x) {}
                    if (id) {
                        storage /* default */ .Z.set('gaRareUserId', id);
                        return id;
                    }

                    // No response from fetch
                    id = (0, generateRfc4122Id /* default */ .Z)();
                    storage /* default */ .Z.set('gaRareUserId', id);
                    if (timeReason) {
                        fetch((production_default()).baseUrl + '/api/v1/attributes', {
                            'body': JSON.stringify({
                                'data': {
                                    'extintid': id
                                }
                            }),
                            'credentials': 'include',
                            'headers': {
                                'Content-Type': 'application/json'
                            },
                            'method': 'POST'
                        });
                    }
                    return id;
                })());
                // EXTERNAL MODULE: ./src/dualUse/log/index.ts
                var log = __webpack_require__(6699);
                // EXTERNAL MODULE: ./src/general/tools/ajax.ts
                var ajax = __webpack_require__(7493);; // CONCATENATED MODULE: ./src/dualUse/ga/full/chrome/getSessionId.ts

                const sessionId = (0, generateRfc4122Id /* default */ .Z)();

                /** @function */
                /* harmony default export */
                const getSessionId = (() => sessionId);; // CONCATENATED MODULE: ./src/dualUse/ga/full/chrome/request.ts




                /** @function */
                const getTimeStamp = () => {
                    const date = new Date();
                    const year = date.getUTCFullYear();
                    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
                    const day = String(date.getUTCDate()).padStart(2, '0');
                    const hour = String(date.getUTCHours()).padStart(2, '0');
                    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
                    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
                    return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`;
                };

                /** Request to GA server
                @function */
                /* harmony default export */
                const request = (async (gaUserId, params) => {
                    if (!(production_default()).ga.fullTrackingId) return;
                    const {
                        type,
                        action,
                        category,
                        label,
                        noninteraction,
                        value
                    } = params;
                    const sessionId = gaUserId + '.' + getSessionId();
                    const timestamp = getTimeStamp();
                    const gaPromise = (() => {
                        const data = {
                            'v': '1',
                            // Version
                            'tid': (production_default()).ga.fullTrackingId,
                            // Tracking ID / Property ID.
                            'cid': gaUserId,
                            // Anonymous Client ID (every time unique)
                            't': type // Hit Type. / The type of hit. Must be one of 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'.
                        };

                        if (type === 'event') {
                            if (action) data.ea = action; // Event action
                            if (category) data.ec = category; // Event category
                            if (label) data.el = label; // Event label / https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters?hl=en#ec
                            if (value) data.ev = value;
                            data.cd1 = sessionId; // Session ID
                            data.cd2 = gaUserId; // Client ID
                            data.cd3 = timestamp; // Hit Timestamp
                        }

                        if (noninteraction) data.ni = '1';
                        const body = Object.entries(data).map(([key, value]) => key + '=' + encodeURIComponent(value)).join('&');
                        return (0, ajax /* default */ .Z)('https://www.google-analytics.com/collect', {
                            'headers': {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            'method': 'POST',
                            'mode': 'cors',
                            body
                        });
                    })();
                    const ga4promise = (async () => {
                        if (!(production_default()).ga4.full) return;
                        const apiSecret = (production_default()).ga4.full.apiSecret;
                        const measurementId = (production_default()).ga4.full.measurementId;
                        const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;
                        const data = {
                            'client_id': gaUserId,
                            'events': [{
                                'name': action,
                                'params': {
                                    category,
                                    label,
                                    noninteraction,
                                    sessionId,
                                    timestamp,
                                    value
                                }
                            }]
                        };
                        return (0, ajax /* default */ .Z)(url, {
                            'method': 'POST',
                            'mode': 'cors',
                            'body': JSON.stringify(data)
                        });
                    })();
                    return Promise.all([gaPromise.catch(() => undefined), ga4promise.catch(() => undefined)]);
                });
                // EXTERNAL MODULE: ./src/general/tools/sendMessage.ts
                var sendMessage = __webpack_require__(1748);; // CONCATENATED MODULE: ./src/dualUse/ga/full/chrome/index.ts






                const config = (production_default()).ga;
                const chrome_bgRequest = location.href.includes('background');
                const condition = config.enabled && (!config.extension_id // For qa / qa2 profiles
                    ||
                    Array.isArray(config.extension_id) && config.extension_id.includes((code_default()).runtime.id));
                const ga = Object.assign(async ({
                    category,
                    action,
                    label,
                    value,
                    noninteraction
                }) => {
                    if (!chrome_bgRequest) {
                        return (0, sendMessage /* default */ .Z)({
                            'type': 'ga.full',
                            'data': {
                                category,
                                action,
                                label,
                                value,
                                noninteraction
                            }
                        });
                    }
                    const type = condition ? 'TRACK' : 'DISABLED';
                    (0, log /* default */ .Z)('GA full', `[${type}]`, {
                        category,
                        action,
                        label,
                        value,
                        noninteraction
                    });
                    if (type !== 'TRACK') return;
                    const gaUserId = await gaUserIdPromise;
                    return request(gaUserId, {
                        'type': 'event',
                        action,
                        category,
                        label,
                        noninteraction,
                        value
                    });
                }, {
                    'userIdPromise': gaUserIdPromise
                });
                /* harmony default export */
                const chrome = (ga);

                /***/
            }),

        /***/
        7457:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                module.exports = typeof browser !== 'undefined' ? __webpack_require__(Object(function webpackMissingModule() {
                    var e = new Error("Cannot find module './firefox'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }())) : __webpack_require__(96);

                /***/
            }),

        /***/
        8729:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                // ESM COMPAT FLAG
                __webpack_require__.r(__webpack_exports__);

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "default": () => ( /* binding */ chrome)
                });

                // EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
                var code = __webpack_require__(3552);
                var code_default = /*#__PURE__*/ __webpack_require__.n(code);
                // EXTERNAL MODULE: ./src/general/tools/generateRfc4122Id.ts
                var generateRfc4122Id = __webpack_require__(8459);
                // EXTERNAL MODULE: ./src/bg/Counters/index.ts + 2 modules
                var Counters = __webpack_require__(2522);; // CONCATENATED MODULE: ./src/dualUse/ga/partial/chrome/listeners.ts

                /* harmony default export */
                const listeners = (ga => {
                    Counters /* default */ .Z.addListener('popup: menu: smart settings click', () => {
                        ga({
                            'category': 'Smart Settings',
                            'action': 'Menu click'
                        });
                    });
                    Counters /* default */ .Z.addListener('popup: smart settings: open help', () => {
                        ga({
                            'category': 'Smart Settings',
                            'action': 'Open help'
                        });
                    });
                    Counters /* default */ .Z.addListener('popup: smart settings: open list', () => {
                        ga({
                            'category': 'Smart Settings',
                            'action': 'Open edit page'
                        });
                    });
                    Counters /* default */ .Z.addListener('popup: smart settings: add rule', () => {
                        ga({
                            'category': 'Smart Settings',
                            'action': 'Add rule'
                        });
                    });
                });
                // EXTERNAL MODULE: ./src/dualUse/log/index.ts
                var log = __webpack_require__(6699);
                // EXTERNAL MODULE: ./config/production.js
                var production = __webpack_require__(4019);
                var production_default = /*#__PURE__*/ __webpack_require__.n(production);
                // EXTERNAL MODULE: ./src/general/tools/ajax.ts
                var ajax = __webpack_require__(7493);; // CONCATENATED MODULE: ./src/dualUse/ga/partial/chrome/request.ts



                /** Request to GA server
                @function */
                /* harmony default export */
                const request = (async (gaUserId, params) => {
                    if (!(production_default()).ga.tracking_id) return;
                    let {
                        type,
                        action,
                        category,
                        label,
                        noninteraction,
                        value
                    } = params;
                    const gaPromise = (() => {
                        let data = {
                            'v': '1',
                            // Version
                            'tid': (production_default()).ga.tracking_id,
                            // Tracking ID / Property ID.
                            'cid': gaUserId,
                            // Anonymous Client ID (every time unique)
                            't': type // Hit Type. / The type of hit. Must be one of 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'.
                        };

                        if (type === 'event') {
                            if (action) data.ea = action; // Event action
                            if (category) data.ec = category; // Event category
                            if (label) data.el = label; // Event label / https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters?hl=en#ec
                            if (value) data.ev = value;
                        }
                        if (noninteraction) data.ni = '1';
                        const body = Object.entries(data).map(([key, value]) => key + '=' + encodeURIComponent(value)).join('&');
                        return (0, ajax /* default */ .Z)('https://www.google-analytics.com/collect', {
                            'credentials': 'omit',
                            // No cross between mectrics
                            'headers': {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            'method': 'POST',
                            'mode': 'cors',
                            body
                        });
                    })();
                    const ga4promise = (async () => {
                        if (!(production_default()).ga4.partial) return;
                        const apiSecret = (production_default()).ga4.partial.apiSecret;
                        const measurementId = (production_default()).ga4.partial.measurementId;
                        const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;
                        const data = {
                            'client_id': gaUserId,
                            'events': [{
                                'name': action,
                                'params': {
                                    category,
                                    label,
                                    noninteraction,
                                    value
                                }
                            }]
                        };
                        return (0, ajax /* default */ .Z)(url, {
                            'method': 'POST',
                            'mode': 'cors',
                            'body': JSON.stringify(data)
                        });
                    })();
                    return Promise.all([gaPromise.catch(() => undefined), ga4promise.catch(() => undefined)]);
                });
                // EXTERNAL MODULE: ./src/general/tools/sendMessage.ts
                var sendMessage = __webpack_require__(1748);
                // EXTERNAL MODULE: ./src/general/storage.ts
                var storage = __webpack_require__(6264);; // CONCATENATED MODULE: ./src/dualUse/ga/partial/chrome/index.ts








                const config = (production_default()).ga;
                const bgRequest = location.href.includes('background');
                const sendTypePromise = (async () => {
                    const condition = config.enabled && (!config.extension_id // For qa / qa2 profiles
                        ||
                        Array.isArray(config.extension_id) && config.extension_id.includes((code_default()).runtime.id));
                    if (!condition) return 'DISABLED';
                    const storageValue = await storage /* default */ .Z.get('useGa');
                    let useGa = (() => {
                        if (typeof storageValue === 'boolean') return storageValue;

                        // Chance to be in GA tracking, from 0 to 1
                        let chance /*: number*/ = config.chance || 0.01; // Use GA for only 1% of users to not exceed GA limits
                        let use /*: boolean*/ = Math.random() < chance;
                        storage /* default */ .Z.set('useGa', use);
                        return use;
                    })();
                    return useGa ? 'TRACK' : 'FILTERED';
                })();

                // Random GA user ID
                const gaUserIdPromise /*: Promise<string | void>*/ = (async () => {
                    let sendType = await sendTypePromise;
                    if (sendType !== 'TRACK') return;
                    let id = await storage /* default */ .Z.get('gaUserId');
                    if (id) return id;
                    id = (0, generateRfc4122Id /* default */ .Z)();
                    storage /* default */ .Z.set('gaUserId', id);
                    return id;
                })();

                // Initial
                (async () => {
                    const gaUserId = await gaUserIdPromise;
                    if (!gaUserId || !bgRequest) return;
                    request(gaUserId, {
                        'type': 'pageview'
                    }); // One time at browser start
                })();

                /** @function */
                const ga = Object.assign(async ({
                    category,
                    action,
                    label,
                    value,
                    noninteraction
                }) => {
                    if (!bgRequest) {
                        return (0, sendMessage /* default */ .Z)({
                            'type': 'ga.partial',
                            'data': {
                                category,
                                action,
                                label,
                                value,
                                noninteraction
                            }
                        });
                    }
                    const sendType = await sendTypePromise;
                    const gaUserId = await gaUserIdPromise;
                    (0, log /* default */ .Z)('GA', `[${sendType}]`, {
                        category,
                        action,
                        label,
                        value,
                        noninteraction
                    });
                    if (sendType !== 'TRACK' || !gaUserId) return; // Flow crap

                    await request(gaUserId, {
                        'type': 'event',
                        action,
                        category,
                        label,
                        noninteraction,
                        value
                    });
                }, {
                    'isTrackedPromise': (async () => {
                        const sendType = await sendTypePromise;
                        return sendType === 'TRACK';
                    })()
                });
                listeners(ga);
                /* harmony default export */
                const chrome = (ga);

                /***/
            }),

        /***/
        9480:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                module.exports = typeof browser !== 'undefined' ? __webpack_require__(Object(function webpackMissingModule() {
                    var e = new Error("Cannot find module './firefox'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }())) : __webpack_require__(8729);

                /***/
            }),

        /***/
        5713:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    Z: () => ( /* binding */ db)
                });

                // UNUSED EXPORTS: LogDb

                // EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
                var code = __webpack_require__(3552);
                var code_default = /*#__PURE__*/ __webpack_require__.n(code);
                // EXTERNAL MODULE: ./config/production.js
                var production = __webpack_require__(4019);
                var production_default = /*#__PURE__*/ __webpack_require__.n(production);; // CONCATENATED MODULE: ./src/dualUse/log/db/limit.ts
                /* harmony default export */
                const limit = (1000);; // CONCATENATED MODULE: ./src/dualUse/log/db/methods/fillWithCrap.ts


                /** @function */
                const generatePart = ( /*: string*/ ) => Math.random().toString(36).substr(2, 5);

                /** @function */
                const generateString = ( /*: string*/ ) => Array(6).fill(0).map(() => generatePart()).join('');

                /** Fill db up to limit with crap (for testing purposes)
                @method */
                /* harmony default export */
                function fillWithCrap() {
                    let list = this.state;
                    let delta = limit - list.length;
                    if (delta <= 0) return;
                    let fillData = Array(delta).fill(0).map(() => ({
                        'record': generateString(),
                        'timestamp': Date.now(),
                        'type': 'log'
                    }));
                    list.push.apply(list, fillData);
                    this.state = list;
                };
                // EXTERNAL MODULE: ./src/general/storage.ts
                var storage = __webpack_require__(6264);
                // EXTERNAL MODULE: ./src/general/time.ts
                var time = __webpack_require__(8575);; // CONCATENATED MODULE: ./src/dualUse/log/db/index.ts






                const bgRequest = location.href.includes('background');

                /** @function */
                const calcByteSize = data => new TextEncoder().encode(JSON.stringify(data)).length;
                class LogDb {
                    constructor() {
                        this.state = [];
                        this.delayedState = [];
                        this.initiated = false;
                        if ((production_default()).type !== 'production') {
                            // Fill db up to limit with crap (for testing purposes)
                            this.fillWithCrap = fillWithCrap.bind(this);
                        }

                        // Initial
                        this.ready = (async () => {
                            const value = (await storage /* default */ .Z.get('log')) || []; // @ts-ignore
                            Array.prototype.push.apply(value, this.delayedState);
                            this.state = value;
                            this.initiated = true;
                            return value;
                        })();
                        if (bgRequest) {
                            /** @function */
                            const loop = async () => {
                                await this.ready;
                                const totalSize = calcByteSize(this.state);
                                if (totalSize > 4000000) {
                                    // Step 1: check size of every entity to get how much to cut
                                    const difference = totalSize - 4000000;
                                    let size = 0;
                                    let count = 0;
                                    for (const record of this.state) {
                                        size += calcByteSize(record);
                                        count++;
                                        if (size > difference) break;
                                    }
                                    this.state.splice(0, count);

                                    // Step 2: cut to make whole size less then 4,000,000 ( comma have size too )
                                    while (calcByteSize(this.state) > 4000000) {
                                        this.state.splice(0, 10);
                                    }
                                }
                                if (typeof browser === 'undefined') {
                                    // Only Chrone have 'storage.local.getBytesInUse' function
                                    const bytesUsage = await code_default().storage.local.getBytesInUse('log');
                                    if (bytesUsage > 4000000) {
                                        this.state.splice(0, 10);
                                    }
                                }
                                try {
                                    await storage /* default */ .Z.set('log', this.state);
                                } catch (error) {
                                    this.state.splice(0, 10);
                                }
                            };
                            time /* default */ .Z.onStart({
                                'name': 'log db',
                                'startDelayInMs': 30 * 1000,
                                'repeatInMinutes': 1
                            }, loop);
                        }
                    }

                    /** Add row to database
                    @method */
                    async add({
                        timestamp,
                        type = 'log',
                        record
                    }) {
                        const data = {
                            timestamp,
                            type,
                            record
                        };
                        if (!this.initiated) {
                            this.delayedState.push(data);
                            return;
                        }
                        this.state.push(data);
                        if (this.state.length > limit) {
                            this.state.splice(0, this.state.length - limit);
                        }
                    }

                    /** Get all data from database
                    @function */
                    async clear() {
                        return storage /* default */ .Z.set('log', []);
                    }

                    /** Get all data from database
                    @method */
                    async getAll() {
                        if (this.initiated) return this.state;
                        return this.ready;
                    }
                }
                /* harmony default export */
                const db = (new LogDb());

                /***/
            }),

        /***/
        825:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Hu: () => ( /* binding */ comparePacs),
                    /* harmony export */
                    ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* unused harmony export compareArrays */
                /* harmony import */
                var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
                /* harmony import */
                var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);

                const isProduction = (config__WEBPACK_IMPORTED_MODULE_0___default().type) === 'production';
                const isDevelopment = (config__WEBPACK_IMPORTED_MODULE_0___default().type) === 'development';

                //   type: string;
                //   timestamp: number;
                //   country: string;
                //   host: string;
                //   time: string;
                //   args: any[];
                // logs
                const healthcheckLog = {
                    globalLog: {
                        defaultCountry: []
                    },
                    pacChangesLog: [],
                    onAuthRequiredLog: {},
                    proxyErrorRequestsLog: {},
                    pingRequestsLog: {},
                    smartCountries: {},
                    smartsPingRequestsLog: [],
                    isDevelopment: (config__WEBPACK_IMPORTED_MODULE_0___default().type) === 'development',
                    isProduction: (config__WEBPACK_IMPORTED_MODULE_0___default().type) === 'production',
                    logProxyErrorEvent({
                        type,
                        country,
                        host,
                        args
                    }) {
                        const logCountry = country || 'defaultCountry';
                        const timestamp = new Date();
                        const time = timestamp.toLocaleTimeString();
                        const logEvent = [type, timestamp, logCountry, host, time, args];
                        // proxyErrorRequestsLog
                        if (isDevelopment) {
                            console.log('DEV HEALTHCHECK: logProxyErrorEvent', logEvent);
                            this._saveToProxyErrorLog(logCountry, logEvent);
                            this._saveToGlobalLog(logCountry, logEvent);
                        }
                    },
                    _saveToProxyErrorLog(country, logEvent) {
                        if (this.proxyErrorRequestsLog.hasOwnProperty(country)) this.proxyErrorRequestsLog[country].push(logEvent);
                        else this.proxyErrorRequestsLog[country] = [logEvent];
                    },
                    logOnAuthRequiredEvent({
                        type,
                        country,
                        host,
                        args
                    }) {
                        const logCountry = country || 'defaultCountry';
                        const timestamp = new Date();
                        const time = timestamp.toLocaleTimeString();
                        const logEvent = [type, timestamp, logCountry, host, time, args];
                        // onAuthRequiredLog
                        if (isDevelopment) {
                            console.log('DEV HEALTHCHECK: logOnAuthRequiredEvent', logEvent);
                            this._saveToOnAuthRequiredLog(logCountry, logEvent);
                            this._saveToGlobalLog(logCountry, logEvent);
                        }
                    },
                    _saveToOnAuthRequiredLog(country, logEvent) {
                        if (this.onAuthRequiredLog.hasOwnProperty(country)) this.onAuthRequiredLog[country].push(logEvent);
                        else this.onAuthRequiredLog[country] = [logEvent];
                    },
                    logSmartSettingPingEvent({
                        type,
                        country,
                        host,
                        args
                    }) {
                        const logCountry = country || 'defaultCountry';
                        const timestamp = new Date();
                        const time = timestamp.toLocaleTimeString();
                        const logEvent = [type, timestamp, logCountry, host, time, args];
                        // smartsPingRequestsLog
                        if (isDevelopment) {
                            console.log('DEV HEALTHCHECK: logSmartSettingPingEvent', logEvent);
                            this.smartsPingRequestsLog.push(logEvent);
                            this._saveToGlobalLog(logCountry, logEvent);
                        }
                    },
                    _saveToGlobalLog(country, logEvent) {
                        if (this.globalLog.hasOwnProperty(country)) this.globalLog[country].push(logEvent);
                        else this.globalLog[country] = [logEvent];
                    },
                    logPacChangeEvent({
                        type,
                        smartSettings,
                        pacTextString,
                        args
                    }) {
                        const timestamp = new Date();
                        const time = timestamp.toLocaleTimeString();
                        const logEvent = [type, timestamp, 'defaultCountry', 'no domain', time, smartSettings, 'initiator: extension', pacTextString, args];
                        // pacChangesLog
                        if (isDevelopment) {
                            console.log('DEV HEALTHCHECK: logPacChangeEvent', logEvent);
                            this.pacChangesLog.push(logEvent);
                            this.globalLog.defaultCountry.push(logEvent);
                        }
                    },
                    consoleLogHealthcheck() {
                        if (!isDevelopment) return;
                        console.log('_'.repeat(80));
                        console.log('smartsPingRequestsLog:', this.smartsPingRequestsLog);
                        console.log('_'.repeat(80));
                        console.log('pacChanges log:', this.pacChangesLog);
                        console.log('_'.repeat(80));
                        console.log('proxyErrorRequestsLog:', this.proxyErrorRequestsLog);
                        console.log('_'.repeat(80));
                        console.log('onAuthRequired log:', this.onAuthRequiredLog);
                        console.log('_'.repeat(80));
                        console.log('Global log:', this.globalLog);
                        console.log('_'.repeat(80));
                    }
                };

                // helpers
                function compareArrays(newArray, oldArray) {
                    const diff = [];
                    const minLen = Math.min(newArray.length, oldArray.length);
                    for (let i = 0; i < minLen; i++) {
                        if (newArray[i] !== oldArray[i]) {
                            diff.push(newArray[i]);
                        }
                    }
                    const longestArray = newArray.length > oldArray.length ? newArray : oldArray;
                    for (let i = minLen; i < longestArray.length; i++) {
                        diff.push(longestArray[i]);
                    }
                    return diff;
                }

                function comparePacs(newPac, oldPac) {
                    const diff = {
                        browsecCountry: {},
                        countries: {},
                        premiumCountries: {},
                        ignoredDomains: [],
                        globalReturn: {},
                        siteFilters: []
                    };
                    // 1. browsecCountry
                    if (newPac.browsecCountry !== oldPac.browsecCountry) {
                        diff.browsecCountry = {
                            newPac: newPac.browsecCountry,
                            oldPac: oldPac.browsecCountry
                        };
                    } else delete diff.browsecCountry;
                    // 2. countries (may be different array keys for new and old pacs)
                    const allCountries = new Set([...Object.keys(oldPac.countries), ...Object.keys(newPac.countries)]);
                    for (let country of allCountries) {
                        const newPacArray = newPac.countries.hasOwnProperty(country) ? newPac.countries[country] : [];
                        const oldPacArray = oldPac.countries.hasOwnProperty(country) ? oldPac.countries[country] : [];
                        diff.countries[country] = compareArrays(newPacArray, oldPacArray);
                    }
                    if (Object.keys(diff.countries).length === 0) delete diff.countries;
                    // 3. globalReturn
                    if (newPac.globalReturn !== oldPac.globalReturn) {
                        diff.globalReturn = {
                            newPac: newPac.globalReturn,
                            oldPac: oldPac.globalReturn
                        };
                    } else delete diff.globalReturn;
                    // 4. ignoredDomains
                    diff.ignoredDomains = compareArrays(newPac.ignoredDomains, oldPac.ignoredDomains);
                    if (diff.ignoredDomains.length === 0) delete diff.ignoredDomains;

                    // 5. premiumCountries
                    const allPremiumCountries = new Set([...Object.keys(oldPac.premiumCountries), ...Object.keys(newPac.premiumCountries)]);
                    for (let country of allPremiumCountries) {
                        const newPacArray = newPac.premiumCountries.hasOwnProperty(country) ? newPac.premiumCountries[country] : [];
                        const oldPacArray = oldPac.premiumCountries.hasOwnProperty(country) ? oldPac.premiumCountries[country] : [];
                        diff.premiumCountries[country] = compareArrays(newPacArray, oldPacArray);
                    }
                    if (Object.keys(diff.premiumCountries).length === 0) delete diff.premiumCountries;

                    // 6. siteFilters
                    const siteFilterToString = filter => `${filter.value} = ${filter.country} (${filter.format})`;
                    diff.siteFilters = compareArrays(newPac.siteFilters.map(siteFilterToString), oldPac.siteFilters.map(siteFilterToString));
                    if (diff.siteFilters.length === 0) delete diff.siteFilters;
                    return diff;
                }
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (healthcheckLog);

                /***/
            }),

        /***/
        6699:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
                /* harmony import */
                var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */
                var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5713);
                /* harmony import */
                var tools_sendMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1748);



                const {
                    _
                } = self;;
                const bgRequest = location.href.includes('background');

                /** @function */
                const stringify = data => data.map(item => {
                    if (_.isObject(item)) return JSON.stringify(item);
                    return typeof item === 'string' ? item : String(item);
                }).join(', ');

                /** @function */
                const storageLogger = async ({
                    type,
                    data
                }) => {
                    const dbStringData = stringify(data);
                    const date = new Date();
                    const time = (() => {
                        let date = new Date();
                        let [day, hours, minutes, seconds] = [date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].map(value => String(value).padStart(2, '0'));
                        return `[${day}, ${hours}:${minutes}:${seconds}]`;
                    })();
                    data.unshift(time);

                    // Console output
                    (() => {
                        if ((config__WEBPACK_IMPORTED_MODULE_0___default().type) !== 'production') {
                            console[type].apply(console, data);
                            return;
                        }
                        console[type](time + ', ' + dbStringData);
                    })();
                    await new Promise(resolve => {
                        setTimeout(resolve, 0);
                    }); // NOTE GAP!

                    // Storing all logs
                    _db__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */ .Z.add({
                        'timestamp': date.getTime(),
                        type,
                        'record': dbStringData
                    });
                };

                /** @function */
                const logger = ({
                    type,
                    data
                }) => {
                    if (bgRequest) {
                        storageLogger({
                            type,
                            data
                        });
                        return;
                    }

                    // Console
                    switch (type) {
                        case 'log':
                            console.log.apply(console, data);
                            break;
                        case 'warn':
                            console.warn.apply(console, data);
                            break;
                        case 'error':
                            console.error.apply(console, data);
                            break;
                    }

                    // Send message to background
                    const messageType = (() => {
                        switch (type) {
                            case 'log':
                                return 'log';
                            case 'warn':
                                return 'log.warn';
                            case 'error':
                                return 'log.error';
                        }
                    })();
                    (0, tools_sendMessage__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */ .Z)({
                        'type': messageType,
                        data
                    });
                };
                let log = Object.assign((...args) => {
                    logger({
                        'type': 'log',
                        'data': args
                    });
                }, {
                    /** console.warn analog */
                    'warn': (...args) => {
                        logger({
                            'type': 'warn',
                            'data': args
                        });
                    },
                    /** console.error analog */
                    'error': (...args) => {
                        logger({
                            'type': 'error',
                            'data': args
                        });
                    },
                    /** console.group() + console.log[] + console.groupEnd() */
                    'group': (name, entries) => {
                        console.group(name);
                        entries.forEach(entry => {
                            logger({
                                'type': 'log',
                                'data': entry
                            });
                        });
                        console.groupEnd();
                    }
                });
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (log);

                /***/
            }),

        /***/
        3357:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    Z: () => ( /* binding */ alarms)
                });

                // EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
                var code = __webpack_require__(3552);
                var code_default = /*#__PURE__*/ __webpack_require__.n(code);; // CONCATENATED MODULE: ./src/general/alarms/generate.ts
                /* global NodeJS */

                let firstEventLoopTask = true;
                setTimeout(() => {
                    firstEventLoopTask = false;
                }, 0);
                /* harmony default export */
                const generate = (alarmsObject => {
                    const alarmsPermission = Boolean(alarmsObject);
                    let alarms = [];
                    let listeners = [];

                    /** @function */
                    const callListeners = name => {
                        listeners.forEach(listener => {
                            listener({
                                name
                            });
                        });
                    };

                    /** @function */
                    const create = (name, {
                        when,
                        periodInMinutes
                    }) => {
                        if (alarmsPermission) {
                            return alarmsObject.create(name, {
                                when,
                                periodInMinutes
                            });
                        }
                        const object = {
                            name,
                            when,
                            periodInMinutes
                        };
                        const startDelay = (() => {
                            if (typeof when === 'number') return when - Date.now();
                            if (typeof periodInMinutes === 'number') {
                                return periodInMinutes * 60 * 1000;
                            }
                            throw new Error('Both "when" and "periodInMinutes" are not specified');
                        })();
                        object.timeoutId = setTimeout(() => {
                            callListeners(name);
                            if (!periodInMinutes) return;

                            /** @function */
                            const loop = () => {
                                callListeners(name);
                                object.timeoutId = setTimeout(loop, periodInMinutes * 60 * 1000);
                            };
                            object.timeoutId = setTimeout(loop, periodInMinutes * 60 * 1000);
                        }, startDelay);

                        // Remove alarm with same name (as in specification of original alarm https://developer.chrome.com/docs/extensions/reference/alarms/#method-create )
                        const index = alarms.findIndex(item => item.name === name);
                        if (index !== -1) alarms.splice(index, 1);
                        alarms.push(object);
                    };
                    return {
                        /** @method */
                        'clear': async name => {
                            if (alarmsPermission) return alarmsObject.clear(name);

                            // Clear timeouts
                            for (const {
                                    'name': alarmName,
                                    timeoutId
                                }
                                of alarms) {
                                if (alarmName === name && timeoutId) clearTimeout(timeoutId);
                            }

                            // Remove alarm itself
                            const oldArray = alarms.slice();
                            alarms = alarms.filter(item => item.name !== name);
                            return oldArray.length !== alarms.length;
                        },
                        /** @method */
                        'createOneTime': (name, {
                            delay
                        }) => {
                            create(name, {
                                'when': Date.now() + delay
                            });
                        },
                        /** @method */
                        'createCycle': (name, {
                            delay,
                            periodInMinutes
                        }) => {
                            create(name, typeof delay === 'number' ? {
                                'when': Date.now() + delay,
                                periodInMinutes
                            } : {
                                periodInMinutes
                            });
                        },
                        /** @method */
                        'hasAlarm': async name => {
                            if (alarmsPermission) {
                                const alarm = await alarmsObject.get(name);
                                return Boolean(alarm);
                            }
                            return alarms.some(item => item.name === name);
                        },
                        /** @method */
                        'on': listener => {
                            if (!firstEventLoopTask) {
                                throw new Error('Alarms.on called after first event loop task');
                            }
                            if (alarmsPermission) {
                                alarmsObject.onAlarm.addListener(listener);
                                return;
                            }
                            listeners.push(listener);
                        },
                        /** @method */
                        'off': listener => {
                            if (alarmsPermission) {
                                alarmsObject.onAlarm.removeListener(listener);
                                return;
                            }
                            listeners = listeners.filter(item => item !== listener);
                        },
                        /** @method */
                        'hasListener': listener => {
                            if (alarmsPermission) {
                                return alarmsObject.onAlarm.hasListener(listener);
                            }
                            return listeners.includes(listener);
                        }
                    };
                });; // CONCATENATED MODULE: ./src/general/alarms/index.ts


                const alarmsPermission = code_default().runtime.getManifest().permissions.includes('alarms');
                /* harmony default export */
                const alarms = (alarmsPermission ? generate((code_default()).alarms) : generate());

                /***/
            }),

        /***/
        6264:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3552);
                /* harmony import */
                var crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0__);
                /* global StorageChange */

                const {
                    _
                } = self;
                let listeners = [];

                /** @class singleton */
                const storage = new class {
                    constructor() {
                        this._data = {};

                        /** @type {Promise} */
                        this.ready = crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.get().then(data => {
                            this._data = data;
                        });
                        this.get = this.get.bind(this);
                        this.set = this.set.bind(this);
                        this.remove = this.remove.bind(this);
                    }

                    /** @function */
                    addListener(listener) {
                        listeners.push(listener);
                    }

                    /** @function */
                    removeListener(listner) {
                        listeners = listeners.filter(item => item !== listner);
                    }

                    /** Read async
                    @method */
                    // eslint-disable-line no-dupe-class-members

                    // eslint-disable-line no-dupe-class-members
                    async get(key) {
                        // eslint-disable-line no-dupe-class-members
                        let data = await crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.get(key);
                        if (typeof key === 'string') return data[key];
                        return data;
                    }

                    /** Read sync
                    @method */
                    getSync(key) {
                        return _.cloneDeep(this._data[key]);
                    }

                    /** Write async
                    @method */
                    // eslint-disable-line no-dupe-class-members

                    // eslint-disable-line no-dupe-class-members
                    set(...args) {
                        // eslint-disable-line no-dupe-class-members
                        // Two argument syntax
                        if (args.length === 2) {
                            let [key, value] = args;
                            value = _.cloneDeep(value);
                            this._data[key] = value;
                            return crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.set({
                                [key]: value
                            });
                        }

                        // One argument syntax
                        const properties = args[0];
                        return crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.set(properties);
                    }

                    /** Write sync
                    @method */
                    setSync(key, value) {
                        value = _.cloneDeep(value);
                        this._data[key] = value;
                        crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.set({
                            [key]: value
                        });
                    }

                    /** Remove async
                    @method */
                    // eslint-disable-line no-dupe-class-members

                    // eslint-disable-line no-dupe-class-members
                    async remove(...args) {
                        // eslint-disable-line no-dupe-class-members
                        const keys = args.flat();
                        keys.forEach(key => {
                            delete this._data[key];
                        });
                        return crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.remove(keys);
                    }

                    /** Remove sync
                    @method */
                    removeSync(...args) {
                        let keys = args.flat();
                        keys.forEach(key => {
                            delete this._data[key];
                        });
                        crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.remove(keys);
                    }

                    /** @method */
                    onChange(options) {
                        const ignoreList = options.ignore;

                        /** @function */
                        const listener = (changes, state, oldState) => {
                            const keys = Object.keys(changes);
                            if (!options.for.some(key => keys.includes(key))) return;

                            // Remove ignored pairs key => value
                            if (ignoreList) {
                                for (const {
                                        property,
                                        value
                                    }
                                    of ignoreList) {
                                    if (!keys.includes(property)) continue;
                                    if (changes[property].oldValue !== value) continue;
                                    delete changes[property];
                                }
                            }
                            if (!Object.keys(changes).length) return;
                            if ('compile' in options) {
                                const {
                                    compile,
                                    'do': action
                                } = options;
                                const newCompiled = compile(state);
                                const oldCompiled = compile(oldState);
                                if (_.isEqual(newCompiled, oldCompiled)) return;
                                action(newCompiled, state);
                            } else if ('changeCompilation' in options) {
                                const value = options.changeCompilation(state, oldState);
                                if (!value) return;
                                options.do(state);
                            } else {
                                options.do(state);
                            }
                        };
                        onChangeListeners.push(listener);
                        return () => {
                            onChangeListeners = onChangeListeners.filter(item => item !== listener);
                        };
                    }
                }();
                let onChangeListeners = [];
                crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.onChanged.addListener((changes, area) => {
                    if (area !== 'local') return;
                    listeners.forEach(listener => {
                        listener(changes);
                    });
                    (async () => {
                        const state = await crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.get(null);
                        const oldChanges = Object.fromEntries(Object.entries(changes).map(([key, {
                            oldValue
                        }]) => [key, oldValue]));
                        const oldState = Object.assign({}, state, oldChanges);
                        if (_.isEqual(state, oldState)) return;
                        for (const listener of onChangeListeners) {
                            listener(Object.assign({}, changes), state, oldState);
                        }
                    })();
                });
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (new Proxy(storage, {
                    get(target, key) {
                        if (typeof key === 'string') {
                            switch (key) {
                                case 'addListener':
                                    return storage.addListener;
                                case 'get':
                                    return storage.get;
                                case 'onChange':
                                    return storage.onChange;
                                case 'remove':
                                    return storage.remove;
                                case 'removeListener':
                                    return storage.removeListener;
                                case 'ready':
                                    return storage.ready;
                                case 'set':
                                    return storage.set;
                                default:
                                    return storage.getSync(key);
                            }
                        }
                        if (typeof key === 'number') return storage.getSync(String(key));
                        throw new Error('storage called with not string method');
                    },
                    set(target, key, value) {
                        if (typeof key === 'string') {
                            storage.setSync(key, value);
                            return true;
                        }
                        if (typeof key === 'number') {
                            storage.setSync(String(key), value);
                            return true;
                        }
                        return false;
                    },
                    deleteProperty(target, key) {
                        if (typeof key === 'string') {
                            storage.removeSync(key);
                            return true;
                        }
                        if (typeof key === 'number') {
                            storage.removeSync(String(key));
                            return true;
                        }
                        return false;
                    }
                }));

                /***/
            }),

        /***/
        4501:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    Z: () => ( /* binding */ general_store)
                });

                // UNUSED EXPORTS: StoreClass

                ; // CONCATENATED MODULE: ./node_modules/redux/es/redux.js


                /**
                 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
                 *
                 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
                 * during build.
                 * @param {number} code
                 */
                function formatProdErrorMessage(code) {
                    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
                }

                // Inlined version of the `symbol-observable` polyfill
                var $$observable = (function() {
                    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
                })();

                /**
                 * These are private action types reserved by Redux.
                 * For any unknown actions, you must return the current state.
                 * If the current state is undefined, you must return the initial state.
                 * Do not reference these action types directly in your code.
                 */
                var randomString = function randomString() {
                    return Math.random().toString(36).substring(7).split('').join('.');
                };

                var ActionTypes = {
                    INIT: "@@redux/INIT" + randomString(),
                    REPLACE: "@@redux/REPLACE" + randomString(),
                    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                    }
                };

                /**
                 * @param {any} obj The object to inspect.
                 * @returns {boolean} True if the argument appears to be a plain object.
                 */
                function isPlainObject(obj) {
                    if (typeof obj !== 'object' || obj === null) return false;
                    var proto = obj;

                    while (Object.getPrototypeOf(proto) !== null) {
                        proto = Object.getPrototypeOf(proto);
                    }

                    return Object.getPrototypeOf(obj) === proto;
                }

                // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
                function miniKindOf(val) {
                    if (val === void 0) return 'undefined';
                    if (val === null) return 'null';
                    var type = typeof val;

                    switch (type) {
                        case 'boolean':
                        case 'string':
                        case 'number':
                        case 'symbol':
                        case 'function': {
                            return type;
                        }
                    }

                    if (Array.isArray(val)) return 'array';
                    if (isDate(val)) return 'date';
                    if (isError(val)) return 'error';
                    var constructorName = ctorName(val);

                    switch (constructorName) {
                        case 'Symbol':
                        case 'Promise':
                        case 'WeakMap':
                        case 'WeakSet':
                        case 'Map':
                        case 'Set':
                            return constructorName;
                    } // other


                    return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
                }

                function ctorName(val) {
                    return typeof val.constructor === 'function' ? val.constructor.name : null;
                }

                function isError(val) {
                    return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
                }

                function isDate(val) {
                    if (val instanceof Date) return true;
                    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
                }

                function kindOf(val) {
                    var typeOfVal = typeof val;

                    if (false) {}

                    return typeOfVal;
                }

                /**
                 * @deprecated
                 *
                 * **We recommend using the `configureStore` method
                 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
                 *
                 * Redux Toolkit is our recommended approach for writing Redux logic today,
                 * including store setup, reducers, data fetching, and more.
                 *
                 * **For more details, please read this Redux docs page:**
                 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
                 *
                 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
                 * simplifies setup and helps avoid common bugs.
                 *
                 * You should not be using the `redux` core package by itself today, except for learning purposes.
                 * The `createStore` method from the core `redux` package will not be removed, but we encourage
                 * all users to migrate to using Redux Toolkit for all Redux code.
                 *
                 * If you want to use `createStore` without this visual deprecation warning, use
                 * the `legacy_createStore` import instead:
                 *
                 * `import { legacy_createStore as createStore} from 'redux'`
                 *
                 */

                function createStore(reducer, preloadedState, enhancer) {
                    var _ref2;

                    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
                        throw new Error(true ? formatProdErrorMessage(0) : 0);
                    }

                    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
                        enhancer = preloadedState;
                        preloadedState = undefined;
                    }

                    if (typeof enhancer !== 'undefined') {
                        if (typeof enhancer !== 'function') {
                            throw new Error(true ? formatProdErrorMessage(1) : 0);
                        }

                        return enhancer(createStore)(reducer, preloadedState);
                    }

                    if (typeof reducer !== 'function') {
                        throw new Error(true ? formatProdErrorMessage(2) : 0);
                    }

                    var currentReducer = reducer;
                    var currentState = preloadedState;
                    var currentListeners = [];
                    var nextListeners = currentListeners;
                    var isDispatching = false;
                    /**
                     * This makes a shallow copy of currentListeners so we can use
                     * nextListeners as a temporary list while dispatching.
                     *
                     * This prevents any bugs around consumers calling
                     * subscribe/unsubscribe in the middle of a dispatch.
                     */

                    function ensureCanMutateNextListeners() {
                        if (nextListeners === currentListeners) {
                            nextListeners = currentListeners.slice();
                        }
                    }
                    /**
                     * Reads the state tree managed by the store.
                     *
                     * @returns {any} The current state tree of your application.
                     */


                    function getState() {
                        if (isDispatching) {
                            throw new Error(true ? formatProdErrorMessage(3) : 0);
                        }

                        return currentState;
                    }
                    /**
                     * Adds a change listener. It will be called any time an action is dispatched,
                     * and some part of the state tree may potentially have changed. You may then
                     * call `getState()` to read the current state tree inside the callback.
                     *
                     * You may call `dispatch()` from a change listener, with the following
                     * caveats:
                     *
                     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
                     * If you subscribe or unsubscribe while the listeners are being invoked, this
                     * will not have any effect on the `dispatch()` that is currently in progress.
                     * However, the next `dispatch()` call, whether nested or not, will use a more
                     * recent snapshot of the subscription list.
                     *
                     * 2. The listener should not expect to see all state changes, as the state
                     * might have been updated multiple times during a nested `dispatch()` before
                     * the listener is called. It is, however, guaranteed that all subscribers
                     * registered before the `dispatch()` started will be called with the latest
                     * state by the time it exits.
                     *
                     * @param {Function} listener A callback to be invoked on every dispatch.
                     * @returns {Function} A function to remove this change listener.
                     */


                    function subscribe(listener) {
                        if (typeof listener !== 'function') {
                            throw new Error(true ? formatProdErrorMessage(4) : 0);
                        }

                        if (isDispatching) {
                            throw new Error(true ? formatProdErrorMessage(5) : 0);
                        }

                        var isSubscribed = true;
                        ensureCanMutateNextListeners();
                        nextListeners.push(listener);
                        return function unsubscribe() {
                            if (!isSubscribed) {
                                return;
                            }

                            if (isDispatching) {
                                throw new Error(true ? formatProdErrorMessage(6) : 0);
                            }

                            isSubscribed = false;
                            ensureCanMutateNextListeners();
                            var index = nextListeners.indexOf(listener);
                            nextListeners.splice(index, 1);
                            currentListeners = null;
                        };
                    }
                    /**
                     * Dispatches an action. It is the only way to trigger a state change.
                     *
                     * The `reducer` function, used to create the store, will be called with the
                     * current state tree and the given `action`. Its return value will
                     * be considered the **next** state of the tree, and the change listeners
                     * will be notified.
                     *
                     * The base implementation only supports plain object actions. If you want to
                     * dispatch a Promise, an Observable, a thunk, or something else, you need to
                     * wrap your store creating function into the corresponding middleware. For
                     * example, see the documentation for the `redux-thunk` package. Even the
                     * middleware will eventually dispatch plain object actions using this method.
                     *
                     * @param {Object} action A plain object representing “what changed”. It is
                     * a good idea to keep actions serializable so you can record and replay user
                     * sessions, or use the time travelling `redux-devtools`. An action must have
                     * a `type` property which may not be `undefined`. It is a good idea to use
                     * string constants for action types.
                     *
                     * @returns {Object} For convenience, the same action object you dispatched.
                     *
                     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
                     * return something else (for example, a Promise you can await).
                     */


                    function dispatch(action) {
                        if (!isPlainObject(action)) {
                            throw new Error(true ? formatProdErrorMessage(7) : 0);
                        }

                        if (typeof action.type === 'undefined') {
                            throw new Error(true ? formatProdErrorMessage(8) : 0);
                        }

                        if (isDispatching) {
                            throw new Error(true ? formatProdErrorMessage(9) : 0);
                        }

                        try {
                            isDispatching = true;
                            currentState = currentReducer(currentState, action);
                        } finally {
                            isDispatching = false;
                        }

                        var listeners = currentListeners = nextListeners;

                        for (var i = 0; i < listeners.length; i++) {
                            var listener = listeners[i];
                            listener();
                        }

                        return action;
                    }
                    /**
                     * Replaces the reducer currently used by the store to calculate the state.
                     *
                     * You might need this if your app implements code splitting and you want to
                     * load some of the reducers dynamically. You might also need this if you
                     * implement a hot reloading mechanism for Redux.
                     *
                     * @param {Function} nextReducer The reducer for the store to use instead.
                     * @returns {void}
                     */


                    function replaceReducer(nextReducer) {
                        if (typeof nextReducer !== 'function') {
                            throw new Error(true ? formatProdErrorMessage(10) : 0);
                        }

                        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
                        // Any reducers that existed in both the new and old rootReducer
                        // will receive the previous state. This effectively populates
                        // the new state tree with any relevant data from the old one.

                        dispatch({
                            type: ActionTypes.REPLACE
                        });
                    }
                    /**
                     * Interoperability point for observable/reactive libraries.
                     * @returns {observable} A minimal observable of state changes.
                     * For more information, see the observable proposal:
                     * https://github.com/tc39/proposal-observable
                     */


                    function observable() {
                        var _ref;

                        var outerSubscribe = subscribe;
                        return _ref = {
                            /**
                             * The minimal observable subscription method.
                             * @param {Object} observer Any object that can be used as an observer.
                             * The observer object should have a `next` method.
                             * @returns {subscription} An object with an `unsubscribe` method that can
                             * be used to unsubscribe the observable from the store, and prevent further
                             * emission of values from the observable.
                             */
                            subscribe: function subscribe(observer) {
                                if (typeof observer !== 'object' || observer === null) {
                                    throw new Error(true ? formatProdErrorMessage(11) : 0);
                                }

                                function observeState() {
                                    if (observer.next) {
                                        observer.next(getState());
                                    }
                                }

                                observeState();
                                var unsubscribe = outerSubscribe(observeState);
                                return {
                                    unsubscribe: unsubscribe
                                };
                            }
                        }, _ref[$$observable] = function() {
                            return this;
                        }, _ref;
                    } // When a store is created, an "INIT" action is dispatched so that every
                    // reducer returns their initial state. This effectively populates
                    // the initial state tree.


                    dispatch({
                        type: ActionTypes.INIT
                    });
                    return _ref2 = {
                        dispatch: dispatch,
                        subscribe: subscribe,
                        getState: getState,
                        replaceReducer: replaceReducer
                    }, _ref2[$$observable] = observable, _ref2;
                }
                /**
                 * Creates a Redux store that holds the state tree.
                 *
                 * **We recommend using `configureStore` from the
                 * `@reduxjs/toolkit` package**, which replaces `createStore`:
                 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
                 *
                 * The only way to change the data in the store is to call `dispatch()` on it.
                 *
                 * There should only be a single store in your app. To specify how different
                 * parts of the state tree respond to actions, you may combine several reducers
                 * into a single reducer function by using `combineReducers`.
                 *
                 * @param {Function} reducer A function that returns the next state tree, given
                 * the current state tree and the action to handle.
                 *
                 * @param {any} [preloadedState] The initial state. You may optionally specify it
                 * to hydrate the state from the server in universal apps, or to restore a
                 * previously serialized user session.
                 * If you use `combineReducers` to produce the root reducer function, this must be
                 * an object with the same shape as `combineReducers` keys.
                 *
                 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
                 * to enhance the store with third-party capabilities such as middleware,
                 * time travel, persistence, etc. The only store enhancer that ships with Redux
                 * is `applyMiddleware()`.
                 *
                 * @returns {Store} A Redux store that lets you read the state, dispatch actions
                 * and subscribe to changes.
                 */

                var legacy_createStore = ( /* unused pure expression or super */ null && (createStore));

                /**
                 * Prints a warning in the console if it exists.
                 *
                 * @param {String} message The warning message.
                 * @returns {void}
                 */
                function warning(message) {
                    /* eslint-disable no-console */
                    if (typeof console !== 'undefined' && typeof console.error === 'function') {
                        console.error(message);
                    }
                    /* eslint-enable no-console */


                    try {
                        // This error was thrown as a convenience so that if you enable
                        // "break on all exceptions" in your console,
                        // it would pause the execution at this line.
                        throw new Error(message);
                    } catch (e) {} // eslint-disable-line no-empty

                }

                function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
                    var reducerKeys = Object.keys(reducers);
                    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

                    if (reducerKeys.length === 0) {
                        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
                    }

                    if (!isPlainObject(inputState)) {
                        return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
                    }

                    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
                        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
                    });
                    unexpectedKeys.forEach(function(key) {
                        unexpectedKeyCache[key] = true;
                    });
                    if (action && action.type === ActionTypes.REPLACE) return;

                    if (unexpectedKeys.length > 0) {
                        return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
                    }
                }

                function assertReducerShape(reducers) {
                    Object.keys(reducers).forEach(function(key) {
                        var reducer = reducers[key];
                        var initialState = reducer(undefined, {
                            type: ActionTypes.INIT
                        });

                        if (typeof initialState === 'undefined') {
                            throw new Error(true ? formatProdErrorMessage(12) : 0);
                        }

                        if (typeof reducer(undefined, {
                                type: ActionTypes.PROBE_UNKNOWN_ACTION()
                            }) === 'undefined') {
                            throw new Error(true ? formatProdErrorMessage(13) : 0);
                        }
                    });
                }
                /**
                 * Turns an object whose values are different reducer functions, into a single
                 * reducer function. It will call every child reducer, and gather their results
                 * into a single state object, whose keys correspond to the keys of the passed
                 * reducer functions.
                 *
                 * @param {Object} reducers An object whose values correspond to different
                 * reducer functions that need to be combined into one. One handy way to obtain
                 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
                 * undefined for any action. Instead, they should return their initial state
                 * if the state passed to them was undefined, and the current state for any
                 * unrecognized action.
                 *
                 * @returns {Function} A reducer function that invokes every reducer inside the
                 * passed object, and builds a state object with the same shape.
                 */


                function combineReducers(reducers) {
                    var reducerKeys = Object.keys(reducers);
                    var finalReducers = {};

                    for (var i = 0; i < reducerKeys.length; i++) {
                        var key = reducerKeys[i];

                        if (false) {}

                        if (typeof reducers[key] === 'function') {
                            finalReducers[key] = reducers[key];
                        }
                    }

                    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
                    // keys multiple times.

                    var unexpectedKeyCache;

                    if (false) {}

                    var shapeAssertionError;

                    try {
                        assertReducerShape(finalReducers);
                    } catch (e) {
                        shapeAssertionError = e;
                    }

                    return function combination(state, action) {
                        if (state === void 0) {
                            state = {};
                        }

                        if (shapeAssertionError) {
                            throw shapeAssertionError;
                        }

                        if (false) {
                            var warningMessage;
                        }

                        var hasChanged = false;
                        var nextState = {};

                        for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                            var _key = finalReducerKeys[_i];
                            var reducer = finalReducers[_key];
                            var previousStateForKey = state[_key];
                            var nextStateForKey = reducer(previousStateForKey, action);

                            if (typeof nextStateForKey === 'undefined') {
                                var actionType = action && action.type;
                                throw new Error(true ? formatProdErrorMessage(14) : 0);
                            }

                            nextState[_key] = nextStateForKey;
                            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                        }

                        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                        return hasChanged ? nextState : state;
                    };
                }

                function bindActionCreator(actionCreator, dispatch) {
                    return function() {
                        return dispatch(actionCreator.apply(this, arguments));
                    };
                }
                /**
                 * Turns an object whose values are action creators, into an object with the
                 * same keys, but with every function wrapped into a `dispatch` call so they
                 * may be invoked directly. This is just a convenience method, as you can call
                 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
                 *
                 * For convenience, you can also pass an action creator as the first argument,
                 * and get a dispatch wrapped function in return.
                 *
                 * @param {Function|Object} actionCreators An object whose values are action
                 * creator functions. One handy way to obtain it is to use ES6 `import * as`
                 * syntax. You may also pass a single function.
                 *
                 * @param {Function} dispatch The `dispatch` function available on your Redux
                 * store.
                 *
                 * @returns {Function|Object} The object mimicking the original object, but with
                 * every action creator wrapped into the `dispatch` call. If you passed a
                 * function as `actionCreators`, the return value will also be a single
                 * function.
                 */


                function bindActionCreators(actionCreators, dispatch) {
                    if (typeof actionCreators === 'function') {
                        return bindActionCreator(actionCreators, dispatch);
                    }

                    if (typeof actionCreators !== 'object' || actionCreators === null) {
                        throw new Error(true ? formatProdErrorMessage(16) : 0);
                    }

                    var boundActionCreators = {};

                    for (var key in actionCreators) {
                        var actionCreator = actionCreators[key];

                        if (typeof actionCreator === 'function') {
                            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                        }
                    }

                    return boundActionCreators;
                }

                /**
                 * Composes single-argument functions from right to left. The rightmost
                 * function can take multiple arguments as it provides the signature for
                 * the resulting composite function.
                 *
                 * @param {...Function} funcs The functions to compose.
                 * @returns {Function} A function obtained by composing the argument functions
                 * from right to left. For example, compose(f, g, h) is identical to doing
                 * (...args) => f(g(h(...args))).
                 */
                function compose() {
                    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
                        funcs[_key] = arguments[_key];
                    }

                    if (funcs.length === 0) {
                        return function(arg) {
                            return arg;
                        };
                    }

                    if (funcs.length === 1) {
                        return funcs[0];
                    }

                    return funcs.reduce(function(a, b) {
                        return function() {
                            return a(b.apply(void 0, arguments));
                        };
                    });
                }

                /**
                 * Creates a store enhancer that applies middleware to the dispatch method
                 * of the Redux store. This is handy for a variety of tasks, such as expressing
                 * asynchronous actions in a concise manner, or logging every action payload.
                 *
                 * See `redux-thunk` package as an example of the Redux middleware.
                 *
                 * Because middleware is potentially asynchronous, this should be the first
                 * store enhancer in the composition chain.
                 *
                 * Note that each middleware will be given the `dispatch` and `getState` functions
                 * as named arguments.
                 *
                 * @param {...Function} middlewares The middleware chain to be applied.
                 * @returns {Function} A store enhancer applying the middleware.
                 */

                function applyMiddleware() {
                    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
                        middlewares[_key] = arguments[_key];
                    }

                    return function(createStore) {
                        return function() {
                            var store = createStore.apply(void 0, arguments);

                            var _dispatch = function dispatch() {
                                throw new Error(true ? formatProdErrorMessage(15) : 0);
                            };

                            var middlewareAPI = {
                                getState: store.getState,
                                dispatch: function dispatch() {
                                    return _dispatch.apply(void 0, arguments);
                                }
                            };
                            var chain = middlewares.map(function(middleware) {
                                return middleware(middlewareAPI);
                            });
                            _dispatch = compose.apply(void 0, chain)(store.dispatch);
                            return _objectSpread(_objectSpread({}, store), {}, {
                                dispatch: _dispatch
                            });
                        };
                    };
                }



                // EXTERNAL MODULE: ./config/production.js
                var production = __webpack_require__(4019);
                var production_default = /*#__PURE__*/ __webpack_require__.n(production);
                // EXTERNAL MODULE: ./src/general/tools/hideStoreAccountData.ts
                var hideStoreAccountData = __webpack_require__(5134);
                // EXTERNAL MODULE: ./src/dualUse/log/index.ts
                var log = __webpack_require__(6699);
                // EXTERNAL MODULE: ./src/general/storage.ts
                var storage = __webpack_require__(6264);
                // EXTERNAL MODULE: ./src/dualUse/log/healthcheck/index.ts
                var healthcheck = __webpack_require__(825);; // CONCATENATED MODULE: ./src/general/store/createReducer.ts
                /* global AjaxAccount, LowLevelPac, PingRating, Price, Promotion, ProxyServers, StoreAccount, StoreGuestAccount, StoreLoginedInAccount, StoreState, StoreAction, UserPac */





                const {
                    _
                } = self;
                const showLogs = location.href.includes('background');
                const makeAction = {
                    'pacChangesCount': 0,
                    /** @method */
                    'Active internal experiments: add': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const {
                            experimentId
                        } = action;
                        let oldValue = state.activeInternalExperiments;
                        let newValue = oldValue.slice();
                        newValue.push(experimentId);
                        if (!noStorage) {
                            storage /* default */ .Z.set('activeInternalExperiments', newValue);
                        }
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: active internal experiments update. New: ', newValue, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            activeInternalExperiments: newValue
                        });
                    },
                    /** @method */
                    'Active internal experiments: remove': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const {
                            experimentId
                        } = action;
                        let oldValue = state.activeInternalExperiments;
                        let newValue = oldValue.filter(item => item !== experimentId);
                        if (!noStorage) {
                            storage /* default */ .Z.set('activeInternalExperiments', newValue);
                        }
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: active internal experiments update. New: ', newValue, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            activeInternalExperiments: newValue
                        });
                    },
                    /** @method */
                    'Active internal experiments: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const newValue = action.data.slice();
                        const oldValue = state.activeInternalExperiments;
                        if (!noStorage) storage /* default */ .Z.set('activeInternalExperiments', newValue);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: active internal experiments update. New: ', newValue, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            activeInternalExperiments: newValue
                        });
                    },
                    /** @method */
                    'Browsec.com available: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            data
                        } = action;
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: browsec.com available update. New: ', data, '. Old: ', state.browsecComAvailable);
                        }
                        if (!noStorage) storage /* default */ .Z.set('browsec.com available', data);
                        return Object.assign({}, state, {
                            browsecComAvailable: data
                        });
                    },
                    /** @method */
                    'Cache removal: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            data
                        } = action;
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: cache removal update. New: ', data, '. Old: ', state.cacheRemoval);
                        }
                        if (!noStorage) storage /* default */ .Z.set('cacheRemoval', data);
                        return Object.assign({}, state, {
                            cacheRemoval: data
                        });
                    },
                    /** @method */
                    'Days after install: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            days
                        } = action;
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: days after install update. New: ', days, '. Old: ', state.daysAfterInstall);
                        }
                        return Object.assign({}, state, {
                            daysAfterInstall: days
                        });
                    },
                    /** @method */
                    'Domain: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            domain
                        } = action;
                        if ((production_default()).type === 'development' && showLogs) {
                            (0, log /* default */ .Z)('Store: domain update. New: ', domain, '. Old: ', state.domain);
                        }
                        if (!noStorage) storage /* default */ .Z.set('domain', domain);
                        return Object.assign({}, state, {
                            domain
                        });
                    },
                    /** @method */
                    'Favorites: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let favorites = action.data.slice();
                        if (!noStorage) storage /* default */ .Z.set('favorites', favorites);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: favorites update. New: ', favorites, '. Old: ', state.favorites);
                        }
                        return Object.assign({}, state, {
                            favorites
                        });
                    },
                    /** @method */
                    'Ignored experiments: add': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const {
                            experimentId
                        } = action;
                        const oldValue = state.ignoredExperiments;
                        const newValue = oldValue.slice();
                        newValue.push(experimentId);
                        newValue.sort();
                        if (!noStorage) {
                            storage /* default */ .Z.set('ignoredExperiments', newValue);
                        }
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: ignored experiments update. New: ', newValue, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            ignoredExperiments: newValue
                        });
                    },
                    /** @method */
                    'Ignored experiments: remove': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const {
                            experimentId
                        } = action;
                        const oldValue = state.ignoredExperiments;
                        const newValue = oldValue.filter(item => item !== experimentId);
                        if (!noStorage) {
                            storage /* default */ .Z.set('ignoredExperiments', newValue);
                        }
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: ignored experiments update. New: ', newValue, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            ignoredExperiments: newValue
                        });
                    },
                    /** @method */
                    'Ignored experiments: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const newValue = action.data.slice();
                        const oldValue = state.ignoredExperiments;
                        if (!noStorage) storage /* default */ .Z.set('ignoredExperiments', newValue);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: ignored experiments update. New: ', newValue, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            ignoredExperiments: newValue
                        });
                    },
                    /** @method */
                    'Internal experiments: add': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            experimentId,
                            variant
                        } = action;
                        let oldValue = state.internalExperiments;
                        let newValue = Object.assign({}, oldValue);
                        newValue[experimentId] = variant;
                        if (!noStorage) {
                            storage /* default */ .Z.set('internal experiments', newValue);
                        }
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: internal experiments update. New: ', newValue, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            internalExperiments: newValue
                        });
                    },
                    /** @method */
                    'Internal experiments: remove': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            experimentId
                        } = action;
                        let oldValue = state.internalExperiments;
                        let newValue = Object.assign({}, oldValue);
                        delete newValue[experimentId];
                        if (!noStorage) storage /* default */ .Z.set('internal experiments', newValue);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: internal experiments update. New: ', newValue, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            internalExperiments: newValue
                        });
                    },
                    /** @method */
                    'Internal experiments: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const newValue = Object.assign({}, action.data);
                        const oldValue = state.internalExperiments;
                        if (!noStorage) storage /* default */ .Z.set('internal experiments', newValue);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: internal experiments update. New: ', newValue, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            internalExperiments: newValue
                        });
                    },
                    /** @method */
                    'Low level PAC: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const lowLevelPac = _.cloneDeep(action.data);
                        if (!noStorage) storage /* default */ .Z.set('lowLevelPac', lowLevelPac);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: low level PAC update. New: ', lowLevelPac, '. Old: ', state.lowLevelPac);
                        }
                        return Object.assign({}, state, {
                            lowLevelPac
                        });
                    },
                    /** @method */
                    'Low level PAC: update': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const lowLevelPac = _.cloneDeep(Object.assign({}, state.lowLevelPac, action.data));
                        const newPac = lowLevelPac;
                        const oldPac = state.lowLevelPac;

                        // log changes
                        makeAction.pacChangesCount++;
                        const changeLog = {
                            pacChangesCount: makeAction.pacChangesCount,
                            payload: action.data,
                            changes: (0, healthcheck /* comparePacs */ .Hu)(newPac, oldPac)
                        };
                        healthcheck /* default */ .ZP.logPacChangeEvent({
                            type: 'pac-update-changes-comparision',
                            smartSettings: '',
                            pacTextString: '',
                            args: [JSON.stringify(changeLog), `pacChangesCount: ${makeAction.pacChangesCount}`]
                        });
                        if (!noStorage) storage /* default */ .Z.set('lowLevelPac', lowLevelPac);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: low level PAC update. New: ', newPac, '. Old: ', oldPac);
                        }
                        return Object.assign({}, state, {
                            newPac
                        });
                    },
                    /** @method */
                    'Page: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let oldPage = state.page;
                        let newState = Object.assign({}, state);
                        newState.page = action.page;
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: page change. New: ', newState.page, 'Old: ', oldPage);
                        }
                        return newState;
                    },
                    /** @method */
                    'Ping: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        /** @type {Object<Number>} */
                        let ping = _.cloneDeep(action.data);
                        if (!noStorage) storage /* default */ .Z.set('ping', ping);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: ping data update. New: ', ping, '. Old: ', state.ping);
                        }
                        return Object.assign({}, state, {
                            ping
                        });
                    },
                    /** @method */
                    'Prices: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            prices
                        } = action;
                        if (!noStorage) storage /* default */ .Z.set('prices', prices);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: prices update. New: ', prices, '. Old: ', state.prices);
                        }
                        return Object.assign({}, state, {
                            prices
                        });
                    },
                    /** @method */
                    'Price trial: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            priceTrial
                        } = action;
                        if (!noStorage) storage /* default */ .Z.set('priceTrial', priceTrial);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: price trial update. New: ', priceTrial, '. Old: ', state.priceTrial);
                        }
                        return Object.assign({}, state, {
                            priceTrial
                        });
                    },
                    /** @method */
                    'Promotions block: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let oldValue = state.promotionsBlock;
                        let value = action.data;
                        if (!noStorage) storage /* default */ .Z.set('promotionsBlock', value);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: Promotions block update. New: ', value, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            promotionsBlock: value
                        });
                    },
                    /** @method */
                    'Promotions: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let promotions = _.cloneDeep(action.data);
                        if (!noStorage) storage /* default */ .Z.set('promotions', promotions);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: promotions update. New: ', promotions, '. Old: ', state.promotions);
                        }
                        return Object.assign({}, state, {
                            promotions
                        });
                    },
                    /** @method */
                    'Proxy domains: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const oldValue = state.proxyDomains;
                        const value = action.data;
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: proxy domains update. New: ', value, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            proxyDomains: value
                        });
                    },
                    /** @method */
                    'Proxy domains: set free': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            free: oldValue,
                            premium
                        } = state.proxyDomains;
                        let value = action.data;
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: free proxy domains update. New: ', value, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            proxyDomains: {
                                free: value,
                                premium
                            }
                        });
                    },
                    /** @method */
                    'Proxy domains: set premium': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            free,
                            premium: oldValue
                        } = state.proxyDomains;
                        let value = action.data;
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: premium proxy domains update. New: ', value, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            proxyDomains: {
                                free,
                                premium: value
                            }
                        });
                    },
                    /** @method */
                    'Proxy servers: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const servers = action.data;
                        if (showLogs)(0, log /* default */ .Z)('Store: proxy servers update. ', servers);
                        return Object.assign({}, state, {
                            proxyServers: servers
                        });
                    },
                    /** @method */
                    'Timezone change: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let oldValue = state.timezoneChange;
                        let value = action.data;
                        if (!noStorage) storage /* default */ .Z.set('timezoneChange', value);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: timezone change update. New: ', value, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            timezoneChange: value
                        });
                    },
                    /** @method */
                    'Timezones: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let oldValue = state.timezones;
                        let value = action.data;
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: timezones update. New: ', value, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            timezones: value
                        });
                    },
                    /** @method */
                    'User: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const oldAccount = state.user;
                        const account = (() => {
                            const timestamp = {
                                validUntil: Date.now() + 5 * 60 * 1000,
                                // TODO make Refresh time separate constant
                                version: Date.now()
                            };

                            // Guest
                            // @ts-ignore
                            if (typeof action.data.email !== 'string') {
                                return {
                                    premium: false,
                                    timestamp,
                                    type: 'guest'
                                };
                            }

                            // Logined
                            return {
                                // @ts-ignore
                                email: action.data.email,
                                loginData: {
                                    // @ts-ignore
                                    id: action.data.id,
                                    // @ts-ignore
                                    credentials: action.data.credentials,
                                    // @ts-ignore
                                    subscription: action.data.subscription
                                },
                                // @ts-ignore
                                premium: action.data.premium,
                                timestamp,
                                type: 'logined'
                            };
                        })();
                        if (!noStorage) storage /* default */ .Z.set('account', account);
                        {
                            let oldState = _.cloneDeep(oldAccount);
                            let newState = _.cloneDeep(account);
                            if ((production_default()).type !== 'development') {
                                delete oldState.email;
                                if (oldState.type === 'logined') {
                                    // @ts-ignore
                                    delete oldState.loginData.credentials.email;
                                }
                                delete newState.email;
                                if (newState.type === 'logined') {
                                    // @ts-ignore
                                    delete newState.loginData.credentials.email;
                                }
                            }
                            (0, log /* default */ .Z)('Store: account update. New: ', (0, hideStoreAccountData /* default */ .Z)(newState), '. Old: ', (0, hideStoreAccountData /* default */ .Z)(oldState));
                        }
                        return Object.assign({}, state, {
                            user: account
                        });
                    },
                    /** @method */
                    'User PAC: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const pac = _.cloneDeep(action.data);
                        if (!noStorage) {
                            // Convert RegEx to string for JSON
                            let filters = pac.filters.map(filter => {
                                filter = _.cloneDeep(filter);
                                if (filter.value instanceof RegExp) {
                                    filter.value = filter.value.toString();
                                }
                                return filter;
                            });
                            storage /* default */ .Z.set('userPac', Object.assign({}, pac, {
                                filters
                            }));
                        }
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: PAC update. New: ', pac, '. Old: ', state.userPac);
                        }
                        return Object.assign({}, state, {
                            userPac: pac
                        });
                    },
                    /** @method */
                    'User PAC: update': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        const pac = Object.assign({}, state.userPac, _.cloneDeep(action.data));
                        if (!noStorage) {
                            // Convert RegEx to string for JSON
                            let filters = pac.filters.map(filter => {
                                filter = _.cloneDeep(filter);
                                if (filter.value instanceof RegExp) {
                                    filter.value = filter.value.toString();
                                }
                                return filter;
                            });
                            storage /* default */ .Z.set('userPac', Object.assign({}, pac, {
                                filters
                            }));
                        }
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: PAC update. New: ', pac, '. Old: ', state.userPac);
                        }
                        return Object.assign({}, state, {
                            userPac: pac
                        });
                    },
                    /** @method */
                    'Viewed personal banners: add': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            banner
                        } = action;
                        let viewedPersonalBanners = Array.from(new Set(state.viewedPersonalBanners.concat([banner]))).sort();
                        if (!noStorage) {
                            storage /* default */ .Z.set('viewed personal banners', viewedPersonalBanners);
                        }
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: viewed personal banners update. New: ', viewedPersonalBanners, '. Old: ', state.viewedPersonalBanners);
                        }
                        return Object.assign({}, state, {
                            viewedPersonalBanners
                        });
                    },
                    /** @method */
                    'Viewed personal banners: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let {
                            banners
                        } = action;
                        if (!noStorage) storage /* default */ .Z.set('viewed personal banners', banners);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: viewed personal banners update. New: ', banners, '. Old: ', state.viewedPersonalBanners);
                        }
                        return Object.assign({}, state, {
                            viewedPersonalBanners: banners
                        });
                    },
                    /** @method */
                    'WebRTC blocking: set': ({
                        noStorage,
                        action,
                        state
                    }) => {
                        let oldValue = state.webrtcBlock;
                        let value = action.data;
                        if (!noStorage) storage /* default */ .Z.set('webrtcBlock', value);
                        if (showLogs) {
                            (0, log /* default */ .Z)('Store: WebRTC blocking update. New: ', value, '. Old: ', oldValue);
                        }
                        return Object.assign({}, state, {
                            webrtcBlock: value
                        });
                    }
                };

                /** @function */
                /* harmony default export */
                const createReducer = (initialState => {
                    return (state = initialState, action) => {
                        let noStorage = Boolean(action.noStorage);
                        let type = action.type;
                        delete action.noStorage;

                        // Wrong type
                        if (!(type in makeAction)) return state;

                        // Existing type
                        // @ts-ignore
                        return makeAction[type]({
                            noStorage,
                            action,
                            state
                        });
                    };
                });
                // EXTERNAL MODULE: ./src/general/tools/Deferred.ts
                var Deferred = __webpack_require__(5691);
                // EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
                var code = __webpack_require__(3552);
                var code_default = /*#__PURE__*/ __webpack_require__.n(code);
                // EXTERNAL MODULE: ./src/bg/defaultPrices.ts
                var defaultPrices = __webpack_require__(7027);; // CONCATENATED MODULE: ./src/general/tools/isObject.ts
                /* harmony default export */
                const isObject = (object => Boolean(object && typeof object === 'object'));
                // EXTERNAL MODULE: ./src/general/tools/makeProxyServersMap.ts
                var makeProxyServersMap = __webpack_require__(7542);
                // EXTERNAL MODULE: ./src/general/tools/pacHostsToCountryPrefixPorts.ts
                var pacHostsToCountryPrefixPorts = __webpack_require__(8760);
                // EXTERNAL MODULE: ./src/bg/serversObject/get.ts
                var get = __webpack_require__(7437);; // CONCATENATED MODULE: ./src/general/store/getInitialState.ts
                /* global LowLevelPac, MigrationStoreAccount, PingRating, Price, Promotion, ProxyServerCountryData, StoreAccount, StoreGuestAccount, StoreState, UserPac */








                /** @function */
                const getDefaultPac = () => ({
                    'mode': 'direct',
                    'country': null,
                    'broken': false,
                    'filters': []
                });

                /** @function */
                const getDefaultUser = () => {
                    const defaultUser = {
                        'type': 'guest',
                        'premium': false,
                        'timestamp': {}
                    };
                    return defaultUser;
                };

                /** @function */
                /* harmony default export */
                const getInitialState = (async argStorageValue => {
                    let state = {
                        // Page: index:home, index:changeLocation, login
                        'page': 'index:home'
                    };
                    const storageValue = argStorageValue || (await code_default().storage.local.get(['account', 'activeInternalExperiments', 'browsec.com available', 'cacheRemoval', 'daysAfterInstall', 'domain', 'favorites', 'ignoredExperiments', 'internal experiments', 'lowLevelPac', 'ping', 'prices', 'priceTrial', 'promotions', 'promotionsBlock', 'proxyIsBroken', 'reserveDomains', 'timezoneChange', 'userPac', 'viewed personal banners', 'webrtc', 'webrtcBlock']));
                    const serversObject = await (0, get /* default */ .Z)();
                    const serversObjectKeys = Object.keys(serversObject.countries);
                    let {
                        account,
                        activeInternalExperiments,
                        'browsec.com available': browsecComAvailable,
                        cacheRemoval,
                        daysAfterInstall,
                        domain,
                        favorites,
                        ignoredExperiments,
                        'internal experiments': internalExperiments,
                        lowLevelPac,
                        ping,
                        prices,
                        priceTrial,
                        promotions,
                        promotionsBlock,
                        proxyIsBroken,
                        reserveDomains,
                        timezoneChange,
                        userPac,
                        'viewed personal banners': viewedPersonalBanners,
                        webrtc,
                        webrtcBlock
                    } = storageValue;
                    return Object.assign(state, {
                        'activeInternalExperiments': (() => {
                            if (Array.isArray(activeInternalExperiments) && activeInternalExperiments.every(item => typeof item === 'string')) return activeInternalExperiments;
                            return production_default().internalExperiments.map(({
                                serverId
                            }) => serverId);
                        })(),
                        'browsecComAvailable': (() => {
                            if (typeof browsecComAvailable !== 'string') return 'unknown';
                            if (!['yes', 'no', 'unknown', 'checking'].includes(browsecComAvailable)) {
                                return 'unknown';
                            }
                            return browsecComAvailable;
                        })(),
                        // Remove cache to resolve onAuthRequired problems
                        'cacheRemoval': (() => {
                            return cacheRemoval !== null && cacheRemoval !== void 0 ? cacheRemoval : false;
                        })(),
                        // Days after instllation
                        'daysAfterInstall': (() => {
                            if (typeof daysAfterInstall !== 'number') return 0;
                            return Math.floor((Date.now() - daysAfterInstall) / (24 * 3600 * 1000));
                        })(),
                        // Current URL domain
                        'domain': (() => {
                            if (location.href.includes('background')) return null;
                            return domain || null;
                        })(),
                        // Favorite countries (only for premium user)
                        'favorites': (() => {
                            const condition = Array.isArray(favorites) && favorites.every(item => typeof item === 'string');
                            return condition ? favorites : [];
                        })(),
                        // Ignored experiments (ids)
                        'ignoredExperiments': (() => {
                            const condition = Array.isArray(ignoredExperiments) && ignoredExperiments.every(item => typeof item === 'string');
                            return condition ? ignoredExperiments : [];
                        })(),
                        // Internal experiments
                        'internalExperiments': (() => {
                            if (!isObject(internalExperiments)) return {};
                            const values = Object.values(internalExperiments);
                            const condition = values.length && values.every(item => typeof item === 'number');
                            if (!condition) return {};
                            return internalExperiments;
                        })(),
                        // Low level PAC
                        'lowLevelPac': (() => {
                            return lowLevelPac || {
                                'browsecCountry': null,
                                'countries': {},
                                // { [ country: string ]: any },
                                'globalReturn': null,
                                'ignoredDomains': [],
                                'premiumCountries': {},
                                // { [ country: string ]: any },
                                'siteFilters': []
                            };
                        })(),
                        // Ping to our servers
                        'ping': (() => {
                            if (!Array.isArray(ping)) return [];
                            let codition = ping.every(item => isObject(item) && typeof item.country === 'string' && typeof item.premium === 'boolean' && typeof item.delay === 'number' && typeof item.mark === 'number');
                            return codition ? ping : [];
                        })(),
                        // Internal tarrifs
                        'prices': (() => {
                            if (!Array.isArray(prices) || !prices.length) return defaultPrices /* default */ .Z;
                            const condition = prices.every(item => isObject(item) && typeof item.currency === 'string' && typeof item.value === 'number' && typeof item.duration === 'number');
                            return condition ? prices : defaultPrices /* default */ .Z;
                        })(),
                        // Trial days if present
                        'priceTrial': (() => typeof priceTrial === 'number' ? priceTrial : undefined)(),
                        // Raw promotions
                        'promotions': (() => {
                            if (!Array.isArray(promotions)) return [];
                            return promotions.filter(item => {
                                var _item$banner, _item$banner2;
                                return isObject(item) && (!item.banner || typeof(item === null || item === void 0 ? void 0 : (_item$banner = item.banner) === null || _item$banner === void 0 ? void 0 : _item$banner.link) === 'string' && typeof(item === null || item === void 0 ? void 0 : (_item$banner2 = item.banner) === null || _item$banner2 === void 0 ? void 0 : _item$banner2.structure) === 'object') && typeof item.id === 'string' && typeof item.from === 'number' && ['common', 'personal'].includes(item.kind) && (!item.page || typeof item.page === 'string') && typeof item.till === 'number';
                            });
                        })(),
                        // Block promotions for free users
                        'promotionsBlock': (() => typeof promotionsBlock === 'boolean' ? promotionsBlock : false)(),
                        // List of domains for onAuthRequired
                        'proxyDomains': (() => {
                            if (!reserveDomains) return serversObject.domains;
                            let {
                                free,
                                premium
                            } = reserveDomains;
                            if (!free.length) free = serversObject.domains.free;
                            if (!premium.length) premium = serversObject.domains.premium;
                            return {
                                free,
                                premium
                            };
                        })(),
                        // Is proxy broken?
                        'proxyIsBroken': (() => typeof proxyIsBroken === 'boolean' ? proxyIsBroken : false)(),
                        // List of proxy servers
                        'proxyServers': (() => {
                            const object = new Map();
                            for (const country of serversObjectKeys) {
                                const item = serversObject.countries[country];
                                const countryData = {};
                                if (item.fast_servers) {
                                    countryData.fast = (0, pacHostsToCountryPrefixPorts /* default */ .Z)(item.fast_servers);
                                }
                                if (item.premium_servers) {
                                    countryData.premium = (0, pacHostsToCountryPrefixPorts /* default */ .Z)(item.premium_servers);
                                }
                                if (item.servers) {
                                    countryData.free = (0, pacHostsToCountryPrefixPorts /* default */ .Z)(item.servers);
                                }
                                object.set(country, countryData);
                            }
                            return (0, makeProxyServersMap /* default */ .Z)(object);
                        })(),
                        'timezones': (() => {
                            const object = new Map();
                            for (const country of serversObjectKeys) {
                                const offset = serversObject.countries[country].timezoneOffset;
                                if (typeof offset === 'number') object.set(country, offset);
                            }
                            return object;
                        })(),
                        'timezoneChange': (() => typeof timezoneChange === 'boolean' ? timezoneChange : false)(),
                        // Information about owner
                        'user': (() => {
                            const storageValue = account;
                            if (!storageValue) return getDefaultUser();
                            if (storageValue.type) return storageValue;
                            const oldAccount = storageValue;
                            if (!('email' in oldAccount)) return getDefaultUser();
                            return {
                                'email': oldAccount.email,
                                'loginData': {
                                    'id': oldAccount.id,
                                    'credentials': oldAccount.credentials,
                                    'subscription': oldAccount.subscription
                                },
                                'premium': oldAccount.premium,
                                'timestamp': {
                                    'validUntil': oldAccount.validUntil,
                                    'version': oldAccount.version
                                },
                                'type': 'logined'
                            };
                        })(),
                        // Pac script state
                        'userPac': (() => {
                            if (!isObject(userPac)) return getDefaultPac();
                            const condition = ['direct', 'proxy'].includes(userPac.mode) && (userPac.country === null || typeof userPac.country === 'string') && Array.isArray(userPac.filters);
                            if (!condition) return getDefaultPac();
                            if (userPac.filters.length) {
                                // Migration
                                if (userPac.filters.some(filter => filter.domain)) {
                                    userPac.filters = userPac.filters.map(({
                                        country,
                                        disabled,
                                        domain,
                                        proxyMode
                                    }) => ({
                                        country,
                                        disabled,
                                        'format': 'domain',
                                        'value': domain,
                                        proxyMode
                                    }));
                                } else {
                                    for (const filter of userPac.filters) {
                                        if (filter.format !== 'regex') continue;
                                        filter.value = new RegExp(filter.value.slice(1, -1));
                                    }
                                }
                            }
                            return userPac;
                        })(),
                        // Personal banners that user viewed in popup
                        'viewedPersonalBanners': (() => {
                            if (!Array.isArray(viewedPersonalBanners)) return [];
                            let condition = viewedPersonalBanners.length && viewedPersonalBanners.every(item => typeof item === 'string');
                            return condition ? viewedPersonalBanners : [];
                        })(),
                        // Block WebRTC (enable protection and activate it if proxy enabled)
                        'webrtcBlock': (() => {
                            if (typeof webrtcBlock === 'boolean') return webrtcBlock;
                            return typeof webrtc === 'boolean' ? webrtc : null;
                        })()
                    });
                });
                // EXTERNAL MODULE: ./src/general/tools/proxyServersDispatchChanges.ts
                var proxyServersDispatchChanges = __webpack_require__(4516);; // CONCATENATED MODULE: ./src/general/store/storageListener.ts
                /* global AjaxAccount, StoreAccount */


                const {
                    _: storageListener_
                } = self;
                /* harmony default export */
                const storageListener = (store => {
                    storage /* default */ .Z.addListener(async changes => {
                        if (changes.account) {
                            const {
                                oldValue,
                                newValue
                            } = changes.account;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                const data = newValue.type === 'logined' ? {
                                    'credentials': newValue.loginData.credentials,
                                    'email': newValue.email,
                                    'id': newValue.loginData.id,
                                    'premium': newValue.premium,
                                    'subscription': newValue.loginData.subscription,
                                    'type': 'logined'
                                } : {
                                    'guest': true,
                                    'type': 'guest'
                                };
                                store.dispatch({
                                    'type': 'User: set',
                                    data,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.activeInternalExperiments) {
                            let {
                                oldValue,
                                newValue
                            } = changes.activeInternalExperiments;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Active internal experiments: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes['browsec.com available']) {
                            let {
                                oldValue,
                                newValue
                            } = changes['browsec.com available'];
                            if (oldValue !== newValue) {
                                store.dispatch({
                                    'type': 'Browsec.com available: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.cacheRemoval) {
                            let {
                                oldValue,
                                newValue
                            } = changes.cacheRemoval;
                            if (oldValue !== newValue) {
                                store.dispatch({
                                    'type': 'Cache removal: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.domain) {
                            let {
                                oldValue,
                                newValue
                            } = changes.domain;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Domain: set',
                                    'domain': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.favorites) {
                            let {
                                oldValue,
                                newValue
                            } = changes.favorites;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Favorites: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.ignoredExperiments) {
                            let {
                                oldValue,
                                newValue
                            } = changes.ignoredExperiments;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Ignored experiments: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes['internal experiments']) {
                            let {
                                oldValue,
                                newValue
                            } = changes['internal experiments'];
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Internal experiments: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.lowLevelPac) {
                            let {
                                oldValue,
                                newValue
                            } = changes.lowLevelPac;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Low level PAC: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.userPac) {
                            let {
                                oldValue,
                                newValue
                            } = changes.userPac;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'User PAC: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.ping) {
                            let {
                                oldValue,
                                newValue
                            } = changes.ping;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Ping: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.prices) {
                            let {
                                oldValue,
                                newValue
                            } = changes.prices;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Prices: set',
                                    'prices': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.priceTrial) {
                            let {
                                oldValue,
                                newValue
                            } = changes.priceTrial;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Price trial: set',
                                    'priceTrial': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.promotionsBlock) {
                            let {
                                oldValue,
                                newValue
                            } = changes.promotionsBlock;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Promotions block: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.promotions) {
                            let {
                                oldValue,
                                newValue
                            } = changes.promotions;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Promotions: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.reserveDomains) {
                            let {
                                oldValue,
                                newValue
                            } = changes.reserveDomains;
                            const {
                                proxyDomains
                            } = await store.getStateAsync();
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                let {
                                    free,
                                    premium
                                } = newValue;
                                if (!free.length) free = proxyDomains.free;
                                if (!premium.length) premium = proxyDomains.premium;
                                if (!storageListener_.isEqual(proxyDomains, {
                                        free,
                                        premium
                                    })) {
                                    store.dispatch({
                                        'type': 'Proxy domains: set',
                                        'data': {
                                            free,
                                            premium
                                        },
                                        'noStorage': true
                                    });
                                }
                            }
                        }
                        if (changes.serversObject) {
                            const {
                                oldValue,
                                newValue
                            } = changes.serversObject;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                (0, proxyServersDispatchChanges /* default */ .Z)({
                                    'object': newValue,
                                    'noStorage': true,
                                    store
                                });
                            }
                        }
                        if (changes.timezoneChange) {
                            let {
                                oldValue,
                                newValue
                            } = changes.timezoneChange;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Timezone change: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes['viewed personal banners']) {
                            let {
                                oldValue,
                                newValue
                            } = changes['viewed personal banners'];
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'Viewed personal banners: set',
                                    'banners': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                        if (changes.webrtcBlock) {
                            let {
                                oldValue,
                                newValue
                            } = changes.webrtcBlock;
                            if (!storageListener_.isEqual(oldValue, newValue)) {
                                store.dispatch({
                                    'type': 'WebRTC blocking: set',
                                    'data': newValue,
                                    'noStorage': true
                                });
                            }
                        }
                    });
                });; // CONCATENATED MODULE: ./src/general/store/index.ts
                /* global StoreState, StoreAction */






                const {
                    _: store_
                } = self;;
                class StoreClass {
                    constructor() {
                        this._callbacks = [];
                        this._dispatchDelayedData = [];
                        this.initiated = false;
                        this.ready = new Deferred /* default */ .Z();
                        this.ready.then(() => {
                            this._dispatchDelayedData.forEach(data => {
                                this.dispatch(data);
                            });
                        });
                    }

                    /** @method */
                    dispatch(data) {
                        var _this$_realStore;
                        if (typeof((_this$_realStore = this._realStore) === null || _this$_realStore === void 0 ? void 0 : _this$_realStore.dispatch) === 'function') {
                            this._realStore.dispatch(data);
                            return;
                        }
                        this._dispatchDelayedData.push(data);
                    }

                    /** @method */
                    getState() {
                        return this.getStateSync();
                    }

                    /** @method */
                    async getStateAsync() {
                        await this.ready;
                        return this._realStore.getState();
                    }

                    /** @method */
                    getStateSync() {
                        var _this$_realStore2;
                        if (typeof((_this$_realStore2 = this._realStore) === null || _this$_realStore2 === void 0 ? void 0 : _this$_realStore2.getState) !== 'function') {
                            throw new Error('store.getStateSync called too early');
                        }
                        return this._realStore.getState();
                    }

                    /** @method */

                    // eslint-disable-line no-dupe-class-members

                    // eslint-disable-line no-dupe-class-members
                    async initiate(arg) {
                        // eslint-disable-line no-dupe-class-members
                        if (this.initiated) return store.ready;
                        this.initiated = true;
                        const initialState = await (() => {
                            if ((arg === null || arg === void 0 ? void 0 : arg.type) === 'store state') {
                                const {
                                    value
                                } = arg;
                                value.proxyServers = (0, makeProxyServersMap /* default */ .Z)(new Map(Object.entries(value.proxyServers)));
                                value.timezones = new Map(Object.entries(value.timezones));
                                return value;
                            }
                            if (arg === undefined) return getInitialState();
                            return getInitialState(arg.value);
                        })();

                        // @ts-ignore
                        const realStore = createStore(createReducer(initialState));
                        this._realStore = realStore;
                        let state = realStore.getState();
                        realStore.subscribe(() => {
                            const newState = realStore.getState();
                            const actions = [];
                            for (const {
                                    property,
                                    compare
                                }
                                of this._callbacks) {
                                const value0 = property(newState);
                                const value1 = property(state);
                                const haveChanges = (() => {
                                    if (value0 instanceof Map && value1 instanceof Map) {
                                        if (value0 === value1) return false;
                                        if (value0.size !== value1.size) return true;
                                        for (const [key0, val0] of value0) {
                                            if (!store_.isEqual(value1.get(key0), val0)) return true;
                                        }
                                        return false;
                                    }
                                    return !store_.isEqual(value0, value1);
                                })();
                                if (!haveChanges) continue;
                                actions.push({
                                    compare,
                                    'values': [value0, value1]
                                });
                            }
                            state = newState;
                            for (const {
                                    compare,
                                    values
                                }
                                of actions) {
                                compare(values[0], values[1], newState);
                            }
                        });
                        this.ready.resolve(state);
                        return state;
                    }

                    /** Subscribe to changes like in React-Redux
                    @method
                    @param property - used to get changes only from specific property
                    @param compare - callback
                    @return unsubscribe function */
                    onChange(property, compare) {
                        const object = {
                            property,
                            compare
                        };
                        this._callbacks.push(object);
                        return () => {
                            this._callbacks = this._callbacks.filter(item => item !== object);
                        };
                    }

                    /** @method */
                    onOneChange(property, compare) {
                        if (typeof compare !== 'function') {
                            return new Promise(resolve => {
                                const unsubscribe = this.onChange(property, newState => {
                                    unsubscribe();
                                    resolve(newState);
                                });
                            });
                        }
                        return new Promise(resolve => {
                            const unsubscribe = this.onChange(property, async (newState, oldState, storeState) => {
                                const output = await compare(newState, oldState, storeState);
                                if (!output) return;
                                unsubscribe();
                                resolve(newState);
                            });
                        });
                    }

                    /** @method */
                    subscribe(listener) {
                        var _this$_realStore3;
                        if (typeof((_this$_realStore3 = this._realStore) === null || _this$_realStore3 === void 0 ? void 0 : _this$_realStore3.subscribe) !== 'function') {
                            throw new Error('store.subscribe called too early');
                        }
                        return this._realStore.subscribe(listener);
                    }
                };
                const store = new StoreClass();
                storageListener(store);
                /* harmony default export */
                const general_store = (store);

                /***/
            }),

        /***/
        8575:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var alarms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3357);
                /* harmony import */
                var crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3552);
                /* harmony import */
                var crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */
                var storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6264);



                const manifestVersion = chrome.runtime.getManifest().manifest_version;

                /** @function */
                const onStartAction = action => {
                    if (manifestVersion === 2) action();
                    else {
                        crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1___default().runtime.onInstalled.addListener(action);
                        crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1___default().runtime.onStartup.addListener(action);
                    }
                };
                let started = false;
                setTimeout(() => {
                    started = true;
                }, 0);
                const names = new Set();

                /** @function */
                const onMark = async ({
                    name,
                    repeatInMinutes
                }, action) => {
                    if (started) throw new Error('time.onMark called after first event loop');
                    if (names.has(name)) {
                        throw new Error(`time.onMark: duplicate entry with name "${name}"`);
                    }
                    names.add(name);
                    alarms__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z.on(alarmInfo => {
                        if (alarmInfo.name === name) action();
                    });
                    onStartAction(async () => {
                        const mark = await storage__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */ .Z.get('timemark: ' + name);
                        if (!mark) {
                            action();
                            storage__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */ .Z.set('timemark: ' + name, Date.now());
                            alarms__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z.createCycle(name, {
                                'periodInMinutes': repeatInMinutes
                            });
                            return;
                        }
                        const timePassed = Date.now() - mark;
                        if (timePassed < 0 || timePassed >= repeatInMinutes * 60 * 1000) {
                            action();
                            storage__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */ .Z.set('timemark: ' + name, Date.now());
                            alarms__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z.createCycle(name, {
                                'periodInMinutes': repeatInMinutes
                            });
                        } else {
                            alarms__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z.createCycle(name, {
                                'delay': repeatInMinutes * 60 * 1000 - timePassed,
                                'periodInMinutes': repeatInMinutes
                            });
                        }
                    });
                };

                /** @function */
                const onStart = (options, action) => {
                    if (started) throw new Error('time.onStart called after first event loop');
                    const {
                        name,
                        repeatInMinutes
                    } = options;
                    if (names.has(name)) {
                        throw new Error(`time.onStart: duplicate entry with name "${name}"`);
                    }
                    names.add(name);
                    let {
                        startDelayInMs
                    } = options;
                    if (typeof startDelayInMs !== 'number' && !repeatInMinutes) {
                        throw new Error('Both startDelayInMs and repeatInMinutes are not specified');
                    }
                    if (typeof startDelayInMs !== 'number') {
                        startDelayInMs = repeatInMinutes * 60 * 1000;
                    }
                    if (startDelayInMs === 0) {
                        onStartAction(action);
                        if (!repeatInMinutes) return;
                        startDelayInMs = repeatInMinutes * 60 * 1000;
                    }
                    if (repeatInMinutes) {
                        alarms__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z.createCycle(name, {
                            'delay': startDelayInMs,
                            'periodInMinutes': repeatInMinutes
                        });
                    } else {
                        alarms__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z.createOneTime(name, {
                            'delay': startDelayInMs
                        });
                    }
                    alarms__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z.on(alarmInfo => {
                        if (alarmInfo.name === name) action();
                    });
                };

                /*
                / @function /
                const add = (
                  { name, startDelayInMs, repeatInMinutes }: {
                    'name'?: string,
                    'startDelayInMs'?: number,
                    'repeatInMinutes'?: integer
                  },
                  action
                ) => {
                  if( !startDelayInMs && !repeatInMinutes ){
                    throw new Error( 'Both startDelayInMs and repeatInMinutes are not specified' );
                  }
                  

                };


                / @function /
                const remove = ( listener ) => {

                };*/

                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = ({
                    onMark,
                    onStart
                });

                /***/
            }),

        /***/
        5691:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                // Deferred based on Promise
                class Deferred extends Promise {
                    constructor(callback = (resolve, reject) => {}) {
                        let res, rej;
                        super((resolve, reject) => {
                            res = resolve;
                            rej = reject;
                            callback(resolve, reject);
                        });
                        this._resolve = res;
                        this._reject = rej;
                    }
                    resolve(result) {
                        this._resolve(result);
                        return this;
                    }
                    reject(error) {
                        this._reject(error);
                        return this;
                    }
                };
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (Deferred);

                /***/
            }),

        /***/
        7493:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* global RequestInit */

                /** Simplified AJAX function, POST by default */
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (async (url, params) => {
                    const {
                        data,
                        method
                    } = params;
                    const dataType = params.dataType || 'text';

                    // Headers
                    const headers = (() => {
                        if (params.headers) return params.headers;
                        if (method === 'POST' && !data && !params.body) {
                            return {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            };
                        }
                        return {};
                    })();
                    params = Object.assign({}, params);
                    delete params.data;
                    delete params.dataType;
                    delete params.headers;

                    // Result options object for fetch
                    let options = {
                        method
                    };

                    // Body
                    if (data) {
                        if (method === 'POST') {
                            options.body = JSON.stringify(data);
                            if (!headers['Content-Type']) {
                                headers['Content-Type'] = 'application/json';
                            }
                        } else {
                            options.body = Object.entries(data).map(([key, value]) => key + '=' + encodeURIComponent(value)).join('&');
                        }
                    }

                    // Credentials
                    options.credentials = params.credentials || 'include';
                    Object.assign(options, params);
                    if (Object.keys(headers).length) Object.assign(options, {
                        headers
                    });
                    const response = await fetch(url, options);
                    if (response.ok) {
                        return dataType === 'json' ? response.json() /*: Promise<Object>*/ : response.text() /*: Promise<string>*/ ;
                    }

                    const error = new Error(response.statusText);
                    error.status = response.status;
                    try {
                        error.responseText = await response.text();
                    } catch (error) {}
                    throw error;
                });

                /***/
            }),

        /***/
        8459:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                // @flow

                /** http://www.ietf.org/rfc/rfc4122.txt */
                /** @function */
                let chr4 = () => Math.random().toString(16).slice(-4);

                /** @function */
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (() => chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4());

                /***/
            }),

        /***/
        5134:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
                /* harmony import */
                var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
                /* global StoreAccount */

                const emailValue = '--@--.--';

                /** @function */
                let development = account => account;

                /** @function */
                let production = base => {
                    let account = JSON.parse(JSON.stringify(base));
                    if (account.type === 'logined') {
                        account.email = emailValue;
                        account.loginData.credentials.email = emailValue;
                        account.loginData.credentials.access_token = 'exist';
                        account.loginData.credentials.ipsec_password = 'exist';
                    }
                    return account;
                };

                /** @function */
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = ((config__WEBPACK_IMPORTED_MODULE_0___default().type) === 'development' ? development : production);

                /***/
            }),

        /***/
        7542:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* global ProxyServerCountryData */
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (proxyServers => Object.assign(proxyServers, {
                    /** @method */
                    freeCountries() {
                        const iterator =
                            // @ts-ignore
                            this.entries();
                        return {
                            [Symbol.iterator]: () => ({
                                next() {
                                    while (true) {
                                        const {
                                            value,
                                            done
                                        } = iterator.next();
                                        if (done) return {
                                            'value': undefined,
                                            'done': true
                                        };
                                        let [country, {
                                            'free': servers
                                        }] = value;
                                        if (servers) return {
                                            'value': country,
                                            'done': false
                                        };
                                    }
                                }
                            })
                        };
                    },
                    /** @method */
                    premiumCountries() {
                        const iterator =
                            // @ts-ignore
                            this.entries();
                        return {
                            [Symbol.iterator]: () => ({
                                next() {
                                    while (true) {
                                        const {
                                            value,
                                            done
                                        } = iterator.next();
                                        if (done) return {
                                            'value': undefined,
                                            'done': true
                                        };
                                        let [country, {
                                            'premium': servers
                                        }] = value;
                                        if (servers) return {
                                            'value': country,
                                            'done': false
                                        };
                                    }
                                }
                            })
                        };
                    }
                }));

                /***/
            }),

        /***/
        8760:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* global CountryPrefixPort, PacHost */
                /** @function */
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (servers => servers.map(({
                    host,
                    port
                }) => {
                    const countryWithNumber = host.split('.')[0];
                    return {
                        'prefix': countryWithNumber,
                        port
                    };
                }));

                /***/
            }),

        /***/
        4516:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var tools_makeProxyServersMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7542);
                /* harmony import */
                var tools_pacHostsToCountryPrefixPorts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8760);
                /* global ProxyServerCountryData, RawServersObject */


                /** @function */
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (({
                    noStorage = false,
                    object,
                    store
                }) => {
                    const proxyServers = new Map();
                    const timezones = new Map();
                    for (const country of Object.keys(object.countries)) {
                        const item = object.countries[country];
                        const countryData = {};
                        if (item.fast_servers) {
                            countryData.fast = (0, tools_pacHostsToCountryPrefixPorts__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z)(item.fast_servers);
                        }
                        if (item.premium_servers) {
                            countryData.premium = (0, tools_pacHostsToCountryPrefixPorts__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z)(item.premium_servers);
                        }
                        if (item.servers) {
                            countryData.free = (0, tools_pacHostsToCountryPrefixPorts__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z)(item.servers);
                        }
                        proxyServers.set(country, countryData);
                        const offset = item.timezoneOffset;
                        if (typeof offset === 'number') timezones.set(country, offset);
                    }
                    store.dispatch({
                        'type': 'Proxy servers: set',
                        'data': (0, tools_makeProxyServersMap__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */ .Z)(proxyServers),
                        noStorage
                    });
                    store.dispatch({
                        'type': 'Proxy domains: set',
                        'data': {
                            'free': object.domains.free,
                            'premium': object.domains.premium
                        }
                    });
                    store.dispatch({
                        'type': 'Timezones: set',
                        'data': timezones,
                        noStorage
                    });
                });

                /***/
            }),

        /***/
        1748:
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Z: () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /** @function */
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = ((...args) => {
                    if (typeof browser !== 'undefined') {
                        return browser.runtime.sendMessage.apply(browser.runtime, args);
                    }
                    return new Promise((resolve, reject) => {
                        /** @function */
                        const callback = response => {
                            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
                            else resolve(response);
                        };
                        args.push(callback);
                        chrome.runtime.sendMessage.apply(chrome.runtime, args);
                    });
                });

                /***/
            }),

        /***/
        6098:
            /***/
            ((module) => {

                /** Deferred based on Promise
                @function
                @return {Promise} */
                module.exports = () => {
                    let res, rej;
                    let deferred = new Promise((resolve, reject) => {
                        res = resolve;
                        rej = reject;
                    });
                    deferred.resolve = res;
                    deferred.reject = rej;

                    return deferred;
                };


                /***/
            }),

        /***/
        7426:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** accessibilityFeatures (Chrome only)
                https://developer.chrome.com/extensions/accessibilityFeatures */
                const bindObjects = __webpack_require__(3703);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.accessibilityFeatures || promiseSupport) return ns.accessibilityFeatures;

                    return bindObjects({}, ns.accessibilityFeatures, [
                        'animationPolicy',
                        'autoclick',
                        'caretHighlight',
                        'cursorHighlight',
                        'focusHighlight',
                        'highContrast',
                        'largeCursor',
                        'screenMagnifier',
                        'selectToSpeak',
                        'spokenFeedback',
                        'stickyKeys',
                        'switchAccess',
                        'virtualKeyboard'
                    ]);
                };


                /***/
            }),

        /***/
        552:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Alarms
                https://developer.chrome.com/extensions/alarms
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.alarms || promiseSupport) return ns.alarms;

                    return bindAll({}, ns.alarms, {
                        'objects': ['onAlarm'],
                        'methods': ['create'],
                        'promises': {
                            '0': ['getAll', 'clearAll'],
                            '0-1': ['clear', 'get']
                        }
                    });
                };


                /***/
            }),

        /***/
        9183:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Bookmarks
                https://developer.chrome.com/extensions/bookmarks
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/bookmarks */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.bookmarks || promiseSupport) return ns.bookmarks;

                    return bindAll({}, ns.bookmarks, {
                        'objects': [
                            'onCreated', 'onRemoved', 'onChanged', 'onMoved',
                            'onChildrenReordered', 'onImportBegan', 'onImportEnded'
                        ],
                        'promises': {
                            '0': ['getTree'],
                            '1': [
                                'create', 'get', 'getChildren', 'getRecent', 'getSubTree',
                                'removeTree', 'search'
                            ],
                            '2': ['move', 'update']
                        }
                    });
                };


                /***/
            }),

        /***/
        2498:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** BrowserAction
                https://developer.chrome.com/extensions/browserAction
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction */
                const bindAll = __webpack_require__(3878);
                const bindMethods = __webpack_require__(9955);
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);
                const transform = __webpack_require__(3933);


                module.exports = () => {
                    if (!ns.browserAction) return;

                    let browserAction = bindAll({}, ns.browserAction, {
                        'objects': ['onClicked'],
                        'methods': [
                            'setTitle', 'setPopup', 'enable', 'disable'
                        ]
                    });
                    if (!promiseSupport) {
                        bindPromiseReturn(
                            browserAction, ns.browserAction, {
                                '1': ['setIcon']
                            }
                        );
                    } else {
                        bindMethods(browserAction, ns.browserAction, ['setIcon']);
                    }

                    if (ns.browserAction.setBadgeText) {
                        browserAction.setBadgeText = details => {
                            if (typeof details === 'number' || typeof details === 'string') {
                                details = {
                                    'text': String(details)
                                };
                            }
                            ns.browserAction.setBadgeText(details);
                        };
                        browserAction.removeBadgeText = () => {
                            browserAction.setBadgeText('');
                        };
                    }
                    if (ns.browserAction.setBadgeBackgroundColor) {
                        browserAction.setBadgeBackgroundColor = details => {
                            if (typeof details === 'string' || Array.isArray(details)) {
                                details = {
                                    'color': details
                                };
                            }
                            ns.browserAction.setBadgeBackgroundColor(details);
                        };
                    }

                    // 0 arguments support
                    return transform(
                        ['getBadgeText', 'getTitle', 'getPopup', 'getBadgeBackgroundColor'],
                        (carry, property) => {
                            if (!ns.browserAction[property]) return;
                            carry[property] = (details = {}) => {
                                if (typeof details === 'number') details = {
                                    'tabId': details
                                };

                                return (
                                    !promiseSupport ?
                                    new Promise(resolve => {
                                        ns.browserAction[property](details, resolve);
                                    }) :
                                    ns.browserAction[property](details)
                                );
                            };
                        },
                        browserAction
                    );
                };


                /***/
            }),

        /***/
        7012:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** browserSettings (FF only)
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserSettings */
                const ns = __webpack_require__(1509);


                module.exports = () => ns.browserSettings;


                /***/
            }),

        /***/
        2804:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** BrowsingData (complete)
                https://developer.chrome.com/extensions/browsingData
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browsingData */
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.browsingData || promiseSupport) return ns.browsingData;

                    return bindPromiseReturn({}, ns.browsingData, {
                        '0': ['settings'],
                        '1': [
                            'removeAppcache', 'removeCache', 'removeCookies', 'removeDownloads',
                            'removeFileSystems', 'removeFormData', 'removeHistory',
                            'removeIndexedDB', 'removeLocalStorage', 'removePluginData',
                            'removePasswords', 'removeWebSQL'
                        ],
                        '2': ['remove']
                    });
                };


                /***/
            }),

        /***/
        6632:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** certificateProvider (Chrome only)
                https://developer.chrome.com/extensions/certificateProvider */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.certificateProvider || promiseSupport) return ns.certificateProvider;

                    return bindAll({}, ns.certificateProvider, {
                        'objects': ['onCertificatesRequested', 'onSignDigestRequested'],
                        'promises': {
                            '1': ['requestPin', 'stopPinRequest']
                        }
                    });
                };


                /***/
            }),

        /***/
        4081:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Commands
                https://developer.chrome.com/extensions/commands
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/commands */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.commands || promiseSupport) return ns.commands;

                    return bindAll({}, ns.commands, {
                        'objects': ['onCommand'],
                        'promises': {
                            '0': ['getAll']
                        }
                    });
                };


                /***/
            }),

        /***/
        4704:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** ContextMenus
                https://developer.chrome.com/extensions/contextMenus
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextMenus */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.contextMenus || promiseSupport) return ns.contextMenus;

                    let contextMenus = {
                        get 'ACTION_MENU_TOP_LEVEL_LIMIT'() {
                            return ns.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT;
                        }
                    };

                    return bindAll(contextMenus, ns.contextMenus, {
                        'objects': ['onClicked'],
                        'fullPromises': {
                            '1': ['create', 'remove'],
                            '2': ['update']
                        },
                        'promises': {
                            '0': ['removeAll']
                        }
                    });
                };


                /***/
            }),

        /***/
        7191:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** ContextualIdentities (FF only, complete)
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextualIdentities */
                const bindMethods = __webpack_require__(9955);
                const ns = __webpack_require__(1509);


                module.exports = () => {
                    if (!ns.contextualIdentities) return;

                    let contextualIdentities = bindMethods({}, ns.contextualIdentities, [
                        'create', 'get', 'remove', 'update'
                    ]);

                    if (ns.contextualIdentities.query) {
                        contextualIdentities.query = details => {
                            if (typeof details === 'string') details = {
                                'name': details
                            };
                            return ns.contextualIdentities.query(details);
                        };
                    }

                    return contextualIdentities;
                };


                /***/
            }),

        /***/
        9439:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Cookies
                https://developer.chrome.com/extensions/cookies
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.cookies || promiseSupport) return ns.cookies;

                    return bindAll({}, ns.cookies, {
                        'objects': ['onChanged'],
                        'promises': {
                            '0': ['getAllCookieStores'],
                            '1': ['get', 'getAll', 'set', 'remove']
                        }
                    });
                };


                /***/
            }),

        /***/
        8952:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** debugger (Chrome only)
                https://developer.chrome.com/extensions/debugger */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.debugger || promiseSupport) return ns.debugger;

                    return bindAll({}, ns.debugger, {
                        'objects': ['onDetach', 'onEvent'],
                        'promises': {
                            '0': ['getTargets'],
                            '1': ['detach'],
                            '2': ['attach'],
                            '2-3': ['sendCommand']
                        }
                    });
                };


                /***/
            }),

        /***/
        9315:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** declarativeContent (Chrome only)
                https://developer.chrome.com/extensions/declarativeContent */
                const bindObjects = __webpack_require__(3703);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.declarativeContent || promiseSupport) return ns.declarativeContent;

                    return bindObjects({}, ns.declarativeContent, ['onPageChanged']);
                };


                /***/
            }),

        /***/
        4464:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** desktopCapture (Chrome only)
                https://developer.chrome.com/extensions/desktopCapture */
                const bindAll = __webpack_require__(3878);
                const Deferred = __webpack_require__(6098);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                /** @function */
                module.exports = () => {
                    if (!ns.desktopCapture || promiseSupport) return ns.desktopCapture;

                    /** @type {Object} */
                    let desktopCapture = bindAll({}, ns.desktopCapture, {
                        'methods': ['cancelChooseDesktopMedia']
                    });

                    /**
                    @method
                    @return {Promise} */
                    desktopCapture.chooseDesktopMedia = (...args) => {
                        let promise = Deferred();

                        /** @type {Array} */
                        let newArgs = (() => {
                            /** @type {integer} */
                            let length = (() => {
                                let length = args.length > 1 ? args.length : 1;
                                if (length > 2) length = 2;
                                return length;
                            })();

                            return Array.apply(Array, Array(length)).map(
                                (x, index) => args[index]
                            );
                        })();

                        // Adding callback as last argument
                        newArgs.push((streamId, options = {}) => {
                            promise.resolve(Object.assign({}, options, {
                                streamId
                            }));
                        });

                        /** @type {integer} */
                        promise.desktopMediaRequestId =
                            ns.desktopCapture.chooseDesktopMedia.apply(ns.desktopCapture, newArgs);

                        return promise;
                    };

                    return desktopCapture;
                };


                /***/
            }),

        /***/
        2345:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const ns = __webpack_require__(1509);

                // APIs
                const inspectedWindow = __webpack_require__(9146);
                const network = __webpack_require__(729);
                const panels = __webpack_require__(8112);


                module.exports = () => {
                    if (!ns.devtools) return;

                    return {
                        'inspectedWindow': inspectedWindow(),
                        'network': network(),
                        'panels': panels()
                    };
                };


                /***/
            }),

        /***/
        9146:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** devtools.inspectedWindow
                https://developer.chrome.com/extensions/devtools_inspectedWindow
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.devtools.inspectedWindow || promiseSupport) return ns.devtools.inspectedWindow;

                    let inspectedWindow = {
                        get 'tabId'() {
                            return ns.devtools.inspectedWindow.tabId;
                        }
                    };

                    return bindAll(inspectedWindow, ns.devtools.inspectedWindow, {
                        'objects': ['onResourceAdded', 'onResourceContentCommitted'],
                        'methods': ['reload'],
                        'promises': {
                            '0': ['getResources'],
                            '1-2': ['eval']
                        }
                    });
                };


                /***/
            }),

        /***/
        729:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** devtools.network
                https://developer.chrome.com/extensions/devtools_network
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.network */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.devtools.network || promiseSupport) return ns.devtools.network;

                    return bindAll({}, ns.devtools.network, {
                        'objects': ['onNavigated', 'onRequestFinished'],
                        'promises': {
                            '0': ['getHAR']
                        }
                    });
                };


                /***/
            }),

        /***/
        8112:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** devtools.panels
                https://developer.chrome.com/extensions/devtools_panels
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.panels */
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.devtools.panels || promiseSupport) return ns.devtools.panels;

                    let panels = {
                        get 'elements'() {
                            return ns.devtools.panels.elements;
                        },
                        get 'sources'() {
                            return ns.devtools.panels.sources;
                        },
                        get 'themeName'() {
                            return ns.devtools.panels.themeName;
                        }
                    };

                    return bindPromiseReturn(panels, ns.devtools.panels, {
                        '0': ['setOpenResourceHandler'],
                        '2': ['openResource'],
                        '3': ['create']
                    });
                };


                /***/
            }),

        /***/
        9398:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** documentScan (Chrome only)
                https://developer.chrome.com/extensions/documentScan */
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.documentScan || promiseSupport) return ns.documentScan;

                    return bindPromiseReturn({}, ns.documentScan, {
                        '1': ['documentScan']
                    });
                };


                /***/
            }),

        /***/
        3341:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Downloads
                https://developer.chrome.com/extensions/downloads
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/downloads */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.downloads || promiseSupport) return ns.downloads;

                    return bindAll({}, ns.downloads, {
                        'objects': [
                            'onCreated', 'onErased', 'onChanged', 'onDeterminingFilename'
                        ],
                        'methods': [
                            'drag', 'open', 'setShelfEnabled', 'show', 'showDefaultFolder'
                        ],
                        'promises': {
                            '1': [
                                'acceptDanger', 'cancel', 'download', 'erase', 'pause',
                                'removeFile', 'resume', 'search'
                            ],
                            '1-2': ['getFileIcon']
                        }
                    });
                };


                /***/
            }),

        /***/
        9749:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** enterprise.deviceAttributes (Chrome only)
                https://developer.chrome.com/extensions/enterprise_deviceAttributes */
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.enterprise.deviceAttributes || promiseSupport) {
                        return ns.enterprise.deviceAttributes;
                    }

                    return bindPromiseReturn({}, ns.enterprise.deviceAttributes, {
                        '0': ['getDirectoryDeviceId']
                    });
                };


                /***/
            }),

        /***/
        6463:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const ns = __webpack_require__(1509);

                // APIs
                const deviceAttributes = __webpack_require__(9749);
                const platformKeys = __webpack_require__(1043);


                module.exports = () => {
                    if (!ns.enterprise) return;

                    return {
                        'deviceAttributes': deviceAttributes(),
                        'platformKeys': platformKeys()
                    };
                };


                /***/
            }),

        /***/
        1043:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** enterprise.platformKeys (Chrome only)
                https://developer.chrome.com/extensions/enterprise_platformKeys */
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.enterprise.platformKeys || promiseSupport) {
                        return ns.enterprise.platformKeys;
                    }

                    return bindPromiseReturn({}, ns.enterprise.platformKeys, {
                        '0': ['getTokens'],
                        '1': ['getCertificates'],
                        '2': ['challengeUserKey', 'importCertificate', 'removeCertificate'],
                        '1-2': ['challengeMachineKey']
                    });
                };


                /***/
            }),

        /***/
        2178:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Extension
                https://developer.chrome.com/extensions/extension
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/extension */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.extension || promiseSupport) return ns.extension;

                    let extension = {
                        get 'lastError'() {
                            return ns.extension.lastError;
                        },
                        get 'inIncognitoContext'() {
                            return ns.extension.inIncognitoContext;
                        }
                    };

                    return bindAll(extension, ns.extension, {
                        'methods': ['getViews', 'getBackgroundPage', 'getURL', 'setUpdateUrlData'],
                        'promises': {
                            '0': ['isAllowedIncognitoAccess', 'isAllowedFileSchemeAccess']
                        }
                    });
                };


                /***/
            }),

        /***/
        4717:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** fileBrowserHandler (Chrome only)
                https://developer.chrome.com/extensions/fileBrowserHandler */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.fileBrowserHandler || promiseSupport) return ns.fileBrowserHandler;

                    return bindAll({}, ns.fileBrowserHandler, {
                        'objects': ['onExecute'],
                        'promises': {
                            '1': ['selectFile']
                        }
                    });
                };


                /***/
            }),

        /***/
        7190:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** fileSystemProvider (Chrome only)
                https://developer.chrome.com/extensions/fileSystemProvider */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.fileSystemProvider || promiseSupport) return ns.fileSystemProvider;

                    return bindAll({}, ns.fileSystemProvider, {
                        'objects': [
                            'onAbortRequested', 'onAddWatcherRequested', 'onCloseFileRequested',
                            'onCreateDirectoryRequested', 'onCreateFileRequested',
                            'onConfigureRequested', 'onCopyEntryRequested', 'onDeleteEntryRequested',
                            'onExecuteActionRequested', 'onGetActionsRequested',
                            'onGetMetadataRequested', 'onMountRequested', 'onMoveEntryRequested',
                            'onOpenFileRequested', 'onReadDirectoryRequested', 'onReadFileRequested',
                            'onRemoveWatcherRequested', 'onTruncateRequested', 'onUnmountRequested',
                            'onWriteFileRequested'
                        ],
                        'promises': {
                            '0': ['getAll'],
                            '1': ['get', 'mount', 'notify', 'unmount']
                        }
                    });
                };


                /***/
            }),

        /***/
        3265:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Find (FF only)
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/find */
                const ns = __webpack_require__(1509);


                module.exports = () => ns.find;


                /***/
            }),

        /***/
        2917:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** fontSettings (Chrome only)
                https://developer.chrome.com/extensions/fontSettings */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.fontSettings || promiseSupport) return ns.fontSettings;

                    return bindAll({}, ns.fontSettings, {
                        'objects': [
                            'onDefaultFixedFontSizeChanged', 'onDefaultFontSizeChanged',
                            'onFontChanged', 'onMinimumFontSizeChanged'
                        ],
                        'promises': {
                            '0': ['getFontList'],
                            '1': [
                                'clearFont', 'getFont', 'setDefaultFixedFontSize',
                                'setDefaultFontSize', 'setMinimumFontSize', 'setFont'
                            ],
                            '0-1': [
                                'clearDefaultFixedFontSize', 'clearDefaultFontSize',
                                'clearMinimumFontSize', 'getDefaultFixedFontSize', 'getDefaultFontSize',
                                'getMinimumFontSize'
                            ]
                        }
                    });
                };


                /***/
            }),

        /***/
        2414:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** gcm (Chrome only)
                https://developer.chrome.com/extensions/gcm */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.gcm || promiseSupport) return ns.gcm;

                    return bindAll({}, ns.gcm, {
                        'methods': ['onMessage', 'onMessagesDeleted', 'onSendError'],
                        'promises': {
                            '0': ['unregister'],
                            '1': ['register', 'send']
                        }
                    });
                };


                /***/
            }),

        /***/
        6319:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** History
                https://developer.chrome.com/extensions/history
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/history */
                const bindMethods = __webpack_require__(9955);
                const bindObjects = __webpack_require__(3703);
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);
                const transform = __webpack_require__(3933);


                module.exports = () => {
                    if (!ns.history) return;

                    let history = bindObjects({}, ns.history, ['onVisited', 'onVisitRemoved']);

                    if (!promiseSupport) {
                        bindPromiseReturn(history, ns.history, {
                            '0': ['deleteAll'],
                            '1': ['deleteRange', 'search']
                        });
                    } else {
                        bindMethods(history, ns.history, [
                            'deleteAll', 'deleteRange', 'search'
                        ]);
                    }

                    // Support of url as argument
                    return transform(
                        ['addUrl', 'deleteUrl', 'getVisits'],
                        (carry, property) => {
                            if (!ns.history[property]) return;
                            carry[property] = details => {
                                if (typeof details === 'string') details = {
                                    'url': details
                                };

                                return (
                                    !promiseSupport ?
                                    new Promise(resolve => {
                                        ns.history[property](details, resolve);
                                    }) :
                                    ns.history[property](details)
                                );
                            };
                        },
                        history
                    );
                };


                /***/
            }),

        /***/
        2582:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** i18n
                https://developer.chrome.com/extensions/i18n
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/i18n */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.i18n || promiseSupport) return ns.i18n;

                    let i18n = bindAll({}, ns.i18n, {
                        'methods': ['getMessage'],
                        'promises': {
                            '0': ['getAcceptLanguages'],
                            '1': ['detectLanguage']
                        }
                    });

                    /** @return {String} */
                    i18n.getUILanguage = () => (
                        ns.i18n.getUILanguage && ns.i18n.getUILanguage() ||
                        navigator.language || navigator.userLanguage
                    );

                    return i18n;
                };


                /***/
            }),

        /***/
        6631:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Identity
                https://developer.chrome.com/extensions/identity
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/identity */
                const bindAll = __webpack_require__(3878);
                const bindMethods = __webpack_require__(9955);
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.identity) return;

                    let identity = bindAll({}, ns.identity, {
                        'objects': ['onSignInChanged'],
                        'methods': ['getRedirectURL']
                    });

                    if (!promiseSupport) {
                        bindPromiseReturn(identity, ns.identity, {
                            '0': ['getAccounts', 'getProfileUserInfo'],
                            '0-1': ['getAuthToken'],
                            '1': ['launchWebAuthFlow']
                        });
                    } else {
                        bindMethods(identity, ns.identity, [
                            'getAccounts', 'getProfileUserInfo', 'getAuthToken',
                            'launchWebAuthFlow'
                        ]);
                    }

                    if (ns.identity.removeCachedAuthToken) {
                        identity.removeCachedAuthToken = details => {
                            if (typeof details === 'string') details = {
                                'token': details
                            };

                            return (
                                !promiseSupport ?
                                new Promise(resolve => {
                                    ns.identity.removeCachedAuthToken(details, resolve);
                                }) :
                                ns.identity.removeCachedAuthToken(details)
                            );
                        };
                    }

                    return identity;
                };


                /***/
            }),

        /***/
        9002:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Idle (complete)
                https://developer.chrome.com/extensions/idle
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/idle */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.idle || promiseSupport) return ns.idle;

                    return bindAll({}, ns.idle, {
                        'objects': ['onStateChanged'],
                        'methods': ['setDetectionInterval'],
                        'promises': {
                            '1': ['queryState']
                        }
                    });
                };


                /***/
            }),

        /***/
        5597:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** input.ime (Chrome only)
                https://developer.chrome.com/extensions/input_ime */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.input || !ns.input.ime) return;
                    if (promiseSupport) return ns.input.ime;

                    return bindAll({}, ns.input.ime, {
                        'objects': [
                            'onActivate', 'onBlur', 'onCandidateClicked',
                            'onCompositionBoundsChanged', 'onDeactivated', 'onFocus',
                            'onInputContextUpdate', 'onKeyEvent', 'onMenuItemActivated',
                            'onReset', 'onSurroundingTextChanged'
                        ],
                        'methods': ['hideInputView', 'keyEventHandled'],
                        'promises': {
                            '0': ['activate', 'deactivate'],
                            '1': [
                                'clearComposition', 'commitText', 'createWindow',
                                'deleteSurroundingText', 'hideWindow', 'sendKeyEvents', 'setMenuItems',
                                'setCandidates', 'setCandidateWindowProperties', 'setComposition',
                                'setCursorPosition', 'showWindow', 'updateMenuItems'
                            ]
                        }
                    });
                };


                /***/
            }),

        /***/
        8739:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** instanceID (Chrome only)
                https://developer.chrome.com/extensions/instanceID */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.instanceID || promiseSupport) return ns.instanceID;

                    return bindAll({}, ns.instanceID, {
                        'objects': ['onTokenRefresh'],
                        'promises': {
                            '0': ['deleteID', 'getCreationTime', 'getID'],
                            '1': ['deleteToken', 'getToken']
                        }
                    });
                };


                /***/
            }),

        /***/
        4524:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Management
                https://developer.chrome.com/extensions/management
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/management */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.management || promiseSupport) return ns.management;

                    return bindAll({}, ns.management, {
                        'objects': [
                            'onInstalled', 'onUninstalled', 'onEnabled', 'onDisabled',
                            'ExtensionInfo'
                        ],
                        'promises': {
                            '0': ['getAll', 'getSelf'],
                            '1': [
                                'get', 'getPermissionWarningsById',
                                'getPermissionWarningsByManifest', 'uninstallSelf', 'launchApp',
                                'createAppShortcut'
                            ],
                            '2': ['setEnabled', 'uninstall', 'setLaunchType', 'generateAppForLink']
                        }
                    });
                };


                /***/
            }),

        /***/
        4811:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** networking.config (Chrome only)
                https://developer.chrome.com/extensions/networking_config */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.networking || !ns.networking.config) return;
                    if (promiseSupport) return ns.networking.config;

                    return bindAll({}, ns.networking.config, {
                        'objects': ['onCaptivePortalDetected'],
                        'promises': {
                            '1': ['setNetworkFilter'],
                            '2': ['finishAuthentication']
                        }
                    });
                };


                /***/
            }),

        /***/
        2457:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Notifications (complete)
                https://developer.chrome.com/extensions/notifications
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/notifications */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.notifications || promiseSupport) return ns.notifications;

                    return bindAll({}, ns.notifications, {
                        'objects': [
                            'onClosed', 'onClicked', 'onButtonClicked',
                            'onPermissionLevelChanged', 'onShowSettings'
                        ],
                        'promises': {
                            '0': ['getAll', 'getPermissionLevel'],
                            '1': ['clear'],
                            '1-2': ['create'],
                            '2': ['update']
                        }
                    });
                };


                /***/
            }),

        /***/
        17:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Omnibox (no async methods)
                https://developer.chrome.com/extensions/omnibox
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/omnibox */
                const ns = __webpack_require__(1509);


                module.exports = () => ns.omnibox;


                /***/
            }),

        /***/
        8218:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** PageAction
                https://developer.chrome.com/extensions/pageAction
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction */
                const bindAll = __webpack_require__(3878);
                const bindMethods = __webpack_require__(9955);
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);
                const transform = __webpack_require__(3933);


                module.exports = () => {
                    if (!ns.pageAction) return;

                    let pageAction = bindAll({}, ns.pageAction, {
                        'objects': ['onClicked'],
                        'methods': ['hide', 'show', 'setTitle', 'setPopup']
                    });

                    if (!promiseSupport) {
                        bindPromiseReturn(
                            pageAction, ns.pageAction, {
                                '1': ['setIcon']
                            }
                        );
                    } else {
                        bindMethods(pageAction, ns.pageAction, ['setIcon']);
                    }

                    // tabId without object
                    return transform(
                        ['getTitle', 'getPopup'],
                        (carry, property) => {
                            if (!ns.pageAction[property]) return;

                            carry[property] = details => {
                                if (typeof details === 'number') details = {
                                    'tabId': details
                                };

                                return (
                                    !promiseSupport ?
                                    new Promise(resolve => {
                                        ns.pageAction[property](details, resolve);
                                    }) :
                                    ns.pageAction[property](details)
                                );
                            };
                        },
                        pageAction
                    );
                };


                /***/
            }),

        /***/
        4683:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** pageCapture (Chrome only)
                https://developer.chrome.com/extensions/pageCapture */
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.pageCapture || promiseSupport) return ns.pageCapture;

                    return bindPromiseReturn({}, ns.pageCapture, {
                        '1': ['saveAsMHTML']
                    });
                };


                /***/
            }),

        /***/
        5921:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Permissions
                https://developer.chrome.com/extensions/permissions // F55+
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/permissions */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                /**
                @function
                @param {Browser} */
                module.exports = Browser => {
                    if (!ns.permissions || promiseSupport) return ns.permissions;

                    let permissions = bindAll({}, ns.permissions, {
                        'objects': ['onAdded', 'onRemoved'],
                        'promises': {
                            '0': ['getAll'],
                            '1': ['contains', 'remove']
                        }
                    });

                    /**
                    @method
                    @param {Object<Array<String>>} permissions - https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/permissions/Permissions
                    @return {Promise} */
                    permissions.request = permissions => {
                        /** @type {(Array<String>|null)} */
                        let apis = permissions.permissions || null;

                        return new Promise((resolve, reject) => {
                            ns.permissions.request(permissions, allowed => {
                                if (ns.runtime.lastError) { // Error case
                                    reject(ns.runtime.lastError);
                                    return;
                                }

                                if (allowed) apis.forEach(api => {
                                    Browser.resetAPI(api);
                                });

                                resolve(allowed);
                            });
                        });
                    };

                    return permissions;
                };


                /***/
            }),

        /***/
        7492:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** platformKeys (Chrome only)
                https://developer.chrome.com/extensions/platformKeys */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.platformKeys || promiseSupport) return ns.platformKeys;

                    return bindAll({}, ns.platformKeys, {
                        'methods': ['subtleCrypto'],
                        'promises': {
                            '1': ['selectClientCertificates', 'verifyTLSServerCertificate'],
                            '2': ['getKeyPair']
                        }
                    });
                };


                /***/
            }),

        /***/
        4800:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** power (Chrome only)
                https://developer.chrome.com/extensions/power */
                const bindMethods = __webpack_require__(9955);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.power || promiseSupport) return ns.power;

                    return bindMethods({}, ns.power, ['releaseKeepAwake', 'requestKeepAwake']);
                };


                /***/
            }),

        /***/
        9961:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** printerProvider (Chrome only)
                https://developer.chrome.com/extensions/printerProvider */
                const bindObjects = __webpack_require__(3703);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.printerProvider || promiseSupport) return ns.printerProvider;

                    return bindObjects({}, ns.printerProvider, [
                        'onGetCapabilityRequested',
                        'onGetPrintersRequested',
                        'onGetUsbPrinterInfoRequested',
                        'onPrintRequested'
                    ]);
                };


                /***/
            }),

        /***/
        4802:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Privacy
                https://developer.chrome.com/extensions/privacy
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/privacy */
                const bindBrowserSettings = __webpack_require__(6176);
                const buildBrowserSetting = __webpack_require__(3217);
                const ns = __webpack_require__(1509);
                const transform = __webpack_require__(3933);


                module.exports = () => {
                    let privacy = {};
                    if (!ns.privacy) return ns.privacy;

                    transform(
                        ['IPHandlingPolicy', 'services', 'websites'],
                        (carry, property) => {
                            carry[property] = ns.privacy[property];
                        },
                        privacy
                    );

                    // FF54+, chrome
                    if (ns.privacy.network) {
                        // BrowserSettings
                        let network = bindBrowserSettings({}, ns.privacy.network, [
                            'networkPredictionEnabled',
                            'peerConnectionEnabled' // FF only feature
                        ]);

                        // WebRTC
                        if (ns.privacy.network.webRTCIPHandlingPolicy) {
                            network.webRTCIPHandlingPolicy = buildBrowserSetting(
                                ns.privacy.network.webRTCIPHandlingPolicy
                            );
                        }
                        // Deprecated features will be only if new version is not available
                        else if (ns.privacy.network.webRTCNonProxiedUdpEnabled || ns.privacy.network.webRTCMultipleRoutesEnabled) {
                            bindBrowserSettings(network, ns.privacy.network, [
                                'webRTCNonProxiedUdpEnabled', 'webRTCMultipleRoutesEnabled'
                            ]);
                        }

                        privacy.network = network;
                    }

                    // FF54+, chrome
                    if (ns.privacy.websites) {
                        let websites = bindBrowserSettings({}, ns.privacy.websites, [
                            'hyperlinkAuditingEnabled', // FF54 + chrome
                            'thirdPartyCookiesAllowed', // other only Chrome
                            'referrersEnabled',
                            'protectedContentEnabled'
                        ]);

                        privacy.websites = websites;
                    }

                    if (ns.privacy.services) { // Chrome only
                        let services = bindBrowserSettings({}, ns.privacy.services, [
                            'alternateErrorPagesEnabled',
                            'autofillEnabled',
                            'hotwordSearchEnabled',
                            'passwordSavingEnabled',
                            'safeBrowsingEnabled',
                            'safeBrowsingExtendedReportingEnabled',
                            'searchSuggestEnabled',
                            'spellingServiceEnabled',
                            'translationServiceEnabled'
                        ]);

                        privacy.services = services;
                    }

                    return privacy;
                };


                /***/
            }),

        /***/
        4825:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Proxy
                https://developer.chrome.com/extensions/proxy
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/proxy */
                const bindAll = __webpack_require__(3878);
                const promiseSupport = __webpack_require__(2814);
                const ns = __webpack_require__(1509);


                module.exports = () => {
                    if (typeof ns.proxy !== 'object') return ns.proxy;

                    // FF
                    if (promiseSupport) {
                        return bindAll({
                            'onError': ns.proxy.onError || ns.proxy.onProxyError
                        }, ns.proxy, {
                            'methods': ['register', 'registerProxyScript', 'unregister'],
                            'objects': ['onProxyError', 'onRequest', 'settings']
                        });
                    }

                    // Chrome
                    return bindAll({
                        'onError': ns.proxy.onError || ns.proxy.onProxyError
                    }, ns.proxy, {
                        'objects': ['onProxyError'],
                        'browserSettings': ['settings']
                    });
                };


                /***/
            }),

        /***/
        3446:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Runtime
                https://developer.chrome.com/extensions/runtime
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.runtime || promiseSupport) return ns.runtime;

                    let runtime = {
                        get 'lastError'() {
                            return ns.runtime.lastError;
                        }
                    };

                    bindAll(runtime, ns.runtime, {
                        'objects': [
                            'id', 'onStartup', 'onInstalled', 'onSuspend', 'onSuspendCanceled',
                            'onUpdateAvailable', 'onConnect', 'onConnectExternal',
                            'onMessageExternal'
                        ],
                        'methods': [
                            'getManifest', 'getURL', 'reload', 'restart', 'connect',
                            'connectNative'
                        ],
                        'promises': {
                            '0': [
                                'openOptionsPage', 'requestUpdateCheck', 'getPlatformInfo',
                                'getPackageDirectoryEntry'
                            ],
                            '1': ['setUninstallURL', 'restartAfterDelay'],
                            '2': ['sendNativeMessage'],
                            '1-3': ['sendMessage']
                        }
                    });

                    if (ns.runtime.onRestartRequired || ns.runtime.onBrowserUpdateAvailable) {
                        runtime.onRestartRequired =
                            ns.runtime.onRestartRequired || ns.runtime.onBrowserUpdateAvailable;
                    }

                    runtime.onMessage = {};
                    {
                        /** @type {Array<Object>} */
                        let listeners = [];
                        runtime.onMessage.addListener = callback => {
                            let listener = (message, sender, reply) => {
                                let returnValue = callback(message, sender, reply);
                                if (returnValue instanceof Promise) {
                                    returnValue.then(arg => {
                                        reply(arg);
                                    });
                                }
                                return true;
                                // Chrome: If you want to asynchronously use sendResponse, add return true;
                                // to the onMessage event handler.
                                // FF: The listener function can return either a Boolean or a Promise.
                            };
                            ns.runtime.onMessage.addListener(listener);
                            listeners.push({
                                'original': callback,
                                'modified': listener
                            });
                        };

                        runtime.onMessage.hasListener = callback => Boolean(
                            listeners.find(({
                                original
                            }) => original === callback)
                        );

                        runtime.onMessage.removeListener = callback => {
                            /** @type {Array<Object>} */
                            let removed = listeners.filter(({
                                original
                            }) => original === callback);
                            if (!removed.length) return;

                            listeners = listeners.filter(({
                                original
                            }) => original !== callback);
                            removed.forEach(({
                                modified
                            }) => {
                                ns.runtime.onMessage.removeListener(modified);
                            });
                        };
                    }

                    runtime.getBackgroundPage = () => {
                        let returnValue;
                        let returnPromise = new Promise(resolve => {
                            returnValue = ns.runtime.getBackgroundPage(bgPage => {
                                resolve(bgPage);
                            });
                        });

                        return returnValue || returnPromise;
                    };

                    return runtime;
                };


                /***/
            }),

        /***/
        3031:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Sessions (complete)
                https://developer.chrome.com/extensions/sessions
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/sessions */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.sessions || promiseSupport) return ns.sessions;

                    let sessions = {
                        get 'MAX_SESSION_RESULTS'() {
                            return ns.sessions.MAX_SESSION_RESULTS;
                        }
                    };

                    return bindAll(sessions, ns.sessions, {
                        'objects': ['onChanged'],
                        'promises': {
                            '0-1': ['getDevices', 'getRecentlyClosed', 'restore']
                        }
                    });
                };


                /***/
            }),

        /***/
        8470:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** SidebarAction (FF only)
                https://developer.mozilla.org/ru/Add-ons/WebExtensions/API/sidebarAction */
                const bindMethods = __webpack_require__(9955);
                const ns = __webpack_require__(1509);
                const transform = __webpack_require__(3933);


                module.exports = () => {
                    if (!ns.sidebarAction) return;

                    let sidebarAction = bindMethods({}, ns.sidebarAction, [
                        'setPanel', 'setTitle', 'setIcon'
                    ]);

                    // 0 arguments support
                    return transform(
                        ['getPanel', 'getTitle'],
                        (carry, property) => {
                            if (!ns.sidebarAction[property]) return;
                            carry[property] = (details = {}) => {
                                if (typeof details === 'number') details = {
                                    'tabId': details
                                };
                                return ns.sidebarAction[property](details);
                            };
                        },
                        sidebarAction
                    );
                };


                /***/
            }),

        /***/
        4840:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Storage
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage
                https://developer.chrome.com/extensions/storage */
                const bindObjects = __webpack_require__(3703);
                const bindFullPromiseReturn = __webpack_require__(1871);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);
                const transform = __webpack_require__(3933);


                module.exports = () => {
                    if (!ns.storage || promiseSupport) return ns.storage;

                    let storage = bindObjects({}, ns.storage, ['onChanged']);

                    return transform(
                        ['sync', 'local', 'managed'],
                        (carry, property) => {
                            if (!ns.storage[property]) return;
                            carry[property] = bindFullPromiseReturn({}, ns.storage[property], {
                                '0': ['clear'],
                                '1': ['remove', 'set', 'get', 'getBytesInUse']
                            });
                        },
                        storage
                    );
                };


                /***/
            }),

        /***/
        9594:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** system.cpu (Chrome only)
                https://developer.chrome.com/extensions/system_cpu */
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.system.cpu || promiseSupport) return ns.system.cpu;

                    return bindPromiseReturn({}, ns.system.cpu, {
                        '0': ['getInfo']
                    });
                };


                /***/
            }),

        /***/
        6842:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const ns = __webpack_require__(1509);

                // APIs
                const cpu = __webpack_require__(9594);
                const memory = __webpack_require__(9481);
                const storage = __webpack_require__(5221);


                module.exports = () => {
                    if (!ns.system) return;

                    return {
                        'cpu': cpu(),
                        'memory': memory(),
                        'storage': storage()
                    };
                };


                /***/
            }),

        /***/
        9481:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** system.memory (Chrome only)
                https://developer.chrome.com/extensions/system_memory */
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.system.memory || promiseSupport) return ns.system.memory;

                    return bindPromiseReturn({}, ns.system.memory, {
                        '0': ['getInfo']
                    });
                };


                /***/
            }),

        /***/
        5221:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** system.storage (Chrome only)
                https://developer.chrome.com/extensions/system_storage */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.system.storage || promiseSupport) return ns.system.storage;

                    return bindAll({}, ns.system.storage, {
                        'objects': ['onAttached', 'onDetached'],
                        'promises': {
                            '0': ['getInfo'],
                            '1': ['ejectDevice', 'getAvailableCapacity']
                        }
                    });
                };


                /***/
            }),

        /***/
        3062:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** tabCapture (Chrome only)
                https://developer.chrome.com/extensions/tabCapture */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.tabCapture || promiseSupport) return ns.tabCapture;

                    return bindAll({}, ns.tabCapture, {
                        'objects': ['onStatusChanged'],
                        'promises': {
                            '0': ['getCapturedTabs'],
                            '1': ['capture'],
                            '2': ['captureOffscreenTab']
                        }
                    });
                };


                /***/
            }),

        /***/
        6132:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Tabs
                https://developer.chrome.com/extensions/tabs
                https://developer.mozilla.org/ru/Add-ons/WebExtensions/API/tabs */
                const bindAll = __webpack_require__(3878);
                const bindFullPromiseReturn = __webpack_require__(1871);
                const bindMethods = __webpack_require__(9955);
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.tabs) return;

                    let tabs = bindAll({}, ns.tabs, {
                        'objects': [
                            'onCreated', 'onUpdated', 'onMoved', 'onSelectionChanged',
                            'onActiveChanged', 'onActivated', 'onHighlightChanged',
                            'onHighlighted', 'onDetached', 'onAttached', 'onRemoved',
                            'onReplaced', 'onZoomChange', 'TAB_ID_NONE'
                        ],
                        'methods': ['connect']
                    });

                    if (!promiseSupport) {
                        bindPromiseReturn(tabs, ns.tabs, {
                            '0': ['getCurrent'],
                            '1': [
                                'duplicate', 'highlight', 'remove', 'detectLanguage',
                                'getZoom', 'discard'
                            ],
                            '2': [
                                'update', 'move', 'captureVisibleTab',
                                'executeScript', 'insertCSS', 'setZoom', 'setZoomSettings'
                            ],
                            '2-3': ['sendMessage'] // 3 only = require(Chrome 41+
                        });
                        bindFullPromiseReturn(tabs, ns.tabs, {
                            '1': ['get']
                        });
                    } else {
                        bindMethods(tabs, ns.tabs, [
                            'getCurrent', 'get', 'duplicate', 'highlight',
                            'remove', 'detectLanguage', 'getZoom', 'discard', 'update', 'move',
                            'captureVisibleTab', 'executeScript', 'insertCSS', 'setZoom',
                            'setZoomSettings', 'sendMessage'
                        ]);
                    }

                    if (ns.tabs.create) {
                        tabs.create = createProperties => {
                            if (typeof createProperties === 'string') {
                                createProperties = {
                                    'url': createProperties
                                };
                            }

                            return (
                                !promiseSupport ?
                                new Promise(resolve => {
                                    ns.tabs.create(createProperties, resolve);
                                }) :
                                ns.tabs.create(createProperties)
                            );
                        };
                    }

                    if (ns.tabs.query) {
                        // 0 arguments support
                        tabs.query = (queryInfo = {}) => (
                            !promiseSupport ?
                            new Promise(resolve => {
                                ns.tabs.query(queryInfo, resolve);
                            }) :
                            ns.tabs.query(queryInfo)
                        );
                    }

                    if (ns.tabs.reload) {
                        /** @type {function} */
                        let reload = !promiseSupport ?
                            bindFullPromiseReturn({}, ns.tabs, {
                                '0-2': ['reload']
                            }).reload :
                            ns.tabs.reload.bind(ns.tabs);

                        tabs.reload = (...args) => {
                            let tabs, reloadProperties;

                            if (args.length === 2) {
                                [tabs, reloadProperties] = args;
                            } else if (args.length === 1) {
                                let [arg] = args;
                                if (typeof arg === 'boolean') {
                                    reloadProperties = arg;
                                } else if (typeof arg === 'number') {
                                    tabs = arg;
                                } else if (Array.isArray(arg)) {
                                    tabs = arg;
                                } else if (arg && typeof arg === 'object') {
                                    reloadProperties = arg;
                                }
                            }
                            if (tabs !== undefined && !Array.isArray(tabs)) {
                                tabs = [tabs];
                            }
                            if (typeof reloadProperties === 'boolean') {
                                reloadProperties = {
                                    'bypassCache': reloadProperties
                                };
                            }

                            if (tabs) {
                                return Promise.all(tabs.map(id => {
                                    let reloadArgs = [id];
                                    if (reloadProperties) reloadArgs.push(reloadProperties);

                                    return reload.apply({}, reloadArgs);
                                }));
                            } else {
                                args = [];
                                if (reloadProperties) args.push(reloadProperties);
                                return reload.apply({}, args);
                            }
                        };
                    }

                    return tabs;
                };


                /***/
            }),

        /***/
        8475:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Theme (FF only)
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/theme */
                const ns = __webpack_require__(1509);


                module.exports = () => ns.theme;


                /***/
            }),

        /***/
        3698:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** TopSites
                https://developer.chrome.com/extensions/topSites
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/topSites */
                const bindPromiseReturn = __webpack_require__(5145);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.topSites || promiseSupport) return ns.topSites;

                    return bindPromiseReturn({}, ns.topSites, {
                        '0': ['get']
                    });
                };


                /***/
            }),

        /***/
        1166:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** tts (Chrome only)
                https://developer.chrome.com/extensions/tts */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.tts || promiseSupport) return ns.tts;

                    return bindAll({}, ns.tts, {
                        'methods': ['pause', 'resume', 'stop'],
                        'promises': {
                            '0': ['getVoices', 'isSpeaking'],
                            '1-2': ['speak']
                        }
                    });
                };


                /***/
            }),

        /***/
        1545:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** ttsEngine (Chrome only)
                https://developer.chrome.com/extensions/ttsEngine */
                const bindObjects = __webpack_require__(3703);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.ttsEngine || promiseSupport) return ns.ttsEngine;

                    return bindObjects({}, ns.ttsEngine, ['onPause', 'onResume', 'onSpeak', 'onStop']);
                };


                /***/
            }),

        /***/
        1259:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** vpnProvider (Chrome only)
                https://developer.chrome.com/extensions/vpnProvider */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.vpnProvider || promiseSupport) return ns.vpnProvider;

                    return bindAll({}, ns.vpnProvider, {
                        'objects': [
                            'onConfigCreated', 'onConfigRemoved', 'onPacketReceived',
                            'onPlatformMessage', 'onUIEvent'
                        ],
                        'promises': {
                            '1': [
                                'createConfig', 'destroyConfig', 'notifyConnectionStateChanged',
                                'sendPacket', 'setParameters'
                            ]
                        }
                    });
                };


                /***/
            }),

        /***/
        4061:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** WebNavigation
                https://developer.chrome.com/extensions/webNavigation
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webNavigation */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.webNavigation || promiseSupport) return ns.webNavigation;

                    let webNavigation = {};

                    bindAll(webNavigation, ns.webNavigation, {
                        'objects': [
                            'onBeforeNavigate', 'onCommitted', 'onDOMContentLoaded',
                            'onCompleted', 'onErrorOccurred', 'onCreatedNavigationTarget',
                            'onReferenceFragmentUpdated', 'onTabReplaced',
                            'onHistoryStateUpdated'
                        ],
                        'promises': {
                            '1': ['getFrame', 'getAllFrames']
                        }
                    });

                    return webNavigation;
                };


                /***/
            }),

        /***/
        5431:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const bindMethods = __webpack_require__(9955);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                /**
                @param {Object} webRequest
                @param {String} property
                @return {undefined} */
                let bindStandardFilter = (webRequest, property) => {
                    if (!ns.webRequest[property]) return;

                    /** @type {Object} */
                    let apiPart = bindMethods({},
                        ns.webRequest[property],
                        ['hasListener', 'removeListener']
                    );

                    apiPart.addListener = (...args) => {
                        if (typeof args[1] === 'string') args[1] = {
                            'urls': [args[1]]
                        };
                        else if (Array.isArray(args[1])) args[1] = {
                            'urls': args[1]
                        };

                        if (typeof args[2] === 'string') args[2] = [args[2]];

                        return ns.webRequest[property].addListener.apply(
                            ns.webRequest[property], args
                        );
                    };

                    webRequest[property] = apiPart;
                };


                module.exports = () => {
                    if (!ns.webRequest) return;

                    let webRequest = {};

                    if (ns.webRequest.onAuthRequired) {
                        let listeners = [];
                        webRequest.onAuthRequired = {
                            'addListener': (...args) => {
                                // Arguments
                                if (typeof args[1] === 'string') {
                                    args[1] = {
                                        'urls': [args[1]]
                                    };
                                } else if (Array.isArray(args[1])) {
                                    args[1] = {
                                        'urls': args[1]
                                    };
                                }

                                if (args.length === 3 && typeof args[2] === 'string') {
                                    args[2] = [args[2]];
                                }

                                let original = args[0];
                                let asyncBlocking =
                                    args.length === 3 && args[2].includes('asyncBlocking');

                                /** To handle the request asynchronously, include "blocking"
                                in the extraInfoSpec parameter (3rd argument) and return a Promise that is resolved with
                                a BlockingResponse object, with its cancel or its authCredentials
                                properties set. */

                                // FF change asyncBlocking -> blocking
                                if (asyncBlocking && promiseSupport) {
                                    args[2] = args[2].map(
                                        item => item === 'asyncBlocking' ? 'blocking' : item
                                    );
                                }

                                // Chrome - use callback for promises
                                let modified = original;
                                if (asyncBlocking && !promiseSupport) {
                                    let callback = args[0];
                                    let chromeCallback = (details, asyncCallback) => {
                                        callback(details).then(asyncCallback);
                                    };
                                    args[0] = modified = chromeCallback;
                                }
                                listeners.push({
                                    original,
                                    modified
                                });

                                return ns.webRequest.onAuthRequired.addListener.apply(
                                    ns.webRequest.onAuthRequired, args
                                );
                            },
                            'hasListener': callback => Boolean(
                                listeners.find(({
                                    original
                                }) => original === callback)
                            ),
                            'removeListener': callback => {
                                /** @type {Array<Object>} */
                                let list = listeners.filter(({
                                    original
                                }) => original === callback);
                                listeners = listeners.filter(({
                                    original
                                }) => original !== callback);

                                list.forEach(({
                                    modified
                                }) => {
                                    ns.webRequest.onAuthRequired.removeListener(modified);
                                });
                            }
                        };
                    }

                    [
                        'onBeforeRedirect', 'onBeforeRequest', 'onBeforeSendHeaders',
                        'onCompleted', 'onErrorOccurred', 'onHeadersReceived', 'onResponseStarted',
                        'onSendHeaders'
                    ].forEach(property => {
                        bindStandardFilter(webRequest, property);
                    });

                    return webRequest;
                };


                /***/
            }),

        /***/
        225:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Web store (Chrome only)
                https://developer.chrome.com/extensions/webstore */
                const bindObjects = __webpack_require__(3703);
                const ns = __webpack_require__(1509);


                module.exports = () => {
                    if (!ns.webstore) return ns.webstore;

                    let webstore = bindObjects({}, ns.webstore, ['onDownloadProgress', 'onInstallStageChanged']);

                    if (ns.webstore.install) {
                        /**
                        @param {String} [url]
                        @return {Promise} */
                        webstore.install = url => new Promise((resolve, reject) => {
                            let args = [];
                            if (url) args.push(url);
                            args.push(resolve);
                            args.push((error, errorCode) => {
                                reject(new Error(error));
                            });

                            ns.webstore.install.apply(ns.webstore, args);
                        });
                    }

                    return webstore;
                };


                /***/
            }),

        /***/
        1679:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Windows
                https://developer.chrome.com/extensions/windows
                https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/windows */
                const bindAll = __webpack_require__(3878);
                const ns = __webpack_require__(1509);
                const promiseSupport = __webpack_require__(2814);


                module.exports = () => {
                    if (!ns.windows || promiseSupport) return ns.windows;

                    let windows = {
                        get 'WINDOW_ID_NONE'() {
                            return ns.windows.WINDOW_ID_NONE;
                        },
                        get 'WINDOW_ID_CURRENT'() {
                            return ns.windows.WINDOW_ID_CURRENT;
                        }
                    };

                    return bindAll(windows, ns.windows, {
                        'objects': ['onCreated', 'onRemoved', 'onFocusChanged'],
                        'promises': {
                            '1': ['remove'],
                            '2': ['update'],
                            '0-1': ['getCurrent', 'getLastFocused', 'getAll', 'create'],
                            '1-2': ['get']
                        }
                    });
                };


                /***/
            }),

        /***/
        3878:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const bindBrowserSettings = __webpack_require__(6176);
                const bindFullPromiseReturn = __webpack_require__(1871);
                const bindMethods = __webpack_require__(9955);
                const bindObjects = __webpack_require__(3703);
                const bindPromiseReturn = __webpack_require__(5145);


                /** Bind objects, methods, promise return
                @param {object} object
                @param {object} browserObject
                @param {object} properties
                @param {array<string>} [properties.objects]
                @param {array<string>} [properties.browserSettings]
                @param {array} [properties.methods]
                @param {object<array>} [properties.promises]
                @return {object} same object */
                module.exports = (object, browserObject, properties) => {
                    if (properties.objects) {
                        bindObjects(object, browserObject, properties.objects);
                    }
                    if (properties.browserSettings) {
                        bindBrowserSettings(object, browserObject, properties.browserSettings);
                    }
                    if (properties.fullPromises) {
                        bindFullPromiseReturn(object, browserObject, properties.fullPromises);
                    }
                    if (properties.methods) {
                        bindMethods(object, browserObject, properties.methods);
                    }
                    if (properties.promises) {
                        bindPromiseReturn(object, browserObject, properties.promises);
                    }

                    return object;
                };


                /***/
            }),

        /***/
        6176:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const buildBrowserSetting = __webpack_require__(3217);
                const transform = __webpack_require__(3933);


                /** Bind BrowserSetting objects
                @param {Object} object
                @param {Object} browserObject
                @param {Array<String>} properties
                @return {Object} same object */
                module.exports = (object, browserObject, properties) => transform(
                    properties,
                    (carry, property) => {
                        if (!browserObject[property]) return;
                        carry[property] = buildBrowserSetting(browserObject[property]);
                    },
                    object
                );


                /***/
            }),

        /***/
        1871:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const ns = __webpack_require__(1509);
                const transform = __webpack_require__(3933);


                /** Modifies object for typical case of promise return binding
                @param {Object} object
                @param {Object} browserObject
                @param {Object<Array>} properties - NOTE number of agruments does not count callback
                @return {Object} same object */
                module.exports = (object, browserObject, properties) => {
                    if (Array.isArray(properties)) properties = {
                        '1': properties
                    };

                    Object.keys(properties).forEach(argsCount => {
                        /** @type {Array<String>} */
                        let list = properties[argsCount];

                        /** @type {(integer|Array<integer>)} */
                        argsCount = !/\-/.test(argsCount) ?
                            Number(argsCount) :
                            argsCount.split('-').map(item => Number(item));

                        transform(
                            list,
                            (carry, property) => {
                                if (!browserObject[property]) return;
                                carry[property] = (...args) => new Promise((resolve, reject) => {
                                    let newArgs = (() => {
                                        /** @type {integer} */
                                        let length = (() => {
                                            if (typeof argsCount === 'number') return argsCount;

                                            let length = argsCount[0];
                                            if (args.length > length) length = args.length;
                                            if (length > argsCount[1]) length = argsCount[1];
                                            return length;
                                        })();

                                        return Array.apply(Array, Array(length)).map(
                                            (x, index) => args[index]
                                        );
                                    })();

                                    // Adding callback as last argument
                                    newArgs.push(firstArg => {
                                        if (ns.runtime.lastError) {
                                            reject(ns.runtime.lastError);
                                            return;
                                        }

                                        if (firstArg === undefined) resolve();
                                        else resolve(firstArg);
                                    });

                                    browserObject[property].apply(browserObject, newArgs);
                                });
                            },
                            object
                        );
                    });

                    return object;
                };


                /***/
            }),

        /***/
        9955:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const transform = __webpack_require__(3933);


                /** Bind methods
                @param {Object} object
                @param {Object} browserObject
                @param {Array<String>} properties
                @return {Object} same object */
                module.exports = (object, browserObject, properties) => transform(
                    properties,
                    (carry, property) => {
                        if (!browserObject[property]) return;
                        carry[property] = browserObject[property].bind(browserObject);
                    },
                    object
                );


                /***/
            }),

        /***/
        3703:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const transform = __webpack_require__(3933);


                /** Copy links to objects
                @param {Object} object
                @param {Object} browserObject
                @param {Array<String>} properties
                @return {Object} same object */
                module.exports = (object, browserObject, properties) => transform(
                    properties,
                    (carry, property) => {
                        if (!browserObject[property]) return;
                        carry[property] = browserObject[property];
                    },
                    object
                );


                /***/
            }),

        /***/
        5145:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const transform = __webpack_require__(3933);


                /** Modifies object for typical case of promise return binding
                @param {Object} object
                @param {Object} browserObject
                @param {Object<Array>} properties - NOTE number of agruments does not count callback
                @return {Object} same object */
                module.exports = (object, browserObject, properties) => {
                    if (Array.isArray(properties)) properties = {
                        '1': properties
                    };

                    Object.keys(properties).forEach(argsCount => {
                        /** @type {Array<String>} */
                        let list = properties[argsCount];

                        /** @type {(integer|Array<integer>)} */
                        argsCount = !/\-/.test(argsCount) ?
                            Number(argsCount) :
                            argsCount.split('-').map(item => Number(item));

                        transform(
                            list,
                            (carry, property) => {
                                if (!browserObject[property]) return;
                                carry[property] = (...args) => new Promise(resolve => {
                                    let newArgs = (() => {
                                        /** @type {integer} */
                                        let length = (() => {
                                            if (typeof argsCount === 'number') return argsCount;

                                            let length = argsCount[0];
                                            if (args.length > length) length = args.length;
                                            if (length > argsCount[1]) length = argsCount[1];
                                            return length;
                                        })();

                                        return Array.apply(Array, Array(length)).map(
                                            (x, index) => args[index]
                                        );
                                    })();

                                    // Adding callback as last argument
                                    newArgs.push(firstArg => {
                                        if (firstArg === undefined) resolve();
                                        else resolve(firstArg);
                                    });

                                    browserObject[property].apply(browserObject, newArgs);
                                });
                            },
                            object
                        );
                    });

                    return object;
                };


                /***/
            }),

        /***/
        4351:
            /***/
            ((module) => {

                /** @type {String} */
                module.exports = (() => {
                    if (typeof browser === 'undefined') return 'chrome';
                    return 'webkitAppearance' in CSSStyleDeclaration.prototype ? 'edge' : 'firefox';
                })();


                /***/
            }),

        /***/
        3217:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const bindMethods = __webpack_require__(9955);
                const bindPromiseReturn = __webpack_require__(5145);
                const promiseSupport = __webpack_require__(2814);
                const transform = __webpack_require__(3933);


                /** Create BrowserSetting object with promise-based return
                @param {Object} browserObject
                @return {Object} */
                module.exports = browserObject => {
                    if (!browserObject) return undefined;

                    let returnObject = {};

                    if (!promiseSupport) {
                        bindPromiseReturn(returnObject, browserObject, {
                            '1': ['set']
                        });
                    } else bindMethods(returnObject, browserObject, ['set']);

                    transform(
                        ['get', 'clear'],
                        (carry, property) => {
                            // Support of 0 arguments
                            carry[property] = (arg = {}) => (
                                !promiseSupport ?
                                new Promise(resolve => {
                                    browserObject[property](arg, firstArg => {
                                        if (firstArg === undefined) resolve(true);
                                        else resolve(firstArg);
                                    });
                                }) :
                                browserObject[property](arg)
                            );
                        },
                        returnObject
                    );

                    if (browserObject.onChange) returnObject.onChange = browserObject.onChange;

                    return returnObject;
                };


                /***/
            }),

        /***/
        3552:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Mechanism to create similar output for both firefox anf chrome for browser|chrome */

                // APIs
                const accessibilityFeatures = __webpack_require__(7426);
                const alarms = __webpack_require__(552);
                const bookmarks = __webpack_require__(9183);
                const browserAction = __webpack_require__(2498);
                const browserSettings = __webpack_require__(7012);
                const browsingData = __webpack_require__(2804);
                const certificateProvider = __webpack_require__(6632);
                const commands = __webpack_require__(4081);
                const contextMenus = __webpack_require__(4704);
                const contextualIdentities = __webpack_require__(7191);
                const cookies = __webpack_require__(9439);
                const declarativeContent = __webpack_require__(9315);
                const debuggerFunction = __webpack_require__(8952);
                const desktopCapture = __webpack_require__(4464);
                const devtools = __webpack_require__(2345);
                const documentScan = __webpack_require__(9398);
                const downloads = __webpack_require__(3341);
                const enterprise = __webpack_require__(6463);
                const extension = __webpack_require__(2178);
                const fileBrowserHandler = __webpack_require__(4717);
                const fileSystemProvider = __webpack_require__(7190);
                const find = __webpack_require__(3265);
                const fontSettings = __webpack_require__(2917);
                const gcm = __webpack_require__(2414);
                const history = __webpack_require__(6319);
                const identity = __webpack_require__(6631);
                const idle = __webpack_require__(9002);
                const inputIme = __webpack_require__(5597);
                const instanceID = __webpack_require__(8739);
                const i18n = __webpack_require__(2582);
                const management = __webpack_require__(4524);
                const networkingConfig = __webpack_require__(4811);
                const notifications = __webpack_require__(2457);
                const omnibox = __webpack_require__(17);
                const pageAction = __webpack_require__(8218);
                const pageCapture = __webpack_require__(4683);
                const permissions = __webpack_require__(5921);
                const platformKeys = __webpack_require__(7492);
                const power = __webpack_require__(4800);
                const printerProvider = __webpack_require__(9961);
                const privacy = __webpack_require__(4802);
                const proxy = __webpack_require__(4825);
                const runtime = __webpack_require__(3446);
                const sessions = __webpack_require__(3031);
                const sidebarAction = __webpack_require__(8470);
                const storage = __webpack_require__(4840);
                const system = __webpack_require__(6842);
                const tabCapture = __webpack_require__(3062);
                const tabs = __webpack_require__(6132);
                const theme = __webpack_require__(8475);
                const topSites = __webpack_require__(3698);
                const tts = __webpack_require__(1166);
                const ttsEngine = __webpack_require__(1545);
                const vpnProvider = __webpack_require__(1259);
                const webNavigation = __webpack_require__(4061);
                const webRequest = __webpack_require__(5431);
                const webstore = __webpack_require__(225);
                const windows = __webpack_require__(1679);


                /** Used for adding permissions
                @type {Object<Function>} */
                let apis = {
                    accessibilityFeatures,
                    alarms,
                    bookmarks,
                    browserAction,
                    browserSettings,
                    browsingData,
                    certificateProvider,
                    commands,
                    contextMenus,
                    contextualIdentities,
                    cookies,
                    declarativeContent,
                    'debugger': debuggerFunction,
                    desktopCapture,
                    devtools,
                    documentScan,
                    downloads,
                    enterprise,
                    extension,
                    fileBrowserHandler,
                    fileSystemProvider,
                    find,
                    fontSettings,
                    gcm,
                    history,
                    identity,
                    idle,
                    instanceID,
                    i18n,
                    management,
                    notifications,
                    omnibox,
                    pageAction,
                    pageCapture,
                    permissions,
                    platformKeys,
                    power,
                    printerProvider,
                    privacy,
                    proxy,
                    runtime,
                    sessions,
                    sidebarAction,
                    storage,
                    system,
                    tabCapture,
                    tabs,
                    theme,
                    topSites,
                    tts,
                    ttsEngine,
                    vpnProvider,
                    webNavigation,
                    webRequest,
                    webstore,
                    windows
                };


                /** @type {Object} - analog of chrome|browser */
                let Browser = (() => {
                    /** @type {Object} */
                    let output = {};

                    Object.assign(
                        output, {
                            'accessibilityFeatures': accessibilityFeatures(),
                            'alarms': alarms(),
                            'bookmarks': bookmarks(),
                            'browserAction': browserAction(),
                            'browserSettings': browserSettings(),
                            'browsingData': browsingData(),
                            'certificateProvider': certificateProvider(),
                            'commands': commands(),
                            'contextMenus': contextMenus(),
                            'contextualIdentities': contextualIdentities(),
                            'cookies': cookies(),
                            'declarativeContent': declarativeContent(),
                            'debugger': debuggerFunction(),
                            'desktopCapture': desktopCapture(),
                            'devtools': devtools(),
                            'documentScan': documentScan(),
                            'downloads': downloads(),
                            'enterprise': enterprise(),
                            'extension': extension(),
                            'fileBrowserHandler': fileBrowserHandler(),
                            'fileSystemProvider': fileSystemProvider(),
                            'find': find(),
                            'fontSettings': fontSettings(),
                            'gcm': gcm(),
                            'history': history(),
                            'identity': identity(),
                            'idle': idle(),

                            // input.ime
                            'input': (() => {
                                let output = inputIme();
                                if (!output) return;

                                return {
                                    'ime': output
                                };
                            })(),

                            'instanceID': instanceID(),
                            'i18n': i18n(),
                            'management': management(),

                            // networking.config
                            'networking': (() => {
                                let output = networkingConfig();
                                if (!output) return;

                                return {
                                    'config': output
                                };
                            })(),

                            // Notifications
                            'notifications': notifications(),
                            'omnibox': omnibox(),
                            'pageAction': pageAction(),
                            'pageCapture': pageCapture(),
                            'permissions': permissions(output),
                            'platformKeys': platformKeys(),
                            'power': power(),
                            'printerProvider': printerProvider(),
                            'privacy': privacy(),
                            'proxy': proxy(),
                            'runtime': runtime(),
                            'sessions': sessions(),
                            'sidebarAction': sidebarAction(),
                            'storage': storage(),
                            'system': system(),
                            'tabCapture': tabCapture(),
                            'tabs': tabs(),
                            'theme': theme(),
                            'topSites': topSites(),
                            'tts': tts(),
                            'ttsEngine': ttsEngine(),
                            'vpnProvider': vpnProvider(),
                            'webNavigation': webNavigation(),
                            'webRequest': webRequest(),
                            'webstore': webstore(),
                            'windows': windows()
                        }
                    );

                    // Delete all unused object keys
                    Object.keys(output).forEach(key => {
                        let value = output[key];
                        if (!value) delete output[key];
                    });

                    return output;
                })();


                /** Set optional API OR disable it
                @param {String} api
                @return {undefined} */
                Browser.resetAPI = api => {
                    if (!apis[api]) return;

                    let value = apis[api]();
                    Browser[api] = value;
                };


                module.exports = Browser;


                /***/
            }),

        /***/
        1509:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const browserName = __webpack_require__(4351);


                /** @type {Object} */
                module.exports = (() => {
                    if (browserName === 'chrome' && typeof chrome === 'undefined') return {};
                    return browserName === 'chrome' ? chrome : browser;
                })();


                /***/
            }),

        /***/
        2814:
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const browserName = __webpack_require__(4351);


                /** @type {Boolean} */
                module.exports = browserName === 'firefox';


                /***/
            }),

        /***/
        3933:
            /***/
            ((module) => {

                /** @function */
                module.exports = (original, reducer, output) => {
                    // Array
                    if (Array.isArray(original)) {
                        return original.reduce(
                            (carry, value, key) => {
                                reducer(carry, value, key);
                                return carry;
                            },
                            output
                        );
                    }

                    // Object
                    Object.keys(original).forEach(key => {
                        let value = original[key];
                        reducer(output, value, key);
                    });
                    return output;
                };


                /***/
            }),

        /***/
        2857:
            /***/
            ((module) => {

                "use strict";
                module.exports = JSON.parse('["https://d3i5gqankjg0sg.cloudfront.net/","https://a703.l461.r761.fastcloudcdn.net/api/","https://ca901.l503.r843.fastcloudcdn.net/"]');

                /***/
            }),

        /***/
        6567:
            /***/
            ((module) => {

                "use strict";
                module.exports = JSON.parse('{"version":20240501072504,"countries":{"at":{"timezoneOffset":120,"premium_servers":[{"host":"at1.prmsrvs.com","port":471},{"host":"at2.prmsrvs.com","port":471},{"host":"at3.prmsrvs.com","port":471},{"host":"at4.prmsrvs.com","port":471},{"host":"at5.prmsrvs.com","port":471},{"host":"at6.prmsrvs.com","port":471}]},"au":{"timezoneOffset":600,"premium_servers":[{"host":"au9.prmsrvs.com","port":471},{"host":"au10.prmsrvs.com","port":471},{"host":"au11.prmsrvs.com","port":471},{"host":"au12.prmsrvs.com","port":471},{"host":"au13.prmsrvs.com","port":471},{"host":"au14.prmsrvs.com","port":471},{"host":"au15.prmsrvs.com","port":471},{"host":"au16.prmsrvs.com","port":471},{"host":"au17.prmsrvs.com","port":471},{"host":"au18.prmsrvs.com","port":471}]},"be":{"timezoneOffset":120,"premium_servers":[{"host":"be1.prmsrvs.com","port":471},{"host":"be2.prmsrvs.com","port":471},{"host":"be3.prmsrvs.com","port":471},{"host":"be4.prmsrvs.com","port":471},{"host":"be5.prmsrvs.com","port":471},{"host":"be6.prmsrvs.com","port":471},{"host":"be7.prmsrvs.com","port":471},{"host":"be8.prmsrvs.com","port":471},{"host":"be9.prmsrvs.com","port":471}]},"bg":{"timezoneOffset":180,"premium_servers":[{"host":"bg5.prmsrvs.com","port":471},{"host":"bg6.prmsrvs.com","port":471},{"host":"bg7.prmsrvs.com","port":471}]},"br":{"timezoneOffset":-180,"premium_servers":[{"host":"br4.prmsrvs.com","port":471},{"host":"br5.prmsrvs.com","port":471}]},"ca":{"timezoneOffset":-240,"premium_servers":[{"host":"ca1.prmsrvs.com","port":471},{"host":"ca2.prmsrvs.com","port":471}]},"ch":{"timezoneOffset":120,"premium_servers":[{"host":"ch2.prmsrvs.com","port":471}]},"cl":{"timezoneOffset":-240,"premium_servers":[{"host":"cl1.prmsrvs.com","port":471}]},"cz":{"timezoneOffset":120,"premium_servers":[{"host":"cz6.prmsrvs.com","port":471}]},"de":{"timezoneOffset":120,"premium_servers":[{"host":"de1.prmsrvs.com","port":471},{"host":"de2.prmsrvs.com","port":471},{"host":"de3.prmsrvs.com","port":471},{"host":"de4.prmsrvs.com","port":471},{"host":"de5.prmsrvs.com","port":471},{"host":"de6.prmsrvs.com","port":471},{"host":"de7.prmsrvs.com","port":471},{"host":"de8.prmsrvs.com","port":471},{"host":"de9.prmsrvs.com","port":471},{"host":"de10.prmsrvs.com","port":471},{"host":"de11.prmsrvs.com","port":471},{"host":"de12.prmsrvs.com","port":471}]},"dk":{"timezoneOffset":120,"premium_servers":[{"host":"dk21.prmsrvs.com","port":471},{"host":"dk22.prmsrvs.com","port":471},{"host":"dk23.prmsrvs.com","port":471},{"host":"dk24.prmsrvs.com","port":471}]},"es":{"timezoneOffset":120,"premium_servers":[{"host":"es6.prmsrvs.com","port":471},{"host":"es7.prmsrvs.com","port":471},{"host":"es8.prmsrvs.com","port":471},{"host":"es9.prmsrvs.com","port":471},{"host":"es10.prmsrvs.com","port":471}]},"fi":{"timezoneOffset":180,"premium_servers":[{"host":"fi1.prmsrvs.com","port":471},{"host":"fi2.prmsrvs.com","port":471},{"host":"fi3.prmsrvs.com","port":471},{"host":"fi4.prmsrvs.com","port":471},{"host":"fi5.prmsrvs.com","port":471},{"host":"fi6.prmsrvs.com","port":471},{"host":"fi7.prmsrvs.com","port":471},{"host":"fi8.prmsrvs.com","port":471},{"host":"fi9.prmsrvs.com","port":471},{"host":"fi10.prmsrvs.com","port":471},{"host":"fi11.prmsrvs.com","port":471},{"host":"fi12.prmsrvs.com","port":471},{"host":"fi13.prmsrvs.com","port":471},{"host":"fi14.prmsrvs.com","port":471},{"host":"fi15.prmsrvs.com","port":471}]},"fr":{"timezoneOffset":120,"premium_servers":[{"host":"fr11.prmsrvs.com","port":471},{"host":"fr12.prmsrvs.com","port":471},{"host":"fr13.prmsrvs.com","port":471},{"host":"fr14.prmsrvs.com","port":471},{"host":"fr15.prmsrvs.com","port":471},{"host":"fr16.prmsrvs.com","port":471},{"host":"fr17.prmsrvs.com","port":471},{"host":"fr18.prmsrvs.com","port":471},{"host":"fr19.prmsrvs.com","port":471},{"host":"fr20.prmsrvs.com","port":471},{"host":"fr21.prmsrvs.com","port":471},{"host":"fr22.prmsrvs.com","port":471},{"host":"fr23.prmsrvs.com","port":471},{"host":"fr24.prmsrvs.com","port":471},{"host":"fr25.prmsrvs.com","port":471}]},"hk":{"timezoneOffset":480,"premium_servers":[{"host":"hk1.prmsrvs.com","port":471},{"host":"hk2.prmsrvs.com","port":471},{"host":"hk3.prmsrvs.com","port":471},{"host":"hk4.prmsrvs.com","port":471},{"host":"hk5.prmsrvs.com","port":471},{"host":"hk6.prmsrvs.com","port":471},{"host":"hk7.prmsrvs.com","port":471},{"host":"hk8.prmsrvs.com","port":471},{"host":"hk9.prmsrvs.com","port":471},{"host":"hk10.prmsrvs.com","port":471}]},"hu":{"timezoneOffset":120,"premium_servers":[{"host":"hu1.prmsrvs.com","port":471},{"host":"hu2.prmsrvs.com","port":471},{"host":"hu3.prmsrvs.com","port":471},{"host":"hu4.prmsrvs.com","port":471},{"host":"hu5.prmsrvs.com","port":471}]},"ie":{"timezoneOffset":60,"premium_servers":[{"host":"ie1.prmsrvs.com","port":471},{"host":"ie2.prmsrvs.com","port":471},{"host":"ie3.prmsrvs.com","port":471},{"host":"ie4.prmsrvs.com","port":471},{"host":"ie5.prmsrvs.com","port":471},{"host":"ie6.prmsrvs.com","port":471},{"host":"ie7.prmsrvs.com","port":471},{"host":"ie8.prmsrvs.com","port":471},{"host":"ie9.prmsrvs.com","port":471},{"host":"ie10.prmsrvs.com","port":471}]},"il":{"timezoneOffset":180,"premium_servers":[{"host":"il1.prmsrvs.com","port":471},{"host":"il2.prmsrvs.com","port":471}]},"in":{"timezoneOffset":330,"premium_servers":[{"host":"in3.prmsrvs.com","port":471},{"host":"in4.prmsrvs.com","port":471},{"host":"in5.prmsrvs.com","port":471},{"host":"in6.prmsrvs.com","port":471}]},"is":{"timezoneOffset":0,"premium_servers":[{"host":"is1.prmsrvs.com","port":471},{"host":"is2.prmsrvs.com","port":471},{"host":"is3.prmsrvs.com","port":471},{"host":"is4.prmsrvs.com","port":471}]},"it":{"timezoneOffset":120,"premium_servers":[{"host":"it1.prmsrvs.com","port":471},{"host":"it2.prmsrvs.com","port":471},{"host":"it3.prmsrvs.com","port":471}]},"jp":{"timezoneOffset":540,"premium_servers":[{"host":"jp26.prmsrvs.com","port":471},{"host":"jp27.prmsrvs.com","port":471},{"host":"jp28.prmsrvs.com","port":471},{"host":"jp29.prmsrvs.com","port":471},{"host":"jp30.prmsrvs.com","port":471},{"host":"jp31.prmsrvs.com","port":471},{"host":"jp32.prmsrvs.com","port":471},{"host":"jp33.prmsrvs.com","port":471},{"host":"jp34.prmsrvs.com","port":471},{"host":"jp35.prmsrvs.com","port":471},{"host":"jp36.prmsrvs.com","port":471},{"host":"jp37.prmsrvs.com","port":471},{"host":"jp38.prmsrvs.com","port":471},{"host":"jp39.prmsrvs.com","port":471},{"host":"jp40.prmsrvs.com","port":471},{"host":"jp41.prmsrvs.com","port":471},{"host":"jp42.prmsrvs.com","port":471},{"host":"jp43.prmsrvs.com","port":471},{"host":"jp44.prmsrvs.com","port":471},{"host":"jp45.prmsrvs.com","port":471},{"host":"jp46.prmsrvs.com","port":471},{"host":"jp47.prmsrvs.com","port":471},{"host":"jp48.prmsrvs.com","port":471},{"host":"jp49.prmsrvs.com","port":471},{"host":"jp50.prmsrvs.com","port":471},{"host":"jp51.prmsrvs.com","port":471},{"host":"jp52.prmsrvs.com","port":471},{"host":"jp53.prmsrvs.com","port":471},{"host":"jp55.prmsrvs.com","port":471}]},"kr":{"timezoneOffset":540,"premium_servers":[{"host":"kr13.prmsrvs.com","port":471},{"host":"kr14.prmsrvs.com","port":471},{"host":"kr15.prmsrvs.com","port":471},{"host":"kr16.prmsrvs.com","port":471},{"host":"kr17.prmsrvs.com","port":471},{"host":"kr18.prmsrvs.com","port":471},{"host":"kr19.prmsrvs.com","port":471},{"host":"kr20.prmsrvs.com","port":471},{"host":"kr21.prmsrvs.com","port":471},{"host":"kr22.prmsrvs.com","port":471}]},"lt":{"timezoneOffset":180,"premium_servers":[{"host":"lt1.prmsrvs.com","port":471},{"host":"lt2.prmsrvs.com","port":471},{"host":"lt3.prmsrvs.com","port":471},{"host":"lt4.prmsrvs.com","port":471}]},"lv":{"timezoneOffset":180,"premium_servers":[{"host":"lv2.prmsrvs.com","port":471}]},"mx":{"timezoneOffset":-360,"premium_servers":[{"host":"mx2.prmsrvs.com","port":471},{"host":"mx3.prmsrvs.com","port":471}]},"nl":{"timezoneOffset":120,"premium_servers":[{"host":"nl1.prmsrvs.com","port":471},{"host":"nl2.prmsrvs.com","port":471},{"host":"nl3.prmsrvs.com","port":471},{"host":"nl4.prmsrvs.com","port":471},{"host":"nl5.prmsrvs.com","port":471},{"host":"nl6.prmsrvs.com","port":471},{"host":"nl7.prmsrvs.com","port":471},{"host":"nl8.prmsrvs.com","port":471},{"host":"nl9.prmsrvs.com","port":471},{"host":"nl10.prmsrvs.com","port":471},{"host":"nl11.prmsrvs.com","port":471},{"host":"nl12.prmsrvs.com","port":471},{"host":"nl13.prmsrvs.com","port":471},{"host":"nl14.prmsrvs.com","port":471},{"host":"nl15.prmsrvs.com","port":471}],"servers":[{"host":"nl41.trafcfy.com","port":461},{"host":"nl42.trafcfy.com","port":461},{"host":"nl43.trafcfy.com","port":461},{"host":"nl44.trafcfy.com","port":461},{"host":"nl45.trafcfy.com","port":461},{"host":"nl50.trafcfy.com","port":461},{"host":"nl55.trafcfy.com","port":461},{"host":"nl56.trafcfy.com","port":461},{"host":"nl57.trafcfy.com","port":461},{"host":"nl58.trafcfy.com","port":461},{"host":"nl59.trafcfy.com","port":461},{"host":"nl60.trafcfy.com","port":461},{"host":"nl61.trafcfy.com","port":461},{"host":"nl62.trafcfy.com","port":461},{"host":"nl63.trafcfy.com","port":461},{"host":"nl64.trafcfy.com","port":461},{"host":"nl65.trafcfy.com","port":461},{"host":"nl66.trafcfy.com","port":461},{"host":"nl67.trafcfy.com","port":461},{"host":"nl68.trafcfy.com","port":461},{"host":"nl69.trafcfy.com","port":461},{"host":"nl70.trafcfy.com","port":461},{"host":"nl71.trafcfy.com","port":461},{"host":"nl72.trafcfy.com","port":461},{"host":"nl73.trafcfy.com","port":461},{"host":"nl74.trafcfy.com","port":461},{"host":"nl75.trafcfy.com","port":461},{"host":"nl76.trafcfy.com","port":461},{"host":"nl77.trafcfy.com","port":461},{"host":"nl78.trafcfy.com","port":461},{"host":"nl79.trafcfy.com","port":461},{"host":"nl80.trafcfy.com","port":461},{"host":"nl81.trafcfy.com","port":461},{"host":"nl82.trafcfy.com","port":461},{"host":"nl83.trafcfy.com","port":461},{"host":"nl84.trafcfy.com","port":461},{"host":"nl85.trafcfy.com","port":461},{"host":"nl86.trafcfy.com","port":461},{"host":"nl87.trafcfy.com","port":461},{"host":"nl88.trafcfy.com","port":461},{"host":"nl89.trafcfy.com","port":461},{"host":"nl90.trafcfy.com","port":461},{"host":"nl91.trafcfy.com","port":461},{"host":"nl92.trafcfy.com","port":461},{"host":"nl93.trafcfy.com","port":461},{"host":"nl94.trafcfy.com","port":461},{"host":"nl95.trafcfy.com","port":461},{"host":"nl101.trafcfy.com","port":461},{"host":"nl102.trafcfy.com","port":461},{"host":"nl103.trafcfy.com","port":461},{"host":"nl104.trafcfy.com","port":461}]},"no":{"timezoneOffset":120,"premium_servers":[{"host":"no1.prmsrvs.com","port":471},{"host":"no2.prmsrvs.com","port":471},{"host":"no3.prmsrvs.com","port":471},{"host":"no4.prmsrvs.com","port":471},{"host":"no5.prmsrvs.com","port":471},{"host":"no6.prmsrvs.com","port":471},{"host":"no7.prmsrvs.com","port":471}]},"nz":{"timezoneOffset":720,"premium_servers":[{"host":"nz1.prmsrvs.com","port":471}]},"pl":{"timezoneOffset":120,"premium_servers":[{"host":"pl1.prmsrvs.com","port":471},{"host":"pl2.prmsrvs.com","port":471},{"host":"pl3.prmsrvs.com","port":471}]},"ro":{"timezoneOffset":180,"premium_servers":[{"host":"ro4.prmsrvs.com","port":471},{"host":"ro5.prmsrvs.com","port":471}]},"rs":{"timezoneOffset":120,"premium_servers":[{"host":"rs1.prmsrvs.com","port":471}]},"ru":{"timezoneOffset":180,"premium_servers":[{"host":"ru6.prmsrvs.com","port":471},{"host":"ru7.prmsrvs.com","port":471},{"host":"ru8.prmsrvs.com","port":471},{"host":"ru9.prmsrvs.com","port":471},{"host":"ru10.prmsrvs.com","port":471},{"host":"ru11.prmsrvs.com","port":471},{"host":"ru12.prmsrvs.com","port":471},{"host":"ru13.prmsrvs.com","port":471}]},"se":{"timezoneOffset":120,"premium_servers":[{"host":"se10.prmsrvs.com","port":471},{"host":"se11.prmsrvs.com","port":471},{"host":"se12.prmsrvs.com","port":471}]},"sg":{"timezoneOffset":480,"servers":[{"host":"sg1.trafcfy.com","port":461},{"host":"sg2.trafcfy.com","port":461},{"host":"sg3.trafcfy.com","port":461},{"host":"sg4.trafcfy.com","port":461},{"host":"sg5.trafcfy.com","port":461},{"host":"sg6.trafcfy.com","port":461},{"host":"sg7.trafcfy.com","port":461},{"host":"sg8.trafcfy.com","port":461},{"host":"sg9.trafcfy.com","port":461},{"host":"sg10.trafcfy.com","port":461}],"premium_servers":[{"host":"sg5.prmsrvs.com","port":471},{"host":"sg6.prmsrvs.com","port":471},{"host":"sg7.prmsrvs.com","port":471},{"host":"sg8.prmsrvs.com","port":471},{"host":"sg9.prmsrvs.com","port":471},{"host":"sg10.prmsrvs.com","port":471},{"host":"sg11.prmsrvs.com","port":471},{"host":"sg12.prmsrvs.com","port":471}]},"si":{"timezoneOffset":120,"premium_servers":[{"host":"si1.prmsrvs.com","port":471},{"host":"si2.prmsrvs.com","port":471}]},"tr":{"timezoneOffset":180,"premium_servers":[{"host":"tr2.prmsrvs.com","port":471},{"host":"tr3.prmsrvs.com","port":471},{"host":"tr4.prmsrvs.com","port":471},{"host":"tr5.prmsrvs.com","port":471},{"host":"tr6.prmsrvs.com","port":471},{"host":"tr7.prmsrvs.com","port":471},{"host":"tr8.prmsrvs.com","port":471},{"host":"tr9.prmsrvs.com","port":471},{"host":"tr10.prmsrvs.com","port":471}]},"ua":{"timezoneOffset":0,"premium_servers":[{"host":"ua2.prmsrvs.com","port":471}]},"uk":{"timezoneOffset":60,"premium_servers":[{"host":"uk4.prmsrvs.com","port":471},{"host":"uk5.prmsrvs.com","port":471},{"host":"uk6.prmsrvs.com","port":471},{"host":"uk7.prmsrvs.com","port":471},{"host":"uk9.prmsrvs.com","port":471},{"host":"uk13.prmsrvs.com","port":471},{"host":"uk22.prmsrvs.com","port":471},{"host":"uk25.prmsrvs.com","port":471},{"host":"uk26.prmsrvs.com","port":471},{"host":"uk27.prmsrvs.com","port":471},{"host":"uk33.prmsrvs.com","port":471},{"host":"uk38.prmsrvs.com","port":471},{"host":"uk39.prmsrvs.com","port":471},{"host":"uk40.prmsrvs.com","port":471},{"host":"uk45.prmsrvs.com","port":471},{"host":"uk47.prmsrvs.com","port":471},{"host":"uk51.prmsrvs.com","port":471},{"host":"uk52.prmsrvs.com","port":471},{"host":"uk59.prmsrvs.com","port":471},{"host":"uk60.prmsrvs.com","port":471},{"host":"uk62.prmsrvs.com","port":471},{"host":"uk64.prmsrvs.com","port":471},{"host":"uk65.prmsrvs.com","port":471},{"host":"uk66.prmsrvs.com","port":471},{"host":"uk67.prmsrvs.com","port":471},{"host":"uk68.prmsrvs.com","port":471},{"host":"uk69.prmsrvs.com","port":471},{"host":"uk71.prmsrvs.com","port":471},{"host":"uk72.prmsrvs.com","port":471},{"host":"uk73.prmsrvs.com","port":471},{"host":"uk74.prmsrvs.com","port":471},{"host":"uk75.prmsrvs.com","port":471},{"host":"uk76.prmsrvs.com","port":471},{"host":"uk77.prmsrvs.com","port":471},{"host":"uk78.prmsrvs.com","port":471},{"host":"uk79.prmsrvs.com","port":471},{"host":"uk80.prmsrvs.com","port":471},{"host":"uk82.prmsrvs.com","port":471},{"host":"uk83.prmsrvs.com","port":471}],"servers":[{"host":"uk22.trafcfy.com","port":461},{"host":"uk23.trafcfy.com","port":461},{"host":"uk24.trafcfy.com","port":461},{"host":"uk25.trafcfy.com","port":461},{"host":"uk26.trafcfy.com","port":461},{"host":"uk27.trafcfy.com","port":461},{"host":"uk28.trafcfy.com","port":461},{"host":"uk29.trafcfy.com","port":461},{"host":"uk30.trafcfy.com","port":461},{"host":"uk31.trafcfy.com","port":461},{"host":"uk32.trafcfy.com","port":461},{"host":"uk33.trafcfy.com","port":461},{"host":"uk34.trafcfy.com","port":461},{"host":"uk35.trafcfy.com","port":461},{"host":"uk36.trafcfy.com","port":461},{"host":"uk37.trafcfy.com","port":461}]},"us":{"timezoneOffset":-240,"premium_servers":[{"host":"us1.prmsrvs.com","port":471},{"host":"us2.prmsrvs.com","port":471},{"host":"us7.prmsrvs.com","port":471},{"host":"us10.prmsrvs.com","port":471},{"host":"us11.prmsrvs.com","port":471},{"host":"us12.prmsrvs.com","port":471},{"host":"us13.prmsrvs.com","port":471},{"host":"us14.prmsrvs.com","port":471}],"servers":[{"host":"us21.trafcfy.com","port":461},{"host":"us23.trafcfy.com","port":461},{"host":"us24.trafcfy.com","port":461},{"host":"us25.trafcfy.com","port":461},{"host":"us26.trafcfy.com","port":461},{"host":"us28.trafcfy.com","port":461},{"host":"us29.trafcfy.com","port":461},{"host":"us30.trafcfy.com","port":461},{"host":"us31.trafcfy.com","port":461},{"host":"us32.trafcfy.com","port":461},{"host":"us34.trafcfy.com","port":461},{"host":"us35.trafcfy.com","port":461}]},"usw":{"timezoneOffset":-420,"premium_servers":[{"host":"usw11.prmsrvs.com","port":471},{"host":"usw12.prmsrvs.com","port":471},{"host":"usw13.prmsrvs.com","port":471},{"host":"usw14.prmsrvs.com","port":471},{"host":"usw15.prmsrvs.com","port":471},{"host":"usw16.prmsrvs.com","port":471},{"host":"usw17.prmsrvs.com","port":471},{"host":"usw18.prmsrvs.com","port":471},{"host":"usw19.prmsrvs.com","port":471},{"host":"usw20.prmsrvs.com","port":471},{"host":"usw21.prmsrvs.com","port":471},{"host":"usw22.prmsrvs.com","port":471},{"host":"usw23.prmsrvs.com","port":471},{"host":"usw24.prmsrvs.com","port":471},{"host":"usw25.prmsrvs.com","port":471}]},"za":{"timezoneOffset":120,"premium_servers":[{"host":"za1.prmsrvs.com","port":471},{"host":"za2.prmsrvs.com","port":471},{"host":"za3.prmsrvs.com","port":471},{"host":"za4.prmsrvs.com","port":471},{"host":"za5.prmsrvs.com","port":471},{"host":"za6.prmsrvs.com","port":471},{"host":"za7.prmsrvs.com","port":471}]}},"domains":{"free":["trafcfy.com"],"premium":["prmsrvs.com"]}}');

                /***/
            })

        /******/
    });
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/compat get default export */
    /******/
    (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = (module) => {
            /******/
            var getter = module && module.__esModule ?
                /******/
                () => (module['default']) :
                /******/
                () => (module);
            /******/
            __webpack_require__.d(getter, {
                a: getter
            });
            /******/
            return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ // define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
        "use strict";

        ; // CONCATENATED MODULE: ./src/general/tools/experimentsToExpvarid.ts
        /* harmony default export */
        const experimentsToExpvarid = (internalExperiments => Object.entries(internalExperiments).map(([id, variant]) => `${id}_${String(variant)}`));
        // EXTERNAL MODULE: ./src/dualUse/ga/full/index.js
        var full = __webpack_require__(7457);
        var full_default = /*#__PURE__*/ __webpack_require__.n(full);
        // EXTERNAL MODULE: ./src/dualUse/ga/partial/index.js
        var partial = __webpack_require__(9480);
        var partial_default = /*#__PURE__*/ __webpack_require__.n(partial);; // CONCATENATED MODULE: ./src/dualUse/ga/index.ts
        // eslint-disable-line import/no-unresolved
        // eslint-disable-line import/no-unresolved

        /* harmony default export */
        const ga = ({
            full: (full_default()),
            partial: (partial_default())
        });; // CONCATENATED MODULE: ./src/contentScripts/promoPageExecutor.ts
        /* global NodeListOf, Promotion */
        // Chrome V2 only



        /** @function */
        const sendMessage = message => {
            if (typeof browser !== 'undefined') {
                return browser.runtime.sendMessage(message);
            }
            return new Promise(resolve => {
                chrome.runtime.sendMessage(message, resolve);
            });
        };
        const domLoaded = (async () => {
            const state = document.readyState;
            if (state !== 'loading') return;
            await new Promise(resolve => {
                window.addEventListener('DOMContentLoaded', resolve);
            });
        })();
        const informationPromise = sendMessage({
            'type': 'promo page: get information',
            'url': location.href
        });
        (async () => {
            const [{
                daysAfterInstall,
                internalExperiments,
                promotion
            }] = await Promise.all([informationPromise, domLoaded]);
            const expvarid = experimentsToExpvarid(internalExperiments);
            const links = document.querySelectorAll('a[href*="/orders/new"]');
            const clientId = await ga.full.userIdPromise;
            for (const link of links) {
                const url = link.href;
                const urlObject = new URL(url);
                urlObject.searchParams.set('instd', String(daysAfterInstall));
                if (expvarid.length) {
                    urlObject.searchParams.set('expvarid', expvarid.join(','));
                }
                urlObject.searchParams.set('cid', String(clientId));
                link.href = urlObject.toString();
                link.addEventListener('click', () => {
                    sendMessage({
                        'type': 'promo page: click',
                        promotion
                    });
                });
            }
        })();
    })();

    /******/
})();