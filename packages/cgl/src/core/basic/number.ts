const MAX_INT = Number.MAX_VALUE;

const getInteger = (min = -MAX_INT, max = MAX_INT) => {
    return Math.round(Math.random() * (max - min)) + min;
};

const getFloat = (min = 0, max = MAX_INT, dmin = 0, dmax = 1) => {
    const randomFloat = Math.random() * (max - min) + min;
    const dLen = Math.floor(Math.random() * (dmax - dmin + 1)) + dmin;
    const roundedFloat = randomFloat.toFixed(dLen);

    return parseFloat(roundedFloat);
};

export {
    getInteger,
    getFloat,
}
