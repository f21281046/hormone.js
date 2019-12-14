'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 按字母顺序排列字符串中的字符

var sortCharactersInString = function sortCharactersInString(str) {
    return [].concat(_toConsumableArray(str)).sort(function (a, b) {
        return a.localeCompare(b);
    }).join('');
};

exports.default = sortCharactersInString;