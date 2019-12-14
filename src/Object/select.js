'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 选择对象中的属性值

var select = function select(from) {
  for (var _len = arguments.length, selectors = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }

  return [].concat(selectors).map(function (s) {
    return s.split('.').reduce(function (prev, cur) {
      return prev && prev[cur];
    }, from);
  });
};

exports.default = select;