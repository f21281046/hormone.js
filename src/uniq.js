"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @name 数组去重
 * */

var uniq = function uniq(arr) {
    var temp = [];

    for (var i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) === -1) {
            temp.push(arr[i]);
        }
    }

    return temp;
};

exports.default = uniq;