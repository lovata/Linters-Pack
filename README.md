# eslint-config-lovata

![NPM Version](https://img.shields.io/npm/v/eslint-config-lovata.svg?style=flat) [![Build Status](https://travis-ci.com/lovata/eslint-config-lovata.svg?branch=master)](https://travis-ci.com/lovata/eslint-config-lovata) ![Dependencies](https://img.shields.io/librariesio/github/lovata/eslint-config-lovata.svg?style=flat)

This package provides LOVATA's [ESLint](https://eslint.org/) and [StyleLint](https://stylelint.io/) shared configs. It includes a list of plugins and defined rules for each linter tool.

**Quick Jump** 

<!-- TOC depthFrom:2 -->

- [Installation](#installation)
- [Usage](#usage)
- [StyleLint](#stylelint)
    - [1. Setup StyleLint config file](#1-setup-stylelint-config-file)
    - [2. Add npm script for linting CSS](#2-add-npm-script-for-linting-css)
    - [3. Setup webpack config](#3-setup-webpack-config)
- [ESLint](#eslint)
    - [1. Setup ESLint config file](#1-setup-eslint-config-file)
    - [2. Setup local developer's ESLint config file](#2-setup-local-developers-eslint-config-file)
    - [3. Add npm script for linting JS](#3-add-npm-script-for-linting-js)
    - [4. Setup webpack config](#4-setup-webpack-config)
- [Full list of dependencies and plugins](#full-list-of-dependencies-and-plugins)

<!-- /TOC -->

## Installation

*Note: To run all installation commands, [Node.js](http://nodejs.org) and [npm](https://npmjs.com) must be installed.*

Install with npm:

```bash
npm install --save-dev eslint-config-lovata
```

## Usage

Configs in the package provide a list of rules that can be overwritten by your project's config options. Note that each lint tool **must be configured separately**.

Check out the example of how to use provided configs in [LOVATA's October CMS Starter Kit on Laravel Mix](https://github.com/lovata/octobercms-starter-kit-laravel-mix) repo.

## StyleLint

You don't need to run `npm i stylelint --save-dev` inside your project's folder. StyleLint is a production dependency for this package.

But you **do need StyleLint installed globally** for your text editor. So, make sure you did `npm i stylelint --global` and installed [editor's StyleLint plugin](https://stylelint.io/user-guide/complementary-tools/#editor-plugins) (if it's needed) to highlight StyleLint errors on the fly.

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

*For more config options go to [StyleLint configuration page](https://stylelint.io/user-guide/configuration/).*

### 2. Add npm script for linting CSS

To make project's linting for CSS available via `npm run lint:css`, update your `package.json` script section:

```javascript
"scripts": {
    "lint:css": "./node_modules/.bin/stylelint ./**/*.css --fix"
}
```

*For more CLI options go to [StyleLint CLI page](https://stylelint.io/user-guide/cli/).*



### 3. Setup webpack config

There is [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin) to help you with linting CSS while you develop. Install the plugin to your project:

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

*For more options go to [stylelint-webpack-plugin Github page](https://github.com/webpack-contrib/stylelint-webpack-plugin).*

## ESLint

As well as for StyleLint, you don't need to run `npm i eslint --save-dev` inside your project's folder. ESLint is a production dependency for this package.

But, again, you **do need ESLint installed globally** for your text editor. So, make sure you did `npm i eslint --global` and installed [editor's ESLint plugin](https://eslint.org/docs/user-guide/integrations#editors) (if it's needed) to highlight ESLint errors on the fly.

### 1. Setup ESLint config file

Add `.eslintrc` file in the root of your project with the following settings:

```javascript
{
  "extends": ["eslint-config-lovata/.eslintrc"],
  "rules": {
    // Your override rules (eslint.org/docs/rules/)
  }
}
```

*For more config options go to [ESLint configuration page](https://eslint.org/docs/user-guide/configuring).*

### 2. Setup local developer's ESLint config file

Some of the rules in this config are "too strict" to be comfortable with when you are doing something locally on your machine. Something that is not supposed to be in the repo, but you'd like to have it for a while before commit. It could be because you are debugging something, or you want to check as quick as possible if the idea is working.

For example, `console.log()` is not allowed in this config and will throw an error [`no-console`](https://eslint.org/docs/rules/no-console). If you'd like to allow to do not-so-dangerous-but-useful things locally, you may create another config file, extend project's "too strict" config and decrease the rules from `error` to `warn` level.

To do so, add `.local.eslintrc` file in the root of your project with the following settings:

```javascript
{
  "extends": [
    ".eslintrc",
    "eslint-config-lovata/.local.eslintrc"
  ],
  "rules": {
    // Your "warn" rules (eslint.org/docs/rules/)
  }
}
```

*For more rule options go to [ESLint configuration page](https://eslint.org/docs/user-guide/configuring#configuring-rules).*

### 3. Add npm script for linting JS

To make project's linting for JS available via `npm run lint:js`, update your `package.json` script section:

```javascript
"scripts": {
    "lint:js": "./node_modules/.bin/eslint ./**/*.js --fix"
}
```

*For more CLI options go to [ESLint CLI page](https://eslint.org/docs/user-guide/command-line-interface).*

### 4. Setup webpack config

There is [`eslint-loader`](https://github.com/webpack-contrib/eslint-loader) package to help you with linting JS while you develop. Install to your project:

```bash
npm install eslint-loader --save-dev
```

Then add the loader to webpack's config file:

```javascript
//...
const isLocal = process.env.LOCAL_DEV || false;
// ...
  rules: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader",
    options: {
      configFile: isLocal ? '.local.eslintrc' : '.eslintrc',
    }
  }]
// ...
```

*For more loader's options go to [eslint-loader Github page](https://github.com/webpack-contrib/eslint-loader#options).*

And don't forget to add `LOCAL_DEV` environment variable to your npm script for local development:

```javascript
"scripts":{
  "dev": "cross-env NODE_ENV=development LOCAL_DEV=local ./node_modules/.bin/webpack --watch",
}
```

*Note: It is recommended to use [`cross-env`](https://www.npmjs.com/package/cross-env) package for scripts with environment variables*

## Full list of dependencies and plugins

- StyleLint ![Eslint](https://img.shields.io/npm/dependency-version/eslint-config-lovata/stylelint.svg?style=flat)
- Eslint ![Eslint](https://img.shields.io/npm/dependency-version/eslint-config-lovata/eslint.svg?style=flat)

It based on [Airbnb's ESLint config](https://www.npmjs.com/package/eslint-config-airbnb) npm package
