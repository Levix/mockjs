/**
 * @file I 构造器
 */

import { BUILTIN_MAP, isBuiltin } from '../helper/builtin';

/**
 * 生成一个产生 mock 数据的函数, 在 mockX 内都会被执行
 * @param rule 内置规则快捷别名
 * @param args 实参
 */
export function I<T extends keyof typeof BUILTIN_MAP>(
    rule: T,
    ...args: Parameters<(typeof BUILTIN_MAP)[T]>
): () => ReturnType<(typeof BUILTIN_MAP)[T]>;

/**
 * 生成一个产生 mock 数据的函数, 在 mockX 内都会被执行
 * @param fn 产生 mock 数据函数
 * @param args 实参
 */
export function I<T extends any[], R>(fn: (...args: T) => R, ...args: T): () => R;

export function I(fn: any, ...args: any) {
    let executedFn: any = null;

    if (isBuiltin(fn)) {
        const rule = BUILTIN_MAP[fn];
        executedFn = rule;
    }

    return function () {
        return executedFn.apply(null, args);
    };
}
