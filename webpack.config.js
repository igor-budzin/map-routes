const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: {
		app: [
			path.resolve(__dirname, './client/src/index.js'),
			'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
		]
	},
	output: {
		path: path.resolve(__dirname, './client/dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	mode: 'development',
	devtool: 'eval',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			},
			{
				test: /\.less$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'less-loader', options: {javascriptEnabled: true}}
				]
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				use: 'url-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './client/src/assets/index.html'),
			filename: 'index.html',
			path: path.resolve(__dirname, './client/dist')
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
		// new LiveReloadPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, './client/dist'),
		port: 3000,
		historyApiFallback: true,
		inline: true,
		hot: true
	}
};