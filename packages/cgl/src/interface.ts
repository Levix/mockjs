// Mock 规则定义
export interface IRuleGenerator<T> {
    getKey(): string;
    checkTypes(val: any): boolean;
    generate(): T;
}

// 规则Key类型
export type TRuleKeyType = string;

// 规则参数类型
export type TRuleParamsType = any;

export type SchemaItemType = [TRuleKeyType, TRuleParamsType, [number?, number?]?];
