'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 检查回文

var palindrome = function palindrome(str) {
    var s = str.toLowerCase().replace(/[\W_]/g, '');
    return s === s.split('').reverse().join('');
};

exports.default = palindrome;