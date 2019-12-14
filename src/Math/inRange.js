"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 检查某一数字是否在给定指定的范围内

var inRange = function inRange(n, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (end && start > end) end = [start, start = end][0];
    return end == null ? n >= 0 && n < start : n >= start && n < end;
};

exports.default = inRange;