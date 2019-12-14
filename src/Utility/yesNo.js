"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 如果字符串为y/yes，则返回 true ;如果字符串为n/no，则返回 false。

var yesNo = function yesNo(val) {
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (/^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def
  );
};

exports.default = yesNo;