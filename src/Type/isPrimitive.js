'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 判断值是否为原始值

var isPrimitive = function isPrimitive(val) {
  return !['object', 'function'].includes(typeof val === 'undefined' ? 'undefined' : _typeof(val)) || val === null;
};

exports.default = isPrimitive;