/**
 * @name 腾讯QQ正则验证
 * */
import judge from './judge';
const regQQ = val => {
    if (!judge.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的腾讯QQ号');
    }

    let reg = /^[1]([0-9]{4,})$/ || /[1-9][0-9]{4,}/;
    return reg.test(val);
};

export default regQQ;