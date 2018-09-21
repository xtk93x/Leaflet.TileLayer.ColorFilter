L.TileLayerColorize = L.TileLayer.extend({
	intialize: function (url, options) {
		L.TileLayer.prototype.initialize.call(this, url, options);
	},

	colorizePresets: function () {
		var preset = this.options.colorize;
		var filterSettings = '';

		filterSettings += (preset.blur) ? `blur(${preset.blur}) ` : '';
		filterSettings += (preset.brightness) ? `brightness(${preset.brightness}) ` : '';
		filterSettings += (preset.contrast) ? `contrast(${preset.contrast}) ` : '';
		filterSettings += (preset.grayscale) ? `grayscale(${preset.grayscale}) ` : '';
		filterSettings += (preset.hue) ? `hue-rotate(${preset.hue}) ` : '';
		filterSettings += (preset.invert) ? `invert(${preset.invert}) ` : '';
		filterSettings += (preset.opacity) ? `opacity(${preset.opacity}) ` : '';
		filterSettings += (preset.saturate) ? `saturate(${preset.saturate}) ` : '';
		filterSettings += (preset.sepia) ? `sepia(${preset.sepia}) ` : '';

		return filterSettings;
	},

	/* Version 0.7.7 */
	_getTile: function () {
		var tile = L.TileLayer.prototype._getTile.call(this);
		tile.style.filter = this.colorizePresets();
		return tile;
	},

	/* Version 1.3.4 */
	createTile: function (coords, done) {
		var tile = L.TileLayer.prototype.createTile.call(this, coords, done);
		tile.style.filter = this.colorizePresets();
		return tile;
	},
})

L.tileLayerColorize = function (url, options) {
	return new L.TileLayerColorize(url, options);
}