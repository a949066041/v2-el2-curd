const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const common = require('./webpack.common')
const docs = require('./docs/index')

const config = {
  mode: 'production',
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: './',
    filename: '[name].[hash:7].js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(config, common, docs)
