"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 获取字符串的字节长度

var byteSize = function byteSize(str) {
  return new Blob([str]).size;
};

exports.default = byteSize;