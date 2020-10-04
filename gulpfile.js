const gulp = require('gulp'),
  sass = require('gulp-sass'),
  path = require('path'),
  moduleImporter  = require('sass-module-importer'),
  webserver = require('gulp-webserver'),
  autoprefixer = require('gulp-autoprefixer'),
  buffer = require('vinyl-buffer'),
  source = require('vinyl-source-stream');

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

const config = {
  paths: {
    scssSource: './sass/',
    cssDest: './css',
  },
  root: ['./app']
};

gulp.task('styles', () => {
  return gulp.src(path.join(config.paths.scssSource, 'main.scss'))
  .pipe(sass({importer: moduleImporter(), outputStyle: 'compressed'})
  .on('error', swallowError))
  .pipe(gulp.dest(config.paths.cssDest));
});

gulp.task('serve', () => {
  gulp.src(config.root)
  .pipe(webserver({
    fallback: './app/index.html',
    livereload: true,
    open: true
  }))
  .pipe(autoprefixer({
    browsers: ['> 1%', 'last 5 versions', 'Firefox >= 20', 'iOS >=7'],
    cascade: false
  }))
  gulp.watch(path.join(config.paths.scssSource, '**/*.scss'), ['styles']);
});

gulp.task('default', ['styles', 'serve']);