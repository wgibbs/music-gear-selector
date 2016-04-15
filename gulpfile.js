'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

var paths = {
  styles: ['./app/sass/app.sass'],
  root: ['./app']
};

gulp.task('sass', function(){
  return gulp.src(paths.styles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'))
});

gulp.task('webserver', function(){
  gulp.src(paths.root)
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true
    }));
});

gulp.task('default', ['sass', 'webserver']);
