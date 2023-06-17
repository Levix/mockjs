import { describe, expect, it } from 'vitest';
import { phoneRule } from '../builtin_rule/phone';

describe('phoneRule', () => {
    it('should return a string', () => {
        const result = phoneRule();
        expect(typeof result).to.toBe('string');
    });

    it('should return a string with the specified length', () => {
        const result = phoneRule(11);
        expect(result).toHaveLength(11);
    });

    it('should return a string starting with a valid prefix', () => {
        const result = phoneRule();
        const prefix = result.slice(0, 3);
        expect(['177', '138', '158']).toContain(prefix);
    });

    it('should return a string consisting of digits only', () => {
        const result = phoneRule();
        expect(result).toMatch(/^\d+$/);
    });
});
