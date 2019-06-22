/**
 * @name 英文和数字正则验证
 * */
import judge from './judge';
const regEaf = val => {
    if (!judge.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的英文和数字');
    }

    let reg = /^[A-Za-z0-9]+$/;
    return reg.test(val);
};

export default regEaf;