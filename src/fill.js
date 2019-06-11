/**
 * @name 改变数组元素
 * @description 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）
 * @return 新数组
 * */

const fill = (arr, val, startIndex, endIndex) => {
    let _startIndex = startIndex || 0;
    let _endIndex = endIndex || arr.length;
    let _newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (_startIndex <= i && _endIndex > i) {
            _newArr[i] = val;
        } else {
            _newArr[i] = arr[i];
        }
    }

    return _newArr;
};

export default fill;