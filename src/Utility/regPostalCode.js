'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('../Type/judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regPostalCode = function regPostalCode(val) {
    if (!_judge2.default.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的邮政编码');
    }

    var reg = /[1-9]\d{5}(?!\d)/;
    return reg.test(val);
}; /**
    * @name 中国邮政编码正则验证
    * */

exports.default = regPostalCode;