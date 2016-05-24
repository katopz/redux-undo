var path = require('path')
var webpack = require('webpack')

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    devtool: 'source-map',
    entry: [
      './index'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        }
      })
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }]
    }
  }
} else {
  module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      'webpack-hot-middleware/client',
      './index'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }]
    }
  }
}
