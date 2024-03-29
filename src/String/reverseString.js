'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 反转一个字符串

var reverseString = function reverseString(str) {
  return [].concat(_toConsumableArray(str)).reverse().join('');
};

exports.default = reverseString;