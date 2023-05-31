import { getRandomIndex, getString } from "../../core/basic";

const getPrefix = () => {
    const prefixs = ['134', '126', '173'];
    return prefixs[getRandomIndex(prefixs.length)];
}

export const getPhone = (size = 11) => {
    const prefix = getPrefix();
    const len = size - prefix.length;

    return getString(len, len, '1234567890');
}
