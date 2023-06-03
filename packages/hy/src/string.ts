/**
 * @param len 随机字符串长度，默认为1
 */
 export function getRandomString(len: number = 1): string {
  let strings = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let maxValue = strings.length;

  let randomString = Array(len).fill(0).reduce(data => {
    let str = data;
    str += strings.charAt(Math.floor(Math.random() * maxValue));
    return str;
  }, '');

  return randomString
}