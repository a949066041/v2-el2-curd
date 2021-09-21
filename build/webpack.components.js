const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

const components = {
  mode: 'development',
  entry: {
    index: './components/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd'
  },
  resolve: {
    mainFiles: ['index'],
    alias: {
      ui: path.resolve(__dirname, './components')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.md'],
    modules: ['node_modules']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new VueLoaderPlugin(),
    new WebpackBar()
  ]
}

module.exports = merge(components, common)
