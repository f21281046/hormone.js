'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @param { value: '值', currency: '币类型',  decimals: '币的小数位'}
 * @description 货币标准化
 * */
var currency = function currency(value, _currency, decimals) {
    value = parseFloat(value);

    if (!isFinite(value) || !value && value !== 0) return '';

    _currency = _currency != null ? _currency : '';
    decimals = decimals != null ? decimals : 2;

    var digitsRE = /(\d{3})(?=\d)/g;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';

    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
};

exports.default = currency;