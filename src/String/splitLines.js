"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将多行字符串拆分为数组

var splitLines = function splitLines(str) {
  return str.split(/\r?\n/);
};

exports.default = splitLines;