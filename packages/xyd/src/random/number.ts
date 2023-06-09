/**
 * 生成一个指定位数的数字
 * @param digit number
 * @returns number
 */
export function getNumber(digit: number) {
  let result = '';
  for (let i = 0; i < digit; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return Number(result);
}