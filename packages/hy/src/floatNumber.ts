import { isPositiveIntegerOrZero } from '../utils/tool';
import { getRandomNumber } from './number';
import log from '../utils/log';
import { getString } from '../utils/common';
/**
 * 获取随机浮点数
 * @param min 整数部分最小值
 * @param max 整数部分最大值
 * @param partMin 小数位数最小值
 * @param partMax 小数位数最大值
 */
 const getRandomFloatNumber = (min: number, max: number, partMin: number, partMax: number): string | void => {
  const integerPart = getRandomNumber(min, max);
  if(!integerPart) {
    return;
  }
  if(!isPositiveIntegerOrZero(partMin)) {
    log.error('参数只能是正整数或0');
    return;
  }
  if(!isPositiveIntegerOrZero(partMax)) {
    log.error('参数只能是正整数或0');
    return;
  }
  if(partMax < partMin) { 
    log.error('参数范围值错误');
    return;
  }
  const numberStr = '0123456789';
  const len = Math.floor(Math.random() * (partMax - partMin));
  let floatPart = getString(len, numberStr);
  return integerPart + (floatPart ? '.' + floatPart : floatPart);
}

export {
  getRandomFloatNumber,
}