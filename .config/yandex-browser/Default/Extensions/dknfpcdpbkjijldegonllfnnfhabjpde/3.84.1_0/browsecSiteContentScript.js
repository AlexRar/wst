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
        2857:
            /***/
            ((module) => {

                "use strict";
                module.exports = JSON.parse('["https://d3i5gqankjg0sg.cloudfront.net/","https://a703.l461.r761.fastcloudcdn.net/api/","https://ca901.l503.r843.fastcloudcdn.net/"]');

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
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
        "use strict";
        /* harmony import */
        var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
        /* harmony import */
        var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);

        const _browser = typeof browser !== 'undefined' ? browser : chrome;
        const siteAuthorizationDomains = config__WEBPACK_IMPORTED_MODULE_0___default().siteAuthorizationDomains.map(domain => 'https://' + domain);
        self.addEventListener('message', event => {
            const sourceDomain = (() => {
                try {
                    return new URL(event.origin).origin;
                } catch (e) {}
            })();
            if (!sourceDomain) return;
            if (!siteAuthorizationDomains.includes(sourceDomain)) return;
            _browser.runtime.sendMessage(event.data);
        });
    })();

    /******/
})();