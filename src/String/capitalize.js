'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// 首字母大写

var capitalize = function capitalize(_ref) {
  var _ref2 = _toArray(_ref),
      first = _ref2[0],
      rest = _ref2.slice(1);

  var lowerRest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
};

exports.default = capitalize;