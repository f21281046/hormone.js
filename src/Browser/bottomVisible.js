"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 页面的底部是否可见
// 如果页面底部可见，则返回 true ，否则返回 false 。

var bottomVisible = function bottomVisible() {
  return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
};

exports.default = bottomVisible;