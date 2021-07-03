/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BalanceSheet"] = factory();
	else
		root["BalanceSheet"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "E:\\ソース\\技術調査\\shiketch\\node_modules\\events\\events.js":
/*!**********************************************************!*\
  !*** E:\ソース\技術調査\shiketch\node_modules\events\events.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar R = (typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === 'object' ? Reflect : null;\nvar ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {\n  return Function.prototype.apply.call(target, receiver, args);\n};\nvar ReflectOwnKeys;\n\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys;\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n};\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\n\nmodule.exports = EventEmitter;\nmodule.exports.once = once; // Backwards-compat with node 0.10.x\n\nEventEmitter.EventEmitter = EventEmitter;\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\n\nvar defaultMaxListeners = 10;\n\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + _typeof(listener));\n  }\n}\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function get() {\n    return defaultMaxListeners;\n  },\n  set: function set(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function () {\n  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n}; // Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\n\n\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n\n  this._maxListeners = n;\n  return this;\n};\n\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n\n  for (var i = 1; i < arguments.length; i++) {\n    args.push(arguments[i]);\n  }\n\n  var doError = type === 'error';\n  var events = this._events;\n  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.\n\n  if (doError) {\n    var er;\n    if (args.length > 0) er = args[0];\n\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    } // At least give some kind of context to the user\n\n\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n  if (handler === undefined) return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n\n    for (var i = 0; i < len; ++i) {\n      ReflectApply(listeners[i], this, args);\n    }\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n  checkListener(listener);\n  events = target._events;\n\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n\n      events = target._events;\n    }\n\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    } // Check for listener leak\n\n\n    m = _getMaxListeners(target);\n\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true; // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n\n      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener = function prependListener(type, listener) {\n  return _addListener(this, type, listener, true);\n};\n\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0) return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = {\n    fired: false,\n    wrapFn: undefined,\n    target: target,\n    type: type,\n    listener: listener\n  };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {\n  checkListener(listener);\n  this.prependListener(type, _onceWrap(this, type, listener));\n  return this;\n}; // Emits a 'removeListener' event if and only if the listener was removed.\n\n\nEventEmitter.prototype.removeListener = function removeListener(type, listener) {\n  var list, events, position, i, originalListener;\n  checkListener(listener);\n  events = this._events;\n  if (events === undefined) return this;\n  list = events[type];\n  if (list === undefined) return this;\n\n  if (list === listener || list.listener === listener) {\n    if (--this._eventsCount === 0) this._events = Object.create(null);else {\n      delete events[type];\n      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);\n    }\n  } else if (typeof list !== 'function') {\n    position = -1;\n\n    for (i = list.length - 1; i >= 0; i--) {\n      if (list[i] === listener || list[i].listener === listener) {\n        originalListener = list[i].listener;\n        position = i;\n        break;\n      }\n    }\n\n    if (position < 0) return this;\n    if (position === 0) list.shift();else {\n      spliceOne(list, position);\n    }\n    if (list.length === 1) events[type] = list[0];\n    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {\n  var listeners, events, i;\n  events = this._events;\n  if (events === undefined) return this; // not listening for removeListener, no need to emit\n\n  if (events.removeListener === undefined) {\n    if (arguments.length === 0) {\n      this._events = Object.create(null);\n      this._eventsCount = 0;\n    } else if (events[type] !== undefined) {\n      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];\n    }\n\n    return this;\n  } // emit removeListener for all listeners on all events\n\n\n  if (arguments.length === 0) {\n    var keys = Object.keys(events);\n    var key;\n\n    for (i = 0; i < keys.length; ++i) {\n      key = keys[i];\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n\n    this.removeAllListeners('removeListener');\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n    return this;\n  }\n\n  listeners = events[type];\n\n  if (typeof listeners === 'function') {\n    this.removeListener(type, listeners);\n  } else if (listeners !== undefined) {\n    // LIFO order\n    for (i = listeners.length - 1; i >= 0; i--) {\n      this.removeListener(type, listeners[i]);\n    }\n  }\n\n  return this;\n};\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n  if (events === undefined) return [];\n  var evlistener = events[type];\n  if (evlistener === undefined) return [];\n  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function (emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\n\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n\n  for (var i = 0; i < n; ++i) {\n    copy[i] = arr[i];\n  }\n\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++) {\n    list[index] = list[index + 1];\n  }\n\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n\n  return ret;\n}\n\nfunction once(emitter, name) {\n  return new Promise(function (resolve, reject) {\n    function errorListener(err) {\n      emitter.removeListener(name, resolver);\n      reject(err);\n    }\n\n    function resolver() {\n      if (typeof emitter.removeListener === 'function') {\n        emitter.removeListener('error', errorListener);\n      }\n\n      resolve([].slice.call(arguments));\n    }\n\n    ;\n    eventTargetAgnosticAddListener(emitter, name, resolver, {\n      once: true\n    });\n\n    if (name !== 'error') {\n      addErrorHandlerIfEventEmitter(emitter, errorListener, {\n        once: true\n      });\n    }\n  });\n}\n\nfunction addErrorHandlerIfEventEmitter(emitter, handler, flags) {\n  if (typeof emitter.on === 'function') {\n    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);\n  }\n}\n\nfunction eventTargetAgnosticAddListener(emitter, name, listener, flags) {\n  if (typeof emitter.on === 'function') {\n    if (flags.once) {\n      emitter.once(name, listener);\n    } else {\n      emitter.on(name, listener);\n    }\n  } else if (typeof emitter.addEventListener === 'function') {\n    // EventTarget does not have `error` event semantics like Node\n    // EventEmitters, we do not listen for `error` events here.\n    emitter.addEventListener(name, function wrapListener(arg) {\n      // IE does not have builtin `{ once: true }` support so we\n      // have to do it manually.\n      if (flags.once) {\n        emitter.removeEventListener(name, wrapListener);\n      }\n\n      listener(arg);\n    });\n  } else {\n    throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + _typeof(emitter));\n  }\n}\n\n//# sourceURL=webpack://BalanceSheet/E:\\%E3%82%BD%E3%83%BC%E3%82%B9\\%E6%8A%80%E8%A1%93%E8%AA%BF%E6%9F%BB\\shiketch\\node_modules\\events\\events.js?");

/***/ }),

