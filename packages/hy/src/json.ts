import { JsonTemplate } from './interface';
import { random } from './index';

/**
 * 
 * @param json json模板
 */
const getRandomJson = (json: JsonTemplate): any => {
  let arr = [];
  for (let i = 0; i < json.length; i++) {
    const item = json[i];
    let result;
    if(item.type === 'array' && item.children) {
      result = [];
      result.push(getRandomJson(item.children));
    }else if(item.type === 'object' && item.fieldName && item.children) {
      result = {} as any;
      result[item.fieldName] = getRandomJson(item.children);
    }else {
      const fn = getFn(item.fnName);
      result = item.callback? item.callback() : fn.apply(this, item.params || [] as any);
    }
    arr.push(result);
  }
  return arr;
}



/**
 * 
 * @param name 函数名
 * @returns name 函数
 */
const getFn = (name: string): () => any => {
  if((random as any)[name]) {
    return (random as any)[name];
  }
  return () => null;
}

export {
  getRandomJson
}