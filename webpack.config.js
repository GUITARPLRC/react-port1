const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

var inProduction = process.env.NODE_ENV === 'production';

let config = {
	devtool: 'cheap-eval-source-map',
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: ['style-loader', 'css-loader'] },
			{ test: /\.(gif|png|jpe?g|svg)$/i, loaders: ['file-loader?limit=10000', 'img-loader'] }
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: inProduction
		})
	]
};

if (inProduction) {
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false
			},
			mangle: {
				screw_ie8: true
			},
			output: {
				comments: false,
				screw_ie8: true
			}
		}),
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	);
}

module.exports = config;
