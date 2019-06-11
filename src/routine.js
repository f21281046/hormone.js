/**
 * @name 数组去杂质
 * */
import typeCheck from './typeCheck';
import checkEmpty from './checkEmpty';

const routine = (arr) => {
    let temp = [], arrRoutineType = ['Function', 'Symbol', 'Function'];

    for (let i = 0; i < arr.length; i++) {
        if (!checkEmpty(arr[i])
            || !(typeCheck(arr[i]) === arrRoutineType[0])
            || !(typeCheck(arr[i]) === arrRoutineType[1])
            || !(typeCheck(arr[i]) === arrRoutineType[2])
        ) {
            temp.push(arr[i]);
        }
    }

    return temp;
};

export default routine;