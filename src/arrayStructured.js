/**
 * @description 数组中的数组解构成普通数组，如：[1, 2, 3]
 * @param {arr: 数组对象}
 * */
let flat = function (arr = []) {
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let item = arr[i];

        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};

const arrayStructured = (arr) => {
    let a = [];

    for (let item of flat(arr)) {
        a.push(item);
    }

    return a;
};

export default arrayStructured;
