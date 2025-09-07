# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-09-06

### Breaking Changes
- The `L.tileLayer.colorFilter()` factory has been removed. The plugin now extends `L.TileLayer` directly.
- Renamed `filter` option to `colorFilter` for clarity.
- Renamed `updateFilter()` method to `updateColorFilter()`.
- Moved the minified output files from `src/` to `dist/` to follow standard project structure.
- Dropped support for Bower.

### Changed
- Modernized build process from Gulp to Rollup and Terser.

## [1.2.5] - 2018-11

### Changed
- Improved performance, especially on mobile.

## [1.2.0] - 2018-10

### Added
- `updateFilter` function to change filters on the fly.
- Support for initializing the layer without a filter parameter.
- Published package to NPM and Bower.

### Changed
- The project was accepted into the official Leaflet plugins list.
- The plugin was renamed to `Leaflet.TileLayer.ColorFilter`.
- The filter option was changed from an object to an array of strings to respect filter order.

## [1.0.0] - 2018-09-20

### Added
- Initial release of the plugin.
