/**
 * @file number mock数据
 */
import { warn } from '../config/logger';

const range = (min: number, max: number) => {
  if (min > max) {
    warn(`${min}应该小于${max}`);
    return;
  }
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

/**
 * 生成[min, max]的自然数
 * @param min 
 * @param max 
 * @returns 
 */
const natural = (min: number, max: number) => {
  if (min < 0) {
    warn(`${min}需要大于0`);
    return;
  }
  return range(min, max);
}

/**
 * 生成[min, max]的正数
 * @param min 
 * @param max 
 * @returns 
 */
const positive = (min: number, max: number) => {
  if (min <= 0) {
    warn(`${min}需要大于0`);
    return;
  }
  return range(min, max);
}

/**
 * 生成[min, max]的负数
 * @param min 
 * @param max 
 * @returns 
 */
const negative = (min: number, max: number) => {
  if (min >= 0 ) {
    warn(`${min}需要小于0`)
  }
  return range(min, max);
};

/**
 * 生成MAX_SAFE_INTEGER
 * @returns 
 */
const maxSafeInt = () => Number.MAX_SAFE_INTEGER;

/**
 * 生成MIN_SAFE_INTEGER
 * @returns 
 */
const minSafeInt = () => Number.MIN_SAFE_INTEGER;

/**
 * 生成小数位数为decimal的浮点数
 * @param min 最小值
 * @param max 最大值
 * @param decimal 小数位数
 * @returns 
 */
const float = (min: number, max: number, decimal: number) => {
  const randomNum = Math.random() * (max - min) + min;
  return Number(randomNum?.toFixed(decimal));
};

export const number = {
  range,
  natural,
  positive,
  negative,
  maxSafeInt,
  minSafeInt,
  float,
};