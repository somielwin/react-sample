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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(4);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;


var app = (0, _express2.default)();

// JS publicly
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {

	res.send((0, _renderer2.default)(req));
});

app.listen(3000, function () {

	console.log('Listening to Port 3000');
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(1);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {

	// boot up location
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRouterDom.StaticRouter,
		{ location: req.path, conten: {} },
		_react2.default.createElement(_Routes2.default, null)
	));

	return '\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t <meta charset="utf-8">\n\t\t\t    <meta http-equiv="x-ua-compatible" content="ie=edge">\n\t\t\t    <link rel="shortcut icon" href="/frontend/images/favicon.ico">\n\t\t\t    <meta name="robots" content="index, follow">\n\n\t\t\t    <title>React | Sample</title>\n\t\t\t    <meta name="description" content="">\n\t\t\t    <link rel="canonical" href="">\n\n\t\t\t    <meta property="og:title" content="">\n\t\t\t    <meta property="og:description" content="">\n\t\t\t    <meta property="og:image" content="">\n\n\t\t\t    <meta name="twitter:card" content="">\n\t\t\t    <meta name="twitter:site" content="">\n\n\t\t\t    <meta name="twitter:title" content="">\n\t\t\t    <meta name="twitter:description" content="">\n\t\t\t    <meta property="twitter:image" content="">\n\n\t\t\t    <meta property="og:site_name" content="">\n\t\t\t    <meta property="og:type" content="">\n\t\t\t    <meta property="og:url" content="">\n\n\n\t\t\t    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id="root">' + content + '</div>\n\t\t\t\t<script src="bundle.js"></script>\n\t\t\t</body>\n\t\t</html>\n\t';
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(7);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(8);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default [
// 	{
// 		..Home,
// 		path: '/',
// 		exact: true
// 	},
// 	{
// 		..About,
// 		path: '/about',
// 		exact: true
// 	}
// ];


exports.default = function () {

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', component: _About2.default }),
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/hi', component: function component() {
				return 'Hi';
			} })
	);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'Im the very very best home component '
		),
		_react2.default.createElement(
			'p',
			null,
			'lore ipsum dolor amit sit'
		),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					return console.log('Hi there!');
				} },
			'Press me!'
		)
	);
}; //ES6
exports.default = Home;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			' About Us'
		),
		_react2.default.createElement(
			'p',
			null,
			'lore ipsum dolor amit sit'
		)
	);
}; //ES6
exports.default = About;

/***/ })
/******/ ]);