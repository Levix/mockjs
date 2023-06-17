/**
 * @file 随机字符串
 */

import { isUndefined } from '../../../helper/type_of';
import { randomInt } from '../number/int';

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
