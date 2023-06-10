import { it, expect, describe } from 'vitest';
import { random } from '../src';

describe('测试getPhoneNumber()方法', () => {
    it('测试getPhoneNumber()的返回值长度', () => {
        expect(random.getPhoneNumber().length).toBe(11);
    });
})