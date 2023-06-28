import { it, expect, describe, vi } from 'vitest';
import { Random } from '../../src/index';
import { log } from '../../src/helper';

describe('float随机字符测试', () => {
  it('Random.float )： 不传入参数', () => {
    const data = Random.float();

    expect(data).to.be.a('number');
  });

  it('Random.float( min )传入一个参数', () => {
    const data = Random.float(1);
    expect(data).to.be.a('number').least(1);
  });

  it('Random.float( min, max )：传入两个参数', () => {
    const data = Random.float(1, 9);
    expect(data).to.be.a('number').within(1, 10);
    expect(String(data).length).within(1, 19);
  });

  it('Random.float( min, max ,dmin)：传入三个参数', () => {
    const data = Random.float(1, 9, 2);
    expect(data).to.be.a('number').within(1, 10);
    expect(String(data).length).within(3, 19);
  });

  it('Random.float( min, max ,dmin,dmax)：传入四个参数', () => {
    const data = Random.float(1, 9, 2, 5);
    expect(data).to.be.a('number').within(1, 10);
    expect(String(data).length).within(3, 7);
  });
  // 错误测试
  it('Random.float( min, max )最大值大于最小值', () => {
    const x = vi.spyOn(log, 'error');
    Random.float(10, 3);
    expect(x).toHaveBeenCalledWith('最大值max不能小于最小值min');
  });

  it('Random.float( min, max )最大位数dmax大于最小位数dmin', () => {
    const x = vi.spyOn(log, 'error');
    Random.float(1, 3, 6, 3);
    expect(x).toHaveBeenCalledWith('最大位数dmax不能小于最小位数dmin');
  });
});
