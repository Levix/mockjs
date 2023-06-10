import { random } from './index';
import log from '../utils/log';

/**
 * 
 * @param len 数据条数
 * @param type 数据类型
 * @returns 
 */
const batchRandomData = (len: number, type: string): any => {
  if(!random.typeMap.has(type)) {
    log.error('不支持此类型');
    return;
  }

  return (args: any) => {
    return Array(len).fill(0).reduce(result => {
      result.push(random.typeMap.get(type)(...args));
      return result;
    }, []);
  } 
}

export {
  batchRandomData
}