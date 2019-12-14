"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 过滤掉数组中所有假值元素
var compact = function compact(arr) {
  return arr.filter(Boolean);
};

exports.default = compact;