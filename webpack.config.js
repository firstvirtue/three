const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    open: true,
    inline: true,
    hot: true,
    port: 3000
  },
  watch: true,
  module: {
    rules: [{ 
      test: /\.(gltf)$/, 
      use: [{
          loader: 'file-loader',
          // options: {3
          //   outputPath: 'assets/models'
          // }
      }]
    }]
  }
}