//webpack config file
var path = require('path');
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
      }
  	]
  }
};