"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 回到顶部
// 使用 document.documentElement.scrollTop 或 document.body.scrollTop 获取到顶部距离。从顶部滚动一小部分距离。使用window.requestAnimationFrame() 来实现滚动动画。

var scrollToTop = function scrollToTop() {
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

exports.default = scrollToTop;