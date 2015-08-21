var gulp = require('gulp');
var rev = require('gulp-rev');
var inject = require('gulp-inject');
var gulpif = require('gulp-if');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

// css
var stylus = require('gulp-stylus');
var minifyCss = require('gulp-minify-css');

// javascript
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('build', ['clean'], function () {
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

  var cssStream = gulp.src('client/stylus/**/*.styl')
    .pipe(stylus())
    .pipe(gulpif((process.env.NODE_ENV == 'production'), minifyCss()))
    .pipe(gulpif((process.env.NODE_ENV == 'production'), rev()))
    .pipe(gulp.dest('dist/css'));

  return gulp.src('client/index.html')
    .pipe(inject(cssStream, {
      ignorePath: 'dist'
    }))
    .pipe(inject(jsStream, {
      ignorePath: 'dist',
      transform: function(filepath) {
        return '<script src="' + filepath + '" async></script>';
      }
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('serve', ['default'], function (cb) {
  browserSync.init(null, {
    proxy: "http://localhost:7000/",
    port: 4000,
    open: false
  });
  gulp.watch('client/**/*.styl', ['build', browserSync.reload]);
  gulp.watch('client/**/*.jsx', ['build', browserSync.reload]);

  var called = false;
  return nodemon({
      script: 'index.js',
      ignore: ['./node_modules/**']
    })
    .on('start', function onStart() {
      if (!called) {
        cb();
      }
      called = true;
    });
});

gulp.task('clean', function () {
  del([
    'dist'
  ]);
});

gulp.task('default', ['build']);
