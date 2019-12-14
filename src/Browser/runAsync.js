'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 运行异步函数

var runAsync = function runAsync(fn) {
    var blob = 'var fn = ' + fn.toString() + '; postMessage(fn());';
    var worker = new Worker(URL.createObjectURL(new Blob([blob]), {
        type: 'application/javascript; charset=utf-8'
    }));
    return new Promise(function (res, rej) {
        worker.onmessage = function (_ref) {
            var data = _ref.data;

            res(data), worker.terminate();
        };
        worker.onerror = function (err) {
            rej(err), worker.terminate();
        };
    });
};

exports.default = runAsync;