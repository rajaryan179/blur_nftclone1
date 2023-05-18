(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8998);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8577);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__]);
([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const { provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)([
    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.mainnet,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.goerli,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.polygonMumbai
], [
    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__.publicProvider)()
]);
const client = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createClient)({
    provider,
    webSocketProvider,
    autoConnect: true
});
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {
        client: client,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8998:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ 7697:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ 8577:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6004));
module.exports = __webpack_exports__;

})();