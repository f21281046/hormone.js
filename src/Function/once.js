"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 确保函数只被调用一次

var once = function once(fn) {
    var called = false;
    return function () {
        if (called) return;
        called = true;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return fn.apply(this, args);
    };
};

exports.default = once;