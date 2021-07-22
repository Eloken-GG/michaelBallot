(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./carousel_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js",
	"./js/aos.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/js/aos.js",
	"./js/plyr.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/js/plyr.js",
	"./js/theme.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/js/theme.js",
	"./myswup_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/myswup_controller.js",
	"./typeform-seminar_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/typeform-seminar_controller.js",
	"./typeform-tsi_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/typeform-tsi_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-swup--swup': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-swup/dist/controller.js */ "./node_modules/@symfony/ux-swup/dist/controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var stimulus_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus-carousel */ "./node_modules/stimulus-carousel/dist-web/index.js");


var application = stimulus__WEBPACK_IMPORTED_MODULE_0__.Application.start();
application.register("carousel", stimulus_carousel__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/js/aos.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/js/aos.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
//
// aos.js
// Theme module
//

var options = {
  duration: 700,
  easing: 'ease-out-quad',
  once: true,
  startEvent: 'load'
};
aos__WEBPACK_IMPORTED_MODULE_0___default().init(options);

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/js/plyr.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/js/plyr.js ***!
  \*********************************************************************************************************/
/***/ (() => {

// //
// // plyr.js
// // Theme module
// //
//
// import Plyr from 'plyr';
//
//
//   // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
//   const player = new Plyr('#player');
//
//   // Expose
//   window.player = player;
//
//   // Bind event listener
//   function on(selector, type, callback) {
//     document.querySelector(selector).addEventListener(type, callback, false);
//   }
//
//   // Pause
//   on('.js-pause', 'click', () => {
//     player.pause();
//   });
//   // Pause 2
//   on('.js-pause2', 'click', () => {
//     player.pause();
//   });
//   // Play
//   on('.js-play', 'click', () => {
//     player.play();
//   });

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/js/theme.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/js/theme.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plyr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plyr */ "./assets/controllers/js/plyr.js");
/* harmony import */ var _plyr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plyr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aos */ "./assets/controllers/js/aos.js");
// Vendor
 // Theme




/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/myswup_controller.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/myswup_controller.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/theme */ "./assets/controllers/js/theme.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // Import theme



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.addEventListener('swup:connect', this._onConnect);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      // You should always remove listeners when the controller is disconnected to avoid side-effects
      this.element.removeEventListener('swup:connect', this._onConnect);
    }
  }, {
    key: "_onConnect",
    value: function _onConnect(event) {
      // Swup has just been intialized and you can access details from the event
      console.log(event.detail.swup); // Swup instance

      console.log(event.detail.options); // Options used to initialize Swup

      document.addEventListener('swup:contentReplaced', function (event) {
        window.scrollTo(0, 0); // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.

        var player;
        player = new (plyr__WEBPACK_IMPORTED_MODULE_13___default())('#player'); // Expose

        window.player = player; // Bind event listener

        function on(selector, type, callback) {
          document.querySelector(selector).addEventListener(type, callback, false);
        } // Pause


        on('.js-pause', 'click', function () {
          player.pause();
        }); // Pause 2

        on('.js-pause2', 'click', function () {
          player.pause();
        }); // Play

        on('.js-play', 'click', function () {
          player.play();
        });
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/typeform-seminar_controller.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/typeform-seminar_controller.js ***!
  \*****************************************************************************************************************************/
/***/ (() => {

(function () {
  var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm_share",
      b = "https://embed.typeform.com/";

  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q);
  }
})();

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/typeform-tsi_controller.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/typeform-tsi_controller.js ***!
  \*************************************************************************************************************************/
/***/ (() => {

(function () {
  var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm_share",
      b = "https://embed.typeform.com/";

  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q);
  }
})();

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var _controllers_js_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/js/theme */ "./assets/controllers/js/theme.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

 // Import theme

 // Start the Stimulus application


 // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.

var player = new (plyr__WEBPACK_IMPORTED_MODULE_4___default())('#player'); // Expose

window.player = player; // Bind event listener

function on(selector, type, callback) {
  document.querySelector(selector).addEventListener(type, callback, false);
} // Pause


on('.js-pause', 'click', function () {
  player.pause();
}); // Pause 2

on('.js-pause2', 'click', function () {
  player.pause();
}); // Play

on('.js-play', 'click', function () {
  player.play();
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$"));

/***/ }),

/***/ "./assets/controllers/js/aos.js":
/*!**************************************!*\
  !*** ./assets/controllers/js/aos.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
//
// aos.js
// Theme module
//

var options = {
  duration: 700,
  easing: 'ease-out-quad',
  once: true,
  startEvent: 'load'
};
aos__WEBPACK_IMPORTED_MODULE_0___default().init(options);

/***/ }),

/***/ "./assets/controllers/js/plyr.js":
/*!***************************************!*\
  !*** ./assets/controllers/js/plyr.js ***!
  \***************************************/
/***/ (() => {

// //
// // plyr.js
// // Theme module
// //
//
// import Plyr from 'plyr';
//
//
//   // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
//   const player = new Plyr('#player');
//
//   // Expose
//   window.player = player;
//
//   // Bind event listener
//   function on(selector, type, callback) {
//     document.querySelector(selector).addEventListener(type, callback, false);
//   }
//
//   // Pause
//   on('.js-pause', 'click', () => {
//     player.pause();
//   });
//   // Pause 2
//   on('.js-pause2', 'click', () => {
//     player.pause();
//   });
//   // Play
//   on('.js-play', 'click', () => {
//     player.play();
//   });

/***/ }),

/***/ "./assets/controllers/js/theme.js":
/*!****************************************!*\
  !*** ./assets/controllers/js/theme.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plyr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plyr */ "./assets/controllers/js/plyr.js");
/* harmony import */ var _plyr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plyr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aos */ "./assets/controllers/js/aos.js");
// Vendor
 // Theme




