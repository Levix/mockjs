/**
 * @file 随机字符串
 */

import { isNumber, isString, isUndefined } from '../../../helper/type_of';
import { randomInt } from '../number/int';
import { randomChar } from './char';

/**
 * 生成一个内容随机的字符串
 * @param {number} minLen 长度 - 下边界
 * @param {number} maxLen 长度 - 上边界
 * @return {string} 随机字符串
 */
export function randomStr(minLen?: number, maxLen?: number): string;

/**
 * 在内置模板中生成一个内容随机的字符串
 * @param {'@lower' | '@upper' | '@alpha' | '@number' | '@symbol'} temp 内置模板
 * @param {number} minLen 长度 - 下边界
 * @param {number} maxLen 长度 - 上边界
 * @return {string} 随机字符串
 */
export function randomStr(
    temp?: '@lower' | '@upper' | '@alpha' | '@number' | '@symbol',
    minLen?: number,
    maxLen?: number,
): string;

/**
 * 在自定义模板中生成一个内容随机的字符串
 * @param temp 自定义模板
 * @param minLen 长度 - 下边界
 * @param maxLen 长度 - 上边界
 * @return {string} 随机字符串
 */
export function randomStr(temp: string, minLen?: number, maxLen?: number): string;

export function randomStr(temp?: string | number, minLen?: number, maxLen?: number) {
    let fTemp = '';
    let fMin = 1;
    let fMax = 7; // 默认随机字符串最大长度

    if (isString(temp)) {
        fTemp = temp;
        fMin = Math.max(0, minLen || 0);
        fMax = Math.max(0, maxLen || (isUndefined(minLen) ? fMax : fMin));
    }

    if (isNumber(temp)) {
        fMin = Math.max(0, temp || 0);
        fMax = Math.max(0, minLen || fMin);
    }

    const len = randomInt(fMin, fMax);

    let str = '';
    for (let i = 0; i < len; i++) {
        str += isUndefined(temp) || isNumber(temp) ? randomChar() : randomChar(fTemp);
    }

    return str;
}
