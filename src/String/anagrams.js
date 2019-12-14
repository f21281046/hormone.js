'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 颠倒字母顺序重新排列组合

var anagrams = function anagrams(str) {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce(function (acc, letter, i) {
        return acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(function (val) {
            return letter + val;
        }));
    }, []);
};

exports.default = anagrams;