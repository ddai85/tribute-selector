const webpack = require('webpack');
var SRC_DIR = __dirname + '/client/src';
var DIST_DIR = __dirname + '/client/dist';

module.exports = {
  entry: {
    main: `${SRC_DIR}/index.js`
  },
  output: {
    filename: 'main.bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SRC_DIR,
        exclude: /node_modules/,
        loader : 'babel-loader'
      },
      {
        test : /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
         test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
       test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader? limit=10000&mimetype=application/font-woff'
       },
       {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
       },
       {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
        },
        {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
       }
    ]
  }
};
