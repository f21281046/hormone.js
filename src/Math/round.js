"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 精确的几位小数

var round = function round(n) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Number(Math.round(n + "e" + decimals) + "e-" + decimals);
};

exports.default = round;