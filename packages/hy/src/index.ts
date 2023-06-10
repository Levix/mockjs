import { getTypeString, getRandomString } from './string';
import { getRandomBoolean } from './boolean';
import { getRandomNumber } from './number';
import { getRandomFloatNumber } from './floatNumber';
import { getRandomDate, formatDate } from './date';
import { getRandomTime } from './time';
import { getIdCard } from './idCard';
import { getPhoneNumber } from './phoneNumber';
import { getRandomJson } from './json';
import { batchRandomData } from './batchData';
import log from '../utils/log';


let typeMap = new Map();
typeMap.set('string', getRandomString);
typeMap.set('number', getRandomNumber);
typeMap.set('boolean', getRandomBoolean);
typeMap.set('float', getRandomFloatNumber);
typeMap.set('date', getRandomDate);
typeMap.set('time', getRandomTime);
typeMap.set('json', getRandomJson);

/**
 * 
 * @param type 自定义类型
 * @param callback 回调函数
 */
const addType = (type: string, callback: () => any): void => {
  if(typeMap.has(type)) {
    log.error(`${type} 类型已存在`);
    return;
  }
  typeMap.set(type, callback);
}


export const random = {
  getTypeString,
  getRandomString,
  getRandomBoolean,
  getRandomFloatNumber,
  getRandomNumber,
  getRandomDate,
  formatDate,
  getRandomTime,
  getIdCard,
  getPhoneNumber,
  addType,
  getRandomJson,
  typeMap,
  batchRandomData,
};

