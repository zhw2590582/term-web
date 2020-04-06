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

  var Events = /*#__PURE__*/function () {
    function Events(term) {
      classCallCheck(this, Events);

      this.destroyEvents = [];
      this.proxy = this.proxy.bind(this);
      var recorder = term.options.recorder,
          _term$template = term.template,
          $recorder = _term$template.$recorder,
          $recorderSize = _term$template.$recorderSize,
          $recorderDuration = _term$template.$recorderDuration,
          $recorderBtn = _term$template.$recorderBtn,
          _term$template2 = term.template,
          $textarea = _term$template2.$textarea,
          $main = _term$template2.$main,
          $scrollbar = _term$template2.$scrollbar,
          $header = _term$template2.$header,
          $footer = _term$template2.$footer;
      this.proxy(document, ['click', 'contextmenu'], function (event) {
        if (event.composedPath && event.composedPath().indexOf($main) > -1) {
          term.isFocus = true;
          term.emit('focus');
        } else {
          term.isFocus = false;
          term.emit('blur');
        }
      });
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
      this.proxy($main, 'scroll', function () {
        if (canRenderByTop) {
          term.drawer.renderByTop($main.scrollTop);
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
        $main.scrollTo(0, scrollTop);
      });
      term.on('cursor', function (_ref2) {
        var left = _ref2.left,
            top = _ref2.top;
        $textarea.style.top = "".concat(top, "px");
        $textarea.style.left = "".concat(left, "px");
      });
      term.on('size', function (_ref3) {
        var top = _ref3.top,
            height = _ref3.height,
            bottom = _ref3.bottom;
        $header.style.height = "".concat(top, "px");
        $footer.style.height = "".concat(bottom, "px");
        $main.style.top = "".concat(top, "px");
        $main.style.height = "".concat(height, "px");
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
  function download(url, name) {
    var elink = document.createElement('a');
    elink.style.display = 'none';
    elink.href = url;
    elink.download = name;
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
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
    download: download,
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
      this.$main = document.createElement('div');
      this.$main.classList.add('term-main');
      this.$container.appendChild(this.$main);
      this.$scrollbar = document.createElement('div');
      this.$scrollbar.classList.add('term-scrollbar');
      this.$scrollbar.style.height = '0';
      this.$main.appendChild(this.$scrollbar);
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
        this.$style.textContent = [".term-container{font-family:".concat(fontFamily, ";font-size:").concat(fontSize, "px;color:").concat(fontColor, ";position:relative;}"), '.term-container ::-webkit-scrollbar{width:5px;}', '.term-container ::-webkit-scrollbar-thumb{background-color:#666;border-radius:5px;}', '.term-container ::-webkit-scrollbar-thumb:hover{background-color:#ccc;}', ".term-canvas{width:100%;height:100%;border-radius:".concat(borderRadius, "px;box-shadow:").concat(boxShadow, ";}"), '.term-textarea{position:absolute;width:20px;height:20px;opacity:0;pointer-events:none;user-select:none;}', '.term-main{position:absolute;width:100%;right:0;left:0; overflow: auto;}', '.term-main:hover{cursor:text}', '.term-recorder{display:flex;align-items:center;position:absolute;right:10px;top:10px;}', '.term-recorder-size, .term-recorder-duration{display:none;margin-right:10px;}', '.term-recorder-btn{height:18px;width:18px;background:#F44336;border-radius:3px;cursor:pointer;}', '.term-recorder.recording .term-recorder-btn{background:#FFC107;}', '.term-recorder.recording .term-recorder-size{display:block;}', '.term-recorder.recording .term-recorder-duration{display:block;}', '.term-header{position:absolute;width:100%;top:0;left:0;right:0;}', '.term-footer{position:absolute;width:100%;bottom:0;left:0;right:0;}'].join('');
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

  var Decoder = /*#__PURE__*/function () {
    function Decoder(term) {
      classCallCheck(this, Decoder);

      this.term = term;
      this.span = document.createElement('span');
    }

    createClass(Decoder, [{
      key: "decode",
      value: function decode(data) {
        if (!data) return [];
        optionValidator(data, {
          type: function type(val) {
            if (![INPUT, OUTPUT].includes(val)) {
              return "The type must be \"".concat(INPUT, "\" or \"").concat(OUTPUT, "\"");
            }

            return true;
          },
          text: 'string',
          color: 'undefined|string',
          replace: 'undefined|boolean'
        });
        var _this$term = this.term,
            _this$term$drawer = _this$term.drawer,
            ctx = _this$term$drawer.ctx,
            width = _this$term$drawer.width,
            padding = _this$term$drawer.padding,
            _this$term$options = _this$term.options,
            prefix = _this$term$options.prefix,
            fontColor = _this$term$options.fontColor;

        if (data.type === INPUT) {
          data.text = prefix + escape(data.text);
        }

        var result = [];
        var lines = data.text.split(/\r?\n/);
        var scriptReg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        var index = 0;
        var left = padding[3];

        for (var i = 0; i < lines.length; i += 1) {
          var line = lines[i];
          this.span.innerHTML = line.replace(scriptReg, '');

          for (var j = 0; j < this.span.childNodes.length; j += 1) {
            var child = this.span.childNodes[j];
            var word = child.textContent;
            var wordSize = ctx.measureText(word).width;
            var color = child.getAttribute ? child.getAttribute('color') || fontColor : fontColor;
            var nextWordWidth = left + wordSize;

            if (nextWordWidth > width) {
              var textTmp = '';
              var isNewLine = false;
              var lastLeft = left;

              var letters = toConsumableArray(word);

              for (var k = 0; k < letters.length; k += 1) {
                var letter = letters[k];
                var letterSize = ctx.measureText(letter).width;
                var nextLetterWidth = left + letterSize;

                if (nextLetterWidth < width) {
                  textTmp += letter;
                  left = nextLetterWidth;
                } else {
                  var _log = {
                    width: ctx.measureText(textTmp).width,
                    left: isNewLine ? padding[3] : lastLeft,
                    text: textTmp,
                    color: color
                  };

                  if (result[index]) {
                    result[index].push(_log);
                  } else {
                    result[index] = [_log];
                  }

                  index += 1;
                  textTmp = letter;
                  isNewLine = true;
                  left = padding[3] + letterSize;
                }
              }

              var log = {
                width: ctx.measureText(textTmp).width,
                left: padding[3],
                text: textTmp,
                color: color
              };

              if (result[index]) {
                result[index].push(log);
              } else {
                result[index] = [log];
              }
            } else {
              var _log2 = {
                width: wordSize,
                text: word,
                left: left,
                color: color
              };

              if (result[index]) {
                result[index].push(_log2);
              } else {
                result[index] = [_log2];
              }

              left = nextWordWidth;
            }
          }

          index += 1;
          left = padding[3];
        }

        return result;
      }
    }]);

    return Decoder;
  }();

  var Drawer = /*#__PURE__*/function () {
    function Drawer(term) {
      classCallCheck(this, Drawer);

      this.term = term;
      var _term$options = term.options,
          pixelRatio = _term$options.pixelRatio,
          fontSize = _term$options.fontSize,
          fontFamily = _term$options.fontFamily,
          backgroundColor = _term$options.backgroundColor;
      this.gap = 10 * pixelRatio;
      this.fontSize = fontSize * pixelRatio;
      this.padding = [45, 15, 15, 15].map(function (item) {
        return item * pixelRatio;
      });
      this.cursorColor = ['#FFF', backgroundColor];
      this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
      this.btnSize = 6 * pixelRatio;
      this.$canvas = term.template.$canvas;
      var _this$$canvas = this.$canvas,
          width = _this$$canvas.width,
          height = _this$$canvas.height;
      this.height = height - this.padding[0] - this.padding[2];
      this.width = width - this.padding[1] - this.padding[3];
      this.totalLine = Math.floor(this.height / (this.fontSize + this.gap));
      this.ctx = this.$canvas.getContext('2d');
      this.ctx.font = "".concat(this.fontSize, "px ").concat(fontFamily);
      this.ctx.textBaseline = 'top';
      this.inputs = [];
      this.logs = [];
      this.renderLogs = [];
      this.draw();
      this.draw = this.draw.bind(this);
      this.cursor = false;
      (function loop() {
        var _this = this;

        this.timer = setTimeout(function () {
          _this.cursor = !_this.cursor;

          _this.drawCursor();

          loop.call(_this);
        }, 500);
      }).call(this);
    }

    createClass(Drawer, [{
      key: "draw",
      value: function draw(input, startIndex) {
        this.drawBackground();
        this.drawTopbar();
        this.drawContent(input, startIndex);
        return this;
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var backgroundColor = this.term.options.backgroundColor;
        var _this$$canvas2 = this.$canvas,
            width = _this$$canvas2.width,
            height = _this$$canvas2.height;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(0, 0, width, height);
      }
    }, {
      key: "drawTopbar",
      value: function drawTopbar() {
        var _this2 = this;

        var _this$term$options = this.term.options,
            title = _this$term$options.title,
            fontColor = _this$term$options.fontColor;
        this.ctx.fillStyle = fontColor;

        var _this$ctx$measureText = this.ctx.measureText(title),
            width = _this$ctx$measureText.width;

        this.ctx.fillText(title, this.$canvas.width / 2 - width / 2, this.padding[1] - this.btnSize / 2);
        this.btnColor.forEach(function (item, index) {
          _this2.ctx.beginPath();

          _this2.ctx.arc(_this2.padding[3] + _this2.btnSize + index * _this2.btnSize * 3.6, _this2.padding[1] + _this2.btnSize, _this2.btnSize, 0, 360, false);

          _this2.ctx.fillStyle = item;

          _this2.ctx.fill();

          _this2.ctx.closePath();
        });
      }
    }, {
      key: "drawContent",
      value: function drawContent(input, startIndex) {
        var _this3 = this;

        if (input) {
          if (input.replace) {
            var lastInput = this.inputs[this.inputs.length - 1];

            if (lastInput) {
              this.logs = this.logs.filter(function (item) {
                return item.input !== lastInput;
              });
            }
          }

          this.inputs.push(input);
          this.term.decoder.decode(input).forEach(function (item) {
            item.input = input;

            _this3.logs.push(item);
          });
        }

        if (typeof startIndex === 'number') {
          var renderLogs = this.logs.slice(startIndex, startIndex + this.totalLine);
          this.render(renderLogs);
        } else {
          var _renderLogs = this.logs.slice(-this.totalLine);

          this.render(_renderLogs);
        }
      }
    }, {
      key: "renderByTop",
      value: function renderByTop(top) {
        var pixelRatio = this.term.options.pixelRatio;
        var startIndex = Math.ceil(top * pixelRatio / (this.fontSize + this.gap));
        this.draw(null, startIndex);
      }
    }, {
      key: "render",
      value: function render(renderLogs) {
        var pixelRatio = this.term.options.pixelRatio;
        this.renderLogs = renderLogs;

        for (var i = 0; i < renderLogs.length; i += 1) {
          var logs = renderLogs[i];

          if (logs) {
            for (var j = 0; j < logs.length; j += 1) {
              var log = logs[j];
              this.ctx.fillStyle = log.color;

              var _top = this.padding[0] + (this.fontSize + this.gap) * i;

              this.ctx.fillText(log.text, log.left, _top);
            }
          }
        }

        var _this$cursorPos = this.cursorPos,
            left = _this$cursorPos.left,
            top = _this$cursorPos.top;
        this.term.emit('cursor', {
          left: left / pixelRatio,
          top: top / pixelRatio
        });
        this.term.emit('size', {
          top: this.padding[0] / pixelRatio,
          height: this.height / pixelRatio,
          bottom: this.padding[2] / pixelRatio
        });
        var lastlogInInput = this.logs[this.logs.length - 1];
        var lastlogInRender = this.renderLogs[this.renderLogs.length - 1];

        if (lastlogInInput === lastlogInRender) {
          this.scrollHeight = this.logs.length * (this.fontSize + this.gap) / pixelRatio;
          var lastlog = this.renderLogs[this.renderLogs.length - 1];
          var lastIndex = this.logs.indexOf(lastlog);
          this.scrollTop = ((lastIndex + 1) * (this.fontSize + this.gap) - this.height) / pixelRatio;
          this.term.emit('scroll', {
            scrollHeight: this.scrollHeight,
            scrollTop: this.scrollTop
          });
        }
      }
    }, {
      key: "drawCursor",
      value: function drawCursor() {
        var _this$cursorPos2 = this.cursorPos,
            left = _this$cursorPos2.left,
            top = _this$cursorPos2.top;
        var pixelRatio = this.term.options.pixelRatio;

        if (this.renderEditable) {
          this.ctx.fillStyle = this.cursor ? this.cursorColor[0] : this.cursorColor[1];
          this.ctx.fillRect(left, top, pixelRatio * 5, this.fontSize);
        }
      }
    }, {
      key: "editable",
      get: function get() {
        var lastlog = this.logs[this.logs.length - 1];
        return this.term.isFocus && lastlog && lastlog.length && lastlog.input.type === INPUT;
      }
    }, {
      key: "renderEditable",
      get: function get() {
        var lastlogInInput = this.logs[this.logs.length - 1];
        var lastlogInRender = this.renderLogs[this.renderLogs.length - 1];
        return lastlogInInput === lastlogInRender && this.term.isFocus && lastlogInRender && lastlogInRender.length && lastlogInRender.input.type === INPUT;
      }
    }, {
      key: "cursorPos",
      get: function get() {
        if (this.renderEditable) {
          var pixelRatio = this.term.options.pixelRatio;
          var lastlog = this.renderLogs[this.renderLogs.length - 1];
          var lastLine = lastlog[lastlog.length - 1];
          var left = lastLine.left + lastLine.width + pixelRatio * 4;
          var top = this.padding[0] + (this.fontSize + this.gap) * (this.renderLogs.length - 1);
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
      this.input = this.input.bind(this);
      this.output = this.output.bind(this);
      this.clear = this.clear.bind(this);
      this.output(welcome).input('');
      term.on('input', function (text) {
        if (drawer.editable) {
          _this.input(text, true);
        }
      });
      term.on('enter', function (text) {
        if (drawer.editable) {
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
                  return _this2.output(data, true).input('');
                }).catch(function (error) {
                  var errorType = optionValidator.kindOf(error);
                  var errorText = errorType === 'error' ? "".concat(String(error)) : "Error: ".concat(String(error));
                  var message = "<d color=\"red\">".concat(errorText, "</d>");
                  return _this2.output(message, true).input('');
                });
              }

              return this.output(result).input('');
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
        this.term.drawer.draw({
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
        this.term.drawer.draw({
          type: INPUT,
          replace: replace,
          text: String(text)
        });
        return this;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.term.drawer.logs = [];
        this.term.drawer.draw();
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

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
        return '1.0.1';
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
      _this.options = optionValidator(_objectSpread({}, Term.default, {}, options), Term.scheme);
      _this.isFocus = false;
      _this.template = new Template(assertThisInitialized(_this));
      _this.events = new Events(assertThisInitialized(_this));
      _this.decoder = new Decoder(assertThisInitialized(_this));
      _this.drawer = new Drawer(assertThisInitialized(_this));
      _this.commander = new Commander(assertThisInitialized(_this));
      _this.recorder = new Recorder(assertThisInitialized(_this));
      _this.input = _this.commander.input;
      _this.output = _this.commander.output;
      _this.clear = _this.commander.clear;
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
