import { it, expect, describe } from 'vitest';
import { MockX } from '../src/index';

describe('basic', () => {
    it('MockX.random.bool should return a boolean', () => {
        const bol = MockX.random.bool();
        expect(typeof bol).toBe('boolean');
    });

    it('MockX.random.bool should return true or false with roughly equal probability', () => {
        const iterations = 10000;
        let trueC = 0;
        let falseC = 0;
        for (let i = 0; i < iterations; i++) {
            if (MockX.random.bool()) {
                trueC++;
                continue;
            }

            falseC++;
        }
        const r = trueC / falseC;
        expect(r).toBeCloseTo(1, 1);
    });

    it('MockX.random.int should return a number ', () => {
        const result = MockX.random.int();
        expect(Number.isInteger(result)).toBe(true);
    });

    it('MockX.random.int should return a integer within the specified range', () => {
        const min = 1;
        const max = 10;
        const result = MockX.random.int(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    it('MockX.random.char should return a string ', () => {
        const char = MockX.random.char();
        expect(typeof char).toBe('string');
    });

    it('MockX.random.char should return a character within the specified character set', () => {
        const temp = '@lower';
        const result = MockX.random.char(temp);
        const charSet = 'abcdefghijklmnopqrstuvwxyz';
        expect(charSet.includes(result)).toBe(true);
    });

    it('MockX.random.char should handle edge cases', () => {
        const temp1 = '';
        const temp2 = undefined;
        const result1 = MockX.random.char(temp1);
        const result2 = MockX.random.char(temp2);
        expect(result1).toBe('');
        expect(typeof result2).toBe('string');
    });

    it('MockX.random.float should return a float', () => {
        const result = MockX.random.float();
        expect(typeof result).toBe('number');
        expect(Number.isFinite(result)).toBe(true);
    });

    it('MockX.random.float should return a float within the specified range', () => {
        const min = 2.12;
        const max = 6.36;
        const result = MockX.random.float(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    it('MockX.random.str, should return a string', () => {
        const str = MockX.random.str();
        expect(typeof str).toBe('string');
    });

    it('MockX.random.str should return a string within the specified character set', () => {
        const temp = '@lower';
        const str = MockX.random.str(temp, 4, 12);
        const chartSet = 'abcdefghijklmnopqrstuvwxyz';
        expect(str.length).toBeGreaterThanOrEqual(4);
        expect(str.length).toBeLessThanOrEqual(12);
        for (let i = 0; i < str.length; i++) {
            expect(chartSet.includes(str[i])).toBe(true);
        }
    });

    it('MockX.random.str should handle edge cases', () => {
        const str1 = MockX.random.str(0);
        const str2 = MockX.random.str(3);
        const str3 = MockX.random.str('@lower', 10);
        const str4 = MockX.random.str('@lower', 10, 5);
        expect(str1).toBe('');
        expect(str2.length).toBe(3);
        expect(str3.length).toBe(10);
        expect(str4.length).toBeGreaterThanOrEqual(5);
        expect(str4.length).toBeLessThanOrEqual(10);
    });
});
