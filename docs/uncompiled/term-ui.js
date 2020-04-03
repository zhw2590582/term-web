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
      var $canvas = term.template.$canvas;
      this.proxy(document, ['click', 'contextmenu'], function (event) {
        if (event.composedPath && event.composedPath().indexOf($canvas) > -1) {
          term.isFocus = true;
          term.emit('focus');
        } else {
          term.isFocus = false;
          term.emit('blur');
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

  var Template = /*#__PURE__*/function () {
    function Template(term) {
      var _this = this;

      classCallCheck(this, Template);

      this.term = term;
      this.$container = term.options.container;
      errorHandle(term.constructor.instances.every(function (ins) {
        return ins.options.container !== _this.$container;
      }), 'Cannot mount multiple instances on the same dom element, please destroy the previous instance first.');
      this.$canvas = document.createElement('canvas');
      this.$canvas.classList.add('term-canvas');
      this.$container.appendChild(this.$canvas);

      if (!document.getElementById('term-ui-style')) {
        this.$style = document.createElement('style');
        this.$style.id = 'term-ui-style';
        this.$style.textContent = '.term-canvas:hover{cursor: text}';
        document.head.appendChild(this.$style);
      }

      this.update();
    }

    createClass(Template, [{
      key: "update",
      value: function update() {
        var _this$term$options = this.term.options,
            width = _this$term$options.width,
            height = _this$term$options.height,
            pixelRatio = _this$term$options.pixelRatio,
            borderRadius = _this$term$options.borderRadius,
            boxShadow = _this$term$options.boxShadow;
        this.$canvas.style.width = "".concat(width, "px");
        this.$canvas.style.height = "".concat(height, "px");
        this.$canvas.width = width * pixelRatio;
        this.$canvas.height = height * pixelRatio;
        this.$canvas.style.borderRadius = "".concat(borderRadius, "px");
        this.$canvas.style.boxShadow = boxShadow;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.$style) {
          document.head.removeChild(this.$style);
        }

        this.$container.innerHTML = '';
      }
    }]);

    return Template;
  }();

  var Translate = function Translate(term) {
    classCallCheck(this, Translate);

    this.term = term;
  };

  var INPUT = 'input';
  var OUTPUT = 'output';
  var CHECKBOX = 'checkbox';
  var RADIO = 'radio';

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var Drawer = /*#__PURE__*/function () {
    function Drawer(term) {
      classCallCheck(this, Drawer);

      this.term = term;
      var pixelRatio = term.options.pixelRatio;
      this.gap = 15 * pixelRatio;
      this.fontSize = 14 * pixelRatio;
      this.padding = [45, 15, 15, 15].map(function (item) {
        return item * pixelRatio;
      });
      this.cursorColor = '#FFF';
      this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
      this.btnSize = 6 * pixelRatio;
      this.$canvas = term.template.$canvas;
      this.ctx = this.$canvas.getContext('2d');
      this.ctx.font = "".concat(this.fontSize, "px Arial");
      this.ctx.textBaseline = 'top';
      this.logs = [];
      this.update();
      this.cursorOn = false;
      (function loop() {
        var _this = this;

        this.timer = setTimeout(function () {
          _this.cursorOn = !_this.cursorOn;

          _this.drawCursor();

          loop.call(_this);
        }, 600);
      }).call(this);
    }

    createClass(Drawer, [{
      key: "update",
      value: function update(data) {
        this.lineStartIndex = 0;
        this.lineEndIndex = 0;
        var _this$$canvas = this.$canvas,
            width = _this$$canvas.width,
            height = _this$$canvas.height;
        this.height = height - this.padding[0] - this.padding[2];
        this.width = width - this.padding[1] - this.padding[3];
        this.totalLine = Math.floor(this.height / (this.fontSize + this.gap));
        this.drawBackground();
        this.drawTopbar();
        this.drawContent(data);
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
      value: function drawContent(data) {
        var _this$term$options2 = this.term.options,
            backgroundColor = _this$term$options2.backgroundColor,
            fontColor = _this$term$options2.fontColor;
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(this.padding[3], this.padding[0], this.width, this.height);

        if (data) {
          switch (data.style) {
            case CHECKBOX:
              this.logs.push(this.getLogCheckbox(data));
              break;

            case RADIO:
              this.logs.push(this.getLogRadio(data));
              break;

            default:
              this.logs.push(this.getLogNormal(data));
              break;
          }
        }

        var lineIndex = 0;

        for (var j = 0; j < this.logs.length; j += 1) {
          for (var k = 0; k < this.logs[j].lines.length; k += 1) {
            lineIndex += 1;

            if (this.lineStartIndex < lineIndex && this.lineStartIndex + this.totalLine > lineIndex) {
              var text = this.logs[j].lines[k];
              var top = this.padding[0] + (this.fontSize + this.gap) * (lineIndex - 1);
              this.ctx.fillStyle = this.logs[j].color || fontColor;
              this.ctx.fillText(text, this.padding[3], top);
              this.lineEndIndex += 1;
            }
          }
        }
      }
    }, {
      key: "drawCursor",
      value: function drawCursor() {
        var _this$term$options3 = this.term.options,
            pixelRatio = _this$term$options3.pixelRatio,
            backgroundColor = _this$term$options3.backgroundColor;

        if (this.lastLog && this.lastLog.type === INPUT && this.lastLine) {
          this.update();
          var left = this.ctx.measureText(this.lastLine).width + this.padding[3] + pixelRatio * 5;
          var top = this.padding[0] + (this.fontSize + this.gap) * (this.lineEndIndex - 1);

          if (this.term.isFocus) {
            this.ctx.fillStyle = this.cursorOn ? this.cursorColor : backgroundColor;
          } else {
            this.ctx.fillStyle = this.cursorColor;
          }

          this.ctx.fillRect(left, top, pixelRatio * 5, this.fontSize);
        }
      }
    }, {
      key: "getLogNormal",
      value: function getLogNormal(data) {
        var prefix = this.term.options.prefix;
        var temp = data.type === INPUT ? prefix : '';

        if (!data.text) {
          return _objectSpread({}, data, {
            lines: [temp]
          });
        }

        var lines = [];
        var temps = (data.text || '').split(/\r?\n/).filter(function (item) {
          return item.trim();
        });

        for (var i = 0; i < temps.length; i += 1) {
          for (var j = 0; j < temps[i].length; j += 1) {
            var char = temp + temps[i][j];

            if (this.ctx.measureText(char).width > this.width) {
              lines.push(temp);
              temp = '';
            } else {
              temp = char;
            }
          }

          lines.push(temp);
          temp = '';
        }

        return _objectSpread({}, data, {
          lines: lines
        });
      }
    }, {
      key: "getLogCheckbox",
      value: function getLogCheckbox(data) {//
      }
    }, {
      key: "getLogRadio",
      value: function getLogRadio(data) {//
      }
    }, {
      key: "destroy",
      value: function destroy() {
        clearTimeout(this.timer);
      }
    }, {
      key: "lastLog",
      get: function get() {
        return this.logs[this.logs.length - 1];
      }
    }, {
      key: "lastLine",
      get: function get() {
        return this.lastLog.lines[this.lastLog.lines.length - 1];
      }
    }]);

    return Drawer;
  }();

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
        return '1.0.0';
      }
    }, {
      key: "env",
      get: function get() {
        return '"development"';
      }
    }, {
      key: "default",
      get: function get() {
        return {
          container: '#term',
          title: 'Term UI',
          prefix: 'root@linux: ~ $',
          width: 600,
          height: 500,
          borderRadius: 5,
          font: 'Arial',
          fontColor: '#b0b2b6',
          welcome: '🎉 Welcome to use the Term UI',
          boxShadow: 'rgba(0, 0, 0, 0.55) 0px 20px 68px',
          backgroundColor: 'rgb(42, 39, 52)',
          pixelRatio: window.devicePixelRatio
        };
      }
    }, {
      key: "scheme",
      get: function get() {
        return {
          container: 'string|htmldivelement',
          title: 'string',
          prefix: 'string',
          width: 'number',
          height: 'number',
          borderRadius: 'number',
          font: 'string',
          welcome: 'string',
          boxShadow: 'string',
          backgroundColor: 'string',
          pixelRatio: 'number'
        };
      }
    }]);

    function Term() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Term);

      _this = _super.call(this);
      _this.options = {};

      _this.setOptions(options);

      _this.template = new Template(assertThisInitialized(_this));
      _this.events = new Events(assertThisInitialized(_this));
      _this.translate = new Translate(assertThisInitialized(_this));
      _this.drawer = new Drawer(assertThisInitialized(_this));
      _this.isFocus = false;
      _this.isDestroy = false;
      id += 1;
      _this.id = id;
      instances.push(assertThisInitialized(_this));

      _this.input({
        type: OUTPUT,
        text: _this.options.welcome
      }).input({
        type: INPUT
      });

      return _this;
    }

    createClass(Term, [{
      key: "setOptions",
      value: function setOptions() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (typeof options.container === 'string') {
          options.container = document.querySelector(options.container);
        }

        this.options = optionValidator(_objectSpread$1({}, Term.default, {}, this.options, {}, options), Term.scheme);
        return this;
      }
    }, {
      key: "input",
      value: function input() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.drawer.update(optionValidator(data, {
          type: 'string',
          text: 'undefined|string',
          color: 'undefined|string',
          style: 'undefined|string'
        }));
        return this;
      }
    }, {
      key: "exportPng",
      value: function exportPng() {
        return this;
      }
    }, {
      key: "exportGif",
      value: function exportGif() {
        return this;
      }
    }, {
      key: "exportVideo",
      value: function exportVideo() {
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.isDestroy = true;
        this.events.destroy();
        this.template.destroy();
        this.drawer.destroy();
        instances.splice(instances.indexOf(this), 1);
      }
    }]);

    return Term;
  }(Emitter);

  return Term;

})));
//# sourceMappingURL=term-ui.js.map
