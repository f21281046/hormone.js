'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 转化为下划线拼接格式

var toSnakeCase = function toSnakeCase(str) {
  str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.toLowerCase();
  }).join('_');
};

exports.default = toSnakeCase;