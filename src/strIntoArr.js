
// string into array

let strIntoArr = (str, v = '') => {
    if(typeof str === 'string'){
        return str.split(v);
    }

    return console.error('hormone.js -> strIntoArr:', 'wrong type of input value');
};

export default strIntoArr;

















