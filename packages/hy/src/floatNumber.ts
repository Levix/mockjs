import { isPositiveIntegerOrZero } from '../utils/tool';
import { getRandomNumber } from './number';
/**
 * 获取随机浮点数
 * @param min 整数部分最小值
 * @param max 整数部分最大值
 * @param partMin 小数位数最小值
 * @param partMax 小数位数最大值
 */
 export function getRandomFloatNumber(min: number, max: number, partMin: number, partMax: number): string | void {
  const integerPart = getRandomNumber(min, max);
  if(!isPositiveIntegerOrZero(partMin.toString())) {
    throw new Error("参数只能是正整数或0");
  }
  if(!isPositiveIntegerOrZero(partMax.toString())) {
    throw new Error("参数只能是正整数或0");
  }
  if(partMax < partMin) {
    throw new Error("参数范围值错误");  
  }
  const numberStr = '0123456789';
  const len = Math.floor(Math.random() * (partMax - partMin));
  let floatPart = Array(len).fill(0).reduce(data => {
    let str = data;
    str += numberStr.charAt(Math.floor(Math.random() * numberStr.length));
    return str
  }, '');
  return integerPart + (floatPart ? '.' + floatPart : floatPart);
}