/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var app_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(app_1.AppView, { innerHtml: "<p>Version 1.0</p>", buttonText: "Click here" }), document.getElementById("main"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	// 'HelloProps' describes the shape of props.
	// State is never set so we use the '{}' type.
	var AppView = (function (_super) {
	    __extends(AppView, _super);
	    function AppView(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = { buttonText: props.buttonText };
	        _this.press = _this.press.bind(_this);
	        return _this;
	    }
	    AppView.prototype.press = function () {
	        this.setState({ buttonText: "You clicked button" });
	    };
	    AppView.prototype.render = function () {
	        return React.createElement("div", { className: "page-header" },
	            React.createElement("div", null, this.props.innerHtml),
	            React.createElement("button", { onClick: this.press }, this.state.buttonText),
	            React.createElement("div", { id: "books-list" }));
	    };
	    return AppView;
	}(React.Component));
	exports.AppView = AppView;


/***/ }
/******/ ]);