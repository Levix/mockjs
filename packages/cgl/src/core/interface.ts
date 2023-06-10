// Mock 规则定义
export interface IRuleGenerator<T> {
    generate(val?: any): T;
    exec(val?: any): T | undefined;
}

// 规则Key类型
export type TRuleKeyType = string;
