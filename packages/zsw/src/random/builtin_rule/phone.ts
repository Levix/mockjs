import { randomInt, randomString } from '../basic';

export const phoneRule = (size = 11) => {
    const prefixTemp = ['177', '138', '158'];
    const prefix = [randomInt(1, prefixTemp.length)];
    const len = size - prefix.length;
    return randomString('@number', len);
};
