"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 自定义的 coalesce 函数

var coalesceFactory = function coalesceFactory(valid) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.find(valid);
  };
};

exports.default = coalesceFactory;