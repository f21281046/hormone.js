/**
 * @name 多维数组降维
 * */
import typeCheck from './typeCheck';

const reduction = (arr) => {
    let newArr = [];

    let handle = arr => {
        for (let i = 0; i < arr.length; i++) {
            if (typeCheck(arr[i]) === 'Array' || Array.isArray(arr[i])) {
                handle(arr[i]);
            } else {
                newArr.push(arr[i]);
            }
        }
    };

    handle(arr);
    return newArr;
};

export default reduction;
