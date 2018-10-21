const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const header = require('gulp-header');
const rename = require('gulp-rename');

gulp.task('default', () =>
	gulp.src('src/leaflet-tilelayer-colorfilter.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(header(`/*
  Leaflet.TileLayer.ColorFilter
  (c) 2018, Claudio T. Kawakani
  A simple and lightweight Leaflet plugin to apply CSS filters on map tiles.
  https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter
*/
`))
		.pipe(rename('leaflet-tilelayer-colorfilter.min.js'))
		.pipe(gulp.dest('src'))
);