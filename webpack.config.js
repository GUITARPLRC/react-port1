const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression');

const webpack = require('webpack');

var inProduction = process.env.NODE_ENV === 'production';

let config = {
	devtool: inProduction ? 'hidden-source-map' : 'source-map',
	entry: {
		app: './app/index.js',
		vendor: ['react', 'material-ui']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',

				loader: 'eslint-loader',
				options: {
					emitWarning: true
				}
			},
			{ test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					'file-loader',
					'img-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							gifsicle: {
								interlaced: false
							},
							optipng: {
								optimizationLevel: 7
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							mozjpeg: {
								progressive: true,
								quality: 65
							}
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true,
		open: true,
		overlay: {
			warnings: true,
			errors: true
		},
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
		new ExtractTextPlugin('index.css'),
		new webpack.LoaderOptionsPlugin({
			minimize: inProduction
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor')
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
			text: /\.js/,
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	);
}

module.exports = config;
