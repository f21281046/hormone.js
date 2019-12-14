'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// GET 请求

var httpGet = function httpGet(url, callback) {
    var err = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : console.error;

    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        return callback(request.responseText);
    };
    request.onerror = function () {
        return err(request);
    };
    request.send();
};

exports.default = httpGet;