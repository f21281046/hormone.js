"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 对象转化为键值对

var objectToPairs = function objectToPairs(obj) {
  return Object.keys(obj).map(function (k) {
    return [k, obj[k]];
  });
};

exports.default = objectToPairs;