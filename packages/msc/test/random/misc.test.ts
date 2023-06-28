import { it, expect, describe } from 'vitest';
import { Random } from '../../src/index';

describe('Random misc', () => {
  it('生成随机uuid Random.uuid', () => {
    console.log(Random.uuid());

    expect(Random.uuid()).toMatch(/^[\da-f]{8}(-[\da-f]{4}){3}-[\da-f]{12}$/);
    expect(Random.guid()).toMatch(/^[\da-f]{8}(-[\da-f]{4}){3}-[\da-f]{12}$/);
  });

  it('生成随机身份证 Random.idCard', () => {
    console.log(Random.idCard());
    expect(Random.idCard()).toMatch(/^[\dX]{18}$/);
  });

  it('生成随机手机号 Random.mobile', () => {
    console.log(Random.mobile());
    expect(Random.mobile()).toMatch(/^1[3|4|5|7|8][0-9]{9}$/);
  });
});
