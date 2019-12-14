"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 返回数组中N个最小元素
// 从提供的数组中返回 n 个最小元素。如果 n 大于或等于提供的数组长度，则返回原数组（按降序排列）。

var minN = function minN(arr) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return [].concat(_toConsumableArray(arr)).sort(function (a, b) {
    return a - b;
  }).slice(0, n);
};

exports.default = minN;