'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 基于输入数字返回单词的单数或复数形式

var pluralize = function pluralize(val, word) {
    var plural = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : word + 's';

    var _pluralize = function _pluralize(num, word) {
        var plural = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : word + 's';
        return [1, -1].includes(Number(num)) ? word : plural;
    };
    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') return function (num, word) {
        return _pluralize(num, word, val[word]);
    };
    return _pluralize(val, word, plural);
};

exports.default = pluralize;