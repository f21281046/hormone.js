/**
 * @name 获取对象的键和值
 * @returns 数组
 * */

const entries = (obj) => {
    let arr = [];

    for (let k in obj) {
        arr.push([k, obj[k]]);
    }

    return arr;
};

export default entries;