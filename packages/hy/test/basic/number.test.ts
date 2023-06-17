import { it, expect, describe } from 'vitest';
import { random } from '../../src';

describe('测试getRandomNumber()方法', () => {
    it('参数非整数的结果', () => {
        expect(random.getRandomNumber(1.1, 2)).toBeUndefined();
        expect(random.getRandomNumber(-1.1, 10)).toBeUndefined();
        expect(random.getRandomNumber(-1, -2.1)).toBeUndefined();
    });

    it('参数最小值和最大值范围值错误的结果', () => {
        expect(random.getRandomNumber(1, 0)).toBeUndefined();
        expect(random.getRandomNumber(-1, -2)).toBeUndefined();
    });

    it('参数最小值和最大值相等的结果', () => {
        expect(random.getRandomNumber(1, 1)).toBe(1);
        expect(random.getRandomNumber(-1, -1)).toBe(-1);
    });

    it('参数的最大值和最小值范围值', () => {
        expect(random.getRandomNumber(1, 10) <= 10).toBe(true);
        expect(random.getRandomNumber(1, 10) >= 1).toBe(true);
        expect(random.getRandomNumber(-6, -1) <= -1).toBe(true);
        expect(random.getRandomNumber(-6, -1) >= -6).toBe(true);
    });
})