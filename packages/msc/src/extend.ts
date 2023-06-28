import { log } from './helper';

export class MockExtend {
  customRuleMap: Map<string, Function>;
  constructor() {
    this.customRuleMap = new Map();
  }

  use(name: string) {
    const exist = this.hasRule(name);
    if (!exist) {
      return log.error('执行的自定义规则不存在');
    }

    const customRule = this.customRuleMap.get(name) as Function;
    return customRule();
  }

  add(name: string, rule: Function) {
    const exist = this.hasRule(name);
    if (exist) {
      return log.error('添加自定义规则已存在');
    }

    this.customRuleMap.set(name, rule);
  }

  remove(name: string) {
    const exist = this.hasRule(name);
    if (!exist) {
      return log.error('删除自定义规则不存在');
    }

    this.customRuleMap.delete(name);
  }
  get(name: string) {
    const exist = this.hasRule(name);
    if (!exist) {
      return log.error('获取的自定义规则不存在');
    }

    return this.customRuleMap.get(name);
  }
  hasRule(name: string) {
    return this.customRuleMap.has(name);
  }
}
