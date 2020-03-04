const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.ts',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.ts?$/,
				loader: 'awesome-typescript-loader',
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],

	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.ts'],
	},
	devServer: {
		port: 3000,
		contentBase: './',
	},
	target: 'web',
	mode: 'development',
	watch: true,
};
