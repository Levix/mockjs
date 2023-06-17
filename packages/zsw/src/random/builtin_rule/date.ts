import { logger } from '../../helper/logger';

/**
 * 格式化日期对象为指定格式的字符串
 * @param {Date} date 日期对象
 * @param {string} format 输出格式，支持的占位符有 YYYY、MM、DD、hh、mm、ss
 * @returns {string} 格式化后的字符串
 */
function formatDate(date: Date, format: string) {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');
    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('hh', hour)
        .replace('mm', minute)
        .replace('ss', second);
}

/**
 * 生成指定范围内的随机时间
 * @param {Date|string|number} [minDate] 最小时间，可以是 Date 对象、时间字符串或时间戳，默认为 1970 年 1 月 1 日
 * @param {Date|string|number} [maxDate] 最大时间，可以是 Date 对象、时间字符串或时间戳，默认为当前时间
 * @param {string} [format] 输出时间的格式，默认为 "yyyy/MM/dd HH:mm:ss"
 * @returns {string} 随机生成的时间字符串
 */
export function randomDate(minDate = new Date(0), maxDate = new Date(), format = 'YYYY-MM-DD hh:mm:ss') {
    let minTime = new Date(minDate).getTime();
    let maxTime = new Date(maxDate).getTime();

    if (isNaN(minTime) || isNaN(maxTime)) {
        logger.error('Invalid date format');
        return 'Invalid Date';
    }

    if (minTime > maxTime) {
        [minTime, maxTime] = [maxTime, minTime];
    }

    const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    const date = new Date(randomTime);

    // 格式化时间
    return formatDate(date, format);
}
