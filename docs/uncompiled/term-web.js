(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Term = factory());
}(this, (function () { 'use strict';

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

  var defineProperty = _defineProperty;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

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

  var createClass = _createClass;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

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

  var inherits = _inherits;

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

  var css_248z = ".term-container{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;border-radius:5px;-webkit-box-shadow:rgba(0,0,0,.55) 0 20px 68px;box-shadow:0 20px 68px rgba(0,0,0,.55)}.term-container ::-webkit-scrollbar{width:5px}.term-container ::-webkit-scrollbar-thumb{background-color:#666;border-radius:5px}.term-container ::-webkit-scrollbar-thumb:hover{background-color:#ccc}.term-container.is-dragging{opacity:.95}.term-container.is-fullscreen{position:fixed!important;z-index:9999!important;top:0!important;left:0!important;bottom:0!important;right:0!important;width:100%!important;height:100%!important}.term-container .term-canvas{position:absolute;z-index:1;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.term-container .term-textarea{z-index:2}.term-container .term-copy,.term-container .term-textarea{position:absolute;width:20px;height:20px;opacity:0;pointer-events:none;resize:none}.term-container .term-copy{z-index:3}.term-container .term-header{position:absolute;z-index:4;width:100%;top:0;left:0;right:0}.term-container .term-header .term-recorder{position:absolute;right:10px;top:10px;height:18px;width:18px;border-radius:3px;cursor:pointer;border-style:solid;border-width:0;background:#f44336;-webkit-transition:all .2s ease;transition:all .2s ease}@-webkit-keyframes loop{0%{border-width:1px}50%{border-width:6px}to{border-width:1px}}@keyframes loop{0%{border-width:1px}50%{border-width:6px}to{border-width:1px}}.term-container .term-header .term-recorder.recording{background:#ff5722}.term-container .term-header .term-recorder.creating,.term-container .term-header .term-recorder.recording{border-color:rgba(255,254,254,.5);border-radius:50%;-webkit-animation:loop 1s linear infinite;animation:loop 1s linear infinite}.term-container .term-header .term-recorder.creating{background:#009688}.term-container .term-content{position:absolute;z-index:5;width:100%;right:0;left:0;overflow:auto}.term-container .term-content:hover{cursor:text}.term-container .term-footer{position:absolute;z-index:6;width:100%;bottom:0;left:0;right:0}.term-container .term-footer .term-resize{position:absolute;right:0;bottom:0;width:20px;height:20px;cursor:nwse-resize}";
  styleInject(css_248z);

  var optionValidator = createCommonjsModule(function (module, exports) {
  !function(r,t){module.exports=t();}(commonjsGlobal,function(){function e(r){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n=Object.prototype.toString,c=function(r){if(void 0===r)return "undefined";if(null===r)return "null";var t=e(r);if("boolean"===t)return "boolean";if("string"===t)return "string";if("number"===t)return "number";if("symbol"===t)return "symbol";if("function"===t)return function(r){return "GeneratorFunction"===o(r)}(r)?"generatorfunction":"function";if(function(r){return Array.isArray?Array.isArray(r):r instanceof Array}(r))return "array";if(function(r){if(r.constructor&&"function"==typeof r.constructor.isBuffer)return r.constructor.isBuffer(r);return !1}(r))return "buffer";if(function(r){try{if("number"==typeof r.length&&"function"==typeof r.callee)return !0}catch(r){if(-1!==r.message.indexOf("callee"))return !0}return !1}(r))return "arguments";if(function(r){return r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate}(r))return "date";if(function(r){return r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit}(r))return "error";if(function(r){return r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global}(r))return "regexp";switch(o(r)){case"Symbol":return "symbol";case"Promise":return "promise";case"WeakMap":return "weakmap";case"WeakSet":return "weakset";case"Map":return "map";case"Set":return "set";case"Int8Array":return "int8array";case"Uint8Array":return "uint8array";case"Uint8ClampedArray":return "uint8clampedarray";case"Int16Array":return "int16array";case"Uint16Array":return "uint16array";case"Int32Array":return "int32array";case"Uint32Array":return "uint32array";case"Float32Array":return "float32array";case"Float64Array":return "float64array"}if(function(r){return "function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next}(r))return "generator";switch(t=n.call(r)){case"[object Object]":return "object";case"[object Map Iterator]":return "mapiterator";case"[object Set Iterator]":return "setiterator";case"[object String Iterator]":return "stringiterator";case"[object Array Iterator]":return "arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(r){return r.constructor?r.constructor.name:null}function f(r,t){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return s(r,t,e),y(r,t,e),function(a,i,u){var r=c(i),t=c(a);if("object"===r){if("object"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(i).forEach(function(r){var t=a[r],e=i[r],n=u.slice();n.push(r),s(t,e,n),y(t,e,n),f(t,e,n);});}if("array"===r){if("array"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'array' type, but got '").concat(t,"'"));a.forEach(function(r,t){var e=a[t],n=i[t]||i[0],o=u.slice();o.push(t),s(e,n,o),y(e,n,o),f(e,n,o);});}}(r,t,e),r}function s(r,t,e){if("string"===c(t)){var n=c(r);if(!(-1<t.indexOf("|")?t.split("|").map(function(r){return r.toLowerCase().trim()}).filter(Boolean).some(function(r){return n===r}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(e.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function y(r,t,e){if("function"===c(t)){var n=t(r,c(r),e);if(!0!==n){var o=c(n);throw "string"===o?new Error(n):"error"===o?n:new Error("[Validator Error]: The scheme for '".concat(e.join("."),"' validator require return true, but got '").concat(n,"'"))}}}return f.kindOf=c,f});
  });

  var Emitter = /*#__PURE__*/function () {
    function Emitter() {
      classCallCheck(this, Emitter);
    }

    createClass(Emitter, [{
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
    if (  module.exports ) {
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
    if (  module.exports ) {
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
    if (  module.exports ) {
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

    if (  module.exports ) {
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
   * Draggabilly v2.2.0
   * Make that shiz draggable
   * https://draggabilly.desandro.com
   * MIT license
   */

  /*jshint browser: true, strict: true, undef: true, unused: true */

  ( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (  module.exports ) {
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
    fixed: true
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
    this.on( 'pointerDown', this.onPointerDown );
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
    var jQuery = window.jQuery;
    // trigger jQuery event
    if ( !jQuery || !this.$element ) {
      return;
    }
    // create jQuery event
    var $event = jQuery.Event( event );
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

  /**
   * drag start
   * @param {Event} event
   * @param {Event or Touch} pointer
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
      y: elemRect.top - ( containerRect.top + containerSize.borderTopWidth )
    };

    this.containSize = {
      width: ( containerSize.width - borderSizeX ) - position.x - elemSize.width,
      height: ( containerSize.height - borderSizeY ) - position.y - elemSize.height
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
   * @param {Event or Touch} pointer
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
    return grid ? Math[ method ]( value / grid ) * grid : value;
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
    return  Math.max( min, Math.min( max, drag ) );
  };

  // ----- end event ----- //

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.onPointerUp = function( event, pointer ) {
    this.element.classList.remove('is-pointer-down');
    this.dispatchJQueryEvent( 'pointerUp', event, [ pointer ] );
  };

  /**
   * drag end
   * @param {Event} event
   * @param {Event or Touch} pointer
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
    });

  };

  // left/top positioning
  proto.setLeftTop = function() {
    this.element.style.left = this.position.x + 'px';
    this.element.style.top  = this.position.y + 'px';
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

  }));
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function drag (term, events) {
    var _term$options = term.options,
        dragOpt = _term$options.dragOpt,
        draggable = _term$options.draggable;
    var $container = term.template.$container;

    if (draggable) {
      events.draggie = new draggabilly($container, _objectSpread({
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
      term.emit('input', $textarea.value.trim());
    });
    events.proxy($textarea, 'paste', function () {
      term.emit('input', $textarea.value.trim());
    });
    term.on('cursor', function (_ref) {
      var left = _ref.left,
          top = _ref.top;
      $textarea.style.top = "".concat(top, "px");
      $textarea.style.left = "".concat(left, "px");
    });
  }

  function record (term, events) {
    var _term$options = term.options,
        recordType = _term$options.recordType,
        recorder = _term$options.recorder;
    if (!recorder) return;
    var $recorder = term.template.$recorder;
    events.proxy($recorder, 'click', function () {
      if (term[recordType].recording) {
        term[recordType].end();
      } else {
        term[recordType].start();
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
    var lastLogs = [];
    var lastDblclickTime = 0;
    term.on('click', function () {
      term.drawer.render(false);

      if (lastDblclickTime && lastLogs.length && Date.now() - lastDblclickTime <= 300) {
        var _term$drawer = term.drawer,
            fontSize = _term$drawer.fontSize,
            ctx = _term$drawer.ctx,
            contentWidth = _term$drawer.contentWidth,
            contentPadding = _term$drawer.contentPadding;
        var _term$options = term.options,
            background = _term$options.background,
            color = _term$options.color;
        var text = lastLogs.reduce(function (result, item) {
          return result + item.text;
        }, '');
        ctx.fillStyle = color;
        ctx.fillRect(contentPadding[3], lastLogs[0].top, contentWidth, fontSize);
        ctx.fillStyle = background;
        ctx.fillText(text, contentPadding[3], lastLogs[0].top);
        $copy.value = text;
        $copy.focus();
        $copy.select();
      } else {
        lastLogs = [];
        lastDblclickTime = 0;
        $copy.value = '';
      }
    });
    term.on('dblclick', function (event) {
      term.drawer.render(false);

      var _events$getLogFromEve = events.getLogFromEvent(event),
          logs = _events$getLogFromEve.logs,
          log = _events$getLogFromEve.log;

      lastLogs = [];
      lastDblclickTime = 0;
      $copy.value = '';
      if (!log) return;
      var _term$drawer2 = term.drawer,
          ctx = _term$drawer2.ctx,
          fontSize = _term$drawer2.fontSize;
      var _term$options2 = term.options,
          background = _term$options2.background,
          color = _term$options2.color;
      lastLogs = logs;
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
      lastLogs = [];
      lastDblclickTime = 0;
      $copy.value = '';
    });
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

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

  var isNativeReflectConstruct = _isNativeReflectConstruct;

  var construct = createCommonjsModule(function (module) {
  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

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

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  function _createSuper(Derived) { return function () { var Super = getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var TermError = /*#__PURE__*/function (_Error) {
    inherits(TermError, _Error);

    var _super = _createSuper(TermError);

    function TermError(message) {
      var _this;

      classCallCheck(this, TermError);

      _this = _super.call(this, message);
      _this.name = 'TermError';
      return _this;
    }

    return TermError;
  }( /*#__PURE__*/wrapNativeSuper(Error));
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
    events.proxy($header, 'dblclick', function () {
      term.emit('fullscreen', !isFullscreen);
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
        term.emit('enter', $textarea.value.trim());
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
      classCallCheck(this, Events);

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

    createClass(Events, [{
      key: "getLogFromEvent",
      value: function getLogFromEvent(event) {
        var $content = this.term.template.$content;
        var pixelRatio = this.term.options.pixelRatio;
        var contentRect = $content.getBoundingClientRect();
        var left = (event.pageX - contentRect.left) * pixelRatio;
        var top = (event.pageY - contentRect.top) * pixelRatio;
        var _this$term$drawer = this.term.drawer,
            renderLogs = _this$term$drawer.renderLogs,
            lineHeight = _this$term$drawer.lineHeight;
        var index = Math.floor(top / lineHeight);
        var logs = renderLogs[index] || [];
        var log = logs.find(function (item) {
          return left > item.left && item.left + item.width >= left;
        });
        return {
          logs: logs,
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

      classCallCheck(this, Template);

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

    createClass(Template, [{
      key: "destroy",
      value: function destroy() {
        this.$container.classList.remove('term-container');
        this.$container.innerHTML = '';
      }
    }]);

    return Template;
  }();

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  var arrayLikeToArray = _arrayLikeToArray;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  var unsupportedIterableToArray = _unsupportedIterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

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

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var Drawer = /*#__PURE__*/function () {
    function Drawer(term) {
      classCallCheck(this, Drawer);

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
      this.cacheLogs = [];
      this.renderLogs = [];
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

    createClass(Drawer, [{
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
        this.contentWidth = this.canvasWidth - this.contentPadding[3] - this.contentPadding[1];
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
        this.controlColor.forEach(function (color, index) {
          _this3.ctx.beginPath();

          var left = _this3.contentPadding[3] + index * _this3.controlSize * 3.6 + _this3.controlSize;
          var top = _this3.contentPadding[1] + _this3.controlSize;

          _this3.ctx.arc(left, top, _this3.controlSize, 0, 360, false);

          _this3.ctx.fillStyle = color;

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

        if (this.renderLogs.length) {
          for (var i = 0; i < this.renderLogs.length; i += 1) {
            var logs = this.renderLogs[i];

            if (logs && logs.length) {
              for (var j = 0; j < logs.length; j += 1) {
                var log = logs[j];
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

        this.scrollHeight = this.cacheLogs.length * this.lineHeight / pixelRatio;
        this.term.emit('scrollHeight', this.scrollHeight);
      }
    }, {
      key: "autoScroll",
      value: function autoScroll() {
        var pixelRatio = this.term.options.pixelRatio;
        var lastlogs = this.renderLogs[this.renderLogs.length - 1];
        var lastIndex = this.cacheLogs.indexOf(lastlogs);
        this.scrollTop = ((lastIndex + 1) * this.lineHeight - this.contentHeight) / pixelRatio;
        this.term.emit('scrollTop', this.scrollTop);
      }
    }, {
      key: "renderByIndex",
      value: function renderByIndex(index) {
        if (this.renderIndex === index) return;
        this.renderIndex = index;
        this.renderLogs = this.cacheLogs.slice(index, index + this.maxLength);
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
        var _this$cacheLogs;

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
          var lastLogs = this.cacheLogs[this.cacheLogs.length - 1];

          if (lastLogs && lastLogs.group) {
            this.cacheLogs = this.cacheLogs.filter(function (item) {
              return item.group !== lastLogs.group;
            });
          }
        }

        this.cacheEmits.push(_objectSpread$1({}, data));
        var logs = this.parse(data);

        (_this$cacheLogs = this.cacheLogs).push.apply(_this$cacheLogs, toConsumableArray(logs));

        this.renderLogs = this.cacheLogs.slice(-this.maxLength);
        this.render();
      }
    }, {
      key: "parse",
      value: function parse(data) {
        var prefix = this.term.options.prefix;

        if (data.type === INPUT) {
          data.text = (data.prefix || prefix) + escape(data.text);
        }

        var group = uuid();
        var result = [];
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

              var letters = toConsumableArray(word);

              for (var k = 0; k < letters.length; k += 1) {
                var letter = letters[k];
                var letterSize = this.ctx.measureText(letter).width;
                var nextLetterWidth = left + letterSize;

                if (nextLetterWidth <= this.contentWidth) {
                  textTmp += letter;
                  left = nextLetterWidth;
                } else {
                  var _log = _objectSpread$1({}, data, {}, attr, {
                    width: this.ctx.measureText(textTmp).width,
                    left: isNewLine ? this.contentPadding[3] : lastLeft,
                    text: textTmp
                  });

                  if (result[index]) {
                    result[index].push(_log);
                  } else {
                    result[index] = [_log];
                    result[index].group = group;
                  }

                  index += 1;
                  textTmp = letter;
                  isNewLine = true;
                  left = this.contentPadding[3] + letterSize;
                }
              }

              var log = _objectSpread$1({}, data, {}, attr, {
                width: this.ctx.measureText(textTmp).width,
                left: this.contentPadding[3],
                text: textTmp
              });

              if (result[index]) {
                result[index].push(log);
              } else {
                result[index] = [log];
                result[index].group = group;
              }
            } else {
              var _log2 = _objectSpread$1({}, data, {}, attr, {
                width: wordSize,
                left: left,
                text: word
              });

              if (result[index]) {
                result[index].push(_log2);
              } else {
                result[index] = [_log2];
                result[index].group = group;
              }

              left = nextWordWidth;
            }
          }

          index += 1;
          left = this.contentPadding[3];
        }

        return result.filter(Boolean);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.cacheEmits = [];
        this.cacheLogs = [];
        this.renderLogs = [];
        this.render();
      }
    }, {
      key: "lastCacheLog",
      get: function get() {
        var logs = this.cacheLogs[this.cacheLogs.length - 1];
        return logs && logs[logs.length - 1];
      }
    }, {
      key: "lastRenderLog",
      get: function get() {
        var logs = this.renderLogs[this.renderLogs.length - 1];
        return logs && logs[logs.length - 1];
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
          var top = this.contentPadding[0] + this.lineHeight * (this.renderLogs.length - 1);
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

      classCallCheck(this, Commander);

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

    createClass(Commander, [{
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
          text: String(text)
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
          var letters = toConsumableArray(text);

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
    }, {
      key: "isQuestion",
      get: function get() {
        var _this$term$drawer = this.term.drawer,
            lastCacheLog = _this$term$drawer.lastCacheLog,
            cacheEditable = _this$term$drawer.cacheEditable;
        return cacheEditable && lastCacheLog.prefix && typeof this.askResolve === 'function';
      }
    }]);

    return Commander;
  }();

  var VideoRecorder = /*#__PURE__*/function () {
    function VideoRecorder(term) {
      classCallCheck(this, VideoRecorder);

      this.term = term;
      this.blobs = [];
    }

    createClass(VideoRecorder, [{
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
    }, {
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
    }]);

    return VideoRecorder;
  }();

  var gifshot = createCommonjsModule(function (module, exports) {
  (function(window, document, navigator, undefined$1) {

  /*
    utils.js
    ========
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  var utils = {
      URL: window.URL || window.webkitURL || window.mozURL || window.msURL,
      getUserMedia: function () {
          var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

          return getUserMedia ? getUserMedia.bind(navigator) : getUserMedia;
      }(),
      requestAnimFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
      requestTimeout: function requestTimeout(callback, delay) {
          callback = callback || utils.noop;
          delay = delay || 0;

          if (!utils.requestAnimFrame) {
              return setTimeout(callback, delay);
          }

          var start = new Date().getTime();
          var handle = new Object();
          var requestAnimFrame = utils.requestAnimFrame;

          var loop = function loop() {
              var current = new Date().getTime();
              var delta = current - start;

              delta >= delay ? callback.call() : handle.value = requestAnimFrame(loop);
          };

          handle.value = requestAnimFrame(loop);

          return handle;
      },
      Blob: window.Blob || window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
      btoa: function () {
          var btoa = window.btoa || function (input) {
              var output = '';
              var i = 0;
              var l = input.length;
              var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
              var chr1 = void 0;
              var chr2 = void 0;
              var chr3 = void 0;
              var enc1 = void 0;
              var enc2 = void 0;
              var enc3 = void 0;
              var enc4 = void 0;

              while (i < l) {
                  chr1 = input.charCodeAt(i++);
                  chr2 = input.charCodeAt(i++);
                  chr3 = input.charCodeAt(i++);
                  enc1 = chr1 >> 2;
                  enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                  enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                  enc4 = chr3 & 63;

                  if (isNaN(chr2)) {
                      enc3 = enc4 = 64;
                  } else if (isNaN(chr3)) {
                      enc4 = 64;
                  }

                  output = output + key.charAt(enc1) + key.charAt(enc2) + key.charAt(enc3) + key.charAt(enc4);
              }

              return output;
          };

          return btoa ? btoa.bind(window) : utils.noop;
      }(),
      isObject: function isObject(obj) {
          return obj && Object.prototype.toString.call(obj) === '[object Object]';
      },
      isEmptyObject: function isEmptyObject(obj) {
          return utils.isObject(obj) && !Object.keys(obj).length;
      },
      isArray: function isArray(arr) {
          return arr && Array.isArray(arr);
      },
      isFunction: function isFunction(func) {
          return func && typeof func === 'function';
      },
      isElement: function isElement(elem) {
          return elem && elem.nodeType === 1;
      },
      isString: function isString(value) {
          return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
      },
      isSupported: {
          canvas: function canvas() {
              var el = document.createElement('canvas');

              return el && el.getContext && el.getContext('2d');
          },
          webworkers: function webworkers() {
              return window.Worker;
          },
          blob: function blob() {
              return utils.Blob;
          },
          Uint8Array: function Uint8Array() {
              return window.Uint8Array;
          },
          Uint32Array: function Uint32Array() {
              return window.Uint32Array;
          },
          videoCodecs: function () {
              var testEl = document.createElement('video');
              var supportObj = {
                  'mp4': false,
                  'h264': false,
                  'ogv': false,
                  'ogg': false,
                  'webm': false
              };

              try {
                  if (testEl && testEl.canPlayType) {
                      // Check for MPEG-4 support
                      supportObj.mp4 = testEl.canPlayType('video/mp4; codecs="mp4v.20.8"') !== '';

                      // Check for h264 support
                      supportObj.h264 = (testEl.canPlayType('video/mp4; codecs="avc1.42E01E"') || testEl.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) !== '';

                      // Check for Ogv support
                      supportObj.ogv = testEl.canPlayType('video/ogg; codecs="theora"') !== '';

                      // Check for Ogg support
                      supportObj.ogg = testEl.canPlayType('video/ogg; codecs="theora"') !== '';

                      // Check for Webm support
                      supportObj.webm = testEl.canPlayType('video/webm; codecs="vp8, vorbis"') !== -1;
                  }
              } catch (e) {}

              return supportObj;
          }()
      },
      noop: function noop() {},
      each: function each(collection, callback) {
          var x = void 0;
          var len = void 0;

          if (utils.isArray(collection)) {
              x = -1;
              len = collection.length;

              while (++x < len) {
                  if (callback(x, collection[x]) === false) {
                      break;
                  }
              }
          } else if (utils.isObject(collection)) {
              for (x in collection) {
                  if (collection.hasOwnProperty(x)) {
                      if (callback(x, collection[x]) === false) {
                          break;
                      }
                  }
              }
          }
      },
      mergeOptions: function mergeOptions(defaultOptions, userOptions) {
          if (!utils.isObject(defaultOptions) || !utils.isObject(userOptions) || !Object.keys) {
              return;
          }

          var newObj = {};

          utils.each(defaultOptions, function (key, val) {
              newObj[key] = defaultOptions[key];
          });

          utils.each(userOptions, function (key, val) {
              var currentUserOption = userOptions[key];

              if (!utils.isObject(currentUserOption)) {
                  newObj[key] = currentUserOption;
              } else {
                  if (!defaultOptions[key]) {
                      newObj[key] = currentUserOption;
                  } else {
                      newObj[key] = utils.mergeOptions(defaultOptions[key], currentUserOption);
                  }
              }
          });

          return newObj;
      },
      setCSSAttr: function setCSSAttr(elem, attr, val) {
          if (!utils.isElement(elem)) {
              return;
          }

          if (utils.isString(attr) && utils.isString(val)) {
              elem.style[attr] = val;
          } else if (utils.isObject(attr)) {
              utils.each(attr, function (key, val) {
                  elem.style[key] = val;
              });
          }
      },
      removeElement: function removeElement(node) {
          if (!utils.isElement(node)) {
              return;
          }
          if (node.parentNode) {
              node.parentNode.removeChild(node);
          }
      },
      createWebWorker: function createWebWorker(content) {
          if (!utils.isString(content)) {
              return {};
          }

          try {
              var blob = new utils.Blob([content], {
                  'type': 'text/javascript'
              });
              var objectUrl = utils.URL.createObjectURL(blob);
              var worker = new Worker(objectUrl);

              return {
                  'objectUrl': objectUrl,
                  'worker': worker
              };
          } catch (e) {
              return '' + e;
          }
      },
      getExtension: function getExtension(src) {
          return src.substr(src.lastIndexOf('.') + 1, src.length);
      },
      getFontSize: function getFontSize() {
          var options = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};

          if (!document.body || options.resizeFont === false) {
              return options.fontSize;
          }

          var text = options.text;
          var containerWidth = options.gifWidth;
          var fontSize = parseInt(options.fontSize, 10);
          var minFontSize = parseInt(options.minFontSize, 10);
          var div = document.createElement('div');
          var span = document.createElement('span');

          div.setAttribute('width', containerWidth);
          div.appendChild(span);

          span.innerHTML = text;
          span.style.fontSize = fontSize + 'px';
          span.style.textIndent = '-9999px';
          span.style.visibility = 'hidden';

          document.body.appendChild(span);

          while (span.offsetWidth > containerWidth && fontSize >= minFontSize) {
              span.style.fontSize = --fontSize + 'px';
          }

          document.body.removeChild(span);

          return fontSize + 'px';
      },
      webWorkerError: false
  };



  var utils$2 = Object.freeze({
  	default: utils
  });

  /*
    error.js
    ========
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  var error = {
      validate: function validate(skipObj) {
          skipObj = utils.isObject(skipObj) ? skipObj : {};

          var errorObj = {};

          utils.each(error.validators, function (indece, currentValidator) {
              var errorCode = currentValidator.errorCode;

              if (!skipObj[errorCode] && !currentValidator.condition) {
                  errorObj = currentValidator;
                  errorObj.error = true;

                  return false;
              }
          });

          delete errorObj.condition;

          return errorObj;
      },
      isValid: function isValid(skipObj) {
          var errorObj = error.validate(skipObj);
          var isValid = errorObj.error !== true ? true : false;

          return isValid;
      },
      validators: [{
          condition: utils.isFunction(utils.getUserMedia),
          errorCode: 'getUserMedia',
          errorMsg: 'The getUserMedia API is not supported in your browser'
      }, {
          condition: utils.isSupported.canvas(),
          errorCode: 'canvas',
          errorMsg: 'Canvas elements are not supported in your browser'
      }, {
          condition: utils.isSupported.webworkers(),
          errorCode: 'webworkers',
          errorMsg: 'The Web Workers API is not supported in your browser'
      }, {
          condition: utils.isFunction(utils.URL),
          errorCode: 'window.URL',
          errorMsg: 'The window.URL API is not supported in your browser'
      }, {
          condition: utils.isSupported.blob(),
          errorCode: 'window.Blob',
          errorMsg: 'The window.Blob File API is not supported in your browser'
      }, {
          condition: utils.isSupported.Uint8Array(),
          errorCode: 'window.Uint8Array',
          errorMsg: 'The window.Uint8Array function constructor is not supported in your browser'
      }, {
          condition: utils.isSupported.Uint32Array(),
          errorCode: 'window.Uint32Array',
          errorMsg: 'The window.Uint32Array function constructor is not supported in your browser'
      }],
      messages: {
          videoCodecs: {
              errorCode: 'videocodec',
              errorMsg: 'The video codec you are trying to use is not supported in your browser'
          }
      }
  };



  var error$2 = Object.freeze({
  	default: error
  });

  /*
    defaultOptions.js
    =================
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Helpers
  var noop = function noop() {};

  var defaultOptions = {
      sampleInterval: 10,
      numWorkers: 2,
      filter: '',
      gifWidth: 200,
      gifHeight: 200,
      interval: 0.1,
      numFrames: 10,
      frameDuration: 1,
      keepCameraOn: false,
      images: [],
      video: null,
      webcamVideoElement: null,
      cameraStream: null,
      text: '',
      fontWeight: 'normal',
      fontSize: '16px',
      minFontSize: '10px',
      resizeFont: false,
      fontFamily: 'sans-serif',
      fontColor: '#ffffff',
      textAlign: 'center',
      textBaseline: 'bottom',
      textXCoordinate: null,
      textYCoordinate: null,
      progressCallback: noop,
      completeCallback: noop,
      saveRenderingContexts: false,
      savedRenderingContexts: [],
      crossOrigin: 'Anonymous'
  };



  var defaultOptions$2 = Object.freeze({
  	default: defaultOptions
  });

  /*
    isSupported.js
    ==============
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  function isSupported() {
    return error.isValid();
  }

  /*
    isWebCamGIFSupported.js
    =======================
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  function isWebCamGIFSupported() {
    return error.isValid();
  }

  /*
    isSupported.js
    ==============
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  function isSupported$1() {
      var options = {
          getUserMedia: true
      };

      return error.isValid(options);
  }

  /*
    isExistingVideoGIFSupported.js
    ==============================
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  function isExistingVideoGIFSupported(codecs) {
      var hasValidCodec = false;

      if (utils.isArray(codecs) && codecs.length) {
          utils.each(codecs, function (indece, currentCodec) {
              if (utils.isSupported.videoCodecs[currentCodec]) {
                  hasValidCodec = true;
              }
          });

          if (!hasValidCodec) {
              return false;
          }
      } else if (utils.isString(codecs) && codecs.length) {
          if (!utils.isSupported.videoCodecs[codecs]) {
              return false;
          }
      }

      return error.isValid({
          'getUserMedia': true
      });
  }

  /*
    NeuQuant.js
    ===========
  */

  /*
   * NeuQuant Neural-Net Quantization Algorithm
   * ------------------------------------------
   *
   * Copyright (c) 1994 Anthony Dekker
   *
   * NEUQUANT Neural-Net quantization algorithm by Anthony Dekker, 1994. See
   * "Kohonen neural networks for optimal colour quantization" in "Network:
   * Computation in Neural Systems" Vol. 5 (1994) pp 351-367. for a discussion of
   * the algorithm.
   *
   * Any party obtaining a copy of these files from the author, directly or
   * indirectly, is granted, free of charge, a full and unrestricted irrevocable,
   * world-wide, paid up, royalty-free, nonexclusive right and license to deal in
   * this software and documentation files (the "Software"), including without
   * limitation the rights to use, copy, modify, merge, publish, distribute,
   * sublicense, and/or sell copies of the Software, and to permit persons who
   * receive copies from any such party to do so, with the only requirement being
   * that this copyright notice remain intact.
   */

  /*
   * This class handles Neural-Net quantization algorithm
   * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
   * @author Thibault Imbert (AS3 version - bytearray.org)
   * @version 0.1 AS3 implementation
   * @version 0.2 JS->AS3 "translation" by antimatter15
   * @version 0.3 JS clean up + using modern JS idioms by sole - http://soledadpenades.com
   * Also implement fix in color conversion described at http://stackoverflow.com/questions/16371712/neuquant-js-javascript-color-quantization-hidden-bug-in-js-conversion
   */

  function NeuQuant() {
    var netsize = 256; // number of colours used

    // four primes near 500 - assume no image has a length so large
    // that it is divisible by all four primes
    var prime1 = 499;
    var prime2 = 491;
    var prime3 = 487;
    var prime4 = 503;

    // minimum size for input image
    var minpicturebytes = 3 * prime4;

    // Network Definitions

    var maxnetpos = netsize - 1;
    var netbiasshift = 4; // bias for colour values
    var ncycles = 100; // no. of learning cycles

    // defs for freq and bias
    var intbiasshift = 16; // bias for fractions
    var intbias = 1 << intbiasshift;
    var gammashift = 10; // gamma = 1024
    var betashift = 10;
    var beta = intbias >> betashift; // beta = 1/1024
    var betagamma = intbias << gammashift - betashift;

    // defs for decreasing radius factor
    // For 256 colors, radius starts at 32.0 biased by 6 bits
    // and decreases by a factor of 1/30 each cycle
    var initrad = netsize >> 3;
    var radiusbiasshift = 6;
    var radiusbias = 1 << radiusbiasshift;
    var initradius = initrad * radiusbias;
    var radiusdec = 30;

    // defs for decreasing alpha factor
    // Alpha starts at 1.0 biased by 10 bits
    var alphabiasshift = 10;
    var initalpha = 1 << alphabiasshift;
    var alphadec;

    // radbias and alpharadbias used for radpower calculation
    var radbiasshift = 8;
    var radbias = 1 << radbiasshift;
    var alpharadbshift = alphabiasshift + radbiasshift;
    var alpharadbias = 1 << alpharadbshift;

    // Input image
    var thepicture;
    // Height * Width * 3
    var lengthcount;
    // Sampling factor 1..30
    var samplefac;

    // The network itself
    var network;
    var netindex = [];

    // for network lookup - really 256
    var bias = [];

    // bias and freq arrays for learning
    var freq = [];
    var radpower = [];

    function NeuQuantConstructor(thepic, len, sample) {

      var i;
      var p;

      thepicture = thepic;
      lengthcount = len;
      samplefac = sample;

      network = new Array(netsize);

      for (i = 0; i < netsize; i++) {
        network[i] = new Array(4);
        p = network[i];
        p[0] = p[1] = p[2] = (i << netbiasshift + 8) / netsize | 0;
        freq[i] = intbias / netsize | 0; // 1 / netsize
        bias[i] = 0;
      }
    }

    function colorMap() {
      var map = [];
      var index = new Array(netsize);
      for (var i = 0; i < netsize; i++) {
        index[network[i][3]] = i;
      }var k = 0;
      for (var l = 0; l < netsize; l++) {
        var j = index[l];
        map[k++] = network[j][0];
        map[k++] = network[j][1];
        map[k++] = network[j][2];
      }
      return map;
    }

    // Insertion sort of network and building of netindex[0..255]
    // (to do after unbias)
    function inxbuild() {
      var i;
      var j;
      var smallpos;
      var smallval;
      var p;
      var q;
      var previouscol;
      var startpos;

      previouscol = 0;
      startpos = 0;

      for (i = 0; i < netsize; i++) {

        p = network[i];
        smallpos = i;
        smallval = p[1]; // index on g
        // find smallest in i..netsize-1
        for (j = i + 1; j < netsize; j++) {

          q = network[j];

          if (q[1] < smallval) {
            // index on g
            smallpos = j;
            smallval = q[1]; // index on g
          }
        }

        q = network[smallpos];

        // swap p (i) and q (smallpos) entries
        if (i != smallpos) {
          j = q[0];
          q[0] = p[0];
          p[0] = j;
          j = q[1];
          q[1] = p[1];
          p[1] = j;
          j = q[2];
          q[2] = p[2];
          p[2] = j;
          j = q[3];
          q[3] = p[3];
          p[3] = j;
        }

        // smallval entry is now in position i
        if (smallval != previouscol) {

          netindex[previouscol] = startpos + i >> 1;

          for (j = previouscol + 1; j < smallval; j++) {
            netindex[j] = i;
          }

          previouscol = smallval;
          startpos = i;
        }
      }

      netindex[previouscol] = startpos + maxnetpos >> 1;
      for (j = previouscol + 1; j < 256; j++) {
        netindex[j] = maxnetpos; // really 256
      }
    }

    // Main Learning Loop

    function learn() {
      var i;
      var j;
      var b;
      var g;
      var r;
      var radius;
      var rad;
      var alpha;
      var step;
      var delta;
      var samplepixels;
      var p;
      var pix;
      var lim;

      if (lengthcount < minpicturebytes) {
        samplefac = 1;
      }

      alphadec = 30 + (samplefac - 1) / 3;
      p = thepicture;
      pix = 0;
      lim = lengthcount;
      samplepixels = lengthcount / (3 * samplefac);
      delta = samplepixels / ncycles | 0;
      alpha = initalpha;
      radius = initradius;

      rad = radius >> radiusbiasshift;
      if (rad <= 1) {
        rad = 0;
      }

      for (i = 0; i < rad; i++) {
        radpower[i] = alpha * ((rad * rad - i * i) * radbias / (rad * rad));
      }

      if (lengthcount < minpicturebytes) {
        step = 3;
      } else if (lengthcount % prime1 !== 0) {
        step = 3 * prime1;
      } else {

        if (lengthcount % prime2 !== 0) {
          step = 3 * prime2;
        } else {
          if (lengthcount % prime3 !== 0) {
            step = 3 * prime3;
          } else {
            step = 3 * prime4;
          }
        }
      }

      i = 0;

      while (i < samplepixels) {

        b = (p[pix + 0] & 0xff) << netbiasshift;
        g = (p[pix + 1] & 0xff) << netbiasshift;
        r = (p[pix + 2] & 0xff) << netbiasshift;
        j = contest(b, g, r);

        altersingle(alpha, j, b, g, r);

        if (rad !== 0) {
          // Alter neighbours
          alterneigh(rad, j, b, g, r);
        }

        pix += step;

        if (pix >= lim) {
          pix -= lengthcount;
        }

        i++;

        if (delta === 0) {
          delta = 1;
        }

        if (i % delta === 0) {
          alpha -= alpha / alphadec;
          radius -= radius / radiusdec;
          rad = radius >> radiusbiasshift;

          if (rad <= 1) {
            rad = 0;
          }

          for (j = 0; j < rad; j++) {
            radpower[j] = alpha * ((rad * rad - j * j) * radbias / (rad * rad));
          }
        }
      }
    }

    // Search for BGR values 0..255 (after net is unbiased) and return colour index
    function map(b, g, r) {
      var i;
      var j;
      var dist;
      var a;
      var bestd;
      var p;
      var best;

      // Biggest possible distance is 256 * 3
      bestd = 1000;
      best = -1;
      i = netindex[g]; // index on g
      j = i - 1; // start at netindex[g] and work outwards

      while (i < netsize || j >= 0) {

        if (i < netsize) {

          p = network[i];

          dist = p[1] - g; // inx key

          if (dist >= bestd) {
            i = netsize; // stop iter
          } else {

            i++;

            if (dist < 0) {
              dist = -dist;
            }

            a = p[0] - b;

            if (a < 0) {
              a = -a;
            }

            dist += a;

            if (dist < bestd) {
              a = p[2] - r;

              if (a < 0) {
                a = -a;
              }

              dist += a;

              if (dist < bestd) {
                bestd = dist;
                best = p[3];
              }
            }
          }
        }

        if (j >= 0) {

          p = network[j];

          dist = g - p[1]; // inx key - reverse dif

          if (dist >= bestd) {
            j = -1; // stop iter
          } else {

            j--;
            if (dist < 0) {
              dist = -dist;
            }
            a = p[0] - b;
            if (a < 0) {
              a = -a;
            }
            dist += a;

            if (dist < bestd) {
              a = p[2] - r;
              if (a < 0) {
                a = -a;
              }
              dist += a;
              if (dist < bestd) {
                bestd = dist;
                best = p[3];
              }
            }
          }
        }
      }

      return best;
    }

    function process() {
      learn();
      unbiasnet();
      inxbuild();
      return colorMap();
    }

    // Unbias network to give byte values 0..255 and record position i
    // to prepare for sort
    function unbiasnet() {
      var i;

      for (i = 0; i < netsize; i++) {
        network[i][0] >>= netbiasshift;
        network[i][1] >>= netbiasshift;
        network[i][2] >>= netbiasshift;
        network[i][3] = i; // record colour no
      }
    }

    // Move adjacent neurons by precomputed alpha*(1-((i-j)^2/[r]^2))
    // in radpower[|i-j|]
    function alterneigh(rad, i, b, g, r) {

      var j;
      var k;
      var lo;
      var hi;
      var a;
      var m;

      var p;

      lo = i - rad;
      if (lo < -1) {
        lo = -1;
      }

      hi = i + rad;

      if (hi > netsize) {
        hi = netsize;
      }

      j = i + 1;
      k = i - 1;
      m = 1;

      while (j < hi || k > lo) {

        a = radpower[m++];

        if (j < hi) {

          p = network[j++];

          try {

            p[0] -= a * (p[0] - b) / alpharadbias | 0;
            p[1] -= a * (p[1] - g) / alpharadbias | 0;
            p[2] -= a * (p[2] - r) / alpharadbias | 0;
          } catch (e) {}
        }

        if (k > lo) {

          p = network[k--];

          try {

            p[0] -= a * (p[0] - b) / alpharadbias | 0;
            p[1] -= a * (p[1] - g) / alpharadbias | 0;
            p[2] -= a * (p[2] - r) / alpharadbias | 0;
          } catch (e) {}
        }
      }
    }

    // Move neuron i towards biased (b,g,r) by factor alpha
    function altersingle(alpha, i, b, g, r) {

      // alter hit neuron
      var n = network[i];
      var alphaMult = alpha / initalpha;
      n[0] -= alphaMult * (n[0] - b) | 0;
      n[1] -= alphaMult * (n[1] - g) | 0;
      n[2] -= alphaMult * (n[2] - r) | 0;
    }

    // Search for biased BGR values
    function contest(b, g, r) {

      // finds closest neuron (min dist) and updates freq
      // finds best neuron (min dist-bias) and returns position
      // for frequently chosen neurons, freq[i] is high and bias[i] is negative
      // bias[i] = gamma*((1/netsize)-freq[i])

      var i;
      var dist;
      var a;
      var biasdist;
      var betafreq;
      var bestpos;
      var bestbiaspos;
      var bestd;
      var bestbiasd;
      var n;

      bestd = ~(1 << 31);
      bestbiasd = bestd;
      bestpos = -1;
      bestbiaspos = bestpos;

      for (i = 0; i < netsize; i++) {

        n = network[i];
        dist = n[0] - b;

        if (dist < 0) {
          dist = -dist;
        }

        a = n[1] - g;

        if (a < 0) {
          a = -a;
        }

        dist += a;

        a = n[2] - r;

        if (a < 0) {
          a = -a;
        }

        dist += a;

        if (dist < bestd) {
          bestd = dist;
          bestpos = i;
        }

        biasdist = dist - (bias[i] >> intbiasshift - netbiasshift);

        if (biasdist < bestbiasd) {
          bestbiasd = biasdist;
          bestbiaspos = i;
        }

        betafreq = freq[i] >> betashift;
        freq[i] -= betafreq;
        bias[i] += betafreq << gammashift;
      }

      freq[bestpos] += beta;
      bias[bestpos] -= betagamma;
      return bestbiaspos;
    }

    NeuQuantConstructor.apply(this, arguments);

    var exports = {};
    exports.map = map;
    exports.process = process;

    return exports;
  }

  /*
    processFrameWorker.js
    =====================
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  function workerCode() {
      var self = this;

      try {
          self.onmessage = function (ev) {
              var data = ev.data || {};
              var response;

              if (data.gifshot) {
                  response = workerMethods.run(data);
                  postMessage(response);
              }
          };
      } catch (e) {}

      var workerMethods = {
          dataToRGB: function dataToRGB(data, width, height) {
              var length = width * height * 4;
              var i = 0;
              var rgb = [];

              while (i < length) {
                  rgb.push(data[i++]);
                  rgb.push(data[i++]);
                  rgb.push(data[i++]);
                  i++; // for the alpha channel which we don't care about
              }

              return rgb;
          },
          componentizedPaletteToArray: function componentizedPaletteToArray(paletteRGB) {
              paletteRGB = paletteRGB || [];

              var paletteArray = [];

              for (var i = 0; i < paletteRGB.length; i += 3) {
                  var r = paletteRGB[i];
                  var g = paletteRGB[i + 1];
                  var b = paletteRGB[i + 2];

                  paletteArray.push(r << 16 | g << 8 | b);
              }

              return paletteArray;
          },
          // This is the "traditional" Animated_GIF style of going from RGBA to indexed color frames
          'processFrameWithQuantizer': function processFrameWithQuantizer(imageData, width, height, sampleInterval) {
              var rgbComponents = this.dataToRGB(imageData, width, height);
              var nq = new NeuQuant(rgbComponents, rgbComponents.length, sampleInterval);
              var paletteRGB = nq.process();
              var paletteArray = new Uint32Array(this.componentizedPaletteToArray(paletteRGB));
              var numberPixels = width * height;
              var indexedPixels = new Uint8Array(numberPixels);
              var k = 0;

              for (var i = 0; i < numberPixels; i++) {
                  var r = rgbComponents[k++];
                  var g = rgbComponents[k++];
                  var b = rgbComponents[k++];

                  indexedPixels[i] = nq.map(r, g, b);
              }

              return {
                  pixels: indexedPixels,
                  palette: paletteArray
              };
          },
          'run': function run(frame) {
              frame = frame || {};

              var _frame = frame,
                  height = _frame.height,
                  palette = _frame.palette,
                  sampleInterval = _frame.sampleInterval,
                  width = _frame.width;

              var imageData = frame.data;

              return this.processFrameWithQuantizer(imageData, width, height, sampleInterval);
          }
      };

      return workerMethods;
  }

  /*
    gifWriter.js
    ============
  */

  // (c) Dean McNamee <dean@gmail.com>, 2013.
  //
  // https://github.com/deanm/omggif
  //
  // Permission is hereby granted, free of charge, to any person obtaining a copy
  // of this software and associated documentation files (the "Software"), to
  // deal in the Software without restriction, including without limitation the
  // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
  // sell copies of the Software, and to permit persons to whom the Software is
  // furnished to do so, subject to the following conditions:
  //
  // The above copyright notice and this permission notice shall be included in
  // all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  // FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
  // IN THE SOFTWARE.
  //
  // omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
  // including animation and compression.  It does not rely on any specific
  // underlying system, so should run in the browser, Node, or Plask.

  function gifWriter(buf, width, height, gopts) {
    var p = 0;

    gopts = gopts === undefined$1 ? {} : gopts;
    var loop_count = gopts.loop === undefined$1 ? null : gopts.loop;
    var global_palette = gopts.palette === undefined$1 ? null : gopts.palette;

    if (width <= 0 || height <= 0 || width > 65535 || height > 65535) throw "Width/Height invalid.";

    function check_palette_and_num_colors(palette) {
      var num_colors = palette.length;

      if (num_colors < 2 || num_colors > 256 || num_colors & num_colors - 1) throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
      return num_colors;
    }

    // - Header.
    buf[p++] = 0x47;
    buf[p++] = 0x49;
    buf[p++] = 0x46; // GIF
    buf[p++] = 0x38;
    buf[p++] = 0x39;
    buf[p++] = 0x61; // 89a

    // Handling of Global Color Table (palette) and background index.
    var gp_num_colors_pow2 = 0;
    var background = 0;

    // - Logical Screen Descriptor.
    // NOTE(deanm): w/h apparently ignored by implementations, but set anyway.
    buf[p++] = width & 0xff;
    buf[p++] = width >> 8 & 0xff;
    buf[p++] = height & 0xff;
    buf[p++] = height >> 8 & 0xff;
    // NOTE: Indicates 0-bpp original color resolution (unused?).
    buf[p++] = (global_palette !== null ? 0x80 : 0) | // Global Color Table Flag.
    gp_num_colors_pow2; // NOTE: No sort flag (unused?).
    buf[p++] = background; // Background Color Index.
    buf[p++] = 0; // Pixel aspect ratio (unused?).

    if (loop_count !== null) {
      // Netscape block for looping.
      if (loop_count < 0 || loop_count > 65535) throw "Loop count invalid.";

      // Extension code, label, and length.
      buf[p++] = 0x21;
      buf[p++] = 0xff;
      buf[p++] = 0x0b;
      // NETSCAPE2.0
      buf[p++] = 0x4e;
      buf[p++] = 0x45;
      buf[p++] = 0x54;
      buf[p++] = 0x53;
      buf[p++] = 0x43;
      buf[p++] = 0x41;
      buf[p++] = 0x50;
      buf[p++] = 0x45;
      buf[p++] = 0x32;
      buf[p++] = 0x2e;
      buf[p++] = 0x30;
      // Sub-block
      buf[p++] = 0x03;
      buf[p++] = 0x01;
      buf[p++] = loop_count & 0xff;
      buf[p++] = loop_count >> 8 & 0xff;
      buf[p++] = 0x00; // Terminator.
    }

    var ended = false;

    this.addFrame = function (x, y, w, h, indexed_pixels, opts) {
      if (ended === true) {
        --p;
        ended = false;
      } // Un-end.

      opts = opts === undefined$1 ? {} : opts;

      // TODO(deanm): Bounds check x, y.  Do they need to be within the virtual
      // canvas width/height, I imagine?
      if (x < 0 || y < 0 || x > 65535 || y > 65535) throw "x/y invalid.";

      if (w <= 0 || h <= 0 || w > 65535 || h > 65535) throw "Width/Height invalid.";

      if (indexed_pixels.length < w * h) throw "Not enough pixels for the frame size.";

      var using_local_palette = true;
      var palette = opts.palette;
      if (palette === undefined$1 || palette === null) {
        using_local_palette = false;
        palette = global_palette;
      }

      if (palette === undefined$1 || palette === null) throw "Must supply either a local or global palette.";

      var num_colors = check_palette_and_num_colors(palette);

      // Compute the min_code_size (power of 2), destroying num_colors.
      var min_code_size = 0;
      while (num_colors >>= 1) {
        ++min_code_size;
      }num_colors = 1 << min_code_size; // Now we can easily get it back.

      var delay = opts.delay === undefined$1 ? 0 : opts.delay;

      // From the spec:
      //     0 -   No disposal specified. The decoder is
      //           not required to take any action.
      //     1 -   Do not dispose. The graphic is to be left
      //           in place.
      //     2 -   Restore to background color. The area used by the
      //           graphic must be restored to the background color.
      //     3 -   Restore to previous. The decoder is required to
      //           restore the area overwritten by the graphic with
      //           what was there prior to rendering the graphic.
      //  4-7 -    To be defined.
      // NOTE(deanm): Dispose background doesn't really work, apparently most
      // browsers ignore the background palette index and clear to transparency.
      var disposal = opts.disposal === undefined$1 ? 0 : opts.disposal;
      if (disposal < 0 || disposal > 3) // 4-7 is reserved.
        throw "Disposal out of range.";

      var use_transparency = false;
      var transparent_index = 0;
      if (opts.transparent !== undefined$1 && opts.transparent !== null) {
        use_transparency = true;
        transparent_index = opts.transparent;
        if (transparent_index < 0 || transparent_index >= num_colors) throw "Transparent color index.";
      }

      if (disposal !== 0 || use_transparency || delay !== 0) {
        // - Graphics Control Extension
        buf[p++] = 0x21;
        buf[p++] = 0xf9; // Extension / Label.
        buf[p++] = 4; // Byte size.

        buf[p++] = disposal << 2 | (use_transparency === true ? 1 : 0);
        buf[p++] = delay & 0xff;
        buf[p++] = delay >> 8 & 0xff;
        buf[p++] = transparent_index; // Transparent color index.
        buf[p++] = 0; // Block Terminator.
      }

      // - Image Descriptor
      buf[p++] = 0x2c; // Image Seperator.
      buf[p++] = x & 0xff;
      buf[p++] = x >> 8 & 0xff; // Left.
      buf[p++] = y & 0xff;
      buf[p++] = y >> 8 & 0xff; // Top.
      buf[p++] = w & 0xff;
      buf[p++] = w >> 8 & 0xff;
      buf[p++] = h & 0xff;
      buf[p++] = h >> 8 & 0xff;
      // NOTE: No sort flag (unused?).
      // TODO(deanm): Support interlace.
      buf[p++] = using_local_palette === true ? 0x80 | min_code_size - 1 : 0;

      // - Local Color Table
      if (using_local_palette === true) {
        for (var i = 0, il = palette.length; i < il; ++i) {
          var rgb = palette[i];
          buf[p++] = rgb >> 16 & 0xff;
          buf[p++] = rgb >> 8 & 0xff;
          buf[p++] = rgb & 0xff;
        }
      }

      p = GifWriterOutputLZWCodeStream(buf, p, min_code_size < 2 ? 2 : min_code_size, indexed_pixels);
    };

    this.end = function () {
      if (ended === false) {
        buf[p++] = 0x3b; // Trailer.
        ended = true;
      }
      return p;
    };

    // Main compression routine, palette indexes -> LZW code stream.
    // |index_stream| must have at least one entry.
    function GifWriterOutputLZWCodeStream(buf, p, min_code_size, index_stream) {
      buf[p++] = min_code_size;
      var cur_subblock = p++; // Pointing at the length field.

      var clear_code = 1 << min_code_size;
      var code_mask = clear_code - 1;
      var eoi_code = clear_code + 1;
      var next_code = eoi_code + 1;

      var cur_code_size = min_code_size + 1; // Number of bits per code.
      var cur_shift = 0;
      // We have at most 12-bit codes, so we should have to hold a max of 19
      // bits here (and then we would write out).
      var cur = 0;

      function emit_bytes_to_buffer(bit_block_size) {
        while (cur_shift >= bit_block_size) {
          buf[p++] = cur & 0xff;
          cur >>= 8;
          cur_shift -= 8;
          if (p === cur_subblock + 256) {
            // Finished a subblock.
            buf[cur_subblock] = 255;
            cur_subblock = p++;
          }
        }
      }

      function emit_code(c) {
        cur |= c << cur_shift;
        cur_shift += cur_code_size;
        emit_bytes_to_buffer(8);
      }

      // I am not an expert on the topic, and I don't want to write a thesis.
      // However, it is good to outline here the basic algorithm and the few data
      // structures and optimizations here that make this implementation fast.
      // The basic idea behind LZW is to build a table of previously seen runs
      // addressed by a short id (herein called output code).  All data is
      // referenced by a code, which represents one or more values from the
      // original input stream.  All input bytes can be referenced as the same
      // value as an output code.  So if you didn't want any compression, you
      // could more or less just output the original bytes as codes (there are
      // some details to this, but it is the idea).  In order to achieve
      // compression, values greater then the input range (codes can be up to
      // 12-bit while input only 8-bit) represent a sequence of previously seen
      // inputs.  The decompressor is able to build the same mapping while
      // decoding, so there is always a shared common knowledge between the
      // encoding and decoder, which is also important for "timing" aspects like
      // how to handle variable bit width code encoding.
      //
      // One obvious but very important consequence of the table system is there
      // is always a unique id (at most 12-bits) to map the runs.  'A' might be
      // 4, then 'AA' might be 10, 'AAA' 11, 'AAAA' 12, etc.  This relationship
      // can be used for an effecient lookup strategy for the code mapping.  We
      // need to know if a run has been seen before, and be able to map that run
      // to the output code.  Since we start with known unique ids (input bytes),
      // and then from those build more unique ids (table entries), we can
      // continue this chain (almost like a linked list) to always have small
      // integer values that represent the current byte chains in the encoder.
      // This means instead of tracking the input bytes (AAAABCD) to know our
      // current state, we can track the table entry for AAAABC (it is guaranteed
      // to exist by the nature of the algorithm) and the next character D.
      // Therefor the tuple of (table_entry, byte) is guaranteed to also be
      // unique.  This allows us to create a simple lookup key for mapping input
      // sequences to codes (table indices) without having to store or search
      // any of the code sequences.  So if 'AAAA' has a table entry of 12, the
      // tuple of ('AAAA', K) for any input byte K will be unique, and can be our
      // key.  This leads to a integer value at most 20-bits, which can always
      // fit in an SMI value and be used as a fast sparse array / object key.

      // Output code for the current contents of the index buffer.
      var ib_code = index_stream[0] & code_mask; // Load first input index.
      var code_table = {}; // Key'd on our 20-bit "tuple".

      emit_code(clear_code); // Spec says first code should be a clear code.

      // First index already loaded, process the rest of the stream.
      for (var i = 1, il = index_stream.length; i < il; ++i) {
        var k = index_stream[i] & code_mask;
        var cur_key = ib_code << 8 | k; // (prev, k) unique tuple.
        var cur_code = code_table[cur_key]; // buffer + k.

        // Check if we have to create a new code table entry.
        if (cur_code === undefined$1) {
          // We don't have buffer + k.
          // Emit index buffer (without k).
          // This is an inline version of emit_code, because this is the core
          // writing routine of the compressor (and V8 cannot inline emit_code
          // because it is a closure here in a different context).  Additionally
          // we can call emit_byte_to_buffer less often, because we can have
          // 30-bits (from our 31-bit signed SMI), and we know our codes will only
          // be 12-bits, so can safely have 18-bits there without overflow.
          // emit_code(ib_code);
          cur |= ib_code << cur_shift;
          cur_shift += cur_code_size;
          while (cur_shift >= 8) {
            buf[p++] = cur & 0xff;
            cur >>= 8;
            cur_shift -= 8;
            if (p === cur_subblock + 256) {
              // Finished a subblock.
              buf[cur_subblock] = 255;
              cur_subblock = p++;
            }
          }

          if (next_code === 4096) {
            // Table full, need a clear.
            emit_code(clear_code);
            next_code = eoi_code + 1;
            cur_code_size = min_code_size + 1;
            code_table = {};
          } else {
            // Table not full, insert a new entry.
            // Increase our variable bit code sizes if necessary.  This is a bit
            // tricky as it is based on "timing" between the encoding and
            // decoder.  From the encoders perspective this should happen after
            // we've already emitted the index buffer and are about to create the
            // first table entry that would overflow our current code bit size.
            if (next_code >= 1 << cur_code_size) ++cur_code_size;
            code_table[cur_key] = next_code++; // Insert into code table.
          }

          ib_code = k; // Index buffer to single input k.
        } else {
          ib_code = cur_code; // Index buffer to sequence in code table.
        }
      }

      emit_code(ib_code); // There will still be something in the index buffer.
      emit_code(eoi_code); // End Of Information.

      // Flush / finalize the sub-blocks stream to the buffer.
      emit_bytes_to_buffer(1);

      // Finish the sub-blocks, writing out any unfinished lengths and
      // terminating with a sub-block of length 0.  If we have already started
      // but not yet used a sub-block it can just become the terminator.
      if (cur_subblock + 1 === p) {
        // Started but unused.
        buf[cur_subblock] = 0;
      } else {
        // Started and used, write length and additional terminator block.
        buf[cur_subblock] = p - cur_subblock - 1;
        buf[p++] = 0;
      }
      return p;
    }
  }

  /*
    animatedGIF.js
    ==============
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  // Helpers
  var noop$2 = function noop() {};

  var AnimatedGIF = function AnimatedGIF(options) {
      this.canvas = null;
      this.ctx = null;
      this.repeat = 0;
      this.frames = [];
      this.numRenderedFrames = 0;
      this.onRenderCompleteCallback = noop$2;
      this.onRenderProgressCallback = noop$2;
      this.workers = [];
      this.availableWorkers = [];
      this.generatingGIF = false;
      this.options = options;

      // Constructs and initializes the the web workers appropriately
      this.initializeWebWorkers(options);
  };

  AnimatedGIF.prototype = {
      'workerMethods': workerCode(),
      'initializeWebWorkers': function initializeWebWorkers(options) {
          var self = this;
          var processFrameWorkerCode = NeuQuant.toString() + '(' + workerCode.toString() + '());';
          var webWorkerObj = void 0;
          var objectUrl = void 0;
          var webWorker = void 0;
          var numWorkers = void 0;
          var x = -1;
          var workerError = '';

          numWorkers = options.numWorkers;

          while (++x < numWorkers) {
              webWorkerObj = utils.createWebWorker(processFrameWorkerCode);

              if (utils.isObject(webWorkerObj)) {
                  objectUrl = webWorkerObj.objectUrl;
                  webWorker = webWorkerObj.worker;

                  self.workers.push({
                      worker: webWorker,
                      objectUrl: objectUrl
                  });

                  self.availableWorkers.push(webWorker);
              } else {
                  workerError = webWorkerObj;
                  utils.webWorkerError = !!webWorkerObj;
              }
          }

          this.workerError = workerError;
          this.canvas = document.createElement('canvas');
          this.canvas.width = options.gifWidth;
          this.canvas.height = options.gifHeight;
          this.ctx = this.canvas.getContext('2d');
          this.frames = [];
      },
      // Return a worker for processing a frame
      getWorker: function getWorker() {
          return this.availableWorkers.pop();
      },
      // Restores a worker to the pool
      freeWorker: function freeWorker(worker) {
          this.availableWorkers.push(worker);
      },
      byteMap: function () {
          var byteMap = [];

          for (var i = 0; i < 256; i++) {
              byteMap[i] = String.fromCharCode(i);
          }

          return byteMap;
      }(),
      bufferToString: function bufferToString(buffer) {
          var numberValues = buffer.length;
          var str = '';
          var x = -1;

          while (++x < numberValues) {
              str += this.byteMap[buffer[x]];
          }

          return str;
      },
      onFrameFinished: function onFrameFinished(progressCallback) {
          // The GIF is not written until we're done with all the frames
          // because they might not be processed in the same order
          var self = this;
          var frames = self.frames;
          var options = self.options;
          var hasExistingImages = !!(options.images || []).length;
          var allDone = frames.every(function (frame) {
              return !frame.beingProcessed && frame.done;
          });

          self.numRenderedFrames++;

          if (hasExistingImages) {
              progressCallback(self.numRenderedFrames / frames.length);
          }

          self.onRenderProgressCallback(self.numRenderedFrames * 0.75 / frames.length);

          if (allDone) {
              if (!self.generatingGIF) {
                  self.generateGIF(frames, self.onRenderCompleteCallback);
              }
          } else {
              utils.requestTimeout(function () {
                  self.processNextFrame();
              }, 1);
          }
      },
      processFrame: function processFrame(position) {
          var AnimatedGifContext = this;
          var options = this.options;
          var _options = this.options,
              progressCallback = _options.progressCallback,
              sampleInterval = _options.sampleInterval;

          var frames = this.frames;
          var frame = void 0;
          var worker = void 0;
          var done = function done() {
              var ev = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};

              var data = ev.data;

              // Delete original data, and free memory
              delete frame.data;

              frame.pixels = Array.prototype.slice.call(data.pixels);
              frame.palette = Array.prototype.slice.call(data.palette);
              frame.done = true;
              frame.beingProcessed = false;

              AnimatedGifContext.freeWorker(worker);

              AnimatedGifContext.onFrameFinished(progressCallback);
          };

          frame = frames[position];

          if (frame.beingProcessed || frame.done) {
              this.onFrameFinished();

              return;
          }

          frame.sampleInterval = sampleInterval;
          frame.beingProcessed = true;
          frame.gifshot = true;

          worker = this.getWorker();

          if (worker) {
              // Process the frame in a web worker
              worker.onmessage = done;
              worker.postMessage(frame);
          } else {
              // Process the frame in the current thread
              done({
                  'data': AnimatedGifContext.workerMethods.run(frame)
              });
          }
      },
      startRendering: function startRendering(completeCallback) {
          this.onRenderCompleteCallback = completeCallback;

          for (var i = 0; i < this.options.numWorkers && i < this.frames.length; i++) {
              this.processFrame(i);
          }
      },
      processNextFrame: function processNextFrame() {
          var position = -1;

          for (var i = 0; i < this.frames.length; i++) {
              var frame = this.frames[i];

              if (!frame.done && !frame.beingProcessed) {
                  position = i;
                  break;
              }
          }

          if (position >= 0) {
              this.processFrame(position);
          }
      },
      // Takes the already processed data in frames and feeds it to a new
      // GifWriter instance in order to get the binary GIF file
      generateGIF: function generateGIF(frames, callback) {
          // TODO: Weird: using a simple JS array instead of a typed array,
          // the files are WAY smaller o_o. Patches/explanations welcome!
          var buffer = []; // new Uint8Array(width * height * frames.length * 5);
          var gifOptions = {
              loop: this.repeat
          };
          var options = this.options;
          var interval = options.interval;

          var frameDuration = options.frameDuration;
          var existingImages = options.images;
          var hasExistingImages = !!existingImages.length;
          var height = options.gifHeight;
          var width = options.gifWidth;
          var gifWriter$$1 = new gifWriter(buffer, width, height, gifOptions);
          var onRenderProgressCallback = this.onRenderProgressCallback;
          var delay = hasExistingImages ? interval * 100 : 0;
          var bufferToString = void 0;
          var gif = void 0;

          this.generatingGIF = true;

          utils.each(frames, function (iterator, frame) {
              var framePalette = frame.palette;

              onRenderProgressCallback(0.75 + 0.25 * frame.position * 1.0 / frames.length);

              for (var i = 0; i < frameDuration; i++) {
                  gifWriter$$1.addFrame(0, 0, width, height, frame.pixels, {
                      palette: framePalette,
                      delay: delay
                  });
              }
          });

          gifWriter$$1.end();

          onRenderProgressCallback(1.0);

          this.frames = [];

          this.generatingGIF = false;

          if (utils.isFunction(callback)) {
              bufferToString = this.bufferToString(buffer);
              gif = 'data:image/gif;base64,' + utils.btoa(bufferToString);

              callback(gif);
          }
      },
      // From GIF: 0 = loop forever, null = not looping, n > 0 = loop n times and stop
      setRepeat: function setRepeat(r) {
          this.repeat = r;
      },
      addFrame: function addFrame(element, gifshotOptions) {
          gifshotOptions = utils.isObject(gifshotOptions) ? gifshotOptions : {};

          var self = this;
          var ctx = self.ctx;
          var options = self.options;
          var width = options.gifWidth;
          var height = options.gifHeight;
          var fontSize = utils.getFontSize(gifshotOptions);
          var _gifshotOptions = gifshotOptions,
              filter = _gifshotOptions.filter,
              fontColor = _gifshotOptions.fontColor,
              fontFamily = _gifshotOptions.fontFamily,
              fontWeight = _gifshotOptions.fontWeight,
              gifHeight = _gifshotOptions.gifHeight,
              gifWidth = _gifshotOptions.gifWidth,
              text = _gifshotOptions.text,
              textAlign = _gifshotOptions.textAlign,
              textBaseline = _gifshotOptions.textBaseline;

          var textXCoordinate = gifshotOptions.textXCoordinate ? gifshotOptions.textXCoordinate : textAlign === 'left' ? 1 : textAlign === 'right' ? width : width / 2;
          var textYCoordinate = gifshotOptions.textYCoordinate ? gifshotOptions.textYCoordinate : textBaseline === 'top' ? 1 : textBaseline === 'center' ? height / 2 : height;
          var font = fontWeight + ' ' + fontSize + ' ' + fontFamily;
          var imageData = void 0;

          try {
              ctx.filter = filter;

              ctx.drawImage(element, 0, 0, width, height);

              if (text) {
                  ctx.font = font;
                  ctx.fillStyle = fontColor;
                  ctx.textAlign = textAlign;
                  ctx.textBaseline = textBaseline;
                  ctx.fillText(text, textXCoordinate, textYCoordinate);
              }

              imageData = ctx.getImageData(0, 0, width, height);

              self.addFrameImageData(imageData);
          } catch (e) {
              return '' + e;
          }
      },
      addFrameImageData: function addFrameImageData() {
          var imageData = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};

          var frames = this.frames;
          var imageDataArray = imageData.data;

          this.frames.push({
              'data': imageDataArray,
              'width': imageData.width,
              'height': imageData.height,
              'palette': null,
              'dithering': null,
              'done': false,
              'beingProcessed': false,
              'position': frames.length
          });
      },
      onRenderProgress: function onRenderProgress(callback) {
          this.onRenderProgressCallback = callback;
      },
      isRendering: function isRendering() {
          return this.generatingGIF;
      },
      getBase64GIF: function getBase64GIF(completeCallback) {
          var self = this;
          var onRenderComplete = function onRenderComplete(gif) {
              self.destroyWorkers();

              utils.requestTimeout(function () {
                  completeCallback(gif);
              }, 0);
          };

          self.startRendering(onRenderComplete);
      },
      destroyWorkers: function destroyWorkers() {
          if (this.workerError) {
              return;
          }

          var workers = this.workers;

          // Explicitly ask web workers to die so they are explicitly GC'ed
          utils.each(workers, function (iterator, workerObj) {
              var worker = workerObj.worker;
              var objectUrl = workerObj.objectUrl;

              worker.terminate();
              utils.URL.revokeObjectURL(objectUrl);
          });
      }
  };

  /*
    getBase64GIF.js
    ===============
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  function getBase64GIF(animatedGifInstance, callback) {
      // This is asynchronous, rendered with WebWorkers
      animatedGifInstance.getBase64GIF(function (image) {
          callback({
              error: false,
              errorCode: '',
              errorMsg: '',
              image: image
          });
      });
  }

  /*
    existingImages.js
    =================
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  function existingImages() {
      var obj = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};
      var callback = obj.callback,
          images = obj.images,
          options = obj.options;

      var imagesLength = obj.imagesLength;
      var skipObj = {
          'getUserMedia': true,
          'window.URL': true
      };
      var errorObj = error.validate(skipObj);
      var loadedImages = [];
      var loadedImagesLength = 0;
      var tempImage = void 0;
      var ag = void 0;

      if (errorObj.error) {
          return callback(errorObj);
      }

      // change workerPath to point to where Animated_GIF.worker.js is
      ag = new AnimatedGIF(options);

      utils.each(images, function (index, image) {
          var currentImage = image;

          if (image.src) {
              currentImage = currentImage.src;
          }
          if (utils.isElement(currentImage)) {
              if (options.crossOrigin) {
                  currentImage.crossOrigin = options.crossOrigin;
              }

              loadedImages[index] = currentImage;
              loadedImagesLength += 1;

              if (loadedImagesLength === imagesLength) {
                  addLoadedImagesToGif();
              }
          } else if (utils.isString(currentImage)) {
              tempImage = new Image();

              if (options.crossOrigin) {
                  tempImage.crossOrigin = options.crossOrigin;
              }

              (function (tempImage) {
                  if (image.text) {
                      tempImage.text = image.text;
                  }

                  tempImage.onerror = function (e) {
                      var obj = void 0;

                      --imagesLength; // skips over images that error out

                      if (imagesLength === 0) {
                          obj = {};
                          obj.error = 'None of the requested images was capable of being retrieved';

                          return callback(obj);
                      }
                  };

                  tempImage.onload = function (e) {
                      if (image.text) {
                          loadedImages[index] = {
                              img: tempImage,
                              text: tempImage.text
                          };
                      } else {
                          loadedImages[index] = tempImage;
                      }

                      loadedImagesLength += 1;

                      if (loadedImagesLength === imagesLength) {
                          addLoadedImagesToGif();
                      }

                      utils.removeElement(tempImage);
                  };

                  tempImage.src = currentImage;
              })(tempImage);

              utils.setCSSAttr(tempImage, {
                  position: 'fixed',
                  opacity: '0'
              });

              document.body.appendChild(tempImage);
          }
      });

      function addLoadedImagesToGif() {
          utils.each(loadedImages, function (index, loadedImage) {
              if (loadedImage) {
                  if (loadedImage.text) {
                      ag.addFrame(loadedImage.img, options, loadedImage.text);
                  } else {
                      ag.addFrame(loadedImage, options);
                  }
              }
          });

          getBase64GIF(ag, callback);
      }
  }

  /*
    screenShot.js
    =============
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  // Helpers
  var noop$3 = function noop() {};

  var screenShot = {
      getGIF: function getGIF() {
          var options = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};
          var callback = arguments[1];

          callback = utils.isFunction(callback) ? callback : noop$3;

          var canvas = document.createElement('canvas');
          var context = void 0;
          var existingImages = options.images;
          var hasExistingImages = !!existingImages.length;
          var cameraStream = options.cameraStream,
              crop = options.crop,
              filter = options.filter,
              fontColor = options.fontColor,
              fontFamily = options.fontFamily,
              fontWeight = options.fontWeight,
              keepCameraOn = options.keepCameraOn,
              numWorkers = options.numWorkers,
              progressCallback = options.progressCallback,
              saveRenderingContexts = options.saveRenderingContexts,
              savedRenderingContexts = options.savedRenderingContexts,
              text = options.text,
              textAlign = options.textAlign,
              textBaseline = options.textBaseline,
              videoElement = options.videoElement,
              videoHeight = options.videoHeight,
              videoWidth = options.videoWidth,
              webcamVideoElement = options.webcamVideoElement;

          var gifWidth = Number(options.gifWidth);
          var gifHeight = Number(options.gifHeight);
          var interval = Number(options.interval);
          var sampleInterval = Number(options.sampleInterval);
          var waitBetweenFrames = hasExistingImages ? 0 : interval * 1000;
          var renderingContextsToSave = [];
          var numFrames = savedRenderingContexts.length ? savedRenderingContexts.length : options.numFrames;
          var pendingFrames = numFrames;
          var ag = new AnimatedGIF(options);
          var fontSize = utils.getFontSize(options);
          var textXCoordinate = options.textXCoordinate ? options.textXCoordinate : textAlign === 'left' ? 1 : textAlign === 'right' ? gifWidth : gifWidth / 2;
          var textYCoordinate = options.textYCoordinate ? options.textYCoordinate : textBaseline === 'top' ? 1 : textBaseline === 'center' ? gifHeight / 2 : gifHeight;
          var font = fontWeight + ' ' + fontSize + ' ' + fontFamily;
          var sourceX = crop ? Math.floor(crop.scaledWidth / 2) : 0;
          var sourceWidth = crop ? videoWidth - crop.scaledWidth : 0;
          var sourceY = crop ? Math.floor(crop.scaledHeight / 2) : 0;
          var sourceHeight = crop ? videoHeight - crop.scaledHeight : 0;
          var captureFrames = function captureSingleFrame() {
              var framesLeft = pendingFrames - 1;

              if (savedRenderingContexts.length) {
                  context.putImageData(savedRenderingContexts[numFrames - pendingFrames], 0, 0);

                  finishCapture();
              } else {
                  drawVideo();
              }

              function drawVideo() {
                  try {
                      // Makes sure the canvas video heights/widths are in bounds
                      if (sourceWidth > videoWidth) {
                          sourceWidth = videoWidth;
                      }

                      if (sourceHeight > videoHeight) {
                          sourceHeight = videoHeight;
                      }

                      if (sourceX < 0) {
                          sourceX = 0;
                      }

                      if (sourceY < 0) {
                          sourceY = 0;
                      }

                      context.filter = filter;

                      context.drawImage(videoElement, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, gifWidth, gifHeight);

                      finishCapture();
                  } catch (e) {
                      // There is a Firefox bug that sometimes throws NS_ERROR_NOT_AVAILABLE and
                      // and IndexSizeError errors when drawing a video element to the canvas
                      if (e.name === 'NS_ERROR_NOT_AVAILABLE') {
                          // Wait 100ms before trying again
                          utils.requestTimeout(drawVideo, 100);
                      } else {
                          throw e;
                      }
                  }
              }

              function finishCapture() {
                  var imageData = void 0;

                  if (saveRenderingContexts) {
                      renderingContextsToSave.push(context.getImageData(0, 0, gifWidth, gifHeight));
                  }

                  // If there is text to display, make sure to display it on the canvas after the image is drawn
                  if (text) {
                      context.font = font;
                      context.fillStyle = fontColor;
                      context.textAlign = textAlign;
                      context.textBaseline = textBaseline;
                      context.fillText(text, textXCoordinate, textYCoordinate);
                  }

                  imageData = context.getImageData(0, 0, gifWidth, gifHeight);

                  ag.addFrameImageData(imageData);

                  pendingFrames = framesLeft;

                  // Call back with an r value indicating how far along we are in capture
                  progressCallback((numFrames - pendingFrames) / numFrames);

                  if (framesLeft > 0) {
                      // test
                      utils.requestTimeout(captureSingleFrame, waitBetweenFrames);
                  }

                  if (!pendingFrames) {
                      ag.getBase64GIF(function (image) {
                          callback({
                              'error': false,
                              'errorCode': '',
                              'errorMsg': '',
                              'image': image,
                              'cameraStream': cameraStream,
                              'videoElement': videoElement,
                              'webcamVideoElement': webcamVideoElement,
                              'savedRenderingContexts': renderingContextsToSave,
                              'keepCameraOn': keepCameraOn
                          });
                      });
                  }
              }
          };

          numFrames = numFrames !== undefined$1 ? numFrames : 10;
          interval = interval !== undefined$1 ? interval : 0.1; // In seconds

          canvas.width = gifWidth;
          canvas.height = gifHeight;
          context = canvas.getContext('2d');

          (function capture() {
              if (!savedRenderingContexts.length && videoElement.currentTime === 0) {
                  utils.requestTimeout(capture, 100);

                  return;
              }

              captureFrames();
          })();
      },
      getCropDimensions: function getCropDimensions() {
          var obj = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};

          var width = obj.videoWidth;
          var height = obj.videoHeight;
          var gifWidth = obj.gifWidth;
          var gifHeight = obj.gifHeight;
          var result = {
              width: 0,
              height: 0,
              scaledWidth: 0,
              scaledHeight: 0
          };

          if (width > height) {
              result.width = Math.round(width * (gifHeight / height)) - gifWidth;
              result.scaledWidth = Math.round(result.width * (height / gifHeight));
          } else {
              result.height = Math.round(height * (gifWidth / width)) - gifHeight;
              result.scaledHeight = Math.round(result.height * (width / gifWidth));
          }

          return result;
      }
  };

  /*
    videoStream.js
    ==============
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  var videoStream = {
      loadedData: false,
      defaultVideoDimensions: {
          width: 640,
          height: 480
      },
      findVideoSize: function findVideoSizeMethod(obj) {
          findVideoSizeMethod.attempts = findVideoSizeMethod.attempts || 0;

          var cameraStream = obj.cameraStream,
              completedCallback = obj.completedCallback,
              videoElement = obj.videoElement;


          if (!videoElement) {
              return;
          }

          if (videoElement.videoWidth > 0 && videoElement.videoHeight > 0) {
              videoElement.removeEventListener('loadeddata', videoStream.findVideoSize);

              completedCallback({
                  videoElement: videoElement,
                  cameraStream: cameraStream,
                  videoWidth: videoElement.videoWidth,
                  videoHeight: videoElement.videoHeight
              });
          } else {
              if (findVideoSizeMethod.attempts < 10) {
                  findVideoSizeMethod.attempts += 1;

                  utils.requestTimeout(function () {
                      videoStream.findVideoSize(obj);
                  }, 400);
              } else {
                  completedCallback({
                      videoElement: videoElement,
                      cameraStream: cameraStream,
                      videoWidth: videoStream.defaultVideoDimensions.width,
                      videoHeight: videoStream.defaultVideoDimensions.height
                  });
              }
          }
      },
      onStreamingTimeout: function onStreamingTimeout(callback) {
          if (utils.isFunction(callback)) {
              callback({
                  error: true,
                  errorCode: 'getUserMedia',
                  errorMsg: 'There was an issue with the getUserMedia API - Timed out while trying to start streaming',
                  image: null,
                  cameraStream: {}
              });
          }
      },
      stream: function stream(obj) {
          var existingVideo = utils.isArray(obj.existingVideo) ? obj.existingVideo[0] : obj.existingVideo;
          var cameraStream = obj.cameraStream,
              completedCallback = obj.completedCallback,
              streamedCallback = obj.streamedCallback,
              videoElement = obj.videoElement;


          if (utils.isFunction(streamedCallback)) {
              streamedCallback();
          }

          if (existingVideo) {
              if (utils.isString(existingVideo)) {
                  videoElement.src = existingVideo;
                  videoElement.innerHTML = '<source src="' + existingVideo + '" type="video/' + utils.getExtension(existingVideo) + '" />';
              } else if (existingVideo instanceof Blob) {
                  try {
                      videoElement.src = utils.URL.createObjectURL(existingVideo);
                  } catch (e) {}

                  videoElement.innerHTML = '<source src="' + existingVideo + '" type="' + existingVideo.type + '" />';
              }
          } else if (videoElement.mozSrcObject) {
              videoElement.mozSrcObject = cameraStream;
          } else if (utils.URL) {
              try {
                  videoElement.srcObject = cameraStream;
                  videoElement.src = utils.URL.createObjectURL(cameraStream);
              } catch (e) {
                  videoElement.srcObject = cameraStream;
              }
          }

          videoElement.play();

          utils.requestTimeout(function checkLoadedData() {
              checkLoadedData.count = checkLoadedData.count || 0;

              if (videoStream.loadedData === true) {
                  videoStream.findVideoSize({
                      videoElement: videoElement,
                      cameraStream: cameraStream,
                      completedCallback: completedCallback
                  });

                  videoStream.loadedData = false;
              } else {
                  checkLoadedData.count += 1;

                  if (checkLoadedData.count > 10) {
                      videoStream.findVideoSize({
                          videoElement: videoElement,
                          cameraStream: cameraStream,
                          completedCallback: completedCallback
                      });
                  } else {
                      checkLoadedData();
                  }
              }
          }, 0);
      },
      startStreaming: function startStreaming(obj) {
          var errorCallback = utils.isFunction(obj.error) ? obj.error : utils.noop;
          var streamedCallback = utils.isFunction(obj.streamed) ? obj.streamed : utils.noop;
          var completedCallback = utils.isFunction(obj.completed) ? obj.completed : utils.noop;
          var crossOrigin = obj.crossOrigin,
              existingVideo = obj.existingVideo,
              lastCameraStream = obj.lastCameraStream,
              options = obj.options,
              webcamVideoElement = obj.webcamVideoElement;

          var videoElement = utils.isElement(existingVideo) ? existingVideo : webcamVideoElement ? webcamVideoElement : document.createElement('video');

          if (crossOrigin) {
              videoElement.crossOrigin = options.crossOrigin;
          }

          videoElement.autoplay = true;
          videoElement.loop = true;
          videoElement.muted = true;
          videoElement.addEventListener('loadeddata', function (event) {
              videoStream.loadedData = true;
              if (options.offset) {
                  videoElement.currentTime = options.offset;
              }
          });

          if (existingVideo) {
              videoStream.stream({
                  videoElement: videoElement,
                  existingVideo: existingVideo,
                  completedCallback: completedCallback
              });
          } else if (lastCameraStream) {
              videoStream.stream({
                  videoElement: videoElement,
                  cameraStream: lastCameraStream,
                  streamedCallback: streamedCallback,
                  completedCallback: completedCallback
              });
          } else {
              utils.getUserMedia({
                  video: true
              }, function (stream) {
                  videoStream.stream({
                      videoElement: videoElement,
                      cameraStream: stream,
                      streamedCallback: streamedCallback,
                      completedCallback: completedCallback
                  });
              }, errorCallback);
          }
      },
      startVideoStreaming: function startVideoStreaming(callback) {
          var options = arguments.length > 1 && arguments[1] !== undefined$1 ? arguments[1] : {};

          var timeoutLength = options.timeout !== undefined$1 ? options.timeout : 0;
          var originalCallback = options.callback;
          var webcamVideoElement = options.webcamVideoElement;
          var noGetUserMediaSupportTimeout = void 0;

          // Some browsers apparently have support for video streaming because of the
          // presence of the getUserMedia function, but then do not answer our
          // calls for streaming.
          // So we'll set up this timeout and if nothing happens after a while, we'll
          // conclude that there's no actual getUserMedia support.
          if (timeoutLength > 0) {
              noGetUserMediaSupportTimeout = utils.requestTimeout(function () {
                  videoStream.onStreamingTimeout(originalCallback);
              }, 10000);
          }

          videoStream.startStreaming({
              error: function error() {
                  originalCallback({
                      error: true,
                      errorCode: 'getUserMedia',
                      errorMsg: 'There was an issue with the getUserMedia API - the user probably denied permission',
                      image: null,
                      cameraStream: {}
                  });
              },
              streamed: function streamed() {
                  // The streaming started somehow, so we can assume there is getUserMedia support
                  clearTimeout(noGetUserMediaSupportTimeout);
              },
              completed: function completed() {
                  var obj = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};
                  var cameraStream = obj.cameraStream,
                      videoElement = obj.videoElement,
                      videoHeight = obj.videoHeight,
                      videoWidth = obj.videoWidth;


                  callback({
                      cameraStream: cameraStream,
                      videoElement: videoElement,
                      videoHeight: videoHeight,
                      videoWidth: videoWidth
                  });
              },
              lastCameraStream: options.lastCameraStream,
              webcamVideoElement: webcamVideoElement,
              crossOrigin: options.crossOrigin,
              options: options
          });
      },
      stopVideoStreaming: function stopVideoStreaming(obj) {
          obj = utils.isObject(obj) ? obj : {};

          var _obj = obj,
              keepCameraOn = _obj.keepCameraOn,
              videoElement = _obj.videoElement,
              webcamVideoElement = _obj.webcamVideoElement;

          var cameraStream = obj.cameraStream || {};
          var cameraStreamTracks = cameraStream.getTracks ? cameraStream.getTracks() || [] : [];
          var hasCameraStreamTracks = !!cameraStreamTracks.length;
          var firstCameraStreamTrack = cameraStreamTracks[0];

          if (!keepCameraOn && hasCameraStreamTracks) {
              if (utils.isFunction(firstCameraStreamTrack.stop)) {
                  // Stops the camera stream
                  firstCameraStreamTrack.stop();
              }
          }

          if (utils.isElement(videoElement) && !webcamVideoElement) {
              // Pauses the video, revokes the object URL (freeing up memory), and remove the video element
              videoElement.pause();

              // Destroys the object url
              if (utils.isFunction(utils.URL.revokeObjectURL) && !utils.webWorkerError) {
                  if (videoElement.src) {
                      utils.URL.revokeObjectURL(videoElement.src);
                  }
              }

              // Removes the video element from the DOM
              utils.removeElement(videoElement);
          }
      }
  };

  /*
    stopVideoStreaming.js
    =====================
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  function stopVideoStreaming(options) {
    options = utils.isObject(options) ? options : {};

    videoStream.stopVideoStreaming(options);
  }

  /*
    createAndGetGIF.js
    ==================
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  function createAndGetGIF(obj, callback) {
      var options = obj.options || {};

      var images = options.images,
          video = options.video;

      var gifWidth = Number(options.gifWidth);
      var gifHeight = Number(options.gifHeight);
      var numFrames = Number(options.numFrames);
      var cameraStream = obj.cameraStream,
          videoElement = obj.videoElement,
          videoWidth = obj.videoWidth,
          videoHeight = obj.videoHeight;

      var cropDimensions = screenShot.getCropDimensions({
          videoWidth: videoWidth,
          videoHeight: videoHeight,
          gifHeight: gifHeight,
          gifWidth: gifWidth
      });
      var completeCallback = callback;

      options.crop = cropDimensions;
      options.videoElement = videoElement;
      options.videoWidth = videoWidth;
      options.videoHeight = videoHeight;
      options.cameraStream = cameraStream;

      if (!utils.isElement(videoElement)) {
          return;
      }

      videoElement.width = gifWidth + cropDimensions.width;
      videoElement.height = gifHeight + cropDimensions.height;

      if (!options.webcamVideoElement) {
          utils.setCSSAttr(videoElement, {
              position: 'fixed',
              opacity: '0'
          });

          document.body.appendChild(videoElement);
      }

      // Firefox doesn't seem to obey autoplay if the element is not in the DOM when the content
      // is loaded, so we must manually trigger play after adding it, or the video will be frozen
      videoElement.play();

      screenShot.getGIF(options, function (obj) {
          if ((!images || !images.length) && (!video || !video.length)) {
              stopVideoStreaming(obj);
          }

          completeCallback(obj);
      });
  }

  /*
    existingVideo.js
    ================
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  function existingVideo() {
      var obj = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};
      var callback = obj.callback,
          existingVideo = obj.existingVideo,
          options = obj.options;

      var skipObj = {
          getUserMedia: true,
          'window.URL': true
      };
      var errorObj = error.validate(skipObj);
      var videoType = void 0;
      var videoSrc = void 0;

      if (errorObj.error) {
          return callback(errorObj);
      }

      if (utils.isElement(existingVideo) && existingVideo.src) {
          videoSrc = existingVideo.src;
          videoType = utils.getExtension(videoSrc);

          if (!utils.isSupported.videoCodecs[videoType]) {
              return callback(error.messages.videoCodecs);
          }
      } else if (utils.isArray(existingVideo)) {
          utils.each(existingVideo, function (iterator, videoSrc) {
              if (videoSrc instanceof Blob) {
                  videoType = videoSrc.type.substr(videoSrc.type.lastIndexOf('/') + 1, videoSrc.length);
              } else {
                  videoType = videoSrc.substr(videoSrc.lastIndexOf('.') + 1, videoSrc.length);
              }

              if (utils.isSupported.videoCodecs[videoType]) {
                  existingVideo = videoSrc;

                  return false;
              }
          });
      }

      videoStream.startStreaming({
          completed: function completed(obj) {
              obj.options = options || {};

              createAndGetGIF(obj, callback);
          },
          existingVideo: existingVideo,
          crossOrigin: options.crossOrigin,
          options: options
      });
  }

  /*
    existingWebcam.js
    =================
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  function existingWebcam() {
      var obj = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};
      var callback = obj.callback,
          lastCameraStream = obj.lastCameraStream,
          options = obj.options,
          webcamVideoElement = obj.webcamVideoElement;


      if (!isWebCamGIFSupported()) {
          return callback(error.validate());
      }

      if (options.savedRenderingContexts.length) {
          screenShot.getGIF(options, function (obj) {
              callback(obj);
          });

          return;
      }

      videoStream.startVideoStreaming(function () {
          var obj = arguments.length > 0 && arguments[0] !== undefined$1 ? arguments[0] : {};

          obj.options = options || {};

          createAndGetGIF(obj, callback);
      }, {
          lastCameraStream: lastCameraStream,
          callback: callback,
          webcamVideoElement: webcamVideoElement,
          crossOrigin: options.crossOrigin
      });
  }

  /*
    createGIF.js
    ============
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  function createGIF(userOptions, callback) {
    callback = utils.isFunction(userOptions) ? userOptions : callback;
    userOptions = utils.isObject(userOptions) ? userOptions : {};

    if (!utils.isFunction(callback)) {
      return;
    }

    var options = utils.mergeOptions(defaultOptions, userOptions) || {};
    var lastCameraStream = userOptions.cameraStream;
    var images = options.images;
    var imagesLength = images ? images.length : 0;
    var video = options.video;
    var webcamVideoElement = options.webcamVideoElement;

    options = utils.mergeOptions(options, {
      'gifWidth': Math.floor(options.gifWidth),
      'gifHeight': Math.floor(options.gifHeight)
    });

    // If the user would like to create a GIF from an existing image(s)
    if (imagesLength) {
      existingImages({
        'images': images,
        'imagesLength': imagesLength,
        'callback': callback,
        'options': options
      });
    } else if (video) {
      // If the user would like to create a GIF from an existing HTML5 video
      existingVideo({
        'existingVideo': video,
        callback: callback,
        options: options
      });
    } else {
      // If the user would like to create a GIF from a webcam stream
      existingWebcam({
        lastCameraStream: lastCameraStream,
        callback: callback,
        webcamVideoElement: webcamVideoElement,
        options: options
      });
    }
  }

  /*
    takeSnapShot.js
    ===============
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  function takeSnapShot(userOptions, callback) {
      callback = utils.isFunction(userOptions) ? userOptions : callback;
      userOptions = utils.isObject(userOptions) ? userOptions : {};

      if (!utils.isFunction(callback)) {
          return;
      }

      var mergedOptions = utils.mergeOptions(defaultOptions, userOptions);
      var options = utils.mergeOptions(mergedOptions, {
          'interval': .1,
          'numFrames': 1,
          'gifWidth': Math.floor(mergedOptions.gifWidth),
          'gifHeight': Math.floor(mergedOptions.gifHeight)
      });

      createGIF(options, callback);
  }

  /*
    API.js
    ======
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
  */

  // Dependencies
  var API = {
    'utils': utils$2,
    'error': error$2,
    'defaultOptions': defaultOptions$2,
    'createGIF': createGIF,
    'takeSnapShot': takeSnapShot,
    'stopVideoStreaming': stopVideoStreaming,
    'isSupported': isSupported,
    'isWebCamGIFSupported': isWebCamGIFSupported,
    'isExistingVideoGIFSupported': isExistingVideoGIFSupported,
    'isExistingImagesGIFSupported': isSupported$1,
    'VERSION': '0.4.5'
  };

  /*
    index.js
    ========
  */

  /* Copyright  2017 Yahoo Inc.
   * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
   */

  // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, and plain browser loading
  if (typeof undefined$1 === 'function' && undefined$1.amd) {
      undefined$1([], function () {
          return API;
      });
  } else {
      module.exports = API;
  }
  }(typeof window !== "undefined" ? window : {}, typeof document !== "undefined" ? document : { createElement: function() {} }, typeof window !== "undefined" ? window.navigator : {}));
  });

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var GifRecorder = /*#__PURE__*/function () {
    function GifRecorder(term) {
      classCallCheck(this, GifRecorder);

      this.term = term;
      this.blobs = [];
      this.images = [];
      this.recording = false;
      this.timer = null;
      this.frameRate = 10;
    }

    createClass(GifRecorder, [{
      key: "start",
      value: function start() {
        errorHandle(!this.recording, 'The recorder is recording...');
        var $canvas = this.term.template.$canvas;
        this.recording = true;
        this.term.emit('start');
        (function loop() {
          var _this = this;

          $canvas.toBlob(function (blob) {
            _this.blobs.push(blob);

            _this.images.push(URL.createObjectURL(blob));
          });
          this.term.emit('recording', {
            size: this.size,
            duration: this.duration
          });
          this.timer = setTimeout(function () {
            if (_this.term.isDestroy) return;
            loop.call(_this);
          }, 1000 / this.frameRate);
        }).call(this);
      }
    }, {
      key: "end",
      value: function end() {
        var _this2 = this;

        this.recording = false;
        clearTimeout(this.timer);
        this.term.emit('creating');
        var _this$term = this.term,
            gifshotOpt = _this$term.options.gifshotOpt,
            $container = _this$term.template.$container;
        gifshot.createGIF(_objectSpread$2({
          gifWidth: $container.clientWidth,
          gifHeight: $container.clientHeight,
          numWorkers: 4
        }, gifshotOpt, {
          images: this.images
        }), function (data) {
          if (!data.err) {
            download(data.image, "".concat(Date.now(), ".gif"));

            _this2.images.forEach(function (item) {
              return URL.revokeObjectURL(item);
            });

            _this2.blobs = [];
            _this2.images = [];

            _this2.term.emit('end');
          }
        });
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
        return Math.floor(this.blobs.length / this.frameRate);
      }
    }]);

    return GifRecorder;
  }();

  var Inquirer = /*#__PURE__*/function () {
    function Inquirer(term) {
      var _this = this;

      classCallCheck(this, Inquirer);

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

    createClass(Inquirer, [{
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

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$1(Derived) { return function () { var Super = getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var id = 0;
  var instances = [];

  var Term = /*#__PURE__*/function (_Emitter) {
    inherits(Term, _Emitter);

    var _super = _createSuper$1(Term);

    createClass(Term, null, [{
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
      key: "instances",
      get: function get() {
        return instances;
      }
    }, {
      key: "version",
      get: function get() {
        return '1.1.6';
      }
    }, {
      key: "utils",
      get: function get() {
        return utils;
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
          recordType: 'video',
          gifshotOpt: {},
          draggable: true,
          dragOpt: {},
          fontSize: 13,
          watermark: '',
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
          recordType: 'string',
          gifshotOpt: 'object',
          draggable: 'boolean',
          dragOpt: 'object',
          fontSize: 'number',
          watermark: 'string',
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

    function Term() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Term);

      _this = _super.call(this);
      _this.options = optionValidator(_objectSpread$3({}, Term.default, {}, options), Term.scheme);
      _this.isDestroy = false;
      _this.isFocus = false;
      _this.template = new Template(assertThisInitialized(_this));
      _this.events = new Events(assertThisInitialized(_this));
      _this.drawer = new Drawer(assertThisInitialized(_this));
      _this.commander = new Commander(assertThisInitialized(_this));
      _this.inquirer = new Inquirer(assertThisInitialized(_this));
      _this.video = new VideoRecorder(assertThisInitialized(_this));
      _this.gif = new GifRecorder(assertThisInitialized(_this));
      _this.ask = _this.commander.ask;
      _this.type = _this.commander.type;
      _this.input = _this.commander.input;
      _this.output = _this.commander.output;
      _this.clear = _this.drawer.clear;
      _this.radio = _this.inquirer.radio;
      _this.checkbox = _this.inquirer.checkbox;

      _this.tree = function (list) {
        return tree(assertThisInitialized(_this), list);
      };

      id += 1;
      _this.id = id;
      instances.push(assertThisInitialized(_this));
      return _this;
    }

    createClass(Term, [{
      key: "destroy",
      value: function destroy() {
        instances.splice(instances.indexOf(this), 1);
        this.events.destroy();
        this.template.destroy();
        this.isDestroy = true;
        this.emit('destroy');
      }
    }, {
      key: "color",
      set: function set(value) {
        this.options.color = value;
        this.drawer.init();
      },
      get: function get() {
        return this.options.color;
      }
    }, {
      key: "background",
      set: function set(value) {
        this.options.background = value;
        this.drawer.init();
      },
      get: function get() {
        return this.options.background;
      }
    }, {
      key: "watermark",
      set: function set(value) {
        this.options.watermark = value;
        this.drawer.init();
      },
      get: function get() {
        return this.options.watermark;
      }
    }, {
      key: "width",
      set: function set(value) {
        this.emit('resize', {
          width: value,
          height: this.height
        });
      },
      get: function get() {
        return this.template.$container.clientWidth;
      }
    }, {
      key: "height",
      set: function set(value) {
        this.emit('resize', {
          width: this.width,
          height: value
        });
      },
      get: function get() {
        return this.template.$container.clientHeight;
      }
    }, {
      key: "debug",
      set: function set(value) {
        this.options.debug = value;
        this.drawer.init();
      },
      get: function get() {
        return this.options.debug;
      }
    }]);

    return Term;
  }(Emitter);

  return Term;

})));
//# sourceMappingURL=term-web.js.map
