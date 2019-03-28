/**
 * Cookie 操作工具类，包含获取、增加、删除cookie、cookie中文字符解码功能
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory();
  } else {
    // 浏览器全局变量(root 即 window)
    root.CookieUtil = factory();
  }
}(this, function() {
  var CookieUtil = {
    get: function(name, decode) {
      var cookies = document.cookie,
        arr,
        reg = new RegExp("(^|)" + name + "=([^;]*)(;|$)");
      arr = cookies.match(reg);
      if (arr) {
        if (decode === true) {
          return this.decodeStr(arr[2]);
        } else {
          return arr[2];
        }
      } else {
        return null;
      }
    },
    set: function(name, value, expires, domain, path, secure) {
      var c = encodeURIComponent(name) + "=" + encodeURIComponent(value),
        d = null,
        days = 30;
      if (expires instanceof Date) {
        c += ";expires=" + expires.toGMTString();
      } else { /***不设置此参数，默认30天**/
        d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        c += ";expires =" + d.toGMTString();
      }
      if (path) {
        c += ";path=" + path;
      }

      if (domain) {
        c += ";domain=" + domain;
      }

      if (secure) {
        c += ";secure";
      }

      document.cookie = c;
    },
    decodeStr: function(str) {
      var ret = "",
        i, len = str.length;
      for (i = 0; i < len; i++) {
        var chr = str.charAt(i);
        if (chr == "+") {
          ret += " ";
        } else if (chr == "%") {
          var asc = str.substring(i + 1, i + 3);
          if (parseInt("0x" + asc) > 0x7f) {
            ret += decodeURI("%" + str.substring(i + 1, i + 9));
            i += 8;
          } else {
            ret += String.fromCharCode(parseInt("0x" + asc));
            i += 2;
          }
        } else {
          ret += chr;
        }
      }
      return ret;
    },
    deleteCookie: function(name, domain, path, secure) {
      var c = encodeURIComponent(name) + "=" + encodeURIComponent("a");
      var date = new Date();
      date.setTime(date.getTime() - 10000);
      c += ";expires =" + date.toGMTString();
      if (path) {
        c += ";path=" + path;
      }
      if (domain) {
        c += ";domain=" + domain;
      }
      if (secure) {
        c += ";secure";
      }
      document.cookie = c;
    }
  };
  return CookieUtil;
}));
