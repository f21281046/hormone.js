'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 转义HTML字符串

var escapeHTML = function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, function (tag) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag;
    });
};

exports.default = escapeHTML;