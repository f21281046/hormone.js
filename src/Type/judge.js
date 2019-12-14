'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeCheck = require('./typeCheck');

var _typeCheck2 = _interopRequireDefault(_typeCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    isArray: function isArray(arg) {
        return (0, _typeCheck2.default)(arg) === 'Array';
    },
    isObject: function isObject(arg) {
        return (0, _typeCheck2.default)(arg) === 'Object';
    },
    isString: function isString(arg) {
        return (0, _typeCheck2.default)(arg) === 'String';
    },
    isNumber: function isNumber(arg) {
        return (0, _typeCheck2.default)(arg) === 'Number';
    },
    isFunction: function isFunction(arg) {
        return (0, _typeCheck2.default)(arg) === 'Function';
    },
    isSymbol: function isSymbol(arg) {
        return (0, _typeCheck2.default)(arg) === 'Symbol';
    },
    isNull: function isNull(arg) {
        return (0, _typeCheck2.default)(arg) === 'Null';
    },
    isUndefined: function isUndefined(arg) {
        return (0, _typeCheck2.default)(arg) === 'Undefined';
    },
    isBoolean: function isBoolean(arg) {
        return (0, _typeCheck2.default)(arg) === 'Boolean';
    },
    isDate: function isDate(arg) {
        return (0, _typeCheck2.default)(arg) === 'Date';
    }
}; /**
    * @name 数据类型判断
    * @return boolean
    * */