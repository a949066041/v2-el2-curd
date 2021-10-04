const StylelintPlugin = require('stylelint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../components'),
      ui: path.resolve(__dirname, '../components')
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          warnings: false
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(vue)$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'not ie 11']
                    }
                  }
                ]
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                'babel-plugin-transform-vue-jsx'
              ],
              env: {
                test: {
                  plugins: [require.resolve('babel-plugin-istanbul')]
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new StylelintPlugin({
      files: [
        '**/*.css',
        '**/*.scss',
        '**/*.html',
        '**/*.vue'
      ]
    })
  ]
}
