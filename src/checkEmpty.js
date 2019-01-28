import typeCheck from './typeCheck'

/**
 * @description 检查空
 * @param {value: 要检查的值}
 */
const checkEmpty = value => {
    let status = false;

    if (typeCheck(value) === 'Object' && (value === null || Object.keys(value).length === 0)) {
        status = true
    } else if (typeCheck(value) === 'String' && /^(\s)*$/.test(value)) {
        status = true
    } else if (typeCheck(value) === 'Undefined') {
        status = true
    } else if (typeCheck(value) === 'Null') {
        status = true
    } else if (typeCheck(value) === 'Array' && value.length === 0) {
        status = true
    }

    return status
};

export default checkEmpty;
