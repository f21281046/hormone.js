"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 百分比表示数组中有多少数字小于或等于给定值

var percentile = function percentile(arr, val) {
  return 100 * arr.reduce(function (acc, v) {
    return acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0);
  }, 0) / arr.length;
};

exports.default = percentile;