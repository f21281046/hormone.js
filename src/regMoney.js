/**
 * @name 金钱格式正则验证
 * */
import judge from './judge';
const regMoney = val => {
    if (!judge.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的金钱');
    }

    let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    return reg.test(val);
};

export default regMoney;