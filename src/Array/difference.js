"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 数组比较
// 返回两个数组之间的差异

var difference = function difference(a, b) {
    var s = new Set(b);
    return a.filter(function (x) {
        return !s.has(x);
    });
};

exports.default = difference;