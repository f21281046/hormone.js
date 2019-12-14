"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 浅拷贝对象

var shallowClone = function shallowClone(obj) {
  return Object.assign({}, obj);
};

exports.default = shallowClone;