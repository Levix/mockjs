import { it, expect, describe } from 'vitest';
import { Random } from '../../src/index';
import { MAX_NATURE_NUMBER } from 'packages/msc/src/const';

describe('natural随机自然数测试', () => {
  /* 正确情况 */
  // 不传参数 使用默认值
  it('不传参数:Random.natural()', () => {
    const data = Random.natural();

    expect(data).to.be.a('number').within(0, MAX_NATURE_NUMBER);
  });

  // 传两个参数，指定范围内随机
  it('传两个参数:Random.natural(1, 3)', () => {
    const data = Random.natural(1, 3);

    expect(data).to.be.a('number').within(1, 3);
  });

  // 只传一个参数 设置最小值，最大值为默认值
  it('只传一个参数:Random.natural(1)', () => {
    const data = Random.natural(1);
    expect(data).to.be.a('number').least(1);
  });

  // 传两个参数，第一个参数不为number则是最小值不设置，设置最大值，值在0 - max内随机
  it('只设置最大值:Random.natural(undefined,2)', () => {
    const data = Random.natural(undefined, 2);
    expect(data).to.be.a('number').within(0, 2);
  });

  // 参数为小数
  it('参数为小数:Random.natural(15.3,16.3)', () => {
    const data = Random.natural(15.3, 16.3);
    expect(data).to.be.a('number').within(15, 16);
  });
});
