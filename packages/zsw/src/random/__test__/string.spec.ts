import { it, expect, describe } from 'vitest';
import { randomChar } from '../base/string/char';
import { randomStr } from '../base/string/str';

describe('randomChar', () => {
    it('randomChar should return a string ', () => {
        const char = randomChar();
        expect(typeof char).toBe('string');
    });

    it('randomChar should return a character within the specified character set', () => {
        const temp = '@lower';
        const result = randomChar(temp);
        const charSet = 'abcdefghijklmnopqrstuvwxyz';
        expect(charSet.includes(result)).toBe(true);
    });

    it('randomChar should handle edge cases', () => {
        const temp1 = '';
        const temp2 = undefined;
        const result1 = randomChar(temp1);
        const result2 = randomChar(temp2);
        expect(result1).toBe('');
        expect(typeof result2).toBe('string');
    });
});

describe('randomStr', () => {
    it('randomStr, should return a string', () => {
        const str = randomStr();
        expect(typeof str).toBe('string');
    });

    it('randomStr should return a string within the specified character set', () => {
        const temp = '@lower';
        const str = randomStr(temp, 4, 12);
        const chartSet = 'abcdefghijklmnopqrstuvwxyz';
        expect(str.length).toBeGreaterThanOrEqual(4);
        expect(str.length).toBeLessThanOrEqual(12);
        for (let i = 0; i < str.length; i++) {
            expect(chartSet.includes(str[i])).toBe(true);
        }
    });

    it('randomStr should handle edge cases', () => {
        const str1 = randomStr(0);
        const str2 = randomStr(3);
        const str3 = randomStr('@lower', 10);
        const str4 = randomStr('@lower', 10, 5);
        expect(str1).toBe('');
        expect(str2.length).toBe(3);
        expect(str3.length).toBe(10);
        expect(str4.length).toBeGreaterThanOrEqual(5);
        expect(str4.length).toBeLessThanOrEqual(10);
    });
});
