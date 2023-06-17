import { it, describe, expect } from 'vitest';
import { randomEnName, randomCnName } from '../builtin_rule/name';

describe('randomEnName', () => {
    it('should return a string', () => {
        const result = randomEnName();
        expect(typeof result).toBe('string');
    });

    it('should return a string with two parts separated by a space', () => {
        const result = randomEnName();
        const parts = result.split(' ');
        expect(parts).toHaveLength(2);
    });

    it('should return a string with the first part starting with an uppercase letter', () => {
        const result = randomEnName();
        const parts = result.split(' ');
        expect(parts[0].charAt(0)).toMatch(/[A-Z]/);
    });

    it('should return a string with the second part starting with an uppercase letter', () => {
        const result = randomEnName();
        const parts = result.split(' ');
        expect(parts[1].charAt(0)).toMatch(/[A-Z]/);
    });
});

describe('randomCnName', () => {
    it('should return a string', () => {
        const result = randomCnName();
        expect(typeof result).toBe('string');
    });

    it('should return a string with two parts', () => {
        const result = randomCnName();
        const parts = result.split('');
        expect(parts).toHaveLength(3);
    });

    it('should return a string with the first part being a Chinese surname', () => {
        const result = randomCnName();
        const surname = result.charAt(0);
        expect('赵黄周吴王李张刘陈杨').toContain(surname);
    });

    it('should return a string with the second part being a string of Chinese characters', () => {
        const result = randomCnName();
        const name = result.substr(1);
        expect(name).toMatch(/^[\u4e00-\u9fa5]+$/);
    });
});
