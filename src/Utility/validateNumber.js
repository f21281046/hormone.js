"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 数字验证

var validateNumber = function validateNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
};

exports.default = validateNumber;