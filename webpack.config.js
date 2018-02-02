module.exports= {
	entry: './jsx/Pagination.jsx',
	output: {
		path: __dirname+'/',
		filename: 'build.js'
	},
	devServer: {
		inline: true,
		port: 7777
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node-modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react']
				}
			}
		]
	}
}