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

The only difference between L.tileLayerColorize and the original L.tileLayer is the new option `colorize` inside `options` parameter. 

`colorize` accepts an object with the following attributes:
 - **blur**: applies a Gaussian blur filtering measured in pixels, e.g., `{ blur: '2px' }`. Default: `'0px'`.
 - **brightness**: controls the brightness of tile image, e.g., `{ brightness: '150%' }`. Default `100%`.
 - **contrast**: changes the color contrast of tiles, e.g., `{ contrast: '120%' }`. Default `100%`.
 - **grayscale**: changes the color of tiles to a grayscale, e.g., `{ grayscale: '100%' }`. Default `0%`.
 - **hue**: applies a hue rotation in degrees on tile colors, e.g., `{ hue: '30deg' }`. Default `0deg`.
 - **opacity**: defines the opacity of the tiles, e.g., `{ opacity: '90%' }`. Default `100%`.
 - **invert**: invert the tile colors, e.g., `{ invert: '100%' }`. Default `0%`.
 - **saturate**: saturates the tile colors, e.g., `{ saturate: '130%' }`. Default `100%`.
 - **sepia**: converts the tile colors to sepia, e.g., `{ sepia: '100%' }`. Default `0%`.
 
 # Fast all in one file example
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/leaflet.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/leaflet.css" />
    <script src="lib/leaflet-tilelayer-colorize.js"></script>
    <div id="map"></div>
    <style> 
        body { margin: 0; }
        #map { height: 100vh; }
    </style>

    <script>
        var map = L.map('map').setView([51.505, -0.09], 14);

        var colorSettings = {
            grayscale: '100%',
            invert: '100%',
        }

        var colorizedTile = L.tileLayerColorize('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            colorize: colorSettings
        });

        colorizedTile.addTo(map);
    </script>
