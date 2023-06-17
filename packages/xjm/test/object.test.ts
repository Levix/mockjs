import { it, expect } from 'vitest';
import { object } from '../src/module/object';
import { number } from '../src/module/number';
import { string } from '../src/module/string';

it('生成长度为3的对象', () => {
  const result = object.random(3);
  expect(result).toBeTypeOf('object');
  expect(Object.keys(result).length).toEqual(3);
  Object.values(result).forEach(val => {
    expect(val).toBeTypeOf('boolean');
  });
});

it('通过数组生成对象', () => {
  const arr = [
    {
      key: 'name',
      value: () => string.en(2),
    },
    {
      key: 'age',
      value: () => number.range(10, 20),
    },
  ];
  const result = object.array2Object(arr);
  expect(result).toBeTypeOf('object');
  expect(Object.keys(result).length).toEqual(2);
  expect(result['name']).toBeTypeOf('string');
  expect(result['age']).toBeTypeOf('number');
});
