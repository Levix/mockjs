import { getString } from "../../core/basic";
import { RuleGenerator } from "../../core/rules";

export interface MockStringParamsType {
    minLen?: number;
    maxLen?: number;
    pool?: string;
}

/**
 * Mock字符串规则
 */
export class MockStringRule extends RuleGenerator<string> {
    generate(params: MockStringParamsType) {
        const { minLen, maxLen, pool } = params;
        return getString(minLen, maxLen, pool);
    }
}

/**
 * 获取Mock字符串规则实例
 */
export const getMockStringInstance = () => {
    return new MockStringRule();
}
