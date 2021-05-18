const {
  series, watch, src, dest, parallel,
} = require('gulp')
const fs = require('fs')
const pump = require('pump')
const path = require('path')
const releaseUtils = require('@tryghost/release-utils')
const inquirer = require('inquirer')
const livereload = require('gulp-livereload')
const postcss = require('gulp-postcss')
const zip = require('gulp-zip')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const REPO = 'nknickrehm/Ghostwriter'
const CHANGELOG_PATH = path.join(process.cwd(), '.', 'changelog.md')

function serve(done) {
  livereload.listen()
  done()
}

const handleError = (done) => (err) => {
  if (err) {
    console.error(err)
  }
  return done(err)
}

function hbs(done) {
  pump([src(['*.hbs', 'partials/**/*.hbs']), livereload()], handleError(done))
}

function css(done) {
  pump(
    [
      src(
        [
          'assets/css/**/*.css',
          'node_modules/prismjs/themes/prism-okaidia.css',
          'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
        ],
        { sourcemaps: true },
      ),
      concat('ghostwriter.css'),
      postcss(),
      dest('assets/built/', { sourcemaps: '.' }),
      livereload(),
    ],
    handleError(done),
  )
}

function js(done) {
  pump(
    [
      src(
        [
          'assets/js/lib/*.js',
          'assets/js/*.js',
          'node_modules/prismjs/prism.js',
          'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
        ],
        {
          sourcemaps: true,
        },
      ),
      concat('ghostwriter.js'),
      uglify(),
      dest('assets/built/', { sourcemaps: '.' }),
      livereload(),
    ],
    handleError(done),
  )
}

function zipper(done) {
  const filename = `${
    JSON.parse(fs.readFileSync('./package.json').toString()).name
  }.zip`

  pump(
    [
      src([
        '**',
        '!node_modules',
        '!node_modules/**',
        '!dist',
        '!dist/**',
        '!yarn-error.log',
      ]),
      zip(filename),
      dest('dist/'),
    ],
    handleError(done),
  )
}

const cssWatcher = () => watch('assets/css/**', css)
const hbsWatcher = () => watch(['*.hbs', 'partials/**/*.hbs'], hbs)
const watcher = parallel(cssWatcher, hbsWatcher)

const build = series(css, js)
module.exports.build = build
module.exports.zip = series(build, zipper)
module.exports.default = series(build, serve, watcher)

module.exports.release = async () => {
  // @NOTE: https://yarnpkg.com/lang/en/docs/cli/version/
  const packageJSON = JSON.parse(fs.readFileSync('./package.json').toString())
  const newVersion = packageJSON.version

  if (!newVersion || newVersion === '') {
    console.log(`Invalid version: ${newVersion}`)
    return
  }

  console.log(`\nCreating release for ${newVersion}...`)

  const githubToken = process.env.GST_TOKEN

  if (!githubToken) {
    console.log(
      'Please configure your environment with a GitHub token located in GST_TOKEN',
    )
    return
  }

  try {
    const result = await inquirer.prompt([
      {
        type: 'input',
        name: 'compatibleWithGhost',
        message: 'Which version of Ghost is it compatible with?',
        default: '4.0.0',
      },
    ])

    const { compatibleWithGhost } = result

    const releasesResponse = await releaseUtils.releases.get({
      userAgent: 'Ghostwriter',
      uri: `https://api.github.com/repos/${REPO}/releases`,
    })

    if (!releasesResponse || !releasesResponse) {
      console.log('No releases found. Skipping...')
      return
    }

    const previousVersion = releasesResponse[0].tag_name || releasesResponse[0].name
    console.log(`Previous version: ${previousVersion}`)

    const changelog = new releaseUtils.Changelog({
      changelogPath: CHANGELOG_PATH,
      folder: path.join(process.cwd(), '.'),
    })

    changelog
      .write({
        githubRepoPath: `https://github.com/${REPO}`,
        lastVersion: previousVersion,
      })
      .sort()
      .clean()

    const newReleaseResponse = await releaseUtils.releases.create({
      draft: true,
      preRelease: false,
      tagName: `v${newVersion}`,
      releaseName: newVersion,
      userAgent: 'Ghostwriter',
      uri: `https://api.github.com/repos/${REPO}/releases`,
      github: {
        token: githubToken,
      },
      content: [`**Compatible with Ghost ≥ ${compatibleWithGhost}**\n\n`],
      changelogPath: CHANGELOG_PATH,
    })
    console.log(`\nRelease draft generated: ${newReleaseResponse.releaseUrl}\n`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
