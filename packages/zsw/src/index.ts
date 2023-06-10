import { randomBoolean, randomInt, randomChar, randomFloat, randomString } from './random/basic';
import { randomArr, randomObj } from './temp/complex';

export class MockX {
    static random = {
        bool: randomBoolean,
        int: randomInt,
        char: randomChar,
        float: randomFloat,
        str: randomString,
        arr: randomArr,
        obj: randomObj,
    };
}

export { MockR } from './rules/index';
