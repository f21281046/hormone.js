"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 是否为绝对地址

var isAbsoluteURL = function isAbsoluteURL(str) {
  return (/^[a-z][a-z0-9+.-]*:/.test(str)
  );
};

exports.default = isAbsoluteURL;