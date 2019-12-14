"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 从数组中排除给定值

var without = function without(arr) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return arr.filter(function (v) {
    return !args.includes(v);
  });
};

exports.default = without;