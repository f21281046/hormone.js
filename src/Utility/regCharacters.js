'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('../Type/judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regCharacters = function regCharacters(val) {
    if (!_judge2.default.isString(val)) {
        return console.warn('warn: ' + '请输入字符串类型的中文字符');
    }

    var reg = /^[\u4e00-\u9fa5]{0,}$/;
    return reg.test(val);
}; /**
    * @name 中文字符正则验证
    * */

exports.default = regCharacters;