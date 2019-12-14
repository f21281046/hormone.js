'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 根据函数映射每个元素，然后返回数组的和

var sumBy = function sumBy(arr, fn) {
  return arr.map(typeof fn === 'function' ? fn : function (val) {
    return val[fn];
  }).reduce(function (acc, val) {
    return acc + val;
  }, 0);
};

exports.default = sumBy;