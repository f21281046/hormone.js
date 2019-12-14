"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 数组差集

var symmetricDifference = function symmetricDifference(a, b) {
    var sA = new Set(a),
        sB = new Set(b);
    return [].concat(_toConsumableArray(a.filter(function (x) {
        return !sB.has(x);
    })), _toConsumableArray(b.filter(function (x) {
        return !sA.has(x);
    })));
};

exports.default = symmetricDifference;