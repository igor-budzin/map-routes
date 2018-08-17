global.Promise = require('bluebird');

const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
	entry: {
		main: [
			path.resolve(__dirname, './client/index.js'),
			'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
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
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"]
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{loader: "css-loader"}, {loader: "less-loader", options: {javascriptEnabled: true}}]
				}) 
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader"]
				})
			},
			{	
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				exclude: /node_modules/,
				use: 'url-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './shared/assets/index.html'),
			filename: 'index.html',
			path: path.resolve(__dirname, './dist')
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({ filename: "[name].css" }),
		new webpack.DefinePlugin({
			"process.env": {
				BROWSER: JSON.stringify(true)
			}
		}),
		new AssetsPlugin({path: path.join(__dirname, 'etc')})
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		port: 3000,
		historyApiFallback: true,
		inline: true,
		hot: true
	}
};