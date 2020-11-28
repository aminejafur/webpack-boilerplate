# 🗃 webpack Boilerplate

A minimal webpack boilerplate using Babel, PostCSS, Sass and PUG.JS with a small example, grid system and many other Features.

![Boiletplate demo](https://raw.githubusercontent.com/aminejafur/webpack-boilerplate/main/assets/home.png)

## Installation

Clone this repo.

```bash
git clone https://github.com/aminejafur/webpack-boilerplate.git
```

Move to folder.

```bash
cd webpack-boilerplate
```

Run npm or yarn install.

```bash
npm i
```

## Usage

### Development server

```bash
npm run dev
```

The development server will start at `localhost:9000` and a new tab will open in your default browser.

### Watching mode

```bash
npm run watch
```

### Production build

```bash
npm run build
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Pug.js](https://pugjs.org/api/getting-started.html)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [Autoprefixer](https://autoprefixer.github.io)
- Theme builder mixin demo at ['/css/parts/inc/mixins.scss'](https://raw.githubusercontent.com/aminejafur/webpack-boilerplate/main/project/css/parts/inc/mixins.scss)

```js
// main.scss
// theme_builder(themeName, themeMap)
```

- Auto template files discovery.

```js
// webpack.config.js
/*
 * A function to get all pug or html files with their local path
 * NB : any file with .ignore.{ext} will be ignored
 * dir : The path from where the templates files should be collected
*/
var getTemplates = function (dir) {...
```

- Hot reload or HMR exchanges, adds, or removes modules while an application is running, without a full reload. [preview](https://raw.githubusercontent.com/aminejafur/webpack-boilerplate/main/assets/hot_reload.png)

- Optimize your site or application using Lazy, or "on demand", loading. [preview](https://raw.githubusercontent.com/aminejafur/webpack-boilerplate/main/assets/lazy_load.png)

- Loading and renaming assets from css, js, pug and html files. [preview](https://raw.githubusercontent.com/aminejafur/webpack-boilerplate/main/assets/assetes_rename.png)

- Sass global import.

- Work separately and get a fully optimized template.

### Before

```
├───css
│   │   main.scss
│   │   style.css
│   └───parts
│       │   custom.scss
│       │   footer.scss
│       │   header.scss
│       └───inc
│               extends.scss
│               functions.scss
│               mixins.scss
│               responsive.scss
├───html
│   │   index.pug
│   │   just_html.html
│   │   more.pug
│   │
│   ├───contact
│   │       index.pug
│   └───includes
│           footer.ignore.pug
│           grid.ignore.pug
│           header.ignore.pug
│           layout.ignore.pug
│           mixins.ignore.pug
│           nav.ignore.pug
├───img
│       300.jpg
│       600x200.png
│       background.gif
│       contact.svg
└───js
    │   plugin.js
    └───loads
            noLazyLoad.js
            withLazyLoad.js
```

### After

```
│   app.js
│   index.html
│   just_html.html
│   lazyloadedalert.app.js
│   more.html
│   style.css
├───assets
│   ├───gif
│   │       4962dd623928824097dba370cc1361a1.gif
│   ├───images
│   │       e206a6d4a58ed35f9ce520d680d4556e.png
│   └───svg
│           42407f3f7c1291113cb887d93f115840.svg
└───contact
        index.html
```

## Dependencies

### Webpack

    "webpack": "^4.42.1"
    "webpack-cli": "^3.3.11"
    "webpack-dev-server": "^3.11.0"

### Babel

    "@babel/core": "^7.12.3"
    "@babel/preset-env": "^7.12.1"

### Loaders

    "babel-loader": "^8.1.0"
    "css-loader": "^5.0.0"
    "file-loader": "^6.2.0"
    "html-loader": "^1.3.2"
    "import-glob-loader": "^1.1.0"
    "postcss-loader": "^4.0.4"
    "pug-html-loader": "^1.1.5"
    "sass-loader": "^10.0.4"

### Plugins

    "html-webpack-plugin": "^4.5.0",
    "mini-css-extract-plugin": "^1.2.1"
    "uglifyjs-webpack-plugin": "^2.2.0"
    "autoprefixer": "^10.0.1"

## TODO

- [ ] Add ESlint.

## Resources

- GIF, SVG : <a href="https://freepik.com" target="_blank">Freepik</a>

### Star the repo to support the project :star:

### Feel free to fork, open pull requests and play around. Thanks! :heart:
