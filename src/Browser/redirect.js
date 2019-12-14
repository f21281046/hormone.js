"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 重定向到URL
// 使用 window.location.href 或 window.location.replace() 重定向到 url 。 传递第二个参数来模拟链接点击(true - 默认值)或HTTP重定向(false)。

var redirect = function redirect(url) {
  var asLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return asLink ? window.location.href = url : window.location.replace(url);
};

exports.default = redirect;