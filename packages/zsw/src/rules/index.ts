import { logger } from '../helper/logger';

import { dateRule } from '../random/builtin_rule/date';
import { idRule } from '../random/builtin_rule/id';
import { cnNameRule, enNameRule } from '../random/builtin_rule/name';
import { phoneRule } from '../random/builtin_rule/phone';

function loadBuiltins() {
    return {
        data: dateRule,
        id: idRule,
        cnName: cnNameRule,
        enName: enNameRule,
        phone: phoneRule,
    };
}

export class MockR {
    private ruleMap: Record<string, any> = {};

    constructor() {
        this.ruleMap = loadBuiltins();
    }

    public getRule(key: string) {
        const rule = this.ruleMap[key];

        if (rule) {
            logger.error(`{key} rule not exits`);
        }

        return rule;
    }

    public addRule(key: string, rule: any) {
        this.ruleMap[key] = rule;
    }
}
