import { getRandomNumber } from "./number";

/**
 * 获取随机身份证号
 * 规则 为 /(^\d{18}$)|(^\d{17}(X|x)$)/
 * @returns 随机身份证号
 */
export function getIdCard() {
  const { len, lastStr } = getLastStr();
  let preStr = Array(len).fill(0).reduce((result, current, index) => {
    result += getRandomNumber(0, 9);
    return result;
  }, '')
  return preStr + lastStr;
}

/**
 * 
 * @returns len: 表示前面随机数字长度  lastStr: 表示最后一位的字符
 */
function getLastStr() {
  const lastArr = ['', 'X', 'x'];
  const randomIndex = getRandomNumber(0, 2) as number;
  const len = randomIndex === 0 ? 18 : 17;
  const lastStr = (len === 18 ? '' : lastArr[randomIndex]);
  return {
    len,
    lastStr,
  }
}