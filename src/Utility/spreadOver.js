"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 将参数数组映射到该函数的输入

var spreadOver = function spreadOver(fn) {
  return function (argsArr) {
    return fn.apply(undefined, _toConsumableArray(argsArr));
  };
};

exports.default = spreadOver;