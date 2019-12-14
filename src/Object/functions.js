'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 返回一个函数属性名称数组

var functions = function functions(obj) {
    var inherited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (inherited ? [].concat(_toConsumableArray(Object.keys(obj)), _toConsumableArray(Object.keys(Object.getPrototypeOf(obj)))) : Object.keys(obj)).filter(function (key) {
        return typeof obj[key] === 'function';
    });
};

exports.default = functions;