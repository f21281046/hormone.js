"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 小写对象属性名

var lowercaseKeys = function lowercaseKeys(obj) {
    return Object.keys(obj).reduce(function (acc, key) {
        acc[key.toLowerCase()] = obj[key];
        return acc;
    }, {});
};

exports.default = lowercaseKeys;