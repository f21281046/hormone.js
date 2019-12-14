'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 反转义 HTML 字符

var unescapeHTML = function unescapeHTML(str) {
    return str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, function (tag) {
        return {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&#39;': "'",
            '&quot;': '"'
        }[tag] || tag;
    });
};

exports.default = unescapeHTML;