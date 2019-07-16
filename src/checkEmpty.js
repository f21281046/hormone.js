'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeCheck = require('./typeCheck');

var _typeCheck2 = _interopRequireDefault(_typeCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description 检查空
 * @param {value: 要检查的值}
 */
var checkEmpty = function checkEmpty(value) {
    var status = false;

    if ((0, _typeCheck2.default)(value) === 'Object' && (value === null || Object.keys(value).length === 0)) {
        status = true;
    } else if ((0, _typeCheck2.default)(value) === 'String' && /^(\s)*$/.test(value)) {
        status = true;
    } else if ((0, _typeCheck2.default)(value) === 'Undefined') {
        status = true;
    } else if ((0, _typeCheck2.default)(value) === 'Null') {
        status = true;
    } else if ((0, _typeCheck2.default)(value) === 'Array' && value.length === 0) {
        status = true;
    }

    return status;
};

exports.default = checkEmpty;