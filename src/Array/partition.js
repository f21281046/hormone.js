"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 数组元素分组
// 根据所提供的函数对每个元素进行迭代，将这些元素分成两个数组。

var partition = function partition(arr, fn) {
    return arr.reduce(function (acc, val, i, arr) {
        acc[fn(val, i, arr) ? 0 : 1].push(val);
        return acc;
    }, [[], []]);
};

exports.default = partition;