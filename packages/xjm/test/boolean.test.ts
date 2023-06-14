import { it, expect } from 'vitest';
import { boolean } from '../src/module/boolean';

it('生成随机布尔值', () => {
  const result = boolean();
  expect(result).toBeTypeOf('boolean');
});
