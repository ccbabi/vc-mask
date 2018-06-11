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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: install, mapMaskOpen, mapMaskClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapMaskOpen\", function() { return mapMaskOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapMaskClose\", function() { return mapMaskClose; });\n/* harmony import */ var _mask_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mask.vue */ \"./src/mask.vue\");\n/* harmony import */ var _mask_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mask_vue__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet instance\nconst linkCloseStack = []\n\nconst def = {\n  className: '',\n  zIndex: 1000,\n  emitAll: false\n}\n\nconst optionStack = []\nconst body = document.body\n\nfunction open (callOption) {\n  const option = { ...def, ...this.__useOption, ...callOption }\n  body.appendChild(this.$mount().$el)\n  this.show = true\n  optionStack.push(option)\n}\n\nfunction close () {\n  this.show = false\n}\n\nfunction initMask (Vue) {\n  const Mask = Vue.extend(_mask_vue__WEBPACK_IMPORTED_MODULE_0___default.a)\n  Object.assign(Mask.prototype, { open, close })\n  return Mask\n}\n\nfunction init (Vue, useOption) {\n  const Mask = initMask(Vue, useOption)\n  instance = new Mask()\n  instance.__useOption = useOption\n}\n\nfunction install (Vue, useOption) {\n  Vue.$mask = Vue.prototype.$mask = init(Vue, useOption)\n}\n\nfunction mapMaskOpen (open, option) {\n  return function () {\n    const ret = open.apply(this, arguments)\n    if (ret === false) return\n    instance.open(option)\n  }\n}\n\nfunction mapMaskClose (close, emitAll) {\n  const newClose = function () {\n    const ret = close.apply(this, arguments)\n    if (ret === false) return\n    instance.close(emitAll)\n  }\n  linkCloseStack.push(newClose)\n  return newClose\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mask.vue":
/*!**********************!*\
  !*** ./src/mask.vue ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type.\\n> <template>\\n|   <div></div>\\n| </template>\");\n\n//# sourceURL=webpack:///./src/mask.vue?");

/***/ })

/******/ });