var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
// var uglify = require('gulp-uglify');
// var browserify = require('browserify');

var src = {
    scripts: 'src/js/*.js',
    images: 'src/images/*',
    styles: 'src/**/*.less',
    fonts: 'src/fonts/*',
    html: 'src/*.html'
};

var dist = 'dist/';

gulp.task('lint', function() {
    return gulp.src('src/js/script.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest(dist + 'js'));
});

gulp.task('miniCss', function() {
    return gulp.src(src.styles)
    	.pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('src'))
        .pipe(gulp.dest(dist));
})

gulp.task('imageMin', function() {
    return gulp.src(src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(dist + 'images'));
});

gulp.task('fonts', function() {
    return gulp.src(src.fonts)
        .pipe(gulp.dest(dist + 'fonts'));
});

gulp.task('html', function() {
    return gulp.src(src.html)
        .pipe(gulp.dest(dist));
});

gulp.task('watch', function() {
    gulp.watch(src.styles, ['miniCss']);
    gulp.watch(src.scripts, ['lint']);
    gulp.watch(src.images, ['imageMin']);
    gulp.watch(src.html, ['html']);
});

gulp.task('default', ['lint', 'miniCss', 'imageMin', 'fonts', 'html', 'watch']);
