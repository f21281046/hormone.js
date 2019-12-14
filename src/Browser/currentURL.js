"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 获取当前页面URL

var currentURL = function currentURL() {
  return window.location.href;
};

exports.default = currentURL;