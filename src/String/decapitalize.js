'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// 将字符串的第一个字母(大写字母)变成小写

var decapitalize = function decapitalize(_ref) {
  var _ref2 = _toArray(_ref),
      first = _ref2[0],
      rest = _ref2.slice(1);

  var upperRest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
};

exports.default = decapitalize;