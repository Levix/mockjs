import { it, expect, describe, vi } from 'vitest';
import { Random } from '../../src';
import { log } from '../../src/helper';

describe('date的测试', () => {
  it('随机生成日期Random.date', () => {
    const date1 = Random.date();
    expect(date1).toMatch(/^\d{4}-\d\d-\d\d$/);
    const date2 = Random.date('yyMMdd');
    expect(date2).toMatch(/^\d{6}$/);
  });

  it('随机生成时间Random.time', () => {
    const date1 = Random.time();
    expect(date1).toMatch(/^\d\d:\d\d:\d\d$/);
    const date2 = Random.time('hhmmss');
    expect(date2).toMatch(/^\d{6}$/);
  });

  it('随机生成日期和时间Random.datetime', () => {
    expect(Random.datetime()).toMatch(/^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d$/);

    expect(Random.datetime('yyMMddhhmmss')).toMatch(/^\d{12}$/);
  });

  it('生成当前的日期和时间Random.now', () => {
    expect(Random.now()).toMatch(/^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d$/);

    expect(Random.now('yyMMddhhmmss')).toMatch(/^\d{12}$/);
  });
 
});
