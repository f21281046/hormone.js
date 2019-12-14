"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 判断元素是否具有指定的样式类

var hasClass = function hasClass(el, className) {
  return el.classList.contains(className);
};

exports.default = hasClass;