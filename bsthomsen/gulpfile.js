var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var log = plugins.util.log;

var paths = {
    vendorjs: [
        './bower_components/jquery/dist/jquery.min.js',
        './scripts/*.js'
    ],
    js: [
        './Content/scripts/app/**/*module*.js',
        './Content/scripts/app/**/*.js'
    ],
    css: [
        './scss/*.css'
    ],
	dest: './wwwroot/',
}
gulp.task('css', function() {

    return gulp.src(paths.css)
    .pipe(gulp.dest(paths.dest + 'css'));

});

gulp.task('vendorjs', function () {

    return gulp.src(paths.vendorjs)
    .pipe(gulp.dest(paths.dest + 'js'));

});

gulp.task('dev', ['css', 'vendorjs'], function() {

    //return gulp.src(paths.dest + 'index.html')
    //    .pipe(plugins.inject(
    //            gulp.src([
    //                paths.dest + 'js/*.js'
    //            ]),
    //            { name: 'inject', ignorePath: 'wwwroot' })
    //    )
    //    .pipe(gulp.dest(paths.dest));

});