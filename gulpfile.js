// Sass configuration
const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function(cb) {
  gulp
    .src('less/styles.less')
    .pipe(less())
    .pipe(
      gulp.dest(function(f) {
        return 'build/css';
      })
    );
  cb();
});

const lessWatch = gulp.series('less', function(cb) {
  gulp.watch('less/*.less', gulp.series('less'));
  cb();
});

gulp.task(
  'watch-less',
  lessWatch
);