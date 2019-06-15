/**
 * @name 两日期差值
 * @param type : false(返回天数)， true（返回分钟数）
 * @return 天数或者小时
 * */
import dateFormat from './dateFormat';

const dateDiff = (d1, d2, type = false) => {
    let res = 0;
    let day = 24 * 60 * 60 * 1000, minutes = 60 * 60 * 1000;
    let dateArr1 = dateFormat(d1).split('-');
    let checkDate1 = new Date();
    checkDate1.setFullYear(dateArr1[0], Number(dateArr1[1]) - 1, dateArr1[2]);
    let checkTime1 = checkDate1.getTime();

    let dateArr2 = dateFormat(d2).split('-');
    let checkDate2 = new Date();
    checkDate2.setFullYear(dateArr2[0], Number(dateArr2[1]) - 1, dateArr2[2]);
    let checkTime2 = checkDate2.getTime();

    if (!type) {
        res = (checkTime1 - checkTime2) / day;
    } else {
        res = (checkTime1 - checkTime2) / minutes;
    }

    return Math.abs(res);
};

export default dateDiff;