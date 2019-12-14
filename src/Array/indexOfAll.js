"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 返回指定元素的所有索引

var indexOfAll = function indexOfAll(arr, val) {
    var indices = [];
    arr.forEach(function (el, i) {
        return el === val && indices.push(i);
    });
    return indices;
};

exports.default = indexOfAll;