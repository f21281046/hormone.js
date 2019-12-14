"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 克隆正则表达式

var cloneRegExp = function cloneRegExp(regExp) {
  return new RegExp(regExp.source, regExp.flags);
};

exports.default = cloneRegExp;