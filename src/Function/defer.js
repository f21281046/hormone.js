"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 延迟调用

var defer = function defer(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return setTimeout.apply(undefined, [fn, 1].concat(args));
};

exports.default = defer;