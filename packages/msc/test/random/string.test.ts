import { it, expect, describe } from 'vitest';
import { Random } from '../../src/index';
import { getReg } from '../../src/helper';
import { CHAR_REGS } from '../../src/const';

describe('string随机字符串测试', () => {
  it('Random.string()  不传入参数', () => {
    const data = Random.string();
    const reg = getReg('all');

    expect(data).toMatch(reg);
  });

  it('Random.string( length ) 传入一个指定字符串长度', () => {
    const data = Random.string(5);
    const reg = getReg('all', '{5}');

    expect(data).toMatch(reg);
  });

  it('Random.string( pool) 传入一个指定字符串池', () => {
    const pool = 'qwwqwqqw';
    const data = Random.string(pool);
    const reg = getReg(`[${pool}]`);
    expect(data).toMatch(reg);
  });

  it('Random.string( pool, length ) 传入一个指定字符串池和指定字符串长度', () => {
    const pool = 'symbol';
    const data = Random.string(pool, 8);
    const reg = getReg(pool, '{8}');

    expect(data).toMatch(reg);
  });

  it('Random.string( min, max ) 传入一个字符串长度的min和max', () => {
    const data = Random.string(5, 10);
    const reg = getReg('all', '{5,10}');

    expect(data).toMatch(reg);
  });

  it('Random.string( pool, min, max )传入一个字符串长度的min和max', () => {
    const pool = 'symbol';
    const data = Random.string(pool, 4, 6);
    const reg = getReg(pool, '{4,6}');

    expect(data).toMatch(reg);
  });
});

describe('character随机字符测试', () => {
  /* 正确情况 */
  // 不传参数 使用默认字符串池
  it('不传参数', () => {
    const data = Random.character();

    expect(data).to.be.a('string');
  });

  // 传入字符串池，指定字符串池随机一个字符串
  it('传字符串池', () => {
    const pool = 'wssws';
    const data = Random.character(pool);

    expect(pool).toMatch(data);
  });

  // 使用内置关键词字符串池lower
  it('使用内置关键词字符串池lower', () => {
    const pool = 'lower';
    const data = Random.character(pool);

    expect(data).toMatch(CHAR_REGS.lower);
  });

  // 使用内置关键词字符串池upper
  it('使用内置关键词字符串池upper', () => {
    const pool = 'upper';
    const data = Random.character(pool);

    expect(data).toMatch(CHAR_REGS.upper);
  });

  // 使用内置关键词字符串池number
  it('使用内置关键词字符串池number', () => {
    const pool = 'number';
    const data = Random.character(pool);

    expect(data).toMatch(CHAR_REGS.number);
  });

  // 使用内置关键词字符串池symbol
  it('使用内置关键词字符串池symbol', () => {
    const pool = 'symbol';
    const data = Random.character(pool);

    expect(data).toMatch(CHAR_REGS.symbol);
  });
});
