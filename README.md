# Leaflet.TileLayerColorize
A simple and lightweight Leaflet plugin to apply CSS filters on map tiles.

# Basic Usage
    var map = L.map('map').setView([51.505, -0.09], 14);
    
    var colorSettings = {
      blur: '0px',
      brightness: '100%',
      contrast: '100%',
      grayscale: '0%',
      hue: '0deg',
      opacity: '100%',
      invert: '0%',
      saturate: '100%',
      sepia: '0%'
    }

    L.tileLayerColorize('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	    colorize: colorSettings
    }).addTo(map);
    
# Reference

#### L.tileLayerColorize(url, options)

The only difference between L.tileLayerColorize and the original L.tileLayer is the new option `colorize`. 
`colorize` accepts an object with the following attributes:
 - **blur**: applies a Gaussian blur filtering measured in pixels, e.g., `{ blur: '2px' }`. Default: `'0px'`.
