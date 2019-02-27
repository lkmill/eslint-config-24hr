'use strict';

module.exports = {
    'extends': [
        'eslint:recommended',
        './rules/language.js',
        './rules/formatting.js',
    ],

    'parserOptions': {
        'ecmaVersion': 2018,
    },

    'env': {
        'es6': true,
    },
};
