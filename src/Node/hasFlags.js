'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 进程是否包含指定的 flags

var hasFlags = function hasFlags() {
  for (var _len = arguments.length, flags = Array(_len), _key = 0; _key < _len; _key++) {
    flags[_key] = arguments[_key];
  }

  return flags.every(function (flag) {
    return process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag);
  });
};

exports.default = hasFlags;