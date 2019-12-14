"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 指定值应插入到数组中的最低索引位置

var sortedIndex = function sortedIndex(arr, n) {
    var isDescending = arr[0] > arr[arr.length - 1];
    var index = arr.findIndex(function (el) {
        return isDescending ? n >= el : n <= el;
    });
    return index === -1 ? arr.length : index;
};

exports.default = sortedIndex;