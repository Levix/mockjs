import { it, expect, describe } from 'vitest';
import { random } from '../src';

describe('测试getRandomDate()方法', () => {
  it('测试getRandomDate()的默认返回值', () => {
      expect(random.getRandomDate().getTime()).toBeLessThan(new Date().getTime());
      expect(random.getRandomDate().getTime()).toBeGreaterThan(new Date(0).getTime());
  });

  it('测试getRandomDate()的返回值类型', () => {
      expect(random.getRandomDate(new Date(), new Date()).getFullYear()).toBe(new Date().getFullYear());
      expect(random.getRandomDate(new Date('1998-06-07'), new Date()).getFullYear()).toBeLessThan(new Date().getFullYear() + 1);
      expect(random.getRandomDate(new Date('1998-06-07'), new Date()).getFullYear()).toBeGreaterThan(1997);
  });
})

describe('测试formatDate()方法', () => {
  it('测试formatDate()的返回值', () => {
      expect(random.formatDate(new Date(),'YYYY')).toBe(new Date().getFullYear() + '');
      expect(random.formatDate(new Date('1998-06-07'), 'YYYY-MM-DD')).toBe('1998-06-07');
      expect(random.formatDate(new Date('1998-06-07'), 'YY-MM-DD')).toBe('98-06-07');
      expect(random.formatDate(new Date('1998-06-06 12:06:12'))).toBe('1998-06-06 12:06:12');
  });
})