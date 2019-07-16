"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = memoize;
/**
 * @name 函数记忆
 * @description 提升纯函数的新能，减少执行时间
 * */

function memoize(fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        fn.cache = fn.cache || {};
        return fn.cache[args] ? fn.cache[args] : fn.cache[args] = fn.apply(this, args);
    };
}