'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 截断一个字符串

var truncateString = function truncateString(str, num) {
  return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
};

exports.default = truncateString;