import { log } from "../../helper/logger";

export const getDate = (start = '1970-01-01', end = new Date().toString()) => {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();

    if (isNaN(startDate) || isNaN(endDate)) {
        log.alert('解析时间失败');
    }

    const randomTimestamp = Math.random() * (endDate - startDate) + startDate;
    return new Date(randomTimestamp);
};
