import { it, expect, describe, expectTypeOf } from 'vitest';
import { getRandomString } from '../src';

describe('测试getRandomString()方法', () => {
  it('测试getRandomString()的返回值类型', () => {
      expectTypeOf(getRandomString()).toBeString();
  });

  it('测试getRandomString()的返回值长度', () => {
      expect(getRandomString().length).toBe(1);
  });

  it('测试getRandomString(2)的返回值长度', () => {
      expect(getRandomString(2).length).toBe(2);
  });
})