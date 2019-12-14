"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将字符串转换为单词数组

var words = function words(str) {
  var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /[^a-zA-Z-]+/;
  return str.split(pattern).filter(Boolean);
};

exports.default = words;