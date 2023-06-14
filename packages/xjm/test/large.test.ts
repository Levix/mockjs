import { it, expect } from 'vitest';
import { large } from '../src/module/large';

it('生成长度为100的数组', () => {
  const result = large(100);
  expect(result.length).toEqual(100);
})
