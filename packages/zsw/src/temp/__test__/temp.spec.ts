import { describe, expect, it } from 'vitest';
import { temp } from '..';
import { I } from '../../i_constructor';

describe('temp', () => {
    it('should return an array when param is an array', () => {
        const result = temp([I('@bool'), 3]);

        expect(Object.prototype.toString.call(result)).toBe('[object Array]');

        for (let i = 0; i < 3; i++) {
            expect(typeof result[i]).toBe('boolean');
        }
    });

    it('should return length between minLen adn maxLen', () => {
        const minLen = 23;
        const maxLen = 25;
        const result = temp([I('@bool'), minLen, maxLen]);

        expect(minLen <= result.length && result.length <= maxLen).to.be.true;
    });

    it('return an invalid array when param is invalid array', () => {
        const preResult = ['Invalid param'];

        // @ts-ignore ---| 为了测试异常场景而使用错误的参数
        const result = temp(['', 1]);

        expect(result).to.toEqual(preResult);
    });

    it('should return an object when param is an object', () => {
        const result = temp({ a: I('@bool') });

        expect(Object.prototype.toString.call(result)).toBe('[object Object]');
    });

    it('return an invalid object when param is invalid object', () => {
        const preResult = { a: undefined };

        // @ts-ignore ---| 为了测试异常场景而使用错误的参数
        const result = temp({ a: '' });

        expect(result).to.toEqual(preResult);
    });

    it('should return an array & object when param is an array & object', () => {
        const result = temp([
            {
                a: [I('@bool'), 1],
            },
            3,
        ]);

        expect(Object.prototype.toString.call(result)).toBe('[object Array]');

        for (let i = 0; i < 1; i++) {
            expect(typeof result[0].a[i]).toBe('boolean');
        }
    });
});
