(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
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

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
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
      document.addEventListener('swup:contentReplaced', function (event) {
        window.scrollTo(0, 0); // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.

        var player = new (plyr__WEBPACK_IMPORTED_MODULE_13___default())('#player');
        console.log('DOM fully loaded and parsed'); // Expose

        window.player = player; // Bind event listener

        function on(selector, type, callback) {
          document.querySelector(selector).addEventListener(type, callback, false);
          console.log('1');
        } // Pause


        on('.js-pause', 'click', function () {
          player.pause();
          console.log('2');
        }); // Pause 2

        on('.js-pause2', 'click', function () {
          player.pause();
          console.log('3');
        }); // Play

        on('.js-play', 'click', function () {
          player.play();
          console.log('4');
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
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // import Alpinejs

 // import Plyr


document.addEventListener('DOMContentLoaded', function () {
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  var player = new (plyr__WEBPACK_IMPORTED_MODULE_2___default())('#player');
  console.log('DOM fully loaded and parsed'); // Expose

  window.player = player; // Bind event listener

  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
    console.log('1');
  } // Pause


  on('.js-pause', 'click', function () {
    player.pause();
    console.log('2');
  }); // Pause 2

  on('.js-pause2', 'click', function () {
    player.pause();
    console.log('3');
  }); // Play

  on('.js-play', 'click', function () {
    player.play();
    console.log('4');
  });
}); // Import Flickity


var flky = new (flickity__WEBPACK_IMPORTED_MODULE_3___default())('.gallery', {
  // options, defaults listed
  accessibility: true,
  // enable keyboard navigation, pressing left & right keys
  adaptiveHeight: false,
  // set carousel height to the selected slide
  autoPlay: false,
  // advances to the next cell
  // if true, default is 3 seconds
  // or set time between advances in milliseconds
  // i.e. `autoPlay: 1000` will advance every 1 second
  cellAlign: 'center',
  // alignment of cells, 'center', 'left', or 'right'
  // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)
  cellSelector: undefined,
  // specify selector for cell elements
  contain: false,
  // will contain cells to container
  // so no excess scroll at beginning or end
  // has no effect if wrapAround is enabled
  draggable: '>1',
  // enables dragging & flicking
  // if at least 2 cells
  dragThreshold: 3,
  // number of pixels a user must scroll horizontally to start dragging
  // increase to allow more room for vertical scroll for touch devices
  freeScroll: false,
  // enables content to be freely scrolled and flicked
  // without aligning cells
  friction: 0.2,
  // smaller number = easier to flick farther
  groupCells: false,
  // group cells together in slides
  initialIndex: 0,
  // zero-based index of the initial selected cell
  lazyLoad: true,
  // enable lazy-loading images
  // set img data-flickity-lazyload="src.jpg"
  // set to number to load images adjacent cells
  percentPosition: true,
  // sets positioning in percent values, rather than pixels
  // Enable if items have percent widths
  // Disable if items have pixel widths, like images
  prevNextButtons: true,
  // creates and enables buttons to click to previous & next cells
  pageDots: true,
  // create and enable page dots
  resize: true,
  // listens to window resize events to adjust size & positions
  rightToLeft: false,
  // enables right-to-left layout
  setGallerySize: true,
  // sets the height of gallery
  // disable if gallery already has height set with CSS
  watchCSS: false,
  // watches the content of :after of the element
  // activates if #element:after { content: 'flickity' }
  wrapAround: false // at end of cells, wraps-around to first for infinite scrolling

}); // Start the Stimulus application



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
0,[["./assets/app.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-swup_dist_-4fa397"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NmJlNiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5ZXIiLCJQbHlyIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIm9uIiwic2VsZWN0b3IiLCJ0eXBlIiwiY2FsbGJhY2siLCJxdWVyeVNlbGVjdG9yIiwicGF1c2UiLCJwbGF5IiwiZmxreSIsIkZsaWNraXR5IiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwiYXV0b1BsYXkiLCJjZWxsQWxpZ24iLCJjZWxsU2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJjb250YWluIiwiZHJhZ2dhYmxlIiwiZHJhZ1RocmVzaG9sZCIsImZyZWVTY3JvbGwiLCJmcmljdGlvbiIsImdyb3VwQ2VsbHMiLCJpbml0aWFsSW5kZXgiLCJsYXp5TG9hZCIsInBlcmNlbnRQb3NpdGlvbiIsInByZXZOZXh0QnV0dG9ucyIsInBhZ2VEb3RzIiwicmVzaXplIiwicmlnaHRUb0xlZnQiLCJzZXRHYWxsZXJ5U2l6ZSIsIndhdGNoQ1NTIiwid3JhcEFyb3VuZCIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsaUVBQWU7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QztBQUNBO0FBQ0FDLFlBQVUsRUFBRSxLQXpEdUIsQ0EwRG5DOztBQTFEbUMsQ0FBMUIsQ0FBYixDLENBNkRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NoSEE7O0FBQ08sSUFBTUMsR0FBRyxHQUFHQywwRUFBZ0IsQ0FBQ0MsMElBQUQsQ0FBNUIsQzs7Ozs7Ozs7Ozs7O0FDSFAiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXN3dXAtLXN3dXAnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtc3d1cC9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbn07IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnJlZmxlY3QuY29uc3RydWN0LmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmNyZWF0ZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCBQbHlyIGZyb20gXCJwbHlyXCI7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29udHJvbGxlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihfZGVmYXVsdCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9kZWZhdWx0KTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29ubmVjdCcsIHRoaXMuX29uQ29ubmVjdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpc2Nvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgIC8vIFlvdSBzaG91bGQgYWx3YXlzIHJlbW92ZSBsaXN0ZW5lcnMgd2hlbiB0aGUgY29udHJvbGxlciBpcyBkaXNjb25uZWN0ZWQgdG8gYXZvaWQgc2lkZS1lZmZlY3RzXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3d1cDpjb25uZWN0JywgdGhpcy5fb25Db25uZWN0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX29uQ29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Db25uZWN0KGV2ZW50KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzd3VwOmNvbnRlbnRSZXBsYWNlZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IC8vIFRoaXMgaXMgdGhlIGJhcmUgbWluaW11bSBKYXZhU2NyaXB0LiBZb3UgY2FuIG9wdCB0byBwYXNzIG5vIGFyZ3VtZW50cyB0byBzZXR1cC5cblxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBseXIoJyNwbGF5ZXInKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0RPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZCcpOyAvLyBFeHBvc2VcblxuICAgICAgICB3aW5kb3cucGxheWVyID0gcGxheWVyOyAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXG5cbiAgICAgICAgZnVuY3Rpb24gb24oc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCcxJyk7XG4gICAgICAgIH0gLy8gUGF1c2VcblxuXG4gICAgICAgIG9uKCcuanMtcGF1c2UnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJzInKTtcbiAgICAgICAgfSk7IC8vIFBhdXNlIDJcblxuICAgICAgICBvbignLmpzLXBhdXNlMicsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnMycpO1xuICAgICAgICB9KTsgLy8gUGxheVxuXG4gICAgICAgIG9uKCcuanMtcGxheScsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCc0Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShDb250cm9sbGVyKTtcblxuZXhwb3J0IHsgX2RlZmF1bHQgYXMgZGVmYXVsdCB9OyIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuXHJcbi8vIGltcG9ydCBBbHBpbmVqc1xyXG5pbXBvcnQgJ2FscGluZWpzJztcclxuXHJcbi8vIGltcG9ydCBQbHlyXHJcbmltcG9ydCBQbHlyIGZyb20gJ3BseXInO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIC8vIFRoaXMgaXMgdGhlIGJhcmUgbWluaW11bSBKYXZhU2NyaXB0LiBZb3UgY2FuIG9wdCB0byBwYXNzIG5vIGFyZ3VtZW50cyB0byBzZXR1cC5cclxuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbHlyKCcjcGxheWVyJyk7XHJcbiAgICBjb25zb2xlLmxvZygnRE9NIGZ1bGx5IGxvYWRlZCBhbmQgcGFyc2VkJyk7XHJcblxyXG4gICAgLy8gRXhwb3NlXHJcbiAgICB3aW5kb3cucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIG9uKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnMScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhdXNlXHJcbiAgICBvbignLmpzLXBhdXNlJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcyJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQYXVzZSAyXHJcbiAgICBvbignLmpzLXBhdXNlMicsICdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnMycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUGxheVxyXG4gICAgb24oJy5qcy1wbGF5JywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzQnKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyBJbXBvcnQgRmxpY2tpdHlcclxuaW1wb3J0IEZsaWNraXR5IGZyb20gJ2ZsaWNraXR5JztcclxuXHJcbmNvbnN0IGZsa3kgPSBuZXcgRmxpY2tpdHkoICcuZ2FsbGVyeScsIHtcclxuICAgIC8vIG9wdGlvbnMsIGRlZmF1bHRzIGxpc3RlZFxyXG4gICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcclxuICAgIC8vIGVuYWJsZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBwcmVzc2luZyBsZWZ0ICYgcmlnaHQga2V5c1xyXG4gICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxyXG4gICAgLy8gc2V0IGNhcm91c2VsIGhlaWdodCB0byB0aGUgc2VsZWN0ZWQgc2xpZGVcclxuICAgIGF1dG9QbGF5OiBmYWxzZSxcclxuICAgIC8vIGFkdmFuY2VzIHRvIHRoZSBuZXh0IGNlbGxcclxuICAgIC8vIGlmIHRydWUsIGRlZmF1bHQgaXMgMyBzZWNvbmRzXHJcbiAgICAvLyBvciBzZXQgdGltZSBiZXR3ZWVuIGFkdmFuY2VzIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgLy8gaS5lLiBgYXV0b1BsYXk6IDEwMDBgIHdpbGwgYWR2YW5jZSBldmVyeSAxIHNlY29uZFxyXG4gICAgY2VsbEFsaWduOiAnY2VudGVyJyxcclxuICAgIC8vIGFsaWdubWVudCBvZiBjZWxscywgJ2NlbnRlcicsICdsZWZ0Jywgb3IgJ3JpZ2h0J1xyXG4gICAgLy8gb3IgYSBkZWNpbWFsIDAtMSwgMCBpcyBiZWdpbm5pbmcgKGxlZnQpIG9mIGNvbnRhaW5lciwgMSBpcyBlbmQgKHJpZ2h0KVxyXG4gICAgY2VsbFNlbGVjdG9yOiB1bmRlZmluZWQsXHJcbiAgICAvLyBzcGVjaWZ5IHNlbGVjdG9yIGZvciBjZWxsIGVsZW1lbnRzXHJcbiAgICBjb250YWluOiBmYWxzZSxcclxuICAgIC8vIHdpbGwgY29udGFpbiBjZWxscyB0byBjb250YWluZXJcclxuICAgIC8vIHNvIG5vIGV4Y2VzcyBzY3JvbGwgYXQgYmVnaW5uaW5nIG9yIGVuZFxyXG4gICAgLy8gaGFzIG5vIGVmZmVjdCBpZiB3cmFwQXJvdW5kIGlzIGVuYWJsZWRcclxuICAgIGRyYWdnYWJsZTogJz4xJyxcclxuICAgIC8vIGVuYWJsZXMgZHJhZ2dpbmcgJiBmbGlja2luZ1xyXG4gICAgLy8gaWYgYXQgbGVhc3QgMiBjZWxsc1xyXG4gICAgZHJhZ1RocmVzaG9sZDogMyxcclxuICAgIC8vIG51bWJlciBvZiBwaXhlbHMgYSB1c2VyIG11c3Qgc2Nyb2xsIGhvcml6b250YWxseSB0byBzdGFydCBkcmFnZ2luZ1xyXG4gICAgLy8gaW5jcmVhc2UgdG8gYWxsb3cgbW9yZSByb29tIGZvciB2ZXJ0aWNhbCBzY3JvbGwgZm9yIHRvdWNoIGRldmljZXNcclxuICAgIGZyZWVTY3JvbGw6IGZhbHNlLFxyXG4gICAgLy8gZW5hYmxlcyBjb250ZW50IHRvIGJlIGZyZWVseSBzY3JvbGxlZCBhbmQgZmxpY2tlZFxyXG4gICAgLy8gd2l0aG91dCBhbGlnbmluZyBjZWxsc1xyXG4gICAgZnJpY3Rpb246IDAuMixcclxuICAgIC8vIHNtYWxsZXIgbnVtYmVyID0gZWFzaWVyIHRvIGZsaWNrIGZhcnRoZXJcclxuICAgIGdyb3VwQ2VsbHM6IGZhbHNlLFxyXG4gICAgLy8gZ3JvdXAgY2VsbHMgdG9nZXRoZXIgaW4gc2xpZGVzXHJcbiAgICBpbml0aWFsSW5kZXg6IDAsXHJcbiAgICAvLyB6ZXJvLWJhc2VkIGluZGV4IG9mIHRoZSBpbml0aWFsIHNlbGVjdGVkIGNlbGxcclxuICAgIGxhenlMb2FkOiB0cnVlLFxyXG4gICAgLy8gZW5hYmxlIGxhenktbG9hZGluZyBpbWFnZXNcclxuICAgIC8vIHNldCBpbWcgZGF0YS1mbGlja2l0eS1sYXp5bG9hZD1cInNyYy5qcGdcIlxyXG4gICAgLy8gc2V0IHRvIG51bWJlciB0byBsb2FkIGltYWdlcyBhZGphY2VudCBjZWxsc1xyXG4gICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxyXG4gICAgLy8gc2V0cyBwb3NpdGlvbmluZyBpbiBwZXJjZW50IHZhbHVlcywgcmF0aGVyIHRoYW4gcGl4ZWxzXHJcbiAgICAvLyBFbmFibGUgaWYgaXRlbXMgaGF2ZSBwZXJjZW50IHdpZHRoc1xyXG4gICAgLy8gRGlzYWJsZSBpZiBpdGVtcyBoYXZlIHBpeGVsIHdpZHRocywgbGlrZSBpbWFnZXNcclxuICAgIHByZXZOZXh0QnV0dG9uczogdHJ1ZSxcclxuICAgIC8vIGNyZWF0ZXMgYW5kIGVuYWJsZXMgYnV0dG9ucyB0byBjbGljayB0byBwcmV2aW91cyAmIG5leHQgY2VsbHNcclxuICAgIHBhZ2VEb3RzOiB0cnVlLFxyXG4gICAgLy8gY3JlYXRlIGFuZCBlbmFibGUgcGFnZSBkb3RzXHJcbiAgICByZXNpemU6IHRydWUsXHJcbiAgICAvLyBsaXN0ZW5zIHRvIHdpbmRvdyByZXNpemUgZXZlbnRzIHRvIGFkanVzdCBzaXplICYgcG9zaXRpb25zXHJcbiAgICByaWdodFRvTGVmdDogZmFsc2UsXHJcbiAgICAvLyBlbmFibGVzIHJpZ2h0LXRvLWxlZnQgbGF5b3V0XHJcbiAgICBzZXRHYWxsZXJ5U2l6ZTogdHJ1ZSxcclxuICAgIC8vIHNldHMgdGhlIGhlaWdodCBvZiBnYWxsZXJ5XHJcbiAgICAvLyBkaXNhYmxlIGlmIGdhbGxlcnkgYWxyZWFkeSBoYXMgaGVpZ2h0IHNldCB3aXRoIENTU1xyXG4gICAgd2F0Y2hDU1M6IGZhbHNlLFxyXG4gICAgLy8gd2F0Y2hlcyB0aGUgY29udGVudCBvZiA6YWZ0ZXIgb2YgdGhlIGVsZW1lbnRcclxuICAgIC8vIGFjdGl2YXRlcyBpZiAjZWxlbWVudDphZnRlciB7IGNvbnRlbnQ6ICdmbGlja2l0eScgfVxyXG4gICAgd3JhcEFyb3VuZDogZmFsc2VcclxuICAgIC8vIGF0IGVuZCBvZiBjZWxscywgd3JhcHMtYXJvdW5kIHRvIGZpcnN0IGZvciBpbmZpbml0ZSBzY3JvbGxpbmdcclxufSk7XHJcblxyXG4vLyBTdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuKGp8dClzeD8kL1xyXG4pKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==