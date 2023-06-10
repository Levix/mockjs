import { RuleGenerator } from './generator';
import { RuleManager } from './manager';
import type { TRuleKeyType, TRuleParamsType } from '../interface';

export { RuleManager } from './manager';
export { RuleGenerator } from './generator';

const getRuleInstance = () => {
    const ruleManager = new RuleManager();

    const Rule = {
        // 执行规则
        generate: (key: TRuleKeyType, params?: TRuleParamsType) => {
            return ruleManager.getRule(key)?.exec(params);
        },
        // 添加规则
        register: <T>(key: TRuleKeyType, rule: RuleGenerator<T>) => {
            ruleManager.registerRule(key, rule);
            return Rule;
        },
        // 移除规则
        remove: (key: TRuleKeyType) => {
            ruleManager.removeRule(key);
            return Rule;
        },
    };

    return Rule;
};

export const Rule = getRuleInstance();
