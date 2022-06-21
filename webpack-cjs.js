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
            configFile: "tsconfig.cjs.json"
        },
      },
    ],
  },
  output: {
    filename: 'index.cjs.js',
    // filename: '[name].bundle.js',
  },
});
