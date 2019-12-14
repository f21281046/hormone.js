"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 集合中对象属性的真值检查

var truthCheckCollection = function truthCheckCollection(collection, pre) {
  return collection.every(function (obj) {
    return obj[pre];
  });
};

exports.default = truthCheckCollection;