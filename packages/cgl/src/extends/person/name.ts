import { getChar, getWord } from '../../core/basic';

// 获取姓
export const getFirstName = () => {
    return getChar('ABCDEFGHIJKLMOPQRSTUVWXYZ') + getWord(1, 4);
}

// 获取名
export const getLastName = () => {
    return getChar('ABCDEFGHIJKLMOPQRSTUVWXYZ') + getWord(1, 4);
}

// 获取姓名
export const getName = () => {
    const first = getFirstName();
    const last = getLastName();

    return first + ' ' + last;
}

const CFPool = '张李王赵孙周吴九郑';
// 获取中文姓
export const getCFirstName = () => {
    return getChar(CFPool);
}

const CLPool = '三四五六七八九十';
// 获取中文名
export const getCLastName = () => {
    return getWord(1, 3, CLPool);
}

// 获取中文姓名
export const getCName = () => {
    const first = getCFirstName();
    const last = getCLastName();

    return first + ' ' + last;
}
