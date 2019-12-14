'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 当前环境是否是 Travis CI

var isTravisCI = function isTravisCI() {
  return 'TRAVIS' in process.env && 'CI' in process.env;
};

exports.default = isTravisCI;