/**
 * @file 生成列表
 */

import { getRandomInRange } from '../core/basic';
import { log } from '../helper/logger';
import { Rule } from '../rules';
import type { TRuleKeyType, TRuleParamsType } from '../interface';

/**
 * 通过规则名获取随即列表
 * @param ruleName 规则名称
 * @param params 规则参数
 * @param min 最小长度
 * @param max 最大长度
 */
export function getListByRuleName(ruleName: TRuleKeyType, params: TRuleParamsType, min: number, max: number) {
  const result = [];
  const range = getRandomInRange(min, max);

  for (let i = 0; i < range; i++) {
    result.push(Rule.generate(ruleName, params));
  }

  return result;
}

/**
 * 通过回调获取随即列表
 * @param ruleName 规则名称
 * @param params 规则参数
 * @param min 最小长度
 * @param max 最大长度
 */
export const getListByCallback = <T>(getter: () => T, min: number, max: number) => {
  const result = [];
  const range = getRandomInRange(min, max);

  for (let i = 0; i < range; i++) {
    result.push(getter());
  }

  return result;
};

export function list(ruleName: TRuleKeyType, params: TRuleParamsType, min: number, max: number): any[];
export function list<T>(getter: () => T, min: number, max: number): T[];

export function list<T>(
  arg1: (() => T) | TRuleKeyType,
  arg2: TRuleParamsType | number,
  arg3: number,
  arg4?: number,
) {
  if (arguments.length === 3) {
    if (typeof arg1 !== 'function') {
      log.alert('getList', `参数${arguments}校验错误`);
      return [];
    }
    return getListByCallback(arg1, arg2, arg3);
  }

  if (typeof arg1 !== 'string' || typeof arg4 !== 'number') {
    log.alert('getList', `参数${arguments}校验错误`);
    return [];
  }

  return getListByRuleName(arg1, arg2, arg3, arg4);
}
