"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将值转换为安全整数

var toSafeInteger = function toSafeInteger(num) {
  return Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
};

exports.default = toSafeInteger;