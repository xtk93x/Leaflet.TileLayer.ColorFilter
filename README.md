# Leaflet.TileLayer.ColorFilter
A simple and lightweight Leaflet plugin to apply CSS color filter on map tiles.

![sidebyside](https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter/blob/master/samples/sidebyside.png)

## Demo
- [Leaflet.TileLayer.ColorFilter Demo](https://xtk93x.github.io/Leaflet.TileLayer.ColorFilter/)

# Basic Usage
```js
let map = L.map('map').setView([51.505, -0.09], 14);

let myFilter = [
    'blur:0px',
    'brightness:95%',
    'contrast:130%',
    'grayscale:20%',
    'hue:290deg',
    'opacity:100%',
    'invert:100%',
    'saturate:300%',
    'sepia:10%',
];

L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: myFilter,
}).addTo(map);
```
Note: import leaflet-tilelayer-colorfilter.min.js **after** leaflet:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/leaflet.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/leaflet.css" />

<script src="leaflet-tilelayer-colorfilter.min.js"></script>
```
    
# Reference

#### L.tileLayer.colorFilter(url, options)

The L.tileLayer.colorFilter is a simple extension of the original L.tileLayer that includes a new option `filter` inside `options` parameter. 

`filter` accepts an array of string filters with the following format:

| Filter | Aliases | Description | Example | Default |
| --- | --- | --- | --- | --- |
| **Blur** | blur | Applies a Gaussian blur filtering measured in pixels |  `['blur:2px']` | 0px |
| **Brightness** | brightness, bright | Controls the brightness of tile image |  `['brightness:150%']` | 100% |
| **Contrast** | contrast, con | Changes the color contrast of tiles |   `['contrast:150%']` | 100% |
| **Grayscale** | grayscale, gray | Changes the color of tiles to a grayscale |  `['grayscale:100%']` | 0% |
| **Hue-Rotate** | hue-rotate, hue-rotation, hue | Applies a hue rotation in degrees on tile colors | `['hue:180deg']` | 0deg |
| **Opacity** | opacity, op | Defines the opacity of the tiles | `['opacity:60%']` | 100% |
| **Invert** | invert, inv | Invert the tile colors | `['invert:100%']` | 0% |
| **Saturate** | saturate, saturation, sat | Saturates the tile colors | `['saturate:150%']` | 100% |
| **Sepia** | sepia, sep | Converts the tile colors to sepia | `['sepia:0%']` | 0% |
 
# Useful Tips
**The following settings is enough to make most of the light maps to become dark:**

```js
let myFilter = [
     'grayscale:100%',
     'invert:100%',
]
```
![dark](https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter/blob/master/samples/dark.png)

**To keep water and street colors, a hue rotation around 180deg is very helpful to correct the color inversion:**

```js
let myFilter = [
     'hue:180deg',
     'invert:100%',
]
```
![dark-colorized](https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter/blob/master/samples/dark-colorized.png)
    
**Light maps may also look good:**

```js
let myFilter = [
     'brightness:110%',
     'hue:90deg',
     'saturate:120%',
]
```
![colorized](https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter/blob/master/samples/colorized.png)

**The filter order matters:**

```js
let leftColoFilter = [
    'invert:100%',
    'brightness:115%',
    'hue:186deg',
]

let rightColorFilter = [
    'hue:186deg',
    'brightness:115%',
    'invert:100%',
]
```
![filterorder](https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter/blob/master/samples/filterorder.png)

# Changelog
## 2018.09.24
- Plugin renamed to Leaflet.TileLayer.ColorFilter.

## 2018.09.23
- Changed from object to array of strings, because the filter order matters. Moreover, the same filter can be used more than once.

## 2018.09.20
- Plugin created.
