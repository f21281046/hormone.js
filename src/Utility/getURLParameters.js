'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 网址参数

var getURLParameters = function getURLParameters(url) {
  return url.match(/([^?=&]+)(=([^&]*))/g).reduce(function (a, v) {
    return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
  }, {});
};

exports.default = getURLParameters;