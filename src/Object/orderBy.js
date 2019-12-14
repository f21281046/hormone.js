'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 排序对象数组

var orderBy = function orderBy(arr, props, orders) {
    return [].concat(_toConsumableArray(arr)).sort(function (a, b) {
        return props.reduce(function (acc, prop, i) {
            if (acc === 0) {
                var _ref = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]],
                    _ref2 = _slicedToArray(_ref, 2),
                    p1 = _ref2[0],
                    p2 = _ref2[1];

                acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
            }
            return acc;
        }, 0);
    });
};

exports.default = orderBy;