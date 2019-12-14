"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 设置CSS样式

var setStyle = function setStyle(el, ruleName, val) {
  return el.style[ruleName] = val;
};

exports.default = setStyle;