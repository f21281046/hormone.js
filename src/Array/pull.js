"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 删除数组中指定的值
// 改变原始数组，过滤掉指定的值。

var pull = function pull(arr) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var argState = Array.isArray(args[0]) ? args[0] : args;
    var pulled = arr.filter(function (v, i) {
        return !argState.includes(v);
    });
    arr.length = 0;
    pulled.forEach(function (v) {
        return arr.push(v);
    });
};

exports.default = pull;