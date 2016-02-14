module.exports = {

	entry: {
		main: [
			'./public/js/app.js'
		]
	},

	output: {
		filename: './public/bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['./babelRelayPlugin']
				}
			}
		]
	}
};