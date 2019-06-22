/**
 * @name 改变数组元素
 * @description 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）
 * @return 新数组
 * */
const fill = (arr, val, startIndex = 0, endIndex = 0) => {
    let _startIndex = startIndex;
    let _endIndex = endIndex;
    let _newArr = [];

    for (let i = 0; i < arr.length; i++) {
        _newArr[i] = arr[i];
        if (startIndex >= 0 && endIndex >= 0 && _endIndex > _startIndex) {
            if (_endIndex - _startIndex > arr.length) {
                for (let s = _startIndex; s <= arr.length; s++) {
                    _newArr[s] = val;
                }
            } else {
                for (let s = _startIndex; s <= _endIndex - 1; s++) {
                    _newArr[s] = val;
                }
            }
        } else if (_startIndex < 0 && _endIndex >= 0) {
            let v = Math.abs(_startIndex) + _endIndex;
            let len = arr.length - (v + 1);
            for (let m = 0; m <= len; m++) {
                _newArr[m + _endIndex + 1] = val;
            }
        } else if (_startIndex >= 0 && _endIndex < 0) {
            let v = Math.abs(_endIndex) + _startIndex;
            let len = arr.length - (v - 1);
            for (let n = 0; n < len - 1; n++) {
                _newArr[n + _startIndex] = val;
            }
        } else if (_startIndex < 0 && _endIndex < 0 && Math.abs(_startIndex) <= Math.abs(_endIndex)) {
            let len = arr.length - 1;
            let c = Math.abs(_endIndex) - Math.abs(_startIndex);
            for (let j = 0; j < c; j++) {
                _newArr[len - j + _startIndex + 1] = val;
            }
        }
    }
    return _newArr;
};

export default fill;