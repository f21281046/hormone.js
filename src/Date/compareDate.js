'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @description 时间比较
 * @param {newData: 当天时间, oldDate: 历史时间}
 * */
var compareDate = function compareDate(newDate, oldDate) {
  return new Date(newDate.replace(/-/g, '\/')) > new Date(oldDate.replace(/-/g, '\/'));
};

exports.default = compareDate;