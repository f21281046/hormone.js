/**
 * @description 时间比较
 * @param {newData: 当天时间, oldDate: 历史时间}
 * */
const compareDate = (newDate, oldDate) => {
    return (new Date(newDate.replace(/-/g, '\/'))) > (new Date(oldDate.replace(/-/g, '\/')))
};

export default compareDate;
