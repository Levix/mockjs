import { describe, it, expect } from "vitest";
import { getFloat, getInteger } from "../number";

describe('getInteger', () => {
    it('获取随机整数', () => {
        const min = -100;
        const max = 100;
        const result = getInteger(min, max);

        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        expect(Number.isInteger(result)).toBe(true);
    });
});

describe('getFloat', () => {
    it('获取随机浮点数', () => {
        const min = 0;
        const max = 10;
        const dmin = 2;
        const dmax = 4;
        const result = getFloat(min, max, dmin, dmax);

        // 测试整数位
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        // 测试分数位
        const decimal = String(result).split('.')[1];
        expect(decimal.length).toBeLessThanOrEqual(dmax);
        expect(decimal.length).toBeGreaterThanOrEqual(dmin);
    });
});
