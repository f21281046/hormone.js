/**
 * @name 中国邮政编码正则验证
 * */
import judge from './judge';
const regPostalCode = val => {
    if (!judge.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的邮政编码');
    }

    let reg = /[1-9]\d{5}(?!\d)/;
    return reg.test(val);
};

export default regPostalCode;