'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 使用 * 遮蔽字符串

var mask = function mask(cc) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';
  return ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);
};

exports.default = mask;