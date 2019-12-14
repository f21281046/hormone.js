"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 初始化特定范围的数字数组

var initializeArrayWithRange = function initializeArrayWithRange(end) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(function (v, i) {
    return i * step + start;
  });
};

exports.default = initializeArrayWithRange;