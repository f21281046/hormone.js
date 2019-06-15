/**
 * @name 日期差
 * @description 根据日期差返回该时间段的数组
 * @return Array
 * */

import dateDiff from './dateDiff';
import dateOperation from './dateOperation';

const dateDiffArr = (d1, d2) => {
    let _diffDay = dateDiff(d1, d2);
    let _arr = [];

    for (let i = 0; i <= _diffDay; i++) {
        let _date = dateOperation('d', i, new Date(d1), true);
        _arr.push(_date);
    }

    return _arr;
};

export default dateDiffArr;