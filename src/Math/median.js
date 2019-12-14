"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 获取数字数组的中值

var median = function median(arr) {
    var mid = Math.floor(arr.length / 2),
        nums = [].concat(_toConsumableArray(arr)).sort(function (a, b) {
        return a - b;
    });
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

exports.default = median;