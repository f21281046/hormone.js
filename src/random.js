'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('./judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var random = function random() {
    var lower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var upper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var _s = 0,
        _v = 0;

    if (!_judge2.default.isNumber(lower) || !_judge2.default.isNumber(upper) || lower % 1 !== 0 || upper % 1 !== 0) {
        console.warn('warn：', '参数必须是整数');
        return 0;
    }

    if (upper >= 0 && lower >= 0) {
        if (upper <= lower) {
            console.warn('warn：', '上限的整数不能小于等于下限的整数');
            return _v;
        }

        var _c = upper - lower;
        _s = Math.floor(Math.random() * (_c + 1));
        _v = _s + lower;
    } else {
        console.warn('warn：', '请传入正确的参数');
        return _v;
    }

    return _v;
}; /**
    * @name 取随两数之间的随机数
    * */
exports.default = random;