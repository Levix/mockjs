import { it, expect, describe, expectTypeOf } from 'vitest';
import mock from '../src';

describe('测试getRandomString()方法', () => {
    it('测试getRandomString()的返回值类型', () => {
        expectTypeOf(mock.getRandomString()).toBeString();
    });

    it('测试getRandomString()的返回值长度', () => {
        expect(mock.getRandomString().length).toBe(1);
    });

    it('测试getRandomString(2)的返回值长度', () => {
        expect(mock.getRandomString(2).length).toBe(2);
    });
})

describe('测试getRandomBoolean()方法', () => {
    it('测试getRandomBoolean()的返回值类型', () => {
        expectTypeOf(mock.getRandomBoolean()).toBeBoolean();
    });
})

describe('测试getRandomNumber()方法', () => {
    // it('测试getRandomNumber()的参数', () => {
    //     expect(mock.getRandomNumber(1.1, 2)).toThrow(new Error('参数只能是整数'));
    // });

    // it('测试getRandomNumber()的参数', () => {
    //     expect(mock.getRandomNumber(1, 2.1)).toThrowError('参数只能是整数');
    // });

    // it('测试getRandomNumber()的参数', () => {
    //     expect(mock.getRandomNumber(1, 0)).toThrowError('参数范围值错误');
    // });

    it('测试getRandomNumber()的参数最小值和最大值相等', () => {
        expect(mock.getRandomNumber(1, 1)).toBe(1);
    });

    it('测试getRandomNumber()的返回值', () => {
        expect(mock.getRandomNumber(1, 10)).toBeLessThan(11);
        expect(mock.getRandomNumber(1, 10)).toBeGreaterThan(0);
    });

    // it('测试getRandomNumber()的参数为负数', () => {
    //     expect(mock.getRandomNumber(-1.1, 10)).toThrowError('参数只能是整数');
    // });

    // it('测试getRandomNumber()的参数为负数', () => {
    //     expect(mock.getRandomNumber(-1, -2.1)).toThrowError('参数只能是整数');
    // });

    // it('测试getRandomNumber()的参数为负数', () => {
    //     expect(mock.getRandomNumber(-1, -2)).toThrowError('参数范围值错误');
    // });

    it('测试getRandomNumber()的参数为负数且最小值和最大值相等', () => {
        expect(mock.getRandomNumber(-1, -1)).toBe(-1);
    });

    it('测试getRandomNumber()参数为负数的返回值1', () => {
        expect(mock.getRandomNumber(-6, -1)).toBeLessThan(0);
    });

    it('测试getRandomNumber()参数为负数的返回值2', () => {
        expect(mock.getRandomNumber(-6, -1)).toBeGreaterThan(-7);
    });

    it('测试getRandomNumber()参数为负数的返回值3', () => {
        expect(mock.getRandomNumber(-1, 1)).toBeLessThan(2);
    });

    it('测试getRandomNumber()参数为负数的返回值4', () => {
        expect(mock.getRandomNumber(-1, 1)).toBeGreaterThan(-2);
    });
})

describe('测试getRandomTime()方法', () => {
    it('测试getRandomTime()的返回值类型', () => {
        expectTypeOf(mock.getRandomTime()).toBeString();
    });

    it('测试getRandomTime()的返回值', () => {
        expect(mock.getRandomTime().split(':').length).toBe(3);
    });

    it('测试getRandomTime()的小时小于24', () => {
        expect(Number(mock.getRandomTime().split(':')[0])).toBeLessThan(24);
    });

    it('测试getRandomTime()的分钟小于60', () => {
        expect(Number(mock.getRandomTime().split(':')[1])).toBeLessThan(60);
    });

    it('测试getRandomTime()的秒小于60', () => {
        expect(Number(mock.getRandomTime().split(':')[2])).toBeLessThan(60);
    });
})

describe('测试getRandomDate()方法', () => {
    it('测试getRandomDate()的默认返回值', () => {
        expect(mock.getRandomDate().getTime()).toBeLessThan(new Date().getTime());
        expect(mock.getRandomDate().getTime()).toBeGreaterThan(new Date(0).getTime());
    });

    it('测试getRandomDate()的返回值类型', () => {
        expect(mock.getRandomDate(new Date(), new Date()).getFullYear()).toBe(new Date().getFullYear());
        expect(mock.getRandomDate(new Date('1998-06-07'), new Date()).getFullYear()).toBeLessThan(new Date().getFullYear() + 1);
        expect(mock.getRandomDate(new Date('1998-06-07'), new Date()).getFullYear()).toBeGreaterThan(1997);
    });
})

describe('测试formatDate()方法', () => {
    it('测试formatDate()的返回值', () => {
        expect(mock.formatDate(new Date(),'YYYY')).toBe(new Date().getFullYear() + '');
        expect(mock.formatDate(new Date('1998-06-07'), 'YYYY-MM-DD')).toBe('1998-06-07');
        expect(mock.formatDate(new Date('1998-06-07'), 'YY-MM-DD')).toBe('98-06-07');
        expect(mock.formatDate(new Date('1998-06-06 12:06:12'))).toBe('1998-06-06 12:06:12');
    });
})

describe('测试getRandomFloatNumber()方法', () => {
    it('测试getRandomFloatNumber()的参数最小值和最大值相等,且没有小数位', () => {
        expect(mock.getRandomFloatNumber(1, 1, 0, 0)).toBe('1');
    });
})

describe('测试getIdCard()方法', () => {
    it('测试getIdCard()的返回值长度', () => {
        expect(mock.getIdCard().length).toBe(18);
    });
})

describe('测试getPhoneNumber()方法', () => {
    it('测试getPhoneNumber()的返回值长度', () => {
        expect(mock.getPhoneNumber().length).toBe(11);
    });
})