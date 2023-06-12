import { it, expect, describe } from 'vitest';
import { random } from '../src';

describe('测试getRandomNumber()方法', () => {
    it('测试getRandomNumber()的参数', () => {
        expect(random.getRandomNumber(1.1, 2)).toBeUndefined();
        expect(random.getRandomNumber(1, 2.1)).toBeUndefined();
        expect(random.getRandomNumber(1, 0)).toBeUndefined();
    });

    it('测试getRandomNumber()的参数最小值和最大值相等', () => {
        expect(random.getRandomNumber(1, 1)).toBe(1);
    });

    it('测试getRandomNumber()的返回值', () => {
        expect(random.getRandomNumber(1, 10)).toBeLessThan(11);
        expect(random.getRandomNumber(1, 10)).toBeGreaterThan(0);
    });

    it('测试getRandomNumber()的参数为负的小数', () => {
        expect(random.getRandomNumber(-1.1, 10)).toBeUndefined();
        expect(random.getRandomNumber(-1, -2.1)).toBeUndefined();
        expect(random.getRandomNumber(-1, -2)).toBeUndefined();
    });

    it('测试getRandomNumber()的参数为负数且最小值和最大值相等', () => {
        expect(random.getRandomNumber(-1, -1)).toBe(-1);
    });

    it('测试getRandomNumber()参数为负数的返回值1', () => {
        expect(random.getRandomNumber(-6, -1)).toBeLessThan(0);
    });

    it('测试getRandomNumber()参数为负数的返回值2', () => {
        expect(random.getRandomNumber(-6, -1)).toBeGreaterThan(-7);
    });

    it('测试getRandomNumber()参数为负数的返回值3', () => {
        expect(random.getRandomNumber(-1, 1)).toBeLessThan(2);
    });

    it('测试getRandomNumber()参数为负数的返回值4', () => {
        expect(random.getRandomNumber(-1, 1)).toBeGreaterThan(-2);
    });
})