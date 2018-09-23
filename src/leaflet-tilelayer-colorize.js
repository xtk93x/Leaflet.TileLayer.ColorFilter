L.TileLayerColorize = L.TileLayer.extend({
	intialize: function (url, options) {
		L.TileLayer.prototype.initialize.call(this, url, options);
	},

	colorizePresets: function () {
		let VALIDFILTERS = [
			'blur',
			'brightness', 'bright:brightness',
			'contrast',
			'grayscale', 'gray:grayscale',
			'hue-rotate', 'hue:hue-rotate', 'hue-rotation:hue-rotate',
			'invert', 'inv:invert',
			'opacity',
			'saturate', 'saturation:saturate',
			'sepia'
		]

		let colorizeOptions = this.options.colorize;
		let filterSettings = colorizeOptions.map((opt) => {
			let filter = opt.toLowerCase().split(':');
			if (filter.length === 2) {
				let match = VALIDFILTERS.find(vf => {
					return (vf.split(':')[0] === filter[0]);
				});
				if (match) {
					match = match.split(':');
					return (`${match[match.length - 1]}(${filter[1]})`);
				}
			}
			return ('');
		}).join(' ');
		return (filterSettings);
	},
	/* Version 1.3.4 */
	createTile: function (coords, done) {
		let tile = L.TileLayer.prototype.createTile.call(this, coords, done);
		tile.style.filter = this.colorizePresets();
		return tile;
	},
	/* Version 0.7.7 */
	_getTile: function () {
		let tile = L.TileLayer.prototype._getTile.call(this);
		tile.style.filter = this.colorizePresets();
		return tile;
	},
})

L.tileLayerColorize = function (url, options) {
	return new L.TileLayerColorize(url, options);
}