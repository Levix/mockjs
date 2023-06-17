import { it, expect } from 'vitest';
import { array } from '../src/module/array';

it('生成长度为3的数组，数组每一项为number类型', () => {
  const result = array.number(3, { min: 5, max: 10 });
  expect(result).toBeTypeOf('object');
  expect(result.length).toEqual(3);
  result.forEach(item => {
    expect(item).toBeTypeOf('number');
    expect(item).toBeLessThanOrEqual(10);
    expect(item).toBeGreaterThanOrEqual(5);
  })
})

it('生成长度为3的数组，数组每一项为boolean类型', () => {
  const result = array.boolean(3);
  expect(result.length).toEqual(3);
  expect(result).toBeTypeOf('object');
  result.forEach(item => {
    expect(item).toBeTypeOf('boolean');
  })
})

it('生成长度为3的数组，数组每一项为string类型且长度为4', () => {
  const result = array.string(3, { type: 'en', unit: 4 });
  expect(result).toBeTypeOf('object');
  expect(result.length).toEqual(3);
  result.forEach(item => {
    expect(item).toBeTypeOf('string');
    expect(item.length).toEqual(4);
    const reg = /[a-zA-Z]{4}/;
    expect((reg.test(item))).toBeTruthy();
  })
})