import { getRandomInRange } from '../core/basic';
import { TRuleKeyType, TRuleParamsType } from '../interface';
import type { getRuleInstance } from '../rules';

type SchemaItemType = [TRuleKeyType, TRuleParamsType, [number, number?]?];

export interface ISchemaTemplate {
  [key: string]: SchemaItemType;
}

type RuleType = ReturnType<typeof getRuleInstance>;

/**
 * @param shcemaItem SchemaItemType
 * 遍历模板的回调函数，生成模板字段对应的随机值
 */
export const walkTemplate = (shcemaItem: SchemaItemType, Rule: RuleType) => {
  const [ruleName, params, [min = 0, max = 0] = []] = shcemaItem;
  const range = getRandomInRange(min, max);
  console.log(ruleName, params);

  if (!range) {
    return Rule.generate(ruleName, params);
  }

  const result = [];
  for (let i = 0; i < range; i++) {
    result.push(Rule.generate(ruleName, params));
  }
  return result;
};

/**
 * @param template ISchemaTemplate
 * 遍历模板，根据规则生成随机值
 */
export const schema = (template: ISchemaTemplate, Rule: RuleType): Record<string, any> => {
  return Object.entries(template).reduce((obj, [key, item]) => {
    obj[key] = walkTemplate(item, Rule);
    return obj;
  }, {} as Record<string, any>);
};

/**
 * @param Rule Rule 规则实例
 * 输入规则组，得到获取schema函数
 */
const getSchema = (Rule: RuleType) => {
  return (template: ISchemaTemplate) => schema(template, Rule);
};

export default getSchema;
