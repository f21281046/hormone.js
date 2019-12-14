"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @name 获取对象的值
 * @returns 数组
 * */

var values = function values(obj) {
    var arr = [];

    for (var k in obj) {
        arr.push(obj[k]);
    }

    return arr;
};

exports.default = values;