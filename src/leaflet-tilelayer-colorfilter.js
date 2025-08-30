/*
  Leaflet.TileLayer.ColorFilter
  (c) 2018-2025, Claudio T. Kawakani
  A simple and lightweight Leaflet plugin to apply CSS filters on map tiles.
  https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter
*/

import { TileLayer } from 'leaflet';

export class TileLayerColorFilter extends TileLayer {
    constructor(url, options) {
        super(url, options);
    }

    colorFilter() {
        let VALIDFILTERS = [
            'blur:px',
            'brightness:%', 'bright:brightness:%', 'bri:brightness:%',
            'contrast:%', 'con:contrast:%',
            'grayscale:%', 'gray:grayscale:%',
            'hue-rotate:deg', 'hue:hue-rotate:deg', 'hue-rotation:hue-rotate:deg',
            'invert:%', 'inv:invert:%',
            'opacity:%', 'op:opacity:%',
            'saturate:%', 'saturation:saturate:%', 'sat:saturate:%',
            'sepia:%', 'sep:sepia:%',
        ]

        let colorFilterOptions = this.options.filter ? this.options.filter : [];
        let filterSettings = colorFilterOptions.map((opt) => {
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
    }

    onAdd(map) {
        super.onAdd(map);
        this._container.style.filter = this.colorFilter();
    }

    updateFilter(newFilter) {
        this.options.filter = newFilter;
        if (this._container) {
            this._container.style.filter = this.colorFilter();
        }
    }
}