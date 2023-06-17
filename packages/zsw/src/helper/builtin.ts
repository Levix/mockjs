import { randomBool, randomInt, randomChar, randomFloat, randomStr } from '../random/base/index';

export const BUILTIN_MAP = {
    '@bool': randomBool,
    '@int': randomInt,
    '@char': randomChar,
    '@float': randomFloat,
    '@str': randomStr,
} as const;

export function isBuiltin(key: string): key is keyof typeof BUILTIN_MAP {
    return key in BUILTIN_MAP;
}
