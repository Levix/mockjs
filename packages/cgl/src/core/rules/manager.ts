import { log } from "../../helper/logger";
import { IRuleGenerator, TRuleKeyType } from "../interface"

// 规则管理器
export class RuleManager {
    private ruleMap: Map<TRuleKeyType, IRuleGenerator<any>>;

    constructor() {
        this.ruleMap = new Map();
    }

    // 获取规则
    public getRule(key: TRuleKeyType) {
        const rule = this.ruleMap.get(key);

        if (!rule) {
            log.warn('【getRule】', `获取规则${key}失败`, '规则不存在');
            return;
        }

        return rule;
    }

    // 添加规则
    public registerRule<T>(key: string, rule: IRuleGenerator<T>) {
        const existsRule = this.ruleMap.get(key);

        if (existsRule) {
            log.alert('【registerRule】', `注册规则${key}失败`, `已存在规则${key}`);
            return
        }

        this.ruleMap.set(key, rule);
    }

    // 移除规则
    public removeRule(key: TRuleKeyType) {
        if (!this.ruleMap.has(key)) {
            log.warn('【removeRule】', `移除规则${key}失败`, '规则不存在');
            return;
        }

        this.ruleMap.delete(key);
    }
}
