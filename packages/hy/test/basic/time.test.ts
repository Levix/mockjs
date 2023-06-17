import { it, expect, describe, expectTypeOf } from 'vitest';
import { random } from '../../src';

describe('测试getRandomTime()方法', () => {
  it('返回值类型', () => {
      expectTypeOf(random.getRandomTime()).toBeString();
  });

  it('返回值格式', () => {
      expect(random.getRandomTime().split(':').length).toBe(3);
  });

  it('返回值的小时应该小于24', () => {
      expect(Number(random.getRandomTime().split(':')[0])).toBeLessThan(24);
  });

  it('返回值的分钟小于60', () => {
      expect(Number(random.getRandomTime().split(':')[1])).toBeLessThan(60);
  });

  it('返回值的秒小于60', () => {
      expect(Number(random.getRandomTime().split(':')[2])).toBeLessThan(60);
  });
})