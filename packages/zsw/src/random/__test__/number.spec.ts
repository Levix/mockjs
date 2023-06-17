import { it, expect, describe } from 'vitest';
import { randomInt } from '../base/number/int';
import { randomFloat } from '../base/number/float';

describe('randomInt', () => {
    it('randomInt should return a number ', () => {
        const result = randomInt();
        expect(Number.isInteger(result)).toBe(true);
    });

    it('randomInt should return a integer within the specified range', () => {
        const min = 1;
        const max = 10;
        const result = randomInt(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });
});

describe('randomFloat', () => {
    it('randomFloat should return a float', () => {
        const result = randomFloat();
        expect(typeof result).toBe('number');
        expect(Number.isFinite(result)).toBe(true);
    });

    it('randomFloat should return a float within the specified range', () => {
        const min = 2.12;
        const max = 6.36;
        const result = randomFloat(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });
});
