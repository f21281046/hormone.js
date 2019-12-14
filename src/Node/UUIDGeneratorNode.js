'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 在 Node.JS 中生成一个 UUID

var crypto = require('crypto');
var UUIDGeneratorNode = function UUIDGeneratorNode() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.randomBytes(1)[0] & 15 >> c / 4).toString(16);
    });
};

exports.default = UUIDGeneratorNode;