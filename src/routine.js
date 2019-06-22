/**
 * @name 数组去杂质
 * */
import checkEmpty from './checkEmpty';
import judge from './judge';

const routine = (arr) => {
    let temp = [], arrRoutineType = ['Function', 'Symbol', 'Function'];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!checkEmpty(item)
            && !judge.isFunction(item)
            && !judge.isUndefined(item)
            && !judge.isSymbol(item)
            && !judge.isNull(item)
            && !judge.isDate(item)
            && !judge.isBoolean(item)
        ) {temp.push(arr[i])}
    }
    return temp;
};

export default routine;