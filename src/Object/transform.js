"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 转换一个对象
// 对累加器和对象中的每个键（从左到右）应用一个函数。

var transform = function transform(obj, fn, acc) {
  return Object.keys(obj).reduce(function (a, k) {
    return fn(a, obj[k], k, obj);
  }, acc);
};

exports.default = transform;