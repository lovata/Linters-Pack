module.exports = {
    extends: [
        '.eslintrc.js',
    ].map(require.resolve),
    rules: {
        'no-unused-vars': 'warn',
        'no-debugger': 'warn',
        'no-console': 'warn'
    }
};
