'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeCheck = require('./typeCheck');

var _typeCheck2 = _interopRequireDefault(_typeCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduction = function reduction(arr) {
    var newArr = [];

    var handle = function handle(arr) {
        for (var i = 0; i < arr.length; i++) {
            if ((0, _typeCheck2.default)(arr[i]) === 'Array' || Array.isArray(arr[i])) {
                handle(arr[i]);
            } else {
                newArr.push(arr[i]);
            }
        }
    };

    handle(arr);
    return newArr;
}; /**
    * @name 多维数组降维
    * */
exports.default = reduction;