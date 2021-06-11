// const {defaults} = require('jest-config');

module.export = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/client'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/client/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ], // setupFiles before the tests are ran
};
