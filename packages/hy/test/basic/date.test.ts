import { it, expect, describe } from 'vitest';
import { random } from '../../src';

describe('测试getRandomDate()方法', () => {
  it('没有参数时 默认返回值为当前时间', () => {
    expect(random.getRandomDate().getTime()).toBeLessThan(new Date().getTime());
    expect(random.getRandomDate().getTime()).toBeGreaterThan(new Date(0).getTime());
  });

  it('传入日期范围的返回值结果', () => {
    expect(random.getRandomDate(new Date(), new Date()).getFullYear()).toBe(new Date().getFullYear());
    expect(random.getRandomDate(new Date('1998-06-07'), new Date()).getFullYear()).toBeLessThan(new Date().getFullYear() + 1);
    expect(random.getRandomDate(new Date('1998-06-07'), new Date()).getFullYear()).toBeGreaterThan(1997);
  });
})

describe('测试formatDate()方法', () => {
  it('指定格式返回值', () => {
    expect(random.formatDate(new Date(), 'YYYY')).toBe(new Date().getFullYear() + '');
    expect(random.formatDate(new Date('1998-06-07'), 'YYYY-MM-DD')).toBe('1998-06-07');
    expect(random.formatDate(new Date('1998-06-07'), 'YY-MM-DD')).toBe('98-06-07');
    expect(random.formatDate(new Date('1998-06-06 12:06:12'))).toBe('1998-06-06 12:06:12');
    expect(random.formatDate(new Date('1998-06-06 12:06:12'), 'YY-M-D H:m:s')).toBe('98-6-6 12:6:12');
  });

  it("类型不支持的返回值", () => {
    expect(random.formatDate(new Date(), 'YY MM d')).toBeUndefined();
    expect(random.formatDate(new Date(), 'YY-MM-DD- HH:mm:ss')).toBeUndefined();
    expect(random.formatDate(new Date(), 'YY-MM-DD HH:mm:ss:s')).toBeUndefined();
    expect(random.formatDate(new Date(), 'YY-MM-DD aa:mm:ss')).toBeUndefined();
  });
})
