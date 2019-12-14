"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 是否是有效的JSON

var isValidJSON = function isValidJSON(obj) {
    try {
        JSON.parse(obj);
        return true;
    } catch (e) {
        return false;
    }
};

exports.default = isValidJSON;