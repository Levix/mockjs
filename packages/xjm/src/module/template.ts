/**
 * @file 模板 mock数据
 */

/**
 * 根据传入的json模板生成数据
 * @param jsonData 
 * @returns 
 */
const json = (jsonData: string) => {
  return JSON.parse(jsonData);
};

export const template = {
  json,
};
