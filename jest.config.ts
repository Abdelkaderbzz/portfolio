


import type { JestConfigWithTsJest } from 'ts-jest/dist/types';




const config: JestConfigWithTsJest = {

  preset: 'ts-jest',

  testEnvironment: 'jsdom',

  verbose: true,

  // forceExit: true,

  clearMocks: true,

  resetMocks: true,

  restoreMocks: true,

};




export default config;


