"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 是否可以被某个数整除

var isDivisible = function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
};

exports.default = isDivisible;