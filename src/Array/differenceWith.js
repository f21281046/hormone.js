"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 通过比较函数比较两个数组的差异

var differenceWith = function differenceWith(arr, val, comp) {
  return arr.filter(function (a) {
    return val.findIndex(function (b) {
      return comp(a, b);
    }) === -1;
  });
};

exports.default = differenceWith;