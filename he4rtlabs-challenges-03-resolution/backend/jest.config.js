const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: path.join(__dirname, '/__tests__'),
  testMatch: ['**/__tests__/**/*.test.ts'],
};
