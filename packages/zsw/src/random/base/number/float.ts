/**
 * @file 随机浮点数
 */

import { randomChar } from '../string/char';
import { randomInt } from './int';

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
