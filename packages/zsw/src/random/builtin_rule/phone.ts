import { randomInt, randomStr } from '../base';

export const phoneRule = (size = 11) => {
    const prefixTemp = ['177', '138', '158'];
    const prefix = prefixTemp[randomInt(1, prefixTemp.length - 1)];
    const len = size - prefix.length;
    return prefix + randomStr('@number', len);
};
