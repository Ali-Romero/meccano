const { src, dest } = require('gulp')
const gulpif = require('gulp-if')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const gcmq = require('gulp-group-css-media-queries')

sass.compiler = require('node-sass')

const config = {
  includePaths: ['node_modules']
}

const production = process.env.NODE_ENV === 'production'

module.exports = function() {
  return src('source/sass/*.sass')
    .pipe(sass(config).on('error', sass.logError))
    .pipe(gcmq())
    .pipe(gulpif(production, cssmin()))
    .pipe(gulpif(production, rename({ suffix: '.min' })))
    .pipe(dest('dest/css'))
}
