"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 返回剔除第一个元素后的数组

var tail = function tail(arr) {
  return arr.length > 1 ? arr.slice(1) : arr;
};

exports.default = tail;