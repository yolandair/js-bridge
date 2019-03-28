/*! Date:Mon Feb 18 2019 10:47:56 GMT+0800 (GMT+08:00), chunkhash:ff8f627199ebe8e92b4e */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSBridge"] = factory();
	else
		root["JSBridge"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("!function(n,t){\"object\"==typeof module&&module.exports?module.exports=t():n.onfire=t()}(\"undefined\"!=typeof window?window:this,function(){function n(n,t,e,o){if(typeof n!==p||typeof t!==a)throw new Error(\"args: \"+p+\", \"+a);return y(l,n)||(l[n]={}),l[n][++d]=[t,e,o],[n,d]}function t(n,t){for(var e in n)y(n,e)&&t(e,n[e])}function e(t,e,o){return n(t,e,0,o)}function o(t,e,o){return n(t,e,1,o)}function i(n,e){y(l,n)&&t(l[n],function(t,o){o[0].apply(o[2],e),o[1]&&delete l[n][t]})}function r(n){var t=s(arguments,1);setTimeout(function(){i(n,t)})}function u(n){i(n,s(arguments,1))}function f(n){var e,o,i=!1,r=typeof n;return r===p?!!y(l,n)&&(delete l[n],!0):\"object\"===r?(e=n[0],o=n[1],!(!y(l,e)||!y(l[e],o))&&(delete l[e][o],!0)):r!==a||(t(l,function(e,o){t(o,function(t,o){o[0]===n&&(delete l[e][t],i=!0)})}),i)}function c(){l={}}var l={},d=0,p=\"string\",a=\"function\",y=Function.call.bind(Object.hasOwnProperty),s=Function.call.bind(Array.prototype.slice);return{on:e,one:o,un:f,fire:r,fireSync:u,clear:c}});\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/onfire.js/dist/onfire.min.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/onfire.js/dist/onfire.min.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// 缓存 window 对象到 W，用来处理多 Window 对象的情况\nvar W = window;\n// 判断当前存在多个 window 对象时（如 iframe 嵌套）\n// 重新定义对象 W 为最外层 window\ntry {\n  if (top.location !== location) {\n    W = top;\n  }\n} catch (e) {\n  console.log(e);\n}\n\nmodule.exports = W;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/common.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("var AppUtils = __webpack_require__(3);\nvar onfire = __webpack_require__(0);\nvar type;\n\nmodule.exports = {\n  install: function install(Vue, obj) {\n    //如果是vue.use方法调用，则以下两个if条件可以跳过\n    //如果是普通的js文件引入，如果第一个对象是参数，则跳过第一个if进入第二个if，把obj赋值为Vue\n    //如果是普通的js文件引入，并且没有传任何参数，则vue和obj全都是空对象\n    var VueObj = Vue;\n    var objParams = obj;\n    var appInfo;\n    var isApp;\n    var isIOS;\n    var isAndroid;\n\n\n    if (!VueObj) {\n      VueObj = function tmp() {};\n    }\n    if (!VueObj.use) {\n      objParams = VueObj;\n    }\n    if (VueObj.use && !objParams) {\n      objParams = {};\n    }\n\n    appInfo = {\n      appUA: objParams.appUA || 'Young',\n      appIOS: objParams.appIOS || 'iOS',\n      appAndroid: objParams.appAndroid || 'Android'\n    };\n\n    isApp = AppUtils.appClient(appInfo.appUA);\n    isIOS = AppUtils.appClient(appInfo.appIOS);\n    isAndroid = AppUtils.appClient(appInfo.appAndroid);\n    VueObj.prototype.JSBridge = this;\n\n    if (isApp) {\n      if (isIOS) {\n        type = __webpack_require__(4);\n      } else if (isAndroid) {\n        type = __webpack_require__(5);\n      }\n    } else {\n      type = __webpack_require__(6);\n    }\n  },\n  //0.1.4版本之前的所有方法\n  action: function action(funName, valueParams) {\n    return type[funName](valueParams);\n  },\n  //0.1.5版本之后的所有方法\n  dispatch: function dispatch(funName, valueParams, needcallback) {\n    return type.commonAction(funName, valueParams, needcallback);\n  },\n  onfire: onfire\n};\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval(" //这里定义了一些wap与app兼容的一些杂函数\r\n var AppUtils = {\r\n    //获取客户端的类型\r\n    androidClient : function() {\r\n      //判断是否是安卓的客户端\r\n      if (navigator.userAgent.match(/Android/ig)) {\r\n        return true;\r\n      } \r\n      return false;\r\n    },\r\n    iosClient : function() {\r\n      //判断是否是ios的客户端\r\n      if (navigator.userAgent.match(/iphone|ipod|iPad/ig)) {\r\n        return true;\r\n      } \r\n      return false;\r\n    },\r\n    clientType : function() {\r\n    \t//如果是安卓的客户端返回android\r\n\tif(navigator.userAgent.match(/Android/ig)){\r\n\t     return \"androidi\";\r\n\t//如果是ios的客户端返回ios\r\n\t} else if(navigator.userAgent.match(/iphone|ipod|iPad/ig)) {\r\n\t     return \"ios\";\r\n\t//其他情况返回other\r\n\t} else {\r\n\t     return \"other\"; \r\n\t}\r\n    },\r\n    wechatClient : function() {\r\n      //判断是否是微信打开\r\n      if(navigator.userAgent.match(/MicroMessenger/ig)) {\r\n        return true;\r\n      }\r\n      return false;\r\n    },\r\n    appClient : function(clientstr){\r\n      //美丽中国的ua是BeautifulChina\r\n      if(navigator.userAgent.indexOf(clientstr) != -1){\r\n          return true;\r\n        }\r\n      return false;\r\n    },\r\n\tisMobile : function() {\r\n\t\t//判断是否是移动端\r\n\t\tif(navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|opera mini|opera mobile/ig)){\r\n\t\t\treturn true;\r\n\t\t}\r\n\t\treturn false;\r\n\t}\r\n }\r\n\r\nmodule.exports = AppUtils\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/@cnpm/app-utils/src/index.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/@cnpm/app-utils/src/index.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

eval("var onfire = __webpack_require__(0);\nvar W = __webpack_require__(1);\n\nmodule.exports = {\n  //方法合并\n  commonAction: function commonAction(fun, obj, need) {\n    var T = this;\n    var isneed = need;\n    var objParams = obj;\n    var message;\n    // need 在没有传递时默认为 true\n    if (isneed === undefined) {\n      isneed = true;\n    }\n    if (!objParams) {\n      objParams = {};\n    }\n    if (isneed) {\n      objParams.callback = fun + 'Callback';\n    }\n    message = {method: fun, parameters: objParams};\n    this.notifyIOSMessageHandler(message);\n    if (isneed) {\n      W[fun + 'Callback'] = function tmp(returnObj) {\n        onfire.fire(fun + 'Event', T.paramsToObject(returnObj));\n      };\n    }\n  },\n  notifyIOSMessageHandler: function notifyIOSMessageHandler(message) {\n    return W.webkit.messageHandlers.webViewApp.postMessage(message);\n  },\n  paramsToObject: function paramsToObject(str) {\n    return JSON.parse(str);\n  },\n  paramsToString: function paramsToString(obj) {\n    return JSON.stringify(obj);\n  }\n};\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/ios.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/ios.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

eval("var onfire = __webpack_require__(0);\nvar W = __webpack_require__(1);\n\nmodule.exports = {\n  commonAction: function commonAction(fun, obj, need) {\n    var T = this;\n    var isneed = need;\n    var objParams = obj;\n    // need 在没有传递时默认为 true\n    if (isneed === undefined) {\n      isneed = true;\n    }\n    if (!objParams) {\n      objParams = {};\n    }\n    if (isneed) {\n      objParams.callback = fun + 'Callback';\n    }\n    W.webViewApp[fun](this.paramsToString(objParams));\n    if (isneed) {\n      W[fun + 'Callback'] = function tmp(returnObj) {\n        onfire.fire(fun + 'Event', T.paramsToObject(returnObj));\n      };\n    }\n  },\n  //数据处理并返回\n  paramsToString: function paramsToString(obj) {\n    return JSON.stringify(obj);\n  },\n  paramsToObject: function paramsToObject(str) {\n    var strParams = str;\n    if (!strParams) {\n      strParams = {};\n    }\n    return JSON.parse(strParams);\n  }\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/android.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/android.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

eval("var onfire = __webpack_require__(0);\nvar W = __webpack_require__(1);\n\nmodule.exports = {\n  //合并方法\n  commonAction: function commonAction(fun, obj, need) {\n    // need 在没有传递时默认为 true\n    var isneed = need;\n    var objParams = obj;\n    if (!objParams) {\n      objParams = {};\n    }\n    if (isneed === undefined) {\n      isneed = true;\n    }\n    console.group('调用客户端的方法');\n    console.info('方法的名称:' + fun);\n    console.info('传的参数:' + obj);\n    console.groupEnd();\n    if (isneed) {\n      W[fun + 'Callback'] = function tmp(returnObj) {\n        onfire.fire(fun + 'Event', returnObj);\n      };\n      W[fun + 'Callback']({isWap: true});\n    }\n  },\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/wap.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/wap.js?");

/***/ })
/******/ ]);
});