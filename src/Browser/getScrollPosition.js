"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 获取滚动条位置

var getScrollPosition = function getScrollPosition() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return {
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    };
};

exports.default = getScrollPosition;