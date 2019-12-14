"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 过滤对象数组
// 根据条件过滤一个对象数组，同时过滤掉未指定的键（key）

var reducedFilter = function reducedFilter(data, keys, fn) {
    return data.filter(fn).map(function (el) {
        return keys.reduce(function (acc, key) {
            acc[key] = el[key];
            return acc;
        }, {});
    });
};

exports.default = reducedFilter;