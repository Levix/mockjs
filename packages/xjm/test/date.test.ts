import { it, expect } from 'vitest';
import { date } from '../src/module/date';

it('生成随机日期', () => {
  const result = date.random();
  expect(result).toBeTypeOf('object');
})

it('生成yyyy-mm-dd格式的日期', () => {
  const reg = /^\d{4}-\d{2}-\d{2}$/;
  const result = date.
  format('yyyy-mm-dd');
  expect(result).toBeTypeOf('string');
  expect(reg.test(result)).toBeTruthy();
})

it('生成yy-mm-dd格式的日期', () => {
  const reg = /^\d{2}-\d{2}-\d{2}$/;
  const result = date.
  format('yy-mm-dd');
  expect(result).toBeTypeOf('string');
  expect(reg.test(result)).toBeTruthy();
})
