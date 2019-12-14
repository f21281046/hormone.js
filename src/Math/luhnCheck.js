'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Luhn 算法检查
// Luhn 算法 的实现，用来验证各种识别码，如信用卡号码，IMEI码，国家提供商标识符号码等。

var luhnCheck = function luhnCheck(num) {
    var arr = (num + '').split('').reverse().map(function (x) {
        return parseInt(x);
    });
    var lastDigit = arr.splice(0, 1)[0];
    var sum = arr.reduce(function (acc, val, i) {
        return i % 2 !== 0 ? acc + val : acc + val * 2 % 9 || 9;
    }, 0);
    sum += lastDigit;
    return sum % 10 === 0;
};

exports.default = luhnCheck;