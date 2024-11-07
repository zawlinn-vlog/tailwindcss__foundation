### Installation Process

```sh
    npm i tailwindcss postcss autoprefixer
    npx tailwindcss init // create tailwind.config.js
```

In `postcss.config.js` &mdash;

```js
const autoprefixer = require("autoprefixer");
const { plugin } = require("postcss");

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

In `tailwind.config.js` &mdash;

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontWeight: {
      dark: "900",
    },
    extend: {
      // fontWeight: {
      //   dark: "900",
      // },
    },
  },
  plugins: [],
};
```

In `package.json` &mdash;

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tailwind": "tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css -w",
    "dev": "live-server",
    "start": "npm-run-all --parallel dev tailwind "
  }
}
```

### FONT WEIGHT &mdash;

| Class           | Properties        |
| --------------- | ----------------- |
| font-thin       | font-weight: 100; |
| font-extralight | font-weight: 200; |
| font-light      | font-weight: 300; |
| font-normal     | font-weight: 400; |
| font-medium     | font-weight: 500; |
| font-semibold   | font-weight: 600; |
| font-bold       | font-weight: 700; |
| font-extrabold  | font-weight: 800; |
| font-black      | font-weight: 900; |

#### How to use in HTML file &mdash;

```html
<p class="font-light ...">The quick brown fox ...</p>
<p class="font-normal ...">The quick brown fox ...</p>
<p class="font-medium ...">The quick brown fox ...</p>
<p class="font-semibold ...">The quick brown fox ...</p>
<p class="font-bold ...">The quick brown fox ...</p>
```

### Customizing your theme &mdash;

By default, Tailwind provides nine `font-weight` utilities. You change, add, or remove these by editing the `theme.fontWeight` section of your Tailwind config.

```js
module.exports = {
  theme: {
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
};
```
