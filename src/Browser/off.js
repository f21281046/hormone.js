"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 移除事件侦听器
// 使用 EventTarget.removeEventListener() 从元素中删除一个事件监听器。 省略第四个参数 opts ，则默认使用 false 或者根据添加事件监听器时使用的选项来指定它。

var off = function off(el, evt, fn) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return el.removeEventListener(evt, fn, opts);
};

exports.default = off;