/**
 * @file 高阶随机数据
 */

import { isArray, isFunction, isUndefined } from '../helper/type_of';
import { randomInt } from '../random/basic';

type RuleType = undefined | null | boolean | number | string | Function | Object;

export const randomObj = (rule: Record<string, RuleType | RuleType[]>) => {
    const result: any = {};

    const handleRule = (rule: RuleType | RuleType[]) => {
        if (isFunction(rule)) {
            return rule();
        }

        if (isArray(rule)) {
            return randomArr(rule);
        }

        return rule;
    };

    Object.keys(rule).forEach(key => {
        result[key] = handleRule(rule[key]);
    });

    return result;
};

export const randomArr = <T extends RuleType>(rule: T | T[], minLen?: number, maxLen?: number) => {
    let fMinLen = 0;
    let fMaxLen = 8;

    fMinLen = Math.max(0, minLen || 0);
    fMaxLen = Math.max(0, maxLen || (isUndefined(fMinLen) ? fMaxLen : fMinLen));

    const len = randomInt(fMinLen, fMaxLen);

    const handleRule = (rule: RuleType) => {
        if (isFunction(rule)) {
            return rule();
        }

        return rule;
    };

    let arr: T[] = [];

    for (let i = 0; i < len; i++) {
        if (isArray(rule)) {
            let rIndex = randomInt(0, rule.length);
            arr = [...arr, handleRule(rule[rIndex])];
        }
    }

    return arr;
};
