import { getChar, getWord } from '../../core/basic';

export const getFirstName = () => {
    return getChar().toUpperCase() + getWord(1, 5);
}

export const getLastName = () => {
    return getChar().toUpperCase() + getWord(1, 5);
}

export const getName = () => {
    const first = getFirstName();
    const last = getLastName();

    return first + ' ' + last;
}

const CFPool = '张李王赵孙周吴九郑';
export const getCFirstName = () => {
    return getChar(CFPool);
}

const CLPool = '三四五六七八九十';
export const getCLastName = () => {
    return getWord(1, 3, CLPool);
}

export const getCName = () => {
    const first = getCFirstName();
    const last = getCLastName();

    return first + ' ' + last;
}