/***/ "E:\\ソース\\技術調査\\shiketch\\src\\js\\module\\DownLoadImg.js":
/*!*********************************************************!*\
  !*** E:\ソース\技術調査\shiketch\src\js\module\DownLoadImg.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar DownLoadImg = {\n  shiketch: {},\n  run: function run() {\n    html2canvas(DownLoadImg.shiketch).then(function (canvas) {\n      var downloadEle = document.createElement(\"a\");\n      downloadEle.href = canvas.toDataURL(\"image/png\");\n      downloadEle.download = \"shiketchImg.png\";\n      downloadEle.click();\n    });\n  },\n  eventListener: function eventListener(shiketch) {\n    DownLoadImg.shiketch = shiketch;\n    var btn = document.getElementById(\"btnExportImg\");\n    btn.addEventListener(\"click\", function () {\n      DownLoadImg.run();\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownLoadImg);\n\n//# sourceURL=webpack://BalanceSheet/E:\\%E3%82%BD%E3%83%BC%E3%82%B9\\%E6%8A%80%E8%A1%93%E8%AA%BF%E6%9F%BB\\shiketch\\src\\js\\module\\DownLoadImg.js?");

/***/ }),

/***/ "E:\\ソース\\技術調査\\shiketch\\src\\js\\module\\element\\ArtBoard.js":
/*!**************************************************************!*\
  !*** E:\ソース\技術調査\shiketch\src\js\module\element\ArtBoard.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ArtBoard = {\n  shiketch: {},\n  board: {},\n  moveable: null,\n\n  /**\n   * アートボードのリサイズをコントロールする\n   */\n  controle: function controle() {\n    if (ArtBoard.moveable == null) {\n      //moveableを起動\n      ArtBoard.setMoveable();\n    } else {\n      //moveableを終了\n      ArtBoard.moveable.destroy();\n      ArtBoard.moveable = null;\n    }\n  },\n\n  /**\n   * moveableを起動する\n   * メモリを軽くする為に起動する度に毎回moveableを作成する。\n   */\n  setMoveable: function setMoveable() {\n    //アートボードをリサイズできるようにする\n    ArtBoard.moveable = new Moveable(ArtBoard.shiketch, {\n      resizable: true,\n      draggable: true,\n      edgeDraggable: true\n    });\n    ArtBoard.moveable.target = ArtBoard.board;\n    var frame = {\n      translate: [0, 0]\n    };\n    ArtBoard.moveable.on(\"resizeStart\", function (_ref) {\n      var target = _ref.target,\n          set = _ref.set,\n          setOrigin = _ref.setOrigin,\n          dragStart = _ref.dragStart;\n      var style = window.getComputedStyle(target);\n      var cssWidth = parseFloat(style.width);\n      var cssHeight = parseFloat(style.height);\n      set([cssWidth, cssHeight]);\n    }).on(\"resize\", function (_ref2) {\n      var target = _ref2.target,\n          width = _ref2.width,\n          height = _ref2.height,\n          drag = _ref2.drag;\n      target.style.width = \"\".concat(width, \"px\");\n      target.style.height = \"\".concat(height, \"px\");\n      frame.translate = drag.beforeTranslate;\n      target.style.transform = \"translate(\".concat(drag.beforeTranslate[0], \"px, \").concat(drag.beforeTranslate[1], \"px)\");\n    }).on(\"drag\", function (_ref3) {\n      var target = _ref3.target,\n          transform = _ref3.transform;\n      target.style.transform = transform;\n    });\n  },\n\n  /**\n   * アートボードのイベント受付と初期化\n   * @param  elm shiketch\n   * @param  elm board    アートボード\n   * @param  EventEmitter em\n   */\n  eventListener: function eventListener(shiketch, board, em) {\n    ArtBoard.board = board;\n    ArtBoard.shiketch = shiketch;\n    ArtBoard.em = em;\n    em.on('shiketch.dblClick', function () {\n      ArtBoard.controle();\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtBoard);\n\n//# sourceURL=webpack://BalanceSheet/E:\\%E3%82%BD%E3%83%BC%E3%82%B9\\%E6%8A%80%E8%A1%93%E8%AA%BF%E6%9F%BB\\shiketch\\src\\js\\module\\element\\ArtBoard.js?");

/***/ }),

