"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 删除数组中指定的值，返回删除的元素

var pullAtValue = function pullAtValue(arr, pullArr) {
    var removed = [],
        pushToRemove = arr.forEach(function (v, i) {
        return pullArr.includes(v) ? removed.push(v) : v;
    }),
        mutateTo = arr.filter(function (v, i) {
        return !pullArr.includes(v);
    });
    arr.length = 0;
    mutateTo.forEach(function (v) {
        return arr.push(v);
    });
    return removed;
};

exports.default = pullAtValue;