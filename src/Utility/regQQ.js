'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('../Type/judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regQQ = function regQQ(val) {
    if (!_judge2.default.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的腾讯QQ号');
    }

    var reg = /^[1]([0-9]{4,})$/ || /[1-9][0-9]{4,}/;
    return reg.test(val);
}; /**
    * @name 腾讯QQ正则验证
    * */

exports.default = regQQ;