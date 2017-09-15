var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task("scss", function() {
    gulp.src("src/css/**/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer({
            browsers: ["last 20 versions"]
        }))
        .pipe(gulp.dest("static/css"))
})

gulp.task("watch", ["scss"], function() {
    gulp.watch("src/css/**/*", ["scss"])
})

gulp.task("default", ["watch"])
