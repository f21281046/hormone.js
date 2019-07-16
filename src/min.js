"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @name 获取数组最小值
 * */

var min = function min(arr) {
  return Math.min.apply(null, arr);
};

exports.default = min;