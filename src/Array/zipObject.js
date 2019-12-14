"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 创建一个属性关联到值的对象
// 给定一个有效的属性标识符数组和一个值的数组，返回一个将属性关联到值的对象。

var zipObject = function zipObject(props, values) {
  return props.reduce(function (obj, prop, index) {
    return obj[prop] = values[index], obj;
  }, {});
};

exports.default = zipObject;