'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 显示所有指定的元素

var show = function show() {
  for (var _len = arguments.length, el = Array(_len), _key = 0; _key < _len; _key++) {
    el[_key] = arguments[_key];
  }

  return [].concat(el).forEach(function (e) {
    return e.style.display = '';
  });
};

exports.default = show;