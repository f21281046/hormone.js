/**
 * @name 取随两数之间的随机数
 * */
import judge from './judge';

const random = (lower = 0, upper = 0) => {
    let _s = 0, _v = 0;

    if (!judge.isNumber(lower) || !judge.isNumber(upper) || lower % 1 !== 0 || upper % 1 !== 0) {
        console.warn('warn：', '参数必须是整数');
        return 0;
    }

    if (upper >= 0 && lower >= 0) {
        if (upper <= lower) {
            console.warn('warn：', '上限的整数不能小于等于下限的整数');
            return _v;
        }

        let _c = upper - lower;
        _s = Math.floor(Math.random() * (_c + 1));
        _v = _s + lower;
    } else {
        console.warn('warn：', '请传入正确的参数');
        return _v;
    }

    return _v;
};

export default random;