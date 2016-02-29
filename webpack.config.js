"use strict";
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const path = require("path");
const merge = require('webpack-merge');
const PATHS = {
  app: path.join(__dirname, 'examples/es6/src/main.jsx'),
  build: path.join(__dirname, 'examples/es6/public/')
};

const common  = {
    entry:  PATHS.app,
    devtool: 'source-map',
    output: {
        filename: 'resources/bundle.js',
        path: PATHS.build,
        sourceMapFilename: 'resources/[file].map'

    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', 
                query: {
                    presets: ['react', 'es2015'] //Babel transformation usually on .babelrc
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass?includePaths[]="+ path.resolve(__dirname, 'app/src/styles/')]
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    'plugins':[
      new HtmlWebpackPlugin({
        template: 'examples/es6/src/index.tpl.html',
        inject: 'body',
        filename: 'index.html'
      })
    ]
}
const TARGET = process.env.npm_lifecycle_event;

if(TARGET === 'example:es6' || !TARGET) {
  let config = {
        //Data that dev server will consume
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT || '8080'
    },
    'plugins':[
        new webpack.HotModuleReplacementPlugin()
    ]
  };
  module.exports = merge(common, config);
}
else if(TARGET === 'build') {
    module.exports = common;
}