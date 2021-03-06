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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/qiaoni/nodeProject/reactEkp/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/qiaoni/nodeProject/reactEkp/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);

	var NavLogo = React.createClass({
		displayName: 'NavLogo',

		render: function render() {
			return React.createElement('img', { src: this.props.url, alt: '', className: 'navbar-left img-logo' });
		}
	});

	var NavLiItem = React.createClass({
		displayName: 'NavLiItem',

		getInitialState: function getInitialState() {
			return {
				active: this.props.active ? 'nav-active' : ''
			};
		},
		render: function render() {
			return React.createElement('li', null, React.createElement('a', { href: this.props.href, className: this.state.active }, this.props.text));
		}
	});

	var NavMenu = React.createClass({
		displayName: 'NavMenu',

		render: function render() {
			var liNodes = [];
			this.props.data.forEach(function (memu) {
				liNodes.push(React.createElement(NavLiItem, { href: memu.url, active: memu.active, text: memu.text }));
			});
			return React.createElement('ul', { className: this.props.className }, liNodes);
		}
	});
	var NavMenuBox = React.createClass({
		displayName: 'NavMenuBox',

		render: function render() {
			return React.createElement('div', { className: 'col-md-8' }, React.createElement(NavLogo, { url: this.props.data.logo }), React.createElement(NavMenu, { data: this.props.data.list, className: this.props.className }));
		}
	});

	var NavBox = React.createClass({
		displayName: 'NavBox',

		getInitialState: function getInitialState() {
			return {
				menu: {
					logo: '/images/logo.png',
					list: [{
						url: '',
						text: '签到功能',
						active: true
					}, {
						url: '',
						text: '考勤系统',
						active: false
					}, {
						url: '',
						text: '业务系统',
						active: false
					}]
				},
				user: [{
					text: '欢迎您，管理员',
					url: '',
					active: false
				}, {
					text: '个人设置',
					url: '',
					active: false
				}, {
					text: '退出系统',
					url: '',
					active: false
				}]
			};
		},
		render: function render() {
			return React.createElement('div', { className: 'container-fluid' }, React.createElement('div', { className: 'row' }, React.createElement(NavMenuBox, { data: this.state.menu, className: 'nav navbar-nav navbar-left nav-self' }), React.createElement(NavMenu, { data: this.state.user, className: 'nav navbar-nav navbar-right' })));
		}
	});

	ReactDOM.render(React.createElement(NavBox, null), document.getElementById('nav'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/qiaoni/nodeProject/reactEkp/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "nav.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);