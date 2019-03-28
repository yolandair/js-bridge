var AppUtils = require('@cnpm/app-utils');
var onfire = require('onfire.js');
var type;

module.exports = {
  install: function install(Vue, obj) {
    //如果是vue.use方法调用，则以下两个if条件可以跳过
    //如果是普通的js文件引入，如果第一个对象是参数，则跳过第一个if进入第二个if，把obj赋值为Vue
    //如果是普通的js文件引入，并且没有传任何参数，则vue和obj全都是空对象
    var VueObj = Vue;
    var objParams = obj;
    var appInfo;
    var isApp;
    var isIOS;
    var isAndroid;


    if (!VueObj) {
      VueObj = function tmp() {};
    }
    if (!VueObj.use) {
      objParams = VueObj;
    }
    if (VueObj.use && !objParams) {
      objParams = {};
    }

    appInfo = {
      appUA: objParams.appUA || 'Young',
      appIOS: objParams.appIOS || 'iOS',
      appAndroid: objParams.appAndroid || 'Android'
    };

    isApp = AppUtils.appClient(appInfo.appUA);
    isIOS = AppUtils.appClient(appInfo.appIOS);
    isAndroid = AppUtils.appClient(appInfo.appAndroid);
    VueObj.prototype.JSBridge = this;

    if (isApp) {
      if (isIOS) {
        type = require('./ios');
      } else if (isAndroid) {
        type = require('./android');
      }
    } else {
      type = require('./wap');
    }
  },
  //0.1.4版本之前的所有方法
  action: function action(funName, valueParams) {
    return type[funName](valueParams);
  },
  //0.1.5版本之后的所有方法
  dispatch: function dispatch(funName, valueParams, needcallback) {
    return type.commonAction(funName, valueParams, needcallback);
  },
  onfire: onfire
};

