"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 删除数组中的元素

var dropElements = function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr = arr.slice(1);
    }return arr;
};

exports.default = dropElements;