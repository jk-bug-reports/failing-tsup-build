import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  // sourcemap: true,
  clean: true,
  dts: true,
  // onSuccess: "tsc --emitDeclarationOnly --declaration",
});
