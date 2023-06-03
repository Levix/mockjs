import { it, expect, describe } from 'vitest';
import { getPhoneNumber } from '../src';

describe('测试getPhoneNumber()方法', () => {
    it('测试getPhoneNumber()的返回值长度', () => {
        expect(getPhoneNumber().length).toBe(11);
    });
})