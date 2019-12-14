"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 获取数组的第N个元素

var nthElement = function nthElement(arr) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
};

exports.default = nthElement;