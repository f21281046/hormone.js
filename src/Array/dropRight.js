"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 从右开始删除数组元素
// 返回从右开始删除 n 个元素的新数组

var dropRight = function dropRight(arr) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return arr.slice(0, -n);
};

exports.default = dropRight;