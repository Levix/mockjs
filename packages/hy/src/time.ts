import { getRandomNumber } from './number';
import { addZero } from '../utils/tool';

/**
 * 
 * @returns 获取随机时间 格式为 HH:mm:ss
 */
const getRandomTime = (): string => {
  const hour = getRandomNumber(0, 24) as number;
  const minutes = getRandomNumber(0, 60) as number;
  const seconds = getRandomNumber(0, 60) as number;
  return addZero(hour) + ':' + addZero(minutes) + ':' + addZero(seconds);
}

export {
  getRandomTime,
}