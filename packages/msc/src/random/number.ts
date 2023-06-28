import { MIN_NATURE_NUMBER, MAX_NATURE_NUMBER } from '../const';
import { character } from './string';
import { log } from '../helper';
/**
 * 根据 min-max 返回随机数值
 */
export const integer = (min?: any, max?: any) => {
  if (min && max && parseInt(max, 10) < parseInt(min, 10)) log.error('最大值max不能小于最小值min');

  min = min !== undefined ? parseInt(min, 10) : MIN_NATURE_NUMBER;
  max = max !== undefined ? parseInt(max, 10) : MAX_NATURE_NUMBER; // 2^53
  return Math.round(Math.random() * (max - min)) + min;
};

// 别名
export const int = integer;

/**
 * 返回一个随机的自然数（大于等于 0 的整数）
 */

export const natural = function (min?: any, max?: any) {
  if (min && max && parseInt(max, 10) < parseInt(min, 10)) log.error('最大值max不能小于最小值min');
  min = min !== undefined ? parseInt(min, 10) : 0;
  max = max !== undefined ? parseInt(max, 10) : MAX_NATURE_NUMBER; // 2^53
  return Math.round(Math.random() * (max - min)) + min;
};




/**
 * 返回一个随机的浮点数。
 */

export const float = function (min?: number, max?: number, dmin?: number, dmax?: number) {
  if (min && max && max < min) log.error('最大值max不能小于最小值min');
  if (dmax && dmin && dmax < dmin) log.error('最大位数dmax不能小于最小位数dmin');
  dmax = dmax || 17;
  dmax = Math.max(Math.min(dmax, 17), 0);
  dmin = dmin || 0;
  dmin = Math.max(Math.min(dmin, 17), 0);

  let ret = integer(min, max) + '.';
  for (let i = 0, dcount = natural(dmin, dmax); i < dcount; i++) {
    const num = i < dcount - 1 ? character('number') : character('123456789');
    ret += num;
  }
  return parseFloat(ret);
};
