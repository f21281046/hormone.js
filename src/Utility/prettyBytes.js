'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 美化字节数

var prettyBytes = function prettyBytes(num) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var addSpace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
    var exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
    var n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
    return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};

exports.default = prettyBytes;