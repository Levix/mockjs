/**
 * 判断是否是正整数，负整数，0 的正则
 */
const isInteger = (value: string): boolean => {
  return /^-?[1-9]\d*|0$/.test(value);
}

/**
 * 判断是否是正整数
 */
const isPositiveInteger = (value: string): boolean =>{
  return /^[1-9]\d*$/.test(value);
}

/**
 * 判断是否是正整数或0
 */
const isPositiveIntegerOrZero = (value: string): boolean =>{
  return /^[1-9]\d*|0$/.test(value);
}

/**
 * 补零函数
 * @param param 数字
 * @returns 
 */
const addZero = (param: number): string => {
  return param >= 10 ? '' + param : '0' + param;
}

export {
  isInteger,
  isPositiveInteger,
  isPositiveIntegerOrZero,
  addZero
}