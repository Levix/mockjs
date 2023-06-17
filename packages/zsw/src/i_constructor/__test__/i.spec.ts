import { describe, expect, it } from 'vitest';
import { I } from '../index';

describe('i constructor', () => {
    it('should return Function', () => {
        const ia = I(() => 'a');
        expect(typeof ia).toBe('function');
    });

    it('should match @xxx', () => {
        const ia = I('@bool');

        const result = ia();
        expect(typeof result).toBe('boolean');
    });
});
