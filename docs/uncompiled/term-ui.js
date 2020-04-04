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

  var Decoder = /*#__PURE__*/function () {
    function Decoder(term) {
      classCallCheck(this, Decoder);

      this.term = term;
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
          style: 'undefined|string'
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
          data.text = prefix + data.text;
        }

        var index = 0;
        var left = padding[3];
        var result = [];
        var lines = data.text.split(/\r?\n/);
        var scriptReg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

        for (var i = 0; i < lines.length; i += 1) {
          var line = lines[i];
          var span = document.createElement('span');
          span.innerHTML = line.replace(scriptReg, '');

          for (var j = 0; j < span.childNodes.length; j += 1) {
            var child = span.childNodes[j];
            var word = child.textContent;
            var wordSize = ctx.measureText(word).width;
            var color = child.getAttribute ? child.getAttribute('color') || fontColor : fontColor;

            if (wordSize > width) {
              var letters = toConsumableArray(word);

              for (var k = 0; k < letters.length; k += 1) {
                var letter = letters[k];
                var letterSize = ctx.measureText(letter).width;
                var nextWidth = left + letterSize;

                if (nextWidth < width) {
                  var log = {
                    width: letterSize,
                    text: letter,
                    left: left,
                    color: color
                  };

                  if (result[index]) {
                    result[index].push(log);
                  } else {
                    result[index] = [log];
                  }

                  left = nextWidth;
                } else {
                  index += 1;
                  left = padding[3] + letterSize;
                  result[index] = [{
                    width: letterSize,
                    text: letter,
                    left: padding[3],
                    color: color
                  }];
                }
              }
            } else {
              var _nextWidth = left + wordSize;

              if (_nextWidth < width) {
                var _log = {
                  width: wordSize,
                  text: word,
                  left: left,
                  color: color
                };

                if (result[index]) {
                  result[index].push(_log);
                } else {
                  result[index] = [_log];
                }

                left = _nextWidth;
              } else {
                index += 1;
                left = padding[3] + wordSize;
                result[index] = [{
                  width: wordSize,
                  text: word,
                  left: padding[3],
                  color: color
                }];
              }
            }
          }

          index = 0;
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
          fontFamily = _term$options.fontFamily;
      this.gap = 10 * pixelRatio;
      this.fontSize = 14 * pixelRatio;
      this.padding = [45, 15, 15, 15].map(function (item) {
        return item * pixelRatio;
      });
      this.cursorColor = '#FFF';
      this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
      this.btnSize = 6 * pixelRatio;
      this.$canvas = term.template.$canvas;
      this.ctx = this.$canvas.getContext('2d');
      this.ctx.font = "".concat(this.fontSize, "px ").concat(fontFamily);
      this.ctx.textBaseline = 'top';
      this.startIndex = 0;
      this.inputs = [];
      this.logs = [];
      this.draw();
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
      value: function draw(data) {
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
      value: function drawContent(data) {
        var _this$logs;

        var backgroundColor = this.term.options.backgroundColor;
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(this.padding[3], this.padding[0], this.width, this.height);
        if (data) this.inputs.push(data);
        var result = this.term.decoder.decode(data);

        (_this$logs = this.logs).push.apply(_this$logs, toConsumableArray(result));

        var renderLogs = this.logs.slice(this.startIndex, this.totalLine);

        for (var i = 0; i < renderLogs.length; i += 1) {
          var logs = renderLogs[i];

          for (var j = 0; j < logs.length; j += 1) {
            var log = logs[j];
            this.ctx.fillStyle = log.color;
            var top = this.padding[0] + (this.fontSize + this.gap) * i;
            this.ctx.fillText(log.text, log.left, top);
          }
        }
      }
    }, {
      key: "drawCursor",
      value: function drawCursor() {
        clearTimeout(this.timer);
        var _this$term$options2 = this.term.options,
            pixelRatio = _this$term$options2.pixelRatio,
            backgroundColor = _this$term$options2.backgroundColor;
        var lastInput = this.inputs[this.inputs.length - 1];
        var lastlog = this.logs[this.logs.length - 1];

        if (lastInput && lastInput.type === INPUT && lastlog && lastlog.length) {
          this.draw();
          var lastLine = lastlog[lastlog.length - 1];
          var left = lastLine.left + lastLine.width + pixelRatio * 5;
          var top = this.padding[0] + (this.fontSize + this.gap) * (this.logs.length - 1 - this.startIndex);

          if (this.term.isFocus) {
            this.ctx.fillStyle = this.cursor ? this.cursorColor : backgroundColor;
          } else {
            this.ctx.fillStyle = this.cursorColor;
          }

          this.ctx.fillRect(left, top, pixelRatio * 5, this.fontSize);
        }
      }
    }]);

    return Drawer;
  }();

  /*!
   * hotkeys-js v3.7.6
   * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
   * 
   * Copyright (c) 2020 kenny wong <wowohoo@qq.com>
   * http://jaywcjlove.github.io/hotkeys
   * 
   * Licensed under the MIT license.
   */

  var isff = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase().indexOf('firefox') > 0 : false; // 绑定事件

  function addEvent(object, event, method) {
    if (object.addEventListener) {
      object.addEventListener(event, method, false);
    } else if (object.attachEvent) {
      object.attachEvent("on".concat(event), function () {
        method(window.event);
      });
    }
  } // 修饰键转换成对应的键码


  function getMods(modifier, key) {
    var mods = key.slice(0, key.length - 1);

    for (var i = 0; i < mods.length; i++) {
      mods[i] = modifier[mods[i].toLowerCase()];
    }

    return mods;
  } // 处理传的key字符串转换成数组


  function getKeys(key) {
    if (typeof key !== 'string') key = '';
    key = key.replace(/\s/g, ''); // 匹配任何空白字符,包括空格、制表符、换页符等等

    var keys = key.split(','); // 同时设置多个快捷键，以','分割

    var index = keys.lastIndexOf(''); // 快捷键可能包含','，需特殊处理

    for (; index >= 0;) {
      keys[index - 1] += ',';
      keys.splice(index, 1);
      index = keys.lastIndexOf('');
    }

    return keys;
  } // 比较修饰键的数组


  function compareArray(a1, a2) {
    var arr1 = a1.length >= a2.length ? a1 : a2;
    var arr2 = a1.length >= a2.length ? a2 : a1;
    var isIndex = true;

    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) isIndex = false;
    }

    return isIndex;
  }

  var _keyMap = {
    backspace: 8,
    tab: 9,
    clear: 12,
    enter: 13,
    "return": 13,
    esc: 27,
    escape: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    del: 46,
    "delete": 46,
    ins: 45,
    insert: 45,
    home: 36,
    end: 35,
    pageup: 33,
    pagedown: 34,
    capslock: 20,
    '⇪': 20,
    ',': 188,
    '.': 190,
    '/': 191,
    '`': 192,
    '-': isff ? 173 : 189,
    '=': isff ? 61 : 187,
    ';': isff ? 59 : 186,
    '\'': 222,
    '[': 219,
    ']': 221,
    '\\': 220
  }; // Modifier Keys

  var _modifier = {
    // shiftKey
    '⇧': 16,
    shift: 16,
    // altKey
    '⌥': 18,
    alt: 18,
    option: 18,
    // ctrlKey
    '⌃': 17,
    ctrl: 17,
    control: 17,
    // metaKey
    '⌘': 91,
    cmd: 91,
    command: 91
  };
  var modifierMap = {
    16: 'shiftKey',
    18: 'altKey',
    17: 'ctrlKey',
    91: 'metaKey',
    shiftKey: 16,
    ctrlKey: 17,
    altKey: 18,
    metaKey: 91
  };
  var _mods = {
    16: false,
    18: false,
    17: false,
    91: false
  };
  var _handlers = {}; // F1~F12 special key

  for (var k = 1; k < 20; k++) {
    _keyMap["f".concat(k)] = 111 + k;
  }

  var _downKeys = []; // 记录摁下的绑定键

  var _scope = 'all'; // 默认热键范围

  var elementHasBindEvent = []; // 已绑定事件的节点记录
  // 返回键码

  var code = function code(x) {
    return _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0);
  }; // 设置获取当前范围（默认为'所有'）


  function setScope(scope) {
    _scope = scope || 'all';
  } // 获取当前范围


  function getScope() {
    return _scope || 'all';
  } // 获取摁下绑定键的键值


  function getPressedKeyCodes() {
    return _downKeys.slice(0);
  } // 表单控件控件判断 返回 Boolean
  // hotkey is effective only when filter return true


  function filter(event) {
    var target = event.target || event.srcElement;
    var tagName = target.tagName;
    var flag = true; // ignore: isContentEditable === 'true', <input> and <textarea> when readOnly state is false, <select>

    if (target.isContentEditable || (tagName === 'INPUT' || tagName === 'TEXTAREA') && !target.readOnly) {
      flag = false;
    }

    return flag;
  } // 判断摁下的键是否为某个键，返回true或者false


  function isPressed(keyCode) {
    if (typeof keyCode === 'string') {
      keyCode = code(keyCode); // 转换成键码
    }

    return _downKeys.indexOf(keyCode) !== -1;
  } // 循环删除handlers中的所有 scope(范围)


  function deleteScope(scope, newScope) {
    var handlers;
    var i; // 没有指定scope，获取scope

    if (!scope) scope = getScope();

    for (var key in _handlers) {
      if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
        handlers = _handlers[key];

        for (i = 0; i < handlers.length;) {
          if (handlers[i].scope === scope) handlers.splice(i, 1);else i++;
        }
      }
    } // 如果scope被删除，将scope重置为all


    if (getScope() === scope) setScope(newScope || 'all');
  } // 清除修饰键


  function clearModifier(event) {
    var key = event.keyCode || event.which || event.charCode;

    var i = _downKeys.indexOf(key); // 从列表中清除按压过的键


    if (i >= 0) {
      _downKeys.splice(i, 1);
    } // 特殊处理 cmmand 键，在 cmmand 组合快捷键 keyup 只执行一次的问题


    if (event.key && event.key.toLowerCase() === 'meta') {
      _downKeys.splice(0, _downKeys.length);
    } // 修饰键 shiftKey altKey ctrlKey (command||metaKey) 清除


    if (key === 93 || key === 224) key = 91;

    if (key in _mods) {
      _mods[key] = false; // 将修饰键重置为false

      for (var k in _modifier) {
        if (_modifier[k] === key) hotkeys[k] = false;
      }
    }
  }

  function unbind(keysInfo) {
    // unbind(), unbind all keys
    if (!keysInfo) {
      Object.keys(_handlers).forEach(function (key) {
        return delete _handlers[key];
      });
    } else if (Array.isArray(keysInfo)) {
      // support like : unbind([{key: 'ctrl+a', scope: 's1'}, {key: 'ctrl-a', scope: 's2', splitKey: '-'}])
      keysInfo.forEach(function (info) {
        if (info.key) eachUnbind(info);
      });
    } else if (typeof keysInfo === 'object') {
      // support like unbind({key: 'ctrl+a, ctrl+b', scope:'abc'})
      if (keysInfo.key) eachUnbind(keysInfo);
    } else if (typeof keysInfo === 'string') {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // support old method
      // eslint-disable-line
      var scope = args[0],
          method = args[1];

      if (typeof scope === 'function') {
        method = scope;
        scope = '';
      }

      eachUnbind({
        key: keysInfo,
        scope: scope,
        method: method,
        splitKey: '+'
      });
    }
  } // 解除绑定某个范围的快捷键


  var eachUnbind = function eachUnbind(_ref) {
    var key = _ref.key,
        scope = _ref.scope,
        method = _ref.method,
        _ref$splitKey = _ref.splitKey,
        splitKey = _ref$splitKey === void 0 ? '+' : _ref$splitKey;
    var multipleKeys = getKeys(key);
    multipleKeys.forEach(function (originKey) {
      var unbindKeys = originKey.split(splitKey);
      var len = unbindKeys.length;
      var lastKey = unbindKeys[len - 1];
      var keyCode = lastKey === '*' ? '*' : code(lastKey);
      if (!_handlers[keyCode]) return; // 判断是否传入范围，没有就获取范围

      if (!scope) scope = getScope();
      var mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
      _handlers[keyCode] = _handlers[keyCode].map(function (record) {
        // 通过函数判断，是否解除绑定，函数相等直接返回
        var isMatchingMethod = method ? record.method === method : true;

        if (isMatchingMethod && record.scope === scope && compareArray(record.mods, mods)) {
          return {};
        }

        return record;
      });
    });
  }; // 对监听对应快捷键的回调函数进行处理


  function eventHandler(event, handler, scope) {
    var modifiersMatch; // 看它是否在当前范围

    if (handler.scope === scope || handler.scope === 'all') {
      // 检查是否匹配修饰符（如果有返回true）
      modifiersMatch = handler.mods.length > 0;

      for (var y in _mods) {
        if (Object.prototype.hasOwnProperty.call(_mods, y)) {
          if (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && handler.mods.indexOf(+y) === -1) {
            modifiersMatch = false;
          }
        }
      } // 调用处理程序，如果是修饰键不做处理


      if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === '*') {
        if (handler.method(event, handler) === false) {
          if (event.preventDefault) event.preventDefault();else event.returnValue = false;
          if (event.stopPropagation) event.stopPropagation();
          if (event.cancelBubble) event.cancelBubble = true;
        }
      }
    }
  } // 处理keydown事件


  function dispatch(event) {
    var asterisk = _handlers['*'];
    var key = event.keyCode || event.which || event.charCode; // 表单控件过滤 默认表单控件不触发快捷键

    if (!hotkeys.filter.call(this, event)) return; // Gecko(Firefox)的command键值224，在Webkit(Chrome)中保持一致
    // Webkit左右 command 键值不一样

    if (key === 93 || key === 224) key = 91;
    /**
     * Collect bound keys
     * If an Input Method Editor is processing key input and the event is keydown, return 229.
     * https://stackoverflow.com/questions/25043934/is-it-ok-to-ignore-keydown-events-with-keycode-229
     * http://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
     */

    if (_downKeys.indexOf(key) === -1 && key !== 229) _downKeys.push(key);
    /**
     * Jest test cases are required.
     * ===============================
     */

    ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'].forEach(function (keyName) {
      var keyNum = modifierMap[keyName];

      if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
        _downKeys.push(keyNum);
      } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
        _downKeys.splice(_downKeys.indexOf(keyNum), 1);
      }
    });
    /**
     * -------------------------------
     */

    if (key in _mods) {
      _mods[key] = true; // 将特殊字符的key注册到 hotkeys 上

      for (var k in _modifier) {
        if (_modifier[k] === key) hotkeys[k] = true;
      }

      if (!asterisk) return;
    } // 将 modifierMap 里面的修饰键绑定到 event 中


    for (var e in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, e)) {
        _mods[e] = event[modifierMap[e]];
      }
    }
    /**
     * https://github.com/jaywcjlove/hotkeys/pull/129
     * This solves the issue in Firefox on Windows where hotkeys corresponding to special characters would not trigger.
     * An example of this is ctrl+alt+m on a Swedish keyboard which is used to type μ.
     * Browser support: https://caniuse.com/#feat=keyboardevent-getmodifierstate
     */


    if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState('AltGraph')) {
      if (_downKeys.indexOf(17) === -1) {
        _downKeys.push(17);
      }

      if (_downKeys.indexOf(18) === -1) {
        _downKeys.push(18);
      }

      _mods[17] = true;
      _mods[18] = true;
    } // 获取范围 默认为 `all`


    var scope = getScope(); // 对任何快捷键都需要做的处理

    if (asterisk) {
      for (var i = 0; i < asterisk.length; i++) {
        if (asterisk[i].scope === scope && (event.type === 'keydown' && asterisk[i].keydown || event.type === 'keyup' && asterisk[i].keyup)) {
          eventHandler(event, asterisk[i], scope);
        }
      }
    } // key 不在 _handlers 中返回


    if (!(key in _handlers)) return;

    for (var _i = 0; _i < _handlers[key].length; _i++) {
      if (event.type === 'keydown' && _handlers[key][_i].keydown || event.type === 'keyup' && _handlers[key][_i].keyup) {
        if (_handlers[key][_i].key) {
          var record = _handlers[key][_i];
          var splitKey = record.splitKey;
          var keyShortcut = record.key.split(splitKey);
          var _downKeysCurrent = []; // 记录当前按键键值

          for (var a = 0; a < keyShortcut.length; a++) {
            _downKeysCurrent.push(code(keyShortcut[a]));
          }

          if (_downKeysCurrent.sort().join('') === _downKeys.sort().join('')) {
            // 找到处理内容
            eventHandler(event, record, scope);
          }
        }
      }
    }
  } // 判断 element 是否已经绑定事件


  function isElementBind(element) {
    return elementHasBindEvent.indexOf(element) > -1;
  }

  function hotkeys(key, option, method) {
    _downKeys = [];
    var keys = getKeys(key); // 需要处理的快捷键列表

    var mods = [];
    var scope = 'all'; // scope默认为all，所有范围都有效

    var element = document; // 快捷键事件绑定节点

    var i = 0;
    var keyup = false;
    var keydown = true;
    var splitKey = '+'; // 对为设定范围的判断

    if (method === undefined && typeof option === 'function') {
      method = option;
    }

    if (Object.prototype.toString.call(option) === '[object Object]') {
      if (option.scope) scope = option.scope; // eslint-disable-line

      if (option.element) element = option.element; // eslint-disable-line

      if (option.keyup) keyup = option.keyup; // eslint-disable-line

      if (option.keydown !== undefined) keydown = option.keydown; // eslint-disable-line

      if (typeof option.splitKey === 'string') splitKey = option.splitKey; // eslint-disable-line
    }

    if (typeof option === 'string') scope = option; // 对于每个快捷键进行处理

    for (; i < keys.length; i++) {
      key = keys[i].split(splitKey); // 按键列表

      mods = []; // 如果是组合快捷键取得组合快捷键

      if (key.length > 1) mods = getMods(_modifier, key); // 将非修饰键转化为键码

      key = key[key.length - 1];
      key = key === '*' ? '*' : code(key); // *表示匹配所有快捷键
      // 判断key是否在_handlers中，不在就赋一个空数组

      if (!(key in _handlers)) _handlers[key] = [];

      _handlers[key].push({
        keyup: keyup,
        keydown: keydown,
        scope: scope,
        mods: mods,
        shortcut: keys[i],
        method: method,
        key: keys[i],
        splitKey: splitKey
      });
    } // 在全局document上设置快捷键


    if (typeof element !== 'undefined' && !isElementBind(element) && window) {
      elementHasBindEvent.push(element);
      addEvent(element, 'keydown', function (e) {
        dispatch(e);
      });
      addEvent(window, 'focus', function () {
        _downKeys = [];
      });
      addEvent(element, 'keyup', function (e) {
        dispatch(e);
        clearModifier(e);
      });
    }
  }

  var _api = {
    setScope: setScope,
    getScope: getScope,
    deleteScope: deleteScope,
    getPressedKeyCodes: getPressedKeyCodes,
    isPressed: isPressed,
    filter: filter,
    unbind: unbind
  };

  for (var a in _api) {
    if (Object.prototype.hasOwnProperty.call(_api, a)) {
      hotkeys[a] = _api[a];
    }
  }

  if (typeof window !== 'undefined') {
    var _hotkeys = window.hotkeys;

    hotkeys.noConflict = function (deep) {
      if (deep && window.hotkeys === hotkeys) {
        window.hotkeys = _hotkeys;
      }

      return hotkeys;
    };

    window.hotkeys = hotkeys;
  }

  var Keyboard = function Keyboard(term) {
    classCallCheck(this, Keyboard);

    hotkeys('alt+x', function (event, handler) {
      if (term.isFocus) {
        event.preventDefault();
        console.log(handler);
      }
    });
  };

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
          prefix: 'root@linux: ~ $ ',
          width: 600,
          height: 500,
          borderRadius: 5,
          fontFamily: 'Arial',
          fontColor: '#b0b2b6',
          welcome: "Last login: ".concat(new Date()),
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
          fontFamily: 'string',
          fontColor: 'string',
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
      _this.decoder = new Decoder(assertThisInitialized(_this));
      _this.drawer = new Drawer(assertThisInitialized(_this));
      _this.keyboard = new Keyboard(assertThisInitialized(_this));
      _this.isFocus = false;
      _this.isDestroy = false;
      id += 1;
      _this.id = id;
      instances.push(assertThisInitialized(_this));

      _this.draw({
        type: OUTPUT,
        text: _this.options.welcome
      }).draw({
        type: INPUT,
        text: ''
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

        this.options = optionValidator(_objectSpread({}, Term.default, {}, this.options, {}, options), Term.scheme);
        return this;
      }
    }, {
      key: "draw",
      value: function draw(data) {
        this.drawer.draw(data);
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
        instances.splice(instances.indexOf(this), 1);
      }
    }]);

    return Term;
  }(Emitter);

  return Term;

})));
//# sourceMappingURL=term-ui.js.map
