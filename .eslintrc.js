module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        trailingComma: 'es5',
        tabWidth: 2,
        singleQuote: true,
        printWidth: 100,
      },
    ],


    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }],

    'no-console': 'warn',
    'no-nested-ternary': 'error',
    'no-debugger': 'warn',
    'arrow-body-style': ['error', 'as-needed'],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    'sort-imports': ['error', { ignoreDeclarationSort: true }]

  },
}
