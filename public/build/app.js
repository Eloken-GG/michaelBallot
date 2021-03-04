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
	"./myswup_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/myswup_controller.js"
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
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app */ "./assets/app.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_14__);
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
        player = new (plyr__WEBPACK_IMPORTED_MODULE_14___default())('#player'); // Expose

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
0,[["./assets/app.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-swup_dist_-105072"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9qcy9hb3MuanM/MzE5NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvanMvcGx5ci5qcz83NzRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9qcy90aGVtZS5qcz84NDc5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9teXN3dXBfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2pzL2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvanMvcGx5ci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzZiZTYiXSwibmFtZXMiOlsicGxheWVyIiwiUGx5ciIsIndpbmRvdyIsIm9uIiwic2VsZWN0b3IiLCJ0eXBlIiwiY2FsbGJhY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwicGF1c2UiLCJwbGF5IiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiLCJvcHRpb25zIiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbmNlIiwic3RhcnRFdmVudCIsIkFPUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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bWFwID0ge1xuXHRcIi4vY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2pzL2Fvcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2pzL2Fvcy5qc1wiLFxuXHRcIi4vanMvcGx5ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2pzL3BseXIuanNcIixcblx0XCIuL2pzL3RoZW1lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvanMvdGhlbWUuanNcIixcblx0XCIuL215c3d1cF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbXlzd3VwX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtc3d1cC0tc3d1cCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1zd3VwL2Rpc3QvY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCJzdGltdWx1c1wiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJzdGltdWx1cy1jYXJvdXNlbFwiO1xudmFyIGFwcGxpY2F0aW9uID0gQXBwbGljYXRpb24uc3RhcnQoKTtcbmFwcGxpY2F0aW9uLnJlZ2lzdGVyKFwiY2Fyb3VzZWxcIiwgQ2Fyb3VzZWwpOyIsIi8vXG4vLyBhb3MuanNcbi8vIFRoZW1lIG1vZHVsZVxuLy9cbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbnZhciBvcHRpb25zID0ge1xuICBkdXJhdGlvbjogNzAwLFxuICBlYXNpbmc6ICdlYXNlLW91dC1xdWFkJyxcbiAgb25jZTogdHJ1ZSxcbiAgc3RhcnRFdmVudDogJ2xvYWQnXG59O1xuQU9TLmluaXQob3B0aW9ucyk7IiwiLy8gLy9cbi8vIC8vIHBseXIuanNcbi8vIC8vIFRoZW1lIG1vZHVsZVxuLy8gLy9cbi8vXG4vLyBpbXBvcnQgUGx5ciBmcm9tICdwbHlyJztcbi8vXG4vL1xuLy8gICAvLyBUaGlzIGlzIHRoZSBiYXJlIG1pbmltdW0gSmF2YVNjcmlwdC4gWW91IGNhbiBvcHQgdG8gcGFzcyBubyBhcmd1bWVudHMgdG8gc2V0dXAuXG4vLyAgIGNvbnN0IHBsYXllciA9IG5ldyBQbHlyKCcjcGxheWVyJyk7XG4vL1xuLy8gICAvLyBFeHBvc2Vcbi8vICAgd2luZG93LnBsYXllciA9IHBsYXllcjtcbi8vXG4vLyAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcbi8vICAgZnVuY3Rpb24gb24oc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuLy8gICB9XG4vL1xuLy8gICAvLyBQYXVzZVxuLy8gICBvbignLmpzLXBhdXNlJywgJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIHBsYXllci5wYXVzZSgpO1xuLy8gICB9KTtcbi8vICAgLy8gUGF1c2UgMlxuLy8gICBvbignLmpzLXBhdXNlMicsICdjbGljaycsICgpID0+IHtcbi8vICAgICBwbGF5ZXIucGF1c2UoKTtcbi8vICAgfSk7XG4vLyAgIC8vIFBsYXlcbi8vICAgb24oJy5qcy1wbGF5JywgJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIHBsYXllci5wbGF5KCk7XG4vLyAgIH0pOyIsIi8vIFZlbmRvclxuaW1wb3J0ICdhbHBpbmVqcyc7IC8vIFRoZW1lXG5cbmltcG9ydCAnLi9wbHlyJztcbmltcG9ydCAnLi9hb3MnOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5yZWZsZWN0LmNvbnN0cnVjdC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5jcmVhdGUuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1wiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5pbXBvcnQgJy4uL2FwcCc7XG5pbXBvcnQgUGx5ciBmcm9tICdwbHlyJztcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db250cm9sbGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3d1cDpjb25uZWN0JywgdGhpcy5fb25Db25uZWN0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgLy8gWW91IHNob3VsZCBhbHdheXMgcmVtb3ZlIGxpc3RlbmVycyB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGRpc2Nvbm5lY3RlZCB0byBhdm9pZCBzaWRlLWVmZmVjdHNcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzd3VwOmNvbm5lY3QnLCB0aGlzLl9vbkNvbm5lY3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfb25Db25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkNvbm5lY3QoZXZlbnQpIHtcbiAgICAgIC8vIFN3dXAgaGFzIGp1c3QgYmVlbiBpbnRpYWxpemVkIGFuZCB5b3UgY2FuIGFjY2VzcyBkZXRhaWxzIGZyb20gdGhlIGV2ZW50XG4gICAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwuc3d1cCk7IC8vIFN3dXAgaW5zdGFuY2VcblxuICAgICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLm9wdGlvbnMpOyAvLyBPcHRpb25zIHVzZWQgdG8gaW5pdGlhbGl6ZSBTd3VwXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29udGVudFJlcGxhY2VkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgLy8gVGhpcyBpcyB0aGUgYmFyZSBtaW5pbXVtIEphdmFTY3JpcHQuIFlvdSBjYW4gb3B0IHRvIHBhc3Mgbm8gYXJndW1lbnRzIHRvIHNldHVwLlxuXG4gICAgICAgIHZhciBwbGF5ZXI7XG4gICAgICAgIHBsYXllciA9IG5ldyBQbHlyKCcjcGxheWVyJyk7IC8vIEV4cG9zZVxuXG4gICAgICAgIHdpbmRvdy5wbGF5ZXIgPSBwbGF5ZXI7IC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcblxuICAgICAgICBmdW5jdGlvbiBvbihzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgIH0gLy8gUGF1c2VcblxuXG4gICAgICAgIG9uKCcuanMtcGF1c2UnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIH0pOyAvLyBQYXVzZSAyXG5cbiAgICAgICAgb24oJy5qcy1wYXVzZTInLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIH0pOyAvLyBQbGF5XG5cbiAgICAgICAgb24oJy5qcy1wbGF5JywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShDb250cm9sbGVyKTtcblxuZXhwb3J0IHsgX2RlZmF1bHQgYXMgZGVmYXVsdCB9OyIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzJ1xyXG5cclxuLy8gSW1wb3J0IHRoZW1lXHJcbmltcG9ydCAnLi9jb250cm9sbGVycy9qcy90aGVtZSdcclxuXHJcbi8vIFN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCBQbHlyIGZyb20gXCJwbHlyXCI7XHJcblxyXG4vLyBUaGlzIGlzIHRoZSBiYXJlIG1pbmltdW0gSmF2YVNjcmlwdC4gWW91IGNhbiBvcHQgdG8gcGFzcyBubyBhcmd1bWVudHMgdG8gc2V0dXAuXHJcbmxldCBwbGF5ZXIgPSBuZXcgUGx5cignI3BsYXllcicpO1xyXG5cclxuLy8gRXhwb3NlXHJcbndpbmRvdy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4vLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbmZ1bmN0aW9uIG9uKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG59XHJcblxyXG4vLyBQYXVzZVxyXG5vbignLmpzLXBhdXNlJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGxheWVyLnBhdXNlKCk7XHJcbn0pO1xyXG4vLyBQYXVzZSAyXHJcbm9uKCcuanMtcGF1c2UyJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGxheWVyLnBhdXNlKCk7XHJcbn0pO1xyXG4vLyBQbGF5XHJcbm9uKCcuanMtcGxheScsICdjbGljaycsICgpID0+IHtcclxuICAgIHBsYXllci5wbGF5KCk7XHJcbn0pOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC4oanx0KXN4PyQvXHJcbikpO1xyXG4iLCIvL1xyXG4vLyBhb3MuanNcclxuLy8gVGhlbWUgbW9kdWxlXHJcbi8vXHJcblxyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGR1cmF0aW9uOiA3MDAsXHJcbiAgZWFzaW5nOiAnZWFzZS1vdXQtcXVhZCcsXHJcbiAgb25jZTogdHJ1ZSxcclxuICBzdGFydEV2ZW50OiAnbG9hZCdcclxufTtcclxuXHJcbkFPUy5pbml0KG9wdGlvbnMpO1xyXG4iLCIvLyAvL1xyXG4vLyAvLyBwbHlyLmpzXHJcbi8vIC8vIFRoZW1lIG1vZHVsZVxyXG4vLyAvL1xyXG4vL1xyXG4vLyBpbXBvcnQgUGx5ciBmcm9tICdwbHlyJztcclxuLy9cclxuLy9cclxuLy8gICAvLyBUaGlzIGlzIHRoZSBiYXJlIG1pbmltdW0gSmF2YVNjcmlwdC4gWW91IGNhbiBvcHQgdG8gcGFzcyBubyBhcmd1bWVudHMgdG8gc2V0dXAuXHJcbi8vICAgY29uc3QgcGxheWVyID0gbmV3IFBseXIoJyNwbGF5ZXInKTtcclxuLy9cclxuLy8gICAvLyBFeHBvc2VcclxuLy8gICB3aW5kb3cucGxheWVyID0gcGxheWVyO1xyXG4vL1xyXG4vLyAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuLy8gICBmdW5jdGlvbiBvbihzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuLy8gICB9XHJcbi8vXHJcbi8vICAgLy8gUGF1c2VcclxuLy8gICBvbignLmpzLXBhdXNlJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgcGxheWVyLnBhdXNlKCk7XHJcbi8vICAgfSk7XHJcbi8vICAgLy8gUGF1c2UgMlxyXG4vLyAgIG9uKCcuanMtcGF1c2UyJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgcGxheWVyLnBhdXNlKCk7XHJcbi8vICAgfSk7XHJcbi8vICAgLy8gUGxheVxyXG4vLyAgIG9uKCcuanMtcGxheScsICdjbGljaycsICgpID0+IHtcclxuLy8gICAgIHBsYXllci5wbGF5KCk7XHJcbi8vICAgfSk7XHJcblxyXG5cclxuXHJcbiIsIi8vIFZlbmRvclxyXG5pbXBvcnQgJ2FscGluZWpzJztcclxuXHJcbi8vIFRoZW1lXHJcbmltcG9ydCAnLi9wbHlyJztcclxuaW1wb3J0ICcuL2Fvcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==