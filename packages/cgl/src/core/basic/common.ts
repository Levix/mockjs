export const getRandomInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomIndex = (size: number) => {
    return getRandomInRange(0, size - 1);
}
