/**
 * @description 获取当前时间戳
 * @param {convert: Boolean} true: 时间戳已秒的形式; false: 时间戳已毫秒的形式
 */
const timeStamp = (convert = true) => {
    let timeStamp = (new Date()).getTime();
    let newTimeStamp = '';
    convert ? (newTimeStamp = Math.round(timeStamp / 1000)) : timeStamp;
    return newTimeStamp
};

export default timeStamp;
