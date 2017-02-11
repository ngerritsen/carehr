const gulp = require('gulp')
const sass = require('gulp-sass')
const gutil = require('gulp-util')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const uglify = require('gulp-uglify')

gulp.task('sass', () => {
  return gulp.src('./styles/sass/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 3 versions']
      })
    ]))
    .pipe(gulp.dest('./'))
})

gulp.task('js', () => {
  return gulp.src('./scripts/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./'))
})

gulp.task('default', () => {
  gulp.watch('./styles/sass/**/*.scss', ['sass'])
  gulp.watch('./styles/scripts/**/*.js', ['js'])
})

gulp.task('build', ['sass', 'js'])
