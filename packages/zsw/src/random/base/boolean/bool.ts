/**
 * @file 随机布尔
 */

/**
 * 生成一个随机布尔值
 * @returns {boolean} 一个布尔值
 */
export function randomBool(probability = 0.5) {
    return Math.random() < probability;
}
