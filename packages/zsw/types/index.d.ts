type OverloadParameters<T> = T extends (...args: infer P) => any
    ? P extends [infer P1, ...infer Reset]
        ? [P1, ...OverloadParameters<(...args: Reset) => ReturnType<T>>]
        : []
    : [];
