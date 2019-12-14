"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 返回限制范围内的值

var clampNumber = function clampNumber(num, a, b) {
  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
};

exports.default = clampNumber;