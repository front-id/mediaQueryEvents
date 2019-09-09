const gulp = require('gulp');
const del = require("del");
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

/**
 * Clean dist dir.
 */
function cleanTask() {
  return del(['dist']);
}

/**
 * Compress main script.
 */
function uglifyTask() {
  return gulp.src('mediaQueryEvents.jquery.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('.'));
}

/**
 * Build task.
 */
let buildTask = gulp.series(
  cleanTask,
  uglifyTask,
);

// Define tasks.
exports.build = buildTask;
exports.watch = watchTask;
