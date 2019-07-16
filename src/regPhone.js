'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('./judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regPhone = function regPhone(phone) {
    if (!_judge2.default.isString(phone)) {
        return console.warn('warn: ' + '请输入字符串类型的手机号');
    }

    var reg = /^[1][3,4,5,7,8][0-9]{9}$/ || /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    return reg.test(phone);
}; /**
    * @name 手机号正则验证
    * */
exports.default = regPhone;