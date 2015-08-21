var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var inject = require('gulp-inject');
var gulpif = require('gulp-if');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('build', function () {
  var jsStream = browserify({
    entries: 'client/jsx/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(
      gulpif(
        (process.env.NODE_ENV == 'production'),
        source('bundle.min.js'),
        source('bundle.js')
      )
  )
  .pipe(gulpif((process.env.NODE_ENV == 'production'), buffer()))
  .pipe(gulpif((process.env.NODE_ENV == 'production'), uglify()))
  .pipe(gulpif((process.env.NODE_ENV == 'production'), rev()))
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
