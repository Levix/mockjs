module.exports = {
    testMatch: ['**/*.test.ts'],
    testFramework: {
        name: 'jest',
        options: {
            preset: 'ts-jest',
            verbose: true,
        },
    },
};
