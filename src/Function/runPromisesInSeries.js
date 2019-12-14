"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 运行连续的 promises

var runPromisesInSeries = function runPromisesInSeries(ps) {
  return ps.reduce(function (p, next) {
    return p.then(next);
  }, Promise.resolve());
};

exports.default = runPromisesInSeries;