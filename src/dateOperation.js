'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dateFormat = require('./dateFormat');

var _dateFormat2 = _interopRequireDefault(_dateFormat);

var _judge = require('./judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name 时间运算
 * @description 时间加减
 * @param interval: 要运算的类型值，number：运算值，date： 时间，type： false（减） true（增）
 * */
var dateOperation = function dateOperation(interval, number, date) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var _date = new Date();
    var _number = _judge2.default.isNumber(number) ? number : Number(number);

    if (_judge2.default.isDate(date)) {
        _date = date;
    } else {
        _date = new Date((0, _dateFormat2.default)(date));
    }

    switch (interval) {
        // year
        case 'Y':
            {
                _date.setFullYear(!type ? _date.getFullYear() - _number : _date.getFullYear() + _number);
                return (0, _dateFormat2.default)(_date);break;
            }
        // quarter
        case 'Q':
            {
                _date.setMonth(!type ? _date.getMonth() - number * 3 : _date.getMonth() + number * 3);
                return (0, _dateFormat2.default)(_date);break;
            }
        // month
        case 'M':
            {
                _date.setMonth(!type ? _date.getMonth() - number : _date.getMonth() + number);
                return (0, _dateFormat2.default)(_date);break;
            }
        // week
        case 'W':
            {
                _date.setDate(!type ? _date.getDate() - number * 7 : _date.getDate() + number * 7);
                return (0, _dateFormat2.default)(_date);break;
            }
        // day
        case 'D':
            {
                _date.setDate(!type ? _date.getDate() - number : _date.getDate() + number);
                return (0, _dateFormat2.default)(_date);break;
            }
        // hours
        case 'h':
            {
                _date.setHours(!type ? _date.getHours() - number : _date.getHours() + number);
                return (0, _dateFormat2.default)(_date);break;
            }
        // minutes
        case 'm':
            {
                _date.setMinutes(!type ? _date.getMinutes() - number : _date.getMinutes() + number);
                return (0, _dateFormat2.default)(_date);break;
            }
        // seconds
        case 's':
            {
                _date.setSeconds(!type ? _date.getSeconds() - number : _date.getSeconds() + number);
                return (0, _dateFormat2.default)(_date);break;
            }
        // default
        default:
            {
                _date.setDate(!type ? _date.getDate() - number : _date.getDate() + number);
                return (0, _dateFormat2.default)(_date);break;
            }
    }
};

exports.default = dateOperation;