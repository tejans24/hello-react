var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var inject = require('gulp-inject');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');

gulp.task('build', function () {
  var jsStream = browserify({
    entries: 'client/jsx/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(rev())
  .pipe(gulp.dest('dist/js'));

  return gulp.src('client/index.html')
    .pipe(inject(jsStream, {
      ignorePath: 'dist',
      transform: function(filepath) {
        return '<script src="' + filepath + '" async></script>';
      }
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {
  del([
    'dist'
  ]);
});

gulp.task('default', ['clean', 'build']);
