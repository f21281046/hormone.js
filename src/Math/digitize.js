"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 将数字转化为整数数组

var digitize = function digitize(n) {
  return [].concat(_toConsumableArray("" + n)).map(function (i) {
    return parseInt(i);
  });
};

exports.default = digitize;