"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 幂累加

var sumPower = function sumPower(end) {
    var power = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    return Array(end + 1 - start).fill(0).map(function (x, i) {
        return (i + start) ** power;
    }).reduce(function (a, b) {
        return a + b;
    }, 0);
};

exports.default = sumPower;