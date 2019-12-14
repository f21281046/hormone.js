"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 在指定的范围内生成一个随机数

var randomNumberInRange = function randomNumberInRange(min, max) {
  return Math.random() * (max - min) + min;
};

exports.default = randomNumberInRange;