"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 反转对象的键值对

var invertKeyValues = function invertKeyValues(obj) {
    return Object.keys(obj).reduce(function (acc, key) {
        acc[obj[key]] = key;
        return acc;
    }, {});
};

exports.default = invertKeyValues;