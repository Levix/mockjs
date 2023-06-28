import { it, expect, describe, vi } from 'vitest';
import { Random } from '../../src/index';
import { MAX_NATURE_NUMBER, MIN_NATURE_NUMBER } from '../../src/const';
import { log } from '../../src/helper';

describe('integer随机整数', () => {
  it('Random.integer( )： 不传入参数', () => {
    const data = Random.integer();

    expect(data).to.be.a('number').within(MIN_NATURE_NUMBER, MAX_NATURE_NUMBER);
  });

  it('Random.integer( min )传入一个参数', () => {
    const data = Random.integer(10);
    expect(data).to.be.a('number').least(10);
  });

  it('Random.integer( min, max )：传入两个参数', () => {
    const data = Random.integer(1, 3);
    expect(data).to.be.a('number').within(1, 3);
  });
  // 错误测试
  it('Random.integer( min, max )最大值大于最小值', () => {
    const x = vi.spyOn(log, 'error');
    Random.integer(10, 3);
    expect(x).toHaveBeenCalledWith('最大值max不能小于最小值min');
  });
});

describe('natural随机自然数测试', () => {
  it('Random.natural )： 不传入参数', () => {
    const data = Random.natural();
    expect(data).to.be.a('number').within(0, MAX_NATURE_NUMBER);
  });

  it('Random.natural( min )传入一个参数', () => {
    const data = Random.natural(10);
    expect(data).to.be.a('number').least(10);
  });

  it('Random.natural( min, max )：传入两个参数', () => {
    const data = Random.natural(1, 3);
    expect(data).to.be.a('number').within(1, 3);
  });
  // 错误测试
  it('Random.natural( min, max )最大值大于最小值', () => {
    const x = vi.spyOn(log, 'error');
    Random.natural(10, 3);
    expect(x).toHaveBeenCalledWith('最大值max不能小于最小值min');
  });
});
