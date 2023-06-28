import { it, expect, describe, vi } from 'vitest';
import { extend } from '../src';
import { log } from '../src/helper';

describe('扩展自定义生成数据规则', () => {
  it('获取规则', () => {
    const name = 'a';
    const res = 'res';
    const callback = () => {
      return res;
    };

    extend.add(name, callback);

    expect(extend.get(name)).toEqual(callback);
  });

  it('添加规则', () => {
    const name = 'a';
    const callback = () => {
      return 'a';
    };

    extend.add(name, callback);
    expect(extend.hasRule(name)).toEqual(true);
  });

  it('删除规则', () => {
    const name = 'a';
    const callback = () => {
      return 'a';
    };

    extend.add(name, callback);
    extend.remove(name);
    expect(extend.hasRule(name)).toEqual(false);
  });

  it('执行规则', () => {
    const name = 'a';
    const res = 'res';
    const callback = () => {
      return res;
    };

    extend.add(name, callback);
    expect(extend.use(name)).toEqual(res);
  });

  it('添加自定义规则已存在', () => {
    const name = 'a';
    const res = 'res';
    const callback = () => {
      return res;
    };

    extend.add(name, callback);
    const x = vi.spyOn(log, 'error');

    extend.add(name, callback);
    expect(x).toHaveBeenCalledWith('添加自定义规则已存在');
  });

  it('删除自定义规则不存在', () => {
    const name = 'accc';
    const x = vi.spyOn(log, 'error');

    extend.remove(name);
    expect(x).toHaveBeenCalledWith('删除自定义规则不存在');
  });

  it('获取的自定义规则不存在', () => {
    const x = vi.spyOn(log, 'error');

    extend.get('sss');
    expect(x).toHaveBeenCalledWith('获取的自定义规则不存在');
  });

  it('执行的自定义规则不存在', () => {
    const x = vi.spyOn(log, 'error');

    extend.use('sss');
    expect(x).toHaveBeenCalledWith('执行的自定义规则不存在');
  });
});
