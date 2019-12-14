'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 根据函数映射每个元素，然后返回数组的最小值

var minBy = function minBy(arr, fn) {
  return Math.min.apply(Math, _toConsumableArray(arr.map(typeof fn === 'function' ? fn : function (val) {
    return val[fn];
  })));
};

exports.default = minBy;