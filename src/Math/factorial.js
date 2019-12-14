'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 计算一个数字的阶乘

var factorial = function factorial(n) {
    return n < 0 ? function () {
        throw new TypeError('Negative numbers are not allowed!');
    }() : n <= 1 ? 1 : n * factorial(n - 1);
};

exports.default = factorial;