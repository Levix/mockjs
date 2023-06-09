const defaultSatrt = 1;
const defaultEnd = 20;

/**
 * 生成一个随机字符串
 * @param start 随机字符串的最小长度
 * @param end 随机字符串的最大长度
 * @param customStr 自定义随机字符串列表
 * @returns 
 */
export function getString (start: number, end: number, customStr?: string[] | string, onlyCustomStr?: boolean) {
  // 只传了自定义随机列表
  if (arguments.length === 1 && Array.isArray(start)) {
    customStr = start;
    start = defaultSatrt;
    end = defaultEnd;
  }

  // 防止传一些非数字字符串
  start = isNaN(Number(start)) ? defaultSatrt : Number(start)
  end = isNaN(Number(end)) ? defaultEnd : Number(end)

  // 防止自定义随机列表传了字符串
  if (customStr && !Array.isArray(customStr)) {
    customStr = [customStr];
  }

  let result = '';
  const characters = onlyCustomStr ?
    customStr?.join('') :
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + customStr?.join('');

  const charactersLength = characters.length;

  const loopEnd = Math.floor(Math.random() * (end - start + 1)) + start;
  for (let i = 0; i < loopEnd; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
}