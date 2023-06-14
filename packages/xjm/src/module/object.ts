/**
 * @file object mock数据
 */
import { boolean } from './boolean';

interface Obj {
  [key: string]: any;
}

interface Keys {
  key: string;
  value: (...params: unknown[]) => any;
}

/**
 * 随机生成长度为length的对象
 * @param length 生成对象长度
 */
const random = (length: number) => {
  const obj: Obj = {};
  for (let i = 0; i < length; i += 1) {
    obj[`key${i}`] = boolean();
  }
  return obj;
};

/**
 * 将指定类型的数组转化为对象
 * @param keys 
 * @returns 
 */
const array2Object = (keys: Keys[]) => {
  const obj: Obj = {};
  keys.forEach(key => {
    obj[key.key] = key.value();
  });
  return obj;
};

export const object = {
  random,
  array2Object,
}
