import { it, expect, describe, expectTypeOf } from 'vitest';
import { random } from '../src';

describe('测试getRandomString()方法', () => {
  it('测试getRandomString()的返回值类型', () => {
      expectTypeOf(random.getRandomString('1234567890', 1)).toBeString();
  });

  it('测试getRandomString()的返回值长度', () => {
      expect(random.getRandomString('asdx', 1).length).toBe(1);
  });

  it('测试getRandomString(2)的返回值长度', () => {
      expect(random.getRandomString('et234', 2).length).toBe(2);
  });
})

describe('测试getTypeString()方法', () => {
    it('测试getTypeString()的返回值类型', () => {
        expectTypeOf(random.getTypeString('number', 2)).toBeString();
    });
  
    it('测试getTypeString()的返回值长度', () => {
        expect(random.getTypeString('number', 2).length).toBe(2);
    });
  
    it('测试getTypeString(2)的返回值长度', () => {
        expect(random.getTypeString('lowerCase', 2).length).toBe(2);
    });
  })