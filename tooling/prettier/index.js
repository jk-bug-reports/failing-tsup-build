import { fileURLToPath } from "url";

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig } */
const baseConfig = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  endOfLine: "lf",
};

/** @type { PrettierConfig | TailwindConfig } */
const config = {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: fileURLToPath(
    new URL("../../tooling/tailwind/index.ts", import.meta.url),
  ),
  tailwindFunctions: ["cn", "cva"],
};

export default config;
