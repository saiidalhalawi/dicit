module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'prettier',
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  env: { browser: true, node: true, es6: true, jest: true },
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["warn"],
    "@typescript-eslint/prefer-interface": 0
  }
};
