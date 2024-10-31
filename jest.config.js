module.exports = {
    preset: 'react-native',
    roots: ['./tests'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './jest.babel.config.js' }], 
    },
    transformIgnorePatterns: [
        'node_modules/(?!(@react-native|react-native|@react-native-community|@expo|expo.*|firebase|@firebase)/)',
    ],
    testMatch: [
        '**/?(*.)+(test).ts?(x)',
    ],
    
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
