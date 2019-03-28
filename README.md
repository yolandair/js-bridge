# H5页面和客户端交互API

## Install

`npm install @cnpm/js-bridge`

or

`<script type="text/javascript" src="http://n3.static.pg0.cn/fp/js-bridge/dist/js-bridge.js">`

## Usage
```
//普通js引入
JSBridge.install();
JSBridge.onfire.on('wechatLoginEvent', function(returnObj){
  console.info(returnObj.test);
})
JSBridge.dispatch('wechatLogin',{"test":"aa", "testb":"bb"});

//vue项目中引入
var JSBridge = require('@cnpm/js-bridge');
Vue.use(JSBridge);
this.JSBridge.onfire.on('wechatLoginEvent', function(returnObj){
  console.info(returnObj.test);
})
//dispatch需要传递是否需要callback的方法，true需要，false不需要,默认为true
this.JSBridge.dispatch('wechatLogin',{"test":"aa", "testb":"bb"}, true);
如果
```
## Example

[js-bridge](http://front.chinaso365.com/fp/js-bridge/example/index.html)

## Options

## Methods

## Events

## 1.0.0

* 更新大版本，去掉原来的action单独添加方法的方式，统一使用dispatch方法

## 0.2.1

* 添加wap兼容方法

## 0.2.0

* 提交新版本

## 0.1.9

* eslint语法校验修改

## 0.1.8

* 转换语法为兼容版本

## 0.1.7

* 修正代码中 ES6 语法改为 ES5 方式处理

## 0.1.6

* 修正代码中安卓调用toSetUserInfo方法名错误的问题

## 0.1.5

* 0.1.4之前的版本调用action方法
* 0.1.5之后的方法向下兼容调用dispatch方法

## 0.1.4

* 添加showsharetoolbar

## 0.1.3

* 添加showsharetoolbar

## 0.1.2

* 添加跳转到设置个人资料页方法

## 0.1.0

* 处理 paramsToObject 方法无法调用到的问题

## 0.0.16

* 增加客户端toast,alert,confirm弹框

## 0.0.15

* 增加处理 iframe 兼容

## 0.0.14

* 增加客户端执行js的方法

## 0.0.13

* 增加灰色背景弹框方法

## 0.0.12

* 修改bug

## 0.0.11

* 增加页面跳转方法
* 修改bug

## 0.0.10

* 增加毛玻璃弹框方法

## 0.0.9

* 修改bug

## 0.0.8

* 添加用户获取用户token方法

## 0.0.7

* wap添加回调事件

## 0.0.6

* 摇一摇功能修改

## 0.0.5

* 摇一摇功能修改

## 0.0.4

* 添加摇一摇功能

## 0.0.3

* ios返回的对象修改为返回字符串后，将字符串转换成对象返回

## 0.0.2

* 修复bug

## 0.0.1

* 初始化 js-bridge 组件
