'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('../Type/judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regEmail = function regEmail(val) {
    if (!_judge2.default.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的邮箱');
    }

    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return reg.test(val);
}; /**
    * @name 邮箱正则验证
    * */

exports.default = regEmail;