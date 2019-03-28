var onfire = require('onfire.js');
var W = require('./common');

module.exports = {
  //合并方法
  commonAction: function commonAction(fun, obj, need) {
    // need 在没有传递时默认为 true
    var isneed = need;
    var objParams = obj;
    if (!objParams) {
      objParams = {};
    }
    if (isneed === undefined) {
      isneed = true;
    }
    console.group('调用客户端的方法');
    console.info('方法的名称:' + fun);
    console.info('传的参数:' + obj);
    console.groupEnd();
    if (isneed) {
      W[fun + 'Callback'] = function tmp(returnObj) {
        onfire.fire(fun + 'Event', returnObj);
      };
      W[fun + 'Callback']({isWap: true});
    }
  },
};
