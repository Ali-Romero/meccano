const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const replace = require('gulp-replace');

const options = {}

module.exports = function() {
  return gulp.src('dest/**/*')
    .pipe(replace('"/', `"${process.env.BASE_URL}`))
    .pipe(ghPages(options));
}