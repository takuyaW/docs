# Monaca Docs

These docs are built using [Hugo](https://gohugo.io/). If you do not have it installed, follow the instructions on the Hugo site.

## Development
Hugo comes with a built-in server which watches for file changes. To use it, just run:

```
hugo server
```

You can then access it in your browser at `http://localhost:1313`.

### Theme
The Monaca docs use a customised fork of the [DocDock theme](https://github.com/vjeantet/hugo-theme-docdock). The CSS for this theme is generated using SASS, which Hugo doesn't support as part of its build process. So, we need to watch and build it separately. First, install the dependencies by running `npm install`. Then you can watch it for changes by running:

```
npm run watch-sass
```

## Release
To build for release, just do the following:

```
npm run build-sass && hugo
```

This will build the docs into the `public` folder.

## Troubleshooting

### Table of contents shows "HAHAHUGOSHORTCODE"
This is caused by using shortcodes in a heading on the page. This causes Hugo to parse it incorrectly, and the result is a the table of contents entries containing the string "HAHAHUGOSHORTCODE". It is a [known issue](https://github.com/gohugoio/hugo/issues/4114).