const path = require('path');

module.exports = {
	entry  : './src/index',
	output : {
		filename : 'bundle.js',
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
	}
}