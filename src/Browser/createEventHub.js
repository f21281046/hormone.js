"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 创建事件中转
// 使用 emit ，on 和 off 方法创建一个 pub/sub (publish–subscribe) 事件中转

var createEventHub = function createEventHub() {
    return {
        hub: Object.create(null),
        emit: function emit(event, data) {
            (this.hub[event] || []).forEach(function (handler) {
                return handler(data);
            });
        },
        on: function on(event, handler) {
            if (!this.hub[event]) this.hub[event] = [];
            this.hub[event].push(handler);
        },
        off: function off(event, handler) {
            var i = (this.hub[event] || []).findIndex(function (h) {
                return h === handler;
            });
            if (i > -1) this.hub[event].splice(i, 1);
        }
    };
};

exports.default = createEventHub;