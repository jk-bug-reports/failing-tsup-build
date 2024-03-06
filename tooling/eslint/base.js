/** @type {import("eslint").Linter.Config} */
const config = {
  $schema: "https://json.schemastore.org/eslintrc.json",
  plugins: ["@typescript-eslint", "import", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  env: {
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: true,
  },
  rules: {
    // import
    "import/order": "error",
    "import/no-duplicates": ["error", { "prefer-inline": true }],
    "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    "import/no-mutable-exports": "error",
    "import/no-cycle": "error",
    // typescript
    // allow unused vars prefixed with `_`
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports", fixStyle: "separate-type-imports" },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    // numbers and booleans are fine in template strings
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
        allowBoolean: true,
      },
    ],
    // we sometimes use async functions that don't await anything
    "@typescript-eslint/require-await": "off",
    // make sure to `await` inside try…catch
    "@typescript-eslint/return-await": ["error", "in-try-catch"],
  },
  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.cjs",
    "**/*.eslintrc.cjs",
    ".next",
    "dist",
    "pnpm-lock.yaml",
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;
