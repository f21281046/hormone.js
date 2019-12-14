"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 从对象中提取出与给定键对应的键值对。

var pick = function pick(obj, arr) {
  return arr.reduce(function (acc, curr) {
    return curr in obj && (acc[curr] = obj[curr]), acc;
  }, {});
};

exports.default = pick;