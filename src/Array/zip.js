"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 创建一个分组元素数组
// 创建一组元素，根据原始数组中的位置进行分组

var zip = function zip() {
    for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key];
    }

    var maxLength = Math.max.apply(Math, _toConsumableArray(arrays.map(function (x) {
        return x.length;
    })));
    return Array.from({ length: maxLength }).map(function (_, i) {
        return Array.from({ length: arrays.length }, function (_, k) {
            return arrays[k][i];
        });
    });
};

exports.default = zip;