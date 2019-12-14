"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 数组切片，返回前N个元素的数组

var take = function take(arr) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return arr.slice(0, n);
};

exports.default = take;