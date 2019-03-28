var onfire = require('onfire.js');
var W = require('./common');

module.exports = {
  //方法合并
  commonAction: function commonAction(fun, obj, need) {
    var T = this;
    var isneed = need;
    var objParams = obj;
    var message;
    // need 在没有传递时默认为 true
    if (isneed === undefined) {
      isneed = true;
    }
    if (!objParams) {
      objParams = {};
    }
    if (isneed) {
      objParams.callback = fun + 'Callback';
    }
    message = {method: fun, parameters: objParams};
    this.notifyIOSMessageHandler(message);
    if (isneed) {
      W[fun + 'Callback'] = function tmp(returnObj) {
        onfire.fire(fun + 'Event', T.paramsToObject(returnObj));
      };
    }
  },
  notifyIOSMessageHandler: function notifyIOSMessageHandler(message) {
    return W.webkit.messageHandlers.webViewApp.postMessage(message);
  },
  paramsToObject: function paramsToObject(str) {
    return JSON.parse(str);
  },
  paramsToString: function paramsToString(obj) {
    return JSON.stringify(obj);
  }
};

