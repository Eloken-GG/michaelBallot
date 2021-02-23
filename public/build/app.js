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
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");
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
        }); // Animation of headline, tagline and punchline

        (0,scrollreveal__WEBPACK_IMPORTED_MODULE_4__.default)().reveal('.headline');
        (0,scrollreveal__WEBPACK_IMPORTED_MODULE_4__.default)().reveal('.tagline', {
          delay: 500
        });
        (0,scrollreveal__WEBPACK_IMPORTED_MODULE_4__.default)().reveal('.punchline', {
          delay: 2000
        });
        (0,scrollreveal__WEBPACK_IMPORTED_MODULE_4__.default)().reveal('.highline', {
          delay: 1000
        });
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
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");
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

 // import Scroll Reveal


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
  }); // Animation of headline, tagline and punchline

  (0,scrollreveal__WEBPACK_IMPORTED_MODULE_3__.default)().reveal('.headline');
  (0,scrollreveal__WEBPACK_IMPORTED_MODULE_3__.default)().reveal('.tagline', {
    delay: 500
  });
  (0,scrollreveal__WEBPACK_IMPORTED_MODULE_3__.default)().reveal('.punchline', {
    delay: 2000
  });
  (0,scrollreveal__WEBPACK_IMPORTED_MODULE_3__.default)().reveal('.highline', {
    delay: 1000
  });
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
0,[["./assets/app.js","runtime","vendors-node_modules_swup_debug-plugin_lib_index_js-node_modules_swup_fade-theme_lib_index_js-9156f4"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1zd3VwL1Jlc291cmNlcy9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz82YmU2Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllciIsIlBseXIiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib24iLCJzZWxlY3RvciIsInR5cGUiLCJjYWxsYmFjayIsInF1ZXJ5U2VsZWN0b3IiLCJwYXVzZSIsInBsYXkiLCJTY3JvbGxSZXZlYWwiLCJyZXZlYWwiLCJkZWxheSIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIiwiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJ2YWx1ZSIsImV4cG9ydHMiLCJfc3RpbXVsdXMiLCJfc3d1cCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZGVidWdQbHVnaW4iLCJfZm9ybXNQbHVnaW4iLCJfZmFkZVRoZW1lIiwiX3NsaWRlVGhlbWUiLCJfX2VzTW9kdWxlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9jcmVhdGVTdXBlciIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9jcmVhdGVTdXBlckludGVybmFsIiwiU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJyZXN1bHQiLCJOZXdUYXJnZXQiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJjYWxsIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwic2hhbSIsIlByb3h5IiwiRGF0ZSIsInRvU3RyaW5nIiwiZSIsImdldFByb3RvdHlwZU9mIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9zdXBlciIsImNvbm5lY3QiLCJvcHRpb25zIiwiY29udGFpbmVycyIsImNhY2hlIiwiZWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsImFuaW1hdGVIaXN0b3J5QnJvd3NpbmciLCJwbHVnaW5zIiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJsaW5rU2VsZWN0b3IiLCJhbmltYXRpb25TZWxlY3RvciIsInB1c2giLCJzd3VwIiwiX2Rpc3BhdGNoRXZlbnQiLCJuYW1lIiwicGF5bG9hZCIsInVuZGVmaW5lZCIsImNhbkJ1YmJsZSIsImNhbmNlbGFibGUiLCJ1c2VyRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FB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Q0FBbkIsSUFBd0I4QixTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCaUMsU0FBekMsR0FBcURqQyxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxJQUFsRjtBQUNBLFVBQUlrQyxTQUFTLEdBQUdsQyxTQUFTLENBQUM5QixNQUFWLEdBQW1CLENBQW5CLElBQXdCOEIsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQmlDLFNBQXpDLEdBQXFEakMsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsS0FBcEY7QUFDQSxVQUFJbUMsVUFBVSxHQUFHbkMsU0FBUyxDQUFDOUIsTUFBVixHQUFtQixDQUFuQixJQUF3QjhCLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJpQyxTQUF6QyxHQUFxRGpDLFNBQVMsQ0FBQyxDQUFELENBQTlELEdBQW9FLEtBQXJGO0FBQ0EsVUFBSW9DLFNBQVMsR0FBRy9HLFFBQVEsQ0FBQ2dILFdBQVQsQ0FBcUIsYUFBckIsQ0FBaEI7QUFDQUQsZUFBUyxDQUFDRSxlQUFWLENBQTBCUCxJQUExQixFQUFnQ0csU0FBaEMsRUFBMkNDLFVBQTNDLEVBQXVESCxPQUF2RDtBQUNBLFdBQUtaLE9BQUwsQ0FBYW1CLGFBQWIsQ0FBMkJILFNBQTNCO0FBQ0Q7QUFUQSxHQWpDb0IsQ0FBWCxDQUFaOztBQTZDQSxTQUFPdkIsUUFBUDtBQUNELENBekQyQixDQXlEMUIzRCxTQUFTLENBQUNzRixVQXpEZ0IsQ0FBNUI7O0FBMkRBdkYsZUFBQSxHQUFxQjRELFFBQXJCLEM7Ozs7Ozs7Ozs7OztBQzlHQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtc3d1cC0tc3d1cCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1zd3VwL2Rpc3QvY29udHJvbGxlci5qcycpLFxufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5pbXBvcnQgUGx5ciBmcm9tIFwicGx5clwiO1xuaW1wb3J0IFNjcm9sbFJldmVhbCBmcm9tIFwic2Nyb2xscmV2ZWFsXCI7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29udHJvbGxlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihfZGVmYXVsdCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9kZWZhdWx0KTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29ubmVjdCcsIHRoaXMuX29uQ29ubmVjdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpc2Nvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgIC8vIFlvdSBzaG91bGQgYWx3YXlzIHJlbW92ZSBsaXN0ZW5lcnMgd2hlbiB0aGUgY29udHJvbGxlciBpcyBkaXNjb25uZWN0ZWQgdG8gYXZvaWQgc2lkZS1lZmZlY3RzXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3d1cDpjb25uZWN0JywgdGhpcy5fb25Db25uZWN0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX29uQ29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Db25uZWN0KGV2ZW50KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzd3VwOmNvbnRlbnRSZXBsYWNlZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IC8vIFRoaXMgaXMgdGhlIGJhcmUgbWluaW11bSBKYXZhU2NyaXB0LiBZb3UgY2FuIG9wdCB0byBwYXNzIG5vIGFyZ3VtZW50cyB0byBzZXR1cC5cblxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBseXIoJyNwbGF5ZXInKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0RPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZCcpOyAvLyBFeHBvc2VcblxuICAgICAgICB3aW5kb3cucGxheWVyID0gcGxheWVyOyAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXG5cbiAgICAgICAgZnVuY3Rpb24gb24oc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCcxJyk7XG4gICAgICAgIH0gLy8gUGF1c2VcblxuXG4gICAgICAgIG9uKCcuanMtcGF1c2UnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJzInKTtcbiAgICAgICAgfSk7IC8vIFBhdXNlIDJcblxuICAgICAgICBvbignLmpzLXBhdXNlMicsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnMycpO1xuICAgICAgICB9KTsgLy8gUGxheVxuXG4gICAgICAgIG9uKCcuanMtcGxheScsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCc0Jyk7XG4gICAgICAgIH0pOyAvLyBBbmltYXRpb24gb2YgaGVhZGxpbmUsIHRhZ2xpbmUgYW5kIHB1bmNobGluZVxuXG4gICAgICAgIFNjcm9sbFJldmVhbCgpLnJldmVhbCgnLmhlYWRsaW5lJyk7XG4gICAgICAgIFNjcm9sbFJldmVhbCgpLnJldmVhbCgnLnRhZ2xpbmUnLCB7XG4gICAgICAgICAgZGVsYXk6IDUwMFxuICAgICAgICB9KTtcbiAgICAgICAgU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcucHVuY2hsaW5lJywge1xuICAgICAgICAgIGRlbGF5OiAyMDAwXG4gICAgICAgIH0pO1xuICAgICAgICBTY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy5oaWdobGluZScsIHtcbiAgICAgICAgICBkZWxheTogMTAwMFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBpbXBvcnQgQWxwaW5lanNcclxuaW1wb3J0ICdhbHBpbmVqcyc7XHJcblxyXG5cclxuLy8gaW1wb3J0IFBseXJcclxuaW1wb3J0IFBseXIgZnJvbSAncGx5cic7XHJcblxyXG4vLyBpbXBvcnQgU2Nyb2xsIFJldmVhbFxyXG5pbXBvcnQgU2Nyb2xsUmV2ZWFsIGZyb20gJ3Njcm9sbHJldmVhbCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgLy8gVGhpcyBpcyB0aGUgYmFyZSBtaW5pbXVtIEphdmFTY3JpcHQuIFlvdSBjYW4gb3B0IHRvIHBhc3Mgbm8gYXJndW1lbnRzIHRvIHNldHVwLlxyXG4gICAgY29uc3QgcGxheWVyID0gbmV3IFBseXIoJyNwbGF5ZXInKTtcclxuICAgIGNvbnNvbGUubG9nKCdET00gZnVsbHkgbG9hZGVkIGFuZCBwYXJzZWQnKTtcclxuXHJcbiAgICAvLyBFeHBvc2VcclxuICAgIHdpbmRvdy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgLy8gQmluZCBldmVudCBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gb24oc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGF1c2VcclxuICAgIG9uKCcuanMtcGF1c2UnLCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzInKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFBhdXNlIDJcclxuICAgIG9uKCcuanMtcGF1c2UyJywgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCczJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQbGF5XHJcbiAgICBvbignLmpzLXBsYXknLCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnNCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQW5pbWF0aW9uIG9mIGhlYWRsaW5lLCB0YWdsaW5lIGFuZCBwdW5jaGxpbmVcclxuICAgIFNjcm9sbFJldmVhbCgpLnJldmVhbCgnLmhlYWRsaW5lJyk7XHJcbiAgICBTY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy50YWdsaW5lJywgeyBkZWxheTogNTAwIH0pO1xyXG4gICAgU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcucHVuY2hsaW5lJywgeyBkZWxheTogMjAwMCB9KTtcclxuICAgIFNjcm9sbFJldmVhbCgpLnJldmVhbCgnLmhpZ2hsaW5lJywgeyBkZWxheTogMTAwMCB9KTtcclxufSk7XHJcblxyXG5cclxuLy8gU3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLihqfHQpc3g/JC9cclxuKSk7XHJcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3ltZm9ueSBwYWNrYWdlLlxuICpcbiAqIChjKSBGYWJpZW4gUG90ZW5jaWVyIDxmYWJpZW5Ac3ltZm9ueS5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3N0aW11bHVzID0gcmVxdWlyZShcInN0aW11bHVzXCIpO1xuXG52YXIgX3N3dXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzd3VwXCIpKTtcblxudmFyIF9kZWJ1Z1BsdWdpbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBzd3VwL2RlYnVnLXBsdWdpblwiKSk7XG5cbnZhciBfZm9ybXNQbHVnaW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAc3d1cC9mb3Jtcy1wbHVnaW5cIikpO1xuXG52YXIgX2ZhZGVUaGVtZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBzd3VwL2ZhZGUtdGhlbWVcIikpO1xuXG52YXIgX3NsaWRlVGhlbWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAc3d1cC9zbGlkZS10aGVtZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIF9pbmhlcml0cyhfZGVmYXVsdCwgX0NvbnRyb2xsZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoX2RlZmF1bHQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBjb250YWluZXJzOiBbJyNzd3VwJ10sXG4gICAgICAgIGNhY2hlOiB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWNhY2hlJyksXG4gICAgICAgIGFuaW1hdGVIaXN0b3J5QnJvd3Npbmc6IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0ZS1oaXN0b3J5LWJyb3dzaW5nJyksXG4gICAgICAgIHBsdWdpbnM6IFsnc2xpZGUnID09PSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJykgPyBuZXcgX3NsaWRlVGhlbWVbXCJkZWZhdWx0XCJdKCkgOiBuZXcgX2ZhZGVUaGVtZVtcImRlZmF1bHRcIl0oKSwgbmV3IF9mb3Jtc1BsdWdpbltcImRlZmF1bHRcIl0oKV1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5lcnMnKSkge1xuICAgICAgICBvcHRpb25zLmNvbnRhaW5lcnMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5lcnMnKS5zcGxpdCgnICcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rLXNlbGVjdG9yJykpIHtcbiAgICAgICAgb3B0aW9ucy5saW5rU2VsZWN0b3IgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmstc2VsZWN0b3InKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uLXNlbGVjdG9yJykpIHtcbiAgICAgICAgb3B0aW9ucy5hbmltYXRpb25TZWxlY3RvciA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uLXNlbGVjdG9yJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWRlYnVnJykpIHtcbiAgICAgICAgb3B0aW9ucy5wbHVnaW5zLnB1c2gobmV3IF9kZWJ1Z1BsdWdpbltcImRlZmF1bHRcIl0oKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzd3VwID0gbmV3IF9zd3VwW1wiZGVmYXVsdFwiXShvcHRpb25zKTtcblxuICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnc3d1cDpjb25uZWN0Jywge1xuICAgICAgICBzd3VwOiBzd3VwLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2Rpc3BhdGNoRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Rpc3BhdGNoRXZlbnQobmFtZSkge1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgICB2YXIgY2FuQnViYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICAgIHZhciBjYW5jZWxhYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICAgIHZhciB1c2VyRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIHVzZXJFdmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgY2FuQnViYmxlLCBjYW5jZWxhYmxlLCBwYXlsb2FkKTtcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KHVzZXJFdmVudCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShfc3RpbXVsdXMuQ29udHJvbGxlcik7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==