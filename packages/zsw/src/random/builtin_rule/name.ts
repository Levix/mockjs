import { randomChar, randomStr } from '../base';

export const randomEnName = () => {
    const firstName = randomChar('@upper') + randomStr('@lower', 1, 4);
    const lastName = randomChar('@upper') + randomStr('@lower', 1, 4);
    return firstName + ' ' + lastName;
};

export const randomCnName = () => {
    const firstName = randomChar('赵黄周吴王李张刘陈杨');
    const lastName = randomStr('洋勇杰涛', 1, 3);
    return firstName + lastName;
};
