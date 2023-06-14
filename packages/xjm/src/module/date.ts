/**
 * @file date mock方法
 */
import { number } from './number';

// 日期格式
type DateFormat = 'yyyy-mm-dd' | 'yy-mm-dd';

/**
 * 生成随机年月日
 * @returns 
 */
const baseRandomDate = () => {
  const year = number.range(1970, 2023); // 范围：1970年至2023年
  const month = number.range(1, 12); // 范围：1月至12月
  const day = number.range(1, 31); // 范围：1日至31日

  return {
    year,
    month,
    day,
  };
}

/**
 * 生成格式为yyyy-mm-dd的日期
 * @returns 
 */
const formatDate1 = () => {
  const { year, month, day } = baseRandomDate();
  const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return dateString;
}

/**
 * 生成格式为yy-mm-dd的日期
 * @returns 
 */
const formatDate2 = () => {
  const { year, month, day } = baseRandomDate();
  const dateString = `${String(year).slice(-2)}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return dateString;
}

const dateMap = {
  ['yyyy-mm-dd']: formatDate1,
  ['yy-mm-dd']: formatDate2,
};

/**
 * 生成随机日期
 * @returns 
 */

const random = () => {
  const start = new Date(1970, 0, 1).getTime();
  const end = new Date().getTime();
  const time = start + Math.floor((end - start) * Math.random());
  return new Date(time);
};

/**
 * 生成指定格式的随机日期
 * @returns
 */
const format = (type: DateFormat) => dateMap[type]();

export const date = {
  random,
  format,
}
