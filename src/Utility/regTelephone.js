'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('../Type/judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regTelephone = function regTelephone(val) {
    if (!_judge2.default.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的国内电话');
    }

    var reg = /\d{3}-\d{8}|\d{4}-\d{7}/;
    return reg.test(val);
}; /**
    * @name 国内电话正则验证
    * */

exports.default = regTelephone;