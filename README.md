# Term-Web

> :pager: A Simple Terminal UI That Run On The Web

![version](https://badgen.net/npm/v/term-web)
![license](https://badgen.net/npm/license/term-web)
![size](https://badgen.net/bundlephobia/minzip/term-web)
[![npm Downloads](https://img.shields.io/npm/dt/term-web.svg)](https://www.npmjs.com/package/term-web)

![Screenshot](./images/screenshot.png)

## Demo

[Checkout the demo](https://term-web.js.org) from Github Pages

## Install

Install with `npm`:

```bash
$ npm install term-web
```

Or install with `yarn`:

```bash
$ yarn add term-web
```

```js
import Term from 'term-web';
```

Or umd builds are also available:

```html
<script src="path/to/term-web.js"></script>
```

Or from jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/term-web/dist/term-web.js"></script>
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

    // Use the display recorder button
    recorder: true,

    // Type of recorder: gif or video
    recordType: 'gif',

    // Is it draggable
    draggable: true,

    // Font size
    fontSize: 13,

    // Font family
    fontFamily: 'Arial',

    // Watermark image url
    watermark: '',

    // Font color
    color: '#b0b2b6',

    // Background color
    background: 'rgb(42, 39, 52)',

    // Title on the topbar
    title: 'Term Web',

    // Entered prefix
    prefix: 'root@linux: ~ <d color="#00f501">$</d> ',

    // Welcome Message
    welcome: `Last login: ${new Date()}`,

    // Loading tips
    loading: (val) => '<d color="yellow">Loading...</d>',

    // Pixel ratio
    pixelRatio: window.devicePixelRatio,

    // Callback when command is not found
    notFound: (val) => `-bash: <d color='red'>${val}</d>: command not found`,
}
```

## API

#### term.input(text, isReplace)

-   `text` is the string to be displayed.
-   `isReplace` indicates whether to replace the previous record, default is `false`;

#### term.output(text, isReplace)

-   `text` is the string to be displayed.
-   `isReplace` indicates whether to replace the previous record, default is `false`;

#### term.type(text, isExecute)

-   `text` is the string to be displayed.
-   `isExecute` Whether to execute immediately after typing, default is `true`;

#### term.clear()

Clear all log

#### term.ask(text)

-   `text` is the question string to be displayed.

```js
term.ask('How are you ?').then((answer) => console.log(answer));
```

#### term.radio(list)

Output radio list

```js
term.radio([
    {
        key: 1,
        text: 'hi',
    },
    {
        key: 0,
        text: 'bye',
    },
]).then((key) => {
    console.log(key);
});
```

#### term.checkbox(list)

Output checkbox list

```js
term.checkbox([
    {
        key: 1,
        text: 'hi',
    },
    {
        key: 0,
        text: 'bye',
    },
]).then((key) => {
    console.log(key);
});
```

## Dynamically modify the UI

#### term.color

Modify font color

```js
term.color = '#fff';
```

#### term.background

Modify background color

```js
term.background = '#000';
```

#### term.watermark

Modify watermark image

```js
term.watermark = 'img.png';
```

#### term.width

Modify terminal width

```js
term.width = 500;
```

#### term.height

Modify terminal height

```js
term.height = 500;
```

## Style attribute

The output interface supports multiple styles through a html tag, currently does not support tag nesting effect

#### color

```js
term.output('<d color="#666">some text</d>');
```

#### background

```js
term.output('<d color="#fff" background="red">some text</d>');
```

#### border

Select the color attribute or fontColor attribute of the option by default

```js
term.output('<d color="yellow" border>some text</d>');
```

#### underline

Select the color attribute or fontColor attribute of the option by default

```js
term.output('<d color="yellow" underline>some text</d>');
```

#### del

Select the color attribute or fontColor attribute of the option by default

```js
term.output('<d color="yellow" del>some text</d>');
```

#### href

Link jump behavior

```js
term.output('<d href="www.google.com">google</d>');
```

## Common problem

#### How to use the font after the font file is loaded?

[MDN Web Docs - FontFace](https://developer.mozilla.org/en-US/docs/Web/API/FontFace/FontFace)

```js
Term.font('Font Name', 'path/to/font.ttf').then((font) => {
    var term = new Term({
        fontFamily: font.family,
        // ... options
    });
});
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
