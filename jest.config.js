/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy', // needed so jest can understand import './App.scss'-like webpack imports
    },
};
