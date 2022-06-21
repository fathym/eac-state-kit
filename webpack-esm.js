const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            configFile: "tsconfig.esm.json"
        },
      },
    ],
  },
  output: {
    filename: 'index.esm.js',
    // filename: '[name].bundle.js',
  },
});