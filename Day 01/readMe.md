### TailwindCSS

Integrate Methods

1. Using CDN Link (Content Deliver Network)
2. Using Tailwind CLI
3. Using PostCSS

### Installation Process

```sh
    npm i tailwindcss postcss autoprefixer
    npx tailwindcss init // create tailwind.config.js
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

### How to use in HTML file &mdash;

```html
<p class="text-sm ...">The quick brown fox ...</p>
<p class="text-base ...">The quick brown fox ...</p>
<p class="text-lg ...">The quick brown fox ...</p>
<p class="text-xl ...">The quick brown fox ...</p>
<p class="text-2xl ...">The quick brown fox ...</p>
```

#### Applying Conditionally &mdash;

- text-sm hover:text-base
- text-sm md:text-base

### Line Height &mdash;

- text-base/6
- text-base/7
- text-base/loose
- text-base/[17px]

| Class     | Properties                 |
| --------- | -------------------------- |
| text-xs   | font-size: 0.75rem; 12px   |
| -         | line-height: 1rem; 16px    |
| text-sm   | font-size: 0.875rem; 14px  |
| -         | line-height: 1.25rem; 20px |
| text-base | font-size: 1rem; 16px      |
| -         | line-height: 1.5rem; 24px  |
| text-lg   | font-size: 1.125; 18px     |
| -         | line-height: 1.75rem; 28px |
| text-xl   | font-size: 1.25rem; 20px   |
| -         | line-height: 1.75rem; 28px |

<hr>

| Class    | Properties                 |
| -------- | -------------------------- |
| text-2xl | font-size: 1.5rem; 24px    |
| -        | line-height: 2rem; 32px    |
| text-3xl | font-size: 1.875rem; 30px  |
| -        | line-height: 2.25rem; 36px |
| text-4xl | font-size: 2.25; 36px      |
| -        | line-height: 2.5rem; 40px  |
| text-5xl | font-size: 3rem; 48px      |
| -        | line-height: 1;            |
| text-6xl | font-size: 3.75rem; 60px   |
| -        | line-height: 1;            |
| text-7xl | font-size: 4.5rem; 72px    |
| -        | line-height: 1;            |
| text-8xl | font-size: 6rem; 96px      |
| -        | line-height: 1;            |
| text-9xl | font-size: 8rem; 128px     |
| -        | line-height: 1;            |

#### Customizing your theme &mdash;

- You can configure your won custom set of font size utilities using the `theme.fontSize` seciton of your `tailwind.config.js` file

```js
module.exports = {
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
};
```

- Tailwind’s default theme configures a sensible default `line-height` for each `font-size` utility. You can configure your own default line heights when using custom font sizes by defining each size using a tuple of the form `[fontSize, lineHeight]` in your `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
  },
};
```

- You can also specify a default line height using the object syntax, which allows you to also provide default `letter-spacing` and `font-weight` values. You can do this using a tuple of the form `[fontSize, { lineHeight?, letterSpacing?, fontWeight? }]`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontSize: {
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
    },
  },
};
```

### Arbitrary values &mdash;

If you need to use a one-off `font-size` value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<p class="text-[14px]">Paragraph</p>
```
