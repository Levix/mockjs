import { RuleGenerator, RuleManager } from "../core/rules";
import { TRuleKeyType, TRuleParamsType } from "../interface";
import { getMockStringInstance } from "./mock_string";
import { getPersonSleepInstance } from "./person_sleep";

export const getRuleInstance = () => {
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
    }

    return Rule
        .register('personSleep', getPersonSleepInstance())
        .register('mockString', getMockStringInstance());;
};


