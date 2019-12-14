"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 数组取样，随机获取数组中的一个元素

var sample = function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

exports.default = sample;