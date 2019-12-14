"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 链式调用异步函数

var chainAsync = function chainAsync(fns) {
    var curr = 0;
    var next = function next() {
        return fns[curr++](next);
    };
    next();
};

exports.default = chainAsync;