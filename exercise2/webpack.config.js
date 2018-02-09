const path = require('path');
const HtmlWebpckPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry  : {
		app : './src/index',		
	},
	output : {
		filename : '[name].bundle.js',
		path: path.resolve(__dirname , 'dist'),
		publicPath : '/'
	},
	devtool : 'inline-source-map',
	devServer : {
		contentBase : './dist/', //tell webpack to serve files from dist directory
		hot: true //setting up hot module reload
	},
	module : {
		rules : [
			{
	          test : /\.css$/,
	          use : ['style-loader', 'css-loader']
			},
			{
				test : /\.(png|jpg|jpeg|svg)$/,
				use : ['file-loader']
			},
			{
				test : /\.(csv|tsv)$/,
				use : ['csv-loader']
			},
			{
				test : /\.xml$/,
				use : ['xml-loader']
			}
		]
	},
	plugins : [
	   new CleanWebpackPlugin(['dist']), //clean directory plugin
       new HtmlWebpckPlugin({
       	title : 'output'
       }), //modify index.html plugin
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin()
	]
}