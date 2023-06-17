import { it, expect, describe } from 'vitest';
import { Random } from '../../src/index';
import { getStrReg } from 'packages/msc/src/helper';

describe('string随机字符串测试', () => {
  /* 正确情况 */
  // 不传参数 使用默认字符串池
  it('不传参数', () => {
    const data = Random.string();
    const reg = /^.{3,7}$/;
    expect(data).toMatch(reg);
  });

  // 使用内置关键词字符串池lower
  it('使用内置关键词字符串池lower', () => {
    const pool = 'lower';
    const data = Random.string(pool);
    const reg = getStrReg(pool, '{3,7}');

    expect(data).toMatch(reg);
  });

  // 使用内置关键词字符串池upper
  it('使用内置关键词字符串池upper', () => {
    const pool = 'upper';
    const data = Random.string(pool);
    const reg = getStrReg(pool, '{3,7}');

    expect(data).toMatch(reg);
  });

  // 使用内置关键词字符串池number
  it('使用内置关键词字符串池number', () => {
    const pool = 'number';
    const data = Random.string(pool);
    const reg = getStrReg(pool, '{3,7}');

    expect(data).toMatch(reg);
  });

  // 使用内置关键词字符串池symbol
  it('使用内置关键词字符串池symbol', () => {
    const pool = 'symbol';
    const data = Random.string(pool);
    const reg = getStrReg(pool, '{3,7}');

    expect(data).toMatch(reg);
  });

  // 使用内置关键词字符串池alpha
  it('使用内置关键词字符串池alpha', () => {
    const pool = 'alpha';
    const data = Random.string(pool);
    const reg = getStrReg(pool, '{3,7}', 'i');

    expect(data).toMatch(reg);
  });

  // 自定义字符串池
  it('自定义字符串池', () => {
    const data = Random.string('呵哈嘿', 1, 3);
    const reg = /^[呵哈嘿]{1,3}$/i;

    expect(data).toMatch(reg);
  });
});
