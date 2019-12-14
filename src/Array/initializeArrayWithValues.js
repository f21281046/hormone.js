"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 初始化特定范围和值的数组

var initializeArrayWithValues = function initializeArrayWithValues(n) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Array(n).fill(val);
};

exports.default = initializeArrayWithValues;