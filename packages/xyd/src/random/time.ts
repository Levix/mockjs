
/**
 * 生成一个随机的时间
 * @param showSecend
 * @returns string
 */
export function getTime(showSecend: boolean) {
  const hours = Math.floor(Math.random() * 24).toString().padStart(2, '0');
  const minutes = Math.floor(Math.random() * 60).toString().padStart(2, '0');
  const seconds = Math.floor(Math.random() * 60).toString().padStart(2, '0');
  return `${hours}:${minutes}${showSecend ? (':' + seconds) : ''}`;
}