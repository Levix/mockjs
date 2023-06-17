import { it, expect, describe } from 'vitest';
import { Random } from '../../src';

describe('boolean随机布尔值测试', () => {
  it('随机布尔值:Random.boolean()', () => {
    const data = Random.boolean();

    expect(data).to.be.a('boolean');
  });
});
