L.TileLayerColorize = L.TileLayer.extend({
	intialize: function (url, options) {
		L.TileLayer.prototype.initialize.call(this, url, options);
	},

	colorizePresets: function () {
		let VALIDFILTERS = [
			'blur:px',
			'brightness:%', 'bright:brightness:%',
			'contrast:%',
			'grayscale:%', 'gray:grayscale:%',
			'hue-rotate:deg', 'hue:hue-rotate:deg', 'hue-rotation:hue-rotate:deg',
			'invert:%', 'inv:invert:%',
			'opacity:%',
			'saturate:%', 'saturation:saturate:%',
			'sepia:%'
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
					filter[1] += /^\d+$/.test(filter[1]) ? match[match.length - 1] : ''
					return (`${match[match.length - 2]}(${filter[1]})`);
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