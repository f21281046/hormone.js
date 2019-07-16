"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @name 获取对象的键
 * @returns 数组
 * */

var keys = function keys(obj) {
    var arr = [];

    for (var k in obj) {
        arr.push(k);
    }

    return arr;
};

exports.default = keys;