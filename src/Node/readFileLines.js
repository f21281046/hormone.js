'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 逐行读取文件内容

var fs = require('fs');
var readFileLines = function readFileLines(filename) {
  return fs.readFileSync(filename).toString('UTF8').split('\n');
};

exports.default = readFileLines;