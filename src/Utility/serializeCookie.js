"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将 cookie name-value 对序列化为 Set-Cookie 头字符串

var serializeCookie = function serializeCookie(name, val) {
  return encodeURIComponent(name) + "=" + encodeURIComponent(val);
};

exports.default = serializeCookie;