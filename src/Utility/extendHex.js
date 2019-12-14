'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将 3 位数的颜色代码转换为 6 位数的表现形式

var extendHex = function extendHex(shortHex) {
  return '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(function (x) {
    return x + x;
  }).join('');
};

exports.default = extendHex;