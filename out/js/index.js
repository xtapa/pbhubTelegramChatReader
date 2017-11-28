/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_json__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config_json__);


//From config
const CHAT_ID = __WEBPACK_IMPORTED_MODULE_0__config_json___default.a.chat_id;
/* unused harmony export CHAT_ID */

const BOT_TOKEN = __WEBPACK_IMPORTED_MODULE_0__config_json___default.a.telegram_token;
/* unused harmony export BOT_TOKEN */


//Internal
const API_BASE_ADDRESS = 'https://api.telegram.org/';
/* harmony export (immutable) */ __webpack_exports__["a"] = API_BASE_ADDRESS;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_constants__ = __webpack_require__(0);

class BotApi {
    constructor(token) {
        this._token = token;
        this._apiAddress = `${__WEBPACK_IMPORTED_MODULE_0__utils_constants__["a" /* API_BASE_ADDRESS */]}bot${token}/`;
    }

    callToApiWithMethod(method) {
        return `${this._apiAddress}${method}`;
    }

    getUpdateAddress() {
        return this.callToApiWithMethod('getUpdates');
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"telegram_token":"509996148:AAGYZI06da4DwhZ5kM4NfgY6e7oE0rjuTB4","chat_id":-154572268}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_botApi_botApi__ = __webpack_require__(1);



const botApi = new __WEBPACK_IMPORTED_MODULE_1__src_botApi_botApi__["default"](Constants.BOT_TOKEN);

console.log('Hallo welt');

// request( , { json:true }, (err, res, body) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log(body.result[4].message.chat);
// })


/***/ })
/******/ ]);