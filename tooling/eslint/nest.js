/** @type {import("eslint").Linter.Config} */
const config = {
  parserOptions: {
    sourceType: "module",
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: ["./src/core/**/*.ts"],
      rules: {
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-enum-comparison": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-misused-promises": "off",
      },
    },
    {
      files: ["./src/main.ts"],
      rules: {
        "@typescript-eslint/no-floating-promises": "off",
      },
    },
    {
      // Enables mocking functions that reference `this`
      // https://stackoverflow.com/q/59134100/7585847
      files: ["./src/**/*.spec.ts"],
      rules: {
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};

module.exports = config;
