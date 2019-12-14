'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 汉明距离
// 计算两个值之间的汉明距离。

var hammingDistance = function hammingDistance(num1, num2) {
  return ((num1 ^ num2).toString(2).match(/1/g) || '').length;
};

exports.default = hammingDistance;