"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 根据提供函数返回的值映射一个新对象

var mapValues = function mapValues(obj, fn) {
    return Object.keys(obj).reduce(function (acc, k) {
        acc[k] = fn(obj[k], k, obj);
        return acc;
    }, {});
};

exports.default = mapValues;