/**
 * @name 取随两数之间的随机数
 * */
import judge from './judge';

const random = (lower, upper) => {
    let _s = 0, _v = 0;

    if (!upper) {
        _v = Math.floor(Math.random() * (lower + 1));
        return _v;
    }

    if(judge.isNumber(lower) && judge.isNumber(upper)) {
        if (upper <= lower) {
            return console.warn('warn：', '上限的整数不能小于等于下限的整数');
        }
        if (lower % 1 !== 0 || upper % 1 !== 0) {
            return console.warn('warn：', '参数必须是整数');
        }
        if (lower >= 0 || upper >= 0) {
            return console.warn('warn：', '参数必须大于0');
        }

        let _c = upper - lower;
        _s = Math.floor(Math.random() * (_c + 1));
        _v = _s + lower;
    } else {
        return console.warn('warn：', '参数必须是number类型');
    }

    return _v;
};

export default random;