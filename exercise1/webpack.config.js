//webpack config file
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry : './src/index.js',
  output : {
  	path : path.resolve(__dirname + '/dist'),
  	filename : 'bundle.js'
  },
  module : {
  	loaders : [
      {
      	test: /\.js$/,
        loader : 'babel-loader',
        exclude : /node_modules/,
        query : {
        	presets : ['es2015']
        }
      },
      {
        test : /\.css$/,
        loaders :ExtractTextPlugin.extract('css-loader')
      }
  	]
  },
  plugins : [
   new ExtractTextPlugin('style.css')
  ]
};