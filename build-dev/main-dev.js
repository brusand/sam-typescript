/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! c:\Users\EBDU6461\git\sam-angular\src\samlom.ts */1);


/***/ },
/* 1 */
/*!***********************!*\
  !*** ./src/samlom.ts ***!
  \***********************/
/***/ function(module, exports) {

	var COUNTER_MAX = 10;
	var model = {};
	model.present = function (data) {
	    state.render(model);
	};
	////////////////////////////////////////////////////////////////////////////////
	// View
	//
	var view = {};
	// Initial State
	view.init = function (model) {
	    return view.ready(model);
	};
	// State representation of the ready state
	view.ready = function (model) {
	    return ("");
	};
	//display the state representation
	view.display = function (representation) {
	    var stateRepresentation = document.getElementById("representation");
	    stateRepresentation.innerHTML = representation;
	};
	// Display initial state
	view.display(view.init(model));
	////////////////////////////////////////////////////////////////////////////////
	// State
	//
	var state = { view: view };
	model.state = state;
	// Derive the state representation as a function of the systen
	// control state
	state.representation = function (model) {
	    var representation = 'oops... something went wrong, the system is in an invalid state';
	    state.view.display(representation);
	};
	// Derive the current state of the system
	state.ready = function (model) {
	    return ((model.counter === COUNTER_MAX) && !model.started && !model.launched && !model.aborted);
	};
	// Next action predicate, derives whether
	// the system is in a (control) state where
	// an action needs to be invoked
	state.nextAction = function (model) {
	};
	state.render = function (model) {
	    state.representation(model);
	    state.nextAction(model);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Actions
	//
	var actions = {};
	actions.init = function (data, present) {
	    present = present || model.present;
	    data.started = true;
	    present(data);
	    return false;
	};


/***/ }
/******/ ]);
//# sourceMappingURL=main-dev.js.map