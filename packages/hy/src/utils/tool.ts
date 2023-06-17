/**
 * 判断是否是正整数，负整数，0 的正则
 */
const isInteger = (value: number): boolean => {
  return (value | 0) === value;
}

/**
 * 判断是否是正整数
 */
const isPositiveInteger = (value: number): boolean =>{
  return isInteger(value) && value > 0;
}

/**
 * 判断是否是正整数或0
 */
const isPositiveIntegerOrZero = (value: number): boolean =>{
  return isInteger(value) && value >= 0;
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