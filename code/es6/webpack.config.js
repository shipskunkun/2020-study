module.exports = {
	entry: './src/index.js',
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	},
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	}
}