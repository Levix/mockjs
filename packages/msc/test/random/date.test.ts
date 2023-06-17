import { it, expect, describe } from 'vitest';
import { Random } from '../../src';

describe('date的测试', () => {
  /* eslint no-bitwise: 0 */

  /* Random date */
  it('Random.date', () => {
    const date1 = Random.date();
    expect(date1).toMatch(/^\d{4}-\d\d-\d\d$/);
    const date2 = Random.date('yyMMdd');
    expect(date2).toMatch(/^\d{6}$/);
  });

  it('Random.time', () => {
    const date1 = Random.time();
    expect(date1).toMatch(/^\d\d:\d\d:\d\d$/);
    const date2 = Random.time('hhmmss');
    expect(date2).toMatch(/^\d{6}$/);
  });

  it('Random.datetime', () => {
    // datetime()
    expect(Random.datetime()).toMatch(/^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d$/);
    // datetime(fmt)
    expect(Random.datetime('yyMMddhhmmss')).toMatch(/^\d{12}$/);
  });

  it('Random.now', () => {
    const dt = new Date();
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset()); // 修正时区偏移
    const date = dt.toISOString().slice(0, -5).replace(/[T]/g, ' ');
    expect(Random.now()).toEqual(date);
  });
});
