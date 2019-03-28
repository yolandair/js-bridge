var onfire = require('onfire.js');
var W = require('./common');

module.exports = {
  commonAction: function commonAction(fun, obj, need) {
    var T = this;
    var isneed = need;
    var objParams = obj;
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
    W.webViewApp[fun](this.paramsToString(objParams));
    if (isneed) {
      W[fun + 'Callback'] = function tmp(returnObj) {
        onfire.fire(fun + 'Event', T.paramsToObject(returnObj));
      };
    }
  },
  //数据处理并返回
  paramsToString: function paramsToString(obj) {
    return JSON.stringify(obj);
  },
  paramsToObject: function paramsToObject(str) {
    var strParams = str;
    if (!strParams) {
      strParams = {};
    }
    return JSON.parse(strParams);
  }
};
