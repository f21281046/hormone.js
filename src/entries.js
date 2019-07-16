"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @name 获取对象的键和值
 * @returns 数组
 * */

var entries = function entries(obj) {
    var arr = [];

    for (var k in obj) {
        arr.push([k, obj[k]]);
    }

    return arr;
};

exports.default = entries;