/***/ "E:\\ソース\\技術調査\\shiketch\\src\\js\\module\\event\\DblClick.js":
/*!************************************************************!*\
  !*** E:\ソース\技術調査\shiketch\src\js\module\event\DblClick.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar DblClick = {\n  elms: [],\n  em: {},\n\n  /**\n   * ダブルクリックした時に、何処でダブルクリックしたかを取って、\n   * ダブルクリックしたelmのdata-elmtype.dbclickイベントを発火する\n   * @param  {[type]} em       [description]\n   */\n  eventListener: function eventListener(em) {\n    DblClick.em = em;\n    document.addEventListener('dblclick', function (e) {\n      var targElm = e.path[0];\n      DblClick.em.emit(targElm.getAttribute('data-elmtype') + '.dblClick');\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DblClick);\n\n//# sourceURL=webpack://BalanceSheet/E:\\%E3%82%BD%E3%83%BC%E3%82%B9\\%E6%8A%80%E8%A1%93%E8%AA%BF%E6%9F%BB\\shiketch\\src\\js\\module\\event\\DblClick.js?");

/***/ }),

/***/ "E:\\ソース\\技術調査\\shiketch\\src\\js\\script.js":
/*!*********************************************!*\
  !*** E:\ソース\技術調査\shiketch\src\js\script.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_DownLoadImg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/DownLoadImg.js */ \"E:\\\\ソース\\\\技術調査\\\\shiketch\\\\src\\\\js\\\\module\\\\DownLoadImg.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ \"E:\\\\ソース\\\\技術調査\\\\shiketch\\\\node_modules\\\\events\\\\events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _module_event_DblClick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/event/DblClick.js */ \"E:\\\\ソース\\\\技術調査\\\\shiketch\\\\src\\\\js\\\\module\\\\event\\\\DblClick.js\");\n/* harmony import */ var _module_element_ArtBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/element/ArtBoard.js */ \"E:\\\\ソース\\\\技術調査\\\\shiketch\\\\src\\\\js\\\\module\\\\element\\\\ArtBoard.js\");\n\n //イベント\n\n //エレメント\n\n\nvar em = new (events__WEBPACK_IMPORTED_MODULE_1___default())(); //メインの要素を取得しておく\n\nvar shiketch = document.getElementById(\"shiketch\");\nvar board = document.getElementById(\"board\"); //アートボードのイベントを登録\n\n_module_element_ArtBoard_js__WEBPACK_IMPORTED_MODULE_3__.default.eventListener(shiketch, board, em); //画像出力のイベント登録\n\n_module_DownLoadImg_js__WEBPACK_IMPORTED_MODULE_0__.default.eventListener(shiketch); //ダブルクリックイベントの登録\n\n_module_event_DblClick_js__WEBPACK_IMPORTED_MODULE_2__.default.eventListener(em); //ダブルクリックされた要素全てを格納　こいつが2個あったら\n//アートボードをDBクリックされた事になるから、moveableを起動しない\n\nvar toolBorderBtn = document.getElementById('toolBorder');\ntoolBorderBtn.addEventListener(\"click\", function () {\n  var span = document.createElement(\"span\");\n  span.classList.add('shiketch_elm_border');\n  board.appendChild(span);\n});\n\n//# sourceURL=webpack://BalanceSheet/E:\\%E3%82%BD%E3%83%BC%E3%82%B9\\%E6%8A%80%E8%A1%93%E8%AA%BF%E6%9F%BB\\shiketch\\src\\js\\script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("E:\\ソース\\技術調査\\shiketch\\src\\js\\script.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});