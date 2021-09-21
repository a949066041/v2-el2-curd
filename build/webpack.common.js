const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
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
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
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
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
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
      // {
      //   test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
      //   loader: 'url-loader',
      //   query: {
      //     limit: 10000,
      //     name: path.posix.join('static', '[name].[hash:7].[ext]')
      //   }
      // }
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
