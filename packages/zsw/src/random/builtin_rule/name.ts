import { randomChar, randomString } from '../basic';

export const enNameRule = () => {
    const firstName = randomChar('@upper') + randomString('@lower', 1, 4);
    const lastName = randomChar('@upper') + randomString('@lower', 1, 4);
    return firstName + ' ' + lastName;
};

export const cnNameRule = () => {
    const firstName = randomChar('赵黄周吴王李张刘陈杨');
    const lastName = randomString('洋勇杰涛', 1, 3);
    return firstName + lastName;
};
