import { it, describe, expect } from 'vitest';
import { randomId } from '../builtin_rule/id';

describe('randomId', () => {
    it('should return a string', () => {
        const result = randomId();
        expect(result).to.be.a('string');
    });

    it('should return a valid id card number if type is "person"', () => {
        const result = randomId('person');
        const pattern = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}[\dX]$/;
        expect(pattern.test(result)).to.be.true;
    });

    it('should return a valid UUID if type is "uuid"', () => {
        const result = randomId('uuid');
        const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
        expect(pattern.test(result)).to.be.true;
    });

    it('should throw an error if type is invalid', () => {
        // @ts-ignore ---| ts 忽略为了传入错误的参数
        const result = randomId('invalid');
        expect(result).to.equal('Invalid Type');
    });
});
