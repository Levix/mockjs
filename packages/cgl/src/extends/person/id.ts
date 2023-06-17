import { getBool, getChar, getString } from '../../core/basic';
import { log } from '../../helper/logger';

const NumPool = '1234567890'
/**
 * @param size 身份证长度
 * 获取身份证信息
 */
export const getId = (size = 11) => {
    if (size < 1) {
        log.alert('指定id长度小于1');
        return '';
    }

    const suffix = getBool() ? getChar(NumPool) : getChar('XZ');
    return getString(size - 1, size - 1, NumPool) + suffix;
}
