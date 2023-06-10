import { randomBoolean, randomChar, randomString } from '../basic';

export const idRule = (size = 11) => {
    const suffix = randomBoolean() ? randomChar('@number') : randomChar('XZ');
    return randomString('@number', 9) + suffix;
};
