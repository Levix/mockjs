/**
 * 判断是否是正整数，负整数，0 的正则
 */
 export function isInteger(value: string): boolean{
  return /^-?[1-9]\d*|0$/.test(value);
}

/**
 * 判断是否是正整数
 */
export function isPositiveInteger(value: string): boolean{
  return /^[1-9]\d*$/.test(value);
}

/**
 * 判断是否是正整数或0
 */
 export function isPositiveIntegerOrZero(value: string): boolean{
  return /^[1-9]\d*|0$/.test(value);
}

/**
 * 补零函数
 * @param param 数字
 * @returns 
 */
 export function addZero(param: number): string {
  return param > 10 ? '' + param : '0' + param;
}