"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 数字数组求和

var sum = function sum() {
  for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return [].concat(arr).reduce(function (acc, val) {
    return acc + val;
  }, 0);
};

exports.default = sum;