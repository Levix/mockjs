import { it, describe, expect } from 'vitest';
import { random } from '../src/index';
import { json } from '../src/test';

describe('random.getRandomJson()方法', () => {
  it('random.getRandomJson()返回值', () => {
    console.log(random.getRandomJson(json));
    expect(random.getRandomJson(json)).toBeInstanceOf(Array);
    expect(random.getRandomJson(json)[0]).toBeInstanceOf(Object);
    expect('a' in random.getRandomJson(json)[0]).toBe(true);
    expect(random.getRandomJson(json)[0].a[0]).toBeTypeOf("string");
    expect(random.getRandomJson(json)[1]).toBeTypeOf("number");
    expect(random.getRandomJson(json)[1]).toBeGreaterThan(0);
    expect(random.getRandomJson(json)[1]).toBeLessThan(11);
  })
})