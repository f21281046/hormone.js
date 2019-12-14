"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 过滤掉数组中的非唯一值

var filterNonUnique = function filterNonUnique(arr) {
  return arr.filter(function (i) {
    return arr.indexOf(i) === arr.lastIndexOf(i);
  });
};

exports.default = filterNonUnique;