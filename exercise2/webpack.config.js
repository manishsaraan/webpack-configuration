const path = require('path');
const HtmlWebpckPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry  : {
		app : './src/index',
		print : './src/print'
	},
	output : {
		filename : '[name].bundle.js',
		path: path.resolve(__dirname , 'dist')
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
	   new CleanWebpackPlugin(['dist']),
       new HtmlWebpckPlugin({
       	title : 'output'
       })
	]
}