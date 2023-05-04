module.exports = {
  plugins: ["jest"],
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
  },
};
