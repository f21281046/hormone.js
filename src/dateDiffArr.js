/**
 * @name 日期差
 * @description 根据日期差返回该时间段的数组
 * @return Array
 * */

import dateDiff from './dateDiff';
import dateOperation from './dateOperation';
import compareDate from './compareDate';

const dateDiffArr = (d1, d2) => {
    let _diffDay = dateDiff(d1, d2);
    let _arr = [];

    for (let i = 0; i <= Math.round(_diffDay); i++) {
        let _date = compareDate(d1, d2) ? (new Date(d2)) : (new Date(d1))
        let _item = dateOperation('d', i, _date, true);
        _arr.push(_item);
    }

    return _arr;
};

export default dateDiffArr;