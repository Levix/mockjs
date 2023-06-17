import { it, expect, describe } from 'vitest';
import { random } from '../../src';

describe('测试getRandomFloatNumber()方法', () => {
  it('参数最小值和最大值相等,且没有小数位的结果', () => {
      expect(random.getRandomFloatNumber(1, 1, 0, 0)).toBe('1');
  });

  it('指定参数范围的返回值', () => {
    expect(Number(random.getRandomFloatNumber(1, 2, 1, 3)) <= 3).toBe(true);
    expect(Number(random.getRandomFloatNumber(1, 2, 1, 3)) >= 1).toBe(true);
  });

  it('参数范围值错误的结果', () => {
    expect(random.getRandomFloatNumber(2, 1, 1, 3)).toBeUndefined();
    expect(random.getRandomFloatNumber(2, 1, 3, 1)).toBeUndefined();
    expect(random.getRandomFloatNumber(1, 2, 3, 1)).toBeUndefined();
  });

  it('参数为非整数的返回值', () => {
    expect(random.getRandomFloatNumber(1, 2, 1.1, 1.2)).toBeUndefined();
    expect(random.getRandomFloatNumber(1.1, 2, 1.1, 1.2)).toBeUndefined();
  });
})