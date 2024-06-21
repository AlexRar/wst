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

        // EXTERNAL MODULE: ./config/production.js
        var production = __webpack_require__(4019);
        var production_default = /*#__PURE__*/ __webpack_require__.n(production);; // CONCATENATED MODULE: ./src/general/tools/internationalize.ts
        const _browser = typeof browser !== 'undefined' ? browser : chrome;

        /** Get data from locales through chrome.i18n.getMessage
        @function */
        /* harmony default export */
        const internationalize = (key => {
            try {
                return _browser.i18n.getMessage(key) || key;
            } catch (error) {
                // Firefox
                return key;
            }
        });; // CONCATENATED MODULE: ./src/general/tools/getUserLanguage.ts
        const getUserLanguage_browser = typeof browser !== 'undefined' ? browser : chrome;

        /** @function */
        /* harmony default export */
        const getUserLanguage = (() => getUserLanguage_browser.i18n.getUILanguage() !== 'ru' ? 'en' : 'ru');; // CONCATENATED MODULE: ./src/contentScripts/proxyOverlay/html.ts


        const language = getUserLanguage();
        const translations = Object.fromEntries(Object.entries({
            'accessInternet': 'access_internet_via_premium_locations',
            'cancelSubscriptionAtAnyTime': 'cancel_subscription_at_any_time',
            'dedicatedLanes': 'dedicated_traffic_lanes',
            'forOnly': 'for_only',
            'getPremiumNow': 'get_premium_now',
            'moneyBackGuarantee': '7_days_money_back_guarantee',
            'premiumLocations': 'premium_locations',
            'premiumServers': 'premium_servers',
            'performanceGuaranteed': 'top_performance_guaranteed',
            'turboSpeed': 'turbo_speed'
        }).map(([key, value]) => [key, internationalize(value)]));
        const onlyPerMonth = internationalize('only_X_per_month').replace(/XXX/, '<span data-text="price string"></span>');

        /** @function */
        /* harmony default export */
        const html = (({
            countryBase64
        }) => {
            return `
  <div class="bRowSecRoot">
    <div class="bRowSecArrows"><!--
   --><div class="bRowSecArrow bRowSec_left" data-role="arrow 1"></div><!--
   --><div class="bRowSecArrow bRowSec_top" data-role="arrow 2"></div><!--
 --></div>
    <div class="bRowSecCircle">
      <div class="bRowSecCircle_In" data-click="extend">
        <div class="bRowSecCircle_Flag" style="background-image:url('data:image/svg+xml;base64,${countryBase64}')"></div>
        <div class="bRowSecCircle_Icon"></div>
      </div>
    </div>
    <div class="bRowSecClose" data-role="close"></div>
  </div>

  <div class="bRowSecTrack" data-role="track">
    <div class="bRowSecTrack_Ellipse"></div>
    <div class="bRowSecTrack_Arrow bRowSec_top" data-role="arrow"></div>
  </div>
  
  <div class="bRowSecCountries" data-role="countries">
    <div class="bRowSecCountries_Title">
      ${language === 'ru' ? 'Виртуальные страны' : 'Virtual location'}
      <div class="bRowSecCountries_Title_Back" data-click="countries close"></div>
    </div>
    <div class="bRowSecCountries_Search">
      <input type="text" placeholder="${language === 'ru' ? 'Поиск страны' : 'Search a country'}" />
    </div>
    <div class="bRowSecCountries_ListOut"><div class="bRowSecCountries_List" data-role="countries list">
      <div data-role="countries list stop">
        <div class="bRowSecCountries_List_Stop">${language === 'ru' ? 'Выключить VPN' : 'Stop VPN'}</div>
        <div class="bRowSecCountries_List_Delimiter"></div>
      </div>
    </div></div>
  </div>

  <div class="bRowSecPremium" data-role="premium">
    <div class="bRowSecPremium_Head">
      Browsec Premium
    </div>
    <div class="bRowSecPremium_UpgradeNow">
      ${language === 'ru' ? 'Улучшить аккаунт и получить доступ к 600+ серверам в 43 странах' : 'Upgrade now and enjoy access to 600+ servers in 43 countries'}
    </div>
    <div class="bRowSecPremium_Features">
      <div class="bRowSecPremium_Features_E">
        <div class="bRowSecPremium_Feature_Icon" data-load-image="feature countries"></div>
        <div class="bRowSecPremium_Feature_Name">${translations.premiumLocations}</div>
        <div class="bRowSecPremium_Feature_Text">${translations.accessInternet}</div>
      </div>
      <div class="bRowSecPremium_Features_E">
        <div class="bRowSecPremium_Feature_Icon" data-load-image="feature speed"></div>
        <div class="bRowSecPremium_Feature_Name">${translations.turboSpeed}</div>
        <div class="bRowSecPremium_Feature_Text">${translations.dedicatedLanes}</div>
      </div>
      <div class="bRowSecPremium_Features_E" >
        <div class="bRowSecPremium_Feature_Icon" data-load-image="feature servers"></div>
        <div class="bRowSecPremium_Feature_Name">${translations.premiumServers}</div>
        <div class="bRowSecPremium_Feature_Text">${translations.performanceGuaranteed}</div>
      </div>
    </div>
    <a class="bRowSecPremium_Button" target="_blank">
      <span class="bRowSecPremium_Button_Name">${translations.getPremiumNow}</span>
      <span class="bRowSecPremium_Button_Price">${onlyPerMonth}</span>
    </a>
    <div class="bRowSecPremium_ExtraText">${translations.moneyBackGuarantee}</div>

    <div class="bRowSecPremium_Close" data-role="premium close"></div>
  </div>`;
        });; // CONCATENATED MODULE: ./src/contentScripts/proxyOverlay/style.ts

        const style_language = getUserLanguage();

        /** @function */
        /* harmony default export */
        const style = (({
            browsecLogo
        }) => {
            return `
  .bRowSecRoot{
    box-sizing: content-box;
    height: 38px;
    border-radius: 29px;
    padding: 10px 0;
    background: #d9d9d9;
    position: fixed;
    display: flex;
    z-index: 2147483647;
    font-family: 'Trebuchet MS', arial, sans-serif!important;
  }
  .bRowSecRoot.bRowSec_top{
    top: 17px;
  }
  .bRowSecRoot.bRowSec_right{
    right: 17px;
  }
  .bRowSecRoot.bRowSec_bottom{
    bottom: 17px;
  }
  .bRowSecRoot.bRowSec_left{
    left: 17px;
  }
  
  .bRowSecArrows{
    display:none;
    border-right: 1px solid #7a7c7f;
    padding: 9px 15px 0 7px;
  }
  .bRowSecRoot.bRowSec_left .bRowSecArrows{
    order: 1;
    border-right: 0;
    border-left: 1px solid #7a7c7f;
    padding: 9px 7px 0 15px;
  }
  .bRowSecRoot:hover .bRowSecArrows{
    display: block;
  }

  .bRowSecArrow{
    display: inline-block;
    vertical-align: top;
    width: 20px;
    height: 17px;
    padding: 3px 0 0;
    cursor:pointer;
    position: relative;
  }
  .bRowSecArrow ~ .bRowSecArrow{
    margin-left: 8px;
  }
  .bRowSecArrow::before{
    content: '';
    display: block;
    width: 13px;
    height:13px;
    background: url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM13 5.25L1 5.25V6.75L13 6.75V5.25Z' fill='black'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;
    background-size: contain;
    margin: 0 auto 0;
  }

  .bRowSecArrow:first-child{}
  .bRowSecArrow:last-child::before{
    transform: rotate(90deg);
  }

  .bRowSecRoot.bRowSec_top.bRowSec_right .bRowSecArrow:last-child::before{
    transform: rotate(270deg);
  }

  .bRowSecRoot.bRowSec_bottom.bRowSec_left .bRowSecArrow:first-child::before{
    transform: rotate(90deg);
  }
  .bRowSecRoot.bRowSec_bottom.bRowSec_left .bRowSecArrow:last-child::before{
    transform: rotate(180deg);
  }

  .bRowSecRoot.bRowSec_top.bRowSec_left .bRowSecArrow:first-child::before{
    transform: rotate(270deg);
  }
  .bRowSecRoot.bRowSec_top.bRowSec_left .bRowSecArrow:last-child::before{
    transform: rotate(180deg);
  }

  .bRowSecArrow::after{
    content: '';
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid #000;
    border-radius: 50%;
  }
  .bRowSecArrow:hover::after{
    display: block;
  }
  
  .bRowSecCircle{
    border: 1px solid transparent;
    border-width: 3px 25px 0;
    position: relative;
  }
  .bRowSecCircle_In{
    cursor: pointer;
  }
  .bRowSecCircle_Flag{
    box-sizing: content-box;
    width:30px;
    height:30px;
    overflow:hidden;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    border: 1px solid #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .bRowSecCircle_Icon{
    box-sizing: content-box;
    width: 16px;
    height: 16px;
    background: url('data:image/svg+xml;base64,${browsecLogo}') 50% 50% no-repeat;
    background-size: contain;
    position: absolute;
    top: -3px;
    right: -3px;
  }
  
  .bRowSecClose{
    box-sizing: content-box;
    width: 9px;
    height:9px;
    border: 2px solid transparent;
    background: url("data:image/svg+xml,%3Csvg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0.863563' y1='1.22652' x2='7.93463' y2='8.29759' stroke='black'/%3E%3Cline x1='0.84591' y1='8.29757' x2='7.91698' y2='1.2265' stroke='black'/%3E%3C/svg%3E%0A") 0 0 no-repeat;
    position: absolute;
    right: 5px;
    top: calc(50% - ( 9px + 4px ) / 2 );
    cursor: pointer;
  }

  .bRowSecRoot.bRowSec_left .bRowSecClose{
    right: auto;
    left: 5px;
  }


  .bRowSecTrack{
    position: fixed;
    z-index: 2147483647;
    display: none;
  }
  .bRowSecTrack.bRowSec_top{
    top: 17px;
  }
  .bRowSecTrack.bRowSec_bottom{
    bottom: 17px;
  }
  .bRowSecTrack.bRowSec_left{
    left: 17px;
  }
  .bRowSecTrack.bRowSec_right{
    right: 17px;
  }
  .bRowSecTrack_Ellipse{
    box-sizing: content-box;
    width: 82px;
    height: 38px;
    border-radius: 29px;
    padding: 10px 0;
    background: #ebebeb;
  }
  .bRowSecTrack_Arrow{
    position: absolute;
    width: 20px;
    height: 17px;
    padding: 3px 0 0;
  }
  .bRowSecTrack_Arrow.bRowSec_top{
    top: 100px;
    right: 31px;
  }
  .bRowSecTrack_Arrow.bRowSec_bottom{
    bottom: 100px;
    right: 31px;
  }
  .bRowSecTrack_Arrow.bRowSec_left{
    top: calc(50% - 10px);
    left: 125px;
  }
  .bRowSecTrack_Arrow.bRowSec_right{
    top: calc(50% - 10px);
    right: 125px;
  }

  .bRowSecTrack_Arrow::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ebebeb;
    border-radius: 50%;
  }
  .bRowSecTrack_Arrow::after{
    content: '';
    display: block;
    width: 13px;
    height: 13px;
    background: url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM13 5.25L1 5.25V6.75L13 6.75V5.25Z' fill='black'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;
    background-size: contain;
    margin: 0 auto 0;
    position: relative;
    opacity: 0.5;
  }
  .bRowSecTrack_Arrow.bRowSec_left::after{}
  .bRowSecTrack_Arrow.bRowSec_right::after{
    transform: rotate(180deg);
  }
  .bRowSecTrack_Arrow.bRowSec_top::after{
    transform: rotate(90deg);
  }
  .bRowSecTrack_Arrow.bRowSec_bottom::after{
    transform: rotate(270deg);
  }
  
  .bRowSecCountries{
    display: none;
    background: #fff;
    position: fixed;
    width: 363px;
    /*height: 550px;*/
    z-index: 2147483647;
    right: 17px;
    bottom: 17px;
    border-radius: 13px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #20304C;
    font-size: 14px;
    line-height: 1.3;
  }
  .bRowSecRoot.bRowSec_bottom.bRowSec_left ~ .bRowSecCountries{
    left: 17px;
    right: auto;
  }
  .bRowSecRoot.bRowSec_top.bRowSec_left ~ .bRowSecCountries{
    left: 17px;
    right: auto;
    bottom: auto;
    top: 17px;
  }
  .bRowSecRoot.bRowSec_top.bRowSec_right ~ .bRowSecCountries{
    bottom: auto;
    top: 17px;
  }

  .bRowSecCountries_Search{
    margin: 0 22px;
  }
  .bRowSecCountries_Search input[type="text"]{
    display: block;
    width: 100%;
    background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_766_1015)'%3E%3Cpath d='M11.8659 12.4261C10.0507 14.0111 7.33649 14.5105 5.05321 13.5769C2.30009 12.4513 0.546335 9.28504 1.07305 6.3391C1.60009 3.39113 4.34102 1.0066 7.40602 0.938632C7.46243 0.937695 7.51884 0.937382 7.5754 0.937538C10.5877 0.966132 13.4276 3.29066 13.9856 6.29879C14.3596 8.31504 13.7146 10.4933 12.3154 11.9914L17.7509 17.2758C17.8674 17.3989 17.8473 17.4399 17.8454 17.5085C17.8388 17.7468 17.5157 17.9033 17.3151 17.7239L11.8659 12.4261ZM7.49462 1.56254C4.80587 1.58801 2.2829 3.62082 1.72368 6.26738C1.31212 8.21566 1.9604 10.3558 3.38602 11.7475C5.02321 13.3457 7.61462 13.8822 9.77618 12.9983C12.2766 11.9761 13.8671 9.08676 13.371 6.41269C12.8793 3.7616 10.4241 1.62519 7.64805 1.56348C7.59691 1.5627 7.54576 1.56238 7.49462 1.56254Z' fill='black' fill-opacity='0.4'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_766_1015'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") calc(100% - 17px) 50% no-repeat;
    box-sizing: border-box;
    border: 0;
    height: 48px;
    font-size: 14px;
    line-height: 46px;
    padding: 0 20px;
    color: #000;
    border-radius: 22px;
    border: 1px solid #A6B5C8;
  }
  .bRowSecCountries_Search input[type="text"]:focus{
    outline: none;
    box-shadow: 0 0 6px rgba(166,181,200,0.7) inset;
    border-color: #888;
  }
  .bRowSecCountries_Title{
    padding: 22px 20px 22px;
    color: #20304c;
    font-size: 14px;
    position: relative;
    text-align: center;
  }
  .bRowSecCountries_Title_Back{
    background: url("data:image/svg+xml,%3Csvg width='21' height='22' viewBox='0 0 21 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='12.3161' y1='20.8839' x2='1.70947' y2='10.2773' stroke='%232A344D' stroke-width='2.5'/%3E%3Cline x1='12.7971' y1='0.983981' x2='1.88383' y2='11.8972' stroke='%232A344D' stroke-width='2.5'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;
    width: 21px;
    height:22px;
    position: absolute;
    top: calc(50% - 11px);
    left: 20px;
    cursor: pointer;
  }
  .bRowSecCountries_ListOut{
    padding: 10px 8px 10px 0;
  }
  .bRowSecCountries_List{
    box-sizing: content-box;
    padding: 5px 2px 0 10px;
    overflow: auto;
    height: 415px;
    color: #333;
  }
  .bRowSecCountries_List::-webkit-scrollbar {
    width: 9px;
    background: #f4f4f4;
    border-radius: 4.5px;
  }
  .bRowSecCountries_List::-webkit-scrollbar-thumb {
    background-color: #cecece; 
    border-radius: 4.5px;
  }
  .bRowSecCountries_List::-webkit-scrollbar-thumb:hover {
    background-color: #999; 
  }
  .bRowSecCountries_List::-webkit-scrollbar-thumb:active {
    background-color: #666;
  }
  .bRowSecCountries_List_Stop{
    padding: 0 0 0 67px;
    line-height:40px;
    position: relative;
    cursor: pointer;
  }
  .bRowSecCountries_List_Stop::after{
    content: '';
    display: block;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_f_766_2133)'%3E%3Ccircle cx='30' cy='30' r='16' fill='black' fill-opacity='0.22'/%3E%3C/g%3E%3Ccircle cx='30' cy='30' r='13' fill='white' stroke='white' stroke-width='4'/%3E%3Cpath d='M30.3333 31.1665C30.5543 31.1665 30.7663 31.0787 30.9226 30.9224C31.0789 30.7661 31.1667 30.5542 31.1667 30.3332V21.9998C31.1667 21.7788 31.0789 21.5669 30.9226 21.4106C30.7663 21.2543 30.5543 21.1665 30.3333 21.1665C30.1123 21.1665 29.9004 21.2543 29.7441 21.4106C29.5878 21.5669 29.5 21.7788 29.5 21.9998V30.3332C29.5 30.5542 29.5878 30.7661 29.7441 30.9224C29.9004 31.0787 30.1123 31.1665 30.3333 31.1665Z' fill='%23A3A0AC' fill-opacity='0.6'/%3E%3Cpath d='M33.6091 23.2489C33.4321 23.1574 33.226 23.14 33.0361 23.2005C32.8462 23.261 32.6881 23.3944 32.5966 23.5714C32.5051 23.7485 32.4877 23.9546 32.5482 24.1445C32.6087 24.3343 32.7421 24.4924 32.9191 24.5839C34.1142 25.2009 35.0673 26.2016 35.6255 27.4252C36.1837 28.6489 36.3145 30.0246 35.9971 31.3316C35.6796 32.6385 34.9322 33.8009 33.8749 34.6322C32.8175 35.4634 31.5116 35.9153 30.1666 35.9153C28.8217 35.9153 27.5157 35.4634 26.4584 34.6322C25.401 33.8009 24.6536 32.6385 24.3362 31.3316C24.0187 30.0246 24.1496 28.6489 24.7077 27.4252C25.2659 26.2016 26.219 25.2009 27.4141 24.5839C27.5018 24.5386 27.5797 24.4765 27.6433 24.4011C27.707 24.3257 27.7551 24.2385 27.7851 24.1445C27.815 24.0504 27.8262 23.9515 27.8178 23.8531C27.8095 23.7548 27.7819 23.6591 27.7366 23.5714C27.6913 23.4838 27.6292 23.4059 27.5538 23.3422C27.4784 23.2786 27.3912 23.2304 27.2972 23.2005C27.2032 23.1705 27.1042 23.1594 27.0058 23.1677C26.9075 23.176 26.8118 23.2036 26.7241 23.2489C25.2306 24.0205 24.0397 25.2715 23.3424 26.801C22.645 28.3306 22.4818 30.0501 22.8788 31.6836C23.2758 33.317 24.2101 34.7697 25.5317 35.8086C26.8533 36.8474 28.4856 37.4122 30.1666 37.4122C31.8476 37.4122 33.4799 36.8474 34.8015 35.8086C36.1231 34.7697 37.0574 33.317 37.4544 31.6836C37.8515 30.0501 37.6882 28.3306 36.9909 26.801C36.2936 25.2715 35.1026 24.0205 33.6091 23.2489Z' fill='%23A3A0AC' fill-opacity='0.62'/%3E%3Cdefs%3E%3Cfilter id='filter0_f_766_2133' x='0' y='0' width='60' height='60' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='7' result='effect1_foregroundBlur_766_2133'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A") 50% 50% no-repeat;
    position: absolute;
    top: -10px;
    left: -4px;
    width:60px;
    height:60px;
  }
  .bRowSecCountries_List_Stop:hover{
    background: #f7f8fc;
  }
  .bRowSecCountries_List_Stop.bRowSec_active,
  .bRowSecCountries_List_Stop.bRowSec_active:hover{
    background: #ddd;
  }
  .bRowSecCountries_List_Delimiter{
    border-top: 1px solid #ecf2f8;
    height:0;
    overflow:hidden;
    margin: 5px 0;
  }
  .bRowSecCountries_List_E{
    padding: 0px 10px 0px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .bRowSecCountries_List_E:hover{
    background: #f7f8fc;
  }
  .bRowSecCountries_List_E.bRowSec_active,
  .bRowSecCountries_List_E.bRowSec_active:hover{
    background: #ddd;
  }
  .bRowSecCountries_Flag{
    flex-grow: 0;
    width: 57px;
  }
  .bRowSecCountries_Flag img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity: 0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
    width: 30px;
    height: 20px;
  }
  .bRowSecCountries_List_Name{
    flex-grow: 1;
    line-height:40px;
  }
  .bRowSecCountries_PingOut{
    flex-grow: 0;
  }
  .bRowSecCountries_Ping{
    width: 23px;
    height: 12px;
    overflow: hidden;
    text-indent: -9999px;
    font-size: 0;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .bRowSecCountries_Ping1{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='12' viewBox='0 0 23 12'%3E%3Cstyle%3E%0Arect %7B fill: %23ced8df; width: 3px; rx: 1; ry: 1; transform: scaleY(-1); transform-origin: center; y: 0px;%0A%7D%0A%3C/style%3E%3Crect style='fill: %23c0392b' height='4' /%3E%3Crect x='5' height='6' /%3E%3Crect x='10' height='8' /%3E%3Crect x='15' height='10' /%3E%3Crect x='20' height='12' /%3E%3C/svg%3E");
  }
  .bRowSecCountries_Ping2{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='12' viewBox='0 0 23 12'%3E%3Cstyle%3E%0Arect %7B fill: %23ced8df; width: 3px; rx: 1; ry: 1; transform: scaleY(-1); transform-origin: center; y: 0px;%0A%7D%0A%3C/style%3E%3Crect style='fill: %23c0392b' height='4'/%3E%3Crect style='fill: %23c0392b' x='5' height='6'/%3E%3Crect x='10' height='8'/%3E%3Crect x='15' height='10'/%3E%3Crect x='20' height='12'/%3E%3C/svg%3E");
  }
  .bRowSecCountries_Ping3{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='12' viewBox='0 0 23 12'%3E%3Cstyle%3E%0Arect %7B fill: %23ced8df; width: 3px; rx: 1; ry: 1; transform: scaleY(-1); transform-origin: center; y: 0px;%0A%7D%0A%3C/style%3E%3Crect style='fill: %23e0b300' height='4'/%3E%3Crect style='fill: %23e0b300' x='5' height='6'/%3E%3Crect style='fill: %23e0b300' x='10' height='8'/%3E%3Crect x='15' height='10'/%3E%3Crect x='20' height='12'/%3E%3C/svg%3E");
  }
  .bRowSecCountries_Ping4{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='12' viewBox='0 0 23 12'%3E%3Cstyle%3E%0Arect %7B fill: %23ced8df; width: 3px; rx: 1; ry: 1; transform: scaleY(-1); transform-origin: center; y: 0px;%0A%7D%0A%3C/style%3E%3Crect style='fill: %233b9946' height='4'/%3E%3Crect style='fill: %233b9946' x='5' height='6'/%3E%3Crect style='fill: %233b9946' x='10' height='8'/%3E%3Crect style='fill: %233b9946' x='15' height='10'/%3E%3Crect x='20' height='12'/%3E%3C/svg%3E");
  }
  .bRowSecCountries_Ping5{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='12' viewBox='0 0 23 12'%3E%3Cstyle%3E%0Arect %7B fill: %23ced8df; width: 3px; rx: 1; ry: 1; transform: scaleY(-1); transform-origin: center; y: 0px;%0A%7D%0A%3C/style%3E%3Crect style='fill: %233b9946' height='4'/%3E%3Crect style='fill: %233b9946' x='5' height='6'/%3E%3Crect style='fill: %233b9946' x='10' height='8'/%3E%3Crect style='fill: %233b9946' x='15' height='10'/%3E%3Crect style='fill: %233b9946' x='20' height='12'/%3E%3C/svg%3E");
  }

  .bRowSecCountries_FavoriteOut{
    padding: 0px 0 0 8px;
    flex-grow: 0;
  }
  .bRowSecCountries_Favorite{
    box-sizing: content-box;
    width: 14px;
    height: 13.2px;
    cursor: pointer;
    border: 3px solid transparent;
    margin-right: -3px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .bRowSecPremium{
    position: fixed;
    box-sizing: border-box;
    width: 363px;
    padding: 20px 25px 20px;
    z-index: 2147483647;
    right: 17px;
    bottom: 17px;
    background: #fff;
    border-radius: 13px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #20304C;
    line-height: 1.3;
    display: none;
  }
  .bRowSecRoot.bRowSec_bottom.bRowSec_left ~ .bRowSecPremium{
    left: 17px;
    right: auto;
  }
  .bRowSecRoot.bRowSec_top.bRowSec_left ~ .bRowSecPremium{
    left: 17px;
    right: auto;
    bottom: auto;
    top: 17px;
  }
  .bRowSecRoot.bRowSec_top.bRowSec_right ~ .bRowSecPremium{
    bottom: auto;
    top: 17px;
  }
  .bRowSecPremium_Head{
    color: #3b9946;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  }
  .bRowSecPremium_UpgradeNow{
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    padding: 10px 0 0;    
  }
  .bRowSecPremium_Features{
    color: #7a7c7f;
    padding: 25px 0 20px;
  }
  .bRowSecPremium_Features_E{
    min-height: 95px;
    box-sizing: border-box;
    padding: 2px 0 0px 90px;
    position: relative;
  }
  .bRowSecPremium_Feature_Icon{
    box-sizing: border-box;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    width: 67px;
    padding-top:67px;
    position: absolute;
    left: 4px;
    top: 8px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .bRowSecPremium_Feature_Name{
    color: #28334e;
    font-size: 17px;
    margin: 9px 0 2px;
    line-height: 1.29;
  }
  .bRowSecPremium_Feature_Text{
    font-size: 15px; /* language === 'ru' ? '13px' : '15px' */
    line-height: 1.25;
  }

  .bRowSecPremium_Button{
    display: block;
    background: #3b9946;
    text-align: center;
    position: relative;
    border-radius: 22px;
    padding: 9px 5px;
  }
  .bRowSecPremium_Button,
  .bRowSecPremium_Button:link,
  .bRowSecPremium_Button:visited{
    color:#fff;
    text-decoration: none;
  }
  .bRowSecPremium_Button:hover{
    color:#fff;
    text-decoration: none;
  }
  .bRowSecPremium_Button_Name{
    display: block;
    font-size: ${style_language === 'ru' ? '16px' : '18px'};
    line-height: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .bRowSecPremium_Button_Price{
    display: block;
    font-size: 14px;
    line-height: 18px;
  }

  .bRowSecPremium_ExtraText{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }

  .bRowSecPremium_Close{
    box-sizing: content-box;
    position: absolute;
    cursor: pointer;
    top: 13px;
    right: 13px;
    background: url("data:image/svg+xml,%3Csvg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0.593544' y1='0.646447' x2='7.66461' y2='7.71751' stroke='black'/%3E%3Cline x1='0.57589' y1='7.71774' x2='7.64696' y2='0.646668' stroke='black'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;
    width: 9px;
    height: 9px;
    border: 5px solid transparent;
  }
  `;
        });; // CONCATENATED MODULE: ./src/general/tools/urlToDomain.ts
        /** Get domain from URL. Returns domain or null in case of error
        @function */
        /* harmony default export */
        const urlToDomain = (url => {
            if (!url) return null;
            if (url.startsWith('about:')) return null;
            try {
                let {
                    protocol,
                    'hostname': domain
                } = new URL(url);
                if (!['http:', 'https:'].includes(protocol)) return null;
                return domain;
            } catch (e) {
                return null;
            }
        });; // CONCATENATED MODULE: ./src/contentScripts/proxyOverlay.ts
        /* global NodeListOf */






        const proxyOverlay_language = getUserLanguage();

        /** @function */
        const sendMessage = message => {
            if (typeof browser !== 'undefined') {
                return browser.runtime.sendMessage(message);
            }
            return new Promise(resolve => {
                chrome.runtime.sendMessage(message, resolve);
            });
        };
        class CornerState {
            // eslint-disable-line no-use-before-define

            constructor({
                horizontal,
                vertical
            }) {
                this._horizontal = horizontal;
                this._vertical = vertical;
                this._listeners = [];
            }
            get horizontal() {
                return this._horizontal;
            }
            set horizontal(value) {
                if (this._horizontal === value) return;
                this._horizontal = value;
                for (const listener of this._listeners) listener(this);
            }
            get vertical() {
                return this._vertical;
            }
            set vertical(value) {
                if (this._vertical === value) return;
                this._vertical = value;
                for (const listener of this._listeners) listener(this);
            }

            /** @method */
            addListener(listener) {
                this._listeners.push(listener);
            }

            /** @method */
            removeListener(listener) {
                this._listeners = this._listeners.filter(item => item !== listener);
            }
        };

        /** @function */
        const stateToPlacement = state => (state.vertical === 'top' ? 't' : 'b') + (state.horizontal === 'left' ? 'l' : 'r');
        const domLoaded = new Promise(resolve => {
            if (document.readyState !== 'loading') {
                resolve();
                return;
            }
            self.addEventListener('DOMContentLoaded', event => {
                resolve();
            });
        });

        /** @function */
        const sendMetrics = (eventName, data = {}) => {
            return sendMessage({
                'type': 'proxy overlay: send metrics',
                eventName,
                data
            });
        };
        (async _countriesStopOut$que => {
            // Ignore browsec site
            const url = location.href;
            const domain = urlToDomain(url);
            if (!domain) return;
            for (const browsecDomain of (production_default()).siteAuthorizationDomains) {
                if (browsecDomain === domain || domain.endsWith('.' + browsecDomain)) return;
            }
            const initialRequestOutput = await sendMessage({
                'type': 'proxy overlay: initial request',
                domain
            });
            if (!initialRequestOutput) return;
            const {
                country,
                'images': {
                    'favorites': favoritesBase64,
                    'flag': countryBase64,
                    'logo': logoBase64
                },
                showFavorites,
                'placement': initialPlacement
            } = initialRequestOutput;
            if (!country) return;
            await domLoaded;
            const styleElement = document.createElement('style');
            let cssText = style({
                'browsecLogo': logoBase64
            });
            if (showFavorites) {
                cssText += `
    .bRowSecCountries_Favorite{
      background-image: url('data:image/svg+xml;base64,${favoritesBase64}#base');
    }
    .bRowSecCountries_Favorite:hover{
      background-image: url('data:image/svg+xml;base64,${favoritesBase64}#hover');
    }
    .bRowSecCountries_Favorite.bRowSecCountries_Favorite_active,
    .bRowSecCountries_Favorite.bRowSecCountries_Favorite_active:hover{
      background-image: url('data:image/svg+xml;base64,${favoritesBase64}#active');
    }`;
            }
            styleElement.textContent = cssText;
            document.head.append(styleElement);
            const parser = new DOMParser();
            const domTree = parser.parseFromString(html({
                countryBase64
            }), 'text/html');
            const elements = Array.from(domTree.body.children);
            const mainElement = elements[0];
            const trackElement = elements[1];
            const countriesElement = elements[2];
            const premiumElement = elements[3];
            const arrow1 = mainElement.querySelector('[data-role="arrow 1"]');
            const arrow2 = mainElement.querySelector('[data-role="arrow 2"]');
            const trackArrow = trackElement.querySelector('[data-role="arrow"]');
            const extender = mainElement.querySelector('[data-click="extend"]');
            const close = mainElement.querySelector('[data-role="close"]');
            const countriesList = countriesElement.querySelector('[data-role="countries list"]');
            const countriesSearch = countriesElement.querySelector('input[type="text"]');
            const countriesClose = countriesElement.querySelector('[data-click="countries close"]');
            if (!countriesList) return;
            const countriesStopOut = countriesList.querySelector('[data-role="countries list stop"]');
            const countriesStop = countriesStopOut === null || countriesStopOut === void 0 ? void 0 : (_countriesStopOut$que = countriesStopOut.querySelector) === null || _countriesStopOut$que === void 0 ? void 0 : _countriesStopOut$que.call(countriesStopOut, '.bRowSecCountries_List_Stop');
            if (!extender || !close || !trackArrow || !countriesSearch || !countriesClose || !countriesStopOut || !countriesStop || !countriesElement) return;
            const vertical = initialPlacement.slice(0, 1) === 't' ? 'top' : 'bottom';
            const horizontal = initialPlacement.slice(1, 2) === 'l' ? 'left' : 'right';
            const state = new CornerState({
                horizontal,
                vertical
            });
            sendMetrics('badge', {
                'placement': stateToPlacement(state)
            });
            mainElement.classList.add('bRowSec_' + state.horizontal, 'bRowSec_' + state.vertical);
            if (arrow1) {
                arrow1.addEventListener('mouseover', () => {
                    if (state.horizontal === 'right' && state.vertical === 'bottom') {
                        trackElement.classList.add('bRowSec_left', 'bRowSec_bottom');
                        trackArrow.classList.add('bRowSec_left');
                    } else if (state.horizontal === 'right' && state.vertical === 'top') {
                        trackElement.classList.add('bRowSec_left', 'bRowSec_top');
                        trackArrow.classList.add('bRowSec_left');
                    } else if (state.horizontal === 'left' && state.vertical === 'bottom') {
                        trackElement.classList.add('bRowSec_left', 'bRowSec_top');
                        trackArrow.classList.add('bRowSec_top');
                    } else if (state.horizontal === 'left' && state.vertical === 'top') {
                        trackElement.classList.add('bRowSec_left', 'bRowSec_bottom');
                        trackArrow.classList.add('bRowSec_bottom');
                    }
                    trackElement.style.cssText = 'display:block';
                });
                arrow1.addEventListener('mouseleave', () => {
                    trackElement.style.cssText = '';
                    trackElement.classList.remove('bRowSec_top', 'bRowSec_bottom', 'bRowSec_left', 'bRowSec_right');
                    trackArrow.classList.remove('bRowSec_top', 'bRowSec_bottom', 'bRowSec_left', 'bRowSec_right');
                });
                arrow1.addEventListener('click', () => {
                    if (state.horizontal === 'right') {
                        // Move left
                        state.horizontal = 'left';
                        mainElement.classList.remove('bRowSec_right');
                        mainElement.classList.add('bRowSec_left');
                    } else if (state.horizontal === 'left' && state.vertical === 'bottom') {
                        // Move up
                        state.vertical = 'top';
                        mainElement.classList.remove('bRowSec_bottom');
                        mainElement.classList.add('bRowSec_top');
                    } else if (state.horizontal === 'left' && state.vertical === 'top') {
                        // Move bottom
                        state.vertical = 'bottom';
                        mainElement.classList.remove('bRowSec_top');
                        mainElement.classList.add('bRowSec_bottom');
                    }
                    sendMessage({
                        'type': 'proxy overlay: move',
                        'placement': stateToPlacement(state),
                        domain
                    });
                });
            }
            if (arrow2) {
                arrow2.addEventListener('mouseover', () => {
                    if (state.horizontal === 'right' && state.vertical === 'bottom') {
                        trackElement.classList.add('bRowSec_top', 'bRowSec_right');
                        trackArrow.classList.add('bRowSec_top');
                    } else if (state.horizontal === 'right' && state.vertical === 'top') {
                        trackElement.classList.add('bRowSec_bottom', 'bRowSec_right');
                        trackArrow.classList.add('bRowSec_bottom');
                    } else if (state.horizontal === 'left' && state.vertical === 'top') {
                        trackElement.classList.add('bRowSec_top', 'bRowSec_right');
                        trackArrow.classList.add('bRowSec_right');
                    } else if (state.horizontal === 'left' && state.vertical === 'bottom') {
                        trackElement.classList.add('bRowSec_bottom', 'bRowSec_right');
                        trackArrow.classList.add('bRowSec_right');
                    }
                    trackElement.style.cssText = 'display:block';
                });
                arrow2.addEventListener('mouseleave', () => {
                    trackElement.style.cssText = '';
                    trackElement.classList.remove('bRowSec_top', 'bRowSec_bottom', 'bRowSec_left', 'bRowSec_right');
                    trackArrow.classList.remove('bRowSec_top', 'bRowSec_bottom', 'bRowSec_left', 'bRowSec_right');
                });
                arrow2.addEventListener('click', () => {
                    if (state.horizontal === 'right' && state.vertical === 'bottom') {
                        // Move up
                        state.vertical = 'top';
                        mainElement.classList.remove('bRowSec_bottom');
                        mainElement.classList.add('bRowSec_top');
                    } else if (state.horizontal === 'right' && state.vertical === 'top') {
                        // Move down
                        state.vertical = 'bottom';
                        mainElement.classList.remove('bRowSec_top');
                        mainElement.classList.add('bRowSec_bottom');
                    } else if (state.horizontal === 'left') {
                        // Move right
                        state.horizontal = 'right';
                        mainElement.classList.remove('bRowSec_left');
                        mainElement.classList.add('bRowSec_right');
                    }
                    sendMessage({
                        'type': 'proxy overlay: move',
                        'placement': stateToPlacement(state),
                        domain
                    });
                });
            }
            let countryObjects = [];
            countriesStop.addEventListener('click', async () => {
                sendMessage({
                    'type': 'proxy overlay: set country',
                    'url': location.href,
                    'country': null,
                    'placement': stateToPlacement(state)
                });
                await new Promise(resolve => {
                    setTimeout(resolve, 100);
                });
                location.reload();
            });
            extender.addEventListener('click', async () => {
                countriesList.innerHTML = '';
                countriesList.append(countriesStopOut);
                const data = await sendMessage({
                    'type': 'proxy overlay: get list'
                });
                sendMetrics('badge_click', {
                    'placement': stateToPlacement(state)
                });
                const list = (() => {
                    if (data.type === 'premium') {
                        return data.list.map(({
                            code,
                            favorited,
                            mark
                        }) => ({
                            code,
                            favorited,
                            'name': internationalize('country_' + code),
                            mark,
                            'premium': false
                        })).sort((objectA, objectB) => {
                            if (objectA.favorited && !objectB.favorited) return -1;
                            if (!objectA.favorited && objectB.favorited) return 1;
                            const a = objectA.name.toLowerCase();
                            const b = objectB.name.toLowerCase();
                            if (a === b) return 0;
                            return a > b ? 1 : -1;
                        });
                    }
                    const free = data.freeList.map(({
                        code,
                        mark
                    }) => ({
                        code,
                        'name': internationalize('country_' + code),
                        mark,
                        'premium': false
                    })).sort(({
                        'name': a
                    }, {
                        'name': b
                    }) => {
                        a = a.toLowerCase();
                        b = b.toLowerCase();
                        if (a === b) return 0;
                        return a > b ? 1 : -1;
                    });
                    const premium = data.premiumList.map(({
                        code,
                        mark
                    }) => ({
                        code,
                        'name': internationalize('country_' + code) + ` (${proxyOverlay_language === 'ru' ? 'Премиум' : 'Premium'})`,
                        mark,
                        'premium': true
                    })).sort(({
                        'name': a
                    }, {
                        'name': b
                    }) => {
                        a = a.toLowerCase();
                        b = b.toLowerCase();
                        if (a === b) return 0;
                        return a > b ? 1 : -1;
                    });
                    return free.concat(premium);
                })();
                const countries = [];
                for (const {
                        code
                    }
                    of list) {
                    if (!countries.includes(code)) countries.push(code);
                }
                countryObjects = [];
                for (const {
                        code,
                        favorited,
                        name,
                        mark,
                        premium
                    }
                    of list) {
                    const div = document.createElement('div');
                    div.className = 'bRowSecCountries_List_E' + (country === code ? ' bRowSec_active' : '');
                    const flagElement = document.createElement('div');
                    flagElement.className = 'bRowSecCountries_Flag';
                    flagElement.dataset.country = code;
                    const nameElement = document.createElement('div');
                    nameElement.className = 'bRowSecCountries_List_Name';
                    nameElement.textContent = name;
                    const pingOutElement = document.createElement('div');
                    pingOutElement.className = 'bRowSecCountries_PingOut';
                    if (mark) {
                        const pingElement = document.createElement('div');
                        pingElement.className = 'bRowSecCountries_Ping bRowSecCountries_Ping' + mark;
                        pingOutElement.append(pingElement);
                    }
                    if (showFavorites) {
                        const favoritesOutElement = document.createElement('div');
                        favoritesOutElement.className = 'bRowSecCountries_FavoriteOut';
                        const favoritesElement = document.createElement('div');
                        favoritesElement.className = favorited ? 'bRowSecCountries_Favorite bRowSecCountries_Favorite_active' : 'bRowSecCountries_Favorite';
                        favoritesOutElement.append(favoritesElement);
                        let favoriteState = Boolean(favorited);
                        favoritesElement.addEventListener('click', () => {
                            favoriteState = !favoriteState;
                            const countryObject = countryObjects.find(item => item.code === code);
                            if (countryObject) countryObject.favorited = favoriteState;
                            const {
                                classList
                            } = favoritesElement;
                            if (favoriteState) classList.add('bRowSecCountries_Favorite_active');
                            else classList.remove('bRowSecCountries_Favorite_active');
                            sendMessage({
                                'type': 'proxy overlay: set favorite',
                                'country': code,
                                'enabled': favoriteState
                            });
                            countryObjects.sort((objectA, objectB) => {
                                if (objectA.favorited && !objectB.favorited) return -1;
                                if (!objectA.favorited && objectB.favorited) return 1;
                                const a = objectA.name.toLowerCase();
                                const b = objectB.name.toLowerCase();
                                if (a === b) return 0;
                                return a > b ? 1 : -1;
                            });
                            for (const {
                                    element
                                }
                                of countryObjects) {
                                countriesList.append(element);
                            }
                        });
                        div.append(flagElement, nameElement, pingOutElement, favoritesOutElement);
                    } else {
                        div.append(flagElement, nameElement, pingOutElement);
                    }
                    div.addEventListener('click', async event => {
                        const {
                            target
                        } = event;
                        if (!(target instanceof Element)) return;

                        // No click on favorites
                        if (target.classList.contains('bRowSecCountries_Favorite')) return;
                        if (premium) {
                            countriesElement.style.cssText = '';
                            premiumElement.style.cssText = 'display:block;';
                            sendMetrics('site_premium_div', {
                                'placement': stateToPlacement(state)
                            });
                            sendMetrics('premium_div', {
                                'source': 'site overlay'
                            });
                            return;
                        }
                        sendMessage({
                            'type': 'proxy overlay: set country',
                            'url': location.href,
                            'country': code,
                            'placement': stateToPlacement(state)
                        });
                        countriesElement.style.cssText = '';
                        await new Promise(resolve => {
                            setTimeout(resolve, 100);
                        });
                        location.reload();
                    });
                    countriesList.append(div);
                    countryObjects.push({
                        code,
                        'element': div,
                        favorited,
                        name,
                        mark,
                        'visible': true
                    });
                }
                countriesElement.style.cssText = 'display: block;';
                countriesSearch.focus();
                sendMetrics('countries', {
                    'source': 'site overlay'
                });
                (async () => {
                    for (let i = 0; i < countries.length; i += 10) {
                        const chunk = countries.slice(i, i + 10);
                        const flags = await sendMessage({
                            'type': 'proxy overlay: get countries flags',
                            'countries': chunk
                        });
                        for (const {
                                code,
                                img
                            }
                            of flags) {
                            for (const element of countriesList.querySelectorAll(`[data-country="${code}"]`)) {
                                const imgElement = document.createElement('img');
                                imgElement.src = img;
                                element.append(imgElement);
                            }
                        }
                    }
                })();
            });
            close.addEventListener('click', () => {
                sendMessage({
                    'type': 'proxy overlay: close',
                    'placement': stateToPlacement(state),
                    'url': location.href
                });
                mainElement.remove();
            });

            // Search in countries
            let searchValue = '';
            let currentStamp;
            countriesSearch.addEventListener('input', data => {
                let inputValue = countriesSearch.value;
                if (inputValue.length < 2) inputValue = '';
                const newValue = inputValue.trim().toLowerCase();
                if (searchValue === newValue) return;
                const localStamp = Date.now();
                currentStamp = localStamp;
                setTimeout(() => {
                    if (localStamp !== currentStamp) return;
                    sendMetrics('site_countries_search', {
                        'placement': stateToPlacement(state),
                        'search_query': newValue
                    });
                }, 500);
                searchValue = newValue;
                for (const object of countryObjects) {
                    const newState = object.name.toLowerCase().includes(searchValue);
                    if (object.visible === newState) continue;
                    object.visible = newState;
                    object.element.style.cssText = newState ? '' : 'display:none';
                }
            });
            countriesClose.addEventListener('click', () => {
                countriesElement.style.cssText = '';
                sendMetrics('site_countries_back', {
                    'placement': stateToPlacement(state)
                });
                sendMetrics('countries_back', {
                    'source': 'site overlay'
                });
            });
            for (const element of elements) {
                document.body.append(element);
            }
            const lastElement = elements[elements.length - 1];
            const bodyObserver = new MutationObserver(() => {
                if (document.body.lastElementChild === lastElement) return;
                for (const element of elements) {
                    document.body.append(element);
                }
            });
            bodyObserver.observe(document.body, {
                'childList': true,
                'subtree': false
            });
            const documentObserver = new MutationObserver(() => {
                if (document.documentElement.lastElementChild !== document.body) return;
                while (document.documentElement.lastElementChild !== document.body) {
                    document.documentElement.lastElementChild.remove();
                }
            });
            documentObserver.observe(document.documentElement, {
                'childList': true,
                'subtree': false
            });
            {
                const {
                    image,
                    priceString,
                    premiumUrl
                } = await sendMessage({
                    'type': 'proxy overlay: get premium data'
                });
                const priceElement = premiumElement.querySelector('[data-text="price string"]');
                if (priceElement) {
                    priceElement.textContent = priceString;
                }
                const collection = premiumElement.querySelectorAll('[data-load-image]');
                for (const element of collection) {
                    const loadImage = element.dataset.loadImage || '';
                    const value = loadImage.replace(/feature /, '');
                    element.style.cssText = `background-image:url( 'data:image/svg+xml;base64,${image}#${value}' )`;
                }
                const closeElement = premiumElement.querySelector('[data-role="premium close"]');
                if (closeElement) {
                    closeElement.addEventListener('click', () => {
                        countriesElement.style.cssText = 'display:block;';
                        premiumElement.style.cssText = '';
                    });
                }
                const button = premiumElement.querySelector('a');

                /** @function */
                const applyPlacementToUrl = (url, placement) => {
                    const urlObject = new URL(url);
                    urlObject.searchParams.set('placement', placement);
                    return urlObject.toString();
                };
                if (button) {
                    button.href = applyPlacementToUrl(premiumUrl, stateToPlacement(state));
                    button.addEventListener('click', () => {
                        sendMetrics('site_premium_div_click', {
                            'placement': stateToPlacement(state)
                        });
                        sendMetrics('premium_div_click', {
                            'source': 'site overlay'
                        });
                    });
                    state.addListener(state => {
                        button.href = applyPlacementToUrl(premiumUrl, stateToPlacement(state));
                    });
                }
            }
        })();
    })();

    /******/
})();