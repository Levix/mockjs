import { logger } from '../helper/logger';

export class MockR {
    private ruleMap: Map<string, Function>;

    constructor() {
        this.ruleMap = new Map();
    }

    public use(key: string) {
        const rule = this.ruleMap.get(key);
        if (!rule) {
            logger.error('not key found');
        }

        return rule;
    }

    public install(key: string, customRule: Function) {
        const rule = this.ruleMap.get(key);
        if (rule) {
            logger.error('key exist');
            return;
        }

        this.ruleMap.set(key, customRule);
    }

    public remove(key: string) {
        const rule = this.ruleMap.get(key);
        if (!rule) {
            logger.error('not key found');
            return;
        }

        this.ruleMap.delete(key);
    }
}
