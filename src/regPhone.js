/**
 * @name 手机号正则验证
 * */
import judge from './judge';
const regPhone = phone => {
    if (!judge.isString(phone)) {
        return console.warn('warn: ' + '请输入字符串类型的手机号');
    }

    let reg = /^[1][3,4,5,7,8][0-9]{9}$/ || /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    return reg.test(phone);
};

export default regPhone;