"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 创建一个指定范围的数字数组，后一个数是前一个数的 N 倍

var geometricProgression = function geometricProgression(end) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    return Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(function (v, i) {
        return start * step ** i;
    });
};

exports.default = geometricProgression;