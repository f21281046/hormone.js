"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 函数式编程术语：函数组合

var compose = function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(undefined, arguments));
    };
  });
};

exports.default = compose;