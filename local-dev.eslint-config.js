module.exports = {
    extends: [
        'eslint-config.js',
    ].map(require.resolve),
    rules: {
        'no-unused-vars': 'warn',
        'no-debugger': 'warn',
        'no-console': 'warn'
    }
};
