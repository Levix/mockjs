import { it, expect, describe } from 'vitest';
import { random } from '../src';

describe('测试getIdCard()方法', () => {
  it('测试getIdCard()的返回值长度', () => {
      expect(random.getIdCard().length).toBe(18);
  });
})