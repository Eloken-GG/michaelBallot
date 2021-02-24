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
  'symfony--ux-swup--swup': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-swup/dist/controller.js */ "./vendor/symfony/ux-swup/Resources/assets/dist/controller.js")),
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
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

        var player = new (plyr__WEBPACK_IMPORTED_MODULE_3___default())('#player');
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
        AOS.init();
      }); // You can also pass an optional settings object
      // below listed default settings

      AOS.init({
        offset: 120,
        // offset (in px) from the original trigger point
        delay: 0,
        // values from 0 to 3000, with step 50ms
        easing: 'ease',
        // default easing for AOS animations
        duration: 400,
        // values from 0 to 3000, with step 50ms
        disable: false,
        // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        once: false,
        // whether animation should happen only once - while scrolling down
        mirror: false,
        // whether elements should animate out while scrolling past them
        startEvent: 'DOMContentLoaded',
        // name of the event dispatched on the document, that AOS should initialize on
        animatedClassName: 'aos-animate',
        // class applied on animation
        initClassName: 'aos-init',
        // class applied after initialization
        useClassNames: false // if true, will add content of data-aos as classes on scroll

      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller);



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
  AOS.init();
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

/***/ "./vendor/symfony/ux-swup/Resources/assets/dist/controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-swup/Resources/assets/dist/controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _stimulus = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");

var _swup = _interopRequireDefault(__webpack_require__(/*! swup */ "./node_modules/swup/lib/index.js"));

var _debugPlugin = _interopRequireDefault(__webpack_require__(/*! @swup/debug-plugin */ "./node_modules/@swup/debug-plugin/lib/index.js"));

var _formsPlugin = _interopRequireDefault(__webpack_require__(/*! @swup/forms-plugin */ "./node_modules/@swup/forms-plugin/lib/index.js"));

var _fadeTheme = _interopRequireDefault(__webpack_require__(/*! @swup/fade-theme */ "./node_modules/@swup/fade-theme/lib/index.js"));

var _slideTheme = _interopRequireDefault(__webpack_require__(/*! @swup/slide-theme */ "./node_modules/@swup/slide-theme/lib/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

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
      var options = {
        containers: ['#swup'],
        cache: this.element.hasAttribute('data-cache'),
        animateHistoryBrowsing: this.element.hasAttribute('data-animate-history-browsing'),
        plugins: ['slide' === this.element.getAttribute('data-theme') ? new _slideTheme["default"]() : new _fadeTheme["default"](), new _formsPlugin["default"]()]
      };

      if (this.element.getAttribute('data-containers')) {
        options.containers = this.element.getAttribute('data-containers').split(' ');
      }

      if (this.element.getAttribute('data-link-selector')) {
        options.linkSelector = this.element.getAttribute('data-link-selector');
      }

      if (this.element.getAttribute('data-animation-selector')) {
        options.animationSelector = this.element.getAttribute('data-animation-selector');
      }

      if (this.element.hasAttribute('data-debug')) {
        options.plugins.push(new _debugPlugin["default"]());
      }

      var swup = new _swup["default"](options);

      this._dispatchEvent('swup:connect', {
        swup: swup,
        options: options
      });
    }
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(name) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var userEvent = document.createEvent('CustomEvent');
      userEvent.initCustomEvent(name, canBubble, cancelable, payload);
      this.element.dispatchEvent(userEvent);
    }
  }]);

  return _default;
}(_stimulus.Controller);

exports.default = _default;

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
0,[["./assets/app.js","runtime","vendors-node_modules_swup_debug-plugin_lib_index_js-node_modules_swup_fade-theme_lib_index_js-e94465"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1zd3VwL1Jlc291cmNlcy9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz82YmU2Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllciIsIlBseXIiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib24iLCJzZWxlY3RvciIsInR5cGUiLCJjYWxsYmFjayIsInF1ZXJ5U2VsZWN0b3IiLCJwYXVzZSIsInBsYXkiLCJBT1MiLCJpbml0IiwiZmxreSIsIkZsaWNraXR5IiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwiYXV0b1BsYXkiLCJjZWxsQWxpZ24iLCJjZWxsU2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJjb250YWluIiwiZHJhZ2dhYmxlIiwiZHJhZ1RocmVzaG9sZCIsImZyZWVTY3JvbGwiLCJmcmljdGlvbiIsImdyb3VwQ2VsbHMiLCJpbml0aWFsSW5kZXgiLCJsYXp5TG9hZCIsInBlcmNlbnRQb3NpdGlvbiIsInByZXZOZXh0QnV0dG9ucyIsInBhZ2VEb3RzIiwicmVzaXplIiwicmlnaHRUb0xlZnQiLCJzZXRHYWxsZXJ5U2l6ZSIsIndhdGNoQ1NTIiwid3JhcEFyb3VuZCIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIiwiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJ2YWx1ZSIsImV4cG9ydHMiLCJfc3RpbXVsdXMiLCJfc3d1cCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZGVidWdQbHVnaW4iLCJfZm9ybXNQbHVnaW4iLCJfZmFkZVRoZW1lIiwiX3NsaWRlVGhlbWUiLCJfX2VzTW9kdWxlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9jcmVhdGVTdXBlciIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9jcmVhdGVTdXBlckludGVybmFsIiwiU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJyZXN1bHQiLCJOZXdUYXJnZXQiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJjYWxsIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwic2hhbSIsIlByb3h5IiwiRGF0ZSIsInRvU3RyaW5nIiwiZSIsImdldFByb3RvdHlwZU9mIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9zdXBlciIsImNvbm5lY3QiLCJvcHRpb25zIiwiY29udGFpbmVycyIsImNhY2hlIiwiZWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsImFuaW1hdGVIaXN0b3J5QnJvd3NpbmciLCJwbHVnaW5zIiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJsaW5rU2VsZWN0b3IiLCJhbmltYXRpb25TZWxlY3RvciIsInB1c2giLCJzd3VwIiwiX2Rpc3BhdGNoRXZlbnQiLCJuYW1lIiwicGF5bG9hZCIsImNhbkJ1YmJsZSIsImNhbmNlbGFibGUiLCJ1c2VyRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsaUVBQWU7QUFDZiw0QkFBNEIscU1BQXdFO0FBQ3BHLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZELHVCQUF1QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUVqVTtBQUNBOztBQUV2RCxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTiwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOztBQUV4SyxnQ0FBZ0MsNkRBQTZELHlDQUF5Qyw4Q0FBOEMsaUNBQWlDLG1EQUFtRCx5REFBeUQsRUFBRSxPQUFPLHVDQUF1QyxFQUFFLGlEQUFpRCxHQUFHOztBQUV2YSxpREFBaUQsMEVBQTBF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U0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsSUFBbEY7QUFDQSxVQUFJaUMsU0FBUyxHQUFHakMsU0FBUyxDQUFDOUIsTUFBVixHQUFtQixDQUFuQixJQUF3QjhCLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUIzRSxTQUF6QyxHQUFxRDJFLFNBQVMsQ0FBQyxDQUFELENBQTlELEdBQW9FLEtBQXBGO0FBQ0EsVUFBSWtDLFVBQVUsR0FBR2xDLFNBQVMsQ0FBQzlCLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0I4QixTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCM0UsU0FBekMsR0FBcUQyRSxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxLQUFyRjtBQUNBLFVBQUltQyxTQUFTLEdBQUdySSxRQUFRLENBQUNzSSxXQUFULENBQXFCLGFBQXJCLENBQWhCO0FBQ0FELGVBQVMsQ0FBQ0UsZUFBVixDQUEwQk4sSUFBMUIsRUFBZ0NFLFNBQWhDLEVBQTJDQyxVQUEzQyxFQUF1REYsT0FBdkQ7QUFDQSxXQUFLWixPQUFMLENBQWFrQixhQUFiLENBQTJCSCxTQUEzQjtBQUNEO0FBVEEsR0FqQ29CLENBQVgsQ0FBWjs7QUE2Q0EsU0FBT3RCLFFBQVA7QUFDRCxDQXpEMkIsQ0F5RDFCM0QsU0FBUyxDQUFDcUYsVUF6RGdCLENBQTVCOztBQTJEQXRGLGVBQUEsR0FBcUI0RCxRQUFyQixDOzs7Ozs7Ozs7Ozs7QUM5R0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXN3dXAtLXN3dXAnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtc3d1cC9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbn07IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1wiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuaW1wb3J0IFBseXIgZnJvbSBcInBseXJcIjtcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db250cm9sbGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3d1cDpjb25uZWN0JywgdGhpcy5fb25Db25uZWN0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgLy8gWW91IHNob3VsZCBhbHdheXMgcmVtb3ZlIGxpc3RlbmVycyB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGRpc2Nvbm5lY3RlZCB0byBhdm9pZCBzaWRlLWVmZmVjdHNcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzd3VwOmNvbm5lY3QnLCB0aGlzLl9vbkNvbm5lY3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfb25Db25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkNvbm5lY3QoZXZlbnQpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29udGVudFJlcGxhY2VkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgLy8gVGhpcyBpcyB0aGUgYmFyZSBtaW5pbXVtIEphdmFTY3JpcHQuIFlvdSBjYW4gb3B0IHRvIHBhc3Mgbm8gYXJndW1lbnRzIHRvIHNldHVwLlxuXG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGx5cignI3BsYXllcicpO1xuICAgICAgICBjb25zb2xlLmxvZygnRE9NIGZ1bGx5IGxvYWRlZCBhbmQgcGFyc2VkJyk7IC8vIEV4cG9zZVxuXG4gICAgICAgIHdpbmRvdy5wbGF5ZXIgPSBwbGF5ZXI7IC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcblxuICAgICAgICBmdW5jdGlvbiBvbihzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJzEnKTtcbiAgICAgICAgfSAvLyBQYXVzZVxuXG5cbiAgICAgICAgb24oJy5qcy1wYXVzZScsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnMicpO1xuICAgICAgICB9KTsgLy8gUGF1c2UgMlxuXG4gICAgICAgIG9uKCcuanMtcGF1c2UyJywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCczJyk7XG4gICAgICAgIH0pOyAvLyBQbGF5XG5cbiAgICAgICAgb24oJy5qcy1wbGF5JywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJzQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEFPUy5pbml0KCk7XG4gICAgICB9KTsgLy8gWW91IGNhbiBhbHNvIHBhc3MgYW4gb3B0aW9uYWwgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICAvLyBiZWxvdyBsaXN0ZWQgZGVmYXVsdCBzZXR0aW5nc1xuXG4gICAgICBBT1MuaW5pdCh7XG4gICAgICAgIG9mZnNldDogMTIwLFxuICAgICAgICAvLyBvZmZzZXQgKGluIHB4KSBmcm9tIHRoZSBvcmlnaW5hbCB0cmlnZ2VyIHBvaW50XG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gICAgICAgIGVhc2luZzogJ2Vhc2UnLFxuICAgICAgICAvLyBkZWZhdWx0IGVhc2luZyBmb3IgQU9TIGFuaW1hdGlvbnNcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xuICAgICAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICAgICAgLy8gYWNjZXB0cyBmb2xsb3dpbmcgdmFsdWVzOiAncGhvbmUnLCAndGFibGV0JywgJ21vYmlsZScsIGJvb2xlYW4sIGV4cHJlc3Npb24gb3IgZnVuY3Rpb25cbiAgICAgICAgb25jZTogZmFsc2UsXG4gICAgICAgIC8vIHdoZXRoZXIgYW5pbWF0aW9uIHNob3VsZCBoYXBwZW4gb25seSBvbmNlIC0gd2hpbGUgc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgICAgLy8gd2hldGhlciBlbGVtZW50cyBzaG91bGQgYW5pbWF0ZSBvdXQgd2hpbGUgc2Nyb2xsaW5nIHBhc3QgdGhlbVxuICAgICAgICBzdGFydEV2ZW50OiAnRE9NQ29udGVudExvYWRlZCcsXG4gICAgICAgIC8vIG5hbWUgb2YgdGhlIGV2ZW50IGRpc3BhdGNoZWQgb24gdGhlIGRvY3VtZW50LCB0aGF0IEFPUyBzaG91bGQgaW5pdGlhbGl6ZSBvblxuICAgICAgICBhbmltYXRlZENsYXNzTmFtZTogJ2Fvcy1hbmltYXRlJyxcbiAgICAgICAgLy8gY2xhc3MgYXBwbGllZCBvbiBhbmltYXRpb25cbiAgICAgICAgaW5pdENsYXNzTmFtZTogJ2Fvcy1pbml0JyxcbiAgICAgICAgLy8gY2xhc3MgYXBwbGllZCBhZnRlciBpbml0aWFsaXphdGlvblxuICAgICAgICB1c2VDbGFzc05hbWVzOiBmYWxzZSAvLyBpZiB0cnVlLCB3aWxsIGFkZCBjb250ZW50IG9mIGRhdGEtYW9zIGFzIGNsYXNzZXMgb24gc2Nyb2xsXG5cbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBpbXBvcnQgQWxwaW5lanNcclxuaW1wb3J0ICdhbHBpbmVqcyc7XHJcblxyXG4vLyBpbXBvcnQgUGx5clxyXG5pbXBvcnQgUGx5ciBmcm9tICdwbHlyJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAvLyBUaGlzIGlzIHRoZSBiYXJlIG1pbmltdW0gSmF2YVNjcmlwdC4gWW91IGNhbiBvcHQgdG8gcGFzcyBubyBhcmd1bWVudHMgdG8gc2V0dXAuXHJcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGx5cignI3BsYXllcicpO1xyXG4gICAgY29uc29sZS5sb2coJ0RPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZCcpO1xyXG5cclxuICAgIC8vIEV4cG9zZVxyXG4gICAgd2luZG93LnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBvbihzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXVzZVxyXG4gICAgb24oJy5qcy1wYXVzZScsICdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnMicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUGF1c2UgMlxyXG4gICAgb24oJy5qcy1wYXVzZTInLCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzMnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFBsYXlcclxuICAgIG9uKCcuanMtcGxheScsICdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwbGF5ZXIucGxheSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBT1MuaW5pdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLy8gSW1wb3J0IEZsaWNraXR5XHJcbmltcG9ydCBGbGlja2l0eSBmcm9tICdmbGlja2l0eSc7XHJcblxyXG5jb25zdCBmbGt5ID0gbmV3IEZsaWNraXR5KCAnLmdhbGxlcnknLCB7XHJcbiAgICAvLyBvcHRpb25zLCBkZWZhdWx0cyBsaXN0ZWRcclxuICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgICAvLyBlbmFibGUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgcHJlc3NpbmcgbGVmdCAmIHJpZ2h0IGtleXNcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcclxuICAgIC8vIHNldCBjYXJvdXNlbCBoZWlnaHQgdG8gdGhlIHNlbGVjdGVkIHNsaWRlXHJcbiAgICBhdXRvUGxheTogZmFsc2UsXHJcbiAgICAvLyBhZHZhbmNlcyB0byB0aGUgbmV4dCBjZWxsXHJcbiAgICAvLyBpZiB0cnVlLCBkZWZhdWx0IGlzIDMgc2Vjb25kc1xyXG4gICAgLy8gb3Igc2V0IHRpbWUgYmV0d2VlbiBhZHZhbmNlcyBpbiBtaWxsaXNlY29uZHNcclxuICAgIC8vIGkuZS4gYGF1dG9QbGF5OiAxMDAwYCB3aWxsIGFkdmFuY2UgZXZlcnkgMSBzZWNvbmRcclxuICAgIGNlbGxBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAvLyBhbGlnbm1lbnQgb2YgY2VsbHMsICdjZW50ZXInLCAnbGVmdCcsIG9yICdyaWdodCdcclxuICAgIC8vIG9yIGEgZGVjaW1hbCAwLTEsIDAgaXMgYmVnaW5uaW5nIChsZWZ0KSBvZiBjb250YWluZXIsIDEgaXMgZW5kIChyaWdodClcclxuICAgIGNlbGxTZWxlY3RvcjogdW5kZWZpbmVkLFxyXG4gICAgLy8gc3BlY2lmeSBzZWxlY3RvciBmb3IgY2VsbCBlbGVtZW50c1xyXG4gICAgY29udGFpbjogZmFsc2UsXHJcbiAgICAvLyB3aWxsIGNvbnRhaW4gY2VsbHMgdG8gY29udGFpbmVyXHJcbiAgICAvLyBzbyBubyBleGNlc3Mgc2Nyb2xsIGF0IGJlZ2lubmluZyBvciBlbmRcclxuICAgIC8vIGhhcyBubyBlZmZlY3QgaWYgd3JhcEFyb3VuZCBpcyBlbmFibGVkXHJcbiAgICBkcmFnZ2FibGU6ICc+MScsXHJcbiAgICAvLyBlbmFibGVzIGRyYWdnaW5nICYgZmxpY2tpbmdcclxuICAgIC8vIGlmIGF0IGxlYXN0IDIgY2VsbHNcclxuICAgIGRyYWdUaHJlc2hvbGQ6IDMsXHJcbiAgICAvLyBudW1iZXIgb2YgcGl4ZWxzIGEgdXNlciBtdXN0IHNjcm9sbCBob3Jpem9udGFsbHkgdG8gc3RhcnQgZHJhZ2dpbmdcclxuICAgIC8vIGluY3JlYXNlIHRvIGFsbG93IG1vcmUgcm9vbSBmb3IgdmVydGljYWwgc2Nyb2xsIGZvciB0b3VjaCBkZXZpY2VzXHJcbiAgICBmcmVlU2Nyb2xsOiBmYWxzZSxcclxuICAgIC8vIGVuYWJsZXMgY29udGVudCB0byBiZSBmcmVlbHkgc2Nyb2xsZWQgYW5kIGZsaWNrZWRcclxuICAgIC8vIHdpdGhvdXQgYWxpZ25pbmcgY2VsbHNcclxuICAgIGZyaWN0aW9uOiAwLjIsXHJcbiAgICAvLyBzbWFsbGVyIG51bWJlciA9IGVhc2llciB0byBmbGljayBmYXJ0aGVyXHJcbiAgICBncm91cENlbGxzOiBmYWxzZSxcclxuICAgIC8vIGdyb3VwIGNlbGxzIHRvZ2V0aGVyIGluIHNsaWRlc1xyXG4gICAgaW5pdGlhbEluZGV4OiAwLFxyXG4gICAgLy8gemVyby1iYXNlZCBpbmRleCBvZiB0aGUgaW5pdGlhbCBzZWxlY3RlZCBjZWxsXHJcbiAgICBsYXp5TG9hZDogdHJ1ZSxcclxuICAgIC8vIGVuYWJsZSBsYXp5LWxvYWRpbmcgaW1hZ2VzXHJcbiAgICAvLyBzZXQgaW1nIGRhdGEtZmxpY2tpdHktbGF6eWxvYWQ9XCJzcmMuanBnXCJcclxuICAgIC8vIHNldCB0byBudW1iZXIgdG8gbG9hZCBpbWFnZXMgYWRqYWNlbnQgY2VsbHNcclxuICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcclxuICAgIC8vIHNldHMgcG9zaXRpb25pbmcgaW4gcGVyY2VudCB2YWx1ZXMsIHJhdGhlciB0aGFuIHBpeGVsc1xyXG4gICAgLy8gRW5hYmxlIGlmIGl0ZW1zIGhhdmUgcGVyY2VudCB3aWR0aHNcclxuICAgIC8vIERpc2FibGUgaWYgaXRlbXMgaGF2ZSBwaXhlbCB3aWR0aHMsIGxpa2UgaW1hZ2VzXHJcbiAgICBwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXHJcbiAgICAvLyBjcmVhdGVzIGFuZCBlbmFibGVzIGJ1dHRvbnMgdG8gY2xpY2sgdG8gcHJldmlvdXMgJiBuZXh0IGNlbGxzXHJcbiAgICBwYWdlRG90czogdHJ1ZSxcclxuICAgIC8vIGNyZWF0ZSBhbmQgZW5hYmxlIHBhZ2UgZG90c1xyXG4gICAgcmVzaXplOiB0cnVlLFxyXG4gICAgLy8gbGlzdGVucyB0byB3aW5kb3cgcmVzaXplIGV2ZW50cyB0byBhZGp1c3Qgc2l6ZSAmIHBvc2l0aW9uc1xyXG4gICAgcmlnaHRUb0xlZnQ6IGZhbHNlLFxyXG4gICAgLy8gZW5hYmxlcyByaWdodC10by1sZWZ0IGxheW91dFxyXG4gICAgc2V0R2FsbGVyeVNpemU6IHRydWUsXHJcbiAgICAvLyBzZXRzIHRoZSBoZWlnaHQgb2YgZ2FsbGVyeVxyXG4gICAgLy8gZGlzYWJsZSBpZiBnYWxsZXJ5IGFscmVhZHkgaGFzIGhlaWdodCBzZXQgd2l0aCBDU1NcclxuICAgIHdhdGNoQ1NTOiBmYWxzZSxcclxuICAgIC8vIHdhdGNoZXMgdGhlIGNvbnRlbnQgb2YgOmFmdGVyIG9mIHRoZSBlbGVtZW50XHJcbiAgICAvLyBhY3RpdmF0ZXMgaWYgI2VsZW1lbnQ6YWZ0ZXIgeyBjb250ZW50OiAnZmxpY2tpdHknIH1cclxuICAgIHdyYXBBcm91bmQ6IGZhbHNlXHJcbiAgICAvLyBhdCBlbmQgb2YgY2VsbHMsIHdyYXBzLWFyb3VuZCB0byBmaXJzdCBmb3IgaW5maW5pdGUgc2Nyb2xsaW5nXHJcbn0pO1xyXG5cclxuLy8gU3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLihqfHQpc3g/JC9cclxuKSk7XHJcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3ltZm9ueSBwYWNrYWdlLlxuICpcbiAqIChjKSBGYWJpZW4gUG90ZW5jaWVyIDxmYWJpZW5Ac3ltZm9ueS5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3N0aW11bHVzID0gcmVxdWlyZShcInN0aW11bHVzXCIpO1xuXG52YXIgX3N3dXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzd3VwXCIpKTtcblxudmFyIF9kZWJ1Z1BsdWdpbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBzd3VwL2RlYnVnLXBsdWdpblwiKSk7XG5cbnZhciBfZm9ybXNQbHVnaW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAc3d1cC9mb3Jtcy1wbHVnaW5cIikpO1xuXG52YXIgX2ZhZGVUaGVtZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBzd3VwL2ZhZGUtdGhlbWVcIikpO1xuXG52YXIgX3NsaWRlVGhlbWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAc3d1cC9zbGlkZS10aGVtZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIF9pbmhlcml0cyhfZGVmYXVsdCwgX0NvbnRyb2xsZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoX2RlZmF1bHQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBjb250YWluZXJzOiBbJyNzd3VwJ10sXG4gICAgICAgIGNhY2hlOiB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWNhY2hlJyksXG4gICAgICAgIGFuaW1hdGVIaXN0b3J5QnJvd3Npbmc6IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0ZS1oaXN0b3J5LWJyb3dzaW5nJyksXG4gICAgICAgIHBsdWdpbnM6IFsnc2xpZGUnID09PSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJykgPyBuZXcgX3NsaWRlVGhlbWVbXCJkZWZhdWx0XCJdKCkgOiBuZXcgX2ZhZGVUaGVtZVtcImRlZmF1bHRcIl0oKSwgbmV3IF9mb3Jtc1BsdWdpbltcImRlZmF1bHRcIl0oKV1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5lcnMnKSkge1xuICAgICAgICBvcHRpb25zLmNvbnRhaW5lcnMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5lcnMnKS5zcGxpdCgnICcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rLXNlbGVjdG9yJykpIHtcbiAgICAgICAgb3B0aW9ucy5saW5rU2VsZWN0b3IgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmstc2VsZWN0b3InKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uLXNlbGVjdG9yJykpIHtcbiAgICAgICAgb3B0aW9ucy5hbmltYXRpb25TZWxlY3RvciA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uLXNlbGVjdG9yJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWRlYnVnJykpIHtcbiAgICAgICAgb3B0aW9ucy5wbHVnaW5zLnB1c2gobmV3IF9kZWJ1Z1BsdWdpbltcImRlZmF1bHRcIl0oKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzd3VwID0gbmV3IF9zd3VwW1wiZGVmYXVsdFwiXShvcHRpb25zKTtcblxuICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnc3d1cDpjb25uZWN0Jywge1xuICAgICAgICBzd3VwOiBzd3VwLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2Rpc3BhdGNoRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Rpc3BhdGNoRXZlbnQobmFtZSkge1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgICB2YXIgY2FuQnViYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICAgIHZhciBjYW5jZWxhYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICAgIHZhciB1c2VyRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIHVzZXJFdmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgY2FuQnViYmxlLCBjYW5jZWxhYmxlLCBwYXlsb2FkKTtcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KHVzZXJFdmVudCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShfc3RpbXVsdXMuQ29udHJvbGxlcik7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==