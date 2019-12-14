"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 根据键值对创建对象

var objectFromPairs = function objectFromPairs(arr) {
  return arr.reduce(function (a, v) {
    return a[v[0]] = v[1], a;
  }, {});
};

exports.default = objectFromPairs;