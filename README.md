# eslint-config-lovata

![NPM Version](https://img.shields.io/npm/v/eslint-config-lovata.svg?style=flat) [![Build Status](https://travis-ci.com/lovata/eslint-config-lovata.svg?branch=master)](https://travis-ci.com/lovata/eslint-config-lovata) ![Dependencies](https://img.shields.io/librariesio/github/lovata/eslint-config-lovata.svg?style=flat)

This package provides LOVATA's ESLint and StyleLint shared configs.

**Quick Jump**

<!-- TOC depthFrom:2 -->

- [Installation](#installation)
- [StyleLint](#stylelint)
    - [1. Setup StyleLint config file](#1-setup-stylelint-config-file)
    - [2. Add npm script for linting CSS](#2-add-npm-script-for-linting-css)
    - [3. Setup webpack config](#3-setup-webpack-config)
- [ESLint](#eslint)
- [Full list of dependencies](#full-list-of-dependencies)

<!-- /TOC -->

## Installation

*Note: To run all installation commands, [Node.js](http://nodejs.org) and [npm](https://npmjs.com) must be installed.*

```bash
npm install --save-dev eslint-config-lovata
```

Configs in the package provide a list of rules that can be overwritten by your project's config options. Note that each lint tool **must be configured separately**.

Check out the example of how to use provided configs in [LOVATA's October CMS Starter Kit on Laravel Mix](https://github.com/lovata/octobercms-starter-kit-laravel-mix) repo.

## StyleLint

You don't need to run `npm i stylelint --save-dev` inside your project's folder. StyleLint is a production dependency for this package.

But you **do need StyleLint installed globally** for your text editor. So, make sure you did `npm i stylelint --global` earlier and you installed [editor's plugin](https://stylelint.io/user-guide/complementary-tools/#editor-plugins) (if it's needed) to highlight StyleLint errors on the fly.

### 1. Setup StyleLint config file

Add `.stylelintrc` file in the root of your project with the following settings:

```javascript
{
  "extends": ["eslint-config-lovata/.stylelintrc.yml"],
  "rules": {
      // Your override rules (stylelint.io/user-guide/rules/)
  }
}
```

*For more config options for StyleLint go to [StyleLint configuration page](https://stylelint.io/user-guide/configuration/).*

### 2. Add npm script for linting CSS

Update your `package.json` for styles lint script:

```javascript
"scripts": {
    "lint:css": "./node_modules/.bin/stylelint ./**/*.css --fix"
}
```

*For more CLI options go to [StyleLint CLI page](https://stylelint.io/user-guide/cli/).*

Now project's linting for CSS is available via `npm run lint:css` in terminal.

### 3. Setup webpack config

There is [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin) to help you with linting CSS while you develop. Add it to your project:

```bash
npm install stylelint-webpack-plugin --save-dev
```

Then add the plugin to webpack's config file:

```javascript
const StyleLintPlugin = require('stylelint-webpack-plugin');
// ...
    plugins: [
        new StyleLintPlugin({
            files: ['**/*.css'],
            configFile: '.stylelintrc',
        }),
    ],
// ...
```

*For more stylelint-webpack-plugin options go to [stylelint-webpack-plugin Github page](https://github.com/webpack-contrib/stylelint-webpack-plugin).*

## ESLint

It based on [Airbnb's ESLint config](https://www.npmjs.com/package/eslint-config-airbnb) npm package

## Full list of dependencies

- StyleLint ![Eslint](https://img.shields.io/npm/dependency-version/eslint-config-lovata/stylelint.svg?style=flat)
- Eslint ![Eslint](https://img.shields.io/npm/dependency-version/eslint-config-lovata/eslint.svg?style=flat)
