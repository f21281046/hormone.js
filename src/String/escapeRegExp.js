'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 转义正则表达式

var escapeRegExp = function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

exports.default = escapeRegExp;