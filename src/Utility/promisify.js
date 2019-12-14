"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 柯里化一个 Promise 函数

var promisify = function promisify(func) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
            return func.apply(undefined, args.concat([function (err, result) {
                return err ? reject(err) : resolve(result);
            }]));
        });
    };
};

exports.default = promisify;