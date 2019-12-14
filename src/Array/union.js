"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 数组合集
// 返回两个数组中的任何一个元素。

var union = function union(a, b) {
  return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b))));
};

exports.default = union;