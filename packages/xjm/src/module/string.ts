/**
 * @file string mock数据
 */
import { boolean } from './boolean';

const englishString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numberString = '0123456789';
const englishAndNumberString = `${englishString}${numberString}`;

/**
 * 从{pool}中随机生成长度为{unit}的字符串
 * @param pool 
 * @param unit 
 * @returns 
 */
const generateString = (pool: string, unit: number) => {
  let str = '';
  for (let i = 0; i < unit; i += 1) {
    const chat = pool[Math.floor(Math.random() * pool.length)];
    str += chat;
  }
  return str;
}

/**
 * 生成纯英文随机字符串
 * @param unit 
 * @returns 
 */
const en = (unit: number) => {
  return generateString(englishString, unit);
};

/**
 * 生成纯中文随机字符串
 * @param unit 
 * @returns 
 */
const zh = (unit: number) => {
  let result = '';
  for (let i = 0; i < unit; i++) {
    const codePoint = Math.floor(Math.random() * (0x9FA5 - 0x4E00 + 1) + 0x4E00);
    result += String.fromCodePoint(codePoint);
  }
  return result;
}

/**
 * 生成纯数字随机字符串
 * @param unit 
 * @returns 
 */
const num = (unit: number) => {
  return generateString(numberString, unit);
}

/**
 * 生成中英文混合的字符串
 * @param unit 
 * @returns 
 */
const zh_en = (unit: number) => {
  let result = '';
  for (let i = 0; i < unit; i++) {
    const codePoint = boolean() ? en(1) : zh(1);
    result += codePoint;

  }
  return result;
}

/**
 * 生成英文和数字混合的字符串
 * @param unit 
 * @returns 
 */
const en_num = (unit: number) => {
  return generateString(englishAndNumberString, unit);
}

export const string = {
  en,
  zh,
  num,
  zh_en,
  en_num,
}
