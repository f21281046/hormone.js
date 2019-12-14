"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 两点之间的欧氏距离

var distance = function distance(x0, y0, x1, y1) {
  return Math.hypot(x1 - x0, y1 - y0);
};

exports.default = distance;