module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    semi: [2, 'never'],
    'no-bitwise': 'off',
    'no-undef': 'off',
  },
}
