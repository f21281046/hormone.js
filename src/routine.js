'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkEmpty = require('./checkEmpty');

var _checkEmpty2 = _interopRequireDefault(_checkEmpty);

var _judge = require('./judge');

var _judge2 = _interopRequireDefault(_judge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name 数组去杂质
 * */
var routine = function routine(arr) {
    var temp = [],
        arrRoutineType = ['Function', 'Symbol', 'Function'];

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (!(0, _checkEmpty2.default)(item) && !_judge2.default.isFunction(item) && !_judge2.default.isUndefined(item) && !_judge2.default.isSymbol(item) && !_judge2.default.isNull(item) && !_judge2.default.isDate(item) && !_judge2.default.isBoolean(item)) {
            temp.push(arr[i]);
        }
    }
    return temp;
};

exports.default = routine;