"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 在元素上添加事件侦听器（事件委派）
// 使用 EventTarget.addEventListener() 将一个事件监听器添加到一个元素。 如果提供了 选项对象(opts) 的 target 属性，确保事件目标匹配指定的目标元素，然后通过提供正确的 this 上下文来调用回调。 返回一个对自定义委派函数的引用，以便与 off 一起使用。 忽略 opts ，则默认为非委派行为，并且事件冒泡。

var on = function on(el, evt, fn) {
    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var delegatorFn = function delegatorFn(e) {
        return e.target.matches(opts.target) && fn.call(e.target, e);
    };
    el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
    if (opts.target) return delegatorFn;
};

exports.default = on;