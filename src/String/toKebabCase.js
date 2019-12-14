'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 转化为连字符拼接格式

var toKebabCase = function toKebabCase(str) {
  return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.toLowerCase();
  }).join('-');
};

exports.default = toKebabCase;