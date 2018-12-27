var path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  entry: path.join(__dirname, 'client/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    /**
     * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本，若要使用 standalone 功能則需下列設定
     */
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new htmlWebpackPlugin()
  ]
}
module.exports = config