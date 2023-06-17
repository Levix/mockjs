import { logger } from '../../helper/logger';
import { randomInt } from '../base/number/int';
import { randomStr } from '../base/string/str';

/**
 * 计算身份证号的校验码
 * @param {string} idCard 身份证号前 17 位
 * @returns {string} 校验码
 */
function calculateVerifyCode(idCard: string) {
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const codes = '10X98765432';
    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += parseInt(idCard.charAt(i)) * weights[i];
    }
    const index = sum % 11;
    return codes.charAt(index);
}

/**
 * 生成身份证号
 * @returns {string} 随机生成的身份证号
 */
function randomIdCard() {
    const provinceCodes = [
        '110100',
        '120100',
        '500100',
        '130000',
        '140000',
        '210000',
        '220000',
        '230000',
        '320000',
        '330000',
        '340000',
        '350000',
        '360000',
        '370000',
        '410000',
        '420000',
        '430000',
        '440000',
        '460000',
        '510000',
        '520000',
        '530000',
        '610000',
        '620000',
        '630000',
    ];
    const provinceCode = provinceCodes[randomInt(0, provinceCodes.length - 1)];

    // TODO 这里的 2022 最好还是按照当前时间算出来, 但现在暂时不这么做
    const year = randomInt(1950, 2022);

    const month = randomInt(1, 12).toString().padStart(2, '0');
    const day = randomInt(1, 28).toString().padStart(2, '0');

    const sequenceCode = randomStr('@number', 3);

    const verifyCode = calculateVerifyCode(`${provinceCode}${year}${month}${day}${sequenceCode}`);

    return `${provinceCode}${year}${month}${day}${sequenceCode}${verifyCode}`;
}

/**
 * 生成 UUID
 * @returns {string} 随机生成的 UUID
 */
function randomUuid() {
    const hexDigits = '0123456789abcdef';
    let uuid = '';
    for (let i = 0; i < 32; i++) {
        uuid += hexDigits.charAt(randomInt(0, 15));
    }
    uuid = `${uuid.substr(0, 8)}-${uuid.substr(8, 4)}-${uuid.substr(12, 4)}-${uuid.substr(16, 4)}-${uuid.substr(20)}`;
    return uuid;
}

/**
 * 根据传入参数生成身份证号或 UUID 的 mock 函数
 * @param {string} type 类型，可以是 'person' 或 'uuid'，默认为 'person'
 * @returns {string} 随机生成的身份证号或 UUID
 */
export function randomId(type: 'person' | 'uuid' = 'person') {
    if (type === 'person') {
        return randomIdCard();
    } else if (type === 'uuid') {
        return randomUuid();
    } else {
        logger.error('Invalid Type');
        return 'Invalid Type';
    }
}
