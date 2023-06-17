import { describe, expect, it, vi } from 'vitest';
import { RuleManager } from '../manager';
import { RuleGenerator } from '../generator';
import { log } from '../../../helper/logger';

vi.mock('../../../helper/logger', () => {
  return {
    log: {
      alert: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
    },
  };
});

class MockRule extends RuleGenerator<string> {
  generate(val?: any): string {
    return 'mock ' + val;
  }
}

describe('Rule Manager', () => {
  it('测试添加规则', () => {
    const Manager = new RuleManager();
    const mockRule = new MockRule();

    Manager.registerRule('mockRule', mockRule);
    expect(Manager.getRule('mockRule')).toBe(mockRule);
  });

  it('测试添加规则失败', () => {
    const Manager = new RuleManager();
    const mockRule = new MockRule();

    Manager.registerRule('mockRule', mockRule);
    Manager.registerRule('mockRule', mockRule);

    expect(log.alert).toHaveBeenCalledWith('【registerRule】', `注册规则mockRule失败`, '已存在规则mockRule');

    Manager.registerRule('mockRule', {} as RuleGenerator<string>);
    expect(log.alert).toHaveBeenCalledWith('添加实例类型错误');
  });

  it('测试移除规则', () => {
    const Manager = new RuleManager();
    const mockRule = new MockRule();

    Manager.registerRule('mockRule', mockRule);
    Manager.removeRule('mockRule');
    expect(log.info).toHaveBeenCalledWith('规则mockRule已移除');
  });

  it('测试移除不存在规则', () => {
    const Manager = new RuleManager();

    Manager.removeRule('mockRule');
    expect(log.warn).toHaveBeenCalledWith('【removeRule】', `移除规则mockRule失败`, '规则不存在');
  });

  it('测试获取不存在规则', () => {
    const Manager = new RuleManager();

    Manager.getRule('no_data');
    expect(log.warn).toHaveBeenCalledWith('【getRule】', `获取规则no_data失败`, '规则不存在');
  });
});
