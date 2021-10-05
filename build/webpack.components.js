const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

const glob = require('glob')
const list = {}

async function mapComponents(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  for (const file of files) {
    const component = file.split(/[/.]/)[4]
    list[component] = `${file}`
  }
}

mapComponents('./components/lib', list)

const components = {
  mode: 'production',
  entry: list,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: '[name].umd.js',
    library: 'mx',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    mainFiles: ['index'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.md'],
    modules: ['node_modules']
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
    'element-ui': {
      root: 'element-ui',
      commonjs: 'element-ui',
      commonjs2: 'element-ui',
      amd: 'element-ui'
    }
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
