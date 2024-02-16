module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "plugin:css/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:css/standard",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["@typescript-eslint", "css"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {},
};
