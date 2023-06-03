import { it, describe, expectTypeOf } from 'vitest';
import { getRandomBoolean } from '../src';

describe('测试getRandomBoolean()方法', () => {
  it('测试getRandomBoolean()的返回值类型', () => {
      expectTypeOf(getRandomBoolean()).toBeBoolean();
  });
})