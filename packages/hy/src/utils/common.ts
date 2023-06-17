/**
 * 
 * @param len 长度
 * @param strs 可选字符串
 * @returns 长度为 len 的随机字符串
 */
const getString = (len: number, strs: string): string => {
  return Array(len).fill(0).reduce(data => {
    let str = data;
    str += strs.charAt(Math.floor(Math.random() * strs.length));
    return str;
  }, '');
}

export {
  getString
}