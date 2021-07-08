module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'linebreak-style': ['error', 'windows'],
    'jsx-quotes': [2, 'prefer-single'],
    'prettier/prettier': [
      'error',
      {
        jsxSingleQuote: true,
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
  },
};
