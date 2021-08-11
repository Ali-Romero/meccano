const { src, dest } = require('gulp')
const image = require('gulp-image');
const gulpif = require('gulp-if')

const config = {}

const production = process.env.NODE_ENV === 'production'

module.exports = function() {
  return src('source/images/**/*.*')
    .pipe(gulpif(production, image(config)))
    .pipe(dest('dest/images'))
}
