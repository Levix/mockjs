import { describe, expect, it } from "vitest";
import { getChar, getWord } from "../string";

describe('getChar', () => {
    it('测试生成随机字符', () => {
        const char = getChar();
        expect(typeof char).toBe('string');
        expect(char.length).toBe(1);
        expect(char.charCodeAt(0)).toBeGreaterThanOrEqual(32);
        expect(char.charCodeAt(0)).toBeLessThanOrEqual(65535);
    });

    it('测试生成指定字符集合', () => {
        const pool = 'abc';
        const char = getChar(pool);

        expect(char.length).toBe(1);
        expect(pool.includes(char)).toBe(true);
    });
});

describe('getWord', () => {
    it('测试生成指定长度的单词', () => {
        const minLen = 3;
        const maxLen = 10;
        const word = getWord(minLen, maxLen);
        expect(typeof word).toBe('string');
        expect(word.length).toBeGreaterThanOrEqual(minLen);
        expect(word.length).toBeLessThanOrEqual(maxLen);
    });

    it('测试生成指定字符集合的单词', () => {
        const pool = 'abc123';
        const minLen = 5;
        const maxLen = 8;
        const word = getWord(minLen, maxLen, pool);

        expect(word.length).toBeGreaterThanOrEqual(minLen);
        expect(word.length).toBeLessThanOrEqual(maxLen);
        for (const char of word) {
            expect(pool.includes(char)).toBe(true);
        }
    });
});
