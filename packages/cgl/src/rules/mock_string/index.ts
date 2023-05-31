import { getString } from "../../core/basic";
import { RuleGenerator } from "../../core/rules";

export interface MockStringParamsType {
    minLen?: number;
    maxLen?: number;
    pool?: string;
}

export class MockStringRule extends RuleGenerator<string> {
    generate(params: MockStringParamsType) {
        const { minLen, maxLen, pool } = params;
        return getString(minLen, maxLen, pool);
    }
}

export const getMockStringInstance = () => {
    return new MockStringRule();
}
