'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 明天

var tomorrow = function tomorrow() {
  return new Date(new Date().getTime() + 86400000).toISOString().split('T')[0];
};

exports.default = tomorrow;