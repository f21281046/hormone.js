'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @description 获取当前时间戳
 * @param {convert: Boolean} true: 时间戳已秒的形式; false: 时间戳已毫秒的形式
 */
var timeStamp = function timeStamp() {
    var convert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var timeStamp = new Date().getTime();
    var newTimeStamp = '';
    convert ? newTimeStamp = Math.round(timeStamp / 1000) : timeStamp;
    return newTimeStamp;
};

exports.default = timeStamp;