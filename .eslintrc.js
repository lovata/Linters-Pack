module.exports = {
    extends: [
        'eslint-config-airbnb',
    ].map(require.resolve),
    plugins: [
        'eslint-comments',
    ].map(require.resolve),
    rules: {
        'no-console': 'error',
        'eslint-comments/no-unused-disable': 'error'
    }
};
