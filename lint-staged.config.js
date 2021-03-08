module.exports = {
  '*.{js,ts,tsx}': ['eslint --fix'],
  '*.{ts,tsx}': [() => 'tsc --noEmit'], // we use the "function syntax" because otherwise tsconfig.json gets ignored (https://github.com/okonet/lint-staged/issues/825)
}
