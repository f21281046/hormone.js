'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dateDiff = require('./dateDiff');

var _dateDiff2 = _interopRequireDefault(_dateDiff);

var _dateOperation = require('./dateOperation');

var _dateOperation2 = _interopRequireDefault(_dateOperation);

var _compareDate = require('./compareDate');

var _compareDate2 = _interopRequireDefault(_compareDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateDiffArr = function dateDiffArr(d1, d2) {
    var _diffDay = (0, _dateDiff2.default)(d1, d2);
    var _arr = [];

    for (var i = 0; i <= Math.round(_diffDay); i++) {
        var _date = (0, _compareDate2.default)(d1, d2) ? new Date(d2) : new Date(d1);
        var _item = (0, _dateOperation2.default)('d', i, _date, true);
        _arr.push(_item);
    }

    return _arr;
}; /**
    * @name 日期差
    * @description 根据日期差返回该时间段的数组
    * @return Array
    * */

exports.default = dateDiffArr;