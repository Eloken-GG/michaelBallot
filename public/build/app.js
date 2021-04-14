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
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
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
0,[["./assets/app.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-swup_dist_-105072"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9qcy9hb3MuanM/MzE5NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvanMvcGx5ci5qcz83NzRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9qcy90aGVtZS5qcz84NDc5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9teXN3dXBfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvdHlwZWZvcm0tc2VtaW5hcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy90eXBlZm9ybS10c2lfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2pzL2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvanMvcGx5ci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzZiZTYiXSwibmFtZXMiOlsicGxheWVyIiwiUGx5ciIsIndpbmRvdyIsIm9uIiwic2VsZWN0b3IiLCJ0eXBlIiwiY2FsbGJhY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwicGF1c2UiLCJwbGF5IiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiLCJvcHRpb25zIiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbmNlIiwic3RhcnRFdmVudCIsIkFPUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLGlFQUFlO0FBQ2YsNEJBQTRCLDJMQUF3RTtBQUNwRyxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7O0FDRnNDO0FBQ0U7QUFDekMsa0JBQWtCLHVEQUFpQjtBQUNuQyxpQ0FBaUMsc0RBQVEsRTs7Ozs7Ozs7Ozs7Ozs7QUNIekM7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQVEsVTs7Ozs7Ozs7OztBQ1hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJOO0FBQ2tCOztBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hoQix1QkFBdUIsMkJBQTJCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFalU7QUFDQTtBQUNOO0FBQ0o7QUFDUztBQUNoQjtBQUNZO0FBQ0Y7QUFDRDtBQUNBO0FBQ0Q7QUFDVzs7QUFFekQsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7QUFFeEssZ0NBQWdDLDZEQUE2RCx5Q0FBeUMsOENBQThDLGlDQUFpQyxtREFBbUQseURBQXlELEVBQUUsT0FBTyx1Q0FBdUMsRUFBRSxpREFBaUQsR0FBRzs7QUFFdmEsaURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLHNDQUFzQyx3RUFBd0UsMENBQTBDLDhDQUE4QyxNQUFNLDZFQUE2RSxHQUFHLGFBQWEsRUFBRSxZQUFZLGNBQWMsRUFBRTs7QUFFdlUsNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRXJLO0FBQ2Q7O0FBRUo7O0FBRXBCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDLHdDQUF3Qzs7QUFFeEM7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0EscUJBQXFCLDhDQUFJLFlBQVk7O0FBRXJDLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBLFNBQVMsRUFBRTs7QUFFWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLENBQUMsaURBQVU7Ozs7Ozs7Ozs7OztBQ25HWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7Ozs7O0FDbkJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7Q0FJQTs7QUFDQSxJQUFJQSxNQUFNLEdBQUcsSUFBSUMsNkNBQUosQ0FBUyxTQUFULENBQWIsQyxDQUVBOztBQUNBQyxNQUFNLENBQUNGLE1BQVAsR0FBZ0JBLE1BQWhCLEMsQ0FFQTs7QUFDQSxTQUFTRyxFQUFULENBQVlDLFFBQVosRUFBc0JDLElBQXRCLEVBQTRCQyxRQUE1QixFQUFzQztBQUNsQ0MsVUFBUSxDQUFDQyxhQUFULENBQXVCSixRQUF2QixFQUFpQ0ssZ0JBQWpDLENBQWtESixJQUFsRCxFQUF3REMsUUFBeEQsRUFBa0UsS0FBbEU7QUFDSCxDLENBRUQ7OztBQUNBSCxFQUFFLENBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsWUFBTTtBQUMzQkgsUUFBTSxDQUFDVSxLQUFQO0FBQ0gsQ0FGQyxDQUFGLEMsQ0FHQTs7QUFDQVAsRUFBRSxDQUFDLFlBQUQsRUFBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUJILFFBQU0sQ0FBQ1UsS0FBUDtBQUNILENBRkMsQ0FBRixDLENBR0E7O0FBQ0FQLEVBQUUsQ0FBQyxVQUFELEVBQWEsT0FBYixFQUFzQixZQUFNO0FBQzFCSCxRQUFNLENBQUNXLElBQVA7QUFDSCxDQUZDLENBQUYsQzs7Ozs7Ozs7Ozs7Ozs7OztDQ3JDQTs7QUFDTyxJQUFNQyxHQUFHLEdBQUdDLDBFQUFnQixDQUFDQywwSUFBRCxDQUE1QixDOzs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsVUFBUSxFQUFFLEdBREk7QUFFZEMsUUFBTSxFQUFFLGVBRk07QUFHZEMsTUFBSSxFQUFFLElBSFE7QUFJZEMsWUFBVSxFQUFFO0FBSkUsQ0FBaEI7QUFPQUMsK0NBQUEsQ0FBU0wsT0FBVCxFOzs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7Q0FHQTs7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vanMvYW9zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvanMvYW9zLmpzXCIsXG5cdFwiLi9qcy9wbHlyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvanMvcGx5ci5qc1wiLFxuXHRcIi4vanMvdGhlbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9qcy90aGVtZS5qc1wiLFxuXHRcIi4vbXlzd3VwX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9teXN3dXBfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vdHlwZWZvcm0tc2VtaW5hcl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvdHlwZWZvcm0tc2VtaW5hcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi90eXBlZm9ybS10c2lfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3R5cGVmb3JtLXRzaV9jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXN3dXAtLXN3dXAnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtc3d1cC9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwic3RpbXVsdXNcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwic3RpbXVsdXMtY2Fyb3VzZWxcIjtcbnZhciBhcHBsaWNhdGlvbiA9IEFwcGxpY2F0aW9uLnN0YXJ0KCk7XG5hcHBsaWNhdGlvbi5yZWdpc3RlcihcImNhcm91c2VsXCIsIENhcm91c2VsKTsiLCIvL1xuLy8gYW9zLmpzXG4vLyBUaGVtZSBtb2R1bGVcbi8vXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG52YXIgb3B0aW9ucyA9IHtcbiAgZHVyYXRpb246IDcwMCxcbiAgZWFzaW5nOiAnZWFzZS1vdXQtcXVhZCcsXG4gIG9uY2U6IHRydWUsXG4gIHN0YXJ0RXZlbnQ6ICdsb2FkJ1xufTtcbkFPUy5pbml0KG9wdGlvbnMpOyIsIi8vIC8vXG4vLyAvLyBwbHlyLmpzXG4vLyAvLyBUaGVtZSBtb2R1bGVcbi8vIC8vXG4vL1xuLy8gaW1wb3J0IFBseXIgZnJvbSAncGx5cic7XG4vL1xuLy9cbi8vICAgLy8gVGhpcyBpcyB0aGUgYmFyZSBtaW5pbXVtIEphdmFTY3JpcHQuIFlvdSBjYW4gb3B0IHRvIHBhc3Mgbm8gYXJndW1lbnRzIHRvIHNldHVwLlxuLy8gICBjb25zdCBwbGF5ZXIgPSBuZXcgUGx5cignI3BsYXllcicpO1xuLy9cbi8vICAgLy8gRXhwb3NlXG4vLyAgIHdpbmRvdy5wbGF5ZXIgPSBwbGF5ZXI7XG4vL1xuLy8gICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXG4vLyAgIGZ1bmN0aW9uIG9uKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbi8vICAgfVxuLy9cbi8vICAgLy8gUGF1c2Vcbi8vICAgb24oJy5qcy1wYXVzZScsICdjbGljaycsICgpID0+IHtcbi8vICAgICBwbGF5ZXIucGF1c2UoKTtcbi8vICAgfSk7XG4vLyAgIC8vIFBhdXNlIDJcbi8vICAgb24oJy5qcy1wYXVzZTInLCAnY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgcGxheWVyLnBhdXNlKCk7XG4vLyAgIH0pO1xuLy8gICAvLyBQbGF5XG4vLyAgIG9uKCcuanMtcGxheScsICdjbGljaycsICgpID0+IHtcbi8vICAgICBwbGF5ZXIucGxheSgpO1xuLy8gICB9KTsiLCIvLyBWZW5kb3JcbmltcG9ydCAnYWxwaW5lanMnOyAvLyBUaGVtZVxuXG5pbXBvcnQgJy4vcGx5cic7XG5pbXBvcnQgJy4vYW9zJzsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVmbGVjdC5jb25zdHJ1Y3QuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuY3JlYXRlLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuaW1wb3J0IFBseXIgZnJvbSAncGx5cic7IC8vIEltcG9ydCB0aGVtZVxuXG5pbXBvcnQgJy4vanMvdGhlbWUnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIF9pbmhlcml0cyhfZGVmYXVsdCwgX0NvbnRyb2xsZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoX2RlZmF1bHQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzd3VwOmNvbm5lY3QnLCB0aGlzLl9vbkNvbm5lY3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAvLyBZb3Ugc2hvdWxkIGFsd2F5cyByZW1vdmUgbGlzdGVuZXJzIHdoZW4gdGhlIGNvbnRyb2xsZXIgaXMgZGlzY29ubmVjdGVkIHRvIGF2b2lkIHNpZGUtZWZmZWN0c1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29ubmVjdCcsIHRoaXMuX29uQ29ubmVjdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9vbkNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uQ29ubmVjdChldmVudCkge1xuICAgICAgLy8gU3d1cCBoYXMganVzdCBiZWVuIGludGlhbGl6ZWQgYW5kIHlvdSBjYW4gYWNjZXNzIGRldGFpbHMgZnJvbSB0aGUgZXZlbnRcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC5zd3VwKTsgLy8gU3d1cCBpbnN0YW5jZVxuXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwub3B0aW9ucyk7IC8vIE9wdGlvbnMgdXNlZCB0byBpbml0aWFsaXplIFN3dXBcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3d1cDpjb250ZW50UmVwbGFjZWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApOyAvLyBUaGlzIGlzIHRoZSBiYXJlIG1pbmltdW0gSmF2YVNjcmlwdC4gWW91IGNhbiBvcHQgdG8gcGFzcyBubyBhcmd1bWVudHMgdG8gc2V0dXAuXG5cbiAgICAgICAgdmFyIHBsYXllcjtcbiAgICAgICAgcGxheWVyID0gbmV3IFBseXIoJyNwbGF5ZXInKTsgLy8gRXhwb3NlXG5cbiAgICAgICAgd2luZG93LnBsYXllciA9IHBsYXllcjsgLy8gQmluZCBldmVudCBsaXN0ZW5lclxuXG4gICAgICAgIGZ1bmN0aW9uIG9uKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfSAvLyBQYXVzZVxuXG5cbiAgICAgICAgb24oJy5qcy1wYXVzZScsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgfSk7IC8vIFBhdXNlIDJcblxuICAgICAgICBvbignLmpzLXBhdXNlMicsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgfSk7IC8vIFBsYXlcblxuICAgICAgICBvbignLmpzLXBsYXknLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KENvbnRyb2xsZXIpO1xuXG5leHBvcnQgeyBfZGVmYXVsdCBhcyBkZWZhdWx0IH07IiwiKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHFzLFxuICAgICAganMsXG4gICAgICBxLFxuICAgICAgcyxcbiAgICAgIGQgPSBkb2N1bWVudCxcbiAgICAgIGdpID0gZC5nZXRFbGVtZW50QnlJZCxcbiAgICAgIGNlID0gZC5jcmVhdGVFbGVtZW50LFxuICAgICAgZ3QgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lLFxuICAgICAgaWQgPSBcInR5cGVmX29ybV9zaGFyZVwiLFxuICAgICAgYiA9IFwiaHR0cHM6Ly9lbWJlZC50eXBlZm9ybS5jb20vXCI7XG5cbiAgaWYgKCFnaS5jYWxsKGQsIGlkKSkge1xuICAgIGpzID0gY2UuY2FsbChkLCBcInNjcmlwdFwiKTtcbiAgICBqcy5pZCA9IGlkO1xuICAgIGpzLnNyYyA9IGIgKyBcImVtYmVkLmpzXCI7XG4gICAgcSA9IGd0LmNhbGwoZCwgXCJzY3JpcHRcIilbMF07XG4gICAgcS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgcSk7XG4gIH1cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHFzLFxuICAgICAganMsXG4gICAgICBxLFxuICAgICAgcyxcbiAgICAgIGQgPSBkb2N1bWVudCxcbiAgICAgIGdpID0gZC5nZXRFbGVtZW50QnlJZCxcbiAgICAgIGNlID0gZC5jcmVhdGVFbGVtZW50LFxuICAgICAgZ3QgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lLFxuICAgICAgaWQgPSBcInR5cGVmX29ybV9zaGFyZVwiLFxuICAgICAgYiA9IFwiaHR0cHM6Ly9lbWJlZC50eXBlZm9ybS5jb20vXCI7XG5cbiAgaWYgKCFnaS5jYWxsKGQsIGlkKSkge1xuICAgIGpzID0gY2UuY2FsbChkLCBcInNjcmlwdFwiKTtcbiAgICBqcy5pZCA9IGlkO1xuICAgIGpzLnNyYyA9IGIgKyBcImVtYmVkLmpzXCI7XG4gICAgcSA9IGd0LmNhbGwoZCwgXCJzY3JpcHRcIilbMF07XG4gICAgcS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgcSk7XG4gIH1cbn0pKCk7IiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3MnXHJcblxyXG4vLyBJbXBvcnQgdGhlbWVcclxuaW1wb3J0ICcuL2NvbnRyb2xsZXJzL2pzL3RoZW1lJ1xyXG5cclxuLy8gU3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IFBseXIgZnJvbSBcInBseXJcIjtcclxuXHJcbi8vIFRoaXMgaXMgdGhlIGJhcmUgbWluaW11bSBKYXZhU2NyaXB0LiBZb3UgY2FuIG9wdCB0byBwYXNzIG5vIGFyZ3VtZW50cyB0byBzZXR1cC5cclxubGV0IHBsYXllciA9IG5ldyBQbHlyKCcjcGxheWVyJyk7XHJcblxyXG4vLyBFeHBvc2Vcclxud2luZG93LnBsYXllciA9IHBsYXllcjtcclxuXHJcbi8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuZnVuY3Rpb24gb24oc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbn1cclxuXHJcbi8vIFBhdXNlXHJcbm9uKCcuanMtcGF1c2UnLCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIucGF1c2UoKTtcclxufSk7XHJcbi8vIFBhdXNlIDJcclxub24oJy5qcy1wYXVzZTInLCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIucGF1c2UoKTtcclxufSk7XHJcbi8vIFBsYXlcclxub24oJy5qcy1wbGF5JywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGxheWVyLnBsYXkoKTtcclxufSk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLihqfHQpc3g/JC9cclxuKSk7XHJcbiIsIi8vXHJcbi8vIGFvcy5qc1xyXG4vLyBUaGVtZSBtb2R1bGVcclxuLy9cclxuXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgZHVyYXRpb246IDcwMCxcclxuICBlYXNpbmc6ICdlYXNlLW91dC1xdWFkJyxcclxuICBvbmNlOiB0cnVlLFxyXG4gIHN0YXJ0RXZlbnQ6ICdsb2FkJ1xyXG59O1xyXG5cclxuQU9TLmluaXQob3B0aW9ucyk7XHJcbiIsIi8vIC8vXHJcbi8vIC8vIHBseXIuanNcclxuLy8gLy8gVGhlbWUgbW9kdWxlXHJcbi8vIC8vXHJcbi8vXHJcbi8vIGltcG9ydCBQbHlyIGZyb20gJ3BseXInO1xyXG4vL1xyXG4vL1xyXG4vLyAgIC8vIFRoaXMgaXMgdGhlIGJhcmUgbWluaW11bSBKYXZhU2NyaXB0LiBZb3UgY2FuIG9wdCB0byBwYXNzIG5vIGFyZ3VtZW50cyB0byBzZXR1cC5cclxuLy8gICBjb25zdCBwbGF5ZXIgPSBuZXcgUGx5cignI3BsYXllcicpO1xyXG4vL1xyXG4vLyAgIC8vIEV4cG9zZVxyXG4vLyAgIHdpbmRvdy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbi8vXHJcbi8vICAgLy8gQmluZCBldmVudCBsaXN0ZW5lclxyXG4vLyAgIGZ1bmN0aW9uIG9uKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xyXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG4vLyAgIH1cclxuLy9cclxuLy8gICAvLyBQYXVzZVxyXG4vLyAgIG9uKCcuanMtcGF1c2UnLCAnY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgICBwbGF5ZXIucGF1c2UoKTtcclxuLy8gICB9KTtcclxuLy8gICAvLyBQYXVzZSAyXHJcbi8vICAgb24oJy5qcy1wYXVzZTInLCAnY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgICBwbGF5ZXIucGF1c2UoKTtcclxuLy8gICB9KTtcclxuLy8gICAvLyBQbGF5XHJcbi8vICAgb24oJy5qcy1wbGF5JywgJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgcGxheWVyLnBsYXkoKTtcclxuLy8gICB9KTtcclxuXHJcblxyXG5cclxuIiwiLy8gVmVuZG9yXHJcbmltcG9ydCAnYWxwaW5lanMnO1xyXG5cclxuLy8gVGhlbWVcclxuaW1wb3J0ICcuL3BseXInO1xyXG5pbXBvcnQgJy4vYW9zJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9