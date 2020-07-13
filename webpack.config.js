const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    publicPath: '/public/',
    watchOptions: {
      hot: true
    }
  },
  module: {
    rules: [{ 
      test: /\.(gltf)$/, 
      use: [{
          loader: 'file-loader',
          // options: {
          //   outputPath: 'assets/models'
          // }
      }]
    }]
  }
}