# The Ghostwriter Theme for Ghost 4.x

[![Ghost version](https://img.shields.io/badge/Ghost-4.x-brightgreen)](https://github.com/TryGhost/Ghost)
[![Demo](https://img.shields.io/badge/Demo-Online-yellow.svg)](https://nikolas-knickrehm.ghost.io/)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.me/nikolasknickrehm)

> Modern, lightweight and Open Source - A perfect match for Ghost 

This page contains everything you need to set up & customize the Ghostwriter theme for your own blog.

![screenshot-desktop](https://raw.githubusercontent.com/nknickrehm/Ghostwriter/main/assets/screenshot-dektop.png)

# 📺 Demo
[My personal blog](https://nikolas-knickrehm.ghost.io) is using the latest version of the Ghostwriter theme. 

On [this](https://nikolas-knickrehm.ghost.io/test-page/) hidden page you can experience most content types available in Ghost in action.

# 🔥 Features
* Developed for the most recent version of Ghost (4.x)
* Fully responsive (Smartphone, Tablet & Desktop)
* Choose your own accent color via the Ghost Admin UI  
* Multi-language support
* Easy to customize & extend
* Syntax highlighting (using [Prism.js](https://prismjs.com/index.html))
* Icons (using [Fontawesome 5 Free](https://fontawesome.com/))
* Support for wide and full width images
* Members support (Subscribing to Newsletter)

# 🔮 Feature Roadmap
The roadmap for future features is managed [here](https://github.com/nknickrehm/Ghostwriter/projects/1) on Github. 
If you have any ideas or suggestions just [open up a new issue](https://github.com/nknickrehm/Ghostwriter/issues/new).

# 🌍 Localization
Currently, the theme comes shipped with English and German localization. You can change the language in the Ghost Admin UI by entering the language code of your choice (`Settings` -> `General` -> `Publication Language`).

| Language | Code | Status | Translator  |
|----------|------|--------|-------------|
| English  | en   | 100%   | @nknickrehm |
| German   | de   | 100%   | @nknickrehm |

# 🙏 Why is my language not supported?
Unfortunately I am only fluid in two languages, so I am relying on others to add more translations in the future. If you can spare a few minutes, your help would be greatly appreciated!

All you need to do is create a little pull request containing a translation file (less than 30 phrases). You can just copy the file `./locales/en.json` to `./locales/{your language code}.json` ([list of language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) and add the translated values on the right-hand side of the colons like this:
```
"This would be super awesome of you!": "Das wäre mega stark von dir!",
```

# 🚀 Setup the Ghostwriter theme
The easiest way to set up the theme is by downloading the [latest release](https://github.com/nknickrehm/Ghostwriter/releases/latest) of Ghostwriter and uploading the Zip file to your Ghost blog (`Settings` -> `Theme` -> `Upload a theme`).

# Customization
You have a lot of options to customize the theme. Since everything is Open Source you can modify the theme however you like. I am very curious what people will make out of it so definitely show me your variation of it!

Every customization involving code changes require you to clone the repository and setup [Node.js 14](https://nodejs.org/en/download/) + [Yarn](https://classic.yarnpkg.com/en/docs/install/). After that you must issue the command `yarn install` so that all the dependencies are set up automatically for you.

After you have made your changes you can build the theme with the command:
```
NODE_ENV=production yarn zip
```
This will output the theme Zip file in `./dist/ghostwriter.zip`.

## 🌈 Colors
The easiest way to customize the theme without writing or changing **any** code at all is by selecting the `Accent color` in (`Settings` -> `Branding` -> `Accent color`). You will see a live preview of your frontpage while doing so.

As Ghostwriters uses a primary and a secondary color and Ghost currently only supports to configure one of them through the UI, the secondary color is automatically calculated based on what you have selected as primary color. This means that the colors might not be a perfect match in all cases.

If you are not happy with the secondary color you received, you can do some minor changes in `./assets/css/main.css` (close to the start of the file) to change the calculation algorithm:
```
.bg-secondary {
    filter: hue-rotate(100deg);
}
```
You can freely modify the filter property to do quite a lot of color magic in a single line of CSS. A good short introduction and demo can be found [here](https://css-tricks.com/almanac/properties/f/filter/).

Alternatively you can ignore the color picker of Ghost and hard code the colors in the theme within the same file:
```
:root {
    --color-primary: var(--ghost-accent-color);
    --color-secondary: var(--ghost-accent-color);
}
```
Instead of referencing the variable `var(--ghost-accent-color)` you can drop in a HEX code or RGB value.

## ✏️ Static texts
When you are not happy with some labels or other text elements that are hard-wired in this theme you can change them by modifying the related locales file (e.g. `./locales/en.json`). Just change the string on the right side of the colon to better suit your needs.

## 🤯 Anything you want
It is not very hard to build a theme for Ghost and it is even easier to just make minor changes to something that already matches some parts of your own vision. 

Feel free to use Ghostwriter as a start for your own project, throw out all those parts that you don't like and make them new. I would be super curious the see what people will make out of it!

# 📄 Copyright & License

Copyright © 2021 Nikolas Knickrehm - Released under the [MIT license](LICENSE).
