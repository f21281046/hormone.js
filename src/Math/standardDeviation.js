"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 标准偏差
// 返回数组数组的标准偏差。

var standardDeviation = function standardDeviation(arr) {
    var usePopulation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var mean = arr.reduce(function (acc, val) {
        return acc + val;
    }, 0) / arr.length;
    return Math.sqrt(arr.reduce(function (acc, val) {
        return acc.concat((val - mean) ** 2);
    }, []).reduce(function (acc, val) {
        return acc + val;
    }, 0) / (arr.length - (usePopulation ? 0 : 1)));
};

exports.default = standardDeviation;