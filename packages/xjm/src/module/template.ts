import { range } from './number';

interface Obj {
  [key: string]: any
}

/**
 * 根据数据模板生成数据
 * @param {Object} template 数据模板
 * @param {Number} count 生成数据的数量，默认为1
 * @returns {Array|Object} 生成的数据
 */
export const template = (template: Obj, count = 1) => {
  // 生成数据
  function generateData(template: Obj) {
    const data: Obj = {};
    for (const key in template) {
      if (template.hasOwnProperty(key)) {
        const value = template[key];
        if (typeof value === 'object' && value !== null) {
          // 如果值是对象，则递归生成数据
          data[key] = generateData(value);
        } else if (typeof value === 'string' && value.startsWith('mock.')) {
          // 如果值是以'mock.'开头的字符串，则使用随机数生成器生成随机数据
          const method = value.slice(5);
          if (method === 'random.uuid') {
            // 生成随机UUID
            data[key] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              const r = range(0, 15);
              const v = c === 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            });
          } else if (method.startsWith('random.')) {
            // 生成随机数
            const min = parseInt(method.slice(7));
            const max = min + 100;
            data[key] = range(min, max);
          } else {
            throw new Error(`Invalid mock method: ${method}`);
          }
        } else {
          // 否则直接使用值作为数据
          data[key] = value;
        }
      }
    }
    return data;
  }

  const data: any[] = [];
  for (let i = 0; i < count; i++) {
    data.push(generateData(template));
  }

  return count === 1 ? data[0] : data;
}
