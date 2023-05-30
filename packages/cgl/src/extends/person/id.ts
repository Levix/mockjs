import { getBool, getChar, getString } from '../../core/basic';

const NumPool = '1234567890'
export const getId = (size = 11) => {
    const suffix = getBool() ? getChar(NumPool) : getChar('XZ');
    return getString(size - 1, size - 1, NumPool) + suffix;
}
