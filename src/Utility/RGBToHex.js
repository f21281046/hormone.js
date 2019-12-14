'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// RGB转hex

var RGBToHex = function RGBToHex(r, g, b) {
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
};

exports.default = RGBToHex;