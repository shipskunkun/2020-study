module.exports = {
	entry: './src/index.js',
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		},{
			test: /\.scss$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'sass-loader'
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	},
	output: {
		path: __dirname,
		filename: './dist/index.js'
	}
}
