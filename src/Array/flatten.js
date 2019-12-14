"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 平铺数组
// 将数组平铺到指定的深度

var flatten = function flatten(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return depth != 1 ? arr.reduce(function (a, v) {
    return a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v);
  }, []) : arr.reduce(function (a, v) {
    return a.concat(v);
  }, []);
};

exports.default = flatten;