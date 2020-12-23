module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['eslint:recommended', 'react-app', 'plugin:jsx-a11y/recommended', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['node_modules'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
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
  },
  plugins: ['import', 'jsx-a11y', 'prettier'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
