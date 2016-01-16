var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./styles/sass/style.scss')
    .pipe(sass({
       sourceMaps: true
     }))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 3 versions']
      })
    ]))
    .pipe(gulp.dest('./styles'));
});

gulp.task('default', function () {
  gulp.watch('./styles/sass/**/*.scss', ['sass'])
});

gulp.task('build', ['sass']);
