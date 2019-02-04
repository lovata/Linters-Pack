module.exports = {
  extends: [
    'eslint-config-airbnb',
    'plugin:eslint-comments/recommended',
   ].map(require.resolve),
  rules: {
    'no-console': 'error',
    'eslint-comments/no-unused-disable': 'error'
  }
};
