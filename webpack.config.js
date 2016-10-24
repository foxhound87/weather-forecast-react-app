/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-import');

const loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
}, {
  test: /\.less$/,
  loader: 'style-loader!css-loader!less-loader',
}, {
  test: /\.global\.css$/,
  loader: 'style-loader!css-loader!postcss-loader',
}, {
  test: /^((?!\.global).)*\.css$/,
  loaders: [
    'style-loader',
    ['css-loader?modules',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]']
    .join('&'),
    'postcss-loader',
  ],
}];

const postcss = $webpack => [
  postcssImport({ addDependencyTo: $webpack }),
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('.', 'src', 'main.jsx'),
  resolve: {
    root: path.resolve('.', 'src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      react: path.resolve('.', 'node_modules', 'react'),
    },
  },
  output: {
    path: path.resolve('.', 'build'),
    filename: '[name].js',
    publicPath: '',
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'bluebird',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
    }),
  ],
  module: { loaders },
  postcss,
};
