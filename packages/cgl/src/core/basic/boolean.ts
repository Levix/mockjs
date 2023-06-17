const getBool = (rate = 0.5) => {
    return Math.random() > (1 - rate);
}

export {
    getBool,
};
