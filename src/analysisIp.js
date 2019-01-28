/**
 * @description ip转换
 * @param {type: 'int2iP' or 'ip2int', value: 值}
 * */
let analysisIp = (type) => (value) => {
    // type int2iP: integer is resolved to ip address
    if (type === 'int2iP') {
        let str;
        let tt = new Array();

        tt[0] = (value >>> 24) >>> 0;
        tt[1] = ((value << 8) >>> 24) >>> 0;
        tt[2] = (value << 16) >>> 24;
        tt[3] = (value << 24) >>> 24;
        str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);

        return str;
    }

    // type ip2int: ip transform to integer
    if (type === 'ip2int') {
        let num = 0;

        ip = value.split(".");
        num = Number(value[0]) * 256 * 256 * 256 + Number(value[1]) * 256 * 256 + Number(value[2]) * 256 + Number(value[3]);
        num = num >>> 0;

        return num;
    }
};

export default analysisIp;
