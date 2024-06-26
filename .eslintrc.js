module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    process: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-restricted-globals": ["error", "event", "fdescribe"],
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
  },
  overrides: [
    {
      files: ["**/service-worker.js"],
      globals: {
        self: "readonly",
      },
    },
  ],
};
