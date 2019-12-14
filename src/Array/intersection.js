"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 数组交集

var intersection = function intersection(a, b) {
    var s = new Set(b);
    return a.filter(function (x) {
        return s.has(x);
    });
};

exports.default = intersection;