[<img src="./edgie.svg" height="256"/>](https://www.npmjs.com/package/postcss-edgie)

[![](https://img.shields.io/npm/v/postcss-edgie.svg)](https://www.npmjs.com/package/postcss-edgie)

---

Edgie is a PostCSS plugin to easily target Edge and IE.

Built out of frustration with trying deal with specific Edge and IE issues in modern projects.

**Note:** This only targets the pre-Chromium version of Edge (v44)

## Getting started

```
npm install --save postcss-edgie
```

## Usage

**postcss.config.js**

```js
module.exports = {
  plugins: [
    require('postcss-edgie'),
  ],
}
```

**style.css**

##### Input

```css
.button {
  background: red;

  @edgie {
    background: blue;
  }
}
```

##### Output

```css
.button {
  background: red;
}

@supports (-ms-ime-align:auto) {
  .button {
    background: blue;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .button {
    background: blue;
  }
}
```
