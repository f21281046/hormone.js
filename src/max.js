"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @name 获取数组最大值
 * */

var max = function max(arr) {
  return Math.max.apply(null, arr);
};

exports.default = max;