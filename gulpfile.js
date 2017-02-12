'use strict'

const path = require('path')
const gulp = require('gulp')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const browserify = require('browserify')
const autoprefixer = require('autoprefixer')
const runSequence = require('run-sequence')
const source = require('vinyl-source-stream')
const loadPlugins = require('gulp-load-plugins')

const plugins = loadPlugins()

let env = 'production'
let dest = './dist'

const browsers = [
  'last 2 versions',
  'ie > 10'
]

gulp.task('js', () => {
  let bundler = browserify({
    entries: './src/scripts/main.js'
  })
    .transform('babelify', {
      presets: [
        ['env', {
          targets: { browsers }
        }]
      ]
    })

  if (env === 'production') {
    bundler = bundler.transform({ global: true }, 'uglifyify')
  }

  return bundler.bundle()
    .on('error', err => {
      plugins.utils.log('Error : ' + err.message)
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(path.join(dest, 'js')))
})

gulp.task('lint', () => {
  return gulp.src(['./src/scripts/*.js', './*.js'])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.if(env === 'production', plugins.eslint.failAfterError()))
})

gulp.task('sass', () => {
  return gulp.src(['./src/styles/style.scss'])
    .pipe(
      plugins.sass({
        outputStyle: env === 'production' ? 'compressed' : 'expanded'
      })
        .on('error', plugins.sass.logError)
    )
    .pipe(plugins.postcss([autoprefixer({ browsers })]))
    .pipe(gulp.dest(path.join(dest, 'css')))
})

gulp.task('images', () => {
  gulp.src('./src/images/*.{png,jpg}')
    .pipe(plugins.imagemin([imageminMozjpeg(), imageminPngquant()]))
    .pipe(gulp.dest(path.join(dest, 'images')))
})

gulp.task('php', () => {
  gulp.src('./src/*.php')
    .pipe(gulp.dest(dest))
})

gulp.task('serve', plugins.shell.task('php -S localhost:8081', {
  cwd: path.resolve(dest)
}))

gulp.task('build', ['php', 'sass', 'images', 'js', 'lint'])

gulp.task('watch', () => {
  gulp.watch('./src/styles/**/*.css', ['sass'])
  gulp.watch('./src/scripts/**/*.js', ['js', 'lint'])
  gulp.watch('./src/images/**', ['images'])
  gulp.watch('./src/*.php', ['php'])
})

gulp.task('default', callback => {
  dest = './.tmp'
  env = 'development'

  runSequence(
    ['php', 'sass', 'images', 'js', 'watch', 'serve', 'lint'],
    callback
  )
})
