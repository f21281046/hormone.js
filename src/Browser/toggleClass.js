"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 切换一个元素的样式类

var toggleClass = function toggleClass(el, className) {
  return el.classList.toggle(className);
};

exports.default = toggleClass;