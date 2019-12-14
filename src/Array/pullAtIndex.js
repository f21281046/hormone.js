"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 删除数组中指定索引的值
// 改变原始数组，过滤掉指定索引的值。

var pullAtIndex = function pullAtIndex(arr, pullArr) {
    var removed = [];
    var pulled = arr.map(function (v, i) {
        return pullArr.includes(i) ? removed.push(v) : v;
    }).filter(function (v, i) {
        return !pullArr.includes(i);
    });
    arr.length = 0;
    pulled.forEach(function (v) {
        return arr.push(v);
    });
    return removed;
};

exports.default = pullAtIndex;