import { it, expect, describe } from 'vitest';
import { random } from '../src';

describe('测试getRandomFloatNumber()方法', () => {
  it('测试getRandomFloatNumber()的参数最小值和最大值相等,且没有小数位', () => {
      expect(random.getRandomFloatNumber(1, 1, 0, 0)).toBe('1');
  });

  it('测试getRandomFloatNumber()的参数', () => {
    expect(Number(random.getRandomFloatNumber(1, 2, 1, 3))).toBeLessThan(2);
  });

  it('测试getRandomFloatNumber()的参数', () => {
    expect(random.getRandomFloatNumber(2, 1, 1, 3)).toBeUndefined();
  });

  it('测试getRandomFloatNumber()的参数', () => {
    expect(random.getRandomFloatNumber(2, 1, 3, 1)).toBeUndefined();
  });
})