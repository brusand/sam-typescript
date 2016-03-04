'use strict';

var config = require('./project.config');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
var OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
var MinChunkSizePlugin = require('webpack/lib/optimize/MinChunkSizePlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = function buildWebpackConfig(settings) {
  var profile = Object.assign(config.app, settings.profile);
  var output = config.output[settings.output];
  var production = settings.output === 'prod';
  var options = {
    entry: [config.src.ts, config.src.scss],
    output: {
      filename: output.js,
      path: output.directory
    },
    resolve: {
      root: __dirname,
      extensions: ['', '.ts', '.js', '.json', '.scss']
    },
    module: {
      preLoaders: [],
      loaders: [
        {
          test: /\.ts$/,
          loader: 'ng-annotate!ts'
        },
        {
          test: /locale\..*\.json$/,
          loader: 'file?name=assets/locales/[name].[ext]?[hash]'
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
          test: /\.html$/,
          loader: 'html'
        }, {
          test: /\.(ttf|eot|svg|woff2?)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url?name=assets/fonts/[name].[ext]?[hash]&limit=10000'
        }, {
          test: /\.(jpg|png)$/,
          loader: 'url?name=assets/images/[name].[ext]?[hash]&limit=10000'
        }

      ]
    },
    devServer: {
      proxy: {
        '/api*': {
          target: 'https://10.192.224.121:8083',
          secure: false
        }
      }
    },
    plugins: [],
    node: {
      fs: "empty"
    }
  };
  options.module.preLoaders.push({
    test: /\.ts$/,
    loader: 'tslint'
  });
  options.tslint = {
    emitErrors: false,
    failOnHint: false
  };
  options.postcss = function () {
    return [autoprefixer];
  };
  options.plugins.push(new DefinePlugin(profile));
  options.plugins.push(new ExtractTextPlugin(output.css));
  options.plugins.push(new HtmlWebpackPlugin({
    template: '!!html!' + config.src.html,
    inject: 'body',
    hash: true
  }));

  if (production) {
    // This plugin looks for similar chunks and files
    // and merges them for better caching by the user
    options.plugins.push(new DedupePlugin());

    // This plugins optimizes chunks and modules by
    // how much they are used in your app
    options.plugins.push(new OccurenceOrderPlugin());

    // This plugin prevents Webpack from creating chunks
    // that would be too small to be worth loading separately
    options.plugins.push(new MinChunkSizePlugin({
      minChunkSize: 51200 // ~50kb
    }));

    // This plugin minifies all the Javascript code of the final bundle
    options.plugins.push(new UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false // Suppress uglification warnings
      }
    }));
  }
  return options;
};
