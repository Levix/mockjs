import { it, describe, expectTypeOf } from 'vitest';
import { random } from '../../src';

describe('测试getRandomBoolean()方法', () => {
  it('返回值类型结果', () => {
      expectTypeOf(random.getRandomBoolean()).toBeBoolean();
  });
})