module.exports = {
  parser: '@typescript-eslint/parser',
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['node_modules'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        'object-property-newline': true,
      },
    ],
    'object-property-newline': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  plugins: ['import', 'jsx-a11y', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', //
      },
    },
  ],
}
