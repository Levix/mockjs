import { getString } from './string';

/**
 * 生成一个随机10长度的uuid，内容为大写字母和数字
 * @returns string
 */
export function getUuid () {
  const customStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return getString(10, 10, customStr, true);
}