'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// POST 请求

var httpPost = function httpPost(url, callback) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var err = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : console.error;

    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = function () {
        return callback(request.responseText);
    };
    request.onerror = function () {
        return err(request);
    };
    request.send(data);
};

exports.default = httpPost;