"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将数组的值映射到对象
// 使用一个函数将数组的值映射到对象，其键值对中，原始值作为键，映射值作为值。

var mapObject = function mapObject(arr, fn) {
  return function (a) {
    return a = [arr, arr.map(fn)], a[0].reduce(function (acc, val, ind) {
      return acc[val] = a[1][ind], acc;
    }, {});
  }();
};

exports.default = mapObject;