import { isInteger } from '../utils/tool';
import log from '../utils/log';

/**
 * 获取随机整数,包括正整数和负整数
 * @param min 最小值
 * @param max 最大值  
 */
const getRandomNumber = (min: number, max: number): number | void => {
  if(!isInteger(min)){
    log.error('参数只能是整数');
    return;
  };

  if(!isInteger(max)){
    log.error('参数只能是整数');
    return;
  }

  if(max < min) {
    log.error('参数范围值错误');
    return;
  }

  const value = Math.floor(Math.random() * (max - min)) + min;
  return value;
}

export {
  getRandomNumber,
}
