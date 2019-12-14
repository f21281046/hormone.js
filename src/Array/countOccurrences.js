"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 计数数组中某个值的出现次数
var countOccurrences = function countOccurrences(arr, val) {
  return arr.reduce(function (a, v) {
    return v === val ? a + 1 : a + 0;
  }, 0);
};

exports.default = countOccurrences;