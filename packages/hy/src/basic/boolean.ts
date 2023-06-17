/**
 * 获取随机布尔值
 */
const getRandomBoolean = (): boolean => {
  return Math.random() > 0.5 ? true : false;
}

export {
  getRandomBoolean,
}