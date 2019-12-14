"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @description ip转换
 * @param {type: 'int2iP' or 'ip2int', value: 值}
 * */
var analysisIp = function analysisIp(type) {
    return function (value) {
        // type int2iP: integer is resolved to ip address
        if (type === 'int2iP') {
            var str = void 0;
            var tt = new Array();

            tt[0] = value >>> 24 >>> 0;
            tt[1] = value << 8 >>> 24 >>> 0;
            tt[2] = value << 16 >>> 24;
            tt[3] = value << 24 >>> 24;
            str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);

            return str;
        }

        // type ip2int: ip transform to integer
        if (type === 'ip2int') {
            var num = 0;

            var ip = value.split(".");
            num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
            num = num >>> 0;

            return num;
        }
    };
};

exports.default = analysisIp;