/**
 * @file 随机整数
 */

/**
 * 生成一个随机整数
 * @param {number} min - 下边界
 * @param {number} max 上边界
 * @returns {number} 随机整数
 */
export function randomInt(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.round(Math.random() * (max - min)) + min;
}
