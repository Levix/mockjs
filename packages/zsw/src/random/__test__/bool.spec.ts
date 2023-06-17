import { it, expect, describe } from 'vitest';
import { randomBool } from '../base/boolean/bool';

describe('randomBool', () => {
    it('should return true or false', () => {
        const bol = randomBool();
        expect(typeof bol).toBe('boolean');
    });

    it('should return tur with probability 1', () => {
        const result = randomBool(1);
        expect(result).to.be.true;
    });

    it('should return false with probability 0', () => {
        const result = randomBool(0);
        expect(result).to.be.false;
    });

    it('should return true with probability 0.8', () => {
        const probability = 0.8;
        const count = 10000;
        let trueCount = 0;
        for (let i = 0; i < count; i++) {
            if (randomBool(probability)) {
                trueCount++;
            }
        }

        const trueProbability = trueCount / count;
        expect(trueProbability).to.be.closeTo(probability, 0.1);
    });
});
