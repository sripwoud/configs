const tsJestPreset = require('ts-jest/jest-preset')

/**
 * @type {import('ts-jest').JestConfigWithTsJest}
 */
module.exports = {
  ...tsJestPreset,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleDirectories: [
    'node_modules',
    '<rootDir>/node_modules',
    '<rootDir>/*/src',
    '<rootDir>/src',
  ],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testPathIgnorePatterns: [
    'coverage',
    'dist',
    'node_modules',
    'pnpm-lock.yaml',
  ],
  verbose: true,
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
