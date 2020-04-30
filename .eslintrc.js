module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:jsdoc/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        paths: ['@types'],
      },
    },
  },
  rules: {
    'max-len': ['error', { 'code': 79, 'comments': 79 }],
    semi: ['error', 'never'],
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/named': 'off', // Does not work well with TS
    camelcase: ['off', { ignoreDestructuring: true }],
    'no-unused-expressions': ['off', { allowShortCircuit: true }],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'space-before-function-paren': ['error', 'always'],
    'no-unused-vars': ['error', { varsIgnorePattern: '^\\\$' }],
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: '^\\\$',
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
    }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'array-element-newline': ['error', { 'multiline': true }],
    'template-tag-spacing': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'semi', requireLast: false },
    }],
  },
}
