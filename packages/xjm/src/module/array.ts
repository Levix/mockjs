/**
 * @file array mock方法
 */
import { boolean } from './boolean';
import { number } from './number';
import { string } from './string';

type StringType = keyof typeof string;

interface NumberParams {
  min: number;
  max: number;
}

interface StringParams {
  type: StringType;
  unit: number;
}

/**
 * 生成数组
 * @param length 数组长度
 * @param fn 
 * @returns 
 */
const generateArray = (length: number, fn: Function) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(fn());
  }
  return arr;
}

/**
 * 生成长度为length的数组，数组每一项为number
 * @param length 
 * @param param1 
 * @returns 
 */
const numberArray = (length: number, { min, max } : NumberParams) => {
  return generateArray(length, () => number.range(min, max));
}

/**
 * 生成长度为length的数组，数组每一项为string
 * @param length 
 * @param param1 
 * @returns 
 */
const stringArray = (length: number, { type, unit }: StringParams) => {
  return generateArray(length, () => string[type](unit));
}

/**
 * 生成长度为length的数组，数组的每一项为boolean
 * @param length 
 * @returns 
 */
const booleanArray = (length: number) => {
  return generateArray(length, () => boolean())
}

export const array = {
  number: numberArray,
  string: stringArray,
  boolean: booleanArray,
}
