/**
 * @file 解析Schema工具
 */

import type { SchemaItemType } from '../interface';

export const parseSchemaField = (schemaItem: SchemaItemType) => {
  const [ruleName, params, list] = schemaItem;
  const [min = 0, max = 0] = list ?? [];
  const isList = Array.isArray(list);

  return {
    ruleName,
    params,
    isList,
    min,
    max,
  }
};
