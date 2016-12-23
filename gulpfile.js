const gulp = require('gulp')
const sass = require('gulp-sass')
const ftp = require('vinyl-ftp')
const gutil = require('gulp-util')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

gulp.task('sass', () => {
  return gulp.src('./styles/sass/style.scss')
    .pipe(sass({
       sourceMaps: true
     }))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 3 versions']
      })
    ]))
    .pipe(gulp.dest('./styles'))
})

gulp.task('default', () => {
  gulp.watch('./styles/sass/**/*.scss', ['sass'])
})

gulp.task('deploy', () => {
  const remotePath = '/public_html/'
  const conn = ftp.create({
    host: 'carehr.nl',
    user: args.user,
    password: args.password,
    log: gutil.log
  })

  const files = [
    'index.php',
    'contact-form.php',
    './**/*.css',
    './styles/fonts/',
    './scripts/',
    './images/'
  ]

  gulp.src(files)
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath))
})

gulp.task('build', ['sass'])
