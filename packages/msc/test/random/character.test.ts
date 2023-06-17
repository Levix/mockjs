import { it, expect, describe } from 'vitest';
import { Random } from '../../src/index';
import { CHAR_REGS } from 'packages/msc/src/const';

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

  // 使用内置关键词字符串池lower
  it('使用内置关键词字符串池lower', () => {
    const pool = 'lower';
    const data = Random.character(pool);

    expect(data).toMatch(CHAR_REGS.lower);
  });

  // 使用内置关键词字符串池lower
  it('使用内置关键词字符串池lower', () => {
    const pool = 'symbol';
    const data = Random.character(pool);

    expect(data).toMatch(CHAR_REGS.symbol);
  });

  // 使用内置关键词字符串池lower
  it('使用内置关键词字符串池lower', () => {
    const pool = 'symbol';
    const data = Random.character(pool);

    expect(data).toMatch(CHAR_REGS.symbol);
  });

  /* 错误情况 */
  // 参数类型错误 则使用默认字符串池
  it('使用内置关键词字符串池lower', () => {
    const pool = 'symbol';
    const data = Random.character(22222);

    expect(data).toBeTypeOf('string');
  });
});
