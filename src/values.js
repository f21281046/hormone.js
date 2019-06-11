/**
 * @name 获取对象的值
 * @returns 数组
 * */

const values = (obj) => {
    let arr = [];

    for (let k in obj) {
        arr.push(obj[k]);
    }

    return arr;
};

export default values;