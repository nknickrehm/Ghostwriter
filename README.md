# The Ghostwriter Theme for Ghost 4

[![Ghost version](https://img.shields.io/badge/Ghost->=4.32.0-brightgreen)](https://github.com/TryGhost/Ghost)
[![Demo](https://img.shields.io/badge/Demo-Online-yellow.svg)](https://nikolas-knickrehm.ghost.io/)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.me/nikolasknickrehm)

> Modern, lightweight and Open Source - A perfect match for Ghost 

This page contains everything you need to set up & customize the Ghostwriter theme for your own blog.

![screenshot-desktop](https://github.com/nknickrehm/Ghostwriter/raw/main/assets/screenshot-desktop.png)

# 📺 Demo
[My personal blog](https://nikolas-knickrehm.ghost.io) is using the latest version of the Ghostwriter theme. 

On [this](https://nikolas-knickrehm.ghost.io/test-page/) hidden page you can experience most content types available in Ghost in action.

# 🔥 Features
* Developed for the most recent version of Ghost (>=4.32.X)
* Fully responsive (Smartphone, Tablet & Desktop)
* Automatic dark mode ([browser support](https://caniuse.com/?search=prefers-color-scheme))
* Custom color scheme via the Ghost Admin UI for regular and dark mode
* Multi-language support
* Link your own social media accounts
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
| Spanish  | es   | 100%   | @manusobles |

# 🙏 Why is my language not supported?
Unfortunately I am only fluid in two languages, so I am relying on others to add more translations in the future. If you can spare a few minutes, your help would be greatly appreciated!

All you need to do is create a little pull request containing a translation file (less than 30 phrases). You can just copy the file `./locales/en.json` to `./locales/{your language code}.json` ([list of language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) and add the translated values on the right-hand side of the colons like this:
```
"This would be super awesome of you!": "Das wäre mega stark von dir!",
```

# 🚀 Set up the Ghostwriter theme
The easiest way to set up the theme is by downloading the [latest release](https://github.com/nknickrehm/Ghostwriter/releases/latest) of Ghostwriter and uploading the Zip file to your Ghost blog (`Settings` -> `Theme` -> `Upload a theme`).

# ⚙️ Customization
You have a lot of options to customize the theme. Since everything is Open Source you can modify the theme however you like. I am very curious what people will make out of it so definitely show me your variation of it!

Every customization involving code changes require you to clone the repository and setup [Node.js 14](https://nodejs.org/en/download/) + [Yarn](https://classic.yarnpkg.com/en/docs/install/). After that you must issue the command `yarn install` so that all the dependencies are set up automatically for you.

After you have made your changes you can build the theme with the command:
```
NODE_ENV=production yarn zip
```
This will output the theme Zip file in `./dist/ghostwriter.zip`.

## 🔗 Social media
You can link social media accounts using the Ghost Admin UI. Currently, the Ghostwriter supports links to
* Twitter
* Github
* LinkedIn
* Xing

If you want to link more/other sites you can build the theme yourself after changing `./partials/social-links.hbs` or open up an issue in this repository. I will see what I can do to help you then. The links will only be visible on your website after you have entered the URLs in the Ghost Admin UI.
## 🌈 Colors
Another simple way to customize the theme without writing or changing **any** code at all is by selecting the `Accent color` and `Secondary color` in the Ghost Admin UI (`Settings` -> `Design` -> `Brand` / `Site-wide`). You will see a live preview of your frontpage while doing so. You will also need to specify the colors for the dark mode.

## ✨ Syntax Highlighting
When you want to embed code snippets in a post or page, you need to inject a JS file including the language's configuration for Prism. I usually do this within the post itself to not stack up too many imports that are only used on a few pages. 

At the end of your post you can add an HTML card and paste in a script tag for every programming language you have been writing a snippet for. [Cdnjs](https://cdnjs.com/libraries/prism) is hosting these JS files so you can just copy and paste the script tags from them.
```
<!-- e.g. for TypeScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-typescript.min.js" integrity="sha512-9CvArJQPTJqAXN0HJ9DrggF3yNXh09H/pDkKya7eo7Csk2ZisKOiTdJthVFPKyNc3M0m9ofpgfDwGei0V7pgJw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## ✏️ Static texts
When you are not happy with some labels or other text elements that are hard-wired in this theme you can change them by modifying the related locales file (e.g. `./locales/en.json`). Just change the string on the right side of the colon to better suit your needs.

## 🤯 Anything you want
It is not very hard to build a theme for Ghost and it is even easier to just make minor changes to something that already matches some parts of your own vision. 

Feel free to use Ghostwriter as a start for your own project, throw out all those parts that you don't like and make them new. I would be super curious the see what people will make out of it!

# 📄 Copyright & License

Copyright © 2021 Nikolas Knickrehm - Released under the [MIT license](LICENSE).
