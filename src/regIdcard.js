'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('./judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regIdcard = function regIdcard(val) {
    if (!_judge2.default.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的身份证号');
    }

    var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    return reg.test(val);
}; /**
    * @name 身份证正则验证
    * */
exports.default = regIdcard;