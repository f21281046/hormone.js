'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dateFormat = require('./dateFormat');

var _dateFormat2 = _interopRequireDefault(_dateFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateDiff = function dateDiff(d1, d2) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var res = 0;
    var day = 24 * 60 * 60 * 1000,
        minutes = 60 * 60 * 1000;
    var dateArr1 = (0, _dateFormat2.default)(d1).split('-');
    var checkDate1 = new Date();
    checkDate1.setFullYear(dateArr1[0], Number(dateArr1[1]) - 1, dateArr1[2]);
    var checkTime1 = checkDate1.getTime();

    var dateArr2 = (0, _dateFormat2.default)(d2).split('-');
    var checkDate2 = new Date();
    checkDate2.setFullYear(dateArr2[0], Number(dateArr2[1]) - 1, dateArr2[2]);
    var checkTime2 = checkDate2.getTime();

    if (!type) {
        res = (checkTime1 - checkTime2) / day;
    } else {
        res = (checkTime1 - checkTime2) / minutes;
    }

    return Math.round(Math.abs(res));
}; /**
    * @name 两日期差值
    * @param type : false(返回天数)， true（返回分钟数）
    * @return 天数或者小时
    * */
exports.default = dateDiff;