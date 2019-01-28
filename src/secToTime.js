/**
 * @name 时长转换
 * @description 把秒数转换为 00:00 or 00:00:00 格式
 * @param {value: String | Number, status: Boolean}
 */

const secToTime = (value, status = true) => {
    value = value || 0;

    let t = '';
    let hour = Math.floor(Number(value) / 3600);
    let min = Math.floor((Number(value) / 60) % 60);
    let sec = Number(value) % 60;

    if (status) { t = hour < 10 ? ('0' + hour + ':') : (hour + ':') }
    if (min < 10) { t += '0' }
    t += min + ':';
    if (sec < 10) { t += '0' }
    t += sec.toFixed(0);

    return t
};

export default secToTime;
