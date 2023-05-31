import { TRuleKeyType } from '../interface';
import { RuleGenerator } from './generator';
import { RuleManager } from './manager';
export { RuleGenerator } from './generator';

export const getRule = () => {
    const ruleManager = new RuleManager();

    const Rule = {
        // 执行规则
        generate: (key: TRuleKeyType) => {
            ruleManager.getRule(key)?.exec();
        },
        // 添加规则
        register: <T>(key: TRuleKeyType, rule: RuleGenerator<T>) => {
            ruleManager.registerRule(key, rule);
        },
        // 移除规则
        remove: (key: TRuleKeyType) => {
            ruleManager.removeRule(key);
        },
    }

    return Rule;
};
