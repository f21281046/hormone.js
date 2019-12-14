"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 从数组的最后一个元素开始遍历数组

var forEachRight = function forEachRight(arr, callback) {
  return arr.slice(0).reverse().forEach(callback);
};

exports.default = forEachRight;