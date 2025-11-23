// Setup file for Vitest
// This file runs before all tests

import '@testing-library/jest-dom/vitest';

// Mocking localStorage for tests
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mocking fetch API
Object.defineProperty(global, 'fetch', {
  value: (url: string) => {
    return Promise.resolve({
      json: () => Promise.resolve({}),
      text: () => Promise.resolve(''),
    });
  },
  writable: true,
});
