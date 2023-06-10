import { getRandomIndex, getString } from "../../core/basic";

// 获取手机号前缀
const getPrefix = () => {
    const prefixs = ['134', '126', '173'];
    return prefixs[getRandomIndex(prefixs.length)];
}

/**
 * @param size 手机号长度
 * 获取手机号
 */
export const getPhone = (size = 11) => {
    const prefix = getPrefix();
    if (size <= prefix.length) {
        return getString(size, size, '1234567890');
    }

    const len = Math.min(size - prefix.length);
    return prefix + getString(len, len, '1234567890');
}
