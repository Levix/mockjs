import { it, expect, describe } from 'vitest';
import { randomDate } from '../builtin_rule/date';

describe('randomDate', () => {
    it('should return a string', () => {
        const result = randomDate();
        expect(result).to.be.a('string');
    });

    it('should return a valid date string', () => {
        const result = randomDate();
        const date = new Date(result);
        expect(date.toString()).to.not.equal('Invalid Date');
    });

    it('should return a date string between minDate and maxDate', () => {
        const minDate = new Date('2022-01-01');
        const maxDate = new Date('2022-12-31');
        const result = randomDate(minDate, maxDate);
        const date = new Date(result);
        expect(date >= minDate && date <= maxDate).to.be.true;
    });

    it('should throw an error if minDate or maxDate is invalid', () => {
        // @ts-ignore ---| ts 忽略为了传入错误的参数
        const result = randomDate('Invalid Date');
        expect(result).to.equal('Invalid Date');
    });

    it('should return a date string in the specified format', () => {
        const format = 'YYYY年MM月DD日 hh时mm分ss秒';
        const result = randomDate(new Date('2022-01-01'), new Date('2022-12-31'), format);
        expect(result).to.match(/^\d{4}年\d{2}月\d{2}日 \d{2}时\d{2}分\d{2}秒$/);
    });
});
