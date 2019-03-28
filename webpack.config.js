/**
 * 项目构建配置文件
 */
var merge = require('webpack-merge');
var webpackDSK = require('@cnpm/webpack-dsk');

module.exports = function exports(env) {
  return merge(webpackDSK(env, './dist/'), {
    entry: {
      'js-bridge': './src/index.js',
    },
    output: {
      library: 'JSBridge',
      libraryTarget: 'umd',
    }
  });
};
