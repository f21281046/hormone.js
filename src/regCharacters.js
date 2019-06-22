/**
 * @name 中文字符正则验证
 * */
import judge from './judge';
const regCharacters = val => {
    if (!judge.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的中文字符');
    }

    let reg = /^[\u4e00-\u9fa5]{0,}$/;
    return reg.test(val);
};

export default regCharacters;