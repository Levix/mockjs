import { integer } from './random/number';

/**
 * 把字符串的第一个字母转换为大写

*/
export const capitalize = function (word: string) {
  word = String(word);
  return word.charAt(0).toUpperCase() + word.substr(1);
};

/**
 * 把字符串转换为大写

 */
export const upper = function (str: string) {
  return String(str).toUpperCase();
};

/**
 * 把字符串转换为小写

 */
export const lower = function (str: string) {
  return String(str).toLowerCase();
};

/**
 * 打乱数组中元素的顺序

 */
export const shuffle = function (arr: any[], min: number, max: number) {
  arr = arr.slice(0);
  for (let i = arr.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }

  switch (arguments.length) {
    case 2:
      max = min;
      return arr.slice(0, max);
    case 3:
      return arr.slice(0, integer(min, max));
    default:
      return arr;
  }
};

/**
 * 从数组中随机选取一个元素，并返回
 */
export const pick = function (arr?: any[], min?: number, max?: number) {
  if (!(arr instanceof Array)) {
    /* eslint prefer-rest-params:0 */
    arr = [].slice.call(arguments);
    min = 1;
    max = 1;
  } else {
    if (min === undefined) min = 1;
    // pick( [ item1, item2 ... ], count )
    if (max === undefined) max = min;
  }

  if (min === 1 && max === 1) {
    return arr[integer(0, arr.length - 1)];
  }

  return shuffle(arr, min, max);
};

/**
 * 获取字符串正则匹配规则
 */
export const getReg = function (type: string, range: string = '{3,7}', matchType?: string) {
  const STR_REGS = {
    lower: '[a-z]',
    upper: '[A-Z]',
    number: '\\d',
    symbol: '\\W',
    all: '.',
  };

  const reg = STR_REGS[type] || type;
  return matchType ? new RegExp(`^${reg}${range}$`, matchType) : new RegExp(`^${reg}${range}$`);
};

export const toString = Object.prototype.toString;

export const hasOwnProperty = Object.prototype.hasOwnProperty;

/* 获取数据类型 */
export const type = function (any: any) {
  return toString.call(any).slice(8, -1).toLowerCase();
};

/* 匹配键名 */
export const match = function match(key: string, reg: any) {
  if (type(key) !== 'string') {
    return null;
  }
  return key.match(reg);
};

export const log = {
  warn: console.warn,
  error: console.error,
  info: console.log,
};
