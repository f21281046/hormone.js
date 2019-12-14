'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 将 JSON 写到文件

var fs = require('fs');
var JSONToFile = function JSONToFile(obj, filename) {
  return fs.writeFile(filename + '.json', JSON.stringify(obj, null, 2));
};

exports.default = JSONToFile;