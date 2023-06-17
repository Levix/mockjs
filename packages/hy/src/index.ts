import { getTypeString, getRandomString } from './basic/string';
import { getRandomBoolean } from './basic/boolean';
import { getRandomNumber } from './basic/number';
import { getRandomFloatNumber } from './basic/floatNumber';
import { getRandomDate, formatDate } from './basic/date';
import { getRandomTime } from './basic/time';
import { getIdCard } from './basic/idCard';
import { getPhoneNumber } from './basic/phoneNumber';
import { getRandomJson } from './basic/json';
import { batchRandomData } from './extend/batchData';
import log from './utils/log';


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

