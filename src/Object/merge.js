"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 合并对象

var merge = function merge() {
    for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
        objs[_key] = arguments[_key];
    }

    return [].concat(objs).reduce(function (acc, obj) {
        return Object.keys(obj).reduce(function (a, k) {
            acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
            return acc;
        }, {});
    }, {});
};

exports.default = merge;