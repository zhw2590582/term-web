(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Term = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var defineProperty = createCommonjsModule(function (module) {
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	module.exports = _defineProperty;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _defineProperty = unwrapExports(defineProperty);

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	module.exports = _classCallCheck;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var createClass = createCommonjsModule(function (module) {
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

	module.exports = _createClass;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _createClass = unwrapExports(createClass);

	var assertThisInitialized = createCommonjsModule(function (module) {
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	module.exports = _assertThisInitialized;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _assertThisInitialized = unwrapExports(assertThisInitialized);

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(setPrototypeOf);

	var inherits = createCommonjsModule(function (module) {
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
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	module.exports = _inherits;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _inherits = unwrapExports(inherits);

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return typeof obj;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(_typeof_1);

	var possibleConstructorReturn = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];



	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	module.exports = _possibleConstructorReturn;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _getPrototypeOf = unwrapExports(getPrototypeOf);

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z = ".term-container{position:relative;user-select:none;overflow:hidden;border-radius:5px;box-shadow:0 20px 68px rgba(0,0,0,.55);scrollbar-color:#666 transparent!important;scrollbar-width:thin!important}.term-container ::-webkit-scrollbar{width:5px}.term-container ::-webkit-scrollbar-thumb{background-color:#666;border-radius:5px}.term-container ::-webkit-scrollbar-thumb:hover{background-color:#ccc}.term-container.is-dragging{opacity:.95}.term-container.is-fullscreen{position:fixed!important;z-index:9999!important;top:0!important;left:0!important;bottom:0!important;right:0!important;width:100%!important;height:100%!important}.term-container .term-canvas{position:absolute;z-index:1;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.term-container .term-textarea{z-index:2}.term-container .term-copy,.term-container .term-textarea{position:absolute;width:20px;height:20px;opacity:0;pointer-events:none;resize:none}.term-container .term-copy{z-index:3}.term-container .term-header{position:absolute;z-index:4;width:100%;top:0;left:0;right:0}.term-container .term-header .term-recorder{position:absolute;right:10px;top:10px;height:18px;width:18px;border-radius:3px;cursor:pointer;border-style:solid;border-width:0;background:#f44336;transition:all .2s ease}@keyframes loop{0%{border-width:1px}50%{border-width:6px}to{border-width:1px}}.term-container .term-header .term-recorder.recording{background:#ff5722;border-color:rgba(255,254,254,.5);border-radius:50%;animation:loop 1s linear infinite}.term-container .term-header .term-recorder.creating{background:#009688;border-color:rgba(255,254,254,.5);border-radius:50%;animation:loop 1s linear infinite}.term-container .term-content{position:absolute;z-index:5;width:100%;right:0;left:0;overflow:auto}.term-container .term-content:hover{cursor:text}.term-container .term-footer{position:absolute;z-index:6;width:100%;bottom:0;left:0;right:0}.term-container .term-footer .term-resize{position:absolute;right:0;bottom:0;width:20px;height:20px;cursor:nwse-resize}";
	styleInject(css_248z);

	var optionValidator = createCommonjsModule(function (module, exports) {
	!function(r,t){module.exports=t();}(commonjsGlobal,function(){function e(r){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n=Object.prototype.toString,c=function(r){if(void 0===r)return "undefined";if(null===r)return "null";var t=e(r);if("boolean"===t)return "boolean";if("string"===t)return "string";if("number"===t)return "number";if("symbol"===t)return "symbol";if("function"===t)return function(r){return "GeneratorFunction"===o(r)}(r)?"generatorfunction":"function";if(function(r){return Array.isArray?Array.isArray(r):r instanceof Array}(r))return "array";if(function(r){if(r.constructor&&"function"==typeof r.constructor.isBuffer)return r.constructor.isBuffer(r);return !1}(r))return "buffer";if(function(r){try{if("number"==typeof r.length&&"function"==typeof r.callee)return !0}catch(r){if(-1!==r.message.indexOf("callee"))return !0}return !1}(r))return "arguments";if(function(r){return r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate}(r))return "date";if(function(r){return r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit}(r))return "error";if(function(r){return r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global}(r))return "regexp";switch(o(r)){case"Symbol":return "symbol";case"Promise":return "promise";case"WeakMap":return "weakmap";case"WeakSet":return "weakset";case"Map":return "map";case"Set":return "set";case"Int8Array":return "int8array";case"Uint8Array":return "uint8array";case"Uint8ClampedArray":return "uint8clampedarray";case"Int16Array":return "int16array";case"Uint16Array":return "uint16array";case"Int32Array":return "int32array";case"Uint32Array":return "uint32array";case"Float32Array":return "float32array";case"Float64Array":return "float64array"}if(function(r){return "function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next}(r))return "generator";switch(t=n.call(r)){case"[object Object]":return "object";case"[object Map Iterator]":return "mapiterator";case"[object Set Iterator]":return "setiterator";case"[object String Iterator]":return "stringiterator";case"[object Array Iterator]":return "arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(r){return r.constructor?r.constructor.name:null}function f(r,t){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return s(r,t,e),y(r,t,e),function(a,i,u){var r=c(i),t=c(a);if("object"===r){if("object"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(i).forEach(function(r){var t=a[r],e=i[r],n=u.slice();n.push(r),s(t,e,n),y(t,e,n),f(t,e,n);});}if("array"===r){if("array"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'array' type, but got '").concat(t,"'"));a.forEach(function(r,t){var e=a[t],n=i[t]||i[0],o=u.slice();o.push(t),s(e,n,o),y(e,n,o),f(e,n,o);});}}(r,t,e),r}function s(r,t,e){if("string"===c(t)){var n=c(r);if("?"===t[0]&&(t=t.slice(1)+"|undefined"),!(-1<t.indexOf("|")?t.split("|").map(function(r){return r.toLowerCase().trim()}).filter(Boolean).some(function(r){return n===r}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(e.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function y(r,t,e){if("function"===c(t)){var n=t(r,c(r),e);if(!0!==n){var o=c(n);throw "string"===o?new Error(n):"error"===o?n:new Error("[Validator Error]: The scheme for '".concat(e.join("."),"' validator require return true, but got '").concat(n,"'"))}}}return f.kindOf=c,f});
	});

	var Emitter = /*#__PURE__*/function () {
	  function Emitter() {
	    _classCallCheck(this, Emitter);
	  }

	  _createClass(Emitter, [{
	    key: "on",
	    value: function on(name, fn, ctx) {
	      var e = this.e || (this.e = {});
	      (e[name] || (e[name] = [])).push({
	        fn: fn,
	        ctx: ctx
	      });
	      return this;
	    }
	  }, {
	    key: "once",
	    value: function once(name, fn, ctx) {
	      var self = this;

	      function listener() {
	        self.off(name, listener);

	        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        fn.apply(ctx, args);
	      }

	      listener._ = fn;
	      return this.on(name, listener, ctx);
	    }
	  }, {
	    key: "emit",
	    value: function emit(name) {
	      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();

	      for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        data[_key2 - 1] = arguments[_key2];
	      }

	      for (var i = 0; i < evtArr.length; i += 1) {
	        evtArr[i].fn.apply(evtArr[i].ctx, data);
	      }

	      return this;
	    }
	  }, {
	    key: "off",
	    value: function off(name, callback) {
	      var e = this.e || (this.e = {});
	      var evts = e[name];
	      var liveEvents = [];

	      if (evts && callback) {
	        for (var i = 0, len = evts.length; i < len; i += 1) {
	          if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
	        }
	      }

	      if (liveEvents.length) {
	        e[name] = liveEvents;
	      } else {
	        delete e[name];
	      }

	      return this;
	    }
	  }]);

	  return Emitter;
	}();

	function click (term, events) {
	  var $textarea = term.template.$textarea;
	  events.proxy(document, ['click', 'contextmenu', 'dblclick'], function (event) {
	    if (event.composedPath && event.composedPath().indexOf(term.template.$content) > -1) {
	      term.isFocus = true;
	      term.emit('focus');
	      term.emit(event.type, event);
	    } else if (term.isFocus) {
	      term.isFocus = false;
	      term.emit('blur');
	    }
	  });
	  term.on('focus', function () {
	    $textarea.focus();
	  });
	  term.on('click', function (event) {
	    var _events$getLogFromEve = events.getLogFromEvent(event),
	        log = _events$getLogFromEve.log;

	    if (log && log.href) window.open(log.href);
	  });

	  if (term.options.autofocus) {
	    setTimeout(function () {
	      term.template.$content.click();
	    }, 10);
	  }
	}

	function resize (term, events) {
	  var _term$template = term.template,
	      $container = _term$template.$container,
	      $content = _term$template.$content,
	      $resize = _term$template.$resize,
	      $canvas = _term$template.$canvas,
	      $header = _term$template.$header,
	      $footer = _term$template.$footer;
	  var pixelRatio = term.options.pixelRatio;
	  var isResize = false;
	  var lastX = 0;
	  var lastY = 0;
	  var lastWidth = 0;
	  var lastHeight = 0;
	  events.proxy($resize, 'mousedown', function (event) {
	    isResize = true;
	    var clientWidth = $container.clientWidth,
	        clientHeight = $container.clientHeight;
	    lastWidth = clientWidth;
	    lastHeight = clientHeight;
	    lastX = event.pageX;
	    lastY = event.pageY;
	  });
	  events.proxy(document, 'mousemove', function (event) {
	    if (isResize) {
	      $content.style.visibility = 'hidden';
	      var width = lastWidth + event.pageX - lastX;
	      var height = lastHeight + event.pageY - lastY;

	      if (width >= 300 && height >= 300) {
	        $container.style.width = "".concat(width, "px");
	        $container.style.height = "".concat(height, "px");
	      }
	    }
	  });
	  events.proxy(document, 'mouseup', function () {
	    if (isResize) {
	      isResize = false;
	      lastX = 0;
	      lastY = 0;
	      lastWidth = 0;
	      lastHeight = 0;
	      $content.style.visibility = 'visible';
	      var clientWidth = $container.clientWidth,
	          clientHeight = $container.clientHeight;
	      term.emit('resize', {
	        width: clientWidth,
	        height: clientHeight
	      });
	    }
	  });
	  term.on('resize', function (_ref) {
	    var width = _ref.width,
	        height = _ref.height;
	    $container.style.width = "".concat(width, "px");
	    $container.style.height = "".concat(height, "px");
	    $canvas.width = width * pixelRatio;
	    $canvas.height = height * pixelRatio;
	    term.drawer.init();
	  });
	  term.on('size', function (_ref2) {
	    var header = _ref2.header,
	        content = _ref2.content,
	        footer = _ref2.footer;
	    $header.style.height = "".concat(header, "px");
	    $footer.style.height = "".concat(footer, "px");
	    $content.style.top = "".concat(header, "px");
	    $content.style.height = "".concat(content, "px");
	  });
	}

	var getSize = createCommonjsModule(function (module) {
	/*!
	 * getSize v2.0.3
	 * measure size of elements
	 * MIT license
	 */

	/* jshint browser: true, strict: true, undef: true, unused: true */
	/* globals console: false */

	( function( window, factory ) {
	  /* jshint strict: false */ /* globals define, module */
	  if ( module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.getSize = factory();
	  }

	})( window, function factory() {

	// -------------------------- helpers -------------------------- //

	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') == -1 && !isNaN( num );
	  return isValid && num;
	}

	function noop() {}

	var logError = typeof console == 'undefined' ? noop :
	  function( message ) {
	    console.error( message );
	  };

	// -------------------------- measurements -------------------------- //

	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];

	var measurementsLength = measurements.length;

	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}

	// -------------------------- getStyle -------------------------- //

	/**
	 * getStyle, get style of element, check for Firefox bug
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	 */
	function getStyle( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    logError( 'Style returned ' + style +
	      '. Are you running this code in a hidden iframe on Firefox? ' +
	      'See https://bit.ly/getsizebug1' );
	  }
	  return style;
	}

	// -------------------------- setup -------------------------- //

	var isSetup = false;

	var isBoxSizeOuter;

	/**
	 * setup
	 * check isBoxSizerOuter
	 * do on first getSize() rather than on page load for Firefox bug
	 */
	function setup() {
	  // setup once
	  if ( isSetup ) {
	    return;
	  }
	  isSetup = true;

	  // -------------------------- box sizing -------------------------- //

	  /**
	   * Chrome & Safari measure the outer-width on style.width on border-box elems
	   * IE11 & Firefox<29 measures the inner-width
	   */
	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style.boxSizing = 'border-box';

	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );
	  // round value for browser zoom. desandro/masonry#928
	  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
	  getSize.isBoxSizeOuter = isBoxSizeOuter;

	  body.removeChild( div );
	}

	// -------------------------- getSize -------------------------- //

	function getSize( elem ) {
	  setup();

	  // use querySeletor if elem is string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelector( elem );
	  }

	  // do not proceed on non-objects
	  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
	    return;
	  }

	  var style = getStyle( elem );

	  // if hidden, everything is 0
	  if ( style.display == 'none' ) {
	    return getZeroSize();
	  }

	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;

	  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

	  // get all measurements
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }

	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }

	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }

	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );

	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;

	  return size;
	}

	return getSize;

	});
	});

	var evEmitter = createCommonjsModule(function (module) {
	/**
	 * EvEmitter v1.1.0
	 * Lil' event emitter
	 * MIT License
	 */

	/* jshint unused: true, undef: true, strict: true */

	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }

	}( typeof window != 'undefined' ? window : commonjsGlobal, function() {

	function EvEmitter() {}

	var proto = EvEmitter.prototype;

	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }

	  return this;
	};

	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;

	  return this;
	};

	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }

	  return this;
	};

	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  // copy over to avoid interference if .off() in listener
	  listeners = listeners.slice(0);
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

	  for ( var i=0; i < listeners.length; i++ ) {
	    var listener = listeners[i];
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	  }

	  return this;
	};

	proto.allOff = function() {
	  delete this._events;
	  delete this._onceEvents;
	};

	return EvEmitter;

	}));
	});

	var unipointer = createCommonjsModule(function (module) {
	/*!
	 * Unipointer v2.3.0
	 * base class for doing one thing with pointer event
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true, strict: true */

	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*global define, module, require */
	  if ( module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      evEmitter
	    );
	  } else {
	    // browser global
	    window.Unipointer = factory(
	      window,
	      window.EvEmitter
	    );
	  }

	}( window, function factory( window, EvEmitter ) {

	function noop() {}

	function Unipointer() {}

	// inherit EvEmitter
	var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

	proto.bindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, true );
	};

	proto.unbindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, false );
	};

	/**
	 * Add or remove start event
	 * @param {Boolean} isAdd - remove if falsey
	 */
	proto._bindStartEvent = function( elem, isAdd ) {
	  // munge isAdd, default to true
	  isAdd = isAdd === undefined ? true : isAdd;
	  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

	  // default to mouse events
	  var startEvent = 'mousedown';
	  if ( window.PointerEvent ) {
	    // Pointer Events
	    startEvent = 'pointerdown';
	  } else if ( 'ontouchstart' in window ) {
	    // Touch Events. iOS Safari
	    startEvent = 'touchstart';
	  }
	  elem[ bindMethod ]( startEvent, this );
	};

	// trigger handler methods for events
	proto.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	// returns the touch that we're keeping track of
	proto.getTouch = function( touches ) {
	  for ( var i=0; i < touches.length; i++ ) {
	    var touch = touches[i];
	    if ( touch.identifier == this.pointerIdentifier ) {
	      return touch;
	    }
	  }
	};

	// ----- start event ----- //

	proto.onmousedown = function( event ) {
	  // dismiss clicks from right or middle buttons
	  var button = event.button;
	  if ( button && ( button !== 0 && button !== 1 ) ) {
	    return;
	  }
	  this._pointerDown( event, event );
	};

	proto.ontouchstart = function( event ) {
	  this._pointerDown( event, event.changedTouches[0] );
	};

	proto.onpointerdown = function( event ) {
	  this._pointerDown( event, event );
	};

	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto._pointerDown = function( event, pointer ) {
	  // dismiss right click and other pointers
	  // button = 0 is okay, 1-4 not
	  if ( event.button || this.isPointerDown ) {
	    return;
	  }

	  this.isPointerDown = true;
	  // save pointer identifier to match up touch events
	  this.pointerIdentifier = pointer.pointerId !== undefined ?
	    // pointerId for pointer events, touch.indentifier for touch events
	    pointer.pointerId : pointer.identifier;

	  this.pointerDown( event, pointer );
	};

	proto.pointerDown = function( event, pointer ) {
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};

	// hash of events to be bound after start event
	var postStartEvents = {
	  mousedown: [ 'mousemove', 'mouseup' ],
	  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
	  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
	};

	proto._bindPostStartEvents = function( event ) {
	  if ( !event ) {
	    return;
	  }
	  // get proper events to match start event
	  var events = postStartEvents[ event.type ];
	  // bind events to node
	  events.forEach( function( eventName ) {
	    window.addEventListener( eventName, this );
	  }, this );
	  // save these arguments
	  this._boundPointerEvents = events;
	};

	proto._unbindPostStartEvents = function() {
	  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
	  if ( !this._boundPointerEvents ) {
	    return;
	  }
	  this._boundPointerEvents.forEach( function( eventName ) {
	    window.removeEventListener( eventName, this );
	  }, this );

	  delete this._boundPointerEvents;
	};

	// ----- move event ----- //

	proto.onmousemove = function( event ) {
	  this._pointerMove( event, event );
	};

	proto.onpointermove = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerMove( event, event );
	  }
	};

	proto.ontouchmove = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerMove( event, touch );
	  }
	};

	/**
	 * pointer move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerMove = function( event, pointer ) {
	  this.pointerMove( event, pointer );
	};

	// public
	proto.pointerMove = function( event, pointer ) {
	  this.emitEvent( 'pointerMove', [ event, pointer ] );
	};

	// ----- end event ----- //


	proto.onmouseup = function( event ) {
	  this._pointerUp( event, event );
	};

	proto.onpointerup = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerUp( event, event );
	  }
	};

	proto.ontouchend = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerUp( event, touch );
	  }
	};

	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerUp = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerUp( event, pointer );
	};

	// public
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	};

	// ----- pointer done ----- //

	// triggered on pointer up & pointer cancel
	proto._pointerDone = function() {
	  this._pointerReset();
	  this._unbindPostStartEvents();
	  this.pointerDone();
	};

	proto._pointerReset = function() {
	  // reset properties
	  this.isPointerDown = false;
	  delete this.pointerIdentifier;
	};

	proto.pointerDone = noop;

	// ----- pointer cancel ----- //

	proto.onpointercancel = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerCancel( event, event );
	  }
	};

	proto.ontouchcancel = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerCancel( event, touch );
	  }
	};

	/**
	 * pointer cancel
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerCancel = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerCancel( event, pointer );
	};

	// public
	proto.pointerCancel = function( event, pointer ) {
	  this.emitEvent( 'pointerCancel', [ event, pointer ] );
	};

	// -----  ----- //

	// utility function for getting x/y coords from event
	Unipointer.getPointerPoint = function( pointer ) {
	  return {
	    x: pointer.pageX,
	    y: pointer.pageY
	  };
	};

	// -----  ----- //

	return Unipointer;

	}));
	});

	var unidragger = createCommonjsModule(function (module) {
	/*!
	 * Unidragger v2.3.1
	 * Draggable base class
	 * MIT license
	 */

	/*jshint browser: true, unused: true, undef: true, strict: true */

	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */

	  if ( module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      unipointer
	    );
	  } else {
	    // browser global
	    window.Unidragger = factory(
	      window,
	      window.Unipointer
	    );
	  }

	}( window, function factory( window, Unipointer ) {

	// -------------------------- Unidragger -------------------------- //

	function Unidragger() {}

	// inherit Unipointer & EvEmitter
	var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

	// ----- bind start ----- //

	proto.bindHandles = function() {
	  this._bindHandles( true );
	};

	proto.unbindHandles = function() {
	  this._bindHandles( false );
	};

	/**
	 * Add or remove start event
	 * @param {Boolean} isAdd
	 */
	proto._bindHandles = function( isAdd ) {
	  // munge isAdd, default to true
	  isAdd = isAdd === undefined ? true : isAdd;
	  // bind each handle
	  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
	  var touchAction = isAdd ? this._touchActionValue : '';
	  for ( var i=0; i < this.handles.length; i++ ) {
	    var handle = this.handles[i];
	    this._bindStartEvent( handle, isAdd );
	    handle[ bindMethod ]( 'click', this );
	    // touch-action: none to override browser touch gestures. metafizzy/flickity#540
	    if ( window.PointerEvent ) {
	      handle.style.touchAction = touchAction;
	    }
	  }
	};

	// prototype so it can be overwriteable by Flickity
	proto._touchActionValue = 'none';

	// ----- start event ----- //

	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerDown = function( event, pointer ) {
	  var isOkay = this.okayPointerDown( event );
	  if ( !isOkay ) {
	    return;
	  }
	  // track start event position
	  // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
	  this.pointerDownPointer = {
	    pageX: pointer.pageX,
	    pageY: pointer.pageY,
	  };

	  event.preventDefault();
	  this.pointerDownBlur();
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};

	// nodes that have text fields
	var cursorNodes = {
	  TEXTAREA: true,
	  INPUT: true,
	  SELECT: true,
	  OPTION: true,
	};

	// input types that do not have text fields
	var clickTypes = {
	  radio: true,
	  checkbox: true,
	  button: true,
	  submit: true,
	  image: true,
	  file: true,
	};

	// dismiss inputs with text fields. flickity#403, flickity#404
	proto.okayPointerDown = function( event ) {
	  var isCursorNode = cursorNodes[ event.target.nodeName ];
	  var isClickType = clickTypes[ event.target.type ];
	  var isOkay = !isCursorNode || isClickType;
	  if ( !isOkay ) {
	    this._pointerReset();
	  }
	  return isOkay;
	};

	// kludge to blur previously focused input
	proto.pointerDownBlur = function() {
	  var focused = document.activeElement;
	  // do not blur body for IE10, metafizzy/flickity#117
	  var canBlur = focused && focused.blur && focused != document.body;
	  if ( canBlur ) {
	    focused.blur();
	  }
	};

	// ----- move event ----- //

	/**
	 * drag move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};

	// base pointer move logic
	proto._dragPointerMove = function( event, pointer ) {
	  var moveVector = {
	    x: pointer.pageX - this.pointerDownPointer.pageX,
	    y: pointer.pageY - this.pointerDownPointer.pageY
	  };
	  // start drag if pointer has moved far enough to start drag
	  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
	    this._dragStart( event, pointer );
	  }
	  return moveVector;
	};

	// condition if pointer has moved far enough to start drag
	proto.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
	};

	// ----- end event ----- //

	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	  this._dragPointerUp( event, pointer );
	};

	proto._dragPointerUp = function( event, pointer ) {
	  if ( this.isDragging ) {
	    this._dragEnd( event, pointer );
	  } else {
	    // pointer didn't move enough for drag to start
	    this._staticClick( event, pointer );
	  }
	};

	// -------------------------- drag -------------------------- //

	// dragStart
	proto._dragStart = function( event, pointer ) {
	  this.isDragging = true;
	  // prevent clicks
	  this.isPreventingClicks = true;
	  this.dragStart( event, pointer );
	};

	proto.dragStart = function( event, pointer ) {
	  this.emitEvent( 'dragStart', [ event, pointer ] );
	};

	// dragMove
	proto._dragMove = function( event, pointer, moveVector ) {
	  // do not drag if not dragging yet
	  if ( !this.isDragging ) {
	    return;
	  }

	  this.dragMove( event, pointer, moveVector );
	};

	proto.dragMove = function( event, pointer, moveVector ) {
	  event.preventDefault();
	  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
	};

	// dragEnd
	proto._dragEnd = function( event, pointer ) {
	  // set flags
	  this.isDragging = false;
	  // re-enable clicking async
	  setTimeout( function() {
	    delete this.isPreventingClicks;
	  }.bind( this ) );

	  this.dragEnd( event, pointer );
	};

	proto.dragEnd = function( event, pointer ) {
	  this.emitEvent( 'dragEnd', [ event, pointer ] );
	};

	// ----- onclick ----- //

	// handle all clicks and prevent clicks when dragging
	proto.onclick = function( event ) {
	  if ( this.isPreventingClicks ) {
	    event.preventDefault();
	  }
	};

	// ----- staticClick ----- //

	// triggered after pointer down & up with no/tiny movement
	proto._staticClick = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }

	  this.staticClick( event, pointer );

	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    // reset flag after 300ms
	    setTimeout( function() {
	      delete this.isIgnoringMouseUp;
	    }.bind( this ), 400 );
	  }
	};

	proto.staticClick = function( event, pointer ) {
	  this.emitEvent( 'staticClick', [ event, pointer ] );
	};

	// ----- utils ----- //

	Unidragger.getPointerPoint = Unipointer.getPointerPoint;

	// -----  ----- //

	return Unidragger;

	}));
	});

	var draggabilly = createCommonjsModule(function (module) {
	/*!
	 * Draggabilly v2.3.0
	 * Make that shiz draggable
	 * https://draggabilly.desandro.com
	 * MIT license
	 */

	/* jshint browser: true, strict: true, undef: true, unused: true */

	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define */
	  if ( module.exports ) {
	    // CommonJS
	    module.exports = factory(
	        window,
	        getSize,
	        unidragger
	    );
	  } else {
	    // browser global
	    window.Draggabilly = factory(
	        window,
	        window.getSize,
	        window.Unidragger
	    );
	  }

	}( window, function factory( window, getSize, Unidragger ) {

	// -------------------------- helpers & variables -------------------------- //

	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}

	function noop() {}

	var jQuery = window.jQuery;

	// --------------------------  -------------------------- //

	function Draggabilly( element, options ) {
	  // querySelector if string
	  this.element = typeof element == 'string' ?
	    document.querySelector( element ) : element;

	  if ( jQuery ) {
	    this.$element = jQuery( this.element );
	  }

	  // options
	  this.options = extend( {}, this.constructor.defaults );
	  this.option( options );

	  this._create();
	}

	// inherit Unidragger methods
	var proto = Draggabilly.prototype = Object.create( Unidragger.prototype );

	Draggabilly.defaults = {
	};

	/**
	 * set options
	 * @param {Object} opts
	 */
	proto.option = function( opts ) {
	  extend( this.options, opts );
	};

	// css position values that don't need to be set
	var positionValues = {
	  relative: true,
	  absolute: true,
	  fixed: true,
	};

	proto._create = function() {
	  // properties
	  this.position = {};
	  this._getPosition();

	  this.startPoint = { x: 0, y: 0 };
	  this.dragPoint = { x: 0, y: 0 };

	  this.startPosition = extend( {}, this.position );

	  // set relative positioning
	  var style = getComputedStyle( this.element );
	  if ( !positionValues[ style.position ] ) {
	    this.element.style.position = 'relative';
	  }

	  // events, bridge jQuery events from vanilla
	  this.on( 'pointerMove', this.onPointerMove );
	  this.on( 'pointerUp', this.onPointerUp );

	  this.enable();
	  this.setHandles();
	};

	/**
	 * set this.handles and bind start events to 'em
	 */
	proto.setHandles = function() {
	  this.handles = this.options.handle ?
	    this.element.querySelectorAll( this.options.handle ) : [ this.element ];

	  this.bindHandles();
	};

	/**
	 * emits events via EvEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	proto.dispatchEvent = function( type, event, args ) {
	  var emitArgs = [ event ].concat( args );
	  this.emitEvent( type, emitArgs );
	  this.dispatchJQueryEvent( type, event, args );
	};

	proto.dispatchJQueryEvent = function( type, event, args ) {
	  var jquery = window.jQuery;
	  // trigger jQuery event
	  if ( !jquery || !this.$element ) {
	    return;
	  }
	  // create jQuery event
	  /* eslint-disable-next-line new-cap */
	  var $event = jquery.Event( event );
	  $event.type = type;
	  this.$element.trigger( $event, args );
	};

	// -------------------------- position -------------------------- //

	// get x/y position from style
	proto._getPosition = function() {
	  var style = getComputedStyle( this.element );
	  var x = this._getPositionCoord( style.left, 'width' );
	  var y = this._getPositionCoord( style.top, 'height' );
	  // clean up 'auto' or other non-integer values
	  this.position.x = isNaN( x ) ? 0 : x;
	  this.position.y = isNaN( y ) ? 0 : y;

	  this._addTransformPosition( style );
	};

	proto._getPositionCoord = function( styleSide, measure ) {
	  if ( styleSide.indexOf('%') != -1 ) {
	    // convert percent into pixel for Safari, #75
	    var parentSize = getSize( this.element.parentNode );
	    // prevent not-in-DOM element throwing bug, #131
	    return !parentSize ? 0 :
	      ( parseFloat( styleSide ) / 100 ) * parentSize[ measure ];
	  }
	  return parseInt( styleSide, 10 );
	};

	// add transform: translate( x, y ) to position
	proto._addTransformPosition = function( style ) {
	  var transform = style.transform;
	  // bail out if value is 'none'
	  if ( transform.indexOf('matrix') !== 0 ) {
	    return;
	  }
	  // split matrix(1, 0, 0, 1, x, y)
	  var matrixValues = transform.split(',');
	  // translate X value is in 12th or 4th position
	  var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
	  var translateX = parseInt( matrixValues[ xIndex ], 10 );
	  // translate Y value is in 13th or 5th position
	  var translateY = parseInt( matrixValues[ xIndex + 1 ], 10 );
	  this.position.x += translateX;
	  this.position.y += translateY;
	};

	// -------------------------- events -------------------------- //

	proto.onPointerDown = function( event, pointer ) {
	  this.element.classList.add('is-pointer-down');
	  this.dispatchJQueryEvent( 'pointerDown', event, [ pointer ] );
	};

	proto.pointerDown = function( event, pointer ) {
	  var isOkay = this.okayPointerDown( event );
	  if ( !isOkay || !this.isEnabled ) {
	    this._pointerReset();
	    return;
	  }
	  // track start event position
	  // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
	  this.pointerDownPointer = {
	    pageX: pointer.pageX,
	    pageY: pointer.pageY,
	  };

	  event.preventDefault();
	  this.pointerDownBlur();
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  this.element.classList.add('is-pointer-down');
	  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
	};

	/**
	 * drag start
	 * @param {Event} event
	 * @param {[Event, Touch]} pointer
	 */
	proto.dragStart = function( event, pointer ) {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this._getPosition();
	  this.measureContainment();
	  // position _when_ drag began
	  this.startPosition.x = this.position.x;
	  this.startPosition.y = this.position.y;
	  // reset left/top style
	  this.setLeftTop();

	  this.dragPoint.x = 0;
	  this.dragPoint.y = 0;

	  this.element.classList.add('is-dragging');
	  this.dispatchEvent( 'dragStart', event, [ pointer ] );
	  // start animation
	  this.animate();
	};

	proto.measureContainment = function() {
	  var container = this.getContainer();
	  if ( !container ) {
	    return;
	  }

	  var elemSize = getSize( this.element );
	  var containerSize = getSize( container );
	  var elemRect = this.element.getBoundingClientRect();
	  var containerRect = container.getBoundingClientRect();

	  var borderSizeX = containerSize.borderLeftWidth + containerSize.borderRightWidth;
	  var borderSizeY = containerSize.borderTopWidth + containerSize.borderBottomWidth;

	  var position = this.relativeStartPosition = {
	    x: elemRect.left - ( containerRect.left + containerSize.borderLeftWidth ),
	    y: elemRect.top - ( containerRect.top + containerSize.borderTopWidth ),
	  };

	  this.containSize = {
	    width: ( containerSize.width - borderSizeX ) - position.x - elemSize.width,
	    height: ( containerSize.height - borderSizeY ) - position.y - elemSize.height,
	  };
	};

	proto.getContainer = function() {
	  var containment = this.options.containment;
	  if ( !containment ) {
	    return;
	  }
	  var isElement = containment instanceof HTMLElement;
	  // use as element
	  if ( isElement ) {
	    return containment;
	  }
	  // querySelector if string
	  if ( typeof containment == 'string' ) {
	    return document.querySelector( containment );
	  }
	  // fallback to parent element
	  return this.element.parentNode;
	};

	// ----- move event ----- //

	proto.onPointerMove = function( event, pointer, moveVector ) {
	  this.dispatchJQueryEvent( 'pointerMove', event, [ pointer, moveVector ] );
	};

	/**
	 * drag move
	 * @param {Event} event
	 * @param {[Event, Touch]} pointer
	 * @param {Object} moveVector - x and y coordinates
	 */
	proto.dragMove = function( event, pointer, moveVector ) {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  var dragX = moveVector.x;
	  var dragY = moveVector.y;

	  var grid = this.options.grid;
	  var gridX = grid && grid[0];
	  var gridY = grid && grid[1];

	  dragX = applyGrid( dragX, gridX );
	  dragY = applyGrid( dragY, gridY );

	  dragX = this.containDrag( 'x', dragX, gridX );
	  dragY = this.containDrag( 'y', dragY, gridY );

	  // constrain to axis
	  dragX = this.options.axis == 'y' ? 0 : dragX;
	  dragY = this.options.axis == 'x' ? 0 : dragY;

	  this.position.x = this.startPosition.x + dragX;
	  this.position.y = this.startPosition.y + dragY;
	  // set dragPoint properties
	  this.dragPoint.x = dragX;
	  this.dragPoint.y = dragY;

	  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
	};

	function applyGrid( value, grid, method ) {
	  method = method || 'round';
	  return grid ? Math[ method ]( value/grid ) * grid : value;
	}

	proto.containDrag = function( axis, drag, grid ) {
	  if ( !this.options.containment ) {
	    return drag;
	  }
	  var measure = axis == 'x' ? 'width' : 'height';

	  var rel = this.relativeStartPosition[ axis ];
	  var min = applyGrid( -rel, grid, 'ceil' );
	  var max = this.containSize[ measure ];
	  max = applyGrid( max, grid, 'floor' );
	  return Math.max( min, Math.min( max, drag ) );
	};

	// ----- end event ----- //

	/**
	 * pointer up
	 * @param {Event} event
	 * @param {[Event, Touch]} pointer
	 */
	proto.onPointerUp = function( event, pointer ) {
	  this.element.classList.remove('is-pointer-down');
	  this.dispatchJQueryEvent( 'pointerUp', event, [ pointer ] );
	};

	/**
	 * drag end
	 * @param {Event} event
	 * @param {[Event, Touch]} pointer
	 */
	proto.dragEnd = function( event, pointer ) {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  // use top left position when complete
	  this.element.style.transform = '';
	  this.setLeftTop();
	  this.element.classList.remove('is-dragging');
	  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
	};

	// -------------------------- animation -------------------------- //

	proto.animate = function() {
	  // only render and animate if dragging
	  if ( !this.isDragging ) {
	    return;
	  }

	  this.positionDrag();

	  var _this = this;
	  requestAnimationFrame( function animateFrame() {
	    _this.animate();
	  } );

	};

	// left/top positioning
	proto.setLeftTop = function() {
	  this.element.style.left = this.position.x + 'px';
	  this.element.style.top = this.position.y + 'px';
	};

	proto.positionDrag = function() {
	  this.element.style.transform = 'translate3d( ' + this.dragPoint.x +
	    'px, ' + this.dragPoint.y + 'px, 0)';
	};

	// ----- staticClick ----- //

	proto.staticClick = function( event, pointer ) {
	  this.dispatchEvent( 'staticClick', event, [ pointer ] );
	};

	// ----- methods ----- //

	/**
	 * @param {Number} x
	 * @param {Number} y
	 */
	proto.setPosition = function( x, y ) {
	  this.position.x = x;
	  this.position.y = y;
	  this.setLeftTop();
	};

	proto.enable = function() {
	  this.isEnabled = true;
	};

	proto.disable = function() {
	  this.isEnabled = false;
	  if ( this.isDragging ) {
	    this.dragEnd();
	  }
	};

	proto.destroy = function() {
	  this.disable();
	  // reset styles
	  this.element.style.transform = '';
	  this.element.style.left = '';
	  this.element.style.top = '';
	  this.element.style.position = '';
	  // unbind handles
	  this.unbindHandles();
	  // remove jQuery data
	  if ( this.$element ) {
	    this.$element.removeData('draggabilly');
	  }
	};

	// ----- jQuery bridget ----- //

	// required for jQuery bridget
	proto._init = noop;

	if ( jQuery && jQuery.bridget ) {
	  jQuery.bridget( 'draggabilly', Draggabilly );
	}

	// -----  ----- //

	return Draggabilly;

	} ) );
	});

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	function drag (term, events) {
	  var _term$options = term.options,
	      dragOpt = _term$options.dragOpt,
	      draggable = _term$options.draggable;
	  var $container = term.template.$container;

	  if (draggable) {
	    events.draggie = new draggabilly($container, _objectSpread$2({
	      handle: '.term-header'
	    }, dragOpt));
	    term.on('destroy', function () {
	      events.draggie.destroy();
	    });
	  }
	}

	function input (term, events) {
	  var $textarea = term.template.$textarea;
	  events.proxy($textarea, 'input', function () {
	    term.emit('input', $textarea.value);
	  });
	  events.proxy($textarea, 'paste', function () {
	    term.emit('input', $textarea.value);
	  });
	  term.on('cursor', function (_ref) {
	    var left = _ref.left,
	        top = _ref.top;
	    $textarea.style.top = "".concat(top, "px");
	    $textarea.style.left = "".concat(left, "px");
	  });
	}

	function record (term, events) {
	  var recorder = term.options.recorder;
	  if (!recorder) return;
	  var $recorder = term.template.$recorder;
	  events.proxy($recorder, 'click', function () {
	    if (term.recorder.recording) {
	      term.recorder.end();
	    } else {
	      term.recorder.start();
	    }
	  });
	  term.on('start', function () {
	    $recorder.classList.remove('creating');
	    $recorder.classList.add('recording');
	  });
	  term.on('creating', function () {
	    $recorder.classList.remove('recording');
	    $recorder.classList.add('creating');
	  });
	  term.on('end', function () {
	    $recorder.classList.remove('recording');
	    $recorder.classList.remove('creating');
	  });
	}

	function scroll (term, events) {
	  var _term$template = term.template,
	      $content = _term$template.$content,
	      $scrollbar = _term$template.$scrollbar;
	  var canRenderByTop = false;
	  events.proxy($content, 'scroll', function () {
	    if (canRenderByTop) {
	      term.drawer.renderByTop($content.scrollTop);
	    } else {
	      canRenderByTop = true;
	    }
	  });
	  term.on('scrollTop', function (scrollTop) {
	    if (canRenderByTop) {
	      canRenderByTop = false;
	    } else {
	      $content.scrollTop = scrollTop;
	    }
	  });
	  term.on('scrollHeight', function (scrollHeight) {
	    $scrollbar.style.height = "".concat(scrollHeight, "px");
	  });
	}

	function copy (term, events) {
	  var $copy = term.template.$copy;
	  var lastLine = [];
	  var lastDblclickTime = 0;
	  term.on('click', function () {
	    term.drawer.render(false);

	    if (lastDblclickTime && lastLine.length && Date.now() - lastDblclickTime <= 300) {
	      var _term$drawer = term.drawer,
	          fontSize = _term$drawer.fontSize,
	          ctx = _term$drawer.ctx,
	          contentWidth = _term$drawer.contentWidth,
	          contentPadding = _term$drawer.contentPadding;
	      var _term$options = term.options,
	          background = _term$options.background,
	          color = _term$options.color;
	      var text = lastLine.reduce(function (result, item) {
	        return result + item.text;
	      }, '');
	      ctx.fillStyle = color;
	      ctx.fillRect(contentPadding[3], lastLine[0].top, contentWidth, fontSize);
	      ctx.fillStyle = background;
	      ctx.fillText(text, contentPadding[3], lastLine[0].top);
	      $copy.value = text;
	      $copy.focus();
	      $copy.select();
	    } else {
	      lastLine = [];
	      lastDblclickTime = 0;
	      $copy.value = '';
	    }
	  });
	  term.on('dblclick', function (event) {
	    term.drawer.render(false);

	    var _events$getLogFromEve = events.getLogFromEvent(event),
	        line = _events$getLogFromEve.line,
	        log = _events$getLogFromEve.log;

	    lastLine = [];
	    lastDblclickTime = 0;
	    $copy.value = '';
	    if (!log) return;
	    var _term$drawer2 = term.drawer,
	        ctx = _term$drawer2.ctx,
	        fontSize = _term$drawer2.fontSize;
	    var _term$options2 = term.options,
	        background = _term$options2.background,
	        color = _term$options2.color;
	    lastLine = line;
	    lastDblclickTime = Date.now();
	    ctx.fillStyle = color;
	    ctx.fillRect(log.left, log.top, log.width, fontSize);
	    ctx.fillStyle = background;
	    ctx.fillText(log.text, log.left, log.top);
	    $copy.value = log.text;
	    $copy.focus();
	    $copy.select();
	  });
	  term.on('blur', function () {
	    term.drawer.render(false);
	    lastLine = [];
	    lastDblclickTime = 0;
	    $copy.value = '';
	  });
	}

	var isNativeFunction = createCommonjsModule(function (module) {
	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	module.exports = _isNativeFunction;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(isNativeFunction);

	var isNativeReflectConstruct = createCommonjsModule(function (module) {
	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	module.exports = _isNativeReflectConstruct;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(isNativeReflectConstruct);

	var construct = createCommonjsModule(function (module) {
	function _construct(Parent, args, Class) {
	  if (isNativeReflectConstruct()) {
	    module.exports = _construct = Reflect.construct;
	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  } else {
	    module.exports = _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  }

	  return _construct.apply(null, arguments);
	}

	module.exports = _construct;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(construct);

	var wrapNativeSuper = createCommonjsModule(function (module) {
	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return construct(Class, arguments, getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return setPrototypeOf(Wrapper, Class);
	  };

	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _wrapNativeSuper(Class);
	}

	module.exports = _wrapNativeSuper;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _wrapNativeSuper = unwrapExports(wrapNativeSuper);

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var TermError = /*#__PURE__*/function (_Error) {
	  _inherits(TermError, _Error);

	  var _super = _createSuper$1(TermError);

	  function TermError(message) {
	    var _this;

	    _classCallCheck(this, TermError);

	    _this = _super.call(this, message);
	    _this.name = 'TermError';
	    return _this;
	  }

	  return TermError;
	}( /*#__PURE__*/_wrapNativeSuper(Error));
	function errorHandle(condition, msg) {
	  if (!condition) {
	    throw new TermError(msg);
	  }

	  return condition;
	}
	function clamp(num, a, b) {
	  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
	}
	function download(url, name) {
	  var elink = document.createElement('a');
	  elink.style.display = 'none';
	  elink.href = url;
	  elink.download = name;
	  document.body.appendChild(elink);
	  elink.click();
	  document.body.removeChild(elink);
	}
	function debounce(func, wait, context) {
	  var timeout;
	  return function fn() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var later = function later() {
	      timeout = null;
	      func.apply(context, args);
	    };

	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	  };
	}
	function uuid() {
	  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
	    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
	  });
	}
	function escape(str) {
	  return str.replace(/[&<>'"]/g, function (tag) {
	    return {
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      "'": '&#39;',
	      '"': '&quot;'
	    }[tag] || tag;
	  });
	}
	function unescape(str) {
	  return str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, function (tag) {
	    return {
	      '&amp;': '&',
	      '&lt;': '<',
	      '&gt;': '>',
	      '&#39;': "'",
	      '&quot;': '"'
	    }[tag] || tag;
	  });
	}

	var utils = /*#__PURE__*/Object.freeze({
		__proto__: null,
		TermError: TermError,
		errorHandle: errorHandle,
		clamp: clamp,
		download: download,
		debounce: debounce,
		uuid: uuid,
		escape: escape,
		unescape: unescape
	});

	function fullscreen (term, events) {
	  var _term$template = term.template,
	      $container = _term$template.$container,
	      $header = _term$template.$header;
	  var isFullscreen = false;
	  var debounceResize = debounce(function () {
	    var _document$body$getBou = document.body.getBoundingClientRect(),
	        width = _document$body$getBou.width,
	        height = _document$body$getBou.height;

	    term.emit('resize', {
	      width: width,
	      height: height
	    });
	  }, 100);
	  term.on('fullscreen', function (state) {
	    isFullscreen = state;

	    if (state) {
	      debounceResize();
	      $container.classList.add('is-fullscreen');

	      if (events.draggie) {
	        events.draggie.disable();
	      }
	    } else {
	      $container.classList.remove('is-fullscreen');
	      term.emit('resize', {
	        width: term.options.width,
	        height: term.options.height
	      });

	      if (events.draggie) {
	        events.draggie.enable();
	      }
	    }
	  });
	  events.proxy($header, 'dblclick', function (event) {
	    if (event.target === $header) {
	      term.emit('fullscreen', !isFullscreen);
	    }
	  });
	  events.proxy(window, 'resize', function () {
	    if (isFullscreen) {
	      debounceResize();
	    }
	  });
	}

	var INPUT = 'input';
	var OUTPUT = 'output';
	var RADIO = 'radio';
	var CHECKBOX = 'checkbox';
	var recorderOptions = {
	  videoBitsPerSecond: 5000000,
	  mimeType: 'video/webm'
	};

	function history (term) {
	  var $textarea = term.template.$textarea;
	  var currentIndex = 0;

	  function history(step) {
	    var cacheEmits = term.drawer.cacheEmits;
	    var inputs = cacheEmits.filter(function (item, index) {
	      return item.type === INPUT && item.text.trim() && index !== cacheEmits.length - 1;
	    });
	    var input = inputs[inputs.length + currentIndex + step];

	    if (input) {
	      currentIndex += step;
	      $textarea.value = input.text;
	      term.drawer.emit({
	        type: INPUT,
	        text: input.text,
	        replace: true
	      });
	    }
	  }

	  term.on('enter', function () {
	    currentIndex = 0;
	  });
	  term.on('render', function () {
	    if (term.drawer && !term.drawer.renderEditable) {
	      currentIndex = 0;
	    }
	  });
	  term.on('history', function (step) {
	    history(step);
	  });
	}

	function keydown (term, events) {
	  var $textarea = term.template.$textarea;
	  events.proxy($textarea, 'keydown', function (event) {
	    term.emit('keydown', event);
	    var key = event.keyCode;

	    if (key === 13) {
	      term.emit('enter', $textarea.value);
	      $textarea.value = '';
	    }

	    if (event.ctrlKey && key === 67) {
	      $textarea.value = '';
	      term.input();
	      term.emit('abort');
	    }

	    if ([37, 38, 39, 40].includes(key)) {
	      event.preventDefault();
	    }

	    if (term.drawer.renderEditable) {
	      if (key === 38) {
	        term.emit('history', -1);
	      }

	      if (key === 40) {
	        term.emit('history', 1);
	      }
	    }
	  });
	}

	var Events = /*#__PURE__*/function () {
	  function Events(term) {
	    _classCallCheck(this, Events);

	    this.term = term;
	    this.destroyEvents = [];
	    this.proxy = this.proxy.bind(this);
	    click(term, this);
	    resize(term, this);
	    drag(term, this);
	    input(term, this);
	    record(term, this);
	    scroll(term, this);
	    copy(term, this);
	    fullscreen(term, this);
	    history(term);
	    keydown(term, this);
	  }

	  _createClass(Events, [{
	    key: "getLogFromEvent",
	    value: function getLogFromEvent(event) {
	      var $content = this.term.template.$content;
	      var pixelRatio = this.term.options.pixelRatio;
	      var contentRect = $content.getBoundingClientRect();
	      var left = (event.pageX - contentRect.left) * pixelRatio;
	      var top = (event.pageY - contentRect.top) * pixelRatio;
	      var _this$term$drawer = this.term.drawer,
	          renderLines = _this$term$drawer.renderLines,
	          lineHeight = _this$term$drawer.lineHeight;
	      var index = Math.floor(top / lineHeight);
	      var line = renderLines[index] || [];
	      var log = line.find(function (item) {
	        return left > item.left && item.left + item.width >= left;
	      });
	      return {
	        line: line,
	        log: log
	      };
	    }
	  }, {
	    key: "proxy",
	    value: function proxy(target, name, callback) {
	      var _this = this;

	      var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	      if (Array.isArray(name)) {
	        name.forEach(function (item) {
	          return _this.proxy(target, item, callback, option);
	        });
	      } else {
	        target.addEventListener(name, callback, option);
	        this.destroyEvents.push(function () {
	          target.removeEventListener(name, callback, option);
	        });
	      }
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.destroyEvents.forEach(function (event) {
	        return event();
	      });
	    }
	  }]);

	  return Events;
	}();

	var Template = /*#__PURE__*/function () {
	  function Template(term) {
	    var _this = this;

	    _classCallCheck(this, Template);

	    this.term = term;
	    var _term$options = term.options,
	        container = _term$options.container,
	        pixelRatio = _term$options.pixelRatio,
	        width = _term$options.width,
	        height = _term$options.height,
	        recorder = _term$options.recorder;
	    this.$container = container;

	    if (typeof term.options.container === 'string') {
	      this.$container = document.querySelector(term.options.container);
	    }

	    errorHandle(term.constructor.instances.every(function (ins) {
	      return ins.template.$container !== _this.$container;
	    }), 'Cannot mount multiple instances on the same dom element, please destroy the previous instance first.');
	    this.$container.classList.add('term-container');
	    this.$container.style.width = "".concat(width, "px");
	    this.$container.style.height = "".concat(height, "px");
	    this.$canvas = document.createElement('canvas');
	    this.$canvas.classList.add('term-canvas');
	    this.$canvas.width = width * pixelRatio;
	    this.$canvas.height = height * pixelRatio;
	    this.$container.appendChild(this.$canvas);
	    this.$textarea = document.createElement('textarea');
	    this.$textarea.classList.add('term-textarea');
	    this.$container.appendChild(this.$textarea);
	    this.$copy = document.createElement('textarea');
	    this.$copy.classList.add('term-copy');
	    this.$container.appendChild(this.$copy);
	    this.$header = document.createElement('div');
	    this.$header.classList.add('term-header');
	    this.$container.appendChild(this.$header);
	    this.$content = document.createElement('div');
	    this.$content.classList.add('term-content');
	    this.$container.appendChild(this.$content);
	    this.$scrollbar = document.createElement('div');
	    this.$scrollbar.classList.add('term-scrollbar');
	    this.$scrollbar.style.height = '0';
	    this.$content.appendChild(this.$scrollbar);
	    this.$footer = document.createElement('div');
	    this.$footer.classList.add('term-footer');
	    this.$container.appendChild(this.$footer);
	    this.$resize = document.createElement('div');
	    this.$resize.classList.add('term-resize');
	    this.$footer.appendChild(this.$resize);

	    if (recorder) {
	      this.$recorder = document.createElement('div');
	      this.$recorder.classList.add('term-recorder');
	      this.$header.appendChild(this.$recorder);
	    }
	  }

	  _createClass(Template, [{
	    key: "destroy",
	    value: function destroy() {
	      this.$container.classList.remove('term-container');
	      this.$container.innerHTML = '';
	    }
	  }]);

	  return Template;
	}();

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	module.exports = _arrayLikeToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(arrayLikeToArray);

	var arrayWithoutHoles = createCommonjsModule(function (module) {
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return arrayLikeToArray(arr);
	}

	module.exports = _arrayWithoutHoles;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(arrayWithoutHoles);

	var iterableToArray = createCommonjsModule(function (module) {
	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
	}

	module.exports = _iterableToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(iterableToArray);

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	module.exports = _unsupportedIterableToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(unsupportedIterableToArray);

	var nonIterableSpread = createCommonjsModule(function (module) {
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableSpread;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(nonIterableSpread);

	var toConsumableArray = createCommonjsModule(function (module) {
	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
	}

	module.exports = _toConsumableArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _toConsumableArray = unwrapExports(toConsumableArray);

	var fixTextBaseline = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	  (module.exports = factory())
	    ;
	})(commonjsGlobal, function () {
	  var canvas = document.createElement("canvas");
	  canvas.style.position = "fixed";
	  canvas.style.left = "-999px";
	  canvas.style.top = "-999px";
	  canvas.width = 100;
	  canvas.height = 100;
	  document.body.appendChild(canvas);
	  var ctx = canvas.getContext("2d");
	  ctx.textBaseline = "top";
	  ctx.fillStyle = "rgb(0, 0, 0)";
	  ctx.fillRect(0, 0, 100, 100);
	  ctx.fillStyle = "rgb(255, 255, 255)";
	  ctx.fillText("T", 0, 10);
	  var result = {};
	  for (var f = 1; f <= 100; f++) {
	    ctx.fillStyle = "rgb(0, 0, 0)";
	    ctx.fillRect(0, 0, 100, 100);
	    ctx.fillStyle = "rgb(255, 255, 255)";
	    ctx.font = f + "px Arial";
	    ctx.fillText("T", 0, 10);
	    var x = (5 * f) / 10;
	    for (var y = 0; y < 20; y++) {
	      var color = ctx.getImageData(x, y, 1, 1).data;
	      if (color[0] !== 0 && color[1] !== 0 && color[2] !== 0) {
	        result[f] = y - 10;
	        break;
	      }
	    }
	  }
	  document.body.removeChild(canvas);
	  return function (ctx) {
	    if (typeof ctx !== "object") return ctx;
	    var prototype = Object.getPrototypeOf(ctx);
	    var originalFillText = prototype.fillText;
	    if (typeof originalFillText !== "function") return ctx;
	    ctx.fillText = function () {
	      var y = arguments[2];
	      if (typeof y === "number") {
	        var fontSizeMatch = ctx.font.match(/(\d+)(?:\.\d?)?px/i);
	        if (fontSizeMatch && fontSizeMatch[1]) {
	          var diff = result[fontSizeMatch[1]];
	          if (diff) {
	            arguments[2] = y - diff;
	          }
	        }
	      }
	      return originalFillText.apply(this, arguments);
	    };
	    return ctx;
	  };
	});
	});

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var Drawer = /*#__PURE__*/function () {
	  function Drawer(term) {
	    _classCallCheck(this, Drawer);

	    this.term = term;
	    var _term$options = term.options,
	        pixelRatio = _term$options.pixelRatio,
	        fontSize = _term$options.fontSize;
	    var $canvas = this.term.template.$canvas;
	    this.scrollTop = 0;
	    this.scrollHeight = 0;
	    this.lineGap = 10 * pixelRatio;
	    this.fontSize = fontSize * pixelRatio;
	    this.lineHeight = this.lineGap + this.fontSize;
	    this.controlSize = 6 * pixelRatio;
	    this.controlColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
	    this.renderIndex = -1;
	    this.$watermark = null;
	    this.$tmp = document.createElement('div');
	    this.ctx = fixTextBaseline($canvas.getContext('2d'));
	    this.contentPadding = [45, 15, 15, 15].map(function (item) {
	      return item * pixelRatio;
	    });
	    this.cacheEmits = [];
	    this.cacheLines = [];
	    this.renderLines = [];
	    this.emit = this.emit.bind(this);
	    this.clear = this.clear.bind(this);
	    this.init();
	    this.cursor = false;
	    (function loop() {
	      var _this = this;

	      setTimeout(function () {
	        if (term.isDestroy) return;
	        _this.cursor = !_this.cursor;

	        _this.renderCursor();

	        loop.call(_this);
	      }, 500);
	    }).call(this);
	  }

	  _createClass(Drawer, [{
	    key: "init",
	    value: function init() {
	      var _this$term = this.term,
	          $canvas = _this$term.template.$canvas,
	          _this$term$options = _this$term.options,
	          pixelRatio = _this$term$options.pixelRatio,
	          fontFamily = _this$term$options.fontFamily;
	      this.canvasHeight = $canvas.height;
	      this.canvasWidth = $canvas.width;
	      this.contentHeight = this.canvasHeight - this.contentPadding[0] - this.contentPadding[2];
	      this.contentWidth = this.canvasWidth - this.contentPadding[3] - this.contentPadding[1] / 2;
	      this.maxLength = Math.floor(this.contentHeight / this.lineHeight);
	      this.ctx.textBaseline = 'top';
	      this.ctx.font = "".concat(this.fontSize, "px ").concat(fontFamily);
	      this.term.emit('size', {
	        header: this.contentPadding[0] / pixelRatio,
	        content: this.contentHeight / pixelRatio,
	        footer: this.contentPadding[2] / pixelRatio
	      });
	      this.loadWatermark();
	      this.render();
	    }
	  }, {
	    key: "lastCacheLog",
	    get: function get() {
	      var line = this.cacheLines[this.cacheLines.length - 1];
	      return line && line[line.length - 1];
	    }
	  }, {
	    key: "lastRenderLog",
	    get: function get() {
	      var line = this.renderLines[this.renderLines.length - 1];
	      return line && line[line.length - 1];
	    }
	  }, {
	    key: "cacheEditable",
	    get: function get() {
	      return this.term.isFocus && this.lastCacheLog && this.lastCacheLog.type === INPUT;
	    }
	  }, {
	    key: "renderEditable",
	    get: function get() {
	      return this.cacheEditable && this.lastCacheLog === this.lastRenderLog;
	    }
	  }, {
	    key: "cursorPos",
	    get: function get() {
	      if (this.renderEditable) {
	        var pixelRatio = this.term.options.pixelRatio;
	        var left = this.lastRenderLog.left + this.lastRenderLog.width + pixelRatio * 2;
	        var top = this.contentPadding[0] + this.lineHeight * (this.renderLines.length - 1);
	        return {
	          left: left,
	          top: top
	        };
	      }

	      return {
	        left: 0,
	        top: 0
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var isAutoScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	      if (this.term.isDestroy) return this;
	      this.renderBackground();
	      this.renderTopbar();
	      this.renderContent();

	      if (isAutoScroll) {
	        this.autoScroll();
	      }

	      this.term.emit('render');
	      return this;
	    }
	  }, {
	    key: "renderBackground",
	    value: function renderBackground() {
	      var _this$term$options2 = this.term.options,
	          background = _this$term$options2.background,
	          pixelRatio = _this$term$options2.pixelRatio,
	          debug = _this$term$options2.debug;
	      this.ctx.fillStyle = background;
	      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

	      if (this.$watermark) {
	        var _this$$watermark = this.$watermark,
	            width = _this$$watermark.width,
	            height = _this$$watermark.height;
	        var resizeWidth = width / pixelRatio;
	        var resizeHeight = height / pixelRatio;
	        var left = this.canvasWidth - resizeWidth;
	        var top = this.canvasHeight - resizeHeight;
	        this.ctx.drawImage(this.$watermark, left, top, resizeWidth, resizeHeight);
	      }

	      if (debug) {
	        this.ctx.fillStyle = 'green';
	        this.ctx.fillRect(0, this.contentPadding[0], this.canvasWidth, pixelRatio);
	        this.ctx.fillRect(0, this.contentPadding[0] + this.contentHeight, this.canvasWidth, pixelRatio);
	        this.ctx.fillRect(this.contentPadding[3], 0, pixelRatio, this.canvasHeight);
	        this.ctx.fillRect(this.contentPadding[3] + this.contentWidth, 0, pixelRatio, this.canvasHeight);
	      }
	    }
	  }, {
	    key: "loadWatermark",
	    value: function loadWatermark() {
	      var _this2 = this;

	      var watermark = this.term.options.watermark;

	      if (watermark) {
	        if (!this.$watermark || this.$watermark.src !== watermark) {
	          var $watermark = new Image();

	          $watermark.onload = function () {
	            _this2.$watermark = $watermark;

	            _this2.render(false);
	          };

	          $watermark.src = watermark;
	        }
	      }
	    }
	  }, {
	    key: "renderTopbar",
	    value: function renderTopbar() {
	      var _this3 = this;

	      var _this$term$options3 = this.term.options,
	          title = _this$term$options3.title,
	          color = _this$term$options3.color,
	          pixelRatio = _this$term$options3.pixelRatio;
	      this.ctx.fillStyle = color;

	      var _this$ctx$measureText = this.ctx.measureText(title),
	          width = _this$ctx$measureText.width;

	      this.ctx.fillText(title, this.canvasWidth / 2 - width / 2, this.contentPadding[1] - pixelRatio / 3);
	      this.controlColor.forEach(function (item, index) {
	        _this3.ctx.beginPath();

	        var left = _this3.contentPadding[3] + index * _this3.controlSize * 3.6 + _this3.controlSize;
	        var top = _this3.contentPadding[1] + _this3.controlSize;

	        _this3.ctx.arc(left, top, _this3.controlSize, 0, 360, false);

	        _this3.ctx.fillStyle = item;

	        _this3.ctx.fill();

	        _this3.ctx.closePath();
	      });
	    }
	  }, {
	    key: "renderContent",
	    value: function renderContent() {
	      var _this$term$options4 = this.term.options,
	          pixelRatio = _this$term$options4.pixelRatio,
	          color = _this$term$options4.color,
	          debug = _this$term$options4.debug;

	      if (this.renderLines.length) {
	        for (var i = 0; i < this.renderLines.length; i += 1) {
	          var line = this.renderLines[i];

	          if (line && line.length) {
	            for (var j = 0; j < line.length; j += 1) {
	              var log = line[j];
	              var top = this.contentPadding[0] + this.lineHeight * i;

	              if (debug) {
	                this.ctx.fillStyle = 'red';
	                this.ctx.fillRect(0, top, this.canvasWidth, pixelRatio);
	                this.ctx.fillRect(0, top + this.fontSize, this.canvasWidth, pixelRatio);
	              }

	              log.top = top;

	              if (log.background) {
	                this.ctx.fillStyle = log.background;
	                this.ctx.fillRect(log.left, top, log.width, this.fontSize);
	              }

	              this.ctx.fillStyle = log.color || color;
	              this.ctx.fillText(log.text, log.left, top);

	              if (log.href || log.underline) {
	                this.ctx.fillRect(log.left, top + this.fontSize, log.width, pixelRatio);
	              }

	              if (log.del) {
	                this.ctx.fillRect(log.left, top + Math.ceil(this.fontSize / 2), log.width, pixelRatio);
	              }

	              if (log.border) {
	                this.ctx.fillRect(log.left, top, log.width, pixelRatio);
	                this.ctx.fillRect(log.left, top + this.fontSize - pixelRatio, log.width, pixelRatio);
	                this.ctx.fillRect(log.left, top, pixelRatio, this.fontSize);
	                this.ctx.fillRect(log.left + log.width - pixelRatio, top, pixelRatio, this.fontSize);
	              }
	            }
	          }
	        }
	      }

	      if (this.renderEditable) {
	        var _this$cursorPos = this.cursorPos,
	            left = _this$cursorPos.left,
	            _top = _this$cursorPos.top;
	        this.term.emit('cursor', {
	          left: left / pixelRatio,
	          top: _top / pixelRatio
	        });
	      }

	      this.scrollHeight = this.cacheLines.length * this.lineHeight / pixelRatio;
	      this.term.emit('scrollHeight', this.scrollHeight);
	    }
	  }, {
	    key: "autoScroll",
	    value: function autoScroll() {
	      var pixelRatio = this.term.options.pixelRatio;
	      var lastLine = this.renderLines[this.renderLines.length - 1];
	      var lastIndex = this.cacheLines.indexOf(lastLine);
	      this.scrollTop = ((lastIndex + 1) * this.lineHeight - this.contentHeight) / pixelRatio;
	      this.term.emit('scrollTop', this.scrollTop);
	    }
	  }, {
	    key: "renderByIndex",
	    value: function renderByIndex(index) {
	      if (this.renderIndex === index) return;
	      this.renderIndex = index;
	      this.renderLines = this.cacheLines.slice(index, index + this.maxLength);
	      this.render(false);
	    }
	  }, {
	    key: "renderByTop",
	    value: function renderByTop(top) {
	      var pixelRatio = this.term.options.pixelRatio;
	      var index = Math.ceil(top * pixelRatio / this.lineHeight);
	      this.renderByIndex(index);
	    }
	  }, {
	    key: "renderCursor",
	    value: function renderCursor() {
	      var _this$term$options5 = this.term.options,
	          background = _this$term$options5.background,
	          color = _this$term$options5.color,
	          pixelRatio = _this$term$options5.pixelRatio;
	      var _this$cursorPos2 = this.cursorPos,
	          left = _this$cursorPos2.left,
	          top = _this$cursorPos2.top;

	      if (this.renderEditable && left && top) {
	        this.ctx.fillStyle = this.cursor ? color : background;
	        this.ctx.fillRect(left, top, 5 * pixelRatio, this.fontSize);
	      }
	    }
	  }, {
	    key: "emit",
	    value: function emit(data) {
	      var _this$cacheLines;

	      optionValidator(data, {
	        type: function type(_type) {
	          if (![INPUT, OUTPUT].includes(_type)) {
	            return "The type must be \"".concat(INPUT, "\" or \"").concat(OUTPUT, "\"");
	          }

	          return true;
	        },
	        text: 'string',
	        prefix: 'undefined|string',
	        replace: 'undefined|boolean'
	      });

	      if (data.replace) {
	        this.cacheEmits.pop();
	        var lastLine = this.cacheLines[this.cacheLines.length - 1];

	        if (lastLine && lastLine.groupId) {
	          this.cacheLines = this.cacheLines.filter(function (item) {
	            return item.groupId !== lastLine.groupId;
	          });
	        }
	      }

	      this.cacheEmits.push(_objectSpread$1({}, data));
	      var group = this.parse(data);

	      (_this$cacheLines = this.cacheLines).push.apply(_this$cacheLines, _toConsumableArray(group));

	      this.renderLines = this.cacheLines.slice(-this.maxLength);
	      this.render();
	    }
	  }, {
	    key: "parse",
	    value: function parse(data) {
	      var prefix = this.term.options.prefix;

	      if (data.type === INPUT) {
	        data.text = (data.prefix || prefix) + escape(data.text);
	      }

	      var groupId = uuid();
	      var group = [];
	      var lines = data.text.split(/\r?\n/);
	      var scriptReg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	      var index = 0;
	      var left = this.contentPadding[3];

	      for (var i = 0; i < lines.length; i += 1) {
	        var line = lines[i];
	        this.$tmp.innerHTML = line.replace(scriptReg, '');

	        for (var j = 0; j < this.$tmp.childNodes.length; j += 1) {
	          var child = this.$tmp.childNodes[j];
	          var word = child.textContent;
	          var wordSize = this.ctx.measureText(word).width;
	          var attr = {};

	          if (child.tagName) {
	            attr.color = child.getAttribute('color');
	            attr.background = child.getAttribute('background');
	            attr.href = child.getAttribute('href');
	            attr.border = child.hasAttribute('border');
	            attr.underline = child.hasAttribute('underline');
	            attr.del = child.hasAttribute('del');
	          }

	          var nextWordWidth = left + wordSize;

	          if (nextWordWidth > this.contentWidth) {
	            var textTmp = '';
	            var isNewLine = false;
	            var lastLeft = left;

	            var letters = _toConsumableArray(word);

	            for (var k = 0; k < letters.length; k += 1) {
	              var letter = letters[k];
	              var letterSize = this.ctx.measureText(letter).width;
	              var nextLetterWidth = left + letterSize;

	              if (nextLetterWidth <= this.contentWidth) {
	                textTmp += letter;
	                left = nextLetterWidth;
	              } else {
	                var _log = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, data), attr), {}, {
	                  width: this.ctx.measureText(textTmp).width,
	                  left: isNewLine ? this.contentPadding[3] : lastLeft,
	                  text: textTmp
	                });

	                if (group[index]) {
	                  group[index].push(_log);
	                } else {
	                  group[index] = [_log];
	                  group[index].groupId = groupId;
	                }

	                index += 1;
	                textTmp = letter;
	                isNewLine = true;
	                left = this.contentPadding[3] + letterSize;
	              }
	            }

	            var log = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, data), attr), {}, {
	              width: this.ctx.measureText(textTmp).width,
	              left: isNewLine ? this.contentPadding[3] : lastLeft,
	              text: textTmp
	            });

	            if (group[index]) {
	              group[index].push(log);
	            } else {
	              group[index] = [log];
	              group[index].groupId = groupId;
	            }
	          } else {
	            var _log2 = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, data), attr), {}, {
	              width: wordSize,
	              left: left,
	              text: word
	            });

	            if (group[index]) {
	              group[index].push(_log2);
	            } else {
	              group[index] = [_log2];
	              group[index].groupId = groupId;
	            }

	            left = nextWordWidth;
	          }
	        }

	        index += 1;
	        left = this.contentPadding[3];
	      }

	      return group.filter(Boolean);
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.cacheEmits = [];
	      this.cacheLines = [];
	      this.renderLines = [];
	      this.render();
	    }
	  }]);

	  return Drawer;
	}();

	var _minimist_1_2_5_minimist = function (args, opts) {
	    if (!opts) opts = {};
	    
	    var flags = { bools : {}, strings : {}, unknownFn: null };

	    if (typeof opts['unknown'] === 'function') {
	        flags.unknownFn = opts['unknown'];
	    }

	    if (typeof opts['boolean'] === 'boolean' && opts['boolean']) {
	      flags.allBools = true;
	    } else {
	      [].concat(opts['boolean']).filter(Boolean).forEach(function (key) {
	          flags.bools[key] = true;
	      });
	    }
	    
	    var aliases = {};
	    Object.keys(opts.alias || {}).forEach(function (key) {
	        aliases[key] = [].concat(opts.alias[key]);
	        aliases[key].forEach(function (x) {
	            aliases[x] = [key].concat(aliases[key].filter(function (y) {
	                return x !== y;
	            }));
	        });
	    });

	    [].concat(opts.string).filter(Boolean).forEach(function (key) {
	        flags.strings[key] = true;
	        if (aliases[key]) {
	            flags.strings[aliases[key]] = true;
	        }
	     });

	    var defaults = opts['default'] || {};
	    
	    var argv = { _ : [] };
	    Object.keys(flags.bools).forEach(function (key) {
	        setArg(key, defaults[key] === undefined ? false : defaults[key]);
	    });
	    
	    var notFlags = [];

	    if (args.indexOf('--') !== -1) {
	        notFlags = args.slice(args.indexOf('--')+1);
	        args = args.slice(0, args.indexOf('--'));
	    }

	    function argDefined(key, arg) {
	        return (flags.allBools && /^--[^=]+$/.test(arg)) ||
	            flags.strings[key] || flags.bools[key] || aliases[key];
	    }

	    function setArg (key, val, arg) {
	        if (arg && flags.unknownFn && !argDefined(key, arg)) {
	            if (flags.unknownFn(arg) === false) return;
	        }

	        var value = !flags.strings[key] && isNumber(val)
	            ? Number(val) : val
	        ;
	        setKey(argv, key.split('.'), value);
	        
	        (aliases[key] || []).forEach(function (x) {
	            setKey(argv, x.split('.'), value);
	        });
	    }

	    function setKey (obj, keys, value) {
	        var o = obj;
	        for (var i = 0; i < keys.length-1; i++) {
	            var key = keys[i];
	            if (key === '__proto__') return;
	            if (o[key] === undefined) o[key] = {};
	            if (o[key] === Object.prototype || o[key] === Number.prototype
	                || o[key] === String.prototype) o[key] = {};
	            if (o[key] === Array.prototype) o[key] = [];
	            o = o[key];
	        }

	        var key = keys[keys.length - 1];
	        if (key === '__proto__') return;
	        if (o === Object.prototype || o === Number.prototype
	            || o === String.prototype) o = {};
	        if (o === Array.prototype) o = [];
	        if (o[key] === undefined || flags.bools[key] || typeof o[key] === 'boolean') {
	            o[key] = value;
	        }
	        else if (Array.isArray(o[key])) {
	            o[key].push(value);
	        }
	        else {
	            o[key] = [ o[key], value ];
	        }
	    }
	    
	    function aliasIsBoolean(key) {
	      return aliases[key].some(function (x) {
	          return flags.bools[x];
	      });
	    }

	    for (var i = 0; i < args.length; i++) {
	        var arg = args[i];
	        
	        if (/^--.+=/.test(arg)) {
	            // Using [\s\S] instead of . because js doesn't support the
	            // 'dotall' regex modifier. See:
	            // http://stackoverflow.com/a/1068308/13216
	            var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
	            var key = m[1];
	            var value = m[2];
	            if (flags.bools[key]) {
	                value = value !== 'false';
	            }
	            setArg(key, value, arg);
	        }
	        else if (/^--no-.+/.test(arg)) {
	            var key = arg.match(/^--no-(.+)/)[1];
	            setArg(key, false, arg);
	        }
	        else if (/^--.+/.test(arg)) {
	            var key = arg.match(/^--(.+)/)[1];
	            var next = args[i + 1];
	            if (next !== undefined && !/^-/.test(next)
	            && !flags.bools[key]
	            && !flags.allBools
	            && (aliases[key] ? !aliasIsBoolean(key) : true)) {
	                setArg(key, next, arg);
	                i++;
	            }
	            else if (/^(true|false)$/.test(next)) {
	                setArg(key, next === 'true', arg);
	                i++;
	            }
	            else {
	                setArg(key, flags.strings[key] ? '' : true, arg);
	            }
	        }
	        else if (/^-[^-]+/.test(arg)) {
	            var letters = arg.slice(1,-1).split('');
	            
	            var broken = false;
	            for (var j = 0; j < letters.length; j++) {
	                var next = arg.slice(j+2);
	                
	                if (next === '-') {
	                    setArg(letters[j], next, arg);
	                    continue;
	                }
	                
	                if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {
	                    setArg(letters[j], next.split('=')[1], arg);
	                    broken = true;
	                    break;
	                }
	                
	                if (/[A-Za-z]/.test(letters[j])
	                && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
	                    setArg(letters[j], next, arg);
	                    broken = true;
	                    break;
	                }
	                
	                if (letters[j+1] && letters[j+1].match(/\W/)) {
	                    setArg(letters[j], arg.slice(j+2), arg);
	                    broken = true;
	                    break;
	                }
	                else {
	                    setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);
	                }
	            }
	            
	            var key = arg.slice(-1)[0];
	            if (!broken && key !== '-') {
	                if (args[i+1] && !/^(-|--)[^-]/.test(args[i+1])
	                && !flags.bools[key]
	                && (aliases[key] ? !aliasIsBoolean(key) : true)) {
	                    setArg(key, args[i+1], arg);
	                    i++;
	                }
	                else if (args[i+1] && /^(true|false)$/.test(args[i+1])) {
	                    setArg(key, args[i+1] === 'true', arg);
	                    i++;
	                }
	                else {
	                    setArg(key, flags.strings[key] ? '' : true, arg);
	                }
	            }
	        }
	        else {
	            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
	                argv._.push(
	                    flags.strings['_'] || !isNumber(arg) ? arg : Number(arg)
	                );
	            }
	            if (opts.stopEarly) {
	                argv._.push.apply(argv._, args.slice(i + 1));
	                break;
	            }
	        }
	    }
	    
	    Object.keys(defaults).forEach(function (key) {
	        if (!hasKey(argv, key.split('.'))) {
	            setKey(argv, key.split('.'), defaults[key]);
	            
	            (aliases[key] || []).forEach(function (x) {
	                setKey(argv, x.split('.'), defaults[key]);
	            });
	        }
	    });
	    
	    if (opts['--']) {
	        argv['--'] = new Array();
	        notFlags.forEach(function(key) {
	            argv['--'].push(key);
	        });
	    }
	    else {
	        notFlags.forEach(function(key) {
	            argv._.push(key);
	        });
	    }

	    return argv;
	};

	function hasKey (obj, keys) {
	    var o = obj;
	    keys.slice(0,-1).forEach(function (key) {
	        o = (o[key] || {});
	    });

	    var key = keys[keys.length - 1];
	    return key in o;
	}

	function isNumber (x) {
	    if (typeof x === 'number') return true;
	    if (/^0x[0-9a-f]+$/i.test(x)) return true;
	    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
	}

	var Commander = /*#__PURE__*/function () {
	  function Commander(term) {
	    var _this = this;

	    _classCallCheck(this, Commander);

	    this.term = term;
	    var drawer = term.drawer,
	        welcome = term.options.welcome;
	    this.isTyping = false;
	    this.typeTimer = null;
	    this.askResolve = null;
	    this.type = this.type.bind(this);
	    this.input = this.input.bind(this);
	    this.output = this.output.bind(this);

	    this.ask = function (question) {
	      errorHandle(!_this.isQuestion, 'The last problem has not been solved');
	      return _this.question(question);
	    };

	    this.output(welcome).input();
	    term.on('input', function (text) {
	      if (drawer.cacheEditable) {
	        if (_this.isQuestion) {
	          _this.question(drawer.lastCacheLog.prefix, text);
	        } else {
	          _this.input(text, true);
	        }
	      }
	    });
	    term.on('enter', function (text) {
	      if (drawer.cacheEditable && text.trim()) {
	        if (_this.isQuestion) {
	          _this.askResolve(text);

	          _this.askResolve = null;
	        } else {
	          _this.execute(text);
	        }
	      }
	    });
	    term.on('abort', function () {
	      _this.stopType();
	    });
	  }

	  _createClass(Commander, [{
	    key: "isQuestion",
	    get: function get() {
	      var _this$term$drawer = this.term.drawer,
	          lastCacheLog = _this$term$drawer.lastCacheLog,
	          cacheEditable = _this$term$drawer.cacheEditable;
	      return cacheEditable && lastCacheLog.prefix && typeof this.askResolve === 'function';
	    }
	  }, {
	    key: "execute",
	    value: function execute() {
	      var _this2 = this;

	      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      if (!text.trim()) return this.input();
	      var _this$term$options = this.term.options,
	          parseOpt = _this$term$options.parseOpt,
	          notFound = _this$term$options.notFound,
	          loading = _this$term$options.loading;
	      var action = this.findAction(text);
	      var argv = _minimist_1_2_5_minimist(text.split(' '), parseOpt);

	      if (action) {
	        if (typeof action.output === 'function') {
	          try {
	            var result = action.output.call(this.term, text, argv);
	            var resultType = optionValidator.kindOf(result);

	            if (resultType === 'promise') {
	              var loadingText = loading.call(this.term, text, argv);
	              this.output(loadingText);
	              return result.then(function (data) {
	                if (typeof data !== 'undefined') {
	                  return _this2.output(data, true).input();
	                }

	                return _this2;
	              }).catch(function (error) {
	                var errorType = optionValidator.kindOf(error);
	                var errorText = errorType === 'error' ? "".concat(String(error)) : "Error: ".concat(String(error));
	                var message = "<d color=\"red\">".concat(errorText, "</d>");
	                return _this2.output(message, true).input();
	              });
	            }

	            if (typeof result !== 'undefined') {
	              return this.output(result).input();
	            }

	            return this;
	          } catch (error) {
	            var message = "<d color=\"red\">".concat(String(error), "</d>");
	            return this.output(message).input();
	          }
	        } else {
	          return this.output(action.output).input();
	        }
	      } else {
	        var _result = notFound.call(this.term, text, argv);

	        return this.output(_result).input();
	      }
	    }
	  }, {
	    key: "findAction",
	    value: function findAction(input) {
	      input = input.trim().toLowerCase();
	      var actions = this.term.options.actions;
	      return actions.find(function (item) {
	        var inputType = optionValidator.kindOf(item.input);

	        if (inputType === 'string') {
	          return input === item.input;
	        }

	        if (inputType === 'regexp') {
	          return item.input.test(input);
	        }

	        return null;
	      });
	    }
	  }, {
	    key: "output",
	    value: function output() {
	      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      this.term.drawer.emit({
	        type: OUTPUT,
	        replace: replace,
	        text: String(text)
	      });
	      return this;
	    }
	  }, {
	    key: "input",
	    value: function input() {
	      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      this.term.drawer.emit({
	        type: INPUT,
	        replace: replace,
	        text: String(text).trim()
	      });
	      return this;
	    }
	  }, {
	    key: "question",
	    value: function question() {
	      var _this3 = this;

	      var _question = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      var answer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	      if (this.isQuestion) {
	        return this.term.drawer.emit({
	          type: INPUT,
	          replace: true,
	          prefix: _question,
	          text: answer
	        });
	      }

	      return new Promise(function (resolve) {
	        _this3.askResolve = resolve;

	        _this3.term.drawer.emit({
	          type: INPUT,
	          replace: false,
	          prefix: _question,
	          text: answer
	        });
	      });
	    }
	  }, {
	    key: "type",
	    value: function type() {
	      var _this4 = this;

	      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var isExecute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      if (this.isTyping) return Promise.reject();
	      var $textarea = this.term.template.$textarea;
	      return new Promise(function (resolve) {
	        var letters = _toConsumableArray(text);

	        var lastLetters = '';
	        (function loop() {
	          var _this5 = this;

	          if (!letters.length) {
	            this.isTyping = false;
	            $textarea.value = lastLetters;

	            if (isExecute) {
	              this.execute(lastLetters);
	              $textarea.value = '';
	            }

	            resolve(lastLetters);
	          } else {
	            this.isTyping = true;
	            var letter = letters.shift();
	            lastLetters += letter;
	            this.input(lastLetters, true);
	            this.typeTimer = setTimeout(function () {
	              if (_this5.term.isDestroy) return;
	              loop.call(_this5);
	            }, 100);
	          }
	        }).call(_this4);
	      });
	    }
	  }, {
	    key: "stopType",
	    value: function stopType() {
	      clearTimeout(this.typeTimer);
	    }
	  }]);

	  return Commander;
	}();

	var Recorder = /*#__PURE__*/function () {
	  function Recorder(term) {
	    _classCallCheck(this, Recorder);

	    this.term = term;
	    this.blobs = [];
	  }

	  _createClass(Recorder, [{
	    key: "recording",
	    get: function get() {
	      return this.recorder && this.recorder.state === 'recording';
	    }
	  }, {
	    key: "size",
	    get: function get() {
	      return this.blobs.reduce(function (result, item) {
	        return result + item.size;
	      }, 0);
	    }
	  }, {
	    key: "duration",
	    get: function get() {
	      return this.blobs.length;
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      var _this = this;

	      errorHandle(!this.recording, 'The recorder is recording...');
	      var $canvas = this.term.template.$canvas;
	      this.stream = $canvas.captureStream(30);
	      errorHandle(this.stream, 'Cannot get MediaStream of canvas');
	      errorHandle(MediaRecorder && MediaRecorder.isTypeSupported(recorderOptions.mimeType), 'Does not support recording webm video');
	      this.recorder = new MediaRecorder(this.stream, recorderOptions);

	      this.recorder.ondataavailable = function (event) {
	        if (_this.recording && event.data && event.data.size > 0) {
	          _this.blobs.push(event.data);

	          _this.term.emit('recording', {
	            size: _this.size,
	            duration: _this.duration
	          });
	        }
	      };

	      this.recorder.onstart = function () {
	        _this.term.emit('start');
	      };

	      this.recorder.onstop = function () {
	        var url = URL.createObjectURL(new Blob(_this.blobs));
	        download(url, "".concat(Date.now(), ".webm"));
	        URL.revokeObjectURL(url);
	        _this.blobs = [];

	        _this.term.emit('end');
	      };

	      this.recorder.start(1000);
	    }
	  }, {
	    key: "end",
	    value: function end() {
	      this.term.emit('creating');
	      this.recorder.stop();
	    }
	  }]);

	  return Recorder;
	}();

	var Inquirer = /*#__PURE__*/function () {
	  function Inquirer(term) {
	    var _this = this;

	    _classCallCheck(this, Inquirer);

	    this.term = term;
	    this.color = '#66d9ef';
	    this.radioTip = '(select: Up or Down, confirm: Enter)';
	    this.checkboxTip = '(move: Up or Down, select: Space, confirm: Enter)';
	    this.radioInit = false;
	    this.radioList = [];
	    this.radioKey = null;

	    this.radioResolve = function () {
	      return null;
	    };

	    this.checkboxInit = false;
	    this.checkboxList = [];
	    this.checkboxIndex = 0;
	    this.checkboxKey = [];

	    this.checkboxResolve = function () {
	      return null;
	    };

	    this.radio = function (list) {
	      return _this.render(list, RADIO);
	    };

	    this.checkbox = function (list) {
	      return _this.render(list, CHECKBOX);
	    };

	    term.on('keydown', function (event) {
	      var last = term.drawer.lastCacheLog;

	      if (last.style === RADIO && _this.radioList === last.list) {
	        _this.radioEvent(event);
	      }

	      if (last.style === CHECKBOX && _this.checkboxList === last.list) {
	        _this.checkboxEvent(event);
	      }
	    });
	  }

	  _createClass(Inquirer, [{
	    key: "render",
	    value: function render(list, type) {
	      var _this2 = this;

	      return new Promise(function (resolve) {
	        optionValidator(list, [{
	          key: 'string|number',
	          text: 'string|number'
	        }]);
	        errorHandle(list.length, "".concat(type, " array cannot be empty"));
	        errorHandle(list.map(function (item) {
	          return item.key;
	        }).every(function (item, _, arr) {
	          return arr.indexOf(item) === arr.lastIndexOf(item);
	        }), 'The key value in the array element must be unique');

	        if (type === RADIO) {
	          _this2.radioList = list;
	          _this2.radioKey = list[0].key;
	          _this2.radioResolve = resolve;

	          _this2.radioRender(list, _this2.radioKey);

	          _this2.radioInit = true;
	        }

	        if (type === CHECKBOX) {
	          _this2.checkboxList = list;
	          _this2.checkboxIndex = 0;
	          _this2.checkboxKey = [];
	          _this2.checkboxResolve = resolve;

	          _this2.checkboxRender();

	          _this2.checkboxInit = true;
	        }
	      });
	    }
	  }, {
	    key: "radioRender",
	    value: function radioRender() {
	      var _this3 = this;

	      var text = this.radioList.map(function (item) {
	        return _this3.radioKey === item.key ? "<d color='".concat(_this3.color, "'>=> ").concat(item.text, "</d>") : "   ".concat(item.text);
	      }).join('\n');
	      this.term.drawer.emit({
	        text: "".concat(text, "\n").concat(this.radioTip),
	        list: this.radioList,
	        type: OUTPUT,
	        style: RADIO,
	        replace: this.radioInit
	      });
	    }
	  }, {
	    key: "radioEvent",
	    value: function radioEvent(event) {
	      var _this4 = this;

	      var key = event.keyCode;
	      var index = this.radioList.findIndex(function (item) {
	        return item.key === _this4.radioKey;
	      });

	      if (key === 38) {
	        event.preventDefault();

	        if (index <= 0) {
	          this.radioKey = this.radioList[this.radioList.length - 1].key;
	          this.radioRender();
	        } else {
	          this.radioKey = this.radioList[index - 1].key;
	          this.radioRender();
	        }
	      }

	      if (key === 40) {
	        event.preventDefault();

	        if (index === this.radioList.length - 1) {
	          this.radioKey = this.radioList[0].key;
	          this.radioRender();
	        } else {
	          this.radioKey = this.radioList[index + 1].key;
	          this.radioRender();
	        }
	      }

	      if (key === 13) {
	        this.radioResolve(this.radioKey);
	        this.radioInit = false;
	        this.radioList = [];
	        this.radioKey = null;

	        this.radioResolve = function () {
	          return null;
	        };
	      }
	    }
	  }, {
	    key: "checkboxRender",
	    value: function checkboxRender() {
	      var _this5 = this;

	      var text = this.checkboxList.map(function (item, i) {
	        return i === _this5.checkboxIndex ? "<d color='".concat(_this5.color, "'>").concat(_this5.checkboxKey.includes(item.key) ? '◉' : '〇', " ").concat(item.text, "</d>") : "".concat(_this5.checkboxKey.includes(item.key) ? '◉' : '〇', " ").concat(item.text);
	      }).join('\n');
	      this.term.drawer.emit({
	        text: "".concat(text, "\n").concat(this.checkboxTip),
	        list: this.checkboxList,
	        type: OUTPUT,
	        style: CHECKBOX,
	        replace: this.checkboxInit
	      });
	    }
	  }, {
	    key: "checkboxEvent",
	    value: function checkboxEvent(event) {
	      var key = event.keyCode;

	      if (key === 38) {
	        event.preventDefault();

	        if (this.checkboxIndex <= 0) {
	          this.checkboxIndex = this.checkboxList.length - 1;
	          this.radioKey = this.checkboxList[this.checkboxIndex].key;
	          this.checkboxRender();
	        } else {
	          this.checkboxIndex -= 1;
	          this.radioKey = this.checkboxList[this.checkboxIndex].key;
	          this.checkboxRender();
	        }
	      }

	      if (key === 40) {
	        event.preventDefault();

	        if (this.checkboxIndex === this.checkboxList.length - 1) {
	          this.checkboxIndex = 0;
	          this.checkboxRender();
	        } else {
	          this.checkboxIndex += 1;
	          this.checkboxRender();
	        }
	      }

	      if (key === 32) {
	        var currentKey = this.checkboxList[this.checkboxIndex].key;
	        var currentIndex = this.checkboxKey.indexOf(currentKey);

	        if (currentIndex > -1) {
	          this.checkboxKey.splice(currentIndex, 1);
	        } else {
	          this.checkboxKey.push(currentKey);
	        }

	        this.checkboxRender();
	      }

	      if (key === 13) {
	        this.checkboxResolve(this.checkboxKey);
	        this.checkboxInit = false;
	        this.checkboxList = [];
	        this.checkboxIndex = 0;
	        this.checkboxKey = [];

	        this.checkboxResolve = function () {
	          return null;
	        };
	      }
	    }
	  }]);

	  return Inquirer;
	}();

	function tree (term, list) {
	  var h = '-';
	  var v = '|';
	  var s = ' ';

	  function getString(array) {
	    var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    return array.map(function (item) {
	      var hasChild = item.child && item.child.length;
	      var border = deep ? v : '';
	      var value = "".concat(s.repeat(deep ? deep * 4 - 1 : 0)).concat(v + h.repeat(2), " ").concat(item.value);
	      var child = hasChild ? "\n".concat(getString(item.child, deep + 1)) : '';
	      return border + value + child;
	    }).join('\n');
	  }

	  return term.output(getString(list));
	}

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var id = 0;
	var instances = [];

	var Term = /*#__PURE__*/function (_Emitter) {
	  _inherits(Term, _Emitter);

	  var _super = _createSuper(Term);

	  function Term() {
	    var _this;

	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Term);

	    _this = _super.call(this);
	    _this.options = optionValidator(_objectSpread(_objectSpread({}, Term.default), options), Term.scheme);
	    _this.isDestroy = false;
	    _this.isFocus = false;
	    _this.template = new Template(_assertThisInitialized(_this));
	    _this.events = new Events(_assertThisInitialized(_this));
	    _this.drawer = new Drawer(_assertThisInitialized(_this));
	    _this.commander = new Commander(_assertThisInitialized(_this));
	    _this.inquirer = new Inquirer(_assertThisInitialized(_this));
	    _this.recorder = new Recorder(_assertThisInitialized(_this));
	    _this.ask = _this.commander.ask;
	    _this.type = _this.commander.type;
	    _this.input = _this.commander.input;
	    _this.output = _this.commander.output;
	    _this.clear = _this.drawer.clear;
	    _this.radio = _this.inquirer.radio;
	    _this.checkbox = _this.inquirer.checkbox;

	    _this.tree = function (list) {
	      return tree(_assertThisInitialized(_this), list);
	    };

	    id += 1;
	    _this.id = id;
	    instances.push(_assertThisInitialized(_this));
	    return _this;
	  }

	  _createClass(Term, [{
	    key: "color",
	    get: function get() {
	      return this.options.color;
	    },
	    set: function set(value) {
	      this.options.color = value;
	      this.drawer.init();
	    }
	  }, {
	    key: "background",
	    get: function get() {
	      return this.options.background;
	    },
	    set: function set(value) {
	      this.options.background = value;
	      this.drawer.init();
	    }
	  }, {
	    key: "watermark",
	    get: function get() {
	      return this.options.watermark;
	    },
	    set: function set(value) {
	      this.options.watermark = value;
	      this.drawer.init();
	    }
	  }, {
	    key: "width",
	    get: function get() {
	      return this.template.$container.clientWidth;
	    },
	    set: function set(value) {
	      this.emit('resize', {
	        width: value,
	        height: this.height
	      });
	    }
	  }, {
	    key: "height",
	    get: function get() {
	      return this.template.$container.clientHeight;
	    },
	    set: function set(value) {
	      this.emit('resize', {
	        width: this.width,
	        height: value
	      });
	    }
	  }, {
	    key: "debug",
	    get: function get() {
	      return this.options.debug;
	    },
	    set: function set(value) {
	      this.options.debug = value;
	      this.drawer.init();
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      instances.splice(instances.indexOf(this), 1);
	      this.events.destroy();
	      this.template.destroy();
	      this.isDestroy = true;
	      this.emit('destroy');
	    }
	  }], [{
	    key: "instances",
	    get: function get() {
	      return instances;
	    }
	  }, {
	    key: "version",
	    get: function get() {
	      return '1.1.10';
	    }
	  }, {
	    key: "utils",
	    get: function get() {
	      return utils;
	    }
	  }, {
	    key: "font",
	    value: function font(name, url) {
	      return new Promise(function (resolve, reject) {
	        if (!window.FontFace) {
	          return reject(new Error('FontFace constructor is not supported'));
	        }

	        var fontFace = new FontFace(name, "url(".concat(url, ")"));
	        return fontFace.load().then(function (font) {
	          document.fonts.add(font);
	          resolve(font);
	        });
	      });
	    }
	  }, {
	    key: "default",
	    get: function get() {
	      return {
	        container: '#term',
	        debug: false,
	        width: 600,
	        height: 500,
	        actions: [],
	        parseOpt: {},
	        recorder: true,
	        draggable: true,
	        dragOpt: {},
	        fontSize: 13,
	        watermark: '',
	        autofocus: false,
	        fontFamily: 'monospace',
	        color: '#b0b2b6',
	        title: 'Term Web',
	        prefix: 'root@linux: ~ <d color="#00f501">$</d> ',
	        welcome: "Last login: ".concat(new Date()),
	        loading: function loading() {
	          return '<d color="yellow">Loading...</d>';
	        },
	        background: 'rgb(42, 39, 52)',
	        pixelRatio: window.devicePixelRatio,
	        notFound: function notFound(val) {
	          return "-bash: <d color='red'>".concat(val, "</d>: command not found");
	        }
	      };
	    }
	  }, {
	    key: "scheme",
	    get: function get() {
	      return {
	        container: 'string|htmldivelement',
	        debug: 'boolean',
	        width: 'number',
	        height: 'number',
	        actions: [{
	          input: 'string|regexp',
	          output: 'string|function'
	        }],
	        parseOpt: 'object',
	        recorder: 'boolean',
	        draggable: 'boolean',
	        dragOpt: 'object',
	        fontSize: 'number',
	        watermark: 'string',
	        autofocus: 'boolean',
	        fontFamily: 'string',
	        color: 'string',
	        title: 'string',
	        prefix: 'string',
	        welcome: 'string',
	        loading: 'function',
	        background: 'string',
	        pixelRatio: 'number',
	        notFound: 'function'
	      };
	    }
	  }]);

	  return Term;
	}(Emitter);

	return Term;

})));
//# sourceMappingURL=term-web.js.map
