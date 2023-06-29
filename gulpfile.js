const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cssmin = require("gulp-cssmin");
const cssconcat = require("gulp-concat-css");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync");

// HTML

gulp.task("html", () => {
	return gulp
		.src("public/**/*.html")
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				removeComments: true,
			})
		)
		.pipe(gulp.dest("dist"));
});

// Styles:index

gulp.task("styles:index", () => {
	return gulp
		.src(["src/_css/*.css", "src/_css/adaptive/*.css"])
		.pipe(autoprefixer())
		.pipe(cssconcat("index.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
});

// Styles:const

gulp.task("styles:const", () => {
	return gulp
		.src("src/_css/__const/*.css")
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
});

// JavaScript

gulp.task("javascript", () => {
	return gulp.src("src/_js/**/*.js").pipe(gulp.dest("dist/js"));
});

// Media

gulp.task("media", () => {
	return gulp.src("src/_img/**/*").pipe(gulp.dest("dist/img"));
});

// Media posts

gulp.task("media:posts", () => {
	return gulp
		.src([
			"src/articles/**/*.jpg",
			"src/articles/**/*.jpeg",
			"src/articles/**/*.png",
			"src/articles/**/*.webp",
			"src/articles/**/*.avi",
		])
		.pipe(gulp.dest("dist/articles/"));
});

// Fonts

gulp.task("fonts", () => {
	return gulp.src("src/_fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

// Htaccess

gulp.task("htaccess", () => {
	return gulp.src("src/.htaccess").pipe(gulp.dest("dist/"));
});

// Watch

gulp.task("watch", () => {
	gulp.watch("public/**/*.html", gulp.series("html"));
	gulp.watch("src/**/*.css", gulp.series("styles:index", "styles:const"));
	gulp.watch("src/**/*.js", gulp.series("javascript"));
	gulp.watch(
		["src/_fonts/**/*", "src/_media/**/*"],
		gulp.series("fonts", "media")
	);
	gulp.watch("src/articles/**/*", gulp.series("media:posts"));
});

// Server

sync.create();
gulp.task("serve", () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: "dist",
		},
	});
});

// Default

gulp.task(
	"default",
	gulp.series(
		gulp.parallel(
			"html",
			"styles:index",
			"styles:const",
			"javascript",
			"fonts",
			"media",
			"htaccess",
			"media:posts"
		),
		gulp.parallel("watch", "serve")
	)
);