/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-swup_dist_-5d57c4"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9qcy9hb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2pzL3BseXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2pzL3RoZW1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9teXN3dXBfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvdHlwZWZvcm0tc2VtaW5hcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy90eXBlZm9ybS10c2lfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzZiZTYiXSwibmFtZXMiOlsiYXBwbGljYXRpb24iLCJBcHBsaWNhdGlvbiIsInJlZ2lzdGVyIiwiQ2Fyb3VzZWwiLCJvcHRpb25zIiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbmNlIiwic3RhcnRFdmVudCIsIkFPUyIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uQ29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJzd3VwIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInBsYXllciIsIlBseXIiLCJvbiIsInNlbGVjdG9yIiwidHlwZSIsImNhbGxiYWNrIiwicXVlcnlTZWxlY3RvciIsInBhdXNlIiwicGxheSIsIkNvbnRyb2xsZXIiLCJxcyIsImpzIiwicSIsInMiLCJkIiwiZ2kiLCJnZXRFbGVtZW50QnlJZCIsImNlIiwiY3JlYXRlRWxlbWVudCIsImd0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpZCIsImIiLCJjYWxsIiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUM1QkEsaUVBQWU7QUFDZiw0QkFBNEIsMkxBQXdFO0FBQ3BHLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyx1REFBQSxFQUFwQjtBQUNBRCxXQUFXLENBQUNFLFFBQVosQ0FBcUIsVUFBckIsRUFBaUNDLHNEQUFqQyxFOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsVUFBUSxFQUFFLEdBREk7QUFFZEMsUUFBTSxFQUFFLGVBRk07QUFHZEMsTUFBSSxFQUFFLElBSFE7QUFJZEMsWUFBVSxFQUFFO0FBSkUsQ0FBaEI7QUFPQUMsK0NBQUEsQ0FBU0wsT0FBVCxFOzs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7Q0FHQTs7QUFDQTs7Ozs7Ozs7Ozs7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Q2QsZ0JBQWpDLENBQWtEZSxJQUFsRCxFQUF3REMsUUFBeEQsRUFBa0UsS0FBbEU7QUFDSCxDLENBRUQ7OztBQUNBSCxFQUFFLENBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsWUFBTTtBQUMzQkYsUUFBTSxDQUFDTyxLQUFQO0FBQ0gsQ0FGQyxDQUFGLEMsQ0FHQTs7QUFDQUwsRUFBRSxDQUFDLFlBQUQsRUFBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUJGLFFBQU0sQ0FBQ08sS0FBUDtBQUNILENBRkMsQ0FBRixDLENBR0E7O0FBQ0FMLEVBQUUsQ0FBQyxVQUFELEVBQWEsT0FBYixFQUFzQixZQUFNO0FBQzFCRixRQUFNLENBQUNRLElBQVA7QUFDSCxDQUZDLENBQUYsQzs7Ozs7Ozs7Ozs7Ozs7OztDQ3JDQTs7QUFDTyxJQUFNbUIsR0FBRyxHQUFHQywwRUFBZ0IsQ0FBQ0MsMElBQUQsQ0FBNUIsQzs7Ozs7Ozs7Ozs7Ozs7QVBIUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTS9DLE9BQU8sR0FBRztBQUNkQyxVQUFRLEVBQUUsR0FESTtBQUVkQyxRQUFNLEVBQUUsZUFGTTtBQUdkQyxNQUFJLEVBQUUsSUFIUTtBQUlkQyxZQUFVLEVBQUU7QUFKRSxDQUFoQjtBQU9BQywrQ0FBQSxDQUFTTCxPQUFULEU7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxROzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtDQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FNSkEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9qcy9hb3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9qcy9hb3MuanNcIixcblx0XCIuL2pzL3BseXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9qcy9wbHlyLmpzXCIsXG5cdFwiLi9qcy90aGVtZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2pzL3RoZW1lLmpzXCIsXG5cdFwiLi9teXN3dXBfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL215c3d1cF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi90eXBlZm9ybS1zZW1pbmFyX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy90eXBlZm9ybS1zZW1pbmFyX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3R5cGVmb3JtLXRzaV9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvdHlwZWZvcm0tdHNpX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtc3d1cC0tc3d1cCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1zd3VwL2Rpc3QvY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCJzdGltdWx1c1wiXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwic3RpbXVsdXMtY2Fyb3VzZWxcIlxyXG5cclxuY29uc3QgYXBwbGljYXRpb24gPSBBcHBsaWNhdGlvbi5zdGFydCgpXHJcbmFwcGxpY2F0aW9uLnJlZ2lzdGVyKFwiY2Fyb3VzZWxcIiwgQ2Fyb3VzZWwpIiwiLy9cclxuLy8gYW9zLmpzXHJcbi8vIFRoZW1lIG1vZHVsZVxyXG4vL1xyXG5cclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBkdXJhdGlvbjogNzAwLFxyXG4gIGVhc2luZzogJ2Vhc2Utb3V0LXF1YWQnLFxyXG4gIG9uY2U6IHRydWUsXHJcbiAgc3RhcnRFdmVudDogJ2xvYWQnXHJcbn07XHJcblxyXG5BT1MuaW5pdChvcHRpb25zKTtcclxuIiwiLy8gLy9cclxuLy8gLy8gcGx5ci5qc1xyXG4vLyAvLyBUaGVtZSBtb2R1bGVcclxuLy8gLy9cclxuLy9cclxuLy8gaW1wb3J0IFBseXIgZnJvbSAncGx5cic7XHJcbi8vXHJcbi8vXHJcbi8vICAgLy8gVGhpcyBpcyB0aGUgYmFyZSBtaW5pbXVtIEphdmFTY3JpcHQuIFlvdSBjYW4gb3B0IHRvIHBhc3Mgbm8gYXJndW1lbnRzIHRvIHNldHVwLlxyXG4vLyAgIGNvbnN0IHBsYXllciA9IG5ldyBQbHlyKCcjcGxheWVyJyk7XHJcbi8vXHJcbi8vICAgLy8gRXhwb3NlXHJcbi8vICAgd2luZG93LnBsYXllciA9IHBsYXllcjtcclxuLy9cclxuLy8gICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbi8vICAgZnVuY3Rpb24gb24oc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbi8vICAgfVxyXG4vL1xyXG4vLyAgIC8vIFBhdXNlXHJcbi8vICAgb24oJy5qcy1wYXVzZScsICdjbGljaycsICgpID0+IHtcclxuLy8gICAgIHBsYXllci5wYXVzZSgpO1xyXG4vLyAgIH0pO1xyXG4vLyAgIC8vIFBhdXNlIDJcclxuLy8gICBvbignLmpzLXBhdXNlMicsICdjbGljaycsICgpID0+IHtcclxuLy8gICAgIHBsYXllci5wYXVzZSgpO1xyXG4vLyAgIH0pO1xyXG4vLyAgIC8vIFBsYXlcclxuLy8gICBvbignLmpzLXBsYXknLCAnY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgICBwbGF5ZXIucGxheSgpO1xyXG4vLyAgIH0pO1xyXG5cclxuXHJcblxyXG4iLCIvLyBWZW5kb3JcclxuaW1wb3J0ICdhbHBpbmVqcyc7XHJcblxyXG4vLyBUaGVtZVxyXG5pbXBvcnQgJy4vcGx5cic7XHJcbmltcG9ydCAnLi9hb3MnOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XHJcblxyXG5pbXBvcnQgUGx5ciBmcm9tICdwbHlyJztcclxuLy8gSW1wb3J0IHRoZW1lXHJcbmltcG9ydCAnLi9qcy90aGVtZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3d1cDpjb25uZWN0JywgdGhpcy5fb25Db25uZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNjb25uZWN0KCkge1xyXG4gICAgICAgIC8vIFlvdSBzaG91bGQgYWx3YXlzIHJlbW92ZSBsaXN0ZW5lcnMgd2hlbiB0aGUgY29udHJvbGxlciBpcyBkaXNjb25uZWN0ZWQgdG8gYXZvaWQgc2lkZS1lZmZlY3RzXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29ubmVjdCcsIHRoaXMuX29uQ29ubmVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ29ubmVjdChldmVudCkge1xyXG4gICAgICAgIC8vIFN3dXAgaGFzIGp1c3QgYmVlbiBpbnRpYWxpemVkIGFuZCB5b3UgY2FuIGFjY2VzcyBkZXRhaWxzIGZyb20gdGhlIGV2ZW50XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLnN3dXApOyAvLyBTd3VwIGluc3RhbmNlXHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLm9wdGlvbnMpOyAvLyBPcHRpb25zIHVzZWQgdG8gaW5pdGlhbGl6ZSBTd3VwXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3d1cDpjb250ZW50UmVwbGFjZWQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBiYXJlIG1pbmltdW0gSmF2YVNjcmlwdC4gWW91IGNhbiBvcHQgdG8gcGFzcyBubyBhcmd1bWVudHMgdG8gc2V0dXAuXHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXI7XHJcbiAgICAgICAgICAgIHBsYXllciA9IG5ldyBQbHlyKCcjcGxheWVyJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBFeHBvc2VcclxuICAgICAgICAgICAgd2luZG93LnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICAgICAgLy8gQmluZCBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbihzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBQYXVzZVxyXG4gICAgICAgICAgICBvbignLmpzLXBhdXNlJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBQYXVzZSAyXHJcbiAgICAgICAgICAgIG9uKCcuanMtcGF1c2UyJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBQbGF5XHJcbiAgICAgICAgICAgIG9uKCcuanMtcGxheScsICdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHFzLCBqcywgcSwgcywgZCA9IGRvY3VtZW50LCBnaSA9IGQuZ2V0RWxlbWVudEJ5SWQsIGNlID0gZC5jcmVhdGVFbGVtZW50LCBndCA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUsXHJcbiAgICAgICAgaWQgPSBcInR5cGVmX29ybV9zaGFyZVwiLCBiID0gXCJodHRwczovL2VtYmVkLnR5cGVmb3JtLmNvbS9cIjtcclxuICAgIGlmICghZ2kuY2FsbChkLCBpZCkpIHtcclxuICAgICAgICBqcyA9IGNlLmNhbGwoZCwgXCJzY3JpcHRcIik7XHJcbiAgICAgICAganMuaWQgPSBpZDtcclxuICAgICAgICBqcy5zcmMgPSBiICsgXCJlbWJlZC5qc1wiO1xyXG4gICAgICAgIHEgPSBndC5jYWxsKGQsIFwic2NyaXB0XCIpWzBdO1xyXG4gICAgICAgIHEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIHEpXHJcbiAgICB9XHJcbn0pKCkiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHFzLCBqcywgcSwgcywgZCA9IGRvY3VtZW50LCBnaSA9IGQuZ2V0RWxlbWVudEJ5SWQsIGNlID0gZC5jcmVhdGVFbGVtZW50LFxyXG4gICAgICAgIGd0ID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZSwgaWQgPSBcInR5cGVmX29ybV9zaGFyZVwiLFxyXG4gICAgICAgIGIgPSBcImh0dHBzOi8vZW1iZWQudHlwZWZvcm0uY29tL1wiO1xyXG4gICAgaWYgKCFnaS5jYWxsKGQsIGlkKSkge1xyXG4gICAgICAgIGpzID0gY2UuY2FsbChkLCBcInNjcmlwdFwiKTtcclxuICAgICAgICBqcy5pZCA9IGlkO1xyXG4gICAgICAgIGpzLnNyYyA9IGIgKyBcImVtYmVkLmpzXCI7XHJcbiAgICAgICAgcSA9IGd0LmNhbGwoZCwgXCJzY3JpcHRcIilbMF07XHJcbiAgICAgICAgcS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgcSlcclxuICAgIH1cclxufSkoKSIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzJ1xyXG5cclxuLy8gSW1wb3J0IHRoZW1lXHJcbmltcG9ydCAnLi9jb250cm9sbGVycy9qcy90aGVtZSdcclxuXHJcbi8vIFN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCBQbHlyIGZyb20gXCJwbHlyXCI7XHJcblxyXG4vLyBUaGlzIGlzIHRoZSBiYXJlIG1pbmltdW0gSmF2YVNjcmlwdC4gWW91IGNhbiBvcHQgdG8gcGFzcyBubyBhcmd1bWVudHMgdG8gc2V0dXAuXHJcbmxldCBwbGF5ZXIgPSBuZXcgUGx5cignI3BsYXllcicpO1xyXG5cclxuLy8gRXhwb3NlXHJcbndpbmRvdy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4vLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbmZ1bmN0aW9uIG9uKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG59XHJcblxyXG4vLyBQYXVzZVxyXG5vbignLmpzLXBhdXNlJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGxheWVyLnBhdXNlKCk7XHJcbn0pO1xyXG4vLyBQYXVzZSAyXHJcbm9uKCcuanMtcGF1c2UyJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGxheWVyLnBhdXNlKCk7XHJcbn0pO1xyXG4vLyBQbGF5XHJcbm9uKCcuanMtcGxheScsICdjbGljaycsICgpID0+IHtcclxuICAgIHBsYXllci5wbGF5KCk7XHJcbn0pOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC4oanx0KXN4PyQvXHJcbikpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9