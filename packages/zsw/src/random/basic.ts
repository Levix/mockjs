/**
 * @file 基础随机数据
 */

import { isNumber, isString, isUndefined } from '../helper/type_of';

/**
 * 生成一个随机布尔值
 * @returns {boolean} 一个布尔值
 */
export function randomBoolean() {
    return Math.random() > 0.5;
}

/**
 * 生成一个随机整数
 * @param {number} min - 下边界
 * @param {number} max 上边界
 * @returns {number} 随机整数
 */
export function randomInt(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.round(Math.random() * (max - min)) + min;
}

/**
 * 在内置模板中生一个随机字符
 * @param {'@lower' | '@upper' | '@alpha' | '@number' | '@symbol'} temp 内置模板
 * @returns {string} 随机字符
 */
export function randomChar(temp?: '@lower' | '@upper' | '@alpha' | '@number' | '@symbol'): string;

/**
 * 在自定义模板中生一个随机字符
 * @param {string} temp 自定义模板
 * @returns {string} 随机字符
 */
export function randomChar(temp: string): string;

export function randomChar(temp?: string): string {
    const dTemp: Record<string, string> = {
        '@lower': 'abcdefghijklmnopqrstuvwxyz',
        '@upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '@alpha': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '@number': '0123456789',
        '@symbol': '!@#$%^&*()[]',
    };

    const allTemp = dTemp['@alpha'] + dTemp['@lower'] + dTemp['@alpha'] + dTemp['@number'] + dTemp['@symbol'];

    let fTemplate = isUndefined(temp) ? allTemp : dTemp[temp] || temp;
    return fTemplate.charAt(randomInt(0, fTemplate.length - 1));
}

/**
 * 生成一个随机浮点数
 * @param {number} min 整数 - 下边界
 * @param {number} max 整数 - 上边界
 * @param {number} minPrecision 小数位数 - 下边界
 * @param {number} maxPrecision 小数位数 - 上边界
 * @returns {number} 随机浮点数
 */
export function randomFloat(min?: number, max?: number, minPrecision = 0, maxPrecision = 17) {
    let result = `${randomInt(min, max)}.`;

    const precision = randomInt(Math.max(Math.min(minPrecision, 17), 0), Math.max(Math.min(maxPrecision, 17), 0));

    for (let i = 0; i < precision - 1; i++) {
        result += randomChar('@number');
    }
    return parseFloat(result + randomChar('123456789'));
}

/**
 * 生成一个内容随机的字符串
 * @param {number} minLen 长度 - 下边界
 * @param {number} maxLen 长度 - 上边界
 * @return {string} 随机字符串
 */
export function randomString(minLen?: number, maxLen?: number): string;

/**
 * 在内置模板中生成一个内容随机的字符串
 * @param {'@lower' | '@upper' | '@alpha' | '@number' | '@symbol'} temp 内置模板
 * @param {number} minLen 长度 - 下边界
 * @param {number} maxLen 长度 - 上边界
 * @return {string} 随机字符串
 */
export function randomString(
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
export function randomString(temp: string, minLen?: number, maxLen?: number): string;

export function randomString(temp?: string | number, minLen?: number, maxLen?: number) {
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
