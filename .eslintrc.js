module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'plugin:react/recommended',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['warn', 2],
    'no-unused-vars': ['off', { vars: 'local' }],
    'prefer-const': 'warn',
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'space-infix-ops': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
};