
/**
 * @description 类型检查
 * @param {val: 值}
 * */
const typeCheck = val => {
    const typeArr = ['String', 'Object', 'Number', 'Array', 'Function', 'Null', 'Undefined', 'Symbol'];
    const optc = Object.prototype.toString.call(val);
    const v = (optc.split('object')[1]).split(']')[0];
    const m = v.replace(/\s/g, '');

    if (typeArr.indexOf(m) >= 0) {
        return m
    } else {
        console.error('type check：', `${m} This type is not in the JavaScript type`)
    }
};

export default typeCheck;
