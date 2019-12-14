'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 返回毫秒数的可读格式

var formatDuration = function formatDuration(ms) {
    if (ms < 0) ms = -ms;
    var time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60,
        millisecond: Math.floor(ms) % 1000
    };
    return Object.entries(time).filter(function (val) {
        return val[1] !== 0;
    }).map(function (val) {
        return val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]);
    }).join(', ');
};

exports.default = formatDuration;