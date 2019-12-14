'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将波浪符号路径转换为绝对路径

var untildify = function untildify(str) {
  return str.replace(/^~($|\/|\\)/, require('os').homedir() + '$1');
};

exports.default = untildify;