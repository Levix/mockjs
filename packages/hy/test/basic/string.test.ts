import { it, expect, describe, expectTypeOf } from 'vitest';
import { random } from '../../src';

describe('测试getRandomString()方法', () => {
  it('返回值类型', () => {
      expectTypeOf(random.getRandomString('1234567890', 1)).toBeString();
  });

  it('指定长度的返回值', () => {
      expect(random.getRandomString('asdx', 1).length).toBe(1);
  });

})

describe('测试getTypeString()方法', () => {
    it('返回值类型', () => {
        expectTypeOf(random.getTypeString('number', 2)).toBeString();
    });
  
    it('指定长度的返回值', () => {
        expect(random.getTypeString('number', 2).length).toBe(2);
        expect(random.getTypeString('lowerCase', 2).length).toBe(2);
    });
})