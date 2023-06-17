import { parseSchemaField } from './parse';
import { Rule } from '../rules';
import { list } from '../list';
import type { SchemaItemType } from '../interface';

export interface ISchemaTemplate {
  [key: string]: SchemaItemType;
}

/**
 * @param schemaItem SchemaItemType
 * 遍历模板的回调函数，生成模板字段对应的随机值
 */
const walkTemplate = (schemaItem: SchemaItemType) => {
  const { ruleName, params, isList, min, max } = parseSchemaField(schemaItem);

  if (!isList) {
    return Rule.generate(ruleName, params);
  }

  return list(ruleName, params, min, max);
};

/**
 * @param template ISchemaTemplate
 * 遍历模板，根据规则生成随机值
 */
export const schema = (template: ISchemaTemplate): Record<string, any> => {
  return Object.entries(template).reduce((obj, [key, item]) => {
    obj[key] = walkTemplate(item);
    return obj;
  }, {} as Record<string, any>);
};
