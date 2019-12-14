'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 在控制台中以彩色方式打印文本
// 将特殊字符添加到文本中，以在控制台中以彩色方式打印（与 console.log() 结合使用）。

var colorize = function colorize() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return {
        black: '\x1B[30m' + args.join(' '),
        red: '\x1B[31m' + args.join(' '),
        green: '\x1B[32m' + args.join(' '),
        yellow: '\x1B[33m' + args.join(' '),
        blue: '\x1B[34m' + args.join(' '),
        magenta: '\x1B[35m' + args.join(' '),
        cyan: '\x1B[36m' + args.join(' '),
        white: '\x1B[37m' + args.join(' '),
        bgBlack: '\x1B[40m' + args.join(' ') + '\x1B[0m',
        bgRed: '\x1B[41m' + args.join(' ') + '\x1B[0m',
        bgGreen: '\x1B[42m' + args.join(' ') + '\x1B[0m',
        bgYellow: '\x1B[43m' + args.join(' ') + '\x1B[0m',
        bgBlue: '\x1B[44m' + args.join(' ') + '\x1B[0m',
        bgMagenta: '\x1B[45m' + args.join(' ') + '\x1B[0m',
        bgCyan: '\x1B[46m' + args.join(' ') + '\x1B[0m',
        bgWhite: '\x1B[47m' + args.join(' ') + '\x1B[0m'
    };
};

exports.default = colorize;