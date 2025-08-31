import terser from '@rollup/plugin-terser';

const banner = `/*!
  Leaflet.TileLayer.ColorFilter
  (c) 2018-${new Date().getFullYear()}, Claudio T. Kawakani
  A simple and lightweight Leaflet plugin to apply CSS filters on map tiles.
  https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter
*/`;

export default [
  {
    input: 'src/leaflet-tilelayer-colorfilter.js',
    output: {
      file: 'dist/leaflet-tilelayer-colorfilter.min.js',
      format: 'es',
      sourcemap: false,
      banner: banner,
    },
    external: ['leaflet'],
    plugins: [
      terser({
        format: {
          comments: /^!|@preserve|@license|@cc_on/i,
        },
      }),
    ],
  },
  {
    input: 'src/leaflet-tilelayer-colorfilter.js',
    output: {
      file: 'dist/leaflet-tilelayer-colorfilter-global.min.js',
      format: 'umd',
      sourcemap: false,
      globals: {
        leaflet: 'L',
      },
      banner: banner,
    },
    external: ['leaflet'],
    plugins: [
      terser({
        format: {
          comments: /^!|@preserve|@license|@cc_on/i,
        },
      }),
    ],
  },
];


