var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');

function sass () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

function watch () {
  gulp.watch('./src/sass/**/*.scss', sass);
}

function server () {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
}

var build = gulp.series(sass);

gulp.task('build', build);
gulp.task('watch', watch);
gulp.task('default', build);
