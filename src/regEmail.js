/**
 * @name 邮箱正则验证
 * */
import judge from './judge';
const regEmail = val => {
    if (!judge.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的邮箱');
    }

    let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return reg.test(val);
};

export default regEmail;