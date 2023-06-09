function getRandomChinese () {
  // 生成 Unicode 编码范围内的随机整数
  const code = Math.floor(Math.random() * (0x9fa5 - 0x4e00 + 1)) + 0x4e00;
  // 将 Unicode 编码转换为对应的中文字符
  return String.fromCharCode(code);
}

/**
 * 生成随机长度的中文
 * @param start number
 * @param end number
 * @returns string
 */
export function getWord (start: number, end: number) {
  let result = '';

  const loopEnd = Math.floor(Math.random() * (end - start + 1)) + start;
  for (let i = 0; i < loopEnd; i++) {
    result += getRandomChinese();
  }
  return result;
}