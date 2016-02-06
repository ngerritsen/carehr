var gulp = require('gulp');
var sass = require('gulp-sass');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var minimist = require('minimist');

var args = minimist(process.argv.slice(2));

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

gulp.task('deploy', function () {
  var remotePath = '/public_html/';
  var conn = ftp.create({
    host: 'carehr.nl',
    user: args.user,
    password: args.password,
    log: gutil.log
  });

  var files = [
    'index.php',
    'contact-form.php',
    './**/*.css',
    './styles/fonts/',
    './scripts/'
    './images/'
  ];

  gulp.src(files)
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});

gulp.task('build', ['sass']);
