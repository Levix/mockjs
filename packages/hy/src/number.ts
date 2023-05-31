import { isInteger } from '../utils/tool';

/**
 * 获取随机整数,包括正整数和负整数
 * @param min 最小值
 * @param max 最大值  
 */
export function getRandomNumber(min: number, max: number): number | void {
  if(!isInteger(min.toString())){
    throw new Error("参数只能是整数"); 
  };

  if(!isInteger(max.toString())){
    throw new Error("参数只能是整数");
  }

  if(max < min) {
    throw new Error("参数范围值错误");
  }

  const value = Math.floor(Math.random() * (max - min)) + min;
  return value;
}


