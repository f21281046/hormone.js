"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 获取两个日期之间相差的天数

var getDaysDiffBetweenDates = function getDaysDiffBetweenDates(dateInitial, dateFinal) {
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
};

exports.default = getDaysDiffBetweenDates;