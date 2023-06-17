import { it, expect, describe } from 'vitest';
import { Random } from '../../src/index';

describe('float随机字符测试', () => {
  /* 正确情况 */
  // 不传参数 使用默认字符串池
  it('不传参数', () => {
    const data = Random.float();

    expect(data).to.be.a('number');
  });
  // 传入参数
  it('传入参数', () => {
    const data = Random.float(1, 9, 2, 4);

    expect(data).to.be.a('number').within(1, 10);
    expect(String(data).length).within(3, 6);
  });
});
