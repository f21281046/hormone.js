/**
 * @name 数据类型判断
 * @return boolean
 * */
import typeCheck from './typeCheck';

export default {
    isArray(arg) {
        return typeCheck(arg) === 'Array' ;
    },
    isObject(arg) {
        return typeCheck(arg) === 'Object';
    },
    isString(arg) {
        return typeCheck(arg) === 'String';
    },
    isNumber(arg) {
        return typeCheck(arg) === 'Number';
    },
    isFunction(arg) {
        return typeCheck(arg) === 'Function';
    },
    isSymbol(arg) {
        return typeCheck(arg) === 'Symbol';
    },
    isNull(arg) {
        return typeCheck(arg) === 'Null';
    },
    isUndefined(arg) {
        return typeCheck(arg) === 'Undefined';
    },
    isBoolean(arg) {
        return typeCheck(arg) === 'Boolean';
    }
};