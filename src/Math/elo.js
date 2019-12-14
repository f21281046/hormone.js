"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// 等级评分算法

var elo = function elo(_ref) {
    var _ref2 = _toArray(_ref),
        ratings = _ref2.slice(0);

    var kFactor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
    var selfRating = arguments[2];

    var _ratings = _slicedToArray(ratings, 2),
        a = _ratings[0],
        b = _ratings[1];

    var expectedScore = function expectedScore(self, opponent) {
        return 1 / (1 + 10 ** ((opponent - self) / 400));
    };
    var newRating = function newRating(rating, i) {
        return (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
    };
    if (ratings.length === 2) {
        return [newRating(a, 1), newRating(b, 0)];
    } else {
        for (var i = 0; i < ratings.length; i++) {
            var j = i;
            while (j < ratings.length - 1) {
                var _elo = elo([ratings[i], ratings[j + 1]], kFactor);

                var _elo2 = _slicedToArray(_elo, 2);

                ratings[i] = _elo2[0];
                ratings[j + 1] = _elo2[1];

                j++;
            }
        }
    }
    return ratings;
};

exports.default = elo;