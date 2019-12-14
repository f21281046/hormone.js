"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 在浏览器中生成一个 UUID
// 使用 crypto API 生成一个 UUID，符合RFC4122 版本 4 。

var UUIDGeneratorBrowser = function UUIDGeneratorBrowser() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
};

exports.default = UUIDGeneratorBrowser;