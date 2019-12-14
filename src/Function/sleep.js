"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 休眠，延迟执行异步函数

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

exports.default = sleep;