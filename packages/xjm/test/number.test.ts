import { it, expect } from 'vitest';
import { number } from '../src/module/number';

it('随机生成[0, 10]的自然数', () => {
  const result = number.natural(0, 10);
  expect(result).toBeTypeOf('number');
  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThanOrEqual(10);
  expect(number.natural(-1, 0)).toBeUndefined();
  expect(number.natural(1, 1)).toEqual(1);
  expect(number.natural(2, 1)).toBeUndefined();
});

it('随机生成[1, 10]的正数', () => {
  const result = number.positive(1, 10);
  expect(result).toBeTypeOf('number');
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(10);
  expect(number.positive(-1, 0)).toBeUndefined();
  expect(number.positive(1, 1)).toEqual(1);
  expect(number.positive(2, 1)).toBeUndefined();
});

it('随机生成[-1, -10]的负数', () => {
  const result = number.negative(-10, -1);
  expect(result).toBeTypeOf('number');
  expect(result).toBeGreaterThanOrEqual(-10);
  expect(result).toBeLessThanOrEqual(-1);
  expect(number.negative(0, -1)).toBeUndefined();
  expect(number.negative(-1, -1)).toEqual(-1);
  expect(number.negative(-1, -2)).toBeUndefined();
})

it('生成MAX_SAFE_INTEGER', () => {
  const result = number.maxSafeInt();
  expect(result).toBeTypeOf('number');
  expect(result).toEqual(Number.MAX_SAFE_INTEGER);
});

it('生成MIN_SAFE_INTEGER', () => {
  const result = number.minSafeInt();
  expect(result).toBeTypeOf('number');
  expect(result).toEqual(Number.MIN_SAFE_INTEGER);
})

it('随机生成decimal位小数的浮点数，且范围在[min, max]之间', () => {
  const result = number.float(2.5, 5.5, 2);
  expect(result).toBeTypeOf('number');
  expect(result).toBeGreaterThanOrEqual(2.5);
  expect(result).toBeLessThanOrEqual(5.5);
});
