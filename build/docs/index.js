const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackBar = require('webpackbar')

const md = require('./markdown')

const path = require('path')

module.exports = {
  entry: {
    app: './examples/index.js'
  },
  resolve: {
    mainFiles: ['index'],
    alias: {
      '@': path.resolve(__dirname, '/examples'),
      '@s': path.resolve(__dirname, '/components/style')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.md']
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
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vue: {
          name: 'chunk-vue',
          test: /[\\/]node_modules[\\/]_?vue(.*)/,
          priority: 10,
          chunks: 'initial' // only package third parties that are initially dependent
        },
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // only package third parties that are initially dependent
        },
        elementUI: {
          name: 'chunk-elementUI', // split elementUI into a single package
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new OptimizeCSSAssetsPlugin({}),
    new HtmlWebpackPlugin({
      template: '/examples/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new WebpackBar()
  ]
}
