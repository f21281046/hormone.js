/**
 * @name 国内电话正则验证
 * */
import judge from './judge';
const regTelephone = val => {
    if (!judge.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的国内电话');
    }

    let reg = /\d{3}-\d{8}|\d{4}-\d{7}/;
    return reg.test(val);
};

export default regTelephone;