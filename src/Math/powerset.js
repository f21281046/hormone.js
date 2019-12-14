"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 幂集

var powerset = function powerset(arr) {
  return arr.reduce(function (a, v) {
    return a.concat(a.map(function (r) {
      return [v].concat(r);
    }));
  }, [[]]);
};

exports.default = powerset;