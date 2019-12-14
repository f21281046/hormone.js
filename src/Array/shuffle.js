"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// 随机排列数组

var shuffle = function shuffle(_ref) {
    var _ref2 = _toArray(_ref),
        arr = _ref2.slice(0);

    var m = arr.length;
    while (m) {
        var i = Math.floor(Math.random() * m--);
        var _ref3 = [arr[i], arr[m]];
        arr[m] = _ref3[0];
        arr[i] = _ref3[1];
    }
    return arr;
};

exports.default = shuffle;