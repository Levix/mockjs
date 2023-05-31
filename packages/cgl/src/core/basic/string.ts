import { log } from '../../helper/logger';
import { getRandomInRange, getRandomIndex } from './common';

// 获取随机字符，不指定字符集合，则随机生成
export const getChar = (pool?: string) => {
    if (!pool) {
        const index = getRandomIndex(65535 - 32) + 32;
        return String.fromCharCode(index);
    }

    const index = getRandomIndex(pool.length);
    return pool.charAt(index);
};

// 单词的字符集合，包含大小写字母
const DEFALT_WORD_POOL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const getWord = (minLen = 1, maxLen = 7, pool = DEFALT_WORD_POOL): string => {
    if (minLen < 1) {
        log.warn('【getWord】', '字符最小长度重新取值为1', '字符长度小于1');
    }

    // 字符长度不小于1
    const min = Math.max(1, minLen);
    const randomLength = getRandomInRange(min, maxLen);
    let word = '';

    for (let i = 0; i < randomLength; i++) {
        const character = getChar(pool ?? DEFALT_WORD_POOL);
        word += character;
    }

    return word;
};

// 获取随即文本
export const getText = (minWords: number, maxWords: number, pool?: string): string => {
    if (minWords < 1) {
        log.warn('【ggetText】', '字符串最小长度重新取值为1', '字符串长度小于1');
    }

    const randomLength = getRandomInRange(minWords, maxWords);
    let str = '';

    for (let i = 0; i < randomLength; i++) {
        const word = getWord(void 0, void 0, pool);
        str += word + ' ';
    }

    return str.trim();
};
