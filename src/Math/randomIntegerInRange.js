"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 在指定的范围内生成一个随机整数

var randomIntegerInRange = function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.default = randomIntegerInRange;