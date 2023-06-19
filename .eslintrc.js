module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['standard', 'standard-jsx'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
  },
};
