const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack-base.config.js');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
  },
  devtool: 'cheap-eval-source-map',
});
