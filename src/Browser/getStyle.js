"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 获取元素样式
// 返回指定元素的CSS规则的值。

var getStyle = function getStyle(el, ruleName) {
  return getComputedStyle(el)[ruleName];
};

exports.default = getStyle;