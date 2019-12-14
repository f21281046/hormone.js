"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 生成斐波纳契数组

var fibonacci = function fibonacci(n) {
    return Array.from({ length: n }).reduce(function (acc, val, i) {
        return acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i);
    }, []);
};

exports.default = fibonacci;