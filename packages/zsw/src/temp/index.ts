import { logger } from '../helper/logger';
import { isArray, isFunction, isObject } from '../helper/type_of';
import { randomInt } from '../random/base';

type ArrayTemp = [Function | ObjectTemp, number] | [Function | ObjectTemp, number, number];

type ObjectTemp = Record<string, Function | ArrayTemp>;

export function temp(param: ArrayTemp | ObjectTemp): any {
    if (isArray(param)) {
        // 生成随机数据工具
        const randomI = param[0];

        // 数组长度
        const arrLen = randomInt(param[1], param[2] || param[1]);

        // 返回结果
        const result = [];

        for (let i = 0; i < arrLen; i++) {
            if (isFunction(randomI)) {
                result.push(randomI());
                continue;
            }

            if (isObject(randomI)) {
                result.push(temp(randomI));
                continue;
            }

            logger.error('param should is Function');
            result.push('Invalid param');
        }

        return result;
    }

    if (isObject(param)) {
        return Object.entries(param).reduce((result, next) => {
            let randomResult;

            if (isArray(next[1])) {
                randomResult = temp(next[1]);
            }

            if (isFunction(next[1])) {
                randomResult = next[1]();
            }

            if (!randomResult) {
                logger.warn('param is invalid param, return void 0');
            }

            return {
                ...result,
                [next[0]]: randomResult,
            };
        }, {});
    }

    logger.error('param should is Function');
    return 'Invalid param';
}
