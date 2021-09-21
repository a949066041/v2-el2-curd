const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const docs = require('./docs/index')

module.exports = merge({
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }]
    }
  }
}, common, docs)
