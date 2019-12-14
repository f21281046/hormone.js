"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 根据提供函数生成的键生成一个新对象

var mapKeys = function mapKeys(obj, fn) {
    return Object.keys(obj).reduce(function (acc, k) {
        acc[fn(obj[k], k, obj)] = obj[k];
        return acc;
    }, {});
};

exports.default = mapKeys;