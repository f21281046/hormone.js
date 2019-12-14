"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 大写每个单词的首字母

var capitalizeEveryWord = function capitalizeEveryWord(str) {
  return str.replace(/\b[a-z]/g, function (char) {
    return char.toUpperCase();
  });
};

exports.default = capitalizeEveryWord;