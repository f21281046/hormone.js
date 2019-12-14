"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 从对象中删除属性

var cleanObj = function cleanObj(obj) {
    var keysToKeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var childIndicator = arguments[2];

    Object.keys(obj).forEach(function (key) {
        if (key === childIndicator) {
            cleanObj(obj[key], keysToKeep, childIndicator);
        } else if (!keysToKeep.includes(key)) {
            delete obj[key];
        }
    });
    return obj;
};

exports.default = cleanObj;