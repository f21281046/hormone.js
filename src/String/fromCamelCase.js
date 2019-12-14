'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 转换驼峰字符串

var fromCamelCase = function fromCamelCase(str) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';
    return str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase();
};

exports.default = fromCamelCase;