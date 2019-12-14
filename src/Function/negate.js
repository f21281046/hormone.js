"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 否定断言函数。
// 接受一个断言函数，并用它的参数应用逻辑非运算符 (!) 。

var negate = function negate(func) {
  return function () {
    return !func.apply(undefined, arguments);
  };
};

exports.default = negate;