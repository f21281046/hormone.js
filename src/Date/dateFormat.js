'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _judge = require('../Type/judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = function dateFormat(date) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';

    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, // 月份 - month
            "D+": this.getDate(), // 日 - date
            "h+": this.getHours(), // 小时 - houres
            "m+": this.getMinutes(), // 分 - minutes
            "s+": this.getSeconds(), // 秒 - seconds
            "q+": Math.floor((this.getMonth() + 3) / 3), // 季度 - quarter
            "S": this.getMilliseconds() // 毫秒 - seconds
        };

        if (/(Y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }

        return fmt;
    };

    // 若是日期或者字符串类型
    if (_judge2.default.isDate(date) || _judge2.default.isString(date)) {
        return new Date(date).Format(type);
    }

    return date;
}; /**
    * @name 时间格式化
    * @param type 'YYYY-DD-MM hh-mm-ss' or 'YYYY-DD-MM'
    * */
exports.default = dateFormat;