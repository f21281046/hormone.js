"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 在控制台中打印函数的名称

var functionName = function functionName(fn) {
  return console.debug(fn.name), fn;
};

exports.default = functionName;