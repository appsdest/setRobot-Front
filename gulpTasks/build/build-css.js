'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');
var rename  = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var concat  = require('gulp-concat');
var path    = require('../paths.js');

gulp.task('css-min', function() {
  return gulp.src(path.to.sass.destination + '/*.css')
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.to.sass.destination))
    .pipe(connect.reload());
});

gulp.task('css-build', function() {
  return gulp.src('./.tmp/css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest(path.to.sass.destination))
    .pipe(connect.reload());
});
