'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 创建元素
// 根据一个字符串创建一个元素（不附加到 document ）。 如果给定的字符串包含多个元素，则只返回第一个元素。

var createElement = function createElement(str) {
    var el = document.createElement('div');
    el.innerHTML = str;
    return el.firstElementChild;
};

exports.default = createElement;