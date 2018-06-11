const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './example/npm/index.js',
  output: {
    path: path.resolve('example/npm/dist'),
    filename: 'vc-mask.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  mode: 'development'
}
