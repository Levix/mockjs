import { it, expect, describe, expectTypeOf } from 'vitest';
import { getRandomTime } from '../src';

describe('测试getRandomTime()方法', () => {
  it('测试getRandomTime()的返回值类型', () => {
      expectTypeOf(getRandomTime()).toBeString();
  });

  it('测试getRandomTime()的返回值', () => {
      expect(getRandomTime().split(':').length).toBe(3);
  });

  it('测试getRandomTime()的小时小于24', () => {
      expect(Number(getRandomTime().split(':')[0])).toBeLessThan(24);
  });

  it('测试getRandomTime()的分钟小于60', () => {
      expect(Number(getRandomTime().split(':')[1])).toBeLessThan(60);
  });

  it('测试getRandomTime()的秒小于60', () => {
      expect(Number(getRandomTime().split(':')[2])).toBeLessThan(60);
  });
})