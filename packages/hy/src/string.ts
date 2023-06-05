import { getString } from '../utils/common';

/**
 * @param len 随机字符串长度，默认为1
 */

type TypeParam = "number" | "lowerCase" | "upperCase";

// 随机字符串类型映射
const typeMap = {
  number: '0123456789',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
}

/**
 * 
 * @param len 随机字符串长度
 * @param type 字符串类型 如 number,lowerCase, upperCase
 * @returns 长度为 len 的随机字符串
 */
const getTypeString = (type: TypeParam, len: number = 1): string => {
  return getString(len, typeMap[type]);
}

/**
 * 
 * @param len 随机字符串长度
 * @param strings 可选字符串
 * @returns 长度为len 的随机字符串
 */
 const getRandomString = (strings: string, len: number = 1): string => {
  return getString(len, strings);
}

export {
  getTypeString,
  getRandomString,
}

