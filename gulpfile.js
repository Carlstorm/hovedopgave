const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile sass
function style() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
            proxy: "localhost/Sterkperker",
            port: 8000  
        });

    gulp.watch('./scss/*.scss', style);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/**/*.js').on('change', browserSync.reload);
    gulp.watch('.*.js').on('change', browserSync.reload);
    gulp.watch('./css/*.css').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;