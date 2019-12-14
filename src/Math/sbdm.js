'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 散列算法

var sdbm = function sdbm(str) {
    var arr = str.split('');
    return arr.reduce(function (hashCode, currentVal) {
        return hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode;
    }, 0);
};

exports.default = sdbm;