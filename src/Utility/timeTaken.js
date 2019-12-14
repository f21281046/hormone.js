'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 计算函数执行所花费的时间

var timeTaken = function timeTaken(callback) {
    console.time('timeTaken');
    var r = callback();
    console.timeEnd('timeTaken');
    return r;
};

exports.default = timeTaken;