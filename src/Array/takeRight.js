"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 数组切片，返回后N个元素的数组
// 创建一个数组切片，从 arr 数组的最后一个元素开始向前提取n个元素。

var takeRight = function takeRight(arr) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return arr.slice(arr.length - n, arr.length);
};

exports.default = takeRight;