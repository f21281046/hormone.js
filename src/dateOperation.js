/**
 * @name 时间运算
 * @description 时间加减
 * @param interval: 要运算的类型值，number：运算值，date： 时间，type： false（减） true（增）
 * */
import dateFormat from './dateFormat';
import judge from './judge';

const dateOperation = (interval, number, date, type = false) => {
    let _date = new Date();
    let _number =  judge.isNumber(number) ? number : Number(number);

    if (judge.isDate(date)) {
        _date = date;
    } else {
        _date = new Date(dateFormat(date));
    }

    switch (interval) {
        // year
        case 'Y': {
            _date.setFullYear(!type ? (_date.getFullYear() - _number) : (_date.getFullYear() + _number));
            return dateFormat(_date); break;
        }
        // quarter
        case 'Q': {
            _date.setMonth(!type ? (_date.getMonth() - number * 3) : (_date.getMonth() + number * 3));
            return dateFormat(_date); break;
        }
        // month
        case 'M': {
            _date.setMonth(!type ? (_date.getMonth() - number) : (_date.getMonth() + number));
            return dateFormat(_date); break;
        }
        // week
        case 'W': {
            _date.setDate(!type ? (_date.getDate() - number * 7) : (_date.getDate() + number * 7));
            return dateFormat(_date); break;
        }
        // day
        case 'D': {
            _date.setDate(!type ? (_date.getDate() - number) : (_date.getDate() + number));
            return dateFormat(_date); break;
        }
        // hours
        case 'h': {
            _date.setHours(!type ? (_date.getHours() - number) : (_date.getHours() + number));
            return dateFormat(_date); break;
        }
        // minutes
        case 'm': {
            _date.setMinutes(!type ? (_date.getMinutes() - number) : (_date.getMinutes() + number));
            return dateFormat(_date); break;
        }
        // seconds
        case 's': {
            _date.setSeconds(!type ? (_date.getSeconds() - number) : (_date.getSeconds() + number));
            return dateFormat(_date); break;
        }
        // default
        default: {
            _date.setDate(!type ? (_date.getDate() - number) : (_date.getDate() + number));
            return dateFormat(_date); break;
        }
    }
};

export default dateOperation;