'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 数字序号的后缀

var toOrdinalSuffix = function toOrdinalSuffix(num) {
    var int = parseInt(num),
        digits = [int % 10, int % 100],
        ordinals = ['st', 'nd', 'rd', 'th'],
        oPattern = [1, 2, 3, 4],
        tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? int + ordinals[digits[0] - 1] : int + ordinals[3];
};

exports.default = toOrdinalSuffix;