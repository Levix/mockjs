import { randomBool, randomInt, randomChar, randomFloat, randomStr } from './random/base';
import { MockR } from './rule/index';
import { temp } from './temp';

export class MockX {
    static random = {
        bool: randomBool,
        int: randomInt,
        char: randomChar,
        float: randomFloat,
        str: randomStr,
    };

    static temp = temp;

    static rule = new MockR();
}
