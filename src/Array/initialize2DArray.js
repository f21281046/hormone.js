"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 初始化一个二维数组

var initialize2DArray = function initialize2DArray(w, h) {
  var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return Array.from({ length: h }).map(function () {
    return Array.from({ length: w }).fill(val);
  });
};

exports.default = initialize2DArray;