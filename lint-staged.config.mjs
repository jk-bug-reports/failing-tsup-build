/** @type {import('lint-staged').default} */
export default {
  "*.{js,jsx,ts,tsx,mjs,html,css,json,yml,yaml,md}":
    "prettier --write --ignore-path .gitignore",
};
