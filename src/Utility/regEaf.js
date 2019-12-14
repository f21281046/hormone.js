'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('../Type/judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regEaf = function regEaf(val) {
    if (!_judge2.default.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的英文和数字');
    }

    var reg = /^[A-Za-z0-9]+$/;
    return reg.test(val);
}; /**
    * @name 英文和数字正则验证
    * */

exports.default = regEaf;