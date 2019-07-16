'use strict';

/**
 * @name 数组去重
 * */

var uniq = function uniq(arr) {
    var temp = [];

    for (var i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) === -1) {
            temp.push(arr[i]);
        }
    }

    console.log(',,,', temp);

    return temp;
};

// export default uniq;