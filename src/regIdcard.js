/**
 * @name 身份证正则验证
 * */
import judge from './judge';
const regIdcard = val => {
    if (!judge.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的身份证号');
    }

    let reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    return reg.test(val);
};

export default regIdcard;