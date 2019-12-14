'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 根据函数映射每个元素，然后求数组的平均值

var averageBy = function averageBy(arr, fn) {
  return arr.map(typeof fn === 'function' ? fn : function (val) {
    return val[fn];
  }).reduce(function (acc, val) {
    return acc + val;
  }, 0) / arr.length;
};

exports.default = averageBy;