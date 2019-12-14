"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 移除数组中的元素

var remove = function remove(arr, func) {
    return Array.isArray(arr) ? arr.filter(func).reduce(function (acc, val) {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
    }, []) : [];
};

exports.default = remove;