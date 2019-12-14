"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @name 改变数组元素
 * @description 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）
 * @return 新数组
 * */
var fill = function fill(arr, val) {
    var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var endIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var _startIndex = startIndex;
    var _endIndex = endIndex;
    var _newArr = [];

    for (var i = 0; i < arr.length; i++) {
        _newArr[i] = arr[i];
        if (startIndex >= 0 && endIndex === 0) {
            for (var p = 0; p < arr.length - startIndex; p++) {
                _newArr[p + startIndex] = val;
            }
        }
        if (startIndex >= 0 && endIndex >= 0 && _endIndex > _startIndex) {
            if (_endIndex - _startIndex > arr.length) {
                for (var s = _startIndex; s <= arr.length; s++) {
                    _newArr[s] = val;
                }
            } else {
                for (var _s = _startIndex; _s <= _endIndex - 1; _s++) {
                    _newArr[_s] = val;
                }
            }
        } else if (_startIndex < 0 && _endIndex >= 0) {
            var v = Math.abs(_startIndex) + _endIndex;
            var len = arr.length - (v + 1);
            for (var m = 0; m <= len; m++) {
                _newArr[m + _endIndex + 1] = val;
            }
        } else if (_startIndex >= 0 && _endIndex < 0) {
            var _v = Math.abs(_endIndex) + _startIndex;
            var _len = arr.length - (_v - 1);
            for (var n = 0; n < _len - 1; n++) {
                _newArr[n + _startIndex] = val;
            }
        } else if (_startIndex < 0 && _endIndex < 0 && Math.abs(_startIndex) <= Math.abs(_endIndex)) {
            var _len2 = arr.length - 1;
            var c = Math.abs(_endIndex) - Math.abs(_startIndex);
            for (var j = 0; j < c; j++) {
                _newArr[_len2 - j + _startIndex + 1] = val;
            }
        }
    }
    return _newArr;
};

exports.default = fill;