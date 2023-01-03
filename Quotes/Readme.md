# Quotes App

## Tailwind installation 
<p>Inside your react application</p>

```json
//Install tailwindcss via npm, and create your tailwind.config.js file.

1. npm install -D tailwindcss postcss autoprefixer
2.npx tailwindcss init

```

## 1. Add Tailwind to your PostCSS configuration
```javascript
//Add tailwindcss and autoprefixer to your postcss.config.js file, or wherever PostCSS is configured in your project.

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

## 2. Configure your template paths
<b>/src/style.css</b>
```json

//Add the paths to all of your template files in your tailwind.config.js file.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```


## 4. Add the Tailwind directives to your CSS
```js

//Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

@tailwind base;
@tailwind components;
@tailwind utilities;
```


## 5. Start your build process
```js

//Run your build process with npm run dev or whatever command is configured in your package.json file.

npm run dev

```


