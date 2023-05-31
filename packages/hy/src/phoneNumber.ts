import { getRandomNumber } from "./number" 

/**
 * 获取随机手机号  
 * @returns 随机11位手机号
 */
export function getPhoneNumber() {
  const { len, preStr } = getRandomPre();
  return preStr + Array(len).fill(0).reduce((result, current, index) => {
    result += getRandomNumber(0, 9);
    return result;
  }, '')
}

/**
 * 前缀规则 /^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))d{8}$/
 * @returns len: 剩余数字长度  preStr: 手机号前缀
 */
function getRandomPre() {
  const preArr = ['13', '15', '18', '17', '19', '145', '147', 
  '170', '176', '177', '178', '197'];
  const randomIndex = getRandomNumber(0, preArr.length) as number;
  const preStr = preArr[randomIndex];
  const len = 11 - preStr.length;
  return {
    len,
    preStr,
  }
}