'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 获取原生类型的值

var getType = function getType(v) {
  return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
};

exports.default = getType;