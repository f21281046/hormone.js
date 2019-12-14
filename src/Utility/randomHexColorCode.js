'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 随机生成 Hex 颜色值

var randomHexColorCode = function randomHexColorCode() {
    var n = (Math.random() * 0xfffff | 0).toString(16);
    return '#' + (n.length !== 6 ? (Math.random() * 0xf | 0).toString(16) + n : n);
};

exports.default = randomHexColorCode;