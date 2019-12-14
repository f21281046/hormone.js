"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 返回第一个非空/未定义的参数

var coalesce = function coalesce() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.find(function (_) {
    return ![undefined, null].includes(_);
  });
};

exports.default = coalesce;