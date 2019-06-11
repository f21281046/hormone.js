/**
 * @name 多维数组降维
 * */
import typeCheck from './typeCheck';

const reduction = () => {
    let newArr = [];

    const handle = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (typeCheck(arr[i]) === 'Array' || Array.isArray(arr[i])) {
                handle(arr[i]);
            } else {
                newArr.push(arr[i]);
            }
        }
    };

    return newArr;
};

export default reduction;