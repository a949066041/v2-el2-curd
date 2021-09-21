const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const md = require('./markdown')

const config = {
  mode: 'development',
  entry: {
    app: './examples/index.js'
  },
  resolve: {
    mainFiles: ['index'],
    alias: {
      '@': path.resolve(__dirname, '/examples'),
      ui: path.resolve(__dirname, './components')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.md']
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }]
    }
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['vue-loader', {
          loader: 'vue-antd-md-loader',
          options: Object.assign(md, { wrapper: 'div', raw: true })
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: '/examples/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new WebpackBar()
  ]
}

module.exports = merge(config, common)
