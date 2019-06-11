/**
 * @name 数组去重
 * */

const uniq = (arr) => {
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) === -1) {
            temp.push(arr[i]);
        }
    }

    return temp;
};

export default uniq;