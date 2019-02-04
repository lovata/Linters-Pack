module.exports = {
    extends: [
        'eslint-config-airbnb',
        'plugin:eslint-plugin-eslint-comments'
    ].map(require.resolve),
    rules: {
        'no-console': 'error',
        'eslint-comments/no-unused-disable': 'error'
    }
};
