'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @name 时长转换
 * @description 把秒数转换为 00:00 or 00:00:00 格式
 * @param {value: String | Number, status: Boolean}
 */

var secToTime = function secToTime(value) {
    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    value = value || 0;

    var t = '';
    var hour = Math.floor(Number(value) / 3600);
    var min = Math.floor(Number(value) / 60 % 60);
    var sec = Number(value) % 60;

    if (status) {
        t = hour < 10 ? '0' + hour + ':' : hour + ':';
    }
    if (min < 10) {
        t += '0';
    }
    t += min + ':';
    if (sec < 10) {
        t += '0';
    }
    t += sec.toFixed(0);

    return t;
};

exports.default = secToTime;