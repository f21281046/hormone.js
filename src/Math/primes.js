"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 生成质数数组

var primes = function primes(num) {
    var arr = Array.from({ length: num - 1 }).map(function (x, i) {
        return i + 2;
    }),
        sqroot = Math.floor(Math.sqrt(num)),
        numsTillSqroot = Array.from({ length: sqroot - 1 }).map(function (x, i) {
        return i + 2;
    });
    numsTillSqroot.forEach(function (x) {
        return arr = arr.filter(function (y) {
            return y % x !== 0 || y == x;
        });
    });
    return arr;
};

exports.default = primes;