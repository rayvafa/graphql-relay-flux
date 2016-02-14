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
				loaders: ['babel-loader']
			}
		]
	}
};