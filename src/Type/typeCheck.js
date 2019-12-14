'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * @description 类型检查
 * @param {val: 值}
 * */
var typeCheck = function typeCheck(val) {
    var typeArr = ['String', 'Object', 'Number', 'Array', 'Function', 'Null', 'Undefined', 'Symbol', 'Boolean', 'Date'];
    var optc = Object.prototype.toString.call(val);
    var v = optc.split('object')[1].split(']')[0];
    var m = v.replace(/\s/g, '');

    if (typeArr.indexOf(m) >= 0) {
        return m;
    } else {
        console.error('type check：', m + ' This type is not in the JavaScript type');
    }
};

exports.default = typeCheck;