# Term-UI

> :pager: A Simple Terminal UI That Run On The Web

[![Build Status](https://www.travis-ci.org/zhw2590582/term-ui.svg?branch=master)](https://www.travis-ci.org/zhw2590582/term-ui)
![version](https://badgen.net/npm/v/term-ui)
![license](https://badgen.net/npm/license/term-ui)
![size](https://badgen.net/bundlephobia/minzip/term-ui)
[![npm Downloads](https://img.shields.io/npm/dt/term-ui.svg)](https://www.npmjs.com/package/term-ui)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/354e9953b70a4791a5a46194d587c707)](https://www.codacy.com/app/zhw2590582/term-ui?utm_source=github.com&utm_medium=referral&utm_content=zhw2590582/term-ui&utm_campaign=Badge_Grade)
[![dependencies Status](https://david-dm.org/zhw2590582/term-ui/status.svg)](https://david-dm.org/zhw2590582/term-ui)

![Screenshot](./images/screenshot.png)

## Demo

[Checkout the demo](https://zhw2590582.github.io/term-ui/) from Github Pages

## Install

Install with `npm`:

```bash
$ npm install term-ui
```

Or install with `yarn`:

```bash
$ yarn add term-ui
```

```js
import Term from 'term-ui';
```

Or umd builds are also available:

```html
<script src="path/to/term-ui.js"></script>
```

Or from jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/term-ui/dist/term-ui.js"></script>
```

Will expose the global variable to `window.Term`.

## Usage

```html
<div id="term"></div>
```

```js
var term = new Term({
    // ... options
    container: '#term',
});
```

## Options

```js
{
    // Mounted dom element
    container: '#term',

    // Initial size
    width: 600,
    height: 500,

    // Custom actions
    actions: [],

    // Options when parsing parameters with minimist
    // https://github.com/substack/minimist
    parseOpt: {},

    // Use the display recorder button
    recorder: true,

    // Border radius
    borderRadius: 5,

    // Font size
    fontSize: 13,

    // Font family
    fontFamily: 'Arial',

    // Font color
    fontColor: '#b0b2b6',

    // Box shadow
    boxShadow: 'rgba(0, 0, 0, 0.55) 0px 20px 68px',

    // Background color
    backgroundColor: 'rgb(42, 39, 52)',

    // Title on the topbar
    title: 'Term UI',

    // Entered prefix
    prefix: 'root@linux: ~ <d color="#00f501">$</d> ',

    // Welcome Message
    welcome: `Last login: ${new Date()}`,

    // Loading tips
    loading: '<d color="yellow">Loading...</d>',

    // Pixel ratio
    pixelRatio: window.devicePixelRatio,

    // Callback when command is not found
    notFound: (val) => `-bash: <d color='red'>${val}</d>: command not found`,
}
```

## API

The main commonly used methods in the example are two `term.input` and`term.input`.

-   `text` is the string to be displayed.
-   `isReplace` indicates whether to replace the previous record, default is `false`;

```js
term.input(text, isReplace);
term.output(text, isReplace);
```

#### Example

```js
term.input('foo');
// output => 'foo'

term.input('bar', true);
// Replace the previous 'foo' with 'bar'
```

## Donations

We accept donations through these channels:

-   [Paypal](https://www.paypal.me/harveyzack)
-   [WeChat Pay](./images/wechatpay.jpg)
-   [Alipay](./images/alipay.jpg)

## QQ Group

![QQ Group](./images/qqgroup.png)

## License

MIT © [Harvey Zack](https://sleepy.im/)
