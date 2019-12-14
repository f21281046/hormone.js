'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 返回所有 cookie 的 name-value 对的对象

var parseCookie = function parseCookie(str) {
  return str.split(';').map(function (v) {
    return v.split('=');
  }).reduce(function (acc, v) {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());return acc;
  }, {});
};

exports.default = parseCookie;