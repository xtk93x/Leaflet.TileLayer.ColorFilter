import terser from '@rollup/plugin-terser';

export default {
  input: 'src/leaflet-tilelayer-colorfilter.js',
  output: {
    file: 'dist/leaflet-tilelayer-colorfilter.min.js',
    format: 'es',
    sourcemap: true,
  },
  external: ['leaflet'],
  plugins: [
    terser({
      format: {
        comments: (node, comment) => {
          const text = comment.value;
          const type = comment.type;
          if (type === 'comment2') { // multiline comment
            return /Leaflet.TileLayer.ColorFilter/i.test(text);
          }
          return false;
        },
      },
    }),
  ],
};

