import { describe, expect, it } from "vitest";
import { list } from "..";

describe('Mock List', () => {
    it('测试通过获取随机列表', () => {
        const minLen = 2;
        const maxLen = 3;
        const pool = 'a';

        const result = list('mockString', { minLen, maxLen, pool }, 3, 10);

        const result2 = list(() => 1, 3, 10);

        console.log(result, result2)

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThanOrEqual(3);
        expect(result.length).toBeLessThanOrEqual(10);

        expect(Array.isArray(result2)).toBe(true);
        expect(result2.length).toBeGreaterThanOrEqual(3);
        expect(result2.length).toBeLessThanOrEqual(10);
    });

    it('测试通过RuleName获取列表', () => {
        const minLen = 2;
        const maxLen = 3;

        const result = list('mockString', { minLen, maxLen }, 3, 10);

        expect(result.every(str => str.length >= 2 && str.length <= 3)).toBe(true);
    });

    it('测试通过回调获取列表', () => {
        const result = list(() => 1, 3, 10);

        expect(result.every(num => num === 1)).toBe(true);
    });
});
