/**
 * @name 获取对象的键
 * @returns 数组
 * */

const keys = (obj) => {
    let arr = [];

    for (let k in obj) {
        arr.push(k);
    }

    return arr;
};

export default keys;