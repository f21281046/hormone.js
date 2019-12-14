"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 获得数组中的每个第 n 个元素

var everyNth = function everyNth(arr, nth) {
  return arr.filter(function (e, i) {
    return i % nth === nth - 1;
  });
};

exports.default = everyNth;