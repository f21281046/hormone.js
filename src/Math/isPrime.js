"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 判断是否为素数

var isPrime = function isPrime(num) {
    var boundary = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= boundary; i++) {
        if (num % i == 0) return false;
    }return num >= 2;
};

exports.default = isPrime;