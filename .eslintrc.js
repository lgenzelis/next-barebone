module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'], // we need this for rules that require type information, such as restrict-plus-operands
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // show prettier errors as ESLint errors. This should be the last configuration in the extends array.
  ],
  rules: {
    curly: ['error', 'multi-line'],
    eqeqeq: 'error',
    'no-throw-literal': 'error',
    'require-await': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'react-hooks/rules-of-hooks': 'error', // checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // checks effect dependencies
    'react/prop-types': 'off', // this rules conflicts with the use of React.FC<props>
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'all', argsIgnorePattern: '^_' }],
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/await-thenable': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/group-exports': 'error',
    'import/exports-last': 'error',
  },
}
