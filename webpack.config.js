const path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(vendor|node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: 'es2015',
      },
    }]
  },
  entry: {
    application: "./src/index",
    demo: "./src/demo",
  },
  resolve: {
    alias: {
      soundfonts: path.join(__dirname, "soundfonts"),
    },
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].entry.js"
  }
};
