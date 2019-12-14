'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将数组的所有元素拼接成一个字符串

var join = function join(arr) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : separator;
  return arr.reduce(function (acc, val, i) {
    return i == arr.length - 2 ? acc + val + end : i == arr.length - 1 ? acc + val : acc + val + separator;
  }, '');
};

exports.default = join;