"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 获取数组交集

var similarity = function similarity(arr, values) {
  return arr.filter(function (v) {
    return values.includes(v);
  });
};

exports.default = similarity;