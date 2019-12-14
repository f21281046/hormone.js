"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 数组分块
var chunk = function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) {
    return arr.slice(i * size, i * size + size);
  });
};

exports.default = chunk;