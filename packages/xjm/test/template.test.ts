import { it, expect } from 'vitest';
import { template } from '../src/module/template';

it('根据传入模板生成数据', () => {
  const jsonData = '{"name": "John", "age": 30, "city": "New York"}';
  const result = template.json(jsonData);
  expect(result.name).toEqual('John');
  expect(result.age).toEqual(30);
  expect(result.city).toEqual('New York');
})
