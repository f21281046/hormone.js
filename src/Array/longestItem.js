"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 获取任何数量的可迭代对象或具有 length 属性的对象，并返回最长的一个。

var longestItem = function longestItem() {
  for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
    vals[_key] = arguments[_key];
  }

  return [].concat(vals).sort(function (a, b) {
    return b.length - a.length;
  })[0];
};

exports.default = longestItem;