'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('./judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regMoney = function regMoney(val) {
    if (!_judge2.default.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的金钱');
    }

    var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    return reg.test(val);
}; /**
    * @name 金钱格式正则验证
    * */
exports.default = regMoney;