'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将数字转化为千分位格式

var toDecimalMark = function toDecimalMark(num) {
  return num.toLocaleString('en-US');
};

exports.default = toDecimalMark;