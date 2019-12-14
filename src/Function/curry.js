"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 函数式编程术语：柯里化

var curry = function curry(fn) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var arity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.length;
  return arity <= args.length ? fn.apply(undefined, args) : curry.bind.apply(curry, [null, fn, arity].concat(args));
};

exports.default = curry;