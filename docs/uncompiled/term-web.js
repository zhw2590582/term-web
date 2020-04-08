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

  var Events = /*#__PURE__*/function () {
    function Events(term) {
      var _this = this;

      classCallCheck(this, Events);

      this.destroyEvents = [];
      this.proxy = this.proxy.bind(this);
      var _term$options = term.options,
          recorder = _term$options.recorder,
          draggable = _term$options.draggable,
          dragOpt = _term$options.dragOpt,
          _term$template = term.template,
          $recorder = _term$template.$recorder,
          $recorderSize = _term$template.$recorderSize,
          $recorderDuration = _term$template.$recorderDuration,
          $recorderBtn = _term$template.$recorderBtn,
          _term$template2 = term.template,
          $container = _term$template2.$container,
          $textarea = _term$template2.$textarea,
          $content = _term$template2.$content,
          $scrollbar = _term$template2.$scrollbar,
          $header = _term$template2.$header,
          $footer = _term$template2.$footer;
      this.proxy(document, ['click', 'contextmenu'], function (event) {
        if (event.composedPath && event.composedPath().indexOf($content) > -1) {
          term.isFocus = true;
          term.emit('focus');
        } else {
          term.isFocus = false;
          term.emit('blur');
        }
      });

      if (draggable) {
        this.draggie = new draggabilly($container, _objectSpread({
          handle: '.term-header'
        }, dragOpt));
        term.on('destroy', function () {
          _this.draggie.destroy();
        });
      }

      this.proxy($textarea, 'input', function () {
        term.emit('input', $textarea.value.trim());
      });
      this.proxy($textarea, 'paste', function () {
        term.emit('input', $textarea.value.trim());
      });
      this.proxy($textarea, 'keydown', function (event) {
        var key = event.keyCode;

        if (key === 13) {
          setTimeout(function () {
            term.emit('enter', $textarea.value.trim());
            $textarea.value = '';
          });
        }

        if ([37, 38, 39, 40].includes(key)) {
          $textarea.blur();
          setTimeout(function () {
            return $textarea.focus();
          });
        }

        term.emit('keydown', event);
      });
      var canRenderByTop = false;
      this.proxy($content, 'scroll', function () {
        if (canRenderByTop) {
          term.drawer.renderByTop($content.scrollTop);
        } else {
          canRenderByTop = true;
        }
      });
      this.proxy($recorderBtn, 'click', function () {
        if (term.recorder.recording) {
          term.recorder.end();
        } else {
          term.recorder.start();
        }
      });
      term.on('scroll', function (_ref) {
        var scrollHeight = _ref.scrollHeight,
            scrollTop = _ref.scrollTop;
        $scrollbar.style.height = "".concat(scrollHeight, "px");
        canRenderByTop = false;
        $content.scrollTo(0, scrollTop);
      });
      term.on('cursor', function (_ref2) {
        var left = _ref2.left,
            top = _ref2.top;
        $textarea.style.top = "".concat(top, "px");
        $textarea.style.left = "".concat(left, "px");
      });
      term.on('size', function (_ref3) {
        var header = _ref3.header,
            content = _ref3.content,
            footer = _ref3.footer;
        $header.style.height = "".concat(header, "px");
        $footer.style.height = "".concat(footer, "px");
        $content.style.top = "".concat(header, "px");
        $content.style.height = "".concat(content, "px");
      });
      term.on('focus', function () {
        $textarea.focus();
      });
      term.on('start', function () {
        if (recorder) {
          $recorder.classList.add('recording');
        }
      });
      term.on('recording', function (_ref4) {
        var size = _ref4.size,
            duration = _ref4.duration;

        if (recorder) {
          $recorderSize.innerText = "".concat(Math.floor(size / 1024) || 0, "kb");
          $recorderDuration.innerText = "".concat(duration || 0, "s");
        }
      });
      term.on('end', function () {
        if (recorder) {
          $recorder.classList.remove('recording');
        }
      });
    }

    createClass(Events, [{
      key: "proxy",
      value: function proxy(target, name, callback) {
        var _this2 = this;

        var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (Array.isArray(name)) {
          name.forEach(function (item) {
            return _this2.proxy(target, item, callback, option);
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
    uuid: uuid,
    escape: escape,
    unescape: unescape
  });

  var Template = /*#__PURE__*/function () {
    function Template(term) {
      var _this = this;

      classCallCheck(this, Template);

      this.term = term;
      var _term$options = term.options,
          container = _term$options.container,
          fontFamily = _term$options.fontFamily,
          fontSize = _term$options.fontSize,
          fontColor = _term$options.fontColor,
          pixelRatio = _term$options.pixelRatio,
          width = _term$options.width,
          height = _term$options.height,
          borderRadius = _term$options.borderRadius,
          boxShadow = _term$options.boxShadow,
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
      this.$textarea = document.createElement('textarea');
      this.$textarea.classList.add('term-textarea');
      this.$container.appendChild(this.$textarea);

      if (recorder) {
        this.$recorder = document.createElement('div');
        this.$recorder.classList.add('term-recorder');
        this.$recorder.innerHTML = "\n                <div class=\"term-recorder-size\"></div>\n                <div class=\"term-recorder-duration\"></div>\n                <div class=\"term-recorder-btn\"></div> \n            ";
        this.$recorderSize = this.$recorder.querySelector('.term-recorder-size');
        this.$recorderDuration = this.$recorder.querySelector('.term-recorder-duration');
        this.$recorderBtn = this.$recorder.querySelector('.term-recorder-btn');
        this.$header.appendChild(this.$recorder);
      }

      if (!document.getElementById('term-ui-style')) {
        this.$style = document.createElement('style');
        this.$style.id = 'term-ui-style';
        this.$style.textContent = [".term-container{font-family:".concat(fontFamily, ";font-size:").concat(fontSize, "px;color:").concat(fontColor, ";position:relative;}"), '.term-container ::-webkit-scrollbar{width:5px;}', '.term-container ::-webkit-scrollbar-thumb{background-color:#666;border-radius:5px;}', '.term-container ::-webkit-scrollbar-thumb:hover{background-color:#ccc;}', ".term-canvas{width:100%;height:100%;border-radius:".concat(borderRadius, "px;box-shadow:").concat(boxShadow, ";}"), '.term-textarea{position:absolute;width:20px;height:20px;opacity:0;pointer-events:none;user-select:none;}', '.term-content{position:absolute;width:100%;right:0;left:0; overflow: auto;}', '.term-content:hover{cursor:text}', '.term-recorder{display:flex;align-items:center;position:absolute;right:10px;top:10px;}', '.term-recorder-size, .term-recorder-duration{display:none;margin-right:10px;}', '.term-recorder-btn{height:18px;width:18px;background:#F44336;border-radius:3px;cursor:pointer;}', '.term-recorder.recording .term-recorder-btn{background:#FFC107;}', '.term-recorder.recording .term-recorder-size{display:block;}', '.term-recorder.recording .term-recorder-duration{display:block;}', '.term-header{position:absolute;width:100%;top:0;left:0;right:0;}', '.term-footer{position:absolute;width:100%;bottom:0;left:0;right:0;}', '.is-dragging.term-container{opacity:.95};'].join('');
        document.head.appendChild(this.$style);
      }
    }

    createClass(Template, [{
      key: "destroy",
      value: function destroy() {
        this.$container.innerHTML = '';

        if (!this.term.constructor.instances.length) {
          document.head.removeChild(this.$style);
        }
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

  var INPUT = 'input';
  var OUTPUT = 'output';
  var recorderOptions = {
    videoBitsPerSecond: 5000000,
    mimeType: 'video/webm'
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var renderer = /*#__PURE__*/function () {
    function renderer(term) {
      classCallCheck(this, renderer);

      this.term = term;
      var $canvas = term.template.$canvas,
          _term$options = term.options,
          pixelRatio = _term$options.pixelRatio,
          fontSize = _term$options.fontSize,
          fontFamily = _term$options.fontFamily,
          backgroundColor = _term$options.backgroundColor;
      this.$tmp = document.createElement('div');
      this.canvasHeight = $canvas.height;
      this.canvasWidth = $canvas.width;
      this.contentPadding = [45, 15, 15, 15].map(function (item) {
        return item * pixelRatio;
      });
      this.contentHeight = this.canvasHeight - this.contentPadding[0] - this.contentPadding[2];
      this.contentWidth = this.canvasWidth - this.contentPadding[1] - this.contentPadding[3];
      this.logGap = 10 * pixelRatio;
      this.fontSize = fontSize * pixelRatio;
      this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
      this.btnSize = 6 * pixelRatio;
      this.cursorColor = ['#FFF', backgroundColor];
      this.cursorSize = 5 * pixelRatio;
      this.maxLength = Math.floor(this.contentHeight / (this.fontSize + this.logGap));
      this.ctx = $canvas.getContext('2d');
      this.ctx.font = "".concat(this.fontSize, "px ").concat(fontFamily);
      this.ctx.textBaseline = 'top';
      this.cacheLogs = [];
      this.renderLogs = [];
      this.term.emit('size', {
        header: this.contentPadding[0] / pixelRatio,
        content: this.contentHeight / pixelRatio,
        footer: this.contentPadding[2] / pixelRatio
      });
      this.emit = this.emit.bind(this);
      this.clear = this.clear.bind(this);
      this.render();
      this.cursor = false;
      (function loop() {
        var _this = this;

        this.cursorTimer = setTimeout(function () {
          _this.cursor = !_this.cursor;

          _this.renderCursor();

          loop.call(_this);
        }, 500);
      }).call(this);
    }

    createClass(renderer, [{
      key: "render",
      value: function render() {
        this.renderBackground();
        this.renderTopbar();
        this.renderContent();
        return this;
      }
    }, {
      key: "renderBackground",
      value: function renderBackground() {
        var backgroundColor = this.term.options.backgroundColor;
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      }
    }, {
      key: "renderTopbar",
      value: function renderTopbar() {
        var _this2 = this;

        var _this$term$options = this.term.options,
            title = _this$term$options.title,
            fontColor = _this$term$options.fontColor;
        this.ctx.fillStyle = fontColor;

        var _this$ctx$measureText = this.ctx.measureText(title),
            width = _this$ctx$measureText.width;

        this.ctx.fillText(title, this.canvasWidth / 2 - width / 2, this.contentPadding[1] - this.btnSize / 2);
        this.btnColor.forEach(function (item, index) {
          _this2.ctx.beginPath();

          _this2.ctx.arc(_this2.contentPadding[3] + _this2.btnSize + index * _this2.btnSize * 3.6, _this2.contentPadding[1] + _this2.btnSize, _this2.btnSize, 0, 360, false);

          _this2.ctx.fillStyle = item;

          _this2.ctx.fill();

          _this2.ctx.closePath();
        });
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        var _this$term$options2 = this.term.options,
            pixelRatio = _this$term$options2.pixelRatio,
            fontColor = _this$term$options2.fontColor;

        for (var i = 0; i < this.renderLogs.length; i += 1) {
          var logs = this.renderLogs[i];

          for (var j = 0; j < logs.length; j += 1) {
            var log = logs[j];
            var top = this.contentPadding[0] + (this.fontSize + this.logGap) * i;

            if (log.background) {
              this.ctx.fillStyle = log.background;
              this.ctx.fillRect(log.left, top, log.width, this.fontSize);
            }

            this.ctx.fillStyle = log.color || fontColor;
            this.ctx.fillText(log.text, log.left, top);
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
          this.scrollHeight = this.cacheLogs.length * (this.fontSize + this.logGap) / pixelRatio;
          var lastlogs = this.renderLogs[this.renderLogs.length - 1];
          var lastIndex = this.cacheLogs.indexOf(lastlogs);
          this.scrollTop = ((lastIndex + 1) * (this.fontSize + this.logGap) - this.contentHeight) / pixelRatio;
          this.term.emit('scroll', {
            scrollHeight: clamp(this.scrollHeight, 0, Infinity),
            scrollTop: clamp(this.scrollTop, 0, Infinity)
          });
        }
      }
    }, {
      key: "renderByTop",
      value: function renderByTop(top) {
        var pixelRatio = this.term.options.pixelRatio;
        var startIndex = Math.ceil(top * pixelRatio / (this.fontSize + this.logGap));
        this.renderLogs = this.cacheLogs.slice(startIndex, startIndex + this.maxLength);
        this.render();
      }
    }, {
      key: "renderCursor",
      value: function renderCursor() {
        var _this$cursorPos2 = this.cursorPos,
            left = _this$cursorPos2.left,
            top = _this$cursorPos2.top;

        if (this.renderEditable && left && top) {
          this.ctx.fillStyle = this.cursor ? this.cursorColor[0] : this.cursorColor[1];
          this.ctx.fillRect(left, top, this.cursorSize, this.fontSize);
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
          replace: 'undefined|boolean'
        });

        if (data.replace) {
          var lastLogs = this.cacheLogs[this.cacheLogs.length - 1];

          if (lastLogs && lastLogs.group) {
            this.cacheLogs = this.cacheLogs.filter(function (item) {
              return item.group !== lastLogs.group;
            });
          }
        }

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
          data.text = prefix + escape(data.text);
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
            var color = child.getAttribute ? child.getAttribute('color') : '';
            var background = child.getAttribute ? child.getAttribute('background') : '';
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

                if (nextLetterWidth < this.contentWidth) {
                  textTmp += letter;
                  left = nextLetterWidth;
                } else {
                  var _log = _objectSpread$1({}, data, {
                    width: this.ctx.measureText(textTmp).width,
                    left: isNewLine ? this.contentPadding[3] : lastLeft,
                    text: textTmp,
                    color: color,
                    background: background
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

              var log = _objectSpread$1({}, data, {
                width: this.ctx.measureText(textTmp).width,
                left: this.contentPadding[3],
                text: textTmp,
                color: color,
                background: background
              });

              if (result[index]) {
                result[index].push(log);
              } else {
                result[index] = [log];
                result[index].group = group;
              }
            } else {
              var _log2 = _objectSpread$1({}, data, {
                width: wordSize,
                text: word,
                left: left,
                color: color,
                background: background
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

        return result;
      }
    }, {
      key: "clear",
      value: function clear() {
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
          var left = this.lastRenderLog.left + this.lastRenderLog.width + pixelRatio * 4;
          var top = this.contentPadding[0] + (this.fontSize + this.logGap) * (this.renderLogs.length - 1);
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

    return renderer;
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
      this.input = this.input.bind(this);
      this.output = this.output.bind(this);
      this.output(welcome).input('');
      term.on('input', function (text) {
        if (drawer.cacheEditable) {
          _this.input(text, true);
        }
      });
      term.on('enter', function (text) {
        if (drawer.cacheEditable) {
          _this.execute(text);
        }
      });
    }

    createClass(Commander, [{
      key: "execute",
      value: function execute(text) {
        var _this2 = this;

        if (!text.trim()) return this.input('');
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
                    return _this2.output(data, true).input('');
                  }

                  return _this2;
                }).catch(function (error) {
                  var errorType = optionValidator.kindOf(error);
                  var errorText = errorType === 'error' ? "".concat(String(error)) : "Error: ".concat(String(error));
                  var message = "<d color=\"red\">".concat(errorText, "</d>");
                  return _this2.output(message, true).input('');
                });
              }

              if (typeof result !== 'undefined') {
                return this.output(result).input('');
              }

              return this;
            } catch (error) {
              var message = "<d color=\"red\">".concat(String(error), "</d>");
              return this.output(message).input('');
            }
          } else {
            return this.output(action.output).input('');
          }
        } else {
          var _result = notFound.call(this.term, text, argv);

          return this.output(_result).input('');
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
      value: function output(text) {
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
      value: function input(text) {
        var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.term.drawer.emit({
          type: INPUT,
          replace: replace,
          text: String(text)
        });
        return this;
      }
    }]);

    return Commander;
  }();

  var Recorder = /*#__PURE__*/function () {
    function Recorder(term) {
      classCallCheck(this, Recorder);

      this.term = term;
      this.blobs = [];
    }

    createClass(Recorder, [{
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

        this.recorder.start(1000);
      }
    }, {
      key: "end",
      value: function end() {
        this.recorder.stop();
        var url = URL.createObjectURL(new Blob(this.blobs));
        download(url, "".concat(Date.now(), ".webm"));
        URL.revokeObjectURL(url);
        this.blobs = [];
        this.term.emit('end');
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

    return Recorder;
  }();

  var Inquirer = /*#__PURE__*/function () {
    function Inquirer(term) {
      classCallCheck(this, Inquirer);

      this.term = term;
      this.radio = this.radio.bind(this);
      this.checkbox = this.checkbox.bind(this);
    }

    createClass(Inquirer, [{
      key: "radio",
      value: function radio(list, validate) {
        optionValidator(list, [{
          key: 'string|number',
          text: 'string|number'
        }]);
        var text = list.map(function (item) {
          return item.text;
        }).join('\n');
        this.term.output(text, true);
      }
    }, {
      key: "checkbox",
      value: function checkbox(list, validate) {
        optionValidator(list, [{
          key: 'string|number',
          text: 'string|number'
        }]);
      }
    }]);

    return Inquirer;
  }();

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$1(Derived) { return function () { var Super = getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var id = 0;
  var instances = [];

  var Term = /*#__PURE__*/function (_Emitter) {
    inherits(Term, _Emitter);

    var _super = _createSuper$1(Term);

    createClass(Term, null, [{
      key: "instances",
      get: function get() {
        return instances;
      }
    }, {
      key: "version",
      get: function get() {
        return '1.0.4';
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
          width: 600,
          height: 500,
          actions: [],
          parseOpt: {},
          recorder: true,
          draggable: true,
          dragOpt: {},
          borderRadius: 5,
          fontSize: 13,
          fontFamily: 'Arial',
          fontColor: '#b0b2b6',
          title: 'Term Web',
          prefix: 'root@linux: ~ <d color="#00f501">$</d> ',
          welcome: "Last login: ".concat(new Date()),
          loading: function loading() {
            return '<d color="yellow">Loading...</d>';
          },
          boxShadow: 'rgba(0, 0, 0, 0.55) 0px 20px 68px',
          backgroundColor: 'rgb(42, 39, 52)',
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
          borderRadius: 'number',
          fontSize: 'number',
          fontFamily: 'string',
          fontColor: 'string',
          title: 'string',
          prefix: 'string',
          welcome: 'string',
          loading: 'function',
          boxShadow: 'string',
          backgroundColor: 'string',
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
      _this.options = optionValidator(_objectSpread$2({}, Term.default, {}, options), Term.scheme);
      _this.isFocus = false;
      _this.template = new Template(assertThisInitialized(_this));
      _this.events = new Events(assertThisInitialized(_this));
      _this.drawer = new renderer(assertThisInitialized(_this));
      _this.commander = new Commander(assertThisInitialized(_this));
      _this.inquirer = new Inquirer(assertThisInitialized(_this));
      _this.recorder = new Recorder(assertThisInitialized(_this));
      _this.input = _this.commander.input;
      _this.output = _this.commander.output;
      _this.clear = _this.drawer.clear;
      _this.radio = _this.inquirer.radio;
      _this.checkbox = _this.inquirer.checkbox;
      _this.start = _this.recorder.start;
      _this.end = _this.recorder.end;
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
        this.emit('destroy');
      }
    }]);

    return Term;
  }(Emitter);

  return Term;

})));
//# sourceMappingURL=term-web.js.map
