"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 求数字或数组的平均值

var average = function average() {
  for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return [].concat(nums).reduce(function (acc, val) {
    return acc + val;
  }, 0) / nums.length;
};

exports.default = average;