"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 排除数组中最后一个元素

var initial = function initial(arr) {
  return arr.slice(0, -1);
};

exports.default = initial;