"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 最大公约数

var gcd = function gcd() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
    }

    var _gcd = function _gcd(x, y) {
        return !y ? x : gcd(y, x % y);
    };
    return [].concat(arr).reduce(function (a, b) {
        return _gcd(a, b);
    });
};

exports.default = gcd;