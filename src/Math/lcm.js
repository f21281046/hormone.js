"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 最小公倍数

var lcm = function lcm() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
    }

    var gcd = function gcd(x, y) {
        return !y ? x : gcd(y, x % y);
    };
    var _lcm = function _lcm(x, y) {
        return x * y / gcd(x, y);
    };
    return [].concat(arr).reduce(function (a, b) {
        return _lcm(a, b);
    });
};

exports.default = lcm